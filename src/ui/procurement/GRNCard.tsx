import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { ExceptionTag, type ExceptionType } from './ExceptionTag'

export interface ReceivedLine {
  itemCode: string
  description: string
  orderedQty: number
  receivedQty: number
  uom: string
  exception?: ExceptionType
  exceptionQty?: number
  notes?: string
}

export interface GRNCardProps {
  grnNumber: string
  poNumber: string
  receivedDate: string
  lines: ReceivedLine[]
  discrepancyNotes?: string
  className?: string
}

export function GRNCard({
  grnNumber,
  poNumber,
  receivedDate,
  lines,
  discrepancyNotes,
  className,
}: GRNCardProps) {
  return (
    <Card variant="elevated" className={cn('', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">GRN #{grnNumber}</CardTitle>
        <p className="text-sm text-organic-muted">
          PO {poNumber} · Received {receivedDate}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-organic-border">
                <th className="text-left py-2 font-medium text-organic-ink">Item</th>
                <th className="text-right py-2 font-medium text-organic-ink">Ordered</th>
                <th className="text-right py-2 font-medium text-organic-ink">Received</th>
                <th className="text-left py-2 font-medium text-organic-ink">Status</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line, i) => (
                <tr key={i} className="border-b border-organic-border/50">
                  <td className="py-2">
                    <span className="font-medium">{line.description}</span>
                    {line.notes && (
                      <p className="text-xs text-organic-muted mt-0.5">{line.notes}</p>
                    )}
                  </td>
                  <td className="py-2 text-right">{line.orderedQty} {line.uom}</td>
                  <td className="py-2 text-right">{line.receivedQty} {line.uom}</td>
                  <td className="py-2">
                    {line.exception ? (
                      <ExceptionTag
                        type={line.exception}
                        quantity={line.exceptionQty}
                      />
                    ) : (
                      <span className="text-organic-muted">OK</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {discrepancyNotes && (
          <p className="mt-3 text-sm text-amber-800 bg-amber-50 rounded-lg p-2">
            {discrepancyNotes}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
