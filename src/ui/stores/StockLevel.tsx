import { cn } from '@/lib/utils'

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock'

export interface StockLevelProps {
  status: StockStatus
  quantity?: number
  lowThreshold?: number
  label?: string
  className?: string
}

const statusConfig: Record<StockStatus, { label: string; className: string }> = {
  in_stock: {
    label: 'In stock',
    className: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  low_stock: {
    label: 'Low stock',
    className: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  out_of_stock: {
    label: 'Out of stock',
    className: 'bg-red-100 text-red-800 border-red-200',
  },
}

export function StockLevel({
  status,
  quantity,
  lowThreshold,
  label,
  className,
}: StockLevelProps) {
  const config = statusConfig[status]
  const displayLabel = label ?? config.label
  const showQty = quantity != null && status !== 'out_of_stock'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium',
        config.className,
        className
      )}
      title={lowThreshold != null ? `Low stock threshold: ${lowThreshold}` : undefined}
    >
      {displayLabel}
      {showQty && <span className="opacity-90">({quantity})</span>}
    </span>
  )
}
