import { useState } from 'react'
import { cn } from '@/lib/utils'
import { formatMoney, type CurrencyCode } from '@/lib/procurement/formatters'
import { Input } from '@/ui/Input'
import { Badge } from '@/ui/Badge'

export interface LineItem {
  id: string
  description: string
  quantity: number
  uom: string
  unitPrice: number
  discount?: number
  tax?: number
  costCenter?: string
  glCode?: string
  errors?: string[]
}

export interface LineItemsTableProps {
  items: LineItem[]
  currency?: CurrencyCode
  editable?: boolean
  onItemsChange?: (items: LineItem[]) => void
  showCostCenter?: boolean
  className?: string
}

export function LineItemsTable({
  items,
  currency = 'SAR',
  editable,
  onItemsChange,
  showCostCenter = true,
  className,
}: LineItemsTableProps) {
  const [localItems, setLocalItems] = useState<LineItem[]>(items)

  const updateItem = (id: string, updates: Partial<LineItem>) => {
    const next = localItems.map((i) => (i.id === id ? { ...i, ...updates } : i))
    setLocalItems(next)
    onItemsChange?.(next)
  }

  const lineTotal = (item: LineItem) => {
    const net = item.quantity * item.unitPrice * (1 - (item.discount ?? 0) / 100)
    return net * (1 + (item.tax ?? 0) / 100)
  }

  const list = editable ? localItems : items

  return (
    <div className={cn('overflow-x-auto rounded-xl border border-organic-border', className)}>
      <table className="w-full text-sm" role="table">
        <thead>
          <tr className="border-b border-organic-border bg-organic-sand/50">
            <th className="text-left p-3 font-medium text-organic-ink">#</th>
            <th className="text-left p-3 font-medium text-organic-ink">Description</th>
            <th className="text-left p-3 font-medium text-organic-ink">Qty</th>
            <th className="text-left p-3 font-medium text-organic-ink">UOM</th>
            <th className="text-right p-3 font-medium text-organic-ink">Unit price</th>
            <th className="text-right p-3 font-medium text-organic-ink">Disc. %</th>
            <th className="text-right p-3 font-medium text-organic-ink">Tax %</th>
            {showCostCenter && (
              <th className="text-left p-3 font-medium text-organic-ink">Cost center</th>
            )}
            <th className="text-right p-3 font-medium text-organic-ink">Line total</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <tr
              key={item.id}
              className={cn(
                'border-b border-organic-border',
                item.errors && item.errors.length > 0 && 'bg-red-50/50'
              )}
            >
              <td className="p-3 text-organic-muted">{idx + 1}</td>
              <td className="p-3">
                <span className="font-medium text-organic-ink">{item.description}</span>
                {item.errors && item.errors.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {item.errors.map((e) => (
                      <Badge key={e} variant="danger" size="sm">
                        {e}
                      </Badge>
                    ))}
                  </div>
                )}
              </td>
              <td className="p-3">
                {editable ? (
                  <Input
                    type="number"
                    min={0}
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(item.id, { quantity: Number(e.target.value) || 0 })
                    }
                    className="w-20"
                    aria-label="Quantity"
                  />
                ) : (
                  item.quantity
                )}
              </td>
              <td className="p-3 text-organic-muted">{item.uom}</td>
              <td className="p-3 text-right">
                {editable ? (
                  <Input
                    type="number"
                    min={0}
                    step={0.01}
                    value={item.unitPrice}
                    onChange={(e) =>
                      updateItem(item.id, { unitPrice: Number(e.target.value) || 0 })
                    }
                    className="w-24 text-right"
                    aria-label="Unit price"
                  />
                ) : (
                  formatMoney(item.unitPrice, currency)
                )}
              </td>
              <td className="p-3 text-right">{item.discount ?? 0}%</td>
              <td className="p-3 text-right">{item.tax ?? 0}%</td>
              {showCostCenter && (
                <td className="p-3 text-organic-muted">{item.costCenter ?? '—'}</td>
              )}
              <td className="p-3 text-right font-medium">
                {formatMoney(lineTotal(item), currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
