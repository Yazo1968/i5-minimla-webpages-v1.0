"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Color palette matching the website theme
const COLORS = {
  primary: "#2563eb",
  primaryLight: "#3b82f6",
  primaryDark: "#1d4ed8",
  secondary: "#60a5fa",
  accent: "#93c5fd",
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  gray: "#6b7280",
  grayLight: "#9ca3af",
  white: "#ffffff",
  slate: "#64748b",
}

interface CashflowData {
  period: string
  traditional: number
  i5Model: number
  cumulativeTraditional: number
  cumulativeI5: number
}

interface CashflowComparisonChartProps {
  data: CashflowData[]
}

export default function CashflowComparisonChart({ data }: CashflowComparisonChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.slate} />
        <XAxis dataKey="period" tick={{ fill: COLORS.grayLight }} />
        <YAxis tick={{ fill: COLORS.grayLight }} formatter={(value: number) => `${value}%`} />
        <Tooltip formatter={(value: number) => [`${value}%`, ""]} labelFormatter={(label) => `Period: ${label}`} />
        <Legend wrapperStyle={{ color: COLORS.grayLight }} />
        <Area
          type="monotone"
          dataKey="cumulativeTraditional"
          stackId="1"
          stroke={COLORS.gray}
          fill={COLORS.grayLight}
          fillOpacity={0.6}
          name="Traditional Cumulative ROI"
        />
        <Area
          type="monotone"
          dataKey="cumulativeI5"
          stackId="2"
          stroke={COLORS.primary}
          fill={COLORS.secondary}
          fillOpacity={0.8}
          name="I5 Model Cumulative ROI"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
