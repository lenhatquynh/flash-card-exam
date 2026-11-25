import 'dotenv/config'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

/**
 * Loads the parsed question bank into Postgres.
 *
 * The bank is parsed from `data-source/*.md` by `scripts/parse-questions.mjs`
 * into `src/data/questions.json`. This script copies that file into the
 * `Question` table so the browser bundle no longer has to carry it.
 *
 * The load is idempotent: every question is upserted by its stable id, so
 * running the seed twice leaves the table in the same state.
 */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const QUESTIONS_JSON = join(ROOT, 'src', 'data', 'questions.json')

type SeedQuestion = {
  id: string
  number: number
  part: string
  stem: string
  options: { key: string; text: string }[]
  correct: string[]
  chooseCount: number
  diagrams: { alt: string; dataUri: string; available: boolean }[]
}

const adapter = new PrismaPg(process.env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

async function main() {
  const questions = JSON.parse(readFileSync(QUESTIONS_JSON, 'utf8')) as SeedQuestion[]

  if (questions.length === 0) {
    throw new Error('The question bank is empty. Run `npm run parse:data` first.')
  }

  // Validate before writing anything, so a malformed bank never lands half
  // loaded in the table.
  for (const q of questions) {
    if (!q.id || !q.stem || q.options.length === 0) {
      throw new Error(`Malformed question: ${JSON.stringify(q).slice(0, 120)}`)
    }
    if (q.correct.length !== q.chooseCount) {
      throw new Error(`Question ${q.id} has ${q.correct.length} correct keys but chooseCount is ${q.chooseCount}`)
    }
    for (const key of q.correct) {
      if (!q.options.some((o) => o.key === key)) {
        throw new Error(`Question ${q.id} marks "${key}" as correct but no such option exists`)
      }
    }
  }

  const CHUNK = 50
  for (let i = 0; i < questions.length; i += CHUNK) {
    const chunk = questions.slice(i, i + CHUNK)
    await prisma.$transaction(
      chunk.map((q) =>
        prisma.question.upsert({
          where: { id: q.id },
          create: {
            id: q.id,
            number: q.number,
            part: q.part,
            stem: q.stem,
            chooseCount: q.chooseCount,
            correct: q.correct,
            options: q.options,
            diagrams: q.diagrams,
          },
          update: {
            number: q.number,
            part: q.part,
            stem: q.stem,
            chooseCount: q.chooseCount,
            correct: q.correct,
            options: q.options,
            diagrams: q.diagrams,
          },
        }),
      ),
      { timeout: 60_000 },
    )
  }

  const total = await prisma.question.count()
  const multi = await prisma.question.count({ where: { chooseCount: { gt: 1 } } })

  console.log(`seeded ${questions.length} questions`)
  console.log(`table now holds ${total} questions, ${multi} of them multi-answer`)

  if (total !== questions.length) {
    throw new Error(`Expected ${questions.length} rows but the table holds ${total}.`)
  }
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
