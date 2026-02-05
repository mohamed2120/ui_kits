import { cn } from '@/lib/utils'
import { formatDateTime } from '@/lib/procurement/formatters'

export type DeliveryStage = 'ordered' | 'shipped' | 'received' | 'closed'

export interface DeliveryTrackerProps {
  stages: {
    ordered?: string
    shipped?: string
    received?: string
    closed?: string
  }
  currentStage: DeliveryStage
  className?: string
}

const stageOrder: DeliveryStage[] = ['ordered', 'shipped', 'received', 'closed']
const stageLabels: Record<DeliveryStage, string> = {
  ordered: 'Ordered',
  shipped: 'Shipped',
  received: 'Received',
  closed: 'Closed',
}

export function DeliveryTracker({ stages, currentStage, className }: DeliveryTrackerProps) {
  const currentIdx = stageOrder.indexOf(currentStage)

  return (
    <div className={cn('flex flex-wrap gap-4', className)} role="list" aria-label="Delivery status">
      {stageOrder.map((stage, i) => {
        const date = stages[stage]
        const isActive = i <= currentIdx
        const isCurrent = stage === currentStage
        return (
          <div key={stage} className="flex items-center gap-2">
            <div
              className={cn(
                'flex flex-col rounded-lg border px-3 py-2 min-w-[100px]',
                isCurrent && 'border-organic-sage bg-organic-sage/10',
                isActive && !isCurrent && 'border-organic-stone bg-organic-sand/50',
                !isActive && 'border-organic-border bg-organic-sand/20 opacity-70'
              )}
            >
              <span
                className={cn(
                  'text-xs font-medium',
                  isCurrent ? 'text-organic-sage' : 'text-organic-muted'
                )}
              >
                {stageLabels[stage]}
              </span>
              {date ? (
                <span className="text-sm font-medium text-organic-ink">
                  {formatDateTime(date, 'date')}
                </span>
              ) : (
                <span className="text-xs text-organic-muted">—</span>
              )}
            </div>
            {i < stageOrder.length - 1 && (
              <span className="text-organic-muted">→</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
