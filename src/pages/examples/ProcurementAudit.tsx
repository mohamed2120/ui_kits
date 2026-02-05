import { Card, CardContent } from '@/ui/Card'
import { AuditTimeline, ChangeDiff, CommentThread } from '@/ui/procurement'
import { sampleAuditEvents, sampleComments } from '@/data/procurementData'

export function ProcurementAudit() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Audit trail</h1>
        <p className="text-organic-muted mt-1 text-sm">Timeline, change diff, comments</p>
      </div>
      <Card variant="elevated">
        <CardContent className="space-y-6 pt-6">
          <AuditTimeline events={sampleAuditEvents} />
          <ChangeDiff changes={[{ field: 'Cost center', before: 'CC-90', after: 'CC-100' }]} />
          <CommentThread comments={sampleComments} onAddComment={() => {}} />
        </CardContent>
      </Card>
    </div>
  )
}
