#!/usr/bin/env node
/**
 * Parses the raw markdown in `data-source/` into structured questions.
 *
 * The source files come from exam-prep documents and are not consistent:
 *   - two header conventions: `**Question**  12` and `**Question 312` / `Question 981`
 *   - three option conventions: `A. text`, `**A. text**`, `A.text` (no space), `1. text`
 *   - markdown escapes (`\.`, `\_`, `\*`, `\&`) and bold wrappers on option lines
 *   - separator lines: `---`, `**──────**`
 *   - images as inline base64 PNGs defined at the end of each file
 *
 * Any question that cannot be parsed into one coherent question with a known
 * answer count is skipped and reported in `data-source/parse-report.md`, so the
 * fix list is generated rather than hand-maintained.
 *
 * Usage: npm run parse:data
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DATA_DIR = join(ROOT, 'data-source')
const OUT_JSON = join(ROOT, 'src', 'data', 'questions.json')
const OUT_REPORT = join(DATA_DIR, 'parse-report.md')

/**
 * Matches a question header at the start of a line, in any of the conventions
 * the source files use:
 *   `**Question**  12`   bold label, number after
 *   `**Question 312**`   number inside bold
 *   `Question 981`       plain
 */
const HEADER_PATTERNS = [
  /^\*\*Question\*\*\s*(\d+)\s*$/,
  /^\*\*Question\s+(\d+)\*\*\s*$/,
  /^Question\s+(\d+)\s*$/,
]

/** Extracts the question number from a header line, or null. */
function parseHeader(line) {
  for (const pattern of HEADER_PATTERNS) {
    const match = pattern.exec(line)
    if (match) return Number(match[1])
  }
  return null
}

/**
 * Matches an option key at the start of a line: optional backslash, optional
 * bold, one of A-H, then . or ) Some questions in the source carry six
 * options (A-F), so the range goes past the usual four.
 */
const OPTION_RE = /^\s*\\?\*{0,2}([A-H])[.)]\s*/
/** Matches a stray numeric option key (`1.`) that some files use for option A */
const NUMERIC_OPTION_RE = /^\s*\\?\*{0,2}([1-4])[.)]\s/
/** Matches the "(Choose two.)" / "(Choose three.)" instruction */
const CHOOSE_RE = /\(\s*Choose\s+(two|three)\s*\.\s*\)/i
/** Matches an image reference in the body */
const IMAGE_REF_RE = /!\[([^\]]*)\]\[([^\]]+)\]/
/** Matches an inline base64 image definition */
const IMAGE_DEF_RE = /^\[([^\]]+)\]:\s*<data:image\/png;base64,([A-Za-z0-9+/=]+)>\s*$/

/** A line that is purely a separator and carries no content. */
function isSeparator(line) {
  const trimmed = line.trim()
  if (trimmed === '---' || trimmed === '----') return true
  // A run of box-drawing dashes, optionally wrapped in bold markers.
  return /^\*{0,2}\s*─{2,}\s*\*{0,2}$/.test(trimmed)
}

/** Removes markdown escape backslashes that the docx export left behind. */
function unescape(text) {
  return text.replace(/\\([.!_&*])/g, '$1')
}

/** Strips bold markers, returning the inner text. */
function stripBold(text) {
  return text.replace(/\*\*/g, '').trim()
}

/**
 * Normalises a raw option line into a key and its text.
 * Returns null when the line is not an option.
 */
function parseOptionLine(line) {
  let match = OPTION_RE.exec(line)
  let key = null
  if (match) {
    key = match[1]
  } else {
    const numeric = NUMERIC_OPTION_RE.exec(line)
    if (numeric) {
      // `1.` stands in for option A in these documents.
      key = 'ABCD'['1234'.indexOf(numeric[1])]
    }
  }
  if (!key) return null

  // Drop the key from the front of the line, then clean the remainder.
  const text = stripBold(unescape(line.replace(OPTION_RE, '').replace(NUMERIC_OPTION_RE, '')))
    .replace(/\s+/g, ' ')
    .trim()
  return { key, text }
}

/**
 * Finds the answer count declared by the question.
 */
function readChooseCount(block) {
  const chooseMatch = CHOOSE_RE.exec(block)
  return chooseMatch ? (chooseMatch[1].toLowerCase() === 'two' ? 2 : 3) : 1
}

/**
 * Splits a question block into its stem (paragraphs before the first option)
 * and its options.
 *
 * Option text may wrap onto the following lines: the source sometimes closes
 * a bold span on the next line, leaving `**D.**` on its own with the text
 * underneath. Those continuation lines are folded back into the option.
 *
 * Each option is returned as `{ key, text, marked }` where `marked` records
 * whether the answer check sits anywhere in that option's lines.
 */
