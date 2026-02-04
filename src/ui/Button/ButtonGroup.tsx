import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonGroupProps {
  children: ReactNode
  className?: string
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div
      className={cn('inline-flex rounded-lg border border-organic-border overflow-hidden [&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md [&>button:not(:first-child)]:border-l [&>button:not(:first-child)]:border-organic-border', className)}
      role="group"
    >
      {children}
    </div>
  )
}
