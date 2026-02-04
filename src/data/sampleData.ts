/**
 * Sample data for OrganicDash UI example pages
 */

/** Revenue by month for area/line charts */
export const revenueByMonth = [
  { name: 'Sep', value: 32000 },
  { name: 'Oct', value: 38100 },
  { name: 'Nov', value: 35200 },
  { name: 'Dec', value: 41800 },
  { name: 'Jan', value: 39500 },
  { name: 'Feb', value: 42580 },
]

/** Monthly comparison for line chart (multiple series) */
export const revenueVsOrders = [
  { name: 'Sep', revenue: 32, orders: 420 },
  { name: 'Oct', revenue: 38, orders: 510 },
  { name: 'Nov', revenue: 35, orders: 480 },
  { name: 'Dec', revenue: 42, orders: 590 },
  { name: 'Jan', revenue: 40, orders: 520 },
  { name: 'Feb', revenue: 43, orders: 548 },
]

/** Category distribution for bar/pie */
export const categorySales = [
  { name: 'Electronics', value: 12400 },
  { name: 'Clothing', value: 8200 },
  { name: 'Home', value: 6100 },
  { name: 'Sports', value: 4900 },
  { name: 'Other', value: 3100 },
]

/** Top products for bar chart */
export const topProductsBar = [
  { name: 'Organic Tea Set', value: 124 },
  { name: 'Clay Mug', value: 89 },
  { name: 'Linen Towel', value: 67 },
  { name: 'Wood Bowl', value: 54 },
  { name: 'Bamboo Tray', value: 41 },
]

/** For composed chart (bar + line) */
export const volumeAndValue = [
  { name: 'Mon', volume: 120, value: 98 },
  { name: 'Tue', volume: 190, value: 112 },
  { name: 'Wed', volume: 150, value: 105 },
  { name: 'Thu', volume: 210, value: 118 },
  { name: 'Fri', volume: 180, value: 125 },
  { name: 'Sat', volume: 95, value: 88 },
]

/** For radial / progress rings */
export const radialProgressData = [
  { name: 'Target', value: 92, fill: '#6366F1' },
  { name: 'Sales', value: 78, fill: '#10B981' },
  { name: 'Support', value: 85, fill: '#F59E0B' },
]

/** Sparkline data (array of values) */
export const sparklineData = [
  { value: 30 },
  { value: 45 },
  { value: 38 },
  { value: 52 },
  { value: 48 },
  { value: 61 },
  { value: 55 },
]

export const kpiStats = [
  { id: '1', title: 'Total Revenue', value: '$42,580', description: 'Last 30 days', trend: { value: 12.5, label: 'vs last month' } },
  { id: '2', title: 'Active Users', value: '2,847', description: 'Currently online', trend: { value: 8.2, label: 'vs last week' } },
  { id: '3', title: 'Conversion Rate', value: '3.24%', description: 'Checkout completed', trend: { value: -2.1, label: 'vs last month' } },
  { id: '4', title: 'Avg. Order Value', value: '$68.40', description: 'Per transaction', trend: { value: 5.4, label: 'vs last month' } },
]

export type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled'

export interface SampleOrder {
  id: string
  customer: string
  email: string
  amount: number
  status: OrderStatus
  date: string
}

export const sampleOrders: SampleOrder[] = [
  { id: 'ORD-001', customer: 'Alice Chen', email: 'alice@example.com', amount: 124.99, status: 'delivered', date: '2025-02-01' },
  { id: 'ORD-002', customer: 'Bob Smith', email: 'bob@example.com', amount: 89.50, status: 'shipped', date: '2025-02-02' },
  { id: 'ORD-003', customer: 'Carol White', email: 'carol@example.com', amount: 256.00, status: 'pending', date: '2025-02-03' },
  { id: 'ORD-004', customer: 'David Brown', email: 'david@example.com', amount: 45.00, status: 'cancelled', date: '2025-02-02' },
  { id: 'ORD-005', customer: 'Eve Davis', email: 'eve@example.com', amount: 178.25, status: 'delivered', date: '2025-02-01' },
  { id: 'ORD-006', customer: 'Frank Miller', email: 'frank@example.com', amount: 92.00, status: 'shipped', date: '2025-02-04' },
]

