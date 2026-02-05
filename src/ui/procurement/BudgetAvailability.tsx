import { cn } from '@/lib/utils'

export type BudgetStatus = 'available' | 'low' | 'over'

export interface BudgetAvailabilityProps {
  status: BudgetStatus
  label?: string
  className?: string
}

const config: Record<BudgetStatus, { label: string; className: string }> = {
  available: {
    label: 'Available',
    className: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  low: {
    label: 'Low',
    className: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  over: {
    label: 'Over',
    className: 'bg-red-100 text-red-800 border-red-200',
  },
}

export function BudgetAvailability({
  status,
  label,
  className,
}: BudgetAvailabilityProps) {
  const c = config[status]
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium',
        c.className,
        className
      )}
    >
      {label ?? c.label}
    </span>
  )
}
