import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, label, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-organic-ink mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={inputId}
          aria-label={label ?? props['aria-label'] ?? 'Input'}
          aria-invalid={error}
          className={cn(
            'flex w-full rounded-lg border border-organic-border bg-organic-paper px-3 py-2.5 text-sm text-organic-ink placeholder:text-organic-muted transition-colors focus-ring disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus-visible:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'
