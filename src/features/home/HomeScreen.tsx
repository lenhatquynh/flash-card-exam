'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/features/auth/AuthProvider'
import { useProgress } from '@/features/app/ProgressProvider'
import { HomeView } from './HomeView'
import { LoadingScreen } from '@/components/LoadingScreen'

/**
 * The home screen, for a learner who is signed in.
 *
 * It waits for the question bank before it shows the counts, so the numbers
 * on screen are never a placeholder.
 */
export function HomeScreen({ username }: { username: string }) {
  const { questions, study, attempts, loading, reset } = useProgress()
  const { signOut } = useAuth()
  const router = useRouter()

  if (loading && questions.length === 0) {
    return <LoadingScreen />
  }

  return (
    <HomeView
      questions={questions}
      study={study}
      attempts={attempts}
      username={username}
      onResetProgress={() => void reset()}
      onSignOut={() => {
        void signOut().then(() => router.refresh())
      }}
    />
  )
}
