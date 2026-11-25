import { getCurrentUser } from '@/lib/session'
import { AuthScreen } from '@/features/auth/AuthScreen'
import { HomeScreen } from '@/features/home/HomeScreen'

/**
 * The front door.
 *
 * The session is checked on the server: a learner with a valid cookie lands
 * on the home screen, a learner without one is asked to sign in or create an
 * account. There is no flash of the wrong screen in between.
 */
export default async function HomePage() {
  const user = await getCurrentUser()

  if (!user) {
    return <AuthScreen />
  }

  return <HomeScreen username={user.username} />
}
