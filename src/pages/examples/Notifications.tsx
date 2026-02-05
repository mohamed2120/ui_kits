import { useToast } from '@/ui/Toast'
import { Alert } from '@/ui/Alert'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import { Button } from '@/ui/Button'
import { Badge } from '@/ui/Badge'
import { Select } from '@/ui/Select'
import { Progress } from '@/ui/Progress'
import { Spinner } from '@/ui/Spinner'
import type { ToastPlacement } from '@/ui/Toast'

const placementOptions: { value: ToastPlacement; label: string }[] = [
  { value: 'top-left', label: 'Top left' },
  { value: 'top-center', label: 'Top center' },
  { value: 'top-right', label: 'Top right' },
  { value: 'bottom-left', label: 'Bottom left' },
  { value: 'bottom-center', label: 'Bottom center' },
  { value: 'bottom-right', label: 'Bottom right' },
]

const alertVariants = [
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
  'light',
  'dark',
] as const

export function Notifications() {
  const { addToast, setPlacement, placement } = useToast()

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Toasts & alerts</h1>
        <p className="text-organic-muted mt-1 text-sm">
          Toasts and alerts — inspired by{' '}
          <a
            href="https://coderthemes.com/upbit/layouts/default/ui-notifications.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-organic-sage hover:underline"
          >
            Upbit UI Notifications
          </a>
        </p>
      </div>

      {/* Warning — where to use it */}
      <Card>
        <CardHeader>
          <CardTitle>Warning (where to use it)</CardTitle>
          <CardDescription>
            The <strong>warning</strong> variant is available on Button, Badge, Alert, Progress, and Toast.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="warning" size="sm">Warning button</Button>
            <Badge variant="warning">Warning badge</Badge>
          </div>
          <Alert variant="warning" title="Warning alert">
            Use for caution or non-critical issues (e.g. “Check your input”).
          </Alert>
          <Progress value={65} variant="warning" showLabel />
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addToast({ title: 'Warning toast', description: 'Something needs attention.', variant: 'warning' })}
          >
            Show warning toast
          </Button>
        </CardContent>
      </Card>

      {/* Bootstrap-style Toasts */}
      <Card>
        <CardHeader>
          <CardTitle>Toasts</CardTitle>
          <CardDescription>
            Push notifications to your visitors with a toast — lightweight and customizable.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-organic-ink mb-1">Basic</h3>
            <p className="text-sm text-organic-muted mb-4">
              At minimum, a toast has content and a dismiss button.
            </p>
            <Button
              variant="secondary"
              onClick={() =>
                addToast({
                  title: 'Hello, world!',
                  description: 'This is a toast message.',
                })
              }
            >
              Show basic toast
            </Button>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-organic-ink mb-1">Translucent</h3>
            <p className="text-sm text-organic-muted mb-4">
              Slightly translucent with backdrop blur so it blends over content.
            </p>
            <Button
              variant="secondary"
              onClick={() =>
                addToast({
                  title: 'OrganicDash',
                  description: 'Hello, world! This is a toast message.',
                  translucent: true,
                })
              }
            >
              Show translucent toast
            </Button>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-organic-ink mb-1">Stacking</h3>
            <p className="text-sm text-organic-muted mb-4">
              Multiple toasts stack vertically in a readable manner.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'First toast',
                    description: 'See? Just like this.',
                    duration: 6000,
                  })
                }
              >
                Toast 1
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'Second toast',
                    description: 'Heads up, toasts will stack automatically.',
                    duration: 6000,
                  })
                }
              >
                Toast 2
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'Third toast',
                    description: 'Stacking in a readable manner.',
                    duration: 6000,
                  })
                }
              >
                Toast 3
              </Button>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-organic-ink mb-1">Placement</h3>
            <p className="text-sm text-organic-muted mb-4">
              Choose where toasts appear. New toasts use the selected position.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Select
                options={placementOptions}
                value={placement}
                onChange={(e) => setPlacement(e.target.value as ToastPlacement)}
                aria-label="Toast placement"
                className="w-44"
              />
              <Button
                variant="primary"
                onClick={() =>
                  addToast({
                    title: 'Placement test',
                    description: `Showing at ${placement}.`,
                  })
                }
              >
                Show toast
              </Button>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-organic-ink mb-1">Variants & custom content</h3>
            <p className="text-sm text-organic-muted mb-4">
              Success, error, info, warning variants. Optional action button.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'Success',
                    description: 'Your changes have been saved.',
                    variant: 'success',
                  })
                }
              >
                Success
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'Error',
                    description: 'Something went wrong.',
                    variant: 'error',
                  })
                }
              >
                Error
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'Info',
                    description: 'New update available.',
                    variant: 'info',
                  })
                }
              >
                Info
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  addToast({
                    title: 'With action',
                    description: 'You can undo this action.',
                    action: { label: 'Undo', onClick: () => {} },
                    duration: 0,
                  })
                }
              >
                With action
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* Default Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Default alerts</CardTitle>
          <CardDescription>
            Contextual alert variants (primary, secondary, success, warning, danger, info, light, dark).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {alertVariants.map((v) => (
            <Alert key={v} variant={v}>
              This is a <strong>{v}</strong> alert — check it out!
            </Alert>
          ))}
        </CardContent>
      </Card>

      {/* Dismissing Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Dismissing alerts</CardTitle>
          <CardDescription>
            Add a dismiss button; alerts can be closed and optionally trigger onDismiss.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Alert variant="primary" dismissible onDismiss={() => {}}>
            This is a primary alert — check it out!
          </Alert>
          <Alert variant="success" dismissible>
            This is a success alert — check it out!
          </Alert>
          <Alert variant="danger" dismissible>
            This is a danger alert — check it out!
          </Alert>
        </CardContent>
      </Card>

      {/* Custom background alerts (Upbit-style) */}
      <Card>
        <CardHeader>
          <CardTitle>Custom background alerts</CardTitle>
          <CardDescription>
            Solid background style with border-0 (Upbit-style).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {alertVariants.slice(0, 6).map((v) => (
            <Alert key={v} variant={v} customBackground>
              This is a <strong>{v}</strong> alert with custom background.
            </Alert>
          ))}
        </CardContent>
      </Card>

      {/* Progress & Spinner (extra completeness) */}
      <Card>
        <CardHeader>
          <CardTitle>Progress & Spinner</CardTitle>
          <CardDescription>
            Progress bars and loading spinners for a complete UI kit.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm font-medium text-organic-ink mb-2">Progress</p>
            <div className="space-y-3">
              <Progress value={25} variant="default" showLabel />
              <Progress value={50} variant="success" showLabel />
              <Progress value={75} variant="warning" showLabel />
              <Progress value={90} variant="danger" showLabel />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-organic-ink mb-2">Spinner</p>
            <div className="flex gap-4 items-center">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
