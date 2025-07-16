import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import CostStructureChart from "@/components/financial/cost-structure-chart"
import InvestmentAllocationChart from "@/components/financial/investment-allocation-chart"
import PerformanceMetricsChart from "@/components/financial/performance-metrics-chart"
import RiskHeatmapChart from "@/components/financial/risk-heatmap-chart"
import ContingencyAllocationChart from "@/components/financial/contingency-allocation-chart"
import ValueCreationRadarChart from "@/components/financial/value-creation-radar-chart"
import CashflowComparisonChart from "@/components/financial/cashflow-comparison-chart"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Financial Dashboard - I5 Model",
  description:
    "Visualizing key financial metrics, cost structures, investments, risks, and value creation within the I5 Model.",
}

// Data (ensure this is the updated comparative data from the previous step)
const costStructureData = {
  categories: [
    "Land",
    "Platform",
    "Design",
    "Off-site Mfg.",
    "On-site Const.",
    "PM",
    "Marketing",
    "Contingency",
    "Financing",
  ],
  traditional: [
    { name: "Land", value: 25 },
    { name: "Platform", value: 0 },
    { name: "Design", value: 4 },
    { name: "Off-site Mfg.", value: 2 },
    { name: "On-site Const.", value: 50 },
    { name: "PM", value: 4 },
    { name: "Marketing", value: 5 },
    { name: "Contingency", value: 7.5 },
    { name: "Financing", value: 6.5 },
  ],
  i5Model: [
    { name: "Land", value: 25 },
    { name: "Platform", value: 10 },
    { name: "Design", value: 6 },
    { name: "Off-site Mfg.", value: 30 },
    { name: "On-site Const.", value: 40 },
    { name: "PM", value: 4 },
    { name: "Marketing", value: 5 },
    { name: "Contingency", value: 4 },
    { name: "Financing", value: 4.5 },
  ],
}

const investmentAllocationData = [
  { name: "Platform Development", traditional: 5, i5Model: 40 },
  { name: "Product Design & Eng.", traditional: 15, i5Model: 30 },
  { name: "Manufacturing Setup", traditional: 10, i5Model: 15 },
  { name: "Operational Systems", traditional: 30, i5Model: 10 },
  { name: "Technology Infrastructure", traditional: 10, i5Model: 5 },
]

const performanceMetricsData = [
  { name: "Project IRR", traditionalBaseline: 12, i5Target: 15.5, i5Actual: 16, unit: "%", higherIsBetter: true },
  { name: "Program ROI", traditionalBaseline: 15, i5Target: 35, i5Actual: 38, unit: "%", higherIsBetter: true },
  { name: "Payback Period", traditionalBaseline: 7, i5Target: 4, i5Actual: 3.5, unit: "yrs", lowerIsBetter: true },
  { name: "Time-to-Revenue", traditionalBaseline: 24, i5Target: 14, i5Actual: 12, unit: "mths", lowerIsBetter: true },
]

const riskMatrixData = [
  { risk: "Platform Failure", likelihood: 3, impact: 4, category: "Technology", type: "I5 Specific" as const },
  { risk: "Integration Issues", likelihood: 4, impact: 3, category: "Technology", type: "I5 Specific" as const },
  {
    risk: "Cybersecurity (Platform)",
    likelihood: 3,
    impact: 5,
    category: "Technology",
    type: "New Emphasis for I5" as const,
  },
  {
    risk: "Manufacturing Partner Capacity",
    likelihood: 2,
    impact: 3,
    category: "Supply Chain",
    type: "Shifted Emphasis" as const,
  },
  {
    risk: "Product Market Acceptance",
    likelihood: 4,
    impact: 4,
    category: "Market",
    type: "New Emphasis for I5" as const,
  },
  {
    risk: "Team Capability (New Model)",
    likelihood: 3,
    impact: 2,
    category: "Operational",
    type: "I5 Specific" as const,
  },
  {
    risk: "Investment Recovery (Platform)",
    likelihood: 2,
    impact: 5,
    category: "Financial",
    type: "I5 Specific" as const,
  },
  {
    risk: "Traditional Cost Overruns",
    likelihood: 4,
    impact: 3,
    category: "Financial",
    type: "Traditional Mitigated by I5" as const,
  },
  {
    risk: "Traditional Schedule Delays",
    likelihood: 3,
    impact: 4,
    category: "Operational",
    type: "Traditional Mitigated by I5" as const,
  },
]

const contingencyAllocationData = [
  { name: "Technology Platform", i5Model: 2.5, unit: "% of platform inv." },
  { name: "Manufacturing", i5Model: 4, unit: "% of mfg. costs" },
  { name: "Market", i5Model: 7.5, unit: "% of revenue proj." },
  { name: "General Project", traditional: 7.5, i5Model: 4, unit: "% of total cost" },
]

