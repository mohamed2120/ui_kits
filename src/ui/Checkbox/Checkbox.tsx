import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: 'sm' | 'md'
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, size = 'md', id, ...props }, ref) => {
    const inputId = id ?? (label ? `checkbox-${label.replace(/\s/g, '-')}` : undefined)
    return (
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer group',
          !label && 'cursor-pointer'
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          aria-label={label ?? props['aria-label'] ?? 'Checkbox'}
          className={cn(
            'rounded border-2 border-organic-stone text-organic-sage focus-ring transition-colors cursor-pointer',
            size === 'sm' && 'w-4 h-4',
            size === 'md' && 'w-5 h-5',
            className
          )}
          {...props}
        />
        {label && (
          <span className="text-sm font-medium text-organic-ink group-hover:text-organic-forest transition-colors">
            {label}
          </span>
        )}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'
