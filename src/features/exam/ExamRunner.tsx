import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Flag, LayoutGrid, Send } from 'lucide-react'
import type { ExamAnswer, ExamConfig, ExamQuestion, Question } from '../../lib/types'
import { Button } from '../../components/ui/Button'
import { Dialog } from '../../components/ui/Dialog'
import { Timer } from '../../components/ui/Timer'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { QuestionCard } from '../../components/QuestionCard'
import { ExamNavGrid } from './ExamNavGrid'

type Props = {
  byId: Map<string, Question>
  examQuestions: ExamQuestion[]
  config: ExamConfig
  onFinish: (answers: Record<string, ExamAnswer>, timedOut: boolean, elapsedSeconds: number) => void
  onExit: () => void
}

/**
 * The exam runner. One question per page at every width, a countdown in the
 * header, and a grid navigator for jumping around. Nothing is graded until
 * the learner submits.
 */
export function ExamRunner({ byId, examQuestions, config, onFinish, onExit }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, ExamAnswer>>({})
  const [gridOpen, setGridOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [quitOpen, setQuitOpen] = useState(false)

  const totalSeconds = (config.durationMinutes + config.extraMinutes) * 60
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)
  const startedAt = useRef(0)
  const submitted = useRef(false)

  const question = examQuestions[index]
  const current = question ? byId.get(question.id) : undefined

  const answeredCount = useMemo(
    () => examQuestions.filter((q) => (answers[q.id]?.selected.length ?? 0) > 0).length,
    [answers, examQuestions],
  )
  const markedCount = useMemo(
    () => examQuestions.filter((q) => answers[q.id]?.marked).length,
    [answers, examQuestions],
  )

  const finish = useCallback(
    (timedOut: boolean) => {
      if (submitted.current) return
      submitted.current = true
      const elapsed = Math.round((Date.now() - startedAt.current) / 1000)
      onFinish(answers, timedOut, elapsed)
    },
    [answers, onFinish],
  )

  // The countdown. It ticks once a second and submits the run when it ends.
  useEffect(() => {
    startedAt.current = Date.now()
    const tick = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(tick)
          finish(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => window.clearInterval(tick)
  }, [finish])

  const go = useCallback(
    (next: number) => {
      setIndex(Math.min(examQuestions.length - 1, Math.max(0, next)))
    },
    [examQuestions.length],
  )

  const choose = useCallback(
    (key: string) => {
      if (!current) return
      setAnswers((prev) => {
        const existing = prev[current.id] ?? { selected: [], marked: false }
        const selected =
          current.chooseCount === 1
            ? existing.selected.includes(key)
              ? []
              : [key]
            : existing.selected.includes(key)
              ? existing.selected.filter((k) => k !== key)
              : [...existing.selected, key]
        return { ...prev, [current.id]: { ...existing, selected } }
      })
    },
    [current],
  )

  const toggleMark = useCallback(
    (target: number) => {
      const q = examQuestions[target]
      if (!q) return
      setAnswers((prev) => {
        const existing = prev[q.id] ?? { selected: [], marked: false }
        return { ...prev, [q.id]: { ...existing, marked: !existing.marked } }
      })
    },
    [examQuestions],
  )

  // Keyboard: 1-5 pick an option, arrows move between questions.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return
      if (gridOpen || confirmOpen) return

      if (e.key >= '1' && e.key <= '5') {
        const option = current?.options[Number(e.key) - 1]
        if (option) {
          e.preventDefault()
          choose(option.key)
        }
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
  }, [choose, confirmOpen, current, go, gridOpen, index])

  if (!current || !question) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-ink-2">This exam has no questions.</p>
      </div>
    )
  }

  const selected = answers[current.id]?.selected ?? []
  const marked = Boolean(answers[current.id]?.marked)

  return (
    <div className="min-h-svh bg-canvas">
      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h1 className="text-base font-semibold text-ink">Practice exam</h1>
            <span className="tabular text-xs text-ink-3">
              {answeredCount} of {examQuestions.length} answered
              {markedCount > 0 && ` · ${markedCount} marked`}
            </span>
            <div className="ml-auto flex flex-wrap items-center justify-end gap-2 max-sm:order-last max-sm:ml-0 max-sm:w-full max-sm:justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuitOpen(true)}
                icon={<ChevronLeft className="size-4" />}
              >
                Leave
              </Button>
              <Timer seconds={secondsLeft} caption="left" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setGridOpen(true)}
                icon={<LayoutGrid className="size-4" />}
              >
                Questions
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setConfirmOpen(true)}
                icon={<Send className="size-4" />}
              >
                Submit exam
              </Button>
            </div>
          </div>
          <ProgressBar
            value={examQuestions.length ? (index + 1) / examQuestions.length : 0}
            label="Exam progress"
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 pb-32">
        <QuestionCard
          question={current}
          stateFor={(key) => (selected.includes(key) ? 'selected' : 'idle')}
          onSelect={choose}
        />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            variant={marked ? 'primary' : 'secondary'}
            icon={<Flag className="size-4" />}
            onClick={() => toggleMark(index)}
          >
            {marked ? 'Marked for review' : 'Mark for review'}
          </Button>
          {current.chooseCount > 1 && (
            <span className="text-xs text-ink-3">
              Choose {current.chooseCount === 2 ? 'two' : 'three'} options. No partial credit.
            </span>
          )}
        </div>
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
            {index + 1} of {examQuestions.length}
          </span>
          <Button
            variant="primary"
            onClick={() => go(index + 1)}
            disabled={index === examQuestions.length - 1}
            icon={<ChevronRight className="size-4" />}
          >
            Next question
          </Button>
        </div>
      </div>

      <ExamNavGrid
        open={gridOpen}
        onClose={() => setGridOpen(false)}
        questions={examQuestions}
        answers={answers}
        current={index}
        onPick={(i) => {
          go(i)
          setGridOpen(false)
        }}
        onToggleMark={toggleMark}
      />

      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Submit this exam?"
        actions={
          <>
            <Button variant="secondary" onClick={() => setConfirmOpen(false)}>
              Keep working
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setConfirmOpen(false)
                finish(false)
              }}
            >
              Submit exam
            </Button>
          </>
        }
      >
        {answeredCount < examQuestions.length ? (
          <p>
            {examQuestions.length - answeredCount} of {examQuestions.length} questions are unanswered.
            They are counted as wrong.
          </p>
        ) : (
          <p>All {examQuestions.length} questions are answered. The exam will be scored now.</p>
        )}
        {markedCount > 0 && (
          <p className="mt-2">
            {markedCount} question{markedCount === 1 ? ' is' : 's are'} marked for review and will be
            scored as they stand.
          </p>
        )}
      </Dialog>
      <Dialog
        open={quitOpen}
        onClose={() => setQuitOpen(false)}
        title="Leave this exam?"
        actions={
          <>
            <Button variant="secondary" onClick={() => setQuitOpen(false)}>
              Keep working
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setQuitOpen(false)
                onExit()
              }}
            >
              Leave exam
            </Button>
          </>
        }
      >
        <p>
          {answeredCount} of {examQuestions.length} questions are answered. Leaving discards this run
          and it is not scored.
        </p>
      </Dialog>
    </div>
  )
}