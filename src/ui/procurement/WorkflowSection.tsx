import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface WorkflowSectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function WorkflowSection({
  title,
  description,
  children,
  className,
}: WorkflowSectionProps) {
  return (
    <section className={cn('space-y-3', className)} aria-labelledby={`workflow-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div>
        <h2
          id={`workflow-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-sm font-semibold uppercase tracking-wide text-organic-muted"
        >
          {title}
        </h2>
        {description && (
          <p className="text-sm text-organic-muted mt-0.5">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}
