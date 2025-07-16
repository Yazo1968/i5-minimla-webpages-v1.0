"use client"

import type { FC } from "react"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"

interface InvestmentDataPoint {
  name: string
  traditional: number
  i5Model: number
}

interface InvestmentAllocationChartProps {
  data: InvestmentDataPoint[]
}

const InvestmentAllocationChart: FC<InvestmentAllocationChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis
          dataKey="name"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={70}
          tick={{ fill: "#cbd5e1", fontSize: 10 }}
          stroke="#475569"
        />
        <YAxis
          unit="%"
          tick={{ fill: "#cbd5e1", fontSize: 10 }}
          stroke="#475569"
          label={{
            value: "Emphasis (%)",
            angle: -90,
            position: "insideLeft",
            offset: 10,
            style: { fill: "#cbd5e1", fontSize: "12px" },
          }}
        />
        <Tooltip
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
        <Legend wrapperStyle={{ color: "#e2e8f0", paddingTop: "10px", fontSize: "12px" }} />
        <Bar dataKey="traditional" name="Traditional Emphasis" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        <Bar dataKey="i5Model" name="I5 Model Emphasis" fill="#22d3ee" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

InvestmentAllocationChart.defaultProps = {
  data: [],
}

export default InvestmentAllocationChart
