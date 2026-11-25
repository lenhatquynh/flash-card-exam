'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { ExamConfig, ExamResult, Question, StudyState } from '@/lib/types'
import { clearProgress, fetchProgress, fetchQuestions, pushAttempt, saveProgress } from '@/lib/api'
import { useAuth } from '@/features/auth/AuthProvider'
import { DEFAULT_EXAM_CONFIG, DEFAULT_STUDY_STATE } from '@/lib/defaults'
import {
  loadExamAttempts,
  loadExamConfig,
  loadStudyState,
  pushExamAttempt,
  saveExamConfig,
  saveStudyState,
} from '@/lib/store'

/**
 * The learner's progress and the question bank, kept in step with the server.
 *
 * A signed-in learner saves to Postgres, so their progress follows them to
 * another device. A learner without an account keeps it in this browser.
 * Either way the app works offline: the local copy is written first and the
 * server is updated afterwards.
 */

const SAVE_DEBOUNCE_MS = 600

type ProgressContextValue = {
  /** The question bank, once it has loaded. */
  questions: Question[]
  /** True while the bank and the saved progress are still loading. */
  loading: boolean
  /** True when the last write to the server failed. */
  syncFailed: boolean
  study: StudyState
  config: ExamConfig
  attempts: ExamResult[]
  updateStudy: (next: StudyState) => void
  updateConfig: (next: ExamConfig) => void
  recordAttempt: (result: ExamResult) => void
  reset: () => Promise<void>
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const signedIn = Boolean(user)

  const [questions, setQuestions] = useState<Question[]>([])
  const [study, setStudy] = useState<StudyState>(DEFAULT_STUDY_STATE)
  const [config, setConfig] = useState<ExamConfig>(DEFAULT_EXAM_CONFIG)
  const [attempts, setAttempts] = useState<ExamResult[]>([])
  const [loading, setLoading] = useState(true)
  const [syncFailed, setSyncFailed] = useState(false)

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pending = useRef<{ study: StudyState; config: ExamConfig } | null>(null)

  // The bank comes from the server; the local copy of the progress is read
  // first so the screen has something to show straight away.
  useEffect(() => {
    let cancelled = false

    setStudy(loadStudyState())
    setConfig(loadExamConfig())
    setAttempts(loadExamAttempts())

    fetchQuestions()
      .then((bank) => {
        if (!cancelled) setQuestions(bank)
      })
      .catch(() => {
        if (!cancelled) setSyncFailed(true)
      })

    if (!signedIn) {
      setLoading(false)
      return
    }

    fetchProgress()
      .then((payload) => {
        if (cancelled) return
        setStudy(payload.study)
        setConfig(payload.config)
        setAttempts(payload.attempts)
        saveStudyState(payload.study)
        saveExamConfig(payload.config)
      })
      .catch(() => {
        if (!cancelled) setSyncFailed(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [signedIn])

  const flush = useCallback(async () => {
    const next = pending.current
    pending.current = null
    if (!next || !signedIn) return

    try {
      await saveProgress(next)
      setSyncFailed(false)
    } catch {
      setSyncFailed(true)
    }
  }, [signedIn])

  const scheduleSave = useCallback(
    (next: { study: StudyState; config: ExamConfig }) => {
      pending.current = next
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        void flush()
      }, SAVE_DEBOUNCE_MS)
    },
    [flush],
  )

  const updateStudy = useCallback(
    (next: StudyState) => {
      setStudy(next)
      saveStudyState(next)
      scheduleSave({ study: next, config })
    },
    [config, scheduleSave],
  )

  const updateConfig = useCallback(
    (next: ExamConfig) => {
      setConfig(next)
      saveExamConfig(next)
      scheduleSave({ study, config: next })
    },
    [scheduleSave, study],
  )

  const recordAttempt = useCallback(
    (result: ExamResult) => {
      if (!signedIn) {
        setAttempts(pushExamAttempt(result))
        return
      }

      // The server trims the history to its cap and returns it, so the local
      // list is replaced rather than appended to.
      pushAttempt(result)
        .then((next) => {
          setAttempts(next)
          setSyncFailed(false)
        })
        .catch(() => {
          setAttempts(pushExamAttempt(result))
          setSyncFailed(true)
        })
    },
    [signedIn],
  )

  const reset = useCallback(async () => {
    setStudy({ ...DEFAULT_STUDY_STATE })
    setConfig({ ...DEFAULT_EXAM_CONFIG })
    setAttempts([])

    if (signedIn) {
      try {
        await clearProgress()
        setSyncFailed(false)
      } catch {
        setSyncFailed(true)
      }
    }
  }, [signedIn])

  // A pending write is flushed when the tab is hidden, so a learner who
  // closes the page does not lose the last few seconds of work.
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') void flush()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      if (timer.current) clearTimeout(timer.current)
      void flush()
    }
  }, [flush])

  const value = useMemo(
    () => ({
      questions,
      loading,
      syncFailed,
      study,
      config,
      attempts,
      updateStudy,
      updateConfig,
      recordAttempt,
      reset,
    }),
    [
      questions,
      loading,
      syncFailed,
      study,
      config,
      attempts,
      updateStudy,
      updateConfig,
      recordAttempt,
      reset,
    ],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

/** The question bank and the learner's progress. */
export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used inside a ProgressProvider.')
  }
  return context
}
