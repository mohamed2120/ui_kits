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
  CalendarIcon,
  InboxIcon,
  MailIcon,
  UserIcon,
  MapPinIcon,
  PieChartIcon,
  TagIcon,
  PackageIcon,
  AlarmIcon,
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
  IconsDemo,
  ProcurementWorkflow,
  ProcurementAudit,
  ProcurementPurchasing,
  ProcurementItems,
  ProcurementReceiving,
  ProcurementDocuments,
  ProcurementFilters,
  ProcurementNotifications,
  ProductsDemo,
  StoresDemo,
  CompanyProfileDemo,
  MoreComponentsDemo,
  ExtraPagesDemo,
  EmailDemo,
  ChatDemo,
  AuthDemo,
} from '@/pages/examples'
import type { NavConfig } from '@/ui/AppShell'

const navConfig: NavConfig = {
  dashboard: {
    to: '/',
    label: 'Dashboard',
    icon: <HomeIcon />,
    badge: '9+',
    badgeVariant: 'success',
  },
  sections: [
    {
      label: 'APPS',
      items: [
        { to: '/examples/calendar', label: 'Calendar', icon: <CalendarIcon /> },
        { to: '/examples/chat', label: 'Chat', icon: <InboxIcon /> },
        { to: '/examples/email', label: 'Email', icon: <MailIcon /> },
        { to: '/examples/company', label: 'Contacts', icon: <UserIcon /> },
        { to: '/examples/list', label: 'Tickets', icon: <FileTextIcon /> },
      ],
    },
    {
      label: 'CUSTOM',
      items: [
        { to: '/examples/auth', label: 'Auth Pages', icon: <FileTextIcon /> },
        { to: '/examples/extra-pages', label: 'Extra Pages', icon: <PackageIcon /> },
        { to: '/examples/details', label: 'Layouts', icon: <ListIcon /> },
      ],
    },
    {
      label: 'COMPONENTS',
      items: [
        { to: '/examples/buttons', label: 'Base UI', icon: <SettingsIcon /> },
        {
          to: '/examples/products',
          label: 'Extended UI',
          icon: <PieChartIcon />,
          badge: 'Hot',
          badgeVariant: 'info',
          children: [
            { to: '/examples/products', label: 'Products & Sale', icon: <ListIcon /> },
            { to: '/examples/more', label: 'Carousel & more', icon: <ListIcon /> },
          ],
        },
        { to: '/examples/icons', label: 'Icons', icon: <TagIcon />, badge: '5000', badgeVariant: 'info' },
        { to: '/examples/settings', label: 'Forms', icon: <FileTextIcon /> },
        { to: '/examples/notifications', label: 'Toasts & alerts', icon: <BellIcon /> },
        { to: '/examples/alarms', label: 'Alarms', icon: <AlarmIcon /> },
        { to: '/examples/list', label: 'Tables', icon: <ListIcon /> },
        { to: '/examples/charts', label: 'Charts', icon: <BarChartIcon /> },
        { to: '/examples/maps', label: 'Maps', icon: <MapPinIcon /> },
        {
          label: 'Procurement',
          icon: <FileTextIcon />,
          children: [
            { to: '/examples/procurement/workflow', label: 'Workflow & approvals', icon: <FileTextIcon /> },
            { to: '/examples/procurement/audit', label: 'Audit trail', icon: <FileTextIcon /> },
            { to: '/examples/procurement/purchasing', label: 'Purchasing objects', icon: <FileTextIcon /> },
            { to: '/examples/procurement/items', label: 'Items & pricing', icon: <FileTextIcon /> },
            { to: '/examples/procurement/receiving', label: 'Receiving & delivery', icon: <FileTextIcon /> },
            { to: '/examples/procurement/documents', label: 'Documents & attachments', icon: <FileTextIcon /> },
            { to: '/examples/procurement/filters', label: 'Filters', icon: <FileTextIcon /> },
            { to: '/examples/procurement/notifications', label: 'Approvals & reminders', icon: <FileTextIcon /> },
          ],
        },
        {
          label: 'Multi Level',
          icon: <ListIcon />,
          children: [
            { to: '/examples/kpi', label: 'Level 2.1', icon: <ChartIcon /> },
            { to: '/examples/list', label: 'Level 2.2', icon: <ListIcon /> },
          ],
        },
      ],
    },
  ],
}

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
        navConfig={navConfig}
        topbarRight={<TopbarRight />}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-2xl space-y-6">
                <h1 className="text-2xl font-bold text-organic-ink">Dashboard</h1>
                <p className="text-organic-muted">
                  A reusable React dashboard UI kit. Use the sidebar to explore APPS, CUSTOM pages, and COMPONENTS.
                </p>
                <ul className="list-disc list-inside space-y-2 text-organic-ink">
                  <li>APPS – Calendar, Chat, Email, Contacts, Tickets</li>
                  <li>CUSTOM – Auth, Extra Pages, Layouts</li>
                  <li>COMPONENTS – Base UI, Extended UI, Icons, Forms, Tables, Charts, Maps, Multi Level</li>
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
          <Route path="/examples/products" element={<ProductsDemo />} />
          <Route path="/examples/stores" element={<StoresDemo />} />
          <Route path="/examples/maps" element={<StoresDemo />} />
          <Route path="/examples/company" element={<CompanyProfileDemo />} />
          <Route path="/examples/more" element={<MoreComponentsDemo />} />
          <Route path="/examples/extra-pages" element={<ExtraPagesDemo />} />
          <Route path="/examples/email" element={<EmailDemo />} />
          <Route path="/examples/chat" element={<ChatDemo />} />
          <Route path="/examples/auth" element={<AuthDemo />} />
          <Route path="/examples/buttons" element={<ButtonsAndIconsDemo />} />
          <Route path="/examples/icons" element={<IconsDemo />} />
          <Route path="/examples/notifications" element={<Notifications />} />
          <Route path="/examples/settings" element={<SettingsTabs />} />
          <Route path="/examples/procurement/workflow" element={<ProcurementWorkflow />} />
          <Route path="/examples/procurement/audit" element={<ProcurementAudit />} />
          <Route path="/examples/procurement/purchasing" element={<ProcurementPurchasing />} />
          <Route path="/examples/procurement/items" element={<ProcurementItems />} />
          <Route path="/examples/procurement/receiving" element={<ProcurementReceiving />} />
          <Route path="/examples/procurement/documents" element={<ProcurementDocuments />} />
          <Route path="/examples/procurement/filters" element={<ProcurementFilters />} />
          <Route path="/examples/procurement/notifications" element={<ProcurementNotifications />} />
        </Routes>
      </AppShell>
    </ToastProvider>
  )
}
