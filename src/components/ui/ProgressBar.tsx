import { cn } from 'cn'

type Props = {
  /** 0 to 1. */
  value: number
  label?: string
  /** The bar is also a value readout when a label is given. */
  className?: string
}

/**
 * A thin progress bar. The filled portion carries the value; the track keeps
 * the full length visible so the learner can judge how much is left.
 */
export function ProgressBar({ value, label, className }: Props) {
  const pct = Math.min(100, Math.max(0, value * 100))

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      aria-label={label}
      className={cn('h-1.5 w-full overflow-hidden rounded-full bg-surface-3', className)}
    >
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-200 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
