import { cn } from 'cn'

export type OptionState = 'idle' | 'selected' | 'correct' | 'incorrect' | 'missed'

type Props = {
  /** The option letter, A–E. */
  keyLabel: string
  text: string
  state?: OptionState
  /** Multiple correct answers: the control renders as a checkbox, not a radio. */
  multiple?: boolean
  disabled?: boolean
  onSelect?: () => void
}

/**
 * The letter badge. Its shape tells the learner whether the question expects
 * one answer or several, before they read the option text.
 */
function KeyBadge({ keyLabel, multiple, state }: { keyLabel: string; multiple: boolean; state: OptionState }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-7 shrink-0 place-items-center text-xs font-semibold',
        'rounded-xs border',
        multiple ? 'rounded-xs' : 'rounded-full',
        state === 'correct' && 'border-ok bg-ok-soft text-ok',
        state === 'incorrect' && 'border-bad bg-bad-soft text-bad',
        state === 'missed' && 'border-ok bg-ok-soft text-ok',
        (state === 'idle' || state === 'selected') && 'border-line-strong bg-surface-2 text-ink-2',
      )}
    >
      {keyLabel}
    </span>
  )
}

/**
 * One answer option. The four states are told apart by a border treatment and
 * a badge shape, not by hue alone: a filled ring for selection, a double
 * border for the correct answer, a struck badge for a wrong one.
 */
export function OptionRow({ keyLabel, text, state = 'idle', multiple = false, disabled, onSelect }: Props) {
  const isCorrect = state === 'correct' || state === 'missed'
  const isIncorrect = state === 'incorrect'

  const border = isCorrect
    ? 'border-ok border-2'
    : isIncorrect
      ? 'border-bad border-2'
      : state === 'selected'
        ? 'border-accent border-2'
        : 'border-line border'

  const surface = isCorrect
    ? 'bg-ok-soft'
    : isIncorrect
      ? 'bg-bad-soft'
      : state === 'selected'
        ? 'bg-accent-soft'
        : 'bg-surface'

  const interactive = Boolean(onSelect) && !disabled

  return (
    <button
      type="button"
      disabled={disabled || !interactive}
      onClick={onSelect}
      aria-pressed={state === 'selected' || state === 'correct' || state === 'incorrect' || state === 'missed'}
      className={cn(
        'flex w-full items-start gap-3 rounded-md border px-3 py-3 text-left',
        'transition-colors duration-150',
        border,
        surface,
        interactive && 'cursor-pointer hover:border-line-strong hover:bg-surface-2',
        !interactive && 'cursor-default',
        disabled && 'opacity-70',
      )}
    >
      <KeyBadge keyLabel={keyLabel} multiple={multiple} state={state} />
      <span className="min-w-0 flex-1 text-base leading-relaxed text-ink">{text}</span>
      {isCorrect && <span className="mt-0.5 shrink-0 text-xs font-semibold text-ok">Correct</span>}
      {isIncorrect && <span className="mt-0.5 shrink-0 text-xs font-semibold text-bad">Your answer</span>}
    </button>
  )
}
