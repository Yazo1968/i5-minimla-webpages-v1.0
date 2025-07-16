"use client"
import type { FC } from "react"

type RiskType = "I5 Specific" | "Traditional Mitigated" | "Shared" | "New Emphasis for I5" | "New"

interface RiskDataPoint {
  risk: string
  likelihood: number // 1-5
  impact: number // 1-5
  category: string
  type: RiskType
}

interface RiskHeatmapChartProps {
  data: RiskDataPoint[]
}

const getRiskColor = (score: number): string => {
  if (score >= 15) return "bg-red-700/80 text-red-100" // High
  if (score >= 10) return "bg-orange-600/80 text-orange-100" // Medium-High
  if (score >= 5) return "bg-yellow-600/80 text-yellow-100" // Medium
  return "bg-green-700/80 text-green-100" // Low
}

const RiskHeatmapChart: FC<RiskHeatmapChartProps> = ({ data }) => {
  const likelihoodLevels = [1, 2, 3, 4, 5] // Low to High
  const impactLevels = [1, 2, 3, 4, 5] // Low to High

  const riskMatrix: (RiskDataPoint | null)[][] = Array(impactLevels.length)
    .fill(null)
    .map(() => Array(likelihoodLevels.length).fill(null))

  const placedRisks = new Set<string>()

  data.forEach((risk) => {
    const impactIndex = impactLevels.length - risk.impact // Higher impact at top
    const likelihoodIndex = risk.likelihood - 1

    if (
      impactIndex >= 0 &&
      impactIndex < impactLevels.length &&
      likelihoodIndex >= 0 &&
      likelihoodIndex < likelihoodLevels.length
    ) {
      if (!riskMatrix[impactIndex][likelihoodIndex]) {
        riskMatrix[impactIndex][likelihoodIndex] = risk
        placedRisks.add(risk.risk)
      }
    }
  })

  // Fallback for unplaced risks (simple first-available slot)
  data.forEach((risk) => {
    if (!placedRisks.has(risk.risk)) {
      for (let i = 0; i < impactLevels.length; i++) {
        for (let j = 0; j < likelihoodLevels.length; j++) {
          if (!riskMatrix[i][j]) {
            riskMatrix[i][j] = risk
            placedRisks.add(risk.risk)
            return
          }
        }
      }
    }
  })

  return (
    <div className="w-full h-full p-1 md:p-2 overflow-auto text-slate-300">
      <div className="flex">
        <div className="w-12 md:w-16 pt-12 md:pt-16 text-[10px] md:text-xs text-center transform -rotate-90 whitespace-nowrap origin-bottom-left text-slate-400">
          Impact →
        </div>
        <div className="flex-grow">
          <table className="w-full h-full border-collapse border border-slate-700">
            <thead>
              <tr>
                <th className="p-1 border border-slate-700 w-10 md:w-12 bg-slate-800/50"></th>
                {likelihoodLevels.map((level) => (
                  <th
                    key={`lh-col-${level}`}
                    className="p-1 border border-slate-700 text-[10px] md:text-xs font-semibold text-slate-300 bg-slate-800/50"
                  >
                    L{level}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {impactLevels
                .slice()
                .reverse()
                .map((impactLevel, rowIndex) => (
                  <tr key={`impact-${impactLevel}`}>
                    <td className="p-1 border border-slate-700 text-[10px] md:text-xs font-semibold text-center text-slate-300 bg-slate-800/50">
                      I{impactLevel}
                    </td>
                    {likelihoodLevels.map((likelihoodLevel, colIndex) => {
                      const riskItem = riskMatrix[rowIndex][colIndex]
                      const score = riskItem ? riskItem.likelihood * riskItem.impact : 0 // Default score for empty cells if needed
                      const cellColor = riskItem ? getRiskColor(score) : "bg-slate-800/30"
                      return (
                        <td
                          key={`cell-${impactLevel}-${likelihoodLevel}`}
                          className={`p-1 border border-slate-700 text-center h-16 md:h-20 w-1/5 ${cellColor}`}
                          title={
                            riskItem
                              ? `${riskItem.risk} (L${riskItem.likelihood}, I${riskItem.impact}) - Type: ${riskItem.type}`
                              : `Likelihood ${likelihoodLevel}, Impact ${impactLevel}`
                          }
                        >
                          {riskItem && (
                            <div className="text-[10px] md:text-xs truncate leading-tight p-1">
                              <div className="font-semibold">{riskItem.risk}</div>
                              <div className="text-[9px] md:text-[10px] opacity-80">({riskItem.category})</div>
                              <div
                                className="text-[8px] md:text-[9px] opacity-70 italic truncate"
                                title={`Type: ${riskItem.type}`}
                              >
                                {riskItem.type}
                              </div>
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="text-center text-[10px] md:text-xs mt-2 text-slate-400">Likelihood →</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
        <span className="py-1 px-2 bg-green-700/80 text-green-100 rounded">Low Risk</span>
        <span className="py-1 px-2 bg-yellow-600/80 text-yellow-100 rounded">Medium Risk</span>
        <span className="py-1 px-2 bg-orange-600/80 text-orange-100 rounded">Medium-High Risk</span>
        <span className="py-1 px-2 bg-red-700/80 text-red-100 rounded">High Risk</span>
      </div>
    </div>
  )
}

RiskHeatmapChart.defaultProps = {
  data: [],
}

export default RiskHeatmapChart
