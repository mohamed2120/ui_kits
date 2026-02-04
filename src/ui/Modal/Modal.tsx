import {
  useEffect,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'

export interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
  className?: string
  title?: string
  description?: string
  closeAriaLabel?: string
}

export function Modal({
  open,
  onOpenChange,
  children,
  className,
  title,
  description,
  closeAriaLabel = 'Close modal',
}: ModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') onOpenChange(false)
    },
    [onOpenChange]
  )

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  const overlay = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-organic-ink/40 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
      onKeyDown={handleEscape}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-desc' : undefined}
    >
      <div
        className={cn(
          'relative w-full max-w-lg max-h-[90vh] overflow-auto rounded-organic-xl bg-organic-paper shadow-organic-lg border border-organic-border',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-organic-sage focus-visible:ring-offset-2',
          className
        )}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        {(title || closeAriaLabel) && (
          <div className="flex items-center justify-between gap-4 p-4 border-b border-organic-border">
            <div>
              {title && (
                <h2 id="modal-title" className="text-lg font-semibold text-organic-ink">
                  {title}
                </h2>
              )}
              {description && (
                <p id="modal-desc" className="text-sm text-organic-muted mt-0.5">
                  {description}
                </p>
              )}
            </div>
            <IconButton
              variant="ghost"
              size="sm"
              aria-label={closeAriaLabel}
              onClick={() => onOpenChange(false)}
            >
              <CloseIcon />
            </IconButton>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
