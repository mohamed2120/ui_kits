import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'soft'
}

const variantStyles = {
  elevated:
    'bg-organic-paper shadow-organic border border-organic-border/80',
  outlined: 'bg-organic-paper border border-organic-border',
  soft: 'bg-organic-sand/60 border border-organic-border/60',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'elevated', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl overflow-hidden transition-shadow hover:shadow-organic-md',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-6 py-4 border-b border-organic-border', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold text-organic-ink', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-organic-muted mt-1', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('px-6 py-4', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'px-6 py-4 border-t border-organic-border bg-organic-sand/30',
      className
    )}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
