import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface PrintViewProps {
  children: ReactNode
  className?: string
  title?: string
}

/**
 * Wrapper for printable PR/PO layout. Use with window.print() or a Print button.
 * Apply print-specific styles (e.g. hide sidebar in print).
 */
export function PrintView({ children, className, title }: PrintViewProps) {
  return (
    <div
      className={cn('print-view bg-white text-black p-6', className)}
      data-print-title={title}
    >
      {title && (
        <h1 className="text-xl font-bold mb-4 print:block hidden sm:block">{title}</h1>
      )}
      {children}
    </div>
  )
}
