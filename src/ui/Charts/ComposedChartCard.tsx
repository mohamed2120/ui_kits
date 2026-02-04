import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'

export interface ComposedChartCardProps {
  title: string
  description?: string
  data: { name: string; [key: string]: string | number }[]
  barKey?: string
  lineKey?: string
  barColor?: string
  lineColor?: string
  className?: string
  height?: number
}

export function ComposedChartCard({
  title,
  description,
  data,
  barKey = 'volume',
  lineKey = 'value',
  barColor = '#6366F1',
  lineColor = '#10B981',
  className,
  height = 280,
}: ComposedChartCardProps) {
  return (
    <Card className={cn('', className)} variant="elevated">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: '1px solid #E2E8F0',
                fontSize: 12,
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} formatter={(v) => <span style={{ color: '#64748B' }}>{v}</span>} />
            <Bar yAxisId="left" dataKey={barKey} fill={barColor} radius={[4, 4, 0, 0]} maxBarSize={36} name="Volume" />
            <Line yAxisId="right" type="monotone" dataKey={lineKey} stroke={lineColor} strokeWidth={2} dot={{ r: 3 }} name="Value" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
