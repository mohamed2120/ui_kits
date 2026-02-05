import { cn } from '@/lib/utils'

export interface AvatarProps {
  src?: string | null
  alt?: string
  /** Fallback initial(s), e.g. "JD" for John Doe */
  fallback?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
}

export function Avatar({ src, alt, fallback, size = 'md', className }: AvatarProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full overflow-hidden bg-organic-sage/20 text-organic-sage font-medium shrink-0',
        sizeClasses[size],
        className
      )}
      role="img"
      aria-label={alt ?? fallback ?? 'Avatar'}
    >
      {src ? (
        <img src={src} alt={alt ?? ''} className="w-full h-full object-cover" />
      ) : (
        fallback?.slice(0, 2) ?? '?'
      )}
    </span>
  )
}
