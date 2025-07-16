"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  TrendingUp,
  PieChart,
  Calculator,
  Shield,
  BarChart3,
  LineChart,
  Clock,
  CalendarDays,
  Timer,
  Hourglass,
} from "lucide-react"
import {
  PieChart as RechartsPieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

const tabs = [
  { id: "overview", label: "Overview", icon: TrendingUp },
  { id: "cost-structure", label: "Cost Structure", icon: PieChart },
  { id: "investment", label: "Investment Framework", icon: Calculator },
  { id: "risk", label: "Risk Management", icon: Shield },
  { id: "value", label: "Value Realization", icon: LineChart },
]

export default function FinancialFrameworkPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blue-financial-building.png"
            alt="Financial Framework Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 to-[#0a1628]/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">Financial Framework</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              A comprehensive financial framework designed for productized real estate delivery, providing a structured
              approach to investment planning, cost analysis, and return projections across the entire asset lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-[#0a1628]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded font-light transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-light mb-6 text-white">Introduction to the I5 Financial Framework</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    The I5 Model requires a structured approach to investment planning, cost analysis, and return
                    projections that differs significantly from traditional methods. This framework provides practical
                    guidance for establishing a robust financial foundation that supports productized real estate
                    delivery, specifically accounting for the owner's investment in core digital platforms like the Body
                    of Knowledge (BoK), Virtual Showroom (VS), Design for Manufacture and Assembly (DfMA), and
                    Architecture, Engineering, and Construction (AEC) platforms, as well as their associated operational
                    costs.
                  </p>
                </div>
                <div>
                  <img
                    src="/images/modular-building.png"
                    alt="Modular Construction Approach"
                    className="w-full rounded-lg border border-gray-800"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">
                  Key Differences from Traditional Financial Frameworks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Owner Digital Platform Investment</h3>
                    <p className="text-gray-300 text-sm font-light">
                      Unlike traditional models with minimal or no platform investment, I5 involves significant upfront
                      and ongoing investment in owner-controlled digital platforms for their procurement, creation,
                      customization, integration, administration, maintenance, and updates. These costs are often
                      amortized across a portfolio or programs, rather than per project.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Design & Engineering Costs</h3>
                    <p className="text-gray-300 text-sm font-light">
                      Traditional approaches have sequential design and engineering costs, typically 3-5% of total
                      project cost. In the I5 Model, these costs are front-loaded and higher (5-7%) due to increased
                      initial investment to enable standardization and Design for Manufacture and Assembly (DfMA), with
                      these design costs then amortized across multiple projects.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Shift to Off-site Manufacturing</h3>
                    <p className="text-gray-300 text-sm font-light">
                      I5 significantly shifts a portion of construction costs (25-35%) to factory production of
                      standardized components in partner facilities. This contrasts with minimal or no off-site
                      manufacturing in traditional models.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Reduced On-site Construction</h3>
                    <p className="text-gray-300 text-sm font-light">
                      On-site costs are reduced to 35-45% of the total, focusing primarily on assembly and integration
                      rather than raw material construction.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Lower Contingency</h3>
                    <p className="text-gray-300 text-sm font-light">
                      Due to reduced variability from standardization, the I5 Model typically requires a lower
                      contingency (3-5%) compared to the 5-10% seen in traditional methods, although technology-related
                      risks must still be considered.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Compressed Financing Costs</h3>
                    <p className="text-gray-300 text-sm font-light">
                      Shorter delivery cycles lead to reduced financing costs (3-6%) through faster project completion.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Benefits of the I5 Financial Framework</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Schedule Compression</h3>
                    <div className="text-2xl font-light text-blue-400 mb-2">20-50%</div>
                    <p className="text-gray-300 text-sm font-light">
                      Timeline reduction and 1-3% cost savings from reduced financing costs through parallel processing
                      and off-site manufacturing.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Quality Improvement</h3>
                    <div className="text-2xl font-light text-blue-400 mb-2">60-70%</div>
                    <p className="text-gray-300 text-sm font-light">
                      Reduction in defects and 1-2% savings in warranty costs due to controlled manufacturing
                      environments and standardized designs.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Cost Efficiency</h3>
                    <div className="text-2xl font-light text-blue-400 mb-2">10-20%</div>
                    <p className="text-gray-300 text-sm font-light">
                      Direct cost savings across multiple projects through material waste reduction, labor productivity
                      improvements, economies of scale, and reduced design costs via reuse.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Sustainability Enhancement</h3>
                    <div className="text-2xl font-light text-blue-400 mb-2">30-40%</div>
                    <p className="text-gray-300 text-sm font-light">
                      Waste reduction and 20-30% embodied carbon reduction through optimized design and factory
                      production.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Scalability Benefits</h3>
                    <div className="text-2xl font-light text-blue-400 mb-2">40-50%</div>
                    <p className="text-gray-300 text-sm font-light">
                      Increase in delivery capacity with the same resources by supporting the delivery of multiple
                      projects with consistent quality and predictable outcomes.
                    </p>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">Platform Efficiency Gains</h3>
                    <div className="text-2xl font-light text-blue-400 mb-2">Significant</div>
                    <p className="text-gray-300 text-sm font-light">
                      Investing in and utilizing the owner-controlled BoK, VS, DfMA, and AEC platforms leads to improved
                      collaboration, reduced errors, faster decision-making, and better knowledge management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "cost-structure" && (
            <motion.div
              key="cost-structure"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">
                  Cost Structure Comparison: Traditional vs. I5 Model
                </h2>
                <p className="text-gray-300 mb-8 font-light">
                  The I5 Model introduces significant changes to the traditional cost structure of real estate
                  development projects. Understanding these differences is essential for accurate financial planning and
                  optimization.
                </p>
              </div>

              {/* Cost Comparison Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-600/50 rounded-xl p-8 backdrop-blur-sm shadow-2xl">
                  <h3 className="text-xl font-light mb-6 text-white text-center">Traditional Approach</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <defs>
                          <linearGradient id="traditionalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f59e0b" />
                          </linearGradient>
                          <linearGradient id="traditionalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f87171" />
                            <stop offset="100%" stopColor="#ef4444" />
                          </linearGradient>
                          <linearGradient id="traditionalGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a78bfa" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                          <linearGradient id="traditionalGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                          <linearGradient id="traditionalGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4ade80" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                        <Pie
                          data={[
                            { name: "Land Acquisition", value: 25, fill: "#f59e0b" },
                            { name: "On-site Construction", value: 65, fill: "#ef4444" },
                            { name: "Design & Engineering", value: 4, fill: "#8b5cf6" },
                            { name: "Project Management", value: 4, fill: "#06b6d4" },
                            { name: "Contingency", value: 2, fill: "#10b981" },
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={110}
                          innerRadius={40}
                          dataKey="value"
                          stroke="#475569"
                          strokeWidth={2}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "1px solid #475569",
                            borderRadius: "8px",
                            color: "#ffffff",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                          }}
                          formatter={(value) => [`${value}%`, "Percentage"]}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { name: "Land Acquisition", value: 25, color: "#f59e0b" },
                      { name: "On-site Construction", value: 65, color: "#ef4444" },
                      { name: "Design & Engineering", value: 4, color: "#8b5cf6" },
                      { name: "Project Management", value: 4, color: "#06b6d4" },
                      { name: "Contingency", value: 2, color: "#10b981" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                          <span className="text-slate-300">{item.name}</span>
                        </div>
                        <span className="text-white font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-950/80 to-indigo-900/60 border border-blue-600/40 rounded-xl p-8 backdrop-blur-sm shadow-2xl">
                  <h3 className="text-xl font-light mb-6 text-white text-center">I5 Model Approach</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <defs>
                          <linearGradient id="i5Gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                          <linearGradient id="i5Gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c084fc" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                          <linearGradient id="i5Gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                          <linearGradient id="i5Gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                          <linearGradient id="i5Gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#0ea5e9" />
                          </linearGradient>
                          <linearGradient id="i5Gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a3e635" />
                            <stop offset="100%" stopColor="#84cc16" />
                          </linearGradient>
                          <linearGradient id="i5Gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fcd34d" />
                            <stop offset="100%" stopColor="#fbbf24" />
                          </linearGradient>
                        </defs>
                        <Pie
                          data={[
                            { name: "Land Acquisition", value: 25, fill: "#3b82f6" },
                            { name: "Off-site Manufacturing", value: 30, fill: "#a855f7" },
                            { name: "On-site Assembly", value: 20, fill: "#10b981" },
                            { name: "Design & Engineering", value: 6, fill: "#f97316" },
                            { name: "Platform Investment", value: 8, fill: "#0ea5e9" },
                            { name: "Project Management", value: 4, fill: "#84cc16" },
                            { name: "Contingency", value: 7, fill: "#fbbf24" },
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={110}
                          innerRadius={40}
                          dataKey="value"
                          stroke="#2563eb"
                          strokeWidth={2}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1e3a8a",
                            border: "1px solid #3b82f6",
                            borderRadius: "8px",
                            color: "#ffffff",
                            boxShadow: "0 10px 25px rgba(59,130,246,0.2)",
                          }}
                          formatter={(value) => [`${value}%`, "Percentage"]}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { name: "Land Acquisition", value: 25, color: "#3b82f6" },
                      { name: "Off-site Manufacturing", value: 30, color: "#a855f7" },
                      { name: "On-site Assembly", value: 20, color: "#10b981" },
                      { name: "Design & Engineering", value: 6, color: "#f97316" },
                      { name: "Platform Investment", value: 8, color: "#0ea5e9" },
                      { name: "Project Management", value: 4, color: "#84cc16" },
                      { name: "Contingency", value: 7, color: "#fbbf24" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                          <span className="text-blue-200">{item.name}</span>
                        </div>
                        <span className="text-white font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cost Savings Waterfall Chart */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-xl p-8 backdrop-blur-sm mb-12">
                <h3 className="text-2xl font-light mb-8 text-white text-center">Cost Impact Analysis</h3>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Traditional Base", value: 100, fill: "#64748b", type: "base" },
                        { name: "Manufacturing Efficiency", value: -12, fill: "#10b981", type: "savings" },
                        { name: "Schedule Compression", value: -8, fill: "#059669", type: "savings" },
                        { name: "Quality Improvement", value: -5, fill: "#047857", type: "savings" },
                        { name: "Platform Investment", value: 8, fill: "#ef4444", type: "cost" },
                        { name: "Enhanced Design", value: 3, fill: "#dc2626", type: "cost" },
                        { name: "I5 Final Cost", value: 86, fill: "#3b82f6", type: "final" },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                    >
                      <defs>
                        <linearGradient id="savingsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#047857" />
                        </linearGradient>
                        <linearGradient id="costGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                        <linearGradient id="finalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#1e40af" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#d1d5db", fontSize: 11 }}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        interval={0}
                      />
                      <YAxis
                        tick={{ fill: "#d1d5db" }}
                        axisLine={{ stroke: "#374151" }}
                        tickLine={{ stroke: "#374151" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "1px solid #374151",
                          borderRadius: "8px",
                          color: "#ffffff",
                        }}
                        formatter={(value, name, props) => {
                          const sign = props.payload.type === "savings" ? "-" : props.payload.type === "cost" ? "+" : ""
                          return [`${sign}${Math.abs(value)}%`, "Impact"]
                        }}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]} stroke="#374151" strokeWidth={1} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                    <div className="text-2xl font-light text-green-400 mb-1">-25%</div>
                    <div className="text-sm text-gray-300">Total Savings</div>
                  </div>
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <div className="text-2xl font-light text-red-400 mb-1">+11%</div>
                    <div className="text-sm text-gray-300">Additional Investment</div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                    <div className="text-2xl font-light text-blue-400 mb-1">-14%</div>
                    <div className="text-sm text-gray-300">Net Cost Reduction</div>
                  </div>
                </div>
              </div>

              {/* Complete Detailed Cost Breakdown Table */}
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-800">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-4 px-6 text-white font-medium">Cost Category</th>
                      <th className="text-left py-4 px-6 text-white font-medium">Traditional Approach</th>
                      <th className="text-left py-4 px-6 text-white font-medium">I5 Model Approach</th>
                      <th className="text-left py-4 px-6 text-white font-medium">Key Differences</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Land Acquisition</td>
                      <td className="py-4 px-6 text-gray-300 font-light">20-30% of total cost</td>
                      <td className="py-4 px-6 text-white font-light">20-30% of total cost</td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Similar proportion, but site selection may prioritize standardization compatibility
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Owner Digital Platform Investment</td>
                      <td className="py-4 px-6 text-gray-300 font-light">Minimal or none</td>
                      <td className="py-4 px-6 text-white font-light">
                        Significant upfront & ongoing investment (varies)
                      </td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        <strong>New cost category:</strong> Includes procurement/creation, customization, integration,
                        administration, maintenance, and updates for BoK, VS, DfMA, AEC platforms
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Design & Engineering</td>
                      <td className="py-4 px-6 text-gray-300 font-light">3-5% of total cost, mostly sequential</td>
                      <td className="py-4 px-6 text-white font-light">
                        5-7% of total cost, front-loaded with higher initial investment
                      </td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Increased upfront design investment to enable standardization and DfMA; design costs amortized
                        across multiple projects
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Off-site Manufacturing</td>
                      <td className="py-4 px-6 text-gray-300 font-light">Minimal or none</td>
                      <td className="py-4 px-6 text-white font-light">25-35% of construction cost</td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Significant shift to factory production of standardized components; controlled environment
                        reduces waste and improves quality
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">On-site Construction</td>
                      <td className="py-4 px-6 text-gray-300 font-light">
                        60-70% of total cost, primarily on-site labor & materials
                      </td>
                      <td className="py-4 px-6 text-white font-light">
                        35-45% of total cost, focused on assembly and integration
                      </td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Reduced on-site labor; shift to component assembly rather than raw material construction
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Project Management</td>
                      <td className="py-4 px-6 text-gray-300 font-light">3-5% of total cost, traditional management</td>
                      <td className="py-4 px-6 text-white font-light">3-5% of total cost, integration management</td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Focus shifts to coordination between factory and site, supply chain integration, leveraging
                        owner platforms
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Marketing & Sales</td>
                      <td className="py-4 px-6 text-gray-300 font-light">3-7% of total cost, traditional marketing</td>
                      <td className="py-4 px-6 text-white font-light">
                        3-7% of total cost, product-centered marketing
                      </td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Emphasis on standardized product benefits, leveraging owner's Virtual Showroom platform
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Contingency</td>
                      <td className="py-4 px-6 text-gray-300 font-light">5-10% of construction cost, risk-based</td>
                      <td className="py-4 px-6 text-white font-light">
                        3-5% of construction cost, reduced due to standardization
                      </td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Lower variability in standardized approaches reduces risk contingency requirements
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-4 px-6 font-light text-white">Financing</td>
                      <td className="py-4 px-6 text-gray-300 font-light">5-8% of total cost, duration-based</td>
                      <td className="py-4 px-6 text-white font-light">3-6% of total cost, compressed timelines</td>
                      <td className="py-4 px-6 text-gray-300 text-sm font-light">
                        Shorter delivery cycles reduce financing costs through faster completion
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === "investment" && (
            <motion.div
              key="investment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">Investment Framework</h2>
                <p className="text-gray-300 mb-8 font-light">
                  The I5 Model requires investment across several key categories to establish the necessary
                  infrastructure for productized real estate delivery. These investments are structured to deliver
                  returns across multiple projects.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Investment Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">1. Core Platform Investment</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">
                          Initial platform procurement/development
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Customization and integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Training and change management</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Ongoing maintenance and updates</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">2. Product Development Investment</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Initial design and standardization</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Prototyping and testing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Manufacturing setup</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Market validation</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">3. Operational Investment</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Team capability development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Partner integration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Quality systems</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Continuous improvement</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-800 rounded p-6">
                    <h3 className="font-medium text-white mb-3">4. Technology Infrastructure</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Hardware and software</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Integration systems</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Security and compliance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-sm font-light">Data management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Financial Performance Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border-gray-800 rounded-lg p-6 border-0">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-800 p-3 rounded-full mr-4">
                        <TrendingUp className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-white">Project IRR</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light mb-4">
                      Internal rate of return for individual projects
                    </p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4">
                      <span className="text-white font-medium">2-5% improvement</span>
                      <span className="text-gray-400 text-sm"> over traditional methods</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Measured at project completion</span>
                    </div>
                  </div>

                  <div className="border-gray-800 rounded-lg p-6 border-0">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-800 p-3 rounded-full mr-4">
                        <BarChart3 className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-white">Program ROI</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light mb-4">
                      Return across multiple projects using same product platform
                    </p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4">
                      <span className="text-white font-medium">15-25% improvement</span>
                      <span className="text-gray-400 text-sm"> through scale economies</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>Measured annually</span>
                    </div>
                  </div>

                  <div className="border-gray-800 rounded-lg p-6 border-0">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-800 p-3 rounded-full mr-4">
                        <LineChart className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-white">Platform ROI</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light mb-4">
                      Return specifically attributed to owner platform investment
                    </p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4">
                      <span className="text-white font-medium">Positive ROI</span>
                      <span className="text-gray-400 text-sm"> within 3-5 year payback period</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>Measured annually</span>
                    </div>
                  </div>

                  <div className="border-gray-800 rounded-lg p-6 border-0">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-800 p-3 rounded-full mr-4">
                        <Timer className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-white">Payback Period</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light mb-4">Time to recover total investment</p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4">
                      <span className="text-white font-medium">20-30% reduction</span>
                      <span className="text-gray-400 text-sm"> from traditional timeline</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Measured at project completion</span>
                    </div>
                  </div>

                  <div className="border-gray-800 rounded-lg p-6 border-0">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-800 p-3 rounded-full mr-4">
                        <Hourglass className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-white">Time-to-Revenue</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light mb-4">
                      Period from investment start to revenue commencement
                    </p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-4">
                      <span className="text-white font-medium">30-50% reduction</span>
                      <span className="text-gray-400 text-sm"> through faster delivery</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Measured at project completion</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 via-blue-950/20 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-light mb-6 text-white">Financial Framework Foundation</h3>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  The financial framework provides the foundation for making informed investment decisions and ensuring
                  the long-term viability of the I5 Model implementation. Value realization is a continuous process of
                  optimization and improvement, with value compounding through knowledge accumulation, process
                  refinement, and ecosystem maturation.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "risk" && (
            <motion.div
              key="risk"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">Risk Management and Contingency</h2>
                <p className="text-gray-300 mb-8 font-light">
                  The I5 Model introduces new risk categories while mitigating traditional ones. A comprehensive risk
                  management approach is essential for successful implementation and long-term sustainability of the
                  model.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Risk Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 rounded-xl p-6 backdrop-blur-sm border-0 bg-transparent">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Technology Risks</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Platform failures, integration issues, cybersecurity vulnerabilities, and technology obsolescence
                      can impact the effectiveness of the I5 Model's digital foundation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-lightBlue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            className="text-sky-500"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Manufacturing Risks</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Partner capacity constraints, quality control issues, logistics challenges, and supply chain
                      disruptions can affect the off-site manufacturing component.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-sky-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Market Risks</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Product acceptance uncertainty, competitive responses, changing market preferences, and regulatory
                      changes can impact the market success of standardized offerings.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-sky-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Operational Risks</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Team capability gaps, process maturity issues, coordination challenges, and knowledge management
                      failures can undermine the operational effectiveness of the I5 Model.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-sky-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Financial Risks</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Investment recovery challenges, cash flow timing issues, financing constraints, and economic
                      volatility can impact the financial viability of the I5 Model implementation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Contingency Framework</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent">
                  <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-800/30 rounded-xl p-6 bg-transparent">
                    <h3 className="text-xl font-light mb-4 text-white">Technology Platform Contingency</h3>
                    <div className="text-3xl font-light text-blue-400 mb-3">2-3%</div>
                    <p className="text-gray-300 text-sm font-light">
                      of platform investment should be allocated to address potential technology risks, including
                      platform failures, integration issues, and cybersecurity vulnerabilities.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-800/30 rounded-xl p-6">
                    <h3 className="text-xl font-light mb-4 text-white">Manufacturing Contingency</h3>
                    <div className="text-3xl font-light text-purple-400 mb-3">3-5%</div>
                    <p className="text-gray-300 text-sm font-light">
                      of manufacturing costs should be reserved for manufacturing-related risks, including quality
                      control issues, logistics challenges, and supply chain disruptions.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/10 border border-amber-800/30 rounded-xl p-6 bg-transparent">
                    <h3 className="text-xl font-light mb-4 text-white">Market Contingency</h3>
                    <div className="text-3xl font-light text-amber-400 mb-3">5-10%</div>
                    <p className="text-gray-300 text-sm font-light">
                      of revenue projections should account for market-related risks, including product acceptance
                      uncertainty, competitive responses, and changing market preferences.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-950/30 to-green-900/10 border border-green-800/30 rounded-xl p-6">
                    <h3 className="text-xl font-light mb-4 text-white">General Project Contingency</h3>
                    <div className="text-3xl font-light text-green-400 mb-3">3-5%</div>
                    <p className="text-gray-300 text-sm font-light">
                      of total project cost should be maintained as general contingency to address unforeseen risks and
                      challenges that may arise during project execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 via-blue-950/20 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-light mb-6 text-white">Risk Mitigation Strategies</h3>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Effective risk management in the I5 Model requires a proactive approach that combines robust
                  contingency planning with strategic risk mitigation. By identifying potential risks early and
                  implementing appropriate controls, organizations can minimize disruptions and ensure the successful
                  implementation of the model.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "value" && (
            <motion.div
              key="value"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-light mb-6 text-white">Value Realization</h2>
                <p className="text-gray-300 mb-8 font-light">
                  The I5 Model creates value through multiple mechanisms that collectively enhance financial
                  performance, operational efficiency, and sustainability outcomes. Understanding these value creation
                  pathways is essential for maximizing return on investment.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Value Creation Mechanisms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-800/30 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Speed to Market</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Faster delivery enables earlier revenue recognition, reducing time-to-market by 30-50% compared to
                      traditional approaches. This acceleration creates significant competitive advantage and financial
                      benefits.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-950/30 to-green-900/10 border border-green-800/30 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Cost Efficiency</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Standardization and manufacturing optimization reduce costs by 10-20% across multiple projects
                      through material waste reduction, labor productivity improvements, and economies of scale.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-800/30 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Quality Premium</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Superior quality enables premium pricing and reduces warranty costs by 1-2%. Factory production in
                      controlled environments leads to 60-70% reduction in defects compared to traditional construction.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/10 border border-amber-800/30 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-amber-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Scalability</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Platform approach enables rapid expansion and 40-50% increase in delivery capacity with the same
                      resources. This scalability creates significant growth opportunities and market advantage.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-950/30 to-cyan-900/10 border border-cyan-800/30 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full mr-4 bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-cyan-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-white">Sustainability</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-light">
                      Environmental benefits support ESG objectives with 30-40% waste reduction and 20-30% embodied
                      carbon reduction through optimized design and factory production, creating both environmental and
                      financial value.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-8 text-white">Value Measurement</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-800">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-4 px-6 text-white font-medium">Measurement Category</th>
                        <th className="text-left py-4 px-6 text-white font-medium">Key Metrics</th>
                        <th className="text-left py-4 px-6 text-white font-medium">Target Improvement</th>
                        <th className="text-left py-4 px-6 text-white font-medium">Measurement Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-6 font-light text-white">Financial Performance</td>
                        <td className="py-4 px-6 text-gray-300 font-light">
                          Project IRR, Program ROI, Platform ROI, Payback Period, Time-to-Revenue
                        </td>
                        <td className="py-4 px-6 text-white font-light">15-25% improvement</td>
                        <td className="py-4 px-6 text-gray-300 text-sm font-light">Quarterly/Annual</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-6 font-light text-white">Operational Efficiency</td>
                        <td className="py-4 px-6 text-gray-300 font-light">
                          Cycle time, Labor productivity, Material utilization, Defect rates
                        </td>
                        <td className="py-4 px-6 text-white font-light">30-50% improvement</td>
                        <td className="py-4 px-6 text-gray-300 text-sm font-light">Monthly</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-6 font-light text-white">Quality & Customer Satisfaction</td>
                        <td className="py-4 px-6 text-gray-300 font-light">
                          Defect rates, Warranty claims, Customer satisfaction scores, NPS
                        </td>
                        <td className="py-4 px-6 text-white font-light">60-70% improvement</td>
                        <td className="py-4 px-6 text-gray-300 text-sm font-light">Per project/Quarterly</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-6 font-light text-white">Market Share & Growth</td>
                        <td className="py-4 px-6 text-gray-300 font-light">
                          Market penetration, Revenue growth, Product adoption rates
                        </td>
                        <td className="py-4 px-6 text-white font-light">20-30% improvement</td>
                        <td className="py-4 px-6 text-gray-300 text-sm font-light">Quarterly/Annual</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-6 font-light text-white">Sustainability Performance</td>
                        <td className="py-4 px-6 text-gray-300 font-light">
                          Waste reduction, Carbon footprint, Energy efficiency, Material efficiency
                        </td>
                        <td className="py-4 px-6 text-white font-light">20-40% improvement</td>
                        <td className="py-4 px-6 text-gray-300 text-sm font-light">Per project/Annual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/50 via-blue-950/20 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-light mb-6 text-white">Continuous Value Optimization</h3>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  The financial framework provides the foundation for making informed investment decisions and ensuring
                  the long-term viability of the I5 Model implementation. Value realization is a continuous process of
                  optimization and improvement, with value compounding through knowledge accumulation, process
                  refinement, and ecosystem maturation.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-6 h-1 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Additional tabs can be added here */}
        </AnimatePresence>
      </div>
    </div>
  )
}
