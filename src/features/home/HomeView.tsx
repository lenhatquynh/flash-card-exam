import { useMemo, useState } from 'react'
import { BookOpen, Clock, RotateCcw, Timer } from 'lucide-react'
import type { ExamResult, Question, StudyState } from '../../lib/types'
import { Button } from '../../components/ui/Button'
import { Dialog } from '../../components/ui/Dialog'
import { ProgressBar } from '../../components/ui/ProgressBar'

type Props = {
  questions: Question[]
  study: StudyState
  attempts: ExamResult[]
  onStartStudy: () => void
  onStartExam: () => void
  onResetProgress: () => void
}

/**
 * The home screen. It names the two modes, shows how far the learner has got
 * in the bank, and lists the last few exam scores.
 */
export function HomeView({
  questions,
  study,
  attempts,
  onStartStudy,
  onStartExam,
  onResetProgress,
}: Props) {
  const [resetOpen, setResetOpen] = useState(false)

  const stats = useMemo(() => {
    const values = Object.values(study.grades)
    return {
      studied: values.length,
      known: values.filter((g) => g === 'known').length,
      unknown: values.filter((g) => g === 'unknown').length,
    }
  }, [study.grades])

  const recent = attempts.slice(0, 5)

  return (
    <div className="min-h-svh bg-canvas">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3">
          <h1 className="text-base font-semibold text-ink">flash-card-exam</h1>
          <span className="text-xs text-ink-3">AWS SAA-C03</span>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold text-ink">AWS Solutions Architect exam practice</h2>
          <p className="mt-2 max-w-prose leading-relaxed text-ink-2">
            {questions.length} questions from the SAA-C03 bank. Study them one at a time with your own
            grading, or sit a timed practice exam.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-md border border-line bg-surface p-5">
            <h3 className="text-lg font-semibold text-ink">Study</h3>
            <p className="text-sm leading-relaxed text-ink-2">
              Browse the bank in source order. Pick an answer or reveal the correct one, then grade
              yourself.
            </p>
            <div className="mt-auto pt-2">
              <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
                <span className="text-ink-3">Progress</span>
                <span className="tabular font-medium text-ink">
                  {stats.studied} of {questions.length} studied
                </span>
              </div>
              <ProgressBar
                value={questions.length ? stats.studied / questions.length : 0}
                label="Study progress"
              />
              <p className="tabular mt-2 text-xs text-ink-3">
                {stats.known} knew it · {stats.unknown} did not
              </p>
              <Button
                variant="primary"
                className="mt-4"
                block
                onClick={onStartStudy}
                icon={<BookOpen className="size-4" />}
              >
                Start studying
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-md border border-line bg-surface p-5">
            <h3 className="text-lg font-semibold text-ink">Practice exam</h3>
            <p className="text-sm leading-relaxed text-ink-2">
              A timed run with sampled questions, a countdown, and a score at the end. Nothing is
              graded until you submit.
            </p>
            <div className="mt-auto pt-2">
              {attempts.length > 0 ? (
                <p className="text-sm text-ink-2">
                  Last score {attempts[0].correct} of {attempts[0].scoredTotal} correct.
                </p>
              ) : (
                <p className="text-sm text-ink-2">No exam taken yet.</p>
              )}
              <Button
                variant="primary"
                className="mt-4"
                block
                onClick={onStartExam}
                icon={<Timer className="size-4" />}
              >
                Set up an exam
              </Button>
            </div>
          </div>
        </section>

        {recent.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-ink">Recent scores</h2>
            <ul className="mt-3 divide-y divide-line rounded-md border border-line bg-surface">
              {recent.map((attempt) => {
                const pct =
                  attempt.scoredTotal > 0
                    ? Math.round((attempt.correct / attempt.scoredTotal) * 100)
                    : 0
                return (
                  <li
                    key={attempt.finishedAt}
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3"
                  >
                    <Clock className="size-4 shrink-0 text-ink-3" aria-hidden="true" />
                    <span className="text-sm font-medium text-ink">
                      {attempt.correct} of {attempt.scoredTotal} correct
                    </span>
                    <span className="tabular text-sm text-ink-2">{pct}%</span>
                    <span className="text-xs text-ink-3">
                      {attempt.config.scoredCount} scored questions · {attempt.config.durationMinutes}{' '}
                      min
                      {attempt.timedOut && ' · timed out'}
                    </span>
                    <span className="ml-auto text-xs text-ink-3">
                      {new Date(attempt.finishedAt).toLocaleDateString()}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        )}

        <section>
          <Button
            variant="ghost"
            size="sm"
            icon={<RotateCcw className="size-4" />}
            onClick={() => setResetOpen(true)}
          >
            Reset saved progress
          </Button>
        </section>
      </main>

      <Dialog
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        title="Reset saved progress?"
        actions={
          <>
            <Button variant="secondary" onClick={() => setResetOpen(false)}>
              Keep progress
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setResetOpen(false)
                onResetProgress()
              }}
              icon={<RotateCcw className="size-4" />}
            >
              Reset progress
            </Button>
          </>
        }
      >
        <p>
          This clears your study grades, your last exam setup, and your exam history from this browser.
          The question bank itself is not affected.
        </p>
      </Dialog>
    </div>
  )
}