function splitStemAndOptions(block) {
  const lines = block.split('\n')
  const stemLines = []
  const optionLines = []
  const diagramRefs = []
  let inOptions = false

  for (const line of lines) {
    if (!inOptions && parseOptionLine(line)) {
      inOptions = true
    }
    if (inOptions) {
      optionLines.push(line)
    } else {
      stemLines.push(line)
    }
  }

  // Collect the image references from the raw lines, before any cleaning, so a
  // reference wrapped in a bold span is still found.
  for (const line of stemLines) {
    const scan = new RegExp(IMAGE_REF_RE.source, 'g')
    let match
    while ((match = scan.exec(line)) !== null) {
      diagramRefs.push({ alt: match[1], ref: match[2] })
    }
  }

  const stem = stemLines
    .filter((line) => line.trim() && !isSeparator(line) && parseHeader(line) === null)
    .map((line) => unescape(stripBold(line)).trim())
    .filter(Boolean)
    .join('\n\n')
    // Collapse the blank lines the bold-stripping can leave behind.
    .replace(/\n{3,}/g, '\n\n')
    // The image reference may sit inside a bold span, so it survives the
    // bold-stripping and has to be pulled out here. The regex is global
    // because a question can reference more than one diagram.
    .replace(new RegExp(IMAGE_REF_RE.source, 'g'), '')

  // Group the option lines into one entry per option key.
  const groups = []
  let current = null
  for (const line of optionLines) {
    if (parseOptionLine(line)) {
      current = { key: parseOptionLine(line).key, lines: [line] }
      groups.push(current)
      continue
    }
    if (isSeparator(line)) continue
    if (!line.trim()) continue
    if (current) current.lines.push(line)
  }

  const options = groups.map((group) => {
    const joined = group.lines.join(' ')
    const marked = joined.includes('✅')
    const text = stripBold(joined)
      .replace(/✅/g, '')
      .replace(OPTION_RE, '')
      .replace(/\s+/g, ' ')
      .trim()
    return { key: group.key, text, marked }
  })

  return { stem, options, diagramRefs }
}

/**
 * Resolves image references against the inline base64 definitions found in the
 * file. A reference with no definition is reported so the question can carry a
 * placeholder in its place.
 */
function resolveImages(diagramRefs, images) {
  const found = []
  const missing = []
  for (const { alt, ref } of diagramRefs) {
    const dataUri = images.get(ref)
    if (!dataUri) {
      // The image data was stripped from the source file. Keep the question and
      // mark the slot so the app can show a placeholder in its place.
      missing.push(ref)
      continue
    }
    found.push({ alt: alt || `Question diagram ${found.length + 1}`, dataUri })
  }
  return { images: found, missing }
}

/**
 * Builds the diagram list for a question: one entry per diagram the source
 * references, each either a real image or a placeholder for one whose data was
 * stripped from the file.
 */
function buildDiagrams(resolved, missing) {
  const diagrams = resolved.map((image) => ({ ...image, available: true }))
  for (const ref of missing) {
    diagrams.push({ alt: `Diagram ${ref}`, dataUri: '', available: false })
  }
  return diagrams
}

/**
 * Validates a parsed question. Returns null when valid, or a reason string.
 */
function validate(question) {
  const { options, correct, chooseCount, stem } = question

  if (!stem) return 'no question text'

  const keys = options.map((o) => o.key)
  const unique = new Set(keys)
  if (unique.size !== keys.length) {
    const repeated = keys.filter((k, i) => keys.indexOf(k) !== i)
    return `duplicate option letter(s): ${[...new Set(repeated)].join(', ')}`
  }

  const expected = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const contiguous = expected.slice(0, keys.length)
  if (keys.length < contiguous.length || !contiguous.every((k, i) => keys[i] === k)) {
    return `option letters not contiguous from A (got ${keys.join('')})`
  }

  if (keys.length < 4 || keys.length > 6) {
    return `expected 4 to 6 options, got ${keys.length}`
  }

  const empty = options.find((o) => !o.text)
  if (empty) return `option ${empty.key} has no text`

  if (correct.length === 0) return 'no correct answer marked with ✅'
  if (correct.length !== chooseCount) {
    return `question asks for ${chooseCount} answer(s) but ${correct.length} marked`
  }

  return null
}

