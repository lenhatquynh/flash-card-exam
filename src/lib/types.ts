/**
 * The shared shapes the app runs on.
 */

/** One answer option in a question. */
export type QuestionOption = {
  key: string
  text: string
}

/**
 * A diagram that belongs to a question.
 *
 * The source files referenced six diagrams but their image data was stripped
 * from the markdown, so `available` is false for those and the app shows a
 * placeholder in their place.
 */
export type Diagram = {
  alt: string
  dataUri: string
  available: boolean
}

/** A question parsed from the source markdown. */
export type Question = {
  /** `PART-1:42` — stable across re-parses of the same source. */
  id: string
  /** The number the question carries in the source document. */
  number: number
  /** `PART-1` through `PART-5`. */
  part: string
  stem: string
  options: QuestionOption[]
  /** The option keys marked correct. Length matches `chooseCount`. */
  correct: string[]
  /** How many answers the question asks for: 1, 2 or 3. */
  chooseCount: 1 | 2 | 3
  diagrams: Diagram[]
}

/** How the learner graded themselves on a question in study mode. */
export type StudyGrade = 'known' | 'unknown'

/** Study mode progress. */
export type StudyState = {
  /** Index of the question the learner was last on. */
  cursor: number
  /** Question id to the learner's own grade. */
  grades: Record<string, StudyGrade>
  /** The question the learner last looked at. */
  lastVisitedId: string | null
}

/** The fields a practice exam is configured with. */
export type ExamConfig = {
  /** Questions that count toward the score. */
  scoredCount: number
  /** Questions asked as a survey, excluded from the score. */
  surveyCount: number
  /** The exam length in minutes. */
  durationMinutes: number
  /** Extra time on top of the duration, in minutes. */
  extraMinutes: number
}

/** How one question is answered during an exam. */
export type ExamAnswer = {
  /** The option keys the learner selected. */
  selected: string[]
  /** Whether the learner marked the question for review. */
  marked: boolean
}

/** A question's place in an exam run. */
export type ExamQuestion = {
  id: string
  /** Whether the question counts toward the score. */
  scored: boolean
}

/** The result of a finished exam. */
export type ExamResult = {
  /** ISO timestamp of when the exam finished. */
  finishedAt: string
  config: ExamConfig
  /** Scored questions correct, as a count. */
  correct: number
  /** Scored questions answered, as a count. */
  scoredTotal: number
  /** The survey questions, shown separately and excluded from the score. */
  surveyTotal: number
  /** Whether the timer ran out. */
  timedOut: boolean
  /** How long the exam actually took, in seconds. */
  elapsedSeconds: number
  /** The per-question outcome, in the order the questions were asked. */
  answers: {
    id: string
    scored: boolean
    selected: string[]
    correct: string[]
    isCorrect: boolean
    marked: boolean
  }[]
}
