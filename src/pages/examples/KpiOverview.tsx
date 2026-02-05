import { StatCard } from '@/ui/StatCard'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/Card'
import { AreaChartCard, BarChartCard, LineChartCard, PieChartCard } from '@/ui/Charts'
import {
  kpiStats,
  revenueByMonth,
  revenueVsOrders,
  categorySales,
  topProductsBar,
} from '@/data/sampleData'

export function KpiOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Level 2.1</h1>
        <p className="text-organic-muted mt-1 text-sm">KPI Overview — key metrics at a glance</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpiStats.map((stat, i) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            trend={stat.trend}
            variant={i === 0 ? 'accent' : 'default'}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AreaChartCard
          title="Revenue trend"
          description="Monthly revenue for the last 6 months"
          data={revenueByMonth}
          color="#6366F1"
          height={280}
        />
        <BarChartCard
          title="Top products"
          description="Units sold this month"
          data={topProductsBar}
          fill="#10B981"
          height={280}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LineChartCard
          title="Revenue vs Orders"
          description="Revenue (k) and order count over time"
          data={revenueVsOrders}
          lines={[
            { dataKey: 'revenue', color: '#6366F1', name: 'Revenue (k)' },
            { dataKey: 'orders', color: '#10B981', name: 'Orders' },
          ]}
          height={280}
        />
        <PieChartCard
          title="Sales by category"
          description="Distribution by category"
          data={categorySales}
          height={280}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card variant="outlined" className="rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Quick stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {[
              { label: 'New signups', value: '1,240' },
              { label: 'Bounce rate', value: '32%' },
              { label: 'Avg. session', value: '4m 12s' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-sm">
                <span className="text-organic-muted">{row.label}</span>
                <span className="font-medium text-organic-ink">{row.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card variant="soft" className="rounded-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Active now</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-2xl font-semibold text-organic-ink">284</p>
            <p className="text-xs text-organic-muted mt-1">Users in last 5 min</p>
          </CardContent>
        </Card>
        <Card variant="elevated" className="rounded-xl border-organic-sage/20 bg-gradient-to-br from-organic-sage/5 to-transparent">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Target</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-2xl font-semibold text-organic-sage">92%</p>
            <p className="text-xs text-organic-muted mt-1">Monthly goal achieved</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
