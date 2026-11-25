import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { signToken, verifyPassword } from '@/lib/auth'
import { setSessionCookie } from '@/lib/cookies'

/**
 * Signs a learner in.
 *
 * A wrong username and a wrong password give the same answer, so the form
 * cannot be used to find out which usernames exist.
 */
export async function POST(request: Request) {
  let body: { username?: unknown; password?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Send a JSON body.' }, { status: 400 })
  }

  const username = typeof body.username === 'string' ? body.username.trim() : ''
  const password = typeof body.password === 'string' ? body.password : ''

  if (!username || !password) {
    return NextResponse.json({ error: 'Enter your username and password.' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { username },
    select: { id: true, username: true, passwordHash: true },
  })

  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: 'That username and password do not match.' }, { status: 401 })
  }

  await setSessionCookie(await signToken(user.id))

  return NextResponse.json({ user: { id: user.id, username: user.username } })
}
