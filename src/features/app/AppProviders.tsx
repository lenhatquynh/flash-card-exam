'use client'

import type { ReactNode } from 'react'
import { AuthProvider } from '@/features/auth/AuthProvider'
import { ProgressProvider } from '@/features/app/ProgressProvider'

/**
 * The client-side context the whole app sits inside.
 *
 * The order matters: the progress provider needs to know whether there is a
 * session before it decides where to load progress from.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ProgressProvider>{children}</ProgressProvider>
    </AuthProvider>
  )
}
