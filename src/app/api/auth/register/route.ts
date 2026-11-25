import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, signToken } from '@/lib/auth'
import { setSessionCookie } from '@/lib/cookies'
import { validatePassword, validateUsername } from '@/lib/validation'

/**
 * Creates an account and signs the new learner in.
 *
 * The username is unique, so a duplicate is a 409 rather than an error.
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

  const usernameError = validateUsername(username)
  if (usernameError) {
    return NextResponse.json({ error: usernameError }, { status: 400 })
  }

  const passwordError = validatePassword(password)
  if (passwordError) {
    return NextResponse.json({ error: passwordError }, { status: 400 })
  }

  const existing = await prisma.user.findUnique({ where: { username } })
  if (existing) {
    return NextResponse.json({ error: 'That username is taken.' }, { status: 409 })
  }

  const passwordHash = await hashPassword(password)

  let user
  try {
    user = await prisma.user.create({
      data: { username, passwordHash },
      select: { id: true, username: true },
    })
  } catch {
    // Two requests raced for the same username; the unique index caught it.
    return NextResponse.json({ error: 'That username is taken.' }, { status: 409 })
  }

  await setSessionCookie(await signToken(user.id))

  return NextResponse.json({ user }, { status: 201 })
}
