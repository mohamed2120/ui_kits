import { cn } from '@/lib/utils'

export interface SLAChipProps {
  targetDate: string
  completedDate?: string | null
  className?: string
}

function parseDate(s: string): Date {
  return new Date(s)
}

export function SLAChip({ targetDate, completedDate, className }: SLAChipProps) {
  const target = parseDate(targetDate)
  const completed = completedDate ? parseDate(completedDate) : null
  const now = new Date()

  if (completed) {
    const daysLate = Math.ceil((completed.getTime() - target.getTime()) / (1000 * 60 * 60 * 24))
    if (daysLate <= 0) {
      return (
        <span
          className={cn(
            'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800',
            className
          )}
        >
          On time
        </span>
      )
    }
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800',
          className
        )}
      >
        Late by {daysLate} day{daysLate !== 1 ? 's' : ''}
      </span>
    )
  }

  const daysUntil = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  if (daysUntil < 0) {
    const daysOverdue = Math.abs(daysUntil)
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-amber-100 text-amber-800',
          className
        )}
      >
        Overdue by {daysOverdue} day{daysOverdue !== 1 ? 's' : ''}
      </span>
    )
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-organic-sand text-organic-ink',
        className
      )}
    >
      Due in {daysUntil} day{daysUntil !== 1 ? 's' : ''}
    </span>
  )
}
