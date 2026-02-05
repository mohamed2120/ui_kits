import { cn } from '@/lib/utils'

export interface KeyValueItem {
  label: string
  value: string | number | React.ReactNode
}

export interface KeyValueBlockProps {
  items: KeyValueItem[]
  columns?: 1 | 2
  className?: string
}

export function KeyValueBlock({ items, columns = 1, className }: KeyValueBlockProps) {
  if (items.length === 0) return null
  return (
    <dl
      className={cn(
        'grid gap-x-6 gap-y-3',
        columns === 1 && 'grid-cols-1',
        columns === 2 && 'sm:grid-cols-2',
        className
      )}
    >
      {items.map((item, i) => (
        <div key={i}>
          <dt className="text-xs font-medium text-organic-muted uppercase tracking-wider">
            {item.label}
          </dt>
          <dd className="mt-0.5 text-sm text-organic-ink font-medium">
            {typeof item.value === 'string' || typeof item.value === 'number'
              ? String(item.value)
              : item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
