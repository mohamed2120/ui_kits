import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-organic-xl border border-organic-border bg-organic-sand/30 py-12 px-6 text-center',
        className
      )}
      role="status"
      aria-label="Empty state"
    >
      {icon && (
        <div className="mb-4 text-organic-muted [&>svg]:w-12 [&>svg]:h-12">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-organic-ink">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-organic-muted max-w-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
