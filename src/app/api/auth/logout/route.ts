import { NextResponse } from 'next/server'
import { clearSessionCookie } from '@/lib/cookies'

/** Signs the learner out and clears the session cookie. */
export async function POST() {
  await clearSessionCookie()
  return new NextResponse(null, { status: 204 })
}
