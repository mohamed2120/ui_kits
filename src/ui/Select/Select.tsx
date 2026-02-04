import { forwardRef, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  placeholder?: string
  error?: boolean
  label?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      placeholder,
      error,
      label,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id ?? label?.toLowerCase().replace(/\s/g, '-')
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-organic-ink mb-1.5"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-label={label ?? props['aria-label'] ?? 'Select'}
          aria-invalid={error}
          className={cn(
            'flex w-full rounded-organic border border-organic-border bg-organic-paper px-4 py-3 text-organic-ink transition-colors focus-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat',
            error && 'border-red-500 focus-visible:ring-red-500',
            className
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238A8580' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)
Select.displayName = 'Select'
