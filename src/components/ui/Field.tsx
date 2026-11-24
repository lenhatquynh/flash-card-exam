import type { InputHTMLAttributes, ReactNode } from 'react'
import { useId } from 'react'
import { cn } from 'cn'

type FieldOwnProps = {
  label: string
  /** One line under the label explaining what the number means. */
  hint?: string
  /** An error under the field. It replaces the hint. */
  error?: string
  /** The control. Receives the id the label points at. */
  children: (id: string) => ReactNode
}

export type FieldProps = FieldOwnProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'children'>

/**
 * A labelled control. The label says what goes in the field; the hint says
 * what the number means.
 */
export function Field({ label, hint, error, children, className }: FieldProps) {
  const id = useId()

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children(id)}
      {error ? (
        <p className="text-xs text-bad">{error}</p>
      ) : hint ? (
        <p className="text-xs text-ink-3">{hint}</p>
      ) : null}
    </div>
  )
}

/**
 * The standard number input used by the exam setup form. Native stepper
 * arrows are kept, because they are what a keyboard user expects.
 */
export function NumberInput({ id, className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={id}
      type="number"
      inputMode="numeric"
      className={cn(
        'h-10 w-full rounded-md border border-line bg-surface px-3 text-base text-ink tabular',
        'transition-colors duration-150 hover:border-line-strong',
        'focus:border-accent focus-visible:shadow-[var(--ring)]',
        className,
      )}
      {...rest}
    />
  )
}
