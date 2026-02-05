import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'

export interface TotalsRow {
  label: string
  amount: number
}

export interface TotalsCardProps {
  subtotal: number
  tax?: number
  freight?: number
  discount?: number
  currency?: CurrencyCode
  extraRows?: TotalsRow[]
  className?: string
}

export function TotalsCard({
  subtotal,
  tax = 0,
  freight = 0,
  discount = 0,
  currency = 'SAR',
  extraRows = [],
  className,
}: TotalsCardProps) {
  const total = subtotal + tax + freight - discount
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardContent className="p-4">
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-organic-muted">Subtotal</dt>
            <dd className="font-medium text-organic-ink">{formatMoney(subtotal, currency)}</dd>
          </div>
          {extraRows.map((r) => (
            <div key={r.label} className="flex justify-between">
              <dt className="text-organic-muted">{r.label}</dt>
              <dd className="font-medium text-organic-ink">{formatMoney(r.amount, currency)}</dd>
            </div>
          ))}
          {tax > 0 && (
            <div className="flex justify-between">
              <dt className="text-organic-muted">Tax</dt>
              <dd className="font-medium text-organic-ink">{formatMoney(tax, currency)}</dd>
            </div>
          )}
          {freight > 0 && (
            <div className="flex justify-between">
              <dt className="text-organic-muted">Freight</dt>
              <dd className="font-medium text-organic-ink">{formatMoney(freight, currency)}</dd>
            </div>
          )}
          {discount > 0 && (
            <div className="flex justify-between text-emerald-600">
              <dt>Discount</dt>
              <dd className="font-medium">-{formatMoney(discount, currency)}</dd>
            </div>
          )}
          <div className="flex justify-between border-t border-organic-border pt-3 mt-2">
            <dt className="font-semibold text-organic-ink">Grand total</dt>
            <dd className="font-semibold text-organic-ink">{formatMoney(total, currency)}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}
