import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface DataToolbarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function DataToolbar({ className, children, ...props }: DataToolbarProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-3 p-3 rounded-organic-lg bg-organic-sand/50 border border-organic-border',
        className
      )}
      role="toolbar"
      aria-label="Data toolbar"
      {...props}
    >
      {children}
    </div>
  )
}

export function DataToolbarGroup({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  )
}

export function DataToolbarLabel({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('text-sm font-medium text-organic-muted', className)}
      {...props}
    />
  )
}
