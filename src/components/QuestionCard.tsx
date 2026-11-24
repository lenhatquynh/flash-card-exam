import { ImageOff } from 'lucide-react'
import type { Question } from '../lib/types'
import { OptionRow, type OptionState } from './ui/OptionRow'

type Props = {
  question: Question
  /** Which option states to render. */
  stateFor: (key: string) => OptionState
  onSelect?: (key: string) => void
  disabled?: boolean
}

/**
 * The diagram placeholder. The source documents referenced six images whose
 * data was stripped, so the app shows what is missing instead of a broken
 * image.
 */
function DiagramPlaceholder({ alt }: { alt: string }) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-dashed border-line-strong bg-surface-2 px-4 py-3">
      <ImageOff className="mt-0.5 size-4 shrink-0 text-ink-3" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm font-medium text-ink">Diagram missing from the source document</p>
        <p className="mt-0.5 text-xs text-ink-3">{alt}</p>
      </div>
    </div>
  )
}

/**
 * One question: the scenario, its diagrams, and its options. The component
 * is shared by study and exam so the two read identically.
 */
export function QuestionCard({ question, stateFor, onSelect, disabled }: Props) {
  const multiple = question.chooseCount > 1

  return (
    <article className="flex flex-col gap-5">
      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-3">
          <span className="tabular">Question {question.number}</span>
          <span aria-hidden="true">·</span>
          <span>{question.part}</span>
          {multiple && (
            <>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-ink-2">
                Choose {question.chooseCount === 2 ? 'two' : 'three'}
              </span>
            </>
          )}
        </div>
        <h2 className="text-lg font-medium leading-relaxed whitespace-pre-line text-ink">
          {question.stem}
        </h2>
      </header>

      {question.diagrams.length > 0 && (
        <div className="flex flex-col gap-3">
          {question.diagrams.map((d, i) =>
            d.available && d.dataUri ? (
              <img
                key={`${d.alt}-${i}`}
                src={d.dataUri}
                alt={d.alt}
                className="max-w-full rounded-md border border-line bg-surface"
              />
            ) : (
              <DiagramPlaceholder key={`${d.alt}-${i}`} alt={d.alt} />
            ),
          )}
        </div>
      )}

      <div className="flex flex-col gap-2" role="group" aria-label="Answer options">
        {question.options.map((option) => (
          <OptionRow
            key={option.key}
            keyLabel={option.key}
            text={option.text}
            multiple={multiple}
            state={stateFor(option.key)}
            disabled={disabled}
            onSelect={onSelect ? () => onSelect(option.key) : undefined}
          />
        ))}
      </div>
    </article>
  )
}
