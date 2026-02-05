import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/Button'
import { ChevronRightIcon, DownloadIcon } from '@/ui/icons'

export type ExportFormat = 'csv' | 'xlsx' | 'pdf'

export interface ExportMenuProps {
  onExport?: (format: ExportFormat) => void
  formats?: ExportFormat[]
  label?: string
  className?: string
}

export function ExportMenu({
  onExport,
  formats = ['csv', 'xlsx', 'pdf'],
  label = 'Export',
  className,
}: ExportMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('relative', className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen((o) => !o)}
        rightIcon={<ChevronRightIcon className={cn('transition-transform', open && 'rotate-90')} />}
      >
        {label}
      </Button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            className="absolute right-0 top-full mt-1 z-20 min-w-[120px] rounded-lg border border-organic-border bg-organic-paper py-1 shadow-lg"
            role="menu"
          >
            {formats.map((f) => (
              <li key={f}>
                <button
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center gap-2 px-3 py-2 text-sm text-organic-ink hover:bg-organic-sand"
                  onClick={() => {
                    onExport?.(f)
                    setOpen(false)
                  }}
                >
                  <DownloadIcon className="w-4 h-4" />
                  {f.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
