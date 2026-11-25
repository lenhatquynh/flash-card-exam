import 'server-only'

import { prisma } from './db'
import { DEFAULT_EXAM_CONFIG, DEFAULT_STUDY_STATE } from './defaults'
import type { ExamConfig, ExamResult, StudyState } from './types'

/**
 * Reading and writing a learner's progress.
 *
 * Everything a learner owns hangs off their user id, so every read and write
 * here is scoped to that id.
 */

/** How many finished exams are kept in the history. */
export const MAX_ATTEMPTS = 20

type AttemptRow = {
  finishedAt: Date
  correct: number
  scoredTotal: number
  surveyTotal: number
  timedOut: boolean
  elapsedSeconds: number
  config: unknown
  answers: unknown
}

function toAttempt(row: AttemptRow): ExamResult {
  return {
    finishedAt: row.finishedAt.toISOString(),
    config: (row.config ?? DEFAULT_EXAM_CONFIG) as ExamConfig,
    correct: row.correct,
    scoredTotal: row.scoredTotal,
    surveyTotal: row.surveyTotal,
    timedOut: row.timedOut,
    elapsedSeconds: row.elapsedSeconds,
    answers: (row.answers ?? []) as ExamResult['answers'],
  }
}

/** The learner's study progress, or the default when they have none yet. */
export async function getStudyState(userId: string): Promise<StudyState> {
  const row = await prisma.studyState.findUnique({ where: { userId } })
  if (!row) return { ...DEFAULT_STUDY_STATE }

  const grades = typeof row.grades === 'object' && row.grades !== null ? row.grades : {}

  return {
    cursor: row.cursor,
    grades: grades as StudyState['grades'],
    lastVisitedId: row.lastVisitedId,
  }
}

/** The learner's last exam setup, or the default. */
export async function getExamConfig(userId: string): Promise<ExamConfig> {
  const row = await prisma.examConfig.findUnique({ where: { userId } })
  if (!row) return { ...DEFAULT_EXAM_CONFIG }

  return {
    scoredCount: row.scoredCount,
    surveyCount: row.surveyCount,
    durationMinutes: row.durationMinutes,
    extraMinutes: row.extraMinutes,
  }
}

/** The learner's finished exams, newest first. */
export async function getAttempts(userId: string): Promise<ExamResult[]> {
  const rows = await prisma.examAttempt.findMany({
    where: { userId },
    orderBy: { finishedAt: 'desc' },
    take: MAX_ATTEMPTS,
  })
  return rows.map(toAttempt)
}

/** Stores a finished exam and trims the history back to the cap. */
export async function addAttempt(userId: string, result: ExamResult): Promise<ExamResult[]> {
  await prisma.examAttempt.create({
    data: {
      userId,
      finishedAt: new Date(result.finishedAt),
      correct: result.correct,
      scoredTotal: result.scoredTotal,
      surveyTotal: result.surveyTotal,
      timedOut: result.timedOut,
      elapsedSeconds: result.elapsedSeconds,
      config: result.config,
      answers: result.answers,
    },
  })

  // Keep only the most recent attempts; the rest are of no use to the learner.
  const stale = await prisma.examAttempt.findMany({
    where: { userId },
    orderBy: { finishedAt: 'desc' },
    skip: MAX_ATTEMPTS,
    select: { id: true },
  })
  if (stale.length > 0) {
    await prisma.examAttempt.deleteMany({ where: { id: { in: stale.map((s) => s.id) } } })
  }

  return getAttempts(userId)
}

/** Writes the learner's study progress and exam setup. */
export async function saveProgress(
  userId: string,
  study: StudyState,
  config: ExamConfig,
): Promise<void> {
  await prisma.$transaction([
    prisma.studyState.upsert({
      where: { userId },
      create: {
        userId,
        cursor: study.cursor,
        grades: study.grades,
        lastVisitedId: study.lastVisitedId,
      },
      update: {
        cursor: study.cursor,
        grades: study.grades,
        lastVisitedId: study.lastVisitedId,
      },
    }),
    prisma.examConfig.upsert({
      where: { userId },
      create: {
        userId,
        scoredCount: config.scoredCount,
        surveyCount: config.surveyCount,
        durationMinutes: config.durationMinutes,
        extraMinutes: config.extraMinutes,
      },
      update: {
        scoredCount: config.scoredCount,
        surveyCount: config.surveyCount,
        durationMinutes: config.durationMinutes,
        extraMinutes: config.extraMinutes,
      },
    }),
  ])
}

/** Clears the learner's progress, keeping the account. */
export async function resetProgress(userId: string): Promise<void> {
  await prisma.$transaction([
    prisma.studyState.deleteMany({ where: { userId } }),
    prisma.examConfig.deleteMany({ where: { userId } }),
    prisma.examAttempt.deleteMany({ where: { userId } }),
  ])
}
