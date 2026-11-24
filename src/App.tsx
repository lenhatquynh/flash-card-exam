import { useCallback, useEffect, useMemo, useState } from 'react'
import rawQuestions from './data/questions.json'
import type {
  ExamAnswer,
  ExamConfig,
  ExamQuestion,
  ExamResult,
  Question,
  StudyState,
} from './lib/types'
import {
  DEFAULT_EXAM_CONFIG,
  loadExamAttempts,
  loadExamConfig,
  loadStudyState,
  pushExamAttempt,
  resetProgress,
  saveExamConfig,
  saveStudyState,
} from './lib/store'
import { buildResult, loadCorrectAnswers, sampleExam } from './lib/exam'
import { HomeView } from './features/home/HomeView'
import { StudyView } from './features/study/StudyView'
import { ExamSetup } from './features/exam/ExamSetup'
import { ExamRunner } from './features/exam/ExamRunner'
import { ExamResults } from './features/exam/ExamResults'

const questions = rawQuestions as Question[]

type View = 'home' | 'study' | 'exam'
type ExamPhase = 'setup' | 'running' | 'results'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [examPhase, setExamPhase] = useState<ExamPhase>('setup')

  const [study, setStudy] = useState<StudyState>(() => loadStudyState())
  const [examConfig, setExamConfig] = useState<ExamConfig>(() => loadExamConfig())
  const [attempts, setAttempts] = useState<ExamResult[]>(() => loadExamAttempts())

  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([])
  const [lastResult, setLastResult] = useState<ExamResult | null>(null)

  const byId = useMemo(() => new Map(questions.map((q) => [q.id, q])), [])

  // The question bank is fixed, so the correct answers can be registered once.
  useEffect(() => {
    loadCorrectAnswers(questions)
  }, [])

  const updateStudy = useCallback((next: StudyState) => {
    setStudy(next)
    saveStudyState(next)
  }, [])

  const startExam = useCallback(
    (config: ExamConfig) => {
      setExamConfig(config)
      saveExamConfig(config)
      setExamQuestions(sampleExam(questions, config))
      setExamPhase('running')
      setView('exam')
    },
    [],
  )

  const finishExam = useCallback(
    (answers: Record<string, ExamAnswer>, timedOut: boolean, elapsedSeconds: number) => {
      const result = buildResult({
        config: examConfig,
        questions: examQuestions,
        answers,
        timedOut,
        elapsedSeconds,
      })
      setLastResult(result)
      setAttempts(pushExamAttempt(result))
      setExamPhase('results')
    },
    [examConfig, examQuestions],
  )

  const resetAll = useCallback(() => {
    resetProgress()
    setStudy({ cursor: 0, grades: {}, lastVisitedId: null })
    setExamConfig({ ...DEFAULT_EXAM_CONFIG })
    setAttempts([])
    setLastResult(null)
    setExamPhase('setup')
  }, [])

  return (
    <div className="min-h-svh bg-canvas text-ink">
      {view === 'home' && (
        <HomeView
          questions={questions}
          study={study}
          attempts={attempts}
          onStartStudy={() => setView('study')}
          onStartExam={() => {
            setExamPhase('setup')
            setView('exam')
          }}
          onResetProgress={resetAll}
        />
      )}

      {view === 'study' && (
        <StudyView
          questions={questions}
          state={study}
          onStateChange={updateStudy}
          onExit={() => setView('home')}
        />
      )}

      {view === 'exam' && examPhase === 'setup' && (
        <ExamSetup
          questions={questions}
          remembered={examConfig}
          onStart={startExam}
          onExit={() => setView('home')}
        />
      )}

      {view === 'exam' && examPhase === 'running' && (
        <ExamRunner
          byId={byId}
          examQuestions={examQuestions}
          config={examConfig}
          onFinish={finishExam}
          onExit={() => {
            // The run is discarded; the setup screen keeps the remembered values.
            setExamPhase('setup')
          }}
        />
      )}

      {view === 'exam' && examPhase === 'results' && lastResult && (
        <ExamResults
          result={lastResult}
          byId={byId}
          onExit={() => {
            setExamPhase('setup')
            setView('home')
          }}
          onRetry={() => setExamPhase('setup')}
        />
      )}
    </div>
  )
}