/** Parses one markdown file into questions plus a list of rejections. */
function parseFile(filePath) {
  const raw = readFileSync(filePath, 'utf8')
  const fileName = filePath.split('/').pop()
  const partMatch = /PART-(\d+)/.exec(fileName)
  const part = partMatch ? `PART-${partMatch[1]}` : fileName

  // Collect inline image definitions.
  const images = new Map()
  for (const line of raw.split('\n')) {
    const def = IMAGE_DEF_RE.exec(line.trim())
    if (def) images.set(def[1], `data:image/png;base64,${def[2]}`)
  }

  // Split into question blocks. Headers may be bold or plain.
  const blocks = []
  let current = null
  let currentStart = 0
  const lines = raw.split('\n')

  lines.forEach((line, index) => {
    const header = parseHeader(line)
    if (header !== null) {
      if (current) blocks.push({ text: current.join('\n'), start: currentStart })
      current = [line]
      currentStart = index + 1
    } else if (current) {
      current.push(line)
    }
  })
  if (current) blocks.push({ text: current.join('\n'), start: currentStart })

  const questions = []
  const rejected = []

  for (const block of blocks) {
    const text = block.text
    const number = parseHeader(text.split('\n')[0])

    const chooseCount = readChooseCount(text)
    const { stem, options, diagramRefs } = splitStemAndOptions(text)

    const cleanedOptions = options.map((option) => ({
      key: option.key,
      text: option.text,
    }))
    const correct = options.filter((option) => option.marked).map((option) => option.key)

    const resolved = resolveImages(diagramRefs, images)

    const question = {
      id: `${part}:${number}`,
      number,
      part,
      stem: stem.replace(/\n{3,}/g, '\n\n').trim(),
      options: cleanedOptions,
      correct,
      chooseCount,
      diagrams: buildDiagrams(resolved.images, resolved.missing),
      line: block.start,
    }

    const reason = validate(question)
    if (reason) {
      rejected.push({ file: fileName, part, number, line: block.start, reason })
    } else {
      questions.push(question)
    }
  }

  return { questions, rejected }
}

/** Main entry point. */
function main() {
  const files = readdirSync(DATA_DIR)
    .filter((name) => name.endsWith('.md') && !name.endsWith('parse-report.md'))
    .sort()

  const allQuestions = []
  const allRejected = []

  for (const name of files) {
    const { questions, rejected } = parseFile(join(DATA_DIR, name))
    allQuestions.push(...questions)
    allRejected.push(...rejected)
  }

  // Sort by original number, then by part so the order is stable.
  allQuestions.sort((a, b) => a.number - b.number || a.part.localeCompare(b.part))

  // Detect exact duplicate bodies: the same question pasted twice.
  const seen = new Map()
  const duplicates = []
  const unique = []
  for (const question of allQuestions) {
    const fingerprint = `${question.stem}|${question.options.map((o) => o.text).join('|')}`
    if (seen.has(fingerprint)) {
      const first = seen.get(fingerprint)
      duplicates.push({
        file: `${question.part}.docx.md`,
        part: question.part,
        number: question.number,
        line: question.line,
        reason: `exact duplicate of question ${first.number} at line ${first.line}`,
      })
      continue
    }
    seen.set(fingerprint, { line: question.line, number: question.number })
    unique.push(question)
  }

  const rejected = [...allRejected, ...duplicates]

  mkdirSync(dirname(OUT_JSON), { recursive: true })
  const output = unique.map(({ line, ...question }) => question)
  writeFileSync(OUT_JSON, `${JSON.stringify(output, null, 2)}\n`, 'utf8')
  // Report
  const lines = []
  lines.push('# Parse report')
  lines.push('')
  lines.push(`Generated by \`npm run parse:data\`. Do not edit by hand.`)
  lines.push('')
  lines.push(`- Questions parsed: **${unique.length}**`)
  lines.push(`- Questions skipped: **${rejected.length}**`)
  lines.push('')

  if (rejected.length === 0) {
    lines.push('All questions parsed cleanly.')
  } else {
    lines.push('## Skipped questions')
    lines.push('')
    lines.push('Each row is one question the parser refused to emit. Fix the source in')
    lines.push('`data-source/`, then re-run `npm run parse:data`.')
    lines.push('')
    lines.push('| File | Question | Line | Problem |')
    lines.push('|---|---|---|---|')
    for (const item of rejected.sort((a, b) => a.part.localeCompare(b.part) || a.number - b.number)) {
      lines.push(`| ${item.file} | ${item.number} | ${item.line} | ${item.reason} |`)
    }
  }

  lines.push('')
  writeFileSync(OUT_REPORT, `${lines.join('\n')}`, 'utf8')

  console.log(`Parsed ${unique.length} questions, skipped ${rejected.length}.`)
  console.log(`  -> ${OUT_JSON.replace(`${ROOT}/`, '')}`)
  console.log(`  -> ${OUT_REPORT.replace(`${ROOT}/`, '')}`)
  if (rejected.length) {
    console.log('')
    for (const item of rejected) {
      console.log(`  ! ${item.part} Q${item.number} (line ${item.line}): ${item.reason}`)
    }
  }
}

main()
