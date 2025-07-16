"use client"

import type { FC } from "react"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"

interface MetricDataPoint {
  name: string
  traditionalBaseline: number
  i5Target: number
  i5Actual?: number
  unit: string
  higherIsBetter?: boolean
  lowerIsBetter?: boolean
}

interface PerformanceMetricsChartProps {
  data: MetricDataPoint[]
}

const PerformanceMetricsChart: FC<PerformanceMetricsChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis type="number" tick={{ fill: "#cbd5e1", fontSize: 10 }} stroke="#475569" />
        <YAxis
          dataKey="name"
          type="category"
          width={150}
          tick={{ fill: "#cbd5e1", fontSize: 10 }}
          interval={0}
          stroke="#475569"
        />
        <Tooltip
          formatter={(value: number, name: string, props: any) => `${value}${props.payload.unit}`}
          contentStyle={{
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            border: "1px solid #0891b2",
            borderRadius: "0.375rem",
            color: "#e2e8f0",
            backdropFilter: "blur(4px)",
          }}
          labelStyle={{ color: "#f1f5f9", fontWeight: "600" }}
          itemStyle={{ color: "#cbd5e1" }}
          cursor={{ fill: "rgba(71, 85, 105, 0.3)" }}
        />
        <Legend wrapperStyle={{ color: "#e2e8f0", bottom: 0, fontSize: "12px" }} />
        <Bar
          dataKey="traditionalBaseline"
          name="Traditional Baseline"
          fill="#a1a1aa"
          radius={[0, 4, 4, 0]}
          barSize={15}
        />
        <Bar dataKey="i5Target" name="I5 Target" fill="#facc15" radius={[0, 4, 4, 0]} barSize={15} />
        <Bar dataKey="i5Actual" name="I5 Actual/Potential" fill="#4ade80" radius={[0, 4, 4, 0]} barSize={15} />
      </BarChart>
    </ResponsiveContainer>
  )
}

PerformanceMetricsChart.defaultProps = {
  data: [],
}

export default PerformanceMetricsChart
