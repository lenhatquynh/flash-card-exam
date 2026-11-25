'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ExamAnswer, ExamConfig, ExamQuestion, ExamResult } from '@/lib/types'
import { buildResult, loadCorrectAnswers, sampleExam } from '@/lib/exam'
import { useProgress } from '@/features/app/ProgressProvider'
import { ExamSetup } from '@/features/exam/ExamSetup'
import { ExamRunner } from '@/features/exam/ExamRunner'
import { ExamResults } from '@/features/exam/ExamResults'
import { LoadingScreen } from '@/components/LoadingScreen'

type Phase = 'setup' | 'running' | 'results'

/**
 * The practice exam.
 *
 * The setup screen, the run and the results are three phases of the same
 * screen, so a learner never loses their place by navigating.
 */
export default function ExamPage() {
  const { questions, config, updateConfig, recordAttempt, loading } = useProgress()

  const [phase, setPhase] = useState<Phase>('setup')
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([])
  const [runConfig, setRunConfig] = useState<ExamConfig>(config)
  const [lastResult, setLastResult] = useState<ExamResult | null>(null)

  const byId = useMemo(() => new Map(questions.map((q) => [q.id, q])), [questions])

  // The correct answers are registered once the bank has loaded, because the
  // grader reads them from there.
  useEffect(() => {
    if (questions.length > 0) {
      loadCorrectAnswers(questions)
    }
  }, [questions])

  const start = useCallback(
    (next: ExamConfig) => {
      setRunConfig(next)
      updateConfig(next)
      setExamQuestions(sampleExam(questions, next))
      setPhase('running')
    },
    [questions, updateConfig],
  )

  const finish = useCallback(
    (answers: Record<string, ExamAnswer>, timedOut: boolean, elapsedSeconds: number) => {
      const result = buildResult({
        config: runConfig,
        questions: examQuestions,
        answers,
        timedOut,
        elapsedSeconds,
      })
      setLastResult(result)
      recordAttempt(result)
      setPhase('results')
    },
    [examQuestions, recordAttempt, runConfig],
  )

  if (loading && questions.length === 0) {
    return <LoadingScreen />
  }

  if (phase === 'setup') {
    return (
      <ExamSetup
        questions={questions}
        remembered={config}
        onStart={start}
      />
    )
  }

  if (phase === 'running') {
    return (
      <ExamRunner
        byId={byId}
        examQuestions={examQuestions}
        config={runConfig}
        onFinish={finish}
        onExit={() => setPhase('setup')}
      />
    )
  }

  if (lastResult) {
    return (
      <ExamResults
        result={lastResult}
        byId={byId}
        onRetry={() => setPhase('setup')}
      />
    )
  }

  return <LoadingScreen />
}
