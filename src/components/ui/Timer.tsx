import { Clock } from 'lucide-react'
import { cn } from 'cn'

type Props = {
  /** Seconds remaining. Negative values are treated as zero. */
  seconds: number
  /** Shown next to the clock. */
  caption?: string
  className?: string
}

/**
 * The exam countdown. It changes weight and tone as the run tightens, and the
 * change is announced in text, not only in colour.
 */
export function Timer({ seconds, caption, className }: Props) {
  const remaining = Math.max(0, seconds)
  const totalMinutes = Math.floor(remaining / 60)
  const secs = remaining % 60
  const text = `${totalMinutes}:${String(secs).padStart(2, '0')}`

  const low = remaining <= 2 * 60
  const warn = !low && remaining <= 10 * 60

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-md border px-2.5 py-1',
        low && 'border-bad bg-bad-soft text-bad',
        warn && 'border-warn bg-warn-soft text-warn',
        !low && !warn && 'border-line bg-surface text-ink',
        className,
      )}
    >
      <Clock className="size-4" aria-hidden="true" />
      <span className="tabular text-base font-semibold">{text}</span>
      {caption && <span className="text-xs opacity-80">{caption}</span>}
      {low && <span className="sr-only">Time nearly up</span>}
    </div>
  )
}
