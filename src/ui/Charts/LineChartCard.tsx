import {
  LineChart,
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

export interface LineChartCardProps {
  title: string
  description?: string
  data: { name: string; [key: string]: string | number }[]
  lines: { dataKey: string; color: string; name?: string }[]
  className?: string
  height?: number
}

export function LineChartCard({
  title,
  description,
  data,
  lines,
  className,
  height = 260,
}: LineChartCardProps) {
  return (
    <Card className={cn('', className)} variant="elevated">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: '1px solid #E2E8F0',
                fontSize: 12,
              }}
              labelStyle={{ color: '#0F172A' }}
            />
            <Legend
              wrapperStyle={{ fontSize: 12 }}
              formatter={(value) => <span style={{ color: '#64748B' }}>{value}</span>}
            />
            {lines.map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name ?? line.dataKey}
                stroke={line.color}
                strokeWidth={2}
                dot={{ fill: line.color, r: 3 }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
