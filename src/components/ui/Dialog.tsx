import type { ReactNode } from 'react'
import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from 'cn'

type Props = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  /** Rendered in the footer, right-aligned. */
  actions?: ReactNode
  /** The dialog sits at the bottom edge of the screen instead of the middle. */
  sheetOnNarrow?: boolean
}

/**
 * A modal built on the native `<dialog>` element, so focus is trapped and
 * the escape key works without reimplementing either.
 */
export function Dialog({ open, title, onClose, children, actions, sheetOnNarrow }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onCancel = (e: Event) => {
      e.preventDefault()
      onClose()
    }
    el.addEventListener('cancel', onCancel)
    return () => el.removeEventListener('cancel', onCancel)
  }, [onClose])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClick={(e) => {
        // A click on the backdrop (outside the panel) closes the dialog.
        if (e.target === ref.current) onClose()
      }}
      className={cn(
        'w-[calc(100vw-2rem)] max-w-md bg-transparent p-0 text-ink',
        'm-auto backdrop:bg-black/45',
      )}
    >
      <div
        className={cn(
          'border border-line bg-surface p-5 shadow-lg',
          'rounded-lg',
          sheetOnNarrow && 'sm:rounded-lg',
        )}
      >
        <div className="mb-3 flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-lg font-semibold text-ink">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 -mt-1 grid size-8 shrink-0 place-items-center rounded-md text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="text-sm leading-relaxed text-ink-2">{children}</div>
        {actions && <div className="mt-5 flex justify-end gap-2">{actions}</div>}
      </div>
    </dialog>
  )
}
