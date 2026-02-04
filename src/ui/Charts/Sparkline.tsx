import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts'
import { cn } from '@/lib/utils'

export interface SparklineProps {
  data: { value: number }[]
  color?: string
  className?: string
  height?: number
}

export function Sparkline({ data, color = '#6366F1', className, height = 40 }: SparklineProps) {
  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            dot={false}
            isAnimationActive={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: 6, fontSize: 11, padding: '4px 8px' }}
            formatter={(v: number) => [v, '']}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
