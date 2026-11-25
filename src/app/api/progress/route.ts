import { NextResponse } from 'next/server'
import { getCurrentUserId } from '@/lib/session'
import { parseExamConfig, parseStudyState } from '@/lib/progress'
import {
  getAttempts,
  getExamConfig,
  getStudyState,
  resetProgress,
  saveProgress,
} from '@/lib/userProgress'

/**
 * The signed-in learner's progress.
 *
 * `GET` returns the study state, the exam setup and the exam history.
 * `PUT` writes the study state and the exam setup back.
 * `DELETE` clears all three.
 */
export async function GET() {
  const userId = await getCurrentUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  const [study, config, attempts] = await Promise.all([
    getStudyState(userId),
    getExamConfig(userId),
    getAttempts(userId),
  ])

  return NextResponse.json({ study, config, attempts })
}

/** Writes the learner's study progress and exam setup. */
export async function PUT(request: Request) {
  const userId = await getCurrentUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  let body: { study?: unknown; config?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Send a JSON body.' }, { status: 400 })
  }

  const study = parseStudyState(body.study)
  const config = parseExamConfig(body.config)

  await saveProgress(userId, study, config)

  return NextResponse.json({ study, config })
}

/** Clears the learner's progress. */
export async function DELETE() {
  const userId = await getCurrentUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  await resetProgress(userId)
  return new NextResponse(null, { status: 204 })
}
