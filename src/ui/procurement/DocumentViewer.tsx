import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/ui/Card'

export interface DocumentViewerProps {
  title?: string
  /** URL or type: placeholder for demo */
  src?: string
  type?: 'pdf' | 'image'
  className?: string
}

export function DocumentViewer({ title, src, type = 'pdf', className }: DocumentViewerProps) {
  return (
    <Card variant="elevated" className={cn('overflow-hidden', className)}>
      {title && (
        <div className="border-b border-organic-border px-4 py-2">
          <h3 className="text-sm font-semibold text-organic-ink">{title}</h3>
        </div>
      )}
      <CardContent className="p-0">
        <div className="aspect-[3/4] min-h-[400px] bg-organic-sand/50 flex items-center justify-center">
          {src ? (
            type === 'image' ? (
              <img src={src} alt={title ?? 'Document'} className="max-w-full max-h-full object-contain" />
            ) : (
              <iframe
                title={title ?? 'PDF'}
                src={src}
                className="w-full h-full min-h-[400px]"
              />
            )
          ) : (
            <p className="text-organic-muted text-sm">
              [Document viewer: PR/PO PDF, quotation, or invoice]
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
