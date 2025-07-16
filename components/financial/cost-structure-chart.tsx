"use client"

import type { FC } from "react"
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LabelList } from "recharts"

interface CostDataPoint {
  name: string
  value: number
}

interface CostStructureChartProps {
  data: {
    categories: string[]
    traditional: CostDataPoint[]
    i5Model: CostDataPoint[]
  }
}

const CostStructureChart: FC<CostStructureChartProps> = ({ data }) => {
  const chartData = data.categories.map((category) => {
    const traditionalPoint = data.traditional.find((p) => p.name === category)
    const i5ModelPoint = data.i5Model.find((p) => p.name === category)
    return {
      name: category,
      Traditional: traditionalPoint ? traditionalPoint.value : 0,
      "I5 Model": i5ModelPoint ? i5ModelPoint.value : 0,
    }
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
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
        <YAxis unit="%" tick={{ fill: "#cbd5e1", fontSize: 10 }} stroke="#475569" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(15, 23, 42, 0.85)", // slate-900 with opacity
            border: "1px solid #0891b2", // cyan-600
            borderRadius: "0.375rem",
            color: "#e2e8f0", // slate-200
            backdropFilter: "blur(4px)",
          }}
          labelStyle={{ color: "#f1f5f9", fontWeight: "600" }} // slate-100
          itemStyle={{ color: "#cbd5e1" }} // slate-300
          cursor={{ fill: "rgba(71, 85, 105, 0.3)" }} // slate-700 with opacity
        />
        <Legend wrapperStyle={{ color: "#e2e8f0", paddingTop: "10px", fontSize: "12px" }} />
        <Bar dataKey="Traditional" fill="#fb923c" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="Traditional" position="top" fill="#f8fafc" fontSize={10} />
        </Bar>
        <Bar dataKey="I5 Model" fill="#38bdf8" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="I5 Model" position="top" fill="#f8fafc" fontSize={10} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

CostStructureChart.defaultProps = {
  data: {
    categories: [],
    traditional: [],
    i5Model: [],
  },
}

export default CostStructureChart
