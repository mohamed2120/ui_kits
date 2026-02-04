import { forwardRef, useState, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type AlertVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'error'
  | 'info'
  | 'light'
  | 'dark'

const variantStyles: Record<AlertVariant, string> = {
  default:
    'bg-organic-sand border-organic-border text-organic-ink',
  primary:
    'bg-organic-sage/20 border-organic-sage/50 text-organic-forest',
  secondary:
    'bg-organic-stone/30 border-organic-border text-organic-ink',
  success:
    'bg-organic-mint/30 border-organic-forest/40 text-organic-forest',
  warning:
    'bg-organic-clay/20 border-organic-clay/50 text-organic-ink',
  danger:
    'bg-organic-blossom/20 border-organic-blossom/50 text-organic-ink',
  error:
    'bg-organic-blossom/20 border-organic-blossom/50 text-organic-ink',
  info:
    'bg-organic-ocean/20 border-organic-ocean/50 text-organic-ink',
  light:
    'bg-organic-paper border-organic-border text-organic-ink',
  dark:
    'bg-organic-ink/10 border-organic-ink/30 text-organic-ink',
}

/** Custom background: solid tint, no border emphasis */
const variantBgStyles: Record<AlertVariant, string> = {
  default: 'bg-organic-sand border-0 text-organic-ink',
  primary: 'bg-organic-sage/30 border-0 text-organic-forest',
  secondary: 'bg-organic-stone/40 border-0 text-organic-ink',
  success: 'bg-organic-mint/40 border-0 text-organic-forest',
  warning: 'bg-organic-clay/30 border-0 text-organic-ink',
  danger: 'bg-organic-blossom/30 border-0 text-organic-ink',
  error: 'bg-organic-blossom/30 border-0 text-organic-ink',
  info: 'bg-organic-ocean/30 border-0 text-organic-ink',
  light: 'bg-organic-paper border-0 text-organic-ink',
  dark: 'bg-organic-ink/20 border-0 text-organic-ink',
}

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  /** Show close button and call onDismiss when closed */
  dismissible?: boolean
  onDismiss?: () => void
  /** Use solid/custom background style (Upbit-style) */
  customBackground?: boolean
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'default',
      title,
      dismissible,
      onDismiss,
      customBackground = false,
      children,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = useState(false)

    const handleDismiss = () => {
      setDismissed(true)
      onDismiss?.()
    }

    if (dismissed) return null

    const styles = customBackground ? variantBgStyles[variant] : variantStyles[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'rounded-organic-lg border p-4',
          dismissible && 'pr-12 relative',
          styles,
          className
        )}
        {...props}
      >
        {dismissible && (
          <button
            type="button"
            aria-label="Close alert"
            className="absolute top-4 right-4 text-organic-muted hover:text-organic-ink focus-ring rounded p-1"
            onClick={handleDismiss}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {title && (
          <h4 className="font-semibold text-organic-ink mb-1">{title}</h4>
        )}
        <div className="text-sm">{children}</div>
      </div>
    )
  }
)
Alert.displayName = 'Alert'
