import { useState } from 'react'
import { Button, ButtonGroup } from '@/ui/Button'
import { IconButton } from '@/ui/IconButton'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import {
  PlusIcon,
  DownloadIcon,
  EditIcon,
  CheckIcon,
  XIcon,
  FilterIcon,
  MoreVerticalIcon,
  AlertCircleIcon,
  TrendingUpIcon,
} from '@/ui/icons'

export function ButtonsAndIconsDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Buttons & Icons</h1>
        <p className="text-organic-muted mt-1 text-sm">Variants, sizes, icon buttons, and icon set</p>
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Button variants</CardTitle>
          <CardDescription>Primary, secondary, outline, ghost, danger, success, warning</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>With icons</CardTitle>
          <CardDescription>leftIcon, rightIcon</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button leftIcon={<PlusIcon />}>Add</Button>
          <Button leftIcon={<DownloadIcon />} variant="secondary">Download</Button>
          <Button rightIcon={<CheckIcon />} variant="success">Confirm</Button>
          <Button rightIcon={<XIcon />} variant="outline">Cancel</Button>
          <Button leftIcon={<EditIcon />} rightIcon={<TrendingUpIcon />} variant="ghost">Edit</Button>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Loading state</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button loading>Loading</Button>
          <Button loading variant="secondary">Loading</Button>
          <Button
            loading={loading}
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000) }}
          >
            {loading ? 'Saving…' : 'Save'}
          </Button>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Button group</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <ButtonGroup>
            <Button variant="outline" size="sm">Left</Button>
            <Button variant="outline" size="sm">Center</Button>
            <Button variant="outline" size="sm">Right</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="primary" size="sm">Save</Button>
            <Button variant="outline" size="sm">Cancel</Button>
          </ButtonGroup>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Icon buttons</CardTitle>
          <CardDescription>IconButton in primary, secondary, outline, ghost</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <IconButton variant="primary" size="md" aria-label="Add"><PlusIcon /></IconButton>
          <IconButton variant="secondary" size="md" aria-label="Edit"><EditIcon /></IconButton>
          <IconButton variant="outline" size="md" aria-label="Filter"><FilterIcon /></IconButton>
          <IconButton variant="ghost" size="md" aria-label="More"><MoreVerticalIcon /></IconButton>
          <IconButton variant="ghost" size="sm" aria-label="Alert"><AlertCircleIcon /></IconButton>
          <IconButton variant="primary" size="lg" aria-label="Download"><DownloadIcon /></IconButton>
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Icon set</CardTitle>
          <CardDescription>Available icons: Menu, Chart, List, FileText, Settings, Home, Search, Bell, Inbox, Calendar, Alarm, ChevronLeft/Right, Plus, Minus, Edit, Trash, Download, Upload, Filter, MoreVertical, MoreHorizontal, Check, X, BarChart, PieChart, TrendingUp, AlertCircle</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-organic-muted">
            Import from <code className="rounded bg-organic-sand px-1">@/ui/icons</code> and use inside Button or IconButton.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
