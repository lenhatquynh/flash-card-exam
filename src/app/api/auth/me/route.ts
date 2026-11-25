import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/session'

/** The signed-in learner, or 401 when there is no valid session. */
export async function GET() {
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  }
  return NextResponse.json({ user })
}
