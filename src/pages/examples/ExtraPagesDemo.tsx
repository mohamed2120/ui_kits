import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/ui/Card'
import { Button } from '@/ui/Button'
import { EmptyState } from '@/ui/EmptyState'
import { HomeIcon, AlertCircleIcon } from '@/ui/icons'

export function ExtraPagesDemo() {
  const navigate = useNavigate()
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Extra pages</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Common page types: 404, error, maintenance, coming soon, empty state
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          404 – Page not found
        </h2>
        <Card variant="elevated">
          <CardContent className="py-16">
            <EmptyState
              icon={<AlertCircleIcon className="text-organic-muted" />}
              title="Page not found"
              description="The page you're looking for doesn't exist or was moved."
              action={
                <Button variant="primary" leftIcon={<HomeIcon />} onClick={() => navigate('/')}>
                  Back to dashboard
                </Button>
              }
            />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          500 – Server error
        </h2>
        <Card variant="elevated">
          <CardContent className="py-16">
            <EmptyState
              icon={<AlertCircleIcon className="text-red-500" />}
              title="Something went wrong"
              description="We're sorry. The server encountered an error. Please try again later."
              action={
                <Button variant="outline" leftIcon={<HomeIcon />} onClick={() => navigate('/')}>
                  Back to dashboard
                </Button>
              }
            />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Maintenance
        </h2>
        <Card variant="elevated">
          <CardContent className="py-16">
            <EmptyState
              icon={<AlertCircleIcon className="text-amber-500" />}
              title="Under maintenance"
              description="We're updating the system. We'll be back shortly. Thank you for your patience."
              action={
                <Button variant="secondary" onClick={() => navigate('/')}>
                  Refresh later
                </Button>
              }
            />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Coming soon
        </h2>
        <Card variant="elevated">
          <CardContent className="py-16">
            <EmptyState
              title="Coming soon"
              description="This feature is in the works. Check back later or contact us to get notified."
              action={
                <Button variant="primary" onClick={() => navigate('/')}>
                  Go to dashboard
                </Button>
              }
            />
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-organic-ink mb-4 border-b border-organic-border pb-2">
          Empty state (e.g. no search results)
        </h2>
        <Card variant="elevated">
          <CardContent className="py-12">
            <EmptyState
              title="No results found"
              description="Try adjusting your filters or search terms."
              action={
                <Button variant="outline" size="sm">
                  Clear filters
                </Button>
              }
            />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
