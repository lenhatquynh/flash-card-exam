import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from 'cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  /** Rendered before the label. */
  icon?: ReactNode
  /** Stretches the button to the width of its container. */
  block?: boolean
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-ink border-transparent hover:bg-accent-hover active:bg-accent-hover disabled:hover:bg-accent',
  secondary:
    'bg-surface text-ink border-line hover:bg-surface-2 hover:border-line-strong active:bg-surface-3',
  ghost:
    'bg-transparent text-ink-2 border-transparent hover:bg-surface-2 hover:text-ink active:bg-surface-3',
  danger:
    'bg-bad text-white border-transparent hover:brightness-110 active:brightness-95 dark:text-bad-ink dark:bg-bad-soft dark:border-bad-line',
}

const SIZES: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-base gap-2',
  lg: 'h-12 px-5 text-base gap-2',
}

/**
 * The one button in the app. Every control that acts uses this so the shape
 * stays identical screen to screen.
 */
export function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  block,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md border font-medium',
        'transition-colors duration-150 select-none',
        'disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none',
        VARIANTS[variant],
        SIZES[size],
        block && 'w-full',
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}
