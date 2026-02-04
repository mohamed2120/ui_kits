import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  size?: 'sm' | 'md'
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, size = 'md', id, ...props }, ref) => {
    const inputId = id ?? (label ? `switch-${label.replace(/\s/g, '-')}` : undefined)
    return (
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer group',
          !label && 'cursor-pointer'
        )}
      >
        <span className="relative inline-flex shrink-0">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={inputId}
            aria-label={label ?? props['aria-label'] ?? 'Toggle'}
            aria-checked={props.checked}
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              'block rounded-full border-2 border-organic-stone bg-organic-sand transition-colors focus-within:ring-2 focus-within:ring-organic-sage focus-within:ring-offset-2',
              size === 'sm' && 'w-9 h-5',
              size === 'md' && 'w-11 h-6',
              'peer-checked:bg-organic-sage peer-checked:border-organic-sage',
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed'
            )}
          />
          <span
            className={cn(
              'absolute top-0.5 rounded-full bg-organic-paper shadow-organic transition-transform peer-checked:translate-x-full',
              size === 'sm' && 'left-0.5 w-4 h-4 peer-checked:translate-x-4',
              size === 'md' && 'left-0.5 w-5 h-5 peer-checked:translate-x-5'
            )}
          />
        </span>
        {label && (
          <span className="text-sm font-medium text-organic-ink group-hover:text-organic-forest transition-colors">
            {label}
          </span>
        )}
      </label>
    )
  }
)
Switch.displayName = 'Switch'
