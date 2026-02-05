import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'

export type StoreStatus = 'open' | 'closed' | 'maintenance'

export interface StoreLocationCardProps {
  name: string
  code?: string
  address?: string
  status?: StoreStatus
  hours?: string
  phone?: string
  className?: string
}

const statusConfig: Record<StoreStatus, { label: string; variant: 'success' | 'default' | 'warning' }> = {
  open: { label: 'Open', variant: 'success' },
  closed: { label: 'Closed', variant: 'default' },
  maintenance: { label: 'Maintenance', variant: 'warning' },
}

export function StoreLocationCard({
  name,
  code,
  address,
  status = 'open',
  hours,
  phone,
  className,
}: StoreLocationCardProps) {
  const config = statusConfig[status]
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardContent className="p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-organic-ink">{name}</h3>
            {code && <p className="text-xs text-organic-muted font-mono mt-0.5">{code}</p>}
          </div>
          <Badge variant={config.variant} size="sm">
            {config.label}
          </Badge>
        </div>
        {address && (
          <p className="text-sm text-organic-muted mt-2">{address}</p>
        )}
        {hours && (
          <p className="text-xs text-organic-muted mt-1">Hours: {hours}</p>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="text-sm text-organic-sage hover:underline mt-1 inline-block">
            {phone}
          </a>
        )}
      </CardContent>
    </Card>
  )
}