export const statusOptions = [
  { value: '', label: 'All statuses' },
  { value: 'pending', label: 'Pending' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
]

export const filterChipItems = [
  { id: 'delivered', label: 'Delivered', active: false },
  { id: 'shipped', label: 'Shipped', active: false },
  { id: 'pending', label: 'Pending', active: false },
  { id: 'cancelled', label: 'Cancelled', active: false },
]

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  type: 'status' | 'comment' | 'system'
}

export const sampleTimeline: TimelineEvent[] = [
  { id: '1', date: '2025-02-04 10:30', title: 'Order delivered', description: 'Package was left at the front door.', type: 'status' },
  { id: '2', date: '2025-02-03 14:00', title: 'Comment', description: 'Customer requested delivery before 5 PM. Confirmed with courier.', type: 'comment' },
  { id: '3', date: '2025-02-03 09:15', title: 'Shipped', description: 'Dispatched via Standard Shipping. Tracking: 1Z999AA10123456784', type: 'status' },
  { id: '4', date: '2025-02-02 16:45', title: 'Payment received', description: 'Payment of $124.99 received.', type: 'system' },
  { id: '5', date: '2025-02-01 11:20', title: 'Order placed', description: 'Order ORD-001 created.', type: 'system' },
]

export interface Comment {
  id: string
  author: string
  avatar?: string
  content: string
  createdAt: string
}

export const sampleComments: Comment[] = [
  { id: '1', author: 'Support Agent', content: 'We have confirmed the delivery window. The courier will attempt delivery between 2–5 PM.', createdAt: '2025-02-03 14:05' },
  { id: '2', author: 'Alice Chen', content: 'Thank you! I\'ll make sure someone is home.', createdAt: '2025-02-03 15:22' },
]

/** Alarms */
export interface AlarmItem {
  id: string
  label: string
  time: string
  repeat: 'once' | 'daily' | 'weekdays' | 'weekly'
  enabled: boolean
}

export const sampleAlarms: AlarmItem[] = [
  { id: '1', label: 'Wake up', time: '07:00', repeat: 'daily', enabled: true },
  { id: '2', label: 'Standup', time: '09:30', repeat: 'weekdays', enabled: true },
  { id: '3', label: 'Lunch break', time: '12:00', repeat: 'daily', enabled: true },
  { id: '4', label: 'Meeting', time: '15:00', repeat: 'once', enabled: false },
]

/** Calendar events (day key = YYYY-MM-DD) */
export interface CalendarEvent {
  id: string
  title: string
  date: string
  color?: string
}

export const sampleCalendarEvents: CalendarEvent[] = [
  { id: '1', title: 'Team sync', date: '2025-02-04', color: '#6366F1' },
  { id: '2', title: 'Review', date: '2025-02-05', color: '#10B981' },
  { id: '3', title: 'Demo', date: '2025-02-10', color: '#F59E0B' },
  { id: '4', title: 'Workshop', date: '2025-02-14', color: '#8B5CF6' },
]

/** Agenda events (with optional time) */
export const sampleAgendaEvents = [
  { date: '2025-02-04', title: 'Team sync', time: '09:00', color: '#6366F1' },
  { date: '2025-02-04', title: 'Standup', time: '10:00', color: '#10B981' },
  { date: '2025-02-05', title: 'Review', time: '14:00', color: '#10B981' },
  { date: '2025-02-06', title: 'Design review', time: '11:00', color: '#8B5CF6' },
  { date: '2025-02-07', title: 'Sprint planning', time: '15:00', color: '#F59E0B' },
  { date: '2025-02-10', title: 'Demo', time: '16:00', color: '#F59E0B' },
]
