/**
 * localStorage persistence for the app.
 *
 * Everything lives under the `fce.v1` namespace in three keys:
 *
 *   fce.v1.study         study progress — cursor and self-grades
 *   fce.v1.exam.config   the last exam setup the learner chose
 *   fce.v1.exam.attempts the last 20 finished exams
 *
 * Every read is guarded: a missing key, unparseable JSON, or a value of the
 * wrong shape falls back to the default rather than throwing. Writes are
 * debounced so a fast learner does not hammer localStorage.
 */

import type { ExamConfig, ExamResult, StudyGrade, StudyState } from './types'

const NAMESPACE = 'fce.v1'

export const STORAGE_KEYS = {
  study: `${NAMESPACE}.study`,
  examConfig: `${NAMESPACE}.exam.config`,
  examAttempts: `${NAMESPACE}.exam.attempts`,
} as const

/** How many finished exams are kept in history. */
export const MAX_ATTEMPTS = 20

/** The exam setup a learner starts from when they have no saved one. */
export const DEFAULT_EXAM_CONFIG: ExamConfig = {
  scoredCount: 50,
  surveyCount: 15,
  durationMinutes: 130,
  extraMinutes: 0,
}

export const DEFAULT_STUDY_STATE: StudyState = {
  cursor: 0,
  grades: {},
  lastVisitedId: null,
}

function storage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null
    return window.localStorage
  } catch {
    // Private browsing modes can throw on access.
    return null
  }
}

function readRaw(key: string): unknown {
  const store = storage()
  if (!store) return null
  try {
    const raw = store.getItem(key)
    if (raw === null) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeRaw(key: string, value: unknown): void {
  const store = storage()
  if (!store) return
  try {
    store.setItem(key, JSON.stringify(value))
  } catch {
    // Quota exceeded or storage disabled — the app still works in memory.
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asFiniteInt(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? Math.round(value) : fallback
}

/* -------------------------------------------------------------------------- */
/* Study                                                                       */
/* -------------------------------------------------------------------------- */

/** Reads the study progress, repairing anything malformed. */
export function loadStudyState(): StudyState {
  const raw = readRaw(STORAGE_KEYS.study)
  if (!isRecord(raw)) return { ...DEFAULT_STUDY_STATE }

  const grades: Record<string, StudyGrade> = {}
  if (isRecord(raw.grades)) {
    for (const [id, grade] of Object.entries(raw.grades)) {
      if (grade === 'known' || grade === 'unknown') grades[id] = grade
    }
  }

  const cursor = Math.max(0, asFiniteInt(raw.cursor, 0))
  const lastVisitedId = typeof raw.lastVisitedId === 'string' ? raw.lastVisitedId : null

  return { cursor, grades, lastVisitedId }
}

/** Writes the study progress. */
export function saveStudyState(state: StudyState): void {
  writeRaw(STORAGE_KEYS.study, state)
}

/* -------------------------------------------------------------------------- */
/* Exam configuration                                                          */
/* -------------------------------------------------------------------------- */

/** Reads the last exam setup, clamping every field to a sane range. */
export function loadExamConfig(): ExamConfig {
  const raw = readRaw(STORAGE_KEYS.examConfig)
  if (!isRecord(raw)) return { ...DEFAULT_EXAM_CONFIG }

  const clamp = (value: unknown, min: number, max: number, fallback: number) =>
    Math.min(max, Math.max(min, asFiniteInt(value, fallback)))

  return {
    scoredCount: clamp(raw.scoredCount, 1, 500, DEFAULT_EXAM_CONFIG.scoredCount),
    surveyCount: clamp(raw.surveyCount, 0, 200, DEFAULT_EXAM_CONFIG.surveyCount),
    durationMinutes: clamp(raw.durationMinutes, 1, 600, DEFAULT_EXAM_CONFIG.durationMinutes),
    extraMinutes: clamp(raw.extraMinutes, 0, 120, DEFAULT_EXAM_CONFIG.extraMinutes),
  }
}

/** Writes the exam setup. */
export function saveExamConfig(config: ExamConfig): void {
  writeRaw(STORAGE_KEYS.examConfig, config)
}

/* -------------------------------------------------------------------------- */
/* Exam attempts                                                               */
/* -------------------------------------------------------------------------- */

function isExamResult(value: unknown): value is ExamResult {
  if (!isRecord(value)) return false
  if (typeof value.finishedAt !== 'string') return false
  if (!isRecord(value.config)) return false
  if (typeof value.correct !== 'number') return false
  if (typeof value.scoredTotal !== 'number') return false
  if (typeof value.surveyTotal !== 'number') return false
  if (typeof value.timedOut !== 'boolean') return false
  if (typeof value.elapsedSeconds !== 'number') return false
  if (!Array.isArray(value.answers)) return false
  return value.answers.every(
    (a) =>
      isRecord(a) &&
      typeof a.id === 'string' &&
      typeof a.scored === 'boolean' &&
      Array.isArray(a.selected) &&
      Array.isArray(a.correct) &&
      typeof a.isCorrect === 'boolean' &&
      typeof a.marked === 'boolean',
  )
}

/** Reads the finished-exam history, newest first. */
export function loadExamAttempts(): ExamResult[] {
  const raw = readRaw(STORAGE_KEYS.examAttempts)
  if (!Array.isArray(raw)) return []
  return raw.filter(isExamResult).slice(0, MAX_ATTEMPTS)
}

/** Appends a finished exam to the history, capping it at `MAX_ATTEMPTS`. */
export function pushExamAttempt(result: ExamResult): ExamResult[] {
  const next = [result, ...loadExamAttempts()].slice(0, MAX_ATTEMPTS)
  writeRaw(STORAGE_KEYS.examAttempts, next)
  return next
}

/* -------------------------------------------------------------------------- */
/* Reset                                                                       */
/* -------------------------------------------------------------------------- */

/** Clears every saved value in the namespace. */
export function resetProgress(): void {
  const store = storage()
  if (!store) return
  for (const key of Object.values(STORAGE_KEYS)) {
    try {
      store.removeItem(key)
    } catch {
      // Ignore — the in-memory state is reset by the caller either way.
    }
  }
}
