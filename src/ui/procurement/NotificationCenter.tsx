import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { formatDateTime } from '@/lib/procurement/formatters'

export type NotificationType = 'approval_request' | 'overdue' | 'vendor_update' | 'pr_approved' | 'po_issued'

export interface ProcurementNotification {
  id: string
  type: NotificationType
  title: string
  description?: string
  timestamp: string
  read?: boolean
  link?: string
}

export interface NotificationCenterProps {
  notifications: ProcurementNotification[]
  onMarkRead?: (id: string) => void
  onClearAll?: () => void
  className?: string
}

const typeConfig: Record<NotificationType, { label: string; variant: 'default' | 'success' | 'warning' | 'danger' }> = {
  approval_request: { label: 'Approval', variant: 'warning' },
  overdue: { label: 'Overdue', variant: 'danger' },
  vendor_update: { label: 'Vendor', variant: 'default' },
  pr_approved: { label: 'Approved', variant: 'success' },
  po_issued: { label: 'PO', variant: 'success' },
}

export function NotificationCenter({
  notifications,
  onMarkRead,
  onClearAll,
  className,
}: NotificationCenterProps) {
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base">Notifications</CardTitle>
        {onClearAll && notifications.length > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs text-organic-sage hover:underline"
          >
            Clear all
          </button>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        {notifications.length === 0 ? (
          <p className="text-sm text-organic-muted py-4 text-center">No notifications</p>
        ) : (
          <ul className="space-y-2 max-h-[320px] overflow-y-auto">
            {notifications.map((n) => {
              const config = typeConfig[n.type]
              return (
                <li
                  key={n.id}
                  className={cn(
                    'rounded-lg border p-3 transition-colors',
                    n.read ? 'bg-organic-sand/20 border-organic-border' : 'bg-organic-sage/5 border-organic-sage/20'
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Badge variant={config.variant} size="sm">
                          {config.label}
                        </Badge>
                        <span className="text-xs text-organic-muted">
                          {formatDateTime(n.timestamp, 'relative')}
                        </span>
                      </div>
                      <p className="font-medium text-organic-ink text-sm mt-0.5">{n.title}</p>
                      {n.description && (
                        <p className="text-xs text-organic-muted mt-0.5">{n.description}</p>
                      )}
                    </div>
                    {!n.read && onMarkRead && (
                      <button
                        type="button"
                        onClick={() => onMarkRead(n.id)}
                        className="text-xs text-organic-sage hover:underline shrink-0"
                      >
                        Mark read
                      </button>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
