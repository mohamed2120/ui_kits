import { cn } from '@/lib/utils'
import { Badge } from '@/ui/Badge'
import { Card, CardContent } from '@/ui/Card'
import { docStatusConfig, type DocStatus } from '@/lib/procurement/statusModel'
import { formatDateTime } from '@/lib/procurement/formatters'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'
import { SLAChip } from './SLAChip'

export interface DocHeaderCardProps {
  docNumber: string
  status: DocStatus
  requester: string
  plantBranch?: string
  costCenter?: string
  totalAmount?: number
  currency?: CurrencyCode
  createdAt?: string
  targetDate?: string
  completedDate?: string | null
  className?: string
}

export function DocHeaderCard({
  docNumber,
  status,
  requester,
  plantBranch,
  costCenter,
  totalAmount,
  currency = 'SAR',
  createdAt,
  targetDate,
  completedDate,
  className,
}: DocHeaderCardProps) {
  const config = docStatusConfig[status]
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardContent className="p-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-organic-ink">{docNumber}</h2>
              <Badge variant={config.variant} size="sm">
                {config.label}
              </Badge>
              {targetDate && (
                <SLAChip targetDate={targetDate} completedDate={completedDate} />
              )}
            </div>
            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div>
                <dt className="text-organic-muted">Requester</dt>
                <dd className="font-medium text-organic-ink">{requester}</dd>
              </div>
              {plantBranch && (
                <div>
                  <dt className="text-organic-muted">Plant / Branch</dt>
                  <dd className="font-medium text-organic-ink">{plantBranch}</dd>
                </div>
              )}
              {costCenter && (
                <div>
                  <dt className="text-organic-muted">Cost center</dt>
                  <dd className="font-medium text-organic-ink">{costCenter}</dd>
                </div>
              )}
              {createdAt && (
                <div>
                  <dt className="text-organic-muted">Created</dt>
                  <dd className="font-medium text-organic-ink">
                    {formatDateTime(createdAt, 'date')}
                  </dd>
                </div>
              )}
            </dl>
          </div>
          {totalAmount != null && (
            <div className="text-right">
              <p className="text-sm text-organic-muted">Total</p>
              <p className="text-xl font-semibold text-organic-ink">
                {formatMoney(totalAmount, currency)}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
