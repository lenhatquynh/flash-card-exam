import { NextResponse } from 'next/server'
import { getCurrentUserId } from '@/lib/session'
import { parseExamResult } from '@/lib/progress'
import { addAttempt, getAttempts } from '@/lib/userProgress'

/**
 * The learner's exam history.
 *
 * `GET` returns the finished exams, newest first. `POST` stores a finished
 * exam and returns the trimmed history.
 */
export async function GET() {
  const userId = await getCurrentUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  return NextResponse.json({ attempts: await getAttempts(userId) })
}

/** Stores a finished exam. */
export async function POST(request: Request) {
  const userId = await getCurrentUserId()
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Send a JSON body.' }, { status: 400 })
  }

  const result = parseExamResult(body)
  if (!result) {
    return NextResponse.json({ error: 'That exam result is not valid.' }, { status: 400 })
  }

  return NextResponse.json({ attempts: await addAttempt(userId, result) })
}
