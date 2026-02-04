import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'

export interface BarChartCardProps {
  title: string
  description?: string
  data: { name: string; value: number; [key: string]: string | number }[]
  dataKey?: string
  fill?: string
  className?: string
  height?: number
}

const defaultFill = '#6366F1'

export function BarChartCard({
  title,
  description,
  data,
  dataKey = 'value',
  fill = defaultFill,
  className,
  height = 260,
}: BarChartCardProps) {
  return (
    <Card className={cn('', className)} variant="elevated">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
              formatter={(value: number) => [value, '']}
              cursor={{ fill: '#F1F5F9' }}
            />
            <Bar dataKey={dataKey} fill={fill} radius={[6, 6, 0, 0]} maxBarSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
