import { cn } from '@/lib/utils'
import { AlertCircleIcon } from '@/ui/icons'

export interface EscalationBannerProps {
  message: string
  /** e.g. "Finance" */
  waitingFor?: string
  daysWaiting?: number
  variant?: 'warning' | 'danger'
  className?: string
}

export function EscalationBanner({
  message,
  waitingFor,
  daysWaiting,
  variant = 'warning',
  className,
}: EscalationBannerProps) {
  const displayMessage =
    message ||
    (waitingFor && daysWaiting != null
      ? `Waiting for ${waitingFor} ${daysWaiting} day${daysWaiting !== 1 ? 's' : ''}`
      : 'Escalation: action required')

  return (
    <div
      role="alert"
      className={cn(
        'flex items-center gap-3 rounded-xl border px-4 py-3',
        variant === 'warning' && 'border-amber-300 bg-amber-50 text-amber-900',
        variant === 'danger' && 'border-red-300 bg-red-50 text-red-900',
        className
      )}
    >
      <AlertCircleIcon className="w-5 h-5 shrink-0" />
      <span className="text-sm font-medium">{displayMessage}</span>
    </div>
  )
}
