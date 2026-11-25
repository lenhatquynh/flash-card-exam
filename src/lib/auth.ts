import 'server-only'

import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'

/**
 * Password hashing and session tokens.
 *
 * The session is a signed JWT carried in an httpOnly cookie: there is no
 * session table to keep in sync, and the token carries the user id, which is
 * all the app needs to look the learner up.
 */

/** How long a session stays valid. */
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30

/** The cookie the session token lives in. */
export const SESSION_COOKIE = 'fce_session'

/** Cost factor for bcrypt. Ten is the usual default and is fast enough. */
const BCRYPT_ROUNDS = 10

function secret(): Uint8Array {
  const value = process.env.AUTH_SECRET
  if (!value) {
    throw new Error('AUTH_SECRET is not set.')
  }
  return new TextEncoder().encode(value)
}

/** Hashes a plain password. */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS)
}

/** Checks a plain password against a stored hash. */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

/** Signs a session token for a user. */
export async function signToken(userId: string): Promise<string> {
  return new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SECONDS}s`)
    .sign(secret())
}

/**
 * Verifies a session token and returns the user id it carries, or null when
 * the token is missing, malformed, expired, or signed with another key.
 */
export async function verifyToken(token: string | undefined): Promise<string | null> {
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, secret(), { algorithms: ['HS256'] })
    return typeof payload.sub === 'string' ? payload.sub : null
  } catch {
    return null
  }
}
