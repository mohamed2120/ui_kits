import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { Button } from '@/ui/Button'
import { Input } from '@/ui/Input'
import { sampleTimeline, sampleComments, sampleOrders } from '@/data/sampleData'
import { cn } from '@/lib/utils'

const order = sampleOrders[0]

export function DetailsTimelineComments() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink">Order details</h1>
        <p className="text-organic-muted mt-1">{order.id} · {order.customer}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <p className="text-sm text-organic-muted mt-1">
              Status and activity for this order
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-0" aria-label="Order timeline">
              {sampleTimeline.map((event, i) => (
                <li key={event.id} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < sampleTimeline.length - 1 && (
                    <span
                      className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-organic-stone"
                      aria-hidden
                    />
                  )}
                  <span
                    className={cn(
                      'shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium',
                      event.type === 'status' && 'border-organic-sage bg-organic-sage/20 text-organic-forest',
                      event.type === 'comment' && 'border-organic-ocean bg-organic-ocean/20 text-organic-ocean',
                      event.type === 'system' && 'border-organic-stone bg-organic-sand text-organic-muted'
                    )}
                  >
                    {event.type === 'status' ? 'S' : event.type === 'comment' ? 'C' : '•'}
                  </span>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className="font-medium text-organic-ink">{event.title}</p>
                    <p className="text-sm text-organic-muted mt-0.5">{event.description}</p>
                    <p className="text-xs text-organic-muted mt-1">{event.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-organic-muted">Status</span>
                <Badge variant="success">{order.status}</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-organic-muted">Amount</span>
                <span className="font-medium">${order.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-organic-muted">Date</span>
                <span>{order.date}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
              <p className="text-sm text-organic-muted mt-1">
                {sampleComments.length} comments
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {sampleComments.map((c) => (
                <div
                  key={c.id}
                  className="rounded-organic-lg bg-organic-sand/50 p-3 border border-organic-border"
                >
                  <p className="font-medium text-organic-ink text-sm">{c.author}</p>
                  <p className="text-sm text-organic-muted mt-1">{c.content}</p>
                  <p className="text-xs text-organic-muted mt-2">{c.createdAt}</p>
                </div>
              ))}
              <div className="flex gap-2">
                <Input
                  placeholder="Add a comment..."
                  aria-label="New comment"
                  className="flex-1"
                />
                <Button size="sm">Send</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
