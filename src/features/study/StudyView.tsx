'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Eye, ListChecks, Check, X } from 'lucide-react'
import type { Question, StudyGrade, StudyState } from '../../lib/types'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import type { OptionState } from '../../components/ui/OptionRow'
import { QuestionCard } from '../../components/QuestionCard'
import { StudyNav } from './StudyNav'

type Props = {
  questions: Question[]
  state: StudyState
  onStateChange: (next: StudyState) => void
}

type Phase = 'answering' | 'revealed'

/**
 * Study mode. One question per screen, in the original source order. The
 * learner either picks an answer and checks it, or reveals the answer
 * directly; either way they grade themselves.
 */
export function StudyView({ questions, state, onStateChange }: Props) {
  const [index, setIndex] = useState(() =>
    Math.min(state.cursor, Math.max(0, questions.length - 1)),
  )
  const [selected, setSelected] = useState<string[]>([])
  const [phase, setPhase] = useState<Phase>('answering')
  const [navOpen, setNavOpen] = useState(false)

  const question = questions[index]

  const grade = question ? state.grades[question.id] : undefined

  const stats = useMemo(() => {
    const values = Object.values(state.grades)
    return {
      known: values.filter((g) => g === 'known').length,
      unknown: values.filter((g) => g === 'unknown').length,
      studied: values.length,
    }
  }, [state.grades])

  const go = useCallback(
    (next: number) => {
      const clamped = Math.min(questions.length - 1, Math.max(0, next))
      setIndex(clamped)
      setSelected([])
      setPhase('answering')
      onStateChange({
        ...state,
        cursor: clamped,
        lastVisitedId: questions[clamped]?.id ?? null,
      })
    },
    [questions, onStateChange, state],
  )

  const choose = useCallback(
    (key: string) => {
      if (phase === 'revealed' || !question) return
      setSelected((prev) => {
        if (question.chooseCount === 1) return prev.includes(key) ? [] : [key]
        return prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      })
    },
    [phase, question],
  )

  const reveal = useCallback(() => {
    setPhase('revealed')
  }, [])

  const setGrade = useCallback(
    (value: StudyGrade) => {
      if (!question) return
      onStateChange({ ...state, grades: { ...state.grades, [question.id]: value } })
    },
    [onStateChange, question, state],
  )

  // Keyboard: 1-5 pick an option, Space reveals, arrows move, Enter checks.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return
      if (navOpen) return

      if (e.key >= '1' && e.key <= '5') {
        const option = question?.options[Number(e.key) - 1]
        if (option) {
          e.preventDefault()
          choose(option.key)
        }
        return
      }
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        reveal()
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(index - 1)
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(index + 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [choose, go, index, navOpen, question, reveal])

  if (!question) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-ink-2">No questions are loaded.</p>
      </div>
    )
  }

  const exactMatch =
    selected.length === question.correct.length &&
    question.correct.every((key) => selected.includes(key))

  const stateFor = (key: string): OptionState => {
    if (phase === 'answering') {
      return selected.includes(key) ? 'selected' : 'idle'
    }
    if (question.correct.includes(key)) return 'correct'
    if (selected.includes(key)) return 'incorrect'
    return 'idle'
  }

  return (
    <div className="min-h-svh bg-canvas">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/"
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-transparent px-3 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              Home
            </Link>            <h1 className="text-base font-semibold text-ink">Study</h1>
            <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-2">
              <span className="tabular">
                {stats.studied} of {questions.length} studied
              </span>
              <span className="tabular text-ok">{stats.known} knew it</span>
              <span className="tabular text-bad">{stats.unknown} did not</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setNavOpen(true)}
                icon={<ListChecks className="size-4" />}
              >
                All questions
              </Button>
            </div>
          </div>
          <ProgressBar
            value={questions.length ? stats.studied / questions.length : 0}
            label="Study progress"
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 pb-32">
        <QuestionCard
          question={question}
          stateFor={stateFor}
          onSelect={choose}
          disabled={phase === 'revealed'}
        />

        {phase === 'revealed' && (
          <div className="mt-6 rounded-md border border-line bg-surface p-4">
            <p className="text-sm font-medium text-ink">
              {selected.length === 0
                ? `The correct answer is ${question.correct.join(' and ')}.`
                : exactMatch
                  ? 'Your answer matches the correct one.'
                  : `The correct answer is ${question.correct.join(' and ')}.`}
            </p>
            <p className="mt-3 text-sm font-medium text-ink-2">How well did you know this?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button
                variant={grade === 'known' ? 'primary' : 'secondary'}
                icon={<Check className="size-4" />}
                onClick={() => setGrade('known')}
              >
                Knew it
              </Button>
              <Button
                variant={grade === 'unknown' ? 'danger' : 'secondary'}
                icon={<X className="size-4" />}
                onClick={() => setGrade('unknown')}
              >
                Did not know
              </Button>
            </div>
          </div>
        )}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3">
          <Button
            variant="secondary"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            icon={<ChevronLeft className="size-4" />}
          >
            Previous
          </Button>
          <span className="tabular mx-auto text-sm text-ink-3">
            {index + 1} / {questions.length}
          </span>
          {phase === 'answering' ? (
            <>
              <Button
                variant="secondary"
                onClick={reveal}
                icon={<Eye className="size-4" />}
              >
                Show
              </Button>
              <Button
                variant="primary"
                onClick={reveal}
                icon={<Check className="size-4" />}
                disabled={selected.length === 0}
              >
                Check
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => go(index + 1)}
              disabled={index === questions.length - 1}
              icon={<ChevronRight className="size-4" />}
            >
              Next question
            </Button>
          )}
        </div>
      </div>

      <StudyNav
        open={navOpen}
        onClose={() => setNavOpen(false)}
        questions={questions}
        index={index}
        grades={state.grades}
        onPick={(i) => {
          go(i)
          setNavOpen(false)
        }}
      />
    </div>
  )
}
