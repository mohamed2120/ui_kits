import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'outline'
  size?: 'sm' | 'md'
}

const variantStyles = {
  default: 'bg-organic-sand text-organic-ink',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-red-100 text-red-700',
  outline: 'border border-organic-stone bg-transparent text-organic-ink',
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center font-medium rounded-md',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
)
Badge.displayName = 'Badge'
