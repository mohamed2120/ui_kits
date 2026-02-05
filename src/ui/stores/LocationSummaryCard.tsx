import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { MapPinIcon } from '@/ui/icons'

export interface LocationSummaryCardProps {
  /** Total number of locations */
  totalCount: number
  /** Optional: count of open locations */
  openCount?: number
  /** Optional label (e.g. "stores", "warehouses") */
  label?: string
  className?: string
}

export function LocationSummaryCard({
  totalCount,
  openCount,
  label = 'locations',
  className,
}: LocationSummaryCardProps) {
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardContent className="p-4 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-organic-sage/20 text-organic-sage">
          <MapPinIcon className="w-6 h-6" />
        </span>
        <div>
          <p className="text-2xl font-bold text-organic-ink">{totalCount}</p>
          <p className="text-sm text-organic-muted">
            {totalCount === 1 ? label.slice(0, -1) : label}
            {openCount != null && (
              <span className="ml-1">· {openCount} open</span>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
