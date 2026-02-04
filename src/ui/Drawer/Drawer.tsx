import {
  useEffect,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'

export interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
  side?: 'left' | 'right'
  className?: string
  title?: string
  closeAriaLabel?: string
}

export function Drawer({
  open,
  onOpenChange,
  children,
  side = 'right',
  className,
  title,
  closeAriaLabel = 'Close drawer',
}: DrawerProps) {
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

  const panel = (
    <div
      className="fixed inset-0 z-50 flex"
      onKeyDown={handleEscape}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Drawer'}
    >
      <div
        className="absolute inset-0 bg-organic-ink/30 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden
      />
      <aside
        className={cn(
          'relative w-full max-w-sm bg-organic-paper shadow-organic-lg border-organic-border flex flex-col transition-transform duration-300 ease-out',
          side === 'left' ? 'border-r' : 'border-l ml-auto',
          className
        )}
      >
        <div className="flex items-center justify-between gap-4 p-4 border-b border-organic-border">
          {title && (
            <h2 className="text-lg font-semibold text-organic-ink">{title}</h2>
          )}
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={closeAriaLabel}
            onClick={() => onOpenChange(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </aside>
    </div>
  )

  return createPortal(panel, document.body)
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
