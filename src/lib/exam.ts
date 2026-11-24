import type { ExamAnswer, ExamConfig, ExamQuestion, ExamResult, Question } from './types'

/**
 * Draws the questions for one exam run. The order is shuffled, because an
 * exam is a simulation; study mode keeps the source order instead.
 */
export function sampleExam(questions: Question[], config: ExamConfig): ExamQuestion[] {
  const pool = [...questions]
  shuffle(pool)

  const scored = pool.slice(0, config.scoredCount)
  const survey = pool.slice(config.scoredCount, config.scoredCount + config.surveyCount)

  const all = [
    ...scored.map((q) => ({ id: q.id, scored: true })),
    ...survey.map((q) => ({ id: q.id, scored: false })),
  ]

  shuffle(all)
  return all
}

/** Fisher-Yates. */
function shuffle<T>(items: T[]): T[] {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = items[i]
    items[i] = items[j]
    items[j] = tmp
  }
  return items
}

/**
 * Grades one question. A multi-answer question is right only when the
 * selected set is exactly the correct set; there is no partial credit.
 */
export function isExactMatch(selected: string[], correct: string[]): boolean {
  if (selected.length !== correct.length) return false
  const set = new Set(selected)
  return correct.every((key) => set.has(key))
}

/** The correct keys per question id, registered when a run starts. */
export const CORRECT_BY_ID = new Map<string, string[]>()

/** Registers the correct answers for the questions in a run. */
export function loadCorrectAnswers(questions: Question[]): void {
  CORRECT_BY_ID.clear()
  for (const q of questions) CORRECT_BY_ID.set(q.id, q.correct)
}

/** Builds the stored result for a finished run. */
export function buildResult({
  config,
  questions,
  answers,
  timedOut,
  elapsedSeconds,
}: {
  config: ExamConfig
  questions: ExamQuestion[]
  answers: Record<string, ExamAnswer>
  timedOut: boolean
  elapsedSeconds: number
}): ExamResult {
  const graded = questions.map((q) => {
    const answer = answers[q.id]
    const selected = answer?.selected ?? []
    const correct = CORRECT_BY_ID.get(q.id) ?? []
    return {
      id: q.id,
      scored: q.scored,
      selected,
      correct,
      isCorrect: isExactMatch(selected, correct),
      marked: Boolean(answer?.marked),
    }
  })

  const scoredEntries = graded.filter((a) => a.scored)

  return {
    finishedAt: new Date().toISOString(),
    config,
    correct: scoredEntries.filter((a) => a.isCorrect).length,
    scoredTotal: scoredEntries.length,
    surveyTotal: graded.length - scoredEntries.length,
    timedOut,
    elapsedSeconds,
    answers: graded,
  }
}
