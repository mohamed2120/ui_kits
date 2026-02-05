import { cn } from '@/lib/utils'

export interface DividerProps {
  label?: string
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Divider({ label, orientation = 'horizontal', className }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('shrink-0 w-px self-stretch bg-organic-border', className)}
      />
    )
  }
  if (label) {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <span className="flex-1 border-t border-organic-border" />
        <span className="text-xs font-medium text-organic-muted uppercase tracking-wider">{label}</span>
        <span className="flex-1 border-t border-organic-border" />
      </div>
    )
  }
  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn('border-0 border-t border-organic-border', className)}
    />
  )
}
