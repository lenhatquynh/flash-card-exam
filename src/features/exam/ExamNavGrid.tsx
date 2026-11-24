import { cn } from 'cn'
import type { ExamAnswer } from '../../lib/types'

type Props = {
  open: boolean
  onClose: () => void
  questions: { id: string; scored: boolean }[]
  answers: Record<string, ExamAnswer>
  current: number
  onPick: (index: number) => void
  onToggleMark: (index: number) => void
}

/**
 * The grid navigator. Each cell shows one of three states, and each state
 * carries a mark as well as a colour: a filled cell for answered, a corner
 * bar for marked for review, a plain cell for untouched.
 */
export function ExamNavGrid({ open, onClose, questions, answers, current, onPick, onToggleMark }: Props) {
  if (!open) return null

  const answeredCount = questions.filter((q) => (answers[q.id]?.selected.length ?? 0) > 0).length
  const markedCount = questions.filter((q) => answers[q.id]?.marked).length

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        type="button"
        aria-label="Close question grid"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div
        role="dialog"
        aria-label="Question grid"
        className="relative flex h-dvh w-full max-w-sm flex-col border-l border-line bg-surface shadow-lg max-sm:max-w-none"
      >
        <div className="border-b border-line px-4 py-3">
          <h2 className="text-base font-semibold text-ink">Questions</h2>
          <p className="tabular mt-1 text-xs text-ink-3">
            {answeredCount} answered of {questions.length} · {markedCount} marked for review
          </p>
          <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-3">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-xs border border-line bg-surface" aria-hidden="true" />
              Not answered
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-xs border border-accent-line bg-accent-soft" aria-hidden="true" />
              Answered
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="relative size-3 rounded-xs border border-warn bg-warn-soft"
                aria-hidden="true"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-warn" />
              </span>
              Marked for review
            </div>
          </dl>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="grid grid-cols-6 gap-2 max-sm:grid-cols-5">
            {questions.map((q, i) => {
              const answer = answers[q.id]
              const answered = (answer?.selected.length ?? 0) > 0
              const marked = Boolean(answer?.marked)
              const isCurrent = i === current

              return (
                <li key={q.id}>
                  <button
                    type="button"
                    onClick={() => onPick(i)}
                    aria-current={isCurrent ? 'true' : undefined}
                    aria-label={`Question ${i + 1}${answered ? ', answered' : ', not answered'}${marked ? ', marked for review' : ''}`}
                    className={cn(
                      'relative grid h-9 w-full place-items-center rounded-xs border text-xs font-medium tabular transition-colors',
                      isCurrent
                        ? 'border-accent bg-accent text-accent-ink'
                        : answered
                          ? 'border-accent-line bg-accent-soft text-ink'
                          : 'border-line bg-surface text-ink-3',
                    )}
                  >
                    {i + 1}
                    {marked && (
                      <span
                        className="absolute inset-x-0 top-0 h-0.5 rounded-t-xs bg-warn"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="border-t border-line px-4 py-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onToggleMark(current)}
              className="h-9 flex-1 rounded-md border border-line text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {answers[questions[current]?.id]?.marked ? 'Unmark this question' : 'Mark for review'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-9 rounded-md border border-line px-3 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
