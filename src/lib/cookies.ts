import { cookies } from 'next/headers'
import { SESSION_COOKIE, SESSION_MAX_AGE_SECONDS } from './auth'

/**
 * The cookie options for the session cookie.
 *
 * `httpOnly` keeps the token away from scripts, `sameSite: 'lax'` blocks it
 * from other origins' requests, and `secure` keeps it off plain HTTP in
 * production.
 */
export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  }
}

/** Writes the session cookie. */
export async function setSessionCookie(token: string): Promise<void> {
  const store = await cookies()
  store.set(SESSION_COOKIE, token, sessionCookieOptions())
}

/** Clears the session cookie. */
export async function clearSessionCookie(): Promise<void> {
  const store = await cookies()
  store.set(SESSION_COOKIE, '', { ...sessionCookieOptions(), maxAge: 0 })
}
