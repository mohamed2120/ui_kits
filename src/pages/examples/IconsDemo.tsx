import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import * as Icons from '@/ui/icons'

export function IconsDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Icons</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Icon set for buttons, navigation, and UI. Import from <code className="rounded bg-organic-sand px-1">@/ui/icons</code>.
        </p>
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Icon set</CardTitle>
          <CardDescription>
            Use inside Button, IconButton, or anywhere. All icons accept standard SVG props (e.g. className for size).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {Object.entries(Icons)
              .filter(([key]) => typeof key === 'string' && key.endsWith('Icon'))
              .map(([key, Icon]) => (
                <div
                  key={key}
                  className="flex flex-col items-center gap-2 rounded-lg border border-organic-border bg-organic-sand/30 p-3"
                >
                  <span className="text-organic-muted [&>svg]:w-6 [&>svg]:h-6">
                    {typeof Icon === 'function' && <Icon />}
                  </span>
                  <span className="text-xs font-medium text-organic-ink text-center break-all">
                    {key.replace(/Icon$/, '')}
                  </span>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
