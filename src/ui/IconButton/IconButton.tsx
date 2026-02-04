import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  'aria-label': string
}

const variantStyles = {
  primary:
    'bg-organic-sage text-white shadow-organic hover:bg-organic-forest focus-ring',
  secondary:
    'bg-organic-sand text-organic-ink hover:bg-organic-stone focus-ring',
  outline:
    'border-2 border-organic-stone bg-transparent hover:bg-organic-sand focus-ring',
  ghost: 'bg-transparent hover:bg-organic-sand focus-ring',
}

const sizeStyles = {
  sm: 'w-8 h-8 rounded-organic',
  md: 'w-10 h-10 rounded-organic',
  lg: 'w-12 h-12 rounded-organic-lg',
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = 'secondary',
      size = 'md',
      children,
      disabled,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center transition-colors [&>svg]:w-[1em] [&>svg]:h-[1em]',
        variantStyles[variant],
        sizeStyles[size],
        size === 'sm' && '[&>svg]:w-4 [&>svg]:h-4',
        size === 'md' && '[&>svg]:w-5 [&>svg]:h-5',
        size === 'lg' && '[&>svg]:w-6 [&>svg]:h-6',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
)
IconButton.displayName = 'IconButton'
