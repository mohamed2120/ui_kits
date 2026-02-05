import { cn } from '@/lib/utils'

export type ExceptionType = 'short_received' | 'damaged' | 'wrong_item' | 'over_received'

export interface ExceptionTagProps {
  type: ExceptionType
  quantity?: number
  className?: string
}

const config: Record<ExceptionType, { label: string; className: string }> = {
  short_received: {
    label: 'Short received',
    className: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  damaged: {
    label: 'Damaged',
    className: 'bg-red-100 text-red-800 border-red-200',
  },
  wrong_item: {
    label: 'Wrong item',
    className: 'bg-red-100 text-red-800 border-red-200',
  },
  over_received: {
    label: 'Over received',
    className: 'bg-organic-sand text-organic-ink border-organic-border',
  },
}

export function ExceptionTag({ type, quantity, className }: ExceptionTagProps) {
  const c = config[type]
  const text = quantity != null ? `${c.label} (${quantity})` : c.label
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium',
        c.className,
        className
      )}
    >
      {text}
    </span>
  )
}
