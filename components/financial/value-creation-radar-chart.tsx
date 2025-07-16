"use client"

import type { FC } from "react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts"

interface ValueCreationDataPoint {
  subject: string
  i5Potential: number
  traditional: number
  fullMark: number
}

interface ValueCreationRadarChartProps {
  data: ValueCreationDataPoint[]
}

const ValueCreationRadarChart: FC<ValueCreationRadarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        {" "}
        {/* Adjusted outerRadius for better fit */}
        <PolarGrid stroke="#475569" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "#cbd5e1", fontSize: 10 }} />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]} // Corrected domain
          tick={{ fill: "#cbd5e1", fontSize: 10 }}
          stroke="#475569"
          axisLine={{ stroke: "#475569" }}
        />
        <Radar name="Traditional Baseline" dataKey="traditional" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
        <Radar name="I5 Model Potential" dataKey="i5Potential" stroke="#34d399" fill="#34d399" fillOpacity={0.6} />
        <Legend wrapperStyle={{ color: "#e2e8f0", paddingTop: "10px", fontSize: "12px" }} />
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
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

ValueCreationRadarChart.defaultProps = {
  data: [],
}

export default ValueCreationRadarChart
