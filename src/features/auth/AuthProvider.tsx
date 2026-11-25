'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { fetchMe, login as apiLogin, logout as apiLogout, register as apiRegister } from '@/lib/api'
import type { AuthUser } from '@/lib/api'

type AuthContextValue = {
  /** The signed-in learner, or null. */
  user: AuthUser | null
  /** True while the session is being checked on the first paint. */
  loading: boolean
  signIn: (username: string, password: string) => Promise<void>
  signUp: (username: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

/**
 * Holds the signed-in learner.
 *
 * The session itself lives in an httpOnly cookie, so the browser cannot read
 * it; this context only mirrors who the server says the caller is, and is
 * refreshed after a sign-in or sign-out.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let cancelled = false
    fetchMe()
      .then((me) => {
        if (!cancelled) setUser(me)
      })
      .catch(() => {
        if (!cancelled) setUser(null)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const signIn = useCallback(
    async (username: string, password: string) => {
      const me = await apiLogin(username, password)
      setUser(me)
      router.refresh()
    },
    [router],
  )

  const signUp = useCallback(
    async (username: string, password: string) => {
      const me = await apiRegister(username, password)
      setUser(me)
      router.refresh()
    },
    [router],
  )

  const signOut = useCallback(async () => {
    await apiLogout()
    setUser(null)
    router.refresh()
  }, [router])

  const value = useMemo(
    () => ({ user, loading, signIn, signUp, signOut }),
    [user, loading, signIn, signUp, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/** The signed-in learner and the account actions. */
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider.')
  }
  return context
}
