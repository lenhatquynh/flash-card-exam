import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Check, X } from 'lucide-react'
import { cn } from 'cn'
import type { ExamResult, Question } from '../../lib/types'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { OptionRow, type OptionState } from '../../components/ui/OptionRow'

type Props = {
  result: ExamResult
  byId: Map<string, Question>
  onRetry: () => void
}

/**
 * The results screen. The score covers the scored questions only; the survey
 * questions are listed separately and never move the number.
 */
export function ExamResults({ result, byId, onRetry }: Props) {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'unanswered'>('all')

  const scored = useMemo(() => result.answers.filter((a) => a.scored), [result.answers])
  const survey = useMemo(() => result.answers.filter((a) => !a.scored), [result.answers])

  const unanswered = useMemo(
    () => result.answers.filter((a) => a.selected.length === 0).length,
    [result.answers],
  )

  const pct = result.scoredTotal > 0 ? result.correct / result.scoredTotal : 0

  const visible = useMemo(() => {
    if (filter === 'incorrect') {
      return result.answers.filter((a) => a.scored && !a.isCorrect)
    }
    if (filter === 'unanswered') {
      return result.answers.filter((a) => a.selected.length === 0)
    }
    return result.answers
  }, [filter, result.answers])

  const minutes = Math.floor(result.elapsedSeconds / 60)
  const seconds = result.elapsedSeconds % 60

  return (
    <div className="min-h-svh bg-canvas">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Link
            href="/"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-transparent px-3 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            Home
          </Link>
          <h1 className="text-base font-semibold text-ink">Exam results</h1>
          <Button variant="secondary" size="sm" onClick={onRetry} className="ml-auto">
            Take another exam
          </Button>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8">
        <section className="rounded-md border border-line bg-surface p-5">
          <h2 className="text-lg font-semibold text-ink">
            {result.correct} of {result.scoredTotal} scored questions were right
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-2">
            That is {Math.round(pct * 100)}% of the scored questions. The run took {minutes} min{' '}
            {seconds} s. The exam asked {result.scoredTotal + result.surveyTotal} questions:{' '}
            {result.scoredTotal} counted toward the score and {result.surveyTotal} were asked as a
            survey. {unanswered} went unanswered and{' '}
            {result.answers.filter((a) => a.marked).length} were marked for review.
          </p>

          <ProgressBar value={pct} label="Score" className="mt-4" />

          {result.timedOut && (
            <p className="mt-4 rounded-md border border-warn bg-warn-soft px-3 py-2 text-sm text-warn">
              The timer ran out. The exam was submitted with the answers standing at that moment.
            </p>
          )}
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold text-ink">Question review</h2>
            <div className="ml-auto flex gap-1 rounded-md border border-line bg-surface p-1">
              {(
                [
                  ['all', `All ${result.answers.length} questions`],
                  ['incorrect', `${scored.length - result.correct} wrong`],
                  ['unanswered', `${unanswered} unanswered`],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFilter(key)}
                  className={cn(
                    'rounded-xs px-2.5 py-1 text-sm transition-colors',
                    filter === key
                      ? 'bg-accent text-accent-ink'
                      : 'text-ink-2 hover:bg-surface-2 hover:text-ink',
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="rounded-md border border-line bg-surface px-4 py-8 text-center text-sm text-ink-3">
              No question matches this filter.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {visible.map((entry) => {
                const q = byId.get(entry.id)
                if (!q) return null
                const stateFor = (key: string): OptionState => {
                  const picked = entry.selected.includes(key)
                  const isCorrect = entry.correct.includes(key)
                  if (isCorrect) return 'correct'
                  if (picked) return 'incorrect'
                  return 'idle'
                }
                return (
                  <li
                    key={entry.id}
                    className="rounded-md border border-line bg-surface p-4"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="tabular font-medium text-ink">Question {q.number}</span>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-xs border px-1.5 py-0.5 font-medium',
                          entry.scored
                            ? entry.isCorrect
                              ? 'border-ok bg-ok-soft text-ok'
                              : 'border-bad bg-bad-soft text-bad'
                            : 'border-line bg-surface-2 text-ink-3',
                        )}
                      >
                        {entry.scored ? (
                          entry.isCorrect ? (
                            <>
                              <Check className="size-3" aria-hidden="true" /> Correct
                            </>
                          ) : (
                            <>
                              <X className="size-3" aria-hidden="true" /> Wrong
                            </>
                          )
                        ) : (
                          'Survey'
                        )}
                      </span>
                      {entry.marked && (
                        <span className="rounded-xs border border-warn bg-warn-soft px-1.5 py-0.5 font-medium text-warn">
                          Marked for review
                        </span>
                      )}
                    </div>
                    <p className="mb-3 leading-relaxed whitespace-pre-line text-ink">{q.stem}</p>
                    <div className="flex flex-col gap-2">
                      {q.options.map((option) => (
                        <OptionRow
                          key={option.key}
                          keyLabel={option.key}
                          text={option.text}
                          multiple={q.chooseCount > 1}
                          state={stateFor(option.key)}
                          disabled
                        />
                      ))}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        {survey.length > 0 && (
          <section className="rounded-md border border-line bg-surface-2 p-4">
            <h2 className="text-sm font-semibold text-ink">Survey questions</h2>
            <p className="mt-1 text-sm text-ink-2">
              {survey.length} question{survey.length === 1 ? '' : 's'} were asked as a survey. They are
              excluded from the score above.
            </p>
          </section>
        )}
      </main>
    </div>
  )
}
