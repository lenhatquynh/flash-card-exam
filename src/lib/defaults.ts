import type { ExamConfig, StudyState } from './types'

/**
 * The starting values the app uses when a learner has nothing saved yet.
 *
 * They live here so the browser and the server agree on them; the server
 * sends them when a learner has no row of their own.
 */

/** The exam setup a learner starts from when they have no saved one. */
export const DEFAULT_EXAM_CONFIG: ExamConfig = {
  scoredCount: 50,
  surveyCount: 15,
  durationMinutes: 130,
  extraMinutes: 0,
}

/** Study mode with nothing done yet. */
export const DEFAULT_STUDY_STATE: StudyState = {
  cursor: 0,
  grades: {},
  lastVisitedId: null,
}
