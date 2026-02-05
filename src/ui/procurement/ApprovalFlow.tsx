import { cn } from '@/lib/utils'
import { Badge } from '@/ui/Badge'
import { formatDateTime } from '@/lib/procurement/formatters'
import { approvalStepStatusConfig, type ApprovalStepStatus } from '@/lib/procurement/statusModel'

export interface ApprovalStep {
  id: string
  role: string
  name: string
  status: ApprovalStepStatus
  timestamp?: string
  comment?: string
}

export interface ApprovalFlowProps {
  steps: ApprovalStep[]
  className?: string
}

export function ApprovalFlow({ steps, className }: ApprovalFlowProps) {
  return (
    <div className={cn('space-y-0', className)} role="list" aria-label="Approval flow">
      {steps.map((step, i) => {
        const config = approvalStepStatusConfig[step.status]
        const isLast = i === steps.length - 1
        return (
          <div key={step.id} className="relative flex gap-4">
            {!isLast && (
              <span
                className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-organic-stone"
                aria-hidden
              />
            )}
            <span
              className={cn(
                'shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium',
                step.status === 'approved' && 'border-emerald-500 bg-emerald-50 text-emerald-700',
                step.status === 'rejected' && 'border-red-500 bg-red-50 text-red-700',
                step.status === 'pending' && 'border-amber-400 bg-amber-50 text-amber-800',
                step.status === 'skipped' && 'border-organic-muted bg-organic-sand text-organic-muted'
              )}
            >
              {step.status === 'approved' ? '✓' : step.status === 'rejected' ? '✗' : i + 1}
            </span>
            <div className="flex-1 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-organic-ink">{step.role}</span>
                <span className="text-sm text-organic-muted">{step.name}</span>
                <Badge variant={config.variant} size="sm">
                  {config.label}
                </Badge>
              </div>
              {step.timestamp && (
                <p className="text-xs text-organic-muted mt-0.5">
                  {formatDateTime(step.timestamp, 'datetime')}
                </p>
              )}
              {step.comment && (
                <p className="text-sm text-organic-muted mt-1 italic">"{step.comment}"</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
