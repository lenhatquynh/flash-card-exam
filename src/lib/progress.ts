import type { ExamAnswer, ExamConfig, ExamResult, StudyGrade, StudyState } from './types'
import { DEFAULT_EXAM_CONFIG, DEFAULT_STUDY_STATE } from './defaults'

/**
 * The shapes that travel over the wire between the server and the browser.
 *
 * They mirror the types in `types.ts`, but with the loose parts (`Json`
 * columns, untrusted input) already checked, so the client can trust what it
 * receives.
 */

/** The progress a learner has: study state, exam setup and exam history. */
export type ProgressPayload = {
  study: StudyState
  config: ExamConfig
  attempts: ExamResult[]
}

export { DEFAULT_EXAM_CONFIG, DEFAULT_STUDY_STATE }

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asFiniteInt(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? Math.round(value) : fallback
}

function clamp(value: unknown, min: number, max: number, fallback: number): number {
  return Math.min(max, Math.max(min, asFiniteInt(value, fallback)))
}

/** Checks and repairs a study state coming from the client. */
export function parseStudyState(value: unknown): StudyState {
  if (!isRecord(value)) return { ...DEFAULT_STUDY_STATE }

  const grades: Record<string, StudyGrade> = {}
  if (isRecord(value.grades)) {
    for (const [id, grade] of Object.entries(value.grades)) {
      if (grade === 'known' || grade === 'unknown') grades[id] = grade
    }
  }

  return {
    cursor: Math.max(0, asFiniteInt(value.cursor, 0)),
    grades,
    lastVisitedId: typeof value.lastVisitedId === 'string' ? value.lastVisitedId : null,
  }
}

/** Checks and repairs an exam config coming from the client. */
export function parseExamConfig(value: unknown): ExamConfig {
  if (!isRecord(value)) return { ...DEFAULT_EXAM_CONFIG }

  return {
    scoredCount: clamp(value.scoredCount, 1, 500, DEFAULT_EXAM_CONFIG.scoredCount),
    surveyCount: clamp(value.surveyCount, 0, 200, DEFAULT_EXAM_CONFIG.surveyCount),
    durationMinutes: clamp(value.durationMinutes, 1, 600, DEFAULT_EXAM_CONFIG.durationMinutes),
    extraMinutes: clamp(value.extraMinutes, 0, 120, DEFAULT_EXAM_CONFIG.extraMinutes),
  }
}

function parseExamAnswer(value: unknown): ExamResult['answers'][number] | null {
  if (!isRecord(value)) return null
  if (typeof value.id !== 'string') return null
  if (!Array.isArray(value.selected) || !value.selected.every((s) => typeof s === 'string')) {
    return null
  }
  if (!Array.isArray(value.correct) || !value.correct.every((s) => typeof s === 'string')) {
    return null
  }
  return {
    id: value.id,
    scored: value.scored === true,
    selected: value.selected,
    correct: value.correct,
    isCorrect: value.isCorrect === true,
    marked: value.marked === true,
  }
}

/** Checks and repairs a finished exam coming from the client. */
export function parseExamResult(value: unknown): ExamResult | null {
  if (!isRecord(value)) return null
  if (typeof value.finishedAt !== 'string') return null
  if (!Array.isArray(value.answers)) return null

  const answers = value.answers.map(parseExamAnswer)
  if (answers.some((a) => a === null)) return null

  return {
    finishedAt: value.finishedAt,
    config: parseExamConfig(value.config),
    correct: Math.max(0, asFiniteInt(value.correct, 0)),
    scoredTotal: Math.max(0, asFiniteInt(value.scoredTotal, 0)),
    surveyTotal: Math.max(0, asFiniteInt(value.surveyTotal, 0)),
    timedOut: value.timedOut === true,
    elapsedSeconds: Math.max(0, asFiniteInt(value.elapsedSeconds, 0)),
    answers: answers as ExamResult['answers'],
  }
}

export type { ExamAnswer }
