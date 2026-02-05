import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'

export interface QuoteItem {
  description: string
  qty: number
  uom: string
  unitPrice: number
  total: number
}

export interface VendorQuote {
  vendorName: string
  total: number
  validUntil?: string
  items: QuoteItem[]
  selected?: boolean
}

export interface ThreeQuoteCompareProps {
  quotes: VendorQuote[]
  currency?: CurrencyCode
  onSelect?: (index: number) => void
  className?: string
}

export function ThreeQuoteCompare({
  quotes,
  currency = 'SAR',
  onSelect,
  className,
}: ThreeQuoteCompareProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="grid gap-4 sm:grid-cols-3">
        {quotes.map((q, idx) => (
          <Card
            key={idx}
            variant="elevated"
            className={cn(
              'overflow-hidden',
              q.selected && 'ring-2 ring-organic-sage'
            )}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{q.vendorName}</CardTitle>
                {q.selected && (
                  <Badge variant="success" size="sm">Selected</Badge>
                )}
              </div>
              <p className="text-sm font-semibold text-organic-ink mt-1">
                {formatMoney(q.total, currency)}
              </p>
              {q.validUntil && (
                <p className="text-xs text-organic-muted">Valid until {q.validUntil}</p>
              )}
              {onSelect && !q.selected && (
                <button
                  type="button"
                  onClick={() => onSelect(idx)}
                  className="text-sm text-organic-sage hover:underline mt-1"
                >
                  Select this quote
                </button>
              )}
            </CardHeader>
            <CardContent className="pt-0 max-h-48 overflow-y-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-organic-border">
                    <th className="text-left py-1 font-medium">Item</th>
                    <th className="text-right py-1 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {q.items.map((i, iidx) => (
                    <tr key={iidx} className="border-b border-organic-border/50">
                      <td className="py-1">{i.description}</td>
                      <td className="py-1 text-right">{formatMoney(i.total, currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
