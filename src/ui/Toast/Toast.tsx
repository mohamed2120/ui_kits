import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

export type ToastPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type ToastItem = {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'success' | 'error' | 'info' | 'warning'
  /** Slightly translucent with backdrop blur (Upbit-style) */
  translucent?: boolean
  /** Optional action button (e.g. "Take action") */
  action?: { label: string; onClick: () => void }
  /** Auto-dismiss after ms; 0 = no auto-dismiss */
  duration?: number
}

type ToastContextValue = {
  toasts: ToastItem[]
  addToast: (t: Omit<ToastItem, 'id'>) => void
  removeToast: (id: string) => void
  placement: ToastPlacement
  setPlacement: (p: ToastPlacement) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}

export function ToastProvider({
  children,
  placement: defaultPlacement = 'bottom-right',
}: {
  children: ReactNode
  placement?: ToastPlacement
}) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const [placement, setPlacement] = useState<ToastPlacement>(defaultPlacement)

  const addToast = useCallback((t: Omit<ToastItem, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`
    const duration = t.duration ?? 5000
    setToasts((prev) => [...prev, { ...t, id }])
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== id))
      }, duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((x) => x.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, placement, setPlacement }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  )
}

const placementClasses: Record<ToastPlacement, string> = {
  'top-left': 'top-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
}

const toastVariantClasses: Record<NonNullable<ToastItem['variant']>, string> = {
  default: 'bg-organic-paper border-organic-border',
  success: 'bg-organic-paper border-organic-forest/50',
  error: 'bg-organic-paper border-organic-blossom/50',
  info: 'bg-organic-paper border-organic-ocean/50',
  warning: 'bg-organic-paper border-organic-clay/50',
}

function ToastViewport() {
  const { toasts, removeToast, placement } = useToast()
  if (toasts.length === 0) return null

  const list = (
    <div
      className={cn(
        'fixed z-50 flex flex-col gap-2 max-w-sm w-full',
        placementClasses[placement]
      )}
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="alert"
          className={cn(
            'rounded-organic-lg border shadow-organic-md p-4 flex flex-col gap-2 min-w-[280px]',
            toastVariantClasses[t.variant ?? 'default'],
            t.translucent && 'bg-organic-paper/90 backdrop-blur-md border-organic-border/80'
          )}
        >
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-organic-ink">{t.title}</p>
              {t.description && (
                <p className="text-sm text-organic-muted mt-0.5">{t.description}</p>
              )}
            </div>
            <button
              type="button"
              aria-label="Dismiss"
              className="shrink-0 text-organic-muted hover:text-organic-ink focus-ring rounded"
              onClick={() => removeToast(t.id)}
            >
              <span className="sr-only">Dismiss</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {t.action && (
            <div className="flex items-center gap-2 pt-1 border-t border-organic-border/50">
              <button
                type="button"
                className="text-sm font-medium text-organic-sage hover:text-organic-forest focus-ring rounded"
                onClick={() => {
                  t.action?.onClick()
                  removeToast(t.id)
                }}
              >
                {t.action.label}
              </button>
              <button
                type="button"
                className="text-sm text-organic-muted hover:text-organic-ink focus-ring rounded"
                onClick={() => removeToast(t.id)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return createPortal(list, document.body)
}