const valueCreationData = [
  { subject: "Speed to Market", i5Potential: 80, traditional: 50, fullMark: 100 },
  { subject: "Cost Efficiency", i5Potential: 70, traditional: 40, fullMark: 100 },
  { subject: "Quality Premium", i5Potential: 85, traditional: 60, fullMark: 100 },
  { subject: "Scalability", i5Potential: 90, traditional: 50, fullMark: 100 },
  { subject: "Sustainability", i5Potential: 75, traditional: 45, fullMark: 100 },
]

// Cashflow Timeline Data - following your exact data structure
const cashflowTimelineData = [
  { period: "Year 1", traditional: -15, i5Model: -20, cumulativeTraditional: -15, cumulativeI5: -20 },
  { period: "Year 2", traditional: 5, i5Model: 8, cumulativeTraditional: -10, cumulativeI5: -12 },
  { period: "Year 3", traditional: 8, i5Model: 12, cumulativeTraditional: -2, cumulativeI5: 0 },
  { period: "Year 4", traditional: 10, i5Model: 15, cumulativeTraditional: 8, cumulativeI5: 15 },
  { period: "Year 5", traditional: 12, i5Model: 18, cumulativeTraditional: 20, cumulativeI5: 33 },
  { period: "Year 6", traditional: 12, i5Model: 20, cumulativeTraditional: 32, cumulativeI5: 53 },
  { period: "Year 7", traditional: 12, i5Model: 22, cumulativeTraditional: 44, cumulativeI5: 75 },
]

export default function FinancialDashboardPage() {
  return (
    <div className="min-h-screen text-white pb-8 bg-slate-800">
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-100 via-blue-200 to-slate-100 bg-clip-text text-transparent sm:text-5xl">
            I5 Financial Dashboard
          </h1>
          <p className="mt-4 text-xl text-blue-200/90">
            Comparative insights into the I5 Model's financial framework, performance, and risk profile.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {[
            {
              id: "cost-structure",
              title: "Cost Structure Comparison",
              description: "Traditional vs. I5 Model (% of Total Project Cost)",
              component: <CostStructureChart data={costStructureData} />,
              colSpan: "xl:col-span-2",
              height: "h-[400px]",
            },
            {
              id: "investment-allocation",
              title: "I5 Investment Allocation Emphasis",
              description: "Comparative emphasis on key investment areas: Traditional vs. I5 Model.",
              component: <InvestmentAllocationChart data={investmentAllocationData} />,
              colSpan: "",
              height: "h-[400px]",
            },
            {
              id: "performance-metrics",
              title: "Key Financial Performance Metrics",
              description: "Targets and illustrative actuals for I5 Model performance vs. Traditional Baselines.",
              component: <PerformanceMetricsChart data={performanceMetricsData} />,
              colSpan: "xl:col-span-3",
              height: "h-[400px]",
            },
            {
              id: "risk-heatmap",
              title: "Financial Risk Heatmap",
              description: "Likelihood vs. Impact assessment for key risk areas, noting I5 context.",
              component: <RiskHeatmapChart data={riskMatrixData} />,
              colSpan: "xl:col-span-2",
              height: "h-[450px]",
              contentOverflow: "overflow-auto",
            },
            {
              id: "contingency-allocation",
              title: "Contingency Allocation Comparison",
              description: "I5 specific contingencies and General Project Contingency: Traditional vs. I5 Model.",
              component: <ContingencyAllocationChart data={contingencyAllocationData} />,
              colSpan: "",
              height: "h-[400px]",
            },
            {
              id: "value-creation",
              title: "Value Creation Potential",
              description: "Comparing I5 Model potential against traditional approaches.",
              component: <ValueCreationRadarChart data={valueCreationData} />,
              colSpan: "xl:col-span-2",
              height: "h-[450px]",
            },
            {
              id: "cashflow-comparison",
              title: "Cashflow Timeline: Traditional vs. I5 Model",
              description: "Cumulative cashflow comparison showing the I5 Model's superior long-term performance",
              component: <CashflowComparisonChart data={cashflowTimelineData} />,
              colSpan: "",
              height: "h-[450px]",
            },
          ].map((chart) => (
            <Card
              key={chart.id}
              className={`bg-gray-900/70 backdrop-blur-md border border-cyan-400/30 rounded-xl shadow-xl shadow-black/40 ${chart.colSpan}`}
            >
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold text-cyan-300">{chart.title}</CardTitle>
                <CardDescription className="text-sm text-blue-300/80">{chart.description}</CardDescription>
              </CardHeader>
              <CardContent className={`${chart.height} p-2 ${chart.contentOverflow || ""}`}>
                {chart.component}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
