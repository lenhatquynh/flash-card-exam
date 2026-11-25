import 'server-only'

import { cookies } from 'next/headers'
import { prisma } from './db'
import { SESSION_COOKIE, verifyToken } from './auth'

/**
 * The signed-in learner, or null.
 *
 * Used by server components and API routes. The cookie is read here and the
 * user is looked up by the id the token carries, so a deleted account stops
 * being able to use an old cookie.
 */
export async function getCurrentUser() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value
  const userId = await verifyToken(token)
  if (!userId) return null

  return prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true, createdAt: true },
  })
}

/** The id of the signed-in learner, or null. */
export async function getCurrentUserId(): Promise<string | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value
  return verifyToken(token)
}
