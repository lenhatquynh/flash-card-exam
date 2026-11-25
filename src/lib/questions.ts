import 'server-only'

import { prisma } from './db'
import type { Diagram, Question, QuestionOption } from './types'

/**
 * The question bank, read from Postgres.
 *
 * The rows store the option list and the diagram list as JSON columns, so
 * they are parsed back into the shapes the UI already uses.
 */

type QuestionRow = {
  id: string
  number: number
  part: string
  stem: string
  chooseCount: number
  correct: string[]
  options: unknown
  diagrams: unknown
}

function toOptions(value: unknown): QuestionOption[] {
  if (!Array.isArray(value)) return []
  return value.filter(
    (o): o is QuestionOption =>
      typeof o === 'object' &&
      o !== null &&
      typeof (o as QuestionOption).key === 'string' &&
      typeof (o as QuestionOption).text === 'string',
  )
}

function toDiagrams(value: unknown): Diagram[] {
  if (!Array.isArray(value)) return []
  return value.filter(
    (d): d is Diagram =>
      typeof d === 'object' &&
      d !== null &&
      typeof (d as Diagram).alt === 'string' &&
      typeof (d as Diagram).available === 'boolean',
  )
}

/** Turns a database row into the question shape the UI uses. */
export function toQuestion(row: QuestionRow): Question {
  return {
    id: row.id,
    number: row.number,
    part: row.part,
    stem: row.stem,
    options: toOptions(row.options),
    correct: row.correct,
    chooseCount: row.chooseCount === 2 || row.chooseCount === 3 ? row.chooseCount : 1,
    diagrams: toDiagrams(row.diagrams),
  }
}

/**
 * The whole bank, in source order.
 *
 * The result is memoised in the server process for an hour. The bank only
 * changes when the seed is re-run, so re-reading it on every request would
 * be wasted work.
 */
const CACHE_TTL_MS = 60 * 60 * 1000
let cache: { at: number; questions: Question[] } | null = null

export async function getAllQuestions(): Promise<Question[]> {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
    return cache.questions
  }

  const rows = await prisma.question.findMany({
    orderBy: [{ part: 'asc' }, { number: 'asc' }],
  })

  const questions = rows.map(toQuestion)
  cache = { at: Date.now(), questions }
  return questions
}

/** The parts the bank is split into, with how many questions each holds. */
export async function getParts(): Promise<{ part: string; count: number }[]> {
  const grouped = await prisma.question.groupBy({
    by: ['part'],
    _count: { _all: true },
    orderBy: { part: 'asc' },
  })
  return grouped.map((g) => ({ part: g.part, count: g._count._all }))
}
