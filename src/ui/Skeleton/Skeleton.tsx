import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'animate-pulse rounded-organic bg-organic-stone/60',
        className
      )}
      {...props}
    />
  )
)
Skeleton.displayName = 'Skeleton'
