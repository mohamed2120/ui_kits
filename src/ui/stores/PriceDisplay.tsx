import { cn } from '@/lib/utils'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'

export interface PriceDisplayProps {
  amount: number
  currency?: CurrencyCode
  compareAt?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function PriceDisplay({
  amount,
  currency = 'SAR',
  compareAt,
  size = 'md',
  className,
}: PriceDisplayProps) {
  const hasSale = compareAt != null && compareAt > amount
  const sizeClass = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg font-semibold',
  }[size]
  return (
    <div className={cn('flex flex-wrap items-baseline gap-2', className)}>
      <span className={cn('text-organic-ink', sizeClass, hasSale && 'text-emerald-600')}>
        {formatMoney(amount, currency)}
      </span>
      {hasSale && (
        <span className="text-sm text-organic-muted line-through">
          {formatMoney(compareAt, currency)}
        </span>
      )}
    </div>
  )
}
