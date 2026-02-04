import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

const sizeStyles = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-[3px]',
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn(
        'rounded-full border-organic-sage border-t-transparent animate-spin',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading</span>
    </div>
  )
)
Spinner.displayName = 'Spinner'
