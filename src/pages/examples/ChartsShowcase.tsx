import { AreaChartCard, BarChartCard, LineChartCard, PieChartCard, RadialChartCard, ComposedChartCard, Sparkline } from '@/ui/Charts'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'
import {
  revenueByMonth,
  revenueVsOrders,
  categorySales,
  topProductsBar,
  volumeAndValue,
  radialProgressData,
  sparklineData,
} from '@/data/sampleData'

export function ChartsShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-organic-ink tracking-tight">Charts</h1>
        <p className="text-organic-muted mt-1 text-sm">Area, bar, line, pie, radial, composed & sparklines</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AreaChartCard
          title="Revenue trend"
          description="Last 6 months"
          data={revenueByMonth}
          color="#6366F1"
          height={240}
        />
        <BarChartCard
          title="Top products"
          description="Units sold"
          data={topProductsBar}
          fill="#10B981"
          height={240}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LineChartCard
          title="Revenue vs Orders"
          description="Dual series"
          data={revenueVsOrders}
          lines={[
            { dataKey: 'revenue', color: '#6366F1', name: 'Revenue (k)' },
            { dataKey: 'orders', color: '#10B981', name: 'Orders' },
          ]}
          height={240}
        />
        <PieChartCard
          title="Sales by category"
          description="Distribution"
          data={categorySales}
          height={240}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RadialChartCard
          title="Progress rings"
          description="Target, Sales, Support"
          data={radialProgressData}
          height={240}
        />
        <ComposedChartCard
          title="Volume & value"
          description="Bar + line combo"
          data={volumeAndValue}
          barKey="volume"
          lineKey="value"
          barColor="#6366F1"
          lineColor="#10B981"
          height={240}
        />
      </div>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Sparklines</CardTitle>
          <CardDescription>Inline mini charts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Traffic', data: sparklineData, color: '#6366F1' },
              { label: 'Conversions', data: [...sparklineData].reverse(), color: '#10B981' },
              { label: 'Bounce', data: sparklineData.map((_, i) => ({ value: 60 - i * 5 })), color: '#F59E0B' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-organic-border p-3">
                <p className="text-sm font-medium text-organic-ink">{s.label}</p>
                <Sparkline data={s.data} color={s.color} height={36} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
