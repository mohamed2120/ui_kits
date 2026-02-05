import { cn } from '@/lib/utils'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'
import type { LineItem } from './LineItemsTable'

export interface LineItemsSummaryProps {
  items: LineItem[]
  currency?: CurrencyCode
  maxRows?: number
  className?: string
}

function lineTotal(item: LineItem): number {
  return item.quantity * item.unitPrice * (1 - (item.discount ?? 0) / 100) * (1 + (item.tax ?? 0) / 100)
}

export function LineItemsSummary({
  items,
  currency = 'SAR',
  maxRows = 5,
  className,
}: LineItemsSummaryProps) {
  const show = items.slice(0, maxRows)
  const hasMore = items.length > maxRows

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-organic-border text-left text-organic-muted">
            <th className="pb-2 pr-4 font-medium">Description</th>
            <th className="pb-2 pr-4 font-medium text-right">Qty</th>
            <th className="pb-2 pr-4 font-medium text-right">Unit price</th>
            <th className="pb-2 font-medium text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {show.map((item) => (
            <tr key={item.id} className="border-b border-organic-border/60">
              <td className="py-2 pr-4 text-organic-ink">{item.description}</td>
              <td className="py-2 pr-4 text-right text-organic-ink">{item.quantity} {item.uom}</td>
              <td className="py-2 pr-4 text-right text-organic-muted">
                {formatMoney(item.unitPrice, currency)}
              </td>
              <td className="py-2 text-right font-medium text-organic-ink">
                {formatMoney(lineTotal(item), currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hasMore && (
        <p className="text-xs text-organic-muted mt-2">
          +{items.length - maxRows} more line{items.length - maxRows !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}
