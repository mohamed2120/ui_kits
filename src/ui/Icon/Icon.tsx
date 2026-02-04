import React, { type SVGProps, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Wrapper for SVG icon components.
 * Accepts any component that renders SVG (e.g. from lucide-react, heroicons, or inline SVG).
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Any SVG icon component (e.g. LucideIcon) or React node */
  icon: React.ComponentType<SVGProps<SVGSVGElement>> | ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

export function Icon({
  icon: IconComponent,
  size = 'md',
  className,
  ...svgProps
}: IconProps) {
  const sizeClass = sizeMap[size]
  if (React.isValidElement(IconComponent)) {
    return (
      <span className={cn('inline-flex shrink-0', sizeClass, className)}>
        {IconComponent}
      </span>
    )
  }
  const IconEl = IconComponent as React.ComponentType<SVGProps<SVGSVGElement>>
  return (
    <IconEl
      className={cn(sizeClass, 'shrink-0', className)}
      aria-hidden
      {...svgProps}
    />
  )
}
