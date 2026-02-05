import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'

export type PurchasingObjectType = 'PR' | 'PO' | 'RFQ' | 'Contract'

export interface PurchasingObjectCardProps {
  /** Object type: Purchase Requisition, Purchase Order, etc. */
  type: PurchasingObjectType
  /** Document number (e.g. PR-2025-001) */
  number: string
  /** Status label */
  status: string
  /** Status badge variant */
  statusVariant?: 'default' | 'success' | 'warning' | 'danger' | 'outline'
  /** Total amount */
  totalAmount: number
  currency?: CurrencyCode
  /** Optional: requester or vendor name */
  secondary?: string
  /** Optional: date or due date */
  dateLabel?: string
  /** Optional icon or prefix */
  icon?: ReactNode
  onClick?: () => void
  className?: string
}

const typeLabels: Record<PurchasingObjectType, string> = {
  PR: 'Purchase requisition',
  PO: 'Purchase order',
  RFQ: 'Request for quotation',
  Contract: 'Contract',
}

export function PurchasingObjectCard({
  type,
  number,
  status,
  statusVariant = 'default',
  totalAmount,
  currency = 'SAR',
  secondary,
  dateLabel,
  icon,
  onClick,
  className,
}: PurchasingObjectCardProps) {
  const isClickable = Boolean(onClick)
  return (
    <Card
      variant="elevated"
      className={cn(
        'transition-colors',
        isClickable && 'cursor-pointer hover:border-organic-sage/50',
        className
      )}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            {icon && (
              <span className="mb-2 inline-flex text-organic-muted [&>svg]:h-4 [&>svg]:w-4">
                {icon}
              </span>
            )}
            <p className="text-xs font-medium uppercase tracking-wide text-organic-muted">
              {typeLabels[type]}
            </p>
            <p className="mt-0.5 font-semibold text-organic-ink">{number}</p>
            {secondary && (
              <p className="mt-0.5 text-sm text-organic-muted">{secondary}</p>
            )}
            {dateLabel && (
              <p className="mt-0.5 text-xs text-organic-muted">{dateLabel}</p>
            )}
          </div>
          <div className="shrink-0 text-right">
            <Badge variant={statusVariant} size="sm">
              {status}
            </Badge>
            <p className="mt-2 text-sm font-semibold text-organic-ink">
              {formatMoney(totalAmount, currency)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
