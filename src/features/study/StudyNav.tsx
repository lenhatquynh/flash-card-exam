import { useEffect, useMemo, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import type { Question, StudyGrade } from '../../lib/types'
import { cn } from 'cn'

type Props = {
  open: boolean
  onClose: () => void
  questions: Question[]
  index: number
  grades: Record<string, StudyGrade>
  onPick: (index: number) => void
}

/**
 * The question list for study mode. It is a sheet on narrow screens and a
 * side panel on wide ones; the list is the same either way.
 */
export function StudyNav({ open, onClose, questions, index, grades, onPick }: Props) {
  const [query, setQuery] = useState('')
  const listRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return questions
    return questions.filter(
      (question) =>
        question.stem.toLowerCase().includes(q) || String(question.number) === q,
    )
  }, [query, questions])

  // Scroll the current question into view when the sheet opens.
  useEffect(() => {
    if (!open) return
    const el = listRef.current?.querySelector<HTMLElement>('[data-current="true"]')
    el?.scrollIntoView({ block: 'center' })
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        type="button"
        aria-label="Close question list"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div
        role="dialog"
        aria-label="All questions"
        className={cn(
          'relative flex h-dvh w-full max-w-md flex-col border-l border-line bg-surface shadow-lg',
          'max-sm:max-w-none',
        )}
      >
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-ink-3"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a question"
              aria-label="Find a question by text or number"
              className="h-9 w-full rounded-md border border-line bg-surface-2 pr-3 pl-8 text-sm text-ink placeholder:text-ink-3 focus:border-accent"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-9 rounded-md border border-line px-3 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            Close
          </button>
        </div>

        <div ref={listRef} className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-ink-3">No question matches that text.</p>
          ) : (
            <ul className="divide-y divide-line">
              {filtered.map((question) => {
                const grade = grades[question.id]
                const current = question.id === questions[index]?.id
                return (
                  <li key={question.id}>
                    <button
                      type="button"
                      data-current={current}
                      onClick={() => onPick(questions.indexOf(question))}
                      className={cn(
                        'flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-surface-2',
                        current && 'bg-accent-soft',
                      )}
                    >
                      <span className="tabular w-14 shrink-0 text-sm text-ink-2">
                        {question.number}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm text-ink-2">
                        {question.stem.split('\n')[0]}
                      </span>
                      {grade === 'known' && (
                        <span className="shrink-0 rounded-xs border border-ok bg-ok-soft px-1.5 text-xs font-medium text-ok">
                          Knew it
                        </span>
                      )}
                      {grade === 'unknown' && (
                        <span className="shrink-0 rounded-xs border border-bad bg-bad-soft px-1.5 text-xs font-medium text-bad">
                          Did not know
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-line px-4 py-3 text-xs text-ink-3">
          <p>{questions.length} questions in the bank, in source order.</p>
          <p className="mt-1">Keys 1 to 5 select an answer. Space reveals it. Arrow keys move between questions.</p>
        </div>
      </div>
    </div>
  )
}
