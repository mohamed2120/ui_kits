import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/Card'

export interface RadialChartCardProps {
  title: string
  description?: string
  data: { name: string; value: number; fill: string }[]
  className?: string
  height?: number
}

export function RadialChartCard({
  title,
  description,
  data,
  className,
  height = 260,
}: RadialChartCardProps) {
  return (
    <Card className={cn('', className)} variant="elevated">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <ResponsiveContainer width="100%" height={height}>
          <RadialBarChart
            innerRadius="60%"
            outerRadius="90%"
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar background dataKey="value" cornerRadius={6} />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: '1px solid #E2E8F0',
                fontSize: 12,
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: 12 }}
              formatter={(value) => <span style={{ color: '#64748B' }}>{value}</span>}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
