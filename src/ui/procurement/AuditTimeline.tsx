import { cn } from '@/lib/utils'
import { formatDateTime } from '@/lib/procurement/formatters'

export interface AuditEvent {
  id: string
  type: 'created' | 'updated' | 'approved' | 'rejected' | 'sent_back' | 'po_issued' | 'item_added' | 'field_changed' | 'comment'
  label: string
  timestamp: string
  user?: string
  details?: string
  changeDiff?: { field: string; before: string; after: string }[]
}

export interface AuditTimelineProps {
  events: AuditEvent[]
  className?: string
}

const typeStyles: Record<string, string> = {
  created: 'border-emerald-400 bg-emerald-50 text-emerald-800',
  approved: 'border-emerald-400 bg-emerald-50 text-emerald-800',
  po_issued: 'border-emerald-400 bg-emerald-50 text-emerald-800',
  updated: 'border-organic-sage bg-organic-sage/10 text-organic-ink',
  field_changed: 'border-organic-sage bg-organic-sage/10 text-organic-ink',
  item_added: 'border-organic-sage bg-organic-sage/10 text-organic-ink',
  rejected: 'border-red-400 bg-red-50 text-red-800',
  sent_back: 'border-amber-400 bg-amber-50 text-amber-800',
  comment: 'border-organic-stone bg-organic-sand text-organic-ink',
}

export function AuditTimeline({ events, className }: AuditTimelineProps) {
  return (
    <ul className={cn('space-y-0', className)} role="list" aria-label="Audit trail">
      {events.map((event, i) => {
        const isLast = i === events.length - 1
        return (
          <li key={event.id} className="relative flex gap-4">
            {!isLast && (
              <span
                className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-organic-stone"
                aria-hidden
              />
            )}
            <span
              className={cn(
                'shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium',
                typeStyles[event.type] ?? 'border-organic-stone bg-organic-sand'
              )}
            >
              •
            </span>
            <div className="flex-1 pb-5">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-organic-ink">{event.label}</span>
                {event.user && (
                  <span className="text-sm text-organic-muted">by {event.user}</span>
                )}
              </div>
              <p className="text-xs text-organic-muted mt-0.5">
                {formatDateTime(event.timestamp, 'datetime')}
              </p>
              {event.details && (
                <p className="text-sm text-organic-muted mt-1">{event.details}</p>
              )}
              {event.changeDiff && event.changeDiff.length > 0 && (
                <div className="mt-2 space-y-1">
                  {event.changeDiff.map((d) => (
                    <div
                      key={d.field}
                      className="text-sm rounded-lg bg-organic-sand/50 px-2 py-1 font-mono"
                    >
                      <span className="text-organic-muted">{d.field}:</span>{' '}
                      <span className="line-through text-red-600">{d.before}</span>
                      {' → '}
                      <span className="text-emerald-700">{d.after}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
