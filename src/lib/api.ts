import type { ExamConfig, ExamResult, Question, StudyState } from './types'

/**
 * The client side of the API.
 *
 * Every call is same-origin and carries the session cookie, so the browser
 * decides who the caller is.
 */

/** The signed-in learner. */
export type AuthUser = {
  id: string
  username: string
}

/** The error the server sends back, when it sends one. */
export class ApiError extends Error {
  readonly status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function readError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { error?: unknown }
    if (typeof body.error === 'string' && body.error) return body.error
  } catch {
    // The body was not JSON; fall through to the generic message.
  }
  return `The server returned ${response.status}.`
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response
  try {
    response = await fetch(path, {
      ...init,
      headers: {
        ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
        ...init?.headers,
      },
    })
  } catch {
    throw new ApiError('Could not reach the server. Check your connection.', 0)
  }

  if (!response.ok) {
    throw new ApiError(await readError(response), response.status)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return (await response.json()) as T
}

/* -------------------------------------------------------------------------- */
/* Questions                                                                   */
/* -------------------------------------------------------------------------- */

/** The whole question bank. */
export async function fetchQuestions(): Promise<Question[]> {
  const body = await request<{ questions: Question[] }>('/api/questions')
  return body.questions
}

/* -------------------------------------------------------------------------- */
/* Accounts                                                                    */
/* -------------------------------------------------------------------------- */

/** Creates an account and signs in. */
export async function register(username: string, password: string): Promise<AuthUser> {
  const body = await request<{ user: AuthUser }>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
  return body.user
}

/** Signs in. */
export async function login(username: string, password: string): Promise<AuthUser> {
  const body = await request<{ user: AuthUser }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
  return body.user
}

/** Signs out. */
export async function logout(): Promise<void> {
  await request<void>('/api/auth/logout', { method: 'POST' })
}

/** The signed-in learner, or null when there is no session. */
export async function fetchMe(): Promise<AuthUser | null> {
  try {
    const body = await request<{ user: AuthUser }>('/api/auth/me')
    return body.user
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) return null
    throw error
  }
}

/* -------------------------------------------------------------------------- */
/* Progress                                                                    */
/* -------------------------------------------------------------------------- */

/** The learner’s study progress, exam setup and exam history. */
export async function fetchProgress(): Promise<{
  study: StudyState
  config: ExamConfig
  attempts: ExamResult[]
}> {
  return request('/api/progress')
}

/** Writes the study progress and the exam setup back. */
export async function saveProgress(next: {
  study: StudyState
  config: ExamConfig
}): Promise<void> {
  await request('/api/progress', {
    method: 'PUT',
    body: JSON.stringify(next),
  })
}

/** Clears the learner’s progress. */
export async function clearProgress(): Promise<void> {
  await request('/api/progress', { method: 'DELETE' })
}

/** Stores a finished exam and returns the trimmed history. */
export async function pushAttempt(result: ExamResult): Promise<ExamResult[]> {
  const body = await request<{ attempts: ExamResult[] }>('/api/attempts', {
    method: 'POST',
    body: JSON.stringify(result),
  })
  return body.attempts
}
