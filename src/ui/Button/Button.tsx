import { forwardRef, type ReactNode } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Spinner } from '@/ui/Spinner'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
}

const variantStyles = {
  primary:
    'bg-organic-sage text-white shadow-sm hover:bg-organic-ocean focus-ring',
  secondary:
    'bg-organic-sand text-organic-ink hover:bg-organic-stone/80 focus-ring',
  outline:
    'border border-organic-stone bg-transparent hover:bg-organic-sand focus-ring',
  ghost: 'bg-transparent hover:bg-organic-sand focus-ring',
  danger:
    'bg-red-500 text-white shadow-sm hover:bg-red-600 focus-ring',
  success:
    'bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 focus-ring',
  warning:
    'bg-amber-500 text-white shadow-sm hover:bg-amber-600 focus-ring',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
  md: 'px-4 py-2.5 text-sm rounded-lg gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2.5',
}

const iconSizeMap = { sm: 'w-4 h-4', md: 'w-4 h-4', lg: 'w-5 h-5' }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth,
      disabled,
      leftIcon,
      rightIcon,
      loading,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          isDisabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {loading ? (
          <Spinner size={size === 'lg' ? 'md' : 'sm'} className={cn(iconSizeMap[size], 'text-current')} />
        ) : leftIcon ? (
          <span className={cn(iconSizeMap[size], '[&>svg]:w-full [&>svg]:h-full')}>{leftIcon}</span>
        ) : null}
        {children && <span>{children}</span>}
        {!loading && rightIcon ? (
          <span className={cn(iconSizeMap[size], '[&>svg]:w-full [&>svg]:h-full')}>{rightIcon}</span>
        ) : null}
      </button>
    )
  }
)
Button.displayName = 'Button'
