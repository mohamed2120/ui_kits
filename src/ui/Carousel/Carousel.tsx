import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@/ui/icons'
import { IconButton } from '@/ui/IconButton'

export interface CarouselProps {
  children: React.ReactNode
  /** Number of slides (for dots). If not set, inferred from children. */
  slideCount?: number
  /** Show prev/next arrows */
  showArrows?: boolean
  /** Show dot indicators */
  showDots?: boolean
  /** Auto-advance interval in ms (0 = off) */
  autoplay?: number
  /** Min width per slide (CSS value, e.g. '280px') for scroll-snap */
  slideMinWidth?: string
  className?: string
}

export function Carousel({
  children,
  slideCount: slideCountProp,
  showArrows = true,
  showDots = true,
  autoplay = 0,
  slideMinWidth = '280px',
  className,
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const items = Array.isArray(children) ? children : [children]
  const count = slideCountProp ?? items.length

  const goTo = (i: number) => {
    setIndex(Math.max(0, Math.min(i, count - 1)))
  }

  useEffect(() => {
    if (autoplay <= 0 || count <= 1) return
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, autoplay)
    return () => clearInterval(t)
  }, [autoplay, count])

  useEffect(() => {
    const el = scrollRef.current
    const slides = el?.querySelectorAll('[data-carousel-slide]')
    if (slides && index < slides.length) {
      (slides[index] as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }, [index])

  return (
    <div className={cn('relative', className)}>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scroll-smooth [scrollbar-width:none] [ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onScroll={() => {
          const el = scrollRef.current
          if (!el) return
          const slides = el.querySelectorAll('[data-carousel-slide]')
          const scrollLeft = el.scrollLeft
          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i] as HTMLElement
            if (slide.offsetLeft >= scrollLeft - slide.offsetWidth / 2) {
              setIndex(i)
              break
            }
          }
        }}
      >
        {items.map((child, i) => (
          <div
            key={i}
            data-carousel-slide
            className="shrink-0 snap-start"
            style={{ minWidth: slideMinWidth }}
          >
            {child}
          </div>
        ))}
      </div>
      {showArrows && count > 1 && (
        <>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 hidden sm:block">
            <IconButton
              variant="secondary"
              size="md"
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
              disabled={index <= 0}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </IconButton>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 hidden sm:block">
            <IconButton
              variant="secondary"
              size="md"
              aria-label="Next"
              onClick={() => goTo(index + 1)}
              disabled={index >= count - 1}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </IconButton>
          </div>
        </>
      )}
      {showDots && count > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                i === index ? 'bg-organic-sage' : 'bg-organic-stone hover:bg-organic-sand'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
