import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  variant?: 'default' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const variantStyles = {
  default: 'bg-organic-sage',
  success: 'bg-organic-forest',
  warning: 'bg-organic-clay',
  danger: 'bg-organic-blossom',
}

const sizeStyles = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      variant = 'default',
      size = 'md',
      showLabel,
      className,
      ...props
    },
    ref
  ) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100))
    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div
          className={cn(
            'w-full rounded-organic overflow-hidden bg-organic-sand',
            sizeStyles[size]
          )}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={props['aria-label'] ?? 'Progress'}
        >
          <div
            className={cn(
              'h-full rounded-organic transition-all duration-300',
              variantStyles[variant]
            )}
            style={{ width: `${pct}%` }}
          />
        </div>
        {showLabel && (
          <p className="text-sm text-organic-muted mt-1 text-right">{Math.round(pct)}%</p>
        )}
      </div>
    )
  }
)
Progress.displayName = 'Progress'
