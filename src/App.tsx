import { Routes, Route } from 'react-router-dom'
import { AppShell } from '@/ui/AppShell'
import { ToastProvider } from '@/ui/Toast'
import {
  ChartIcon,
  ListIcon,
  FileTextIcon,
  SettingsIcon,
  HomeIcon,
  BellIcon,
  SearchIcon,
  BarChartIcon,
  AlarmIcon,
  CalendarIcon,
} from '@/ui/icons'
import { IconButton } from '@/ui/IconButton'
import {
  KpiOverview,
  ListFiltersTable,
  DetailsTimelineComments,
  SettingsTabs,
  Notifications,
  ChartsShowcase,
  AlarmsDemo,
  CalendarDemo,
  ButtonsAndIconsDemo,
} from '@/pages/examples'

const navItems = [
  { to: '/', label: 'Home', icon: <HomeIcon /> },
  { to: '/examples/kpi', label: 'KPI Overview', icon: <ChartIcon /> },
  { to: '/examples/charts', label: 'Charts', icon: <BarChartIcon /> },
  { to: '/examples/list', label: 'List & Table', icon: <ListIcon /> },
  { to: '/examples/details', label: 'Details & Timeline', icon: <FileTextIcon /> },
  { to: '/examples/alarms', label: 'Alarms', icon: <AlarmIcon /> },
  { to: '/examples/calendar', label: 'Calendar', icon: <CalendarIcon /> },
  { to: '/examples/notifications', label: 'Notifications', icon: <BellIcon /> },
  { to: '/examples/buttons', label: 'Buttons & Icons', icon: <SettingsIcon /> },
  { to: '/examples/settings', label: 'Settings', icon: <SettingsIcon /> },
]

function TopbarRight() {
  return (
    <div className="flex items-center gap-2">
      <IconButton variant="ghost" size="md" aria-label="Search">
        <SearchIcon />
      </IconButton>
      <IconButton variant="ghost" size="md" aria-label="Notifications">
        <BellIcon />
      </IconButton>
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppShell
        title="OrganicDash UI"
        navItems={navItems}
        topbarRight={<TopbarRight />}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-2xl space-y-6">
                <h1 className="text-2xl font-bold text-organic-ink">Welcome to OrganicDash UI</h1>
                <p className="text-organic-muted">
                  A reusable React dashboard UI kit with an organic design: large rounded corners,
                  soft shadows, and a calm palette. Use the sidebar to explore example pages.
                </p>
                <ul className="list-disc list-inside space-y-2 text-organic-ink">
                  <li>KPI Overview – stat cards and summary</li>
                  <li>List + Filters + Table – sortable table, filters, pagination</li>
                  <li>Details – timeline and comments</li>
                  <li>Settings – tabs and forms</li>
                </ul>
              </div>
            }
          />
          <Route path="/examples/kpi" element={<KpiOverview />} />
          <Route path="/examples/list" element={<ListFiltersTable />} />
          <Route path="/examples/details" element={<DetailsTimelineComments />} />
          <Route path="/examples/charts" element={<ChartsShowcase />} />
          <Route path="/examples/alarms" element={<AlarmsDemo />} />
          <Route path="/examples/calendar" element={<CalendarDemo />} />
          <Route path="/examples/buttons" element={<ButtonsAndIconsDemo />} />
          <Route path="/examples/notifications" element={<Notifications />} />
          <Route path="/examples/settings" element={<SettingsTabs />} />
        </Routes>
      </AppShell>
    </ToastProvider>
  )
}
