import { cn } from '@/lib/utils'

export interface FilterChipItem {
  id: string
  label: string
  active?: boolean
}

export interface FilterChipsProps {
  items: FilterChipItem[]
  onToggle: (id: string) => void
  onClear?: () => void
  className?: string
}

export function FilterChips({
  items,
  onToggle,
  onClear,
  className,
}: FilterChipsProps) {
  const activeCount = items.filter((i) => i.active).length
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="option"
          aria-pressed={item.active}
          aria-label={`Filter by ${item.label}${item.active ? ', active' : ''}`}
          className={cn(
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-organic text-sm font-medium transition-colors focus-ring',
            item.active
              ? 'bg-organic-sage text-white'
              : 'bg-organic-sand text-organic-ink hover:bg-organic-stone'
          )}
          onClick={() => onToggle(item.id)}
        >
          {item.label}
        </button>
      ))}
      {onClear && activeCount > 0 && (
        <button
          type="button"
          className="text-sm text-organic-muted hover:text-organic-ink focus-ring rounded-organic px-2 py-1"
          onClick={onClear}
        >
          Clear all
        </button>
      )}
    </div>
  )
}
