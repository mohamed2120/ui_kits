import { cn } from '@/lib/utils'
import { IconButton } from '@/ui/IconButton'

export interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  showPrevNext?: boolean
  siblingCount?: number
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
  showPrevNext = true,
  siblingCount = 1,
}: PaginationProps) {
  const range = getRange(page, totalPages, siblingCount)

  return (
    <nav
      className={cn('flex items-center gap-1', className)}
      aria-label="Pagination"
    >
      {showPrevNext && (
        <>
          <IconButton
            variant="outline"
            size="sm"
            aria-label="Previous page"
            disabled={page <= 1}
            onClick={() => onPageChange(Math.max(1, page - 1))}
          >
            <ChevronLeftIcon />
          </IconButton>
        </>
      )}
      <ul className="flex items-center gap-1">
        {range.map((p, idx) =>
          p === 'ellipsis' ? (
            <li key={`ellipsis-${idx}`} aria-hidden>
              <span className="w-8 h-8 flex items-center justify-center text-organic-muted">
                …
              </span>
            </li>
          ) : (
            <li key={p}>
              <PaginationButton
                page={p}
                current={page}
                onClick={() => onPageChange(p)}
              />
            </li>
          )
        )}
      </ul>
      {showPrevNext && (
        <IconButton
          variant="outline"
          size="sm"
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </nav>
  )
}

function PaginationButton({
  page,
  current,
  onClick,
}: {
  page: number
  current: number
  onClick: () => void
}) {
  const isCurrent = page === current
  return (
    <button
      type="button"
      aria-label={isCurrent ? `Page ${page} (current)` : `Go to page ${page}`}
      aria-current={isCurrent ? 'page' : undefined}
      className={cn(
        'min-w-[2rem] h-8 px-2 rounded-organic text-sm font-medium transition-colors focus-ring',
        isCurrent
          ? 'bg-organic-sage text-white'
          : 'bg-organic-sand text-organic-ink hover:bg-organic-stone'
      )}
      onClick={onClick}
    >
      {page}
    </button>
  )
}

function getRange(
  page: number,
  total: number,
  siblingCount: number
): (number | 'ellipsis')[] {
  const totalVisible = siblingCount * 2 + 3
  if (total <= totalVisible) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }
  const left = Math.max(1, page - siblingCount)
  const right = Math.min(total, page + siblingCount)
  const showLeft = left > 2
  const showRight = right < total - 1
  const result: (number | 'ellipsis')[] = []
  if (showLeft) {
    result.push(1)
    if (left > 2) result.push('ellipsis')
  }
  for (let i = left; i <= right; i++) result.push(i)
  if (showRight) {
    if (right < total - 1) result.push('ellipsis')
    result.push(total)
  }
  return result
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
