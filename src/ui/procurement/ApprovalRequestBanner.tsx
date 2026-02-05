import { cn } from '@/lib/utils'
import { Button } from '@/ui/Button'
import { InboxIcon } from '@/ui/icons'

export interface ApprovalRequestBannerProps {
  /** Document reference (e.g. PR-2025-001) */
  docNumber: string
  /** Short label (e.g. "Purchase request") */
  docType?: string
  /** Optional due text (e.g. "Due in 3 days" or "Overdue by 2 days") */
  dueText?: string
  /** Primary action label */
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export function ApprovalRequestBanner({
  docNumber,
  docType = 'Request',
  dueText,
  actionLabel = 'Review',
  onAction,
  className,
}: ApprovalRequestBannerProps) {
  return (
    <div
      role="status"
      className={cn(
        'flex flex-wrap items-center justify-between gap-4 rounded-xl border border-organic-sage/40 bg-organic-sage/5 px-4 py-3',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-organic-sage/20 text-organic-sage">
          <InboxIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-medium text-organic-ink">
            You have been asked to approve {docType} <strong>{docNumber}</strong>
          </p>
          {dueText && (
            <p className="text-sm text-organic-muted mt-0.5">{dueText}</p>
          )}
        </div>
      </div>
      {onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
