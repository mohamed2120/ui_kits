import { cn } from '@/lib/utils'

export interface CategoryChipProps {
  label: string
  variant?: 'default' | 'primary'
  className?: string
}

export function CategoryChip({ label, variant = 'default', className }: CategoryChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium',
        variant === 'default' && 'border-organic-border bg-organic-sand text-organic-ink',
        variant === 'primary' && 'border-organic-sage/30 bg-organic-sage/10 text-organic-sage',
        className
      )}
    >
      {label}
    </span>
  )
}
