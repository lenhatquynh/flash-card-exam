import type { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from 'cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export type LinkButtonProps = {
  href: string
  variant?: Variant
  size?: Size
  icon?: ReactNode
  block?: boolean
  className?: string
  children: ReactNode
}

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-ink border-transparent hover:bg-accent-hover active:bg-accent-hover',
  secondary:
    'bg-surface text-ink border-line hover:bg-surface-2 hover:border-line-strong active:bg-surface-3',
  ghost:
    'bg-transparent text-ink-2 border-transparent hover:bg-surface-2 hover:text-ink active:bg-surface-3',
  danger: 'bg-bad text-white border-transparent hover:brightness-110 active:brightness-95',
}

const SIZES: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-base gap-2',
  lg: 'h-12 px-5 text-base gap-2',
}

/**
 * A link that looks like the app's button.
 *
 * It is a real link, so it can be opened in a new tab, copied, and followed
 * by the keyboard — which a `<button>` styled as a link cannot do.
 */
export function LinkButton({
  href,
  variant = 'secondary',
  size = 'md',
  icon,
  block,
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-md border font-medium',
        'transition-colors duration-150 select-none',
        VARIANTS[variant],
        SIZES[size],
        block && 'w-full',
        className,
      )}
    >
      {icon}
      {children}
    </Link>
  )
}
