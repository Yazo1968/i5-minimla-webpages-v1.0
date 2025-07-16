"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Shield,
  Target,
  Play,
  Pause,
  RotateCcw,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Lightbulb,
  Leaf,
  Eye,
  Settings,
  Database,
  Network,
  Brain,
} from "lucide-react"

const tabs = [
  { id: "overview", label: "Overview", icon: Eye },
  { id: "kpis", label: "Key Performance Indicators", icon: BarChart3 },
  { id: "risk-management", label: "Risk Management", icon: Shield },
  { id: "continuous-improvement", label: "Continuous Improvement", icon: TrendingUp },
  { id: "benchmarking", label: "Performance Benchmarking", icon: Target },
  { id: "integrated-management", label: "Integrated Management", icon: Settings },
  { id: "platform-monitoring", label: "Platform Monitoring", icon: Database },
]

const heroStats = [
  { value: "20-50%", label: "Project Duration Reduction", icon: Clock },
  { value: "15-30%", label: "Direct Cost Savings", icon: DollarSign },
  { value: "99.9%", label: "Platform Uptime SLA", icon: Activity },
  { value: ">50", label: "Target NPS Score", icon: Users },
]

export default function KPIRiskFrameworkPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStats.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-20">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-light text-white mb-6">Introduction to the I5 KPIs & Risk Framework</h2>
                <div className="prose prose-lg text-gray-300 space-y-4">
                  <p>
                    The I5 Real Estate Delivery Model's success hinges on robust{" "}
                    <strong className="text-white">performance monitoring and proactive risk management</strong>. This
                    framework provides <strong className="text-white">data-driven decision-making</strong> throughout
                    the project lifecycle, offering <strong className="text-white">early warning signals</strong> for
                    potential issues and quantifiable evidence of improvement over time.
                  </p>
                  <p>
                    A core aspect is the continuous monitoring of{" "}
                    <strong className="text-white">owner-controlled digital platforms</strong> and the management of
                    risks associated with both these platforms and{" "}
                    <strong className="text-white">partner-used construction technologies</strong>. This approach
                    ensures resilience against challenges and demonstrates the value of the I5 approach to stakeholders.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/geometric-office-building.png"
                  alt="Modern data-driven construction monitoring"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Integration with Other I5 Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-white mb-6">Integration with Other I5 Frameworks</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The KPIs & Risk Framework is deeply integrated with other core I5 frameworks, operating as a cohesive
                  system
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Delivery Framework",
                    description:
                      "Project performance is continually monitored using a comprehensive set of Operational, Financial, and Strategic Key Performance Indicators (KPIs) throughout all five sequential phases of the I5 Delivery Framework. Risk management is an embedded and ongoing process across all project phases.",
                    icon: Target,
                    image: "/images/blue-office-building.png",
                  },
                  {
                    title: "Operational Ecosystem",
                    description:
                      "The owner-controlled digital platforms (BoK, VS, DfMA, AEC) are fundamental enablers for collecting and analyzing performance data, providing holistic visibility and supporting continuous improvement. The financial framework explicitly accounts for the owner's investment in these core digital platforms and their associated operational costs.",
                    icon: Network,
                    image: "/images/diamond-pattern-office.png",
                  },
                  {
                    title: "Organizational Framework",
                    description:
                      "The roles and responsibilities defined within the Organizational Framework directly influence how performance is tracked and how risks are mitigated, particularly concerning platform administration and usage. Clear accountability for decisions and deliverables is established, including for technology governance.",
                    icon: Users,
                    image: "/images/spiral-courtyard-building.png",
                  },
                  {
                    title: "Financial Framework",
                    description:
                      "The comprehensive set of KPIs is crucial for financial assessment, and risk management places a particular emphasis on technology-related risks associated with the digital platforms and their financial implications. Contingency planning includes specific technology platform contingency.",
                    icon: DollarSign,
                    image: "/images/flowing-apartment-building.png",
                  },
                  {
                    title: "Procurement & Contracts Framework",
                    description:
                      "Contracts include specific cybersecurity requirements and liability clauses related to the security of data transferred and integrated systems. Contractual risk allocation explicitly addresses technology risks related to owner platforms and partner technologies.",
                    icon: Shield,
                    image: "/images/luxury-modern-mansion.png",
                  },
                ].map((framework, index) => (
                  <motion.div
                    key={framework.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-transparent border border-slate-600 rounded-lg p-6 h-full hover:border-slate-500 transition-colors">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                        <Image
                          src={framework.image || "/placeholder.svg"}
                          alt={framework.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <framework.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{framework.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{framework.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      case "kpis":
        return (
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">Key Performance Indicators</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                The I5 framework transforms the design and build process from a series of one-off tasks to an
                industrialized, repeatable system, altering how cycle times are monitored and performance is measured.
              </p>
            </motion.div>

            {/* Cycle Time & Schedule Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Clock className="h-8 w-8 text-gray-400 mr-4" />
                    Cycle Time & Schedule Performance
                  </h3>
                  <div className="space-y-6">
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Traditional Context vs. Productization Impact
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-red-500 pl-4">
                          <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                          <div className="text-sm text-gray-300">
                            Cycle time typically gauges how quickly each project stage progresses sequentially.
                          </div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <div className="font-medium text-green-400 mb-2">Productization Impact</div>
                          <div className="text-sm text-gray-300">
                            Under I5, design (owner platforms), manufacturing (partner facilities, coordinated via
                            platforms), and site preparation happen in parallel, compressing total duration. Shorter
                            design iterations, facilitated by the BoK platform, and off-site fabrication further reduce
                            project timelines.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/modular-wooden-house.png"
                    alt="Efficient modular construction timeline"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Implementation Approach */}
              <div className="border border-slate-600 rounded-lg p-8 mb-12">
                <h4 className="text-xl font-semibold text-white mb-6">Implementation Approach</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Establish baseline measurements",
                    "Define standard milestones for each I5 phase with expected durations",
                    "Implement a project management system (the owner's AEC platform) to track actual versus planned timelines",
                    "Analyze critical path activities, focusing on handoffs between phases and platforms",
                    "Review cycle time performance regularly with the integrated team",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Metrics Table */}
              <div className="border border-slate-600 rounded-lg overflow-hidden">
                <div className="bg-slate-800 px-6 py-4">
                  <h4 className="text-lg font-semibold text-white">Detailed Performance Metrics</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Description</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Target</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Frequency</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Platform Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600">
                      {[
                        {
                          metric: "Total Project Duration",
                          description: "Calendar time from project initiation to handover",
                          target: "20-50% reduction from traditional baseline",
                          frequency: "Project completion",
                          platform: "AEC Platform",
                        },
                        {
                          metric: "Design Cycle Time",
                          description: "Duration from initial brief to manufacturing-ready documentation",
                          target: "30-40% reduction from traditional design cycles",
                          frequency: "End of Phase 2",
                          platform: "AEC/DfMA Platforms",
                        },
                        {
                          metric: "Manufacturing Lead Time",
                          description: "Time from production order to module completion (partner time)",
                          target: "<10% variation between similar modules",
                          frequency: "Weekly during Phase 4A",
                          platform: "Partner Data feed to AEC",
                        },
                        {
                          metric: "Site Assembly Rate",
                          description: "Installation pace for manufactured components",
                          target: "40-60% faster than traditional methods",
                          frequency: "Daily during Phase 4B",
                          platform: "AEC Platform",
                        },
                        {
                          metric: "Critical Path Reduction",
                          description: "Compression of longest sequence of dependent activities",
                          target: "25-35% reduction from traditional methods",
                          frequency: "Monthly",
                          platform: "AEC Platform",
                        },
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="hover:bg-slate-700/50"
                        >
                          <td className="px-6 py-4 font-medium text-white">{row.metric}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row.description}</td>
                          <td className="px-6 py-4 text-sm font-medium text-green-400">{row.target}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{row.frequency}</td>
                          <td className="px-6 py-4 text-sm text-blue-400">{row.platform}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Resource Utilization & Productivity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/waterfront-luxury-villa.png"
                    alt="Resource optimization in construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Activity className="h-8 w-8 text-gray-400 mr-4" />
                    Resource Utilization & Productivity
                  </h3>
                  <div className="space-y-6">
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Traditional Context vs. Productization Impact
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-red-500 pl-4">
                          <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                          <div className="text-sm text-gray-300">
                            Focuses on site labor productivity, material yield, and equipment usage, often impacted by
                            site variability.
                          </div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <div className="font-medium text-green-400 mb-2">Productization Impact</div>
                          <div className="text-sm text-gray-300">
                            The factory environment significantly boosts labor productivity. Synchronized planning,
                            often facilitated by owner platforms, is essential to keep both factory and site teams
                            productive. Standardized components minimize material waste.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quality Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <CheckCircle className="h-8 w-8 text-gray-400 mr-4" />
                    Quality Performance
                  </h3>
                  <div className="space-y-6">
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Traditional Context vs. Productization Impact
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-red-500 pl-4">
                          <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                          <div className="text-sm text-gray-300">
                            Defects are typically tracked on-site, often leading to inconsistent quality.
                          </div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <div className="font-medium text-green-400 mb-2">Productization Impact</div>
                          <div className="text-sm text-gray-300">
                            Pre-tested modules significantly reduce on-site issues. Standard components, managed via the
                            BoK platform, result in lower error rates. Factory feedback mechanisms allow for real-time
                            correction. Quality is consistently managed via owner platforms (AEC/Quality).
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/lattice-structure-tower.png"
                    alt="Quality control in modular construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Financial Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/curved-townhouse-row.png"
                    alt="Financial performance optimization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <DollarSign className="h-8 w-8 text-gray-400 mr-4" />
                    Financial Performance
                  </h3>
                  <p className="text-gray-300 mb-6">
                    The I5 framework alters how margins, returns, and cost predictability behave, factoring in owner
                    platform investments and operational costs.
                  </p>

                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Key Financial Metrics</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        { metric: "Gross Margin", target: "3-5% improvement over traditional methods" },
                        { metric: "Direct Cost Savings", target: "15-30% reduction from traditional baseline" },
                        { metric: "Platform TCO Variance", target: "Within +/- 10% of budget" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-slate-600 last:border-b-0"
                        >
                          <span className="text-white font-medium">{item.metric}</span>
                          <span className="text-green-400 text-sm">{item.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Investment Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <TrendingUp className="h-8 w-8 text-gray-400 mr-4" />
                    Investment Performance
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Traditional Context vs. Productization Impact
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                        <div className="text-sm text-gray-300">
                          ROI is typically tied to project duration; delays significantly impact payback periods.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">Productization Impact</div>
                        <div className="text-sm text-gray-300">
                          While there are higher upfront costs (for platforms and standardization), these are offset by
                          faster builds and quicker revenue recognition, which boosts the Internal Rate of Return (IRR).
                          The marginal cost decreases with reuse, thereby increasing program ROI. Greater predictability
                          improves financing terms. Crucially, ROI calculations must explicitly consider owner platform
                          investments.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/luxury-modern-mansion.png"
                    alt="Investment performance optimization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              <div className="border border-slate-600 rounded-lg overflow-hidden mb-8">
                <div className="bg-slate-800 px-6 py-4">
                  <h4 className="text-lg font-semibold text-white">Investment Performance Metrics</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Description</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Target</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Frequency</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Platform Source</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600">
                      {[
                        {
                          metric: "Project IRR",
                          description: "Internal rate of return for individual projects",
                          target: "2-5% improvement over traditional methods",
                          frequency: "Project completion",
                          platform: "Financial System / AEC",
                        },
                        {
                          metric: "Program ROI",
                          description: "Return across multiple projects using same product platform",
                          target: "15-25% improvement through scale economies",
                          frequency: "Annual",
                          platform: "Financial System / Portfolio",
                        },
                        {
                          metric: "Platform ROI",
                          description:
                            "Return specifically attributed to owner platform investment (long-term, portfolio level)",
                          target: "Positive ROI within defined payback period (e.g., 3-5 years)",
                          frequency: "Annual",
                          platform: "IT Financials / Benefit Tracking",
                        },
                        {
                          metric: "Payback Period",
                          description: "Time to recover total investment",
                          target: "20-30% reduction from traditional timeline",
                          frequency: "Project completion",
                          platform: "Financial System / AEC",
                        },
                        {
                          metric: "Time-to-Revenue",
                          description: "Period from investment start to revenue commencement",
                          target: "30-50% reduction through faster delivery",
                          frequency: "Project completion",
                          platform: "AEC / Sales / VS Platform",
                        },
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="hover:bg-slate-700/50"
                        >
                          <td className="px-6 py-4 font-medium text-white">{row.metric}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row.description}</td>
                          <td className="px-6 py-4 text-sm font-medium text-green-400">{row.target}</td>
                          <td className="px-6 py-4 text-sm text-gray-400">{row.frequency}</td>
                          <td className="px-6 py-4 text-sm text-blue-400">{row.platform}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Market Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/blue-modular-housing.png"
                    alt="Market performance tracking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <BarChart3 className="h-8 w-8 text-gray-400 mr-4" />
                    Market Performance
                  </h3>
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Key Market Metrics</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          metric: "Market Segment Share",
                          target: "Annual growth of 3-5 percentage points",
                          frequency: "Quarterly",
                          platform: "CRM / Market Data",
                        },
                        {
                          metric: "Project Volume Growth",
                          target: "20%+ annual growth",
                          frequency: "Quarterly",
                          platform: "AEC / Portfolio System",
                        },
                        {
                          metric: "Conversion Rate",
                          target: ">40% conversion of qualified prospects",
                          frequency: "Monthly",
                          platform: "CRM / Sales Platform",
                        },
                        {
                          metric: "Repeat Client Rate",
                          target: ">80% retention for multi-project clients",
                          frequency: "Annual",
                          platform: "CRM / AEC",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-slate-600 last:border-b-0"
                        >
                          <span className="text-white font-medium">{item.metric}</span>
                          <span className="text-green-400 text-sm">{item.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Client Satisfaction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Users className="h-8 w-8 text-gray-400 mr-4" />
                    Client Satisfaction
                  </h3>
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Client Satisfaction Metrics</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          metric: "Net Promoter Score",
                          target: ">50 (excellent range)",
                          frequency: "Project completion",
                          platform: "Survey Tool / CRM / VS",
                        },
                        {
                          metric: "Overall Satisfaction",
                          target: ">8.5 on 10-point scale",
                          frequency: "Project completion & post-occupancy",
                          platform: "Survey Tool / CRM / VS",
                        },
                        {
                          metric: "Key Dimension Ratings",
                          target: ">90% satisfied or very satisfied",
                          frequency: "Project milestones & completion",
                          platform: "Survey Tool / CRM / VS / AEC",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-slate-600 last:border-b-0"
                        >
                          <span className="text-white font-medium">{item.metric}</span>
                          <span className="text-green-400 text-sm">{item.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/brutalist-concrete-complex.png"
                    alt="Client satisfaction measurement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Innovation & Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/mountain-retreat-house.png"
                    alt="Innovation and learning metrics"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Lightbulb className="h-8 w-8 text-gray-400 mr-4" />
                    Innovation & Learning
                  </h3>
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Innovation Performance Metrics</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          metric: "Innovation Rate",
                          target: "10+ significant innovations annually",
                          frequency: "Quarterly",
                          platform: "BoK / Improvement Tracking",
                        },
                        {
                          metric: "Implementation Rate",
                          target: ">70% implementation rate",
                          frequency: "Semi-annual",
                          platform: "AEC / Improvement Tracking",
                        },
                        {
                          metric: "Innovation Value",
                          target: ">5% performance improvement from innovation",
                          frequency: "Annual",
                          platform: "AEC / Financial / Performance Data",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-slate-600 last:border-b-0"
                        >
                          <span className="text-white font-medium">{item.metric}</span>
                          <span className="text-green-400 text-sm">{item.target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sustainability Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Leaf className="h-8 w-8 text-gray-400 mr-4" />
                    Sustainability Performance
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Implementation Approach</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Establish a baseline for environmental performance",
                        "Implement measurement systems for key indicators, leveraging platform data",
                        "Track performance against defined targets and benchmarks",
                        "Analyze the sustainability impact of implemented improvements",
                        "Report performance using standardized frameworks",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/geometric-office-building.png"
                    alt="Sustainability performance tracking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Supply Chain Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/blue-geometric-facade.png"
                    alt="Supply chain performance optimization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Network className="h-8 w-8 text-gray-400 mr-4" />
                    Supply Chain Performance
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Implementation Strategy</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Map the entire supply chain",
                        "Establish performance metrics for suppliers and logistics providers",
                        "Implement tracking systems that provide real-time visibility, integrated with owner platforms",
                        "Create strategic buffer strategies",
                        "Develop comprehensive contingency plans for potential disruptions",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case "risk-management":
        return (
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">Risk Management Processes & Contingency Plans</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                Adopting a productized model introduces new risk factors alongside traditional ones. I5 employs a
                holistic risk management approach with systematic risk cataloging and clear ownership.
              </p>
            </motion.div>

            {/* Risk Identification */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-8">Risk Identification</h3>
                  <p className="text-gray-300 mb-6">
                    Adopting a productized model introduces new risk factors alongside traditional ones. I5 employs a
                    holistic risk management approach.
                  </p>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Traditional Context vs. Productization Emphasis
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                        <div className="text-sm text-gray-300">
                          Focus is often on site hazards, cost inflation, and market softness, potentially overlooking
                          risks such as supplier bankruptcy or data breaches.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">Productization Emphasis</div>
                        <div className="text-sm text-gray-300">
                          I5 systematically catalogs risks, assigning clear owners. There's a critical evaluation of
                          off-site vendor stability and capacity. There is an explicit identification of risks related
                          to owner platform failure/security and partner technology non-compliance/failure.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/pod-window-facade.png"
                    alt="Risk management in construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Risk Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Strategic Risks",
                    description: "Threats to business objectives and market position",
                    examples: ["Competitor product introduction", "Market shift", "Regulatory change"],
                    monitoring: "Market analysis, competitor monitoring, regulatory tracking",
                  },
                  {
                    title: "Financial Risks",
                    description: "Threats to financial performance and investment returns",
                    examples: ["Cost escalation", "Funding constraints", "Currency fluctuation"],
                    monitoring: "Financial variance analysis, market indicators, funding status",
                  },
                  {
                    title: "Technical/Technology Risks",
                    description: "Threats related to design, engineering, platforms, and integration",
                    examples: ["Platform failures", "Integration issues", "Cybersecurity breach"],
                    monitoring: "Design reviews, platform monitoring, security audits",
                  },
                  {
                    title: "Supply Chain Risks",
                    description: "Threats to material, component, module availability",
                    examples: ["Supplier failure", "Material shortage", "Transport disruption"],
                    monitoring: "Supplier metrics, market monitoring, logistics tracking",
                  },
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg p-6"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">{category.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-medium text-gray-400 mb-1">Examples:</div>
                        <ul className="text-xs text-gray-300 space-y-1">
                          {category.examples.map((example, i) => (
                            <li key={i}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-400 mb-1">Monitoring:</div>
                        <p className="text-xs text-gray-300">{category.monitoring}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Scenario Planning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/angular-modular-building.png"
                    alt="Scenario planning for construction projects"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6">Scenario Planning</h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Traditional Context vs. Productization Emphasis
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                        <div className="text-sm text-gray-300">
                          Basic sensitivity analysis is common; broad scenario testing is less so.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">Productization Emphasis</div>
                        <div className="text-sm text-gray-300">
                          I5 proactively contemplates various scenarios, including downturns, price spikes, factory
                          disruptions, design changes, platform failures, and major cyber incidents. Modeling quantifies
                          the impacts of these scenarios on ROI, cash flow, and schedule.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contractual Safeguards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <h3 className="text-3xl font-light text-white mb-6">Contractual Safeguards & Risk Allocation</h3>
              <p className="text-gray-300 mb-8 max-w-4xl">
                Traditional contracts often focus on risk transfer. The I5 Model favors more balanced approaches where
                risks are appropriately allocated, and financial outcomes are shared to encourage collective
                optimization.
              </p>

              <div className="border border-slate-600 rounded-lg overflow-hidden">
                <div className="bg-slate-800 px-6 py-4">
                  <h4 className="text-lg font-semibold text-white">Risk Allocation Framework</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Risk Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Traditional Allocation</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                          I5 Framework Allocation
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Contractual Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600">
                      {[
                        {
                          type: "Design Risk",
                          traditional: "Owner (DBB) / Contractor (DB)",
                          i5: "Shared across team (defined zones)",
                          mechanism: "Multi-party agreement with design responsibility matrix (referencing BoK/AEC).",
                        },
                        {
                          type: "Cost Risk",
                          traditional: "Fixed (Contractor) / Cost-Plus (Owner)",
                          i5: "Shared (pain/gain around target cost)",
                          mechanism: "Target cost contract with shared savings/overrun formula.",
                        },
                        {
                          type: "Schedule Risk",
                          traditional: "Contractor (LDs)",
                          i5: "Shared (milestone incentives)",
                          mechanism: "Milestone-based incentives (tracked via AEC) with shared responsibility.",
                        },
                        {
                          type: "Technology Risk",
                          traditional: "Often unaddressed or implicitly Contractor",
                          i5: "Owner (for core platforms); Partner (for their tech, per owner reqs); Shared (for integration failures)",
                          mechanism:
                            "Clauses defining platform SLAs, access terms, security reqs, partner tech standards, liability for integration failures, cybersecurity incident response.",
                        },
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="hover:bg-slate-700/50"
                        >
                          <td className="px-6 py-4 font-medium text-white">{row.type}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row.traditional}</td>
                          <td className="px-6 py-4 text-sm text-green-400">{row.i5}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row.mechanism}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Cybersecurity & Digital Risk Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6">Cybersecurity & Digital Risk Management</h3>
                  <p className="text-gray-300 mb-6">
                    I5's reliance on owner-controlled digital platforms and integrated partner systems significantly
                    increases digital risk exposure. Data integrity is crucial for automated manufacturing processes.
                  </p>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Risk Areas</h4>
                    <div className="space-y-4">
                      {[
                        {
                          area: "Data Security",
                          vulnerabilities: "IP theft, design data compromise, client info exposure",
                          protection:
                            "Owner: Access controls, encryption, data classification; Partner: Meet owner's security standards",
                          contingency: "Isolated backup systems, security incident response plan",
                        },
                        {
                          area: "System Availability",
                          vulnerabilities: "Platform outages, network failures, performance degradation",
                          protection: "Owner: Redundant systems, cloud backup, performance monitoring",
                          contingency: "Manual workaround procedures, alternate production methods",
                        },
                        {
                          area: "Integration Integrity",
                          vulnerabilities: "Data corruption during transfer, synchronization failures",
                          protection: "Owner: Data validation routines, change control processes",
                          contingency: "Reconciliation procedures, rollback capabilities",
                        },
                        {
                          area: "Manufacturing Systems",
                          vulnerabilities: "Production equipment hacking, automated system manipulation",
                          protection:
                            "Partner responsibility per owner requirements: Isolated networks, physical security",
                          contingency: "Manual override capabilities, production verification steps",
                        },
                      ].map((risk, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <div className="font-medium text-blue-400 mb-2">{risk.area}</div>
                          <div className="text-xs text-gray-300 space-y-1">
                            <div>
                              <strong>Vulnerabilities:</strong> {risk.vulnerabilities}
                            </div>
                            <div>
                              <strong>Protection:</strong> {risk.protection}
                            </div>
                            <div>
                              <strong>Contingency:</strong> {risk.contingency}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/diamond-pattern-office.png"
                    alt="Cybersecurity and digital risk management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Contingency Planning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/flowing-apartment-building.png"
                    alt="Contingency planning framework"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6">Contingency Planning</h3>
                  <p className="text-gray-300 mb-6">
                    Comprehensive contingency planning addresses design development uncertainties, manufacturing process
                    variations, assembly challenges, and technology-related risks. This includes a dedicated Technology
                    Platform Contingency to cover owner platform failures, integration issues, security incidents, or
                    unexpected upgrade needs.
                  </p>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Contingency Areas</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Design development uncertainties and iteration requirements",
                        "Manufacturing process variations and quality control",
                        "Assembly challenges and site-specific adaptations",
                        "Technology platform failures and integration issues",
                        "Security incidents and data breach response",
                        "Unexpected platform upgrade and maintenance needs",
                        "Partner technology failures and backup procedures",
                        "Supply chain disruptions and alternative sourcing",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case "continuous-improvement":
        return (
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">Continuous Improvement & Benchmarking Tools</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                The I5 framework transforms construction from a series of one-off projects to a repeatable, improvable
                system. This shift enables systematic learning and optimization across projects, with owner-controlled
                platforms serving as the foundation for data collection and analysis.
              </p>
            </motion.div>

            {/* Learning Loops */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Brain className="h-8 w-8 text-gray-400 mr-4" />
                    Learning Loops & Feedback Mechanisms
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Traditional Context vs. Productization Impact
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                        <div className="text-sm text-gray-300">
                          Learning is often project-specific and not systematically captured or transferred to future
                          projects.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">Productization Impact</div>
                        <div className="text-sm text-gray-300">
                          I5 creates systematic learning loops where insights from each project are captured in the BoK
                          platform and applied to improve future projects. The standardized approach enables meaningful
                          comparison and optimization across projects.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/stacked-geometric-volumes.png"
                    alt="Continuous improvement in construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Learning Loop Types */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Design Learning Loop",
                    description:
                      "Continuous refinement of product designs based on manufacturing and assembly feedback",
                    frequency: "After each project phase",
                    platform: "BoK + DfMA Platforms",
                    metrics: [
                      "Design iteration cycles",
                      "Manufacturing feedback integration",
                      "Assembly efficiency improvements",
                    ],
                    image: "/images/blue-modular-housing.png",
                  },
                  {
                    title: "Manufacturing Learning Loop",
                    description: "Optimization of production processes and quality control based on partner feedback",
                    frequency: "Weekly during production",
                    platform: "Partner Data Feeds + AEC",
                    metrics: ["Production efficiency gains", "Quality improvement rates", "Waste reduction"],
                    image: "/images/brutalist-concrete-complex.png",
                  },
                  {
                    title: "Assembly Learning Loop",
                    description: "Refinement of site assembly processes and sequencing",
                    frequency: "Daily during assembly",
                    platform: "AEC Platform",
                    metrics: ["Assembly time reduction", "Error rate decrease", "Safety improvements"],
                    image: "/images/mountain-retreat-house.png",
                  },
                ].map((loop, index) => (
                  <motion.div
                    key={loop.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image src={loop.image || "/placeholder.svg"} alt={loop.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{loop.title}</h4>
                      <p className="text-gray-300 text-sm mb-4">{loop.description}</p>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong className="text-white">Frequency:</strong>{" "}
                          <span className="text-gray-300">{loop.frequency}</span>
                        </div>
                        <div>
                          <strong className="text-white">Platform:</strong>{" "}
                          <span className="text-blue-400">{loop.platform}</span>
                        </div>
                        <div>
                          <strong className="text-white">Key Metrics:</strong>
                        </div>
                        <ul className="list-disc list-inside text-xs text-gray-300 ml-2">
                          {loop.metrics.map((metric, i) => (
                            <li key={i}>{metric}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Performance Tracking & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                <BarChart3 className="h-8 w-8 text-gray-400 mr-4" />
                Performance Tracking & Analytics
              </h3>
              <p className="text-gray-300 mb-8 max-w-4xl">
                The I5 framework enables sophisticated performance analytics through integrated data collection across
                all project phases and platforms.
              </p>

              <div className="border border-slate-600 rounded-lg overflow-hidden">
                <div className="bg-slate-800 px-6 py-4">
                  <h4 className="text-lg font-semibold text-white">Performance Analytics Framework</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Analytics Category</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Key Metrics</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Data Sources</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Analysis Frequency</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Improvement Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600">
                      {[
                        {
                          category: "Design Performance",
                          metrics:
                            "Design cycle time, Change orders, Manufacturability score, Assembly complexity index",
                          sources: "BoK Platform, DfMA Platform, AEC Platform",
                          frequency: "End of each design phase",
                          actions: "Design standard updates, Process refinements, Training programs",
                        },
                        {
                          category: "Manufacturing Performance",
                          metrics: "Production rate, Quality metrics, Material utilization, Equipment efficiency",
                          sources: "Partner Data Feeds, AEC Platform, SCM Platform",
                          frequency: "Weekly during production",
                          actions: "Process optimization, Equipment upgrades, Partner development",
                        },
                        {
                          category: "Assembly Performance",
                          metrics: "Installation rate, Rework percentage, Safety incidents, Schedule adherence",
                          sources: "AEC Platform, Site Reporting Systems",
                          frequency: "Daily during assembly",
                          actions: "Sequence optimization, Training enhancement, Safety improvements",
                        },
                        {
                          category: "Platform Performance",
                          metrics: "System uptime, User adoption, Data quality, Integration success",
                          sources: "Platform Monitoring, User Analytics, IT Systems",
                          frequency: "Continuous/Weekly reporting",
                          actions: "System optimization, User training, Integration improvements",
                        },
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}
                          viewport={{ once: true }}
                          className="hover:bg-slate-700/50"
                        >
                          <td className="px-6 py-4 font-medium text-white">{row.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row.metrics}</td>
                          <td className="px-6 py-4 text-sm text-blue-400">{row.sources}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row.frequency}</td>
                          <td className="px-6 py-4 text-sm text-green-400">{row.actions}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Innovation Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/organic-pod-development.png"
                    alt="Innovation in construction management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Lightbulb className="h-8 w-8 text-gray-400 mr-4" />
                    Innovation Management
                  </h3>
                  <div className="space-y-6">
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Innovation Framework</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-yellow-500 pl-4">
                          <div className="font-medium text-yellow-400 mb-2">Systematic Innovation</div>
                          <div className="text-sm text-gray-300">
                            I5 creates a structured approach to innovation, capturing ideas from all stakeholders and
                            evaluating them systematically through the BoK platform.
                          </div>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <div className="font-medium text-blue-400 mb-2">Technology Integration</div>
                          <div className="text-sm text-gray-300">
                            New technologies are evaluated for integration potential with existing platforms and
                            processes, ensuring compatibility and value addition.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Design Innovation",
                    description: "New design approaches, materials, and configurations",
                    examples: ["Modular design improvements", "New material applications", "Assembly optimization"],
                    icon: Target,
                    image: "/images/curved-balcony-building.png",
                  },
                  {
                    title: "Process Innovation",
                    description: "Manufacturing and assembly process improvements",
                    examples: ["Automation integration", "Quality control enhancement", "Workflow optimization"],
                    icon: Settings,
                    image: "/images/white-modular-building.png",
                  },
                  {
                    title: "Technology Innovation",
                    description: "Platform and system enhancements",
                    examples: ["AI/ML integration", "IoT sensor deployment", "Data analytics advancement"],
                    icon: Database,
                    image: "/images/minimalist-concrete-townhouses.png",
                  },
                  {
                    title: "Sustainability Innovation",
                    description: "Environmental and social impact improvements",
                    examples: ["Carbon footprint reduction", "Waste minimization", "Energy efficiency"],
                    icon: Leaf,
                    image: "/images/geometric-glass-boxes.png",
                  },
                ].map((innovation, index) => (
                  <motion.div
                    key={innovation.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-32">
                      <Image
                        src={innovation.image || "/placeholder.svg"}
                        alt={innovation.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <innovation.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{innovation.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{innovation.description}</p>
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-gray-400">Examples:</div>
                        <ul className="list-disc list-inside text-xs text-gray-300">
                          {innovation.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Internal vs. External Benchmarking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Target className="h-8 w-8 text-gray-400 mr-4" />
                    Internal vs. External Benchmarking
                  </h3>
                  <p className="text-gray-300 mb-6">
                    I5 performance is continuously compared against external benchmarks using data aggregated in owner
                    platforms to ensure competitiveness.
                  </p>
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Benchmark Categories</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          category: "Schedule Performance",
                          standards: "RIBA timelines, FIDIC program expectations, industry productivity rates",
                          approach: "Comparable project timeline analysis, phase duration comparison",
                          platform: "AEC tracks actual timelines against benchmarks",
                        },
                        {
                          category: "Cost Efficiency",
                          standards: "Industry cost models, published cost benchmarks, RICS standards",
                          approach: "Cost per sq meter analysis, trade cost comparisons, lifecycle cost assessment",
                          platform: "AEC/Financial system integration monitors costs against benchmarks",
                        },
                        {
                          category: "Quality Performance",
                          standards: "ISO standards, building certification requirements, industry defect rates",
                          approach: "Quality metrics comparison, defect rate analysis, post-occupancy performance",
                          platform: "BoK maintains quality standards; AEC/Quality platforms track performance",
                        },
                        {
                          category: "Sustainability Metrics",
                          standards:
                            "Green building certifications, carbon reporting standards, industry best practices",
                          approach:
                            "Environmental impact comparison, certification achievement rates, resource metrics",
                          platform:
                            "DfMA incorporates sustainability benchmarks; AEC/Operational platforms track actuals",
                        },
                      ].map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <div className="font-medium text-blue-400 mb-2">{item.category}</div>
                          <div className="text-xs text-gray-300 space-y-1">
                            <div>
                              <strong>Standards:</strong> {item.standards}
                            </div>
                            <div>
                              <strong>Approach:</strong> {item.approach}
                            </div>
                            <div>
                              <strong>Platform Role:</strong> {item.platform}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/spiral-courtyard-building.png"
                    alt="Internal vs external benchmarking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Data-Driven Decision Making */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/white-modular-building.png"
                    alt="Data-driven decision making"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Brain className="h-8 w-8 text-gray-400 mr-4" />
                    Data-Driven Decision Making
                  </h3>
                  <p className="text-gray-300 mb-6">
                    I5 integrates real-time data analytics from owner platforms into project management, enabling
                    evidence-based decisions and proactive governance.
                  </p>
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Decision Areas</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          area: "Design Optimization",
                          data: "Design progress metrics, clash detection, configuration statistics",
                          tools: "Design validation dashboards, configuration analytics, performance simulations",
                          platform: "BoK/DfMA provide design analytics",
                        },
                        {
                          area: "Production Management",
                          data: "Manufacturing throughput, quality metrics, resource utilization",
                          tools: "Production dashboards, capacity forecasting, constraint analysis",
                          platform: "DfMA/AEC tracks production metrics; identifies bottlenecks",
                        },
                        {
                          area: "Assembly Coordination",
                          data: "Installation rates, quality verification, logistics performance",
                          tools: "Assembly progress visualizations, resource forecasting, schedule impact",
                          platform: "AEC monitors assembly performance; coordinates with manufacturing data",
                        },
                        {
                          area: "Financial Performance",
                          data: "Actual vs. budget, cash flow, forecast to complete",
                          tools: "Financial dashboards, variance analysis, projection modeling",
                          platform: "Cross-platform integration provides financial data",
                        },
                      ].map((item, index) => (
                        <div key={index} className="border-l-4 border-green-500 pl-4">
                          <div className="font-medium text-green-400 mb-2">{item.area}</div>
                          <div className="text-xs text-gray-300 space-y-1">
                            <div>
                              <strong>Key Data:</strong> {item.data}
                            </div>
                            <div>
                              <strong>Tools:</strong> {item.tools}
                            </div>
                            <div>
                              <strong>Platform Role:</strong> {item.platform}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lean & Six Sigma Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Settings className="h-8 w-8 text-gray-400 mr-4" />
                    Lean & Six Sigma Integration
                  </h3>
                  <p className="text-gray-300 mb-6">
                    I5 infuses Lean and Six Sigma principles into operations to drive optimization and waste reduction,
                    applied to processes managed within or interfacing with owner platforms.
                  </p>
                  <div className="border border-slate-600 rounded-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h4 className="text-lg font-semibold text-white">Improvement Areas</h4>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        {
                          area: "Design Process",
                          lean: "Value stream mapping, waste elimination, pull planning",
                          sixSigma: "Design for Six Sigma (DFSS), variation reduction, mistake-proofing",
                          platform: "BoK maintains improvement methods; DfMA/AEC implements design standards",
                        },
                        {
                          area: "Manufacturing Operations",
                          lean: "5S, visual management, standardized work",
                          sixSigma: "Statistical process control, capability analysis, design of experiments",
                          platform: "DfMA/AEC tracks process data; supports improvement implementation",
                        },
                        {
                          area: "Site Assembly",
                          lean: "JIT delivery, kanban systems, continuous flow",
                          sixSigma: "Defect prevention, variation reduction, root cause analysis",
                          platform: "AEC monitors assembly metrics; supports improvement implementation",
                        },
                        {
                          area: "Supply Chain",
                          lean: "Value stream mapping, inventory optimization, supplier integration",
                          sixSigma: "Supplier quality management, process capability analysis, error-proofing",
                          platform: "SCM/AEC manages supply chain data; supports improvement initiatives",
                        },
                      ].map((item, index) => (
                        <div key={index} className="border-l-4 border-purple-500 pl-4">
                          <div className="font-medium text-purple-400 mb-2">{item.area}</div>
                          <div className="text-xs text-gray-300 space-y-1">
                            <div>
                              <strong>Lean Methods:</strong> {item.lean}
                            </div>
                            <div>
                              <strong>Six Sigma Methods:</strong> {item.sixSigma}
                            </div>
                            <div>
                              <strong>Platform Role:</strong> {item.platform}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/curved-balcony-building.png"
                    alt="Lean and Six Sigma integration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )

      case "benchmarking":
        return (
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">Performance Benchmarking Standards</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                The I5 framework establishes comprehensive benchmarking standards that enable meaningful performance
                comparison across projects, phases, and industry standards. These benchmarks serve as both targets and
                measurement tools for continuous improvement.
              </p>
            </motion.div>

            {/* Benchmarking Framework */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Target className="h-8 w-8 text-gray-400 mr-4" />
                    Benchmarking Framework Overview
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Traditional vs. I5 Approach</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Context</div>
                        <div className="text-sm text-gray-300">
                          Benchmarking is often limited to basic cost and schedule comparisons, with limited
                          standardization making meaningful comparison difficult.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">I5 Approach</div>
                        <div className="text-sm text-gray-300">
                          Comprehensive benchmarking across multiple dimensions with standardized metrics, enabling
                          precise performance tracking and improvement identification through platform-enabled data
                          collection.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/turquoise-modular-complex.png"
                    alt="Performance benchmarking in construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Benchmarking Levels */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { level: "Internal", description: "Project-to-project within organization", icon: "🏢" },
                  { level: "Industry", description: "Comparison with industry standards", icon: "🏗️" },
                  { level: "Best-in-Class", description: "Comparison with leading performers", icon: "🏆" },
                  { level: "Theoretical", description: "Comparison with theoretical optimums", icon: "🎯" },
                ].map((level, index) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg p-6 text-center"
                  >
                    <div className="text-3xl mb-3">{level.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{level.level}</h4>
                    <p className="text-gray-300 text-sm">{level.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Performance Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <h3 className="text-3xl font-light text-white mb-6">Performance Categories & Standards</h3>

              {/* Time Performance Benchmarks */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-gray-400 mr-3" />
                  Time Performance Benchmarks
                </h4>
                <div className="border border-slate-600 rounded-lg overflow-hidden">
                  <div className="bg-slate-800 px-6 py-4">
                    <h5 className="text-lg font-semibold text-white">Schedule Performance Standards</h5>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-700">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Traditional Baseline</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">I5 Target</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Best-in-Class</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Measurement Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-600">
                        {[
                          {
                            metric: "Total Project Duration",
                            traditional: "24-36 months",
                            i5Target: "12-18 months (30-50% reduction)",
                            bestInClass: "10-14 months",
                            method: "Calendar days from initiation to handover (AEC Platform)",
                          },
                          {
                            metric: "Design Phase Duration",
                            traditional: "6-12 months",
                            i5Target: "3-6 months (40-50% reduction)",
                            bestInClass: "2-4 months",
                            method: "Design start to manufacturing-ready docs (BoK/DfMA)",
                          },
                          {
                            metric: "Manufacturing Lead Time",
                            traditional: "8-16 weeks",
                            i5Target: "4-8 weeks (50% reduction)",
                            bestInClass: "3-6 weeks",
                            method: "Production order to module completion (Partner feeds)",
                          },
                          {
                            metric: "Site Assembly Rate",
                            traditional: "100-200 sq ft/day",
                            i5Target: "300-500 sq ft/day (150-250% improvement)",
                            bestInClass: "400-600 sq ft/day",
                            method: "Daily installation tracking (AEC Platform)",
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="hover:bg-slate-700/50"
                          >
                            <td className="px-6 py-4 font-medium text-white">{row.metric}</td>
                            <td className="px-6 py-4 text-sm text-red-400">{row.traditional}</td>
                            <td className="px-6 py-4 text-sm font-medium text-green-400">{row.i5Target}</td>
                            <td className="px-6 py-4 text-sm text-blue-400">{row.bestInClass}</td>
                            <td className="px-6 py-4 text-sm text-gray-300">{row.method}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Cost Performance Benchmarks */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <DollarSign className="h-6 w-6 text-gray-400 mr-3" />
                  Cost Performance Benchmarks
                </h4>
                <div className="border border-slate-600 rounded-lg overflow-hidden">
                  <div className="bg-slate-800 px-6 py-4">
                    <h5 className="text-lg font-semibold text-white">Financial Performance Standards</h5>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-700">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Traditional Baseline</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">I5 Target</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-white">Best-in-Class</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-600">
                        {[
                          {
                            metric: "Construction Cost per Sq Ft",
                            traditional: "$150-300/sq ft",
                            i5Target: "$120-240/sq ft (15-25% reduction)",
                            bestInClass: "$100-200/sq ft",
                          },
                          {
                            metric: "Material Waste Percentage",
                            traditional: "10-20%",
                            i5Target: "3-8% (60-75% reduction)",
                            bestInClass: "2-5%",
                          },
                          {
                            metric: "Labor Productivity Index",
                            traditional: "Baseline = 100",
                            i5Target: "125-150 (25-50% improvement)",
                            bestInClass: "140-170",
                          },
                        ].map((row, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="hover:bg-slate-700/50"
                          >
                            <td className="px-6 py-4 font-medium text-white">{row.metric}</td>
                            <td className="px-6 py-4 text-sm text-red-400">{row.traditional}</td>
                            <td className="px-6 py-4 text-sm font-medium text-green-400">{row.i5Target}</td>
                            <td className="px-6 py-4 text-sm text-blue-400">{row.bestInClass}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benchmarking Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/modular-pod-housing.png"
                    alt="Benchmarking implementation strategy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6">Benchmarking Implementation Strategy</h3>
                  <div className="space-y-6">
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Data Collection Strategy</h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Automated data capture through platform integration",
                          "Standardized measurement protocols across all projects",
                          "Real-time performance monitoring and alerts",
                          "External benchmarking data acquisition",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Analysis & Reporting</h4>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Automated benchmark comparison reports",
                          "Performance trend analysis and forecasting",
                          "Gap analysis and improvement recommendations",
                          "Executive dashboards and stakeholder reporting",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case "integrated-management":
        return (
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">Integrated Performance Management</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                The I5 framework requires sophisticated integration of performance management across all project phases,
                stakeholders, and platforms. This integrated approach ensures alignment, visibility, and coordinated
                optimization of the entire delivery system.
              </p>
            </motion.div>

            {/* Integration Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Network className="h-8 w-8 text-gray-400 mr-4" />
                    Integration Architecture
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Traditional vs. Integrated Approach</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Approach</div>
                        <div className="text-sm text-gray-300">
                          Siloed performance management with limited integration between phases, stakeholders, and
                          systems, leading to optimization conflicts and suboptimal overall performance.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">I5 Integrated Approach</div>
                        <div className="text-sm text-gray-300">
                          Holistic performance management with real-time integration across all platforms, stakeholders,
                          and project phases, enabling system-wide optimization and coordinated decision-making.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/luxury-apartment-blue-facade.png"
                    alt="Integrated performance management"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Platform Integration Map */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    platform: "BoK Platform",
                    role: "Knowledge Repository",
                    integrations: ["DfMA Platform", "AEC Platform", "Quality Systems"],
                    dataFlows: ["Design standards", "Lessons learned", "Best practices"],
                    image: "/images/curved-apartment-building.png",
                  },
                  {
                    platform: "VS Platform",
                    role: "Value Engineering",
                    integrations: ["Financial Systems", "AEC Platform", "SCM Platform"],
                    dataFlows: ["Cost models", "Value analysis", "Trade-off decisions"],
                    image: "/images/blue-facade.png",
                  },
                  {
                    platform: "DfMA Platform",
                    role: "Design Optimization",
                    integrations: ["BoK Platform", "Manufacturing Systems", "AEC Platform"],
                    dataFlows: ["Design specifications", "Manufacturing constraints", "Assembly sequences"],
                    image: "/images/concrete-housing.png",
                  },
                  {
                    platform: "AEC Platform",
                    role: "Project Coordination",
                    integrations: ["All Platforms", "Partner Systems", "Financial Systems"],
                    dataFlows: ["Project status", "Performance metrics", "Coordination data"],
                    image: "/images/origami-facade.png",
                  },
                ].map((platform, index) => (
                  <motion.div
                    key={platform.platform}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-32">
                      <Image
                        src={platform.image || "/placeholder.svg"}
                        alt={platform.platform}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{platform.platform}</h4>
                      <p className="text-sm text-gray-300 mb-3">{platform.role}</p>
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs font-medium text-gray-400 mb-1">Key Integrations:</div>
                          <div className="flex flex-wrap gap-1">
                            {platform.integrations.map((integration, i) => (
                              <Badge key={i} variant="outline" className="text-xs border-slate-500 text-gray-300">
                                {integration}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-400 mb-1">Data Flows:</div>
                          <ul className="list-disc list-inside text-xs text-gray-300">
                            {platform.dataFlows.map((flow, i) => (
                              <li key={i}>{flow}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stakeholder Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/glass-office.png"
                    alt="Stakeholder integration model"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Users className="h-8 w-8 text-gray-400 mr-4" />
                    Stakeholder Integration Model
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Effective integrated performance management requires coordinated engagement across all stakeholders
                    with aligned objectives and shared accountability.
                  </p>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Integration Success Factors</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        { factor: "Clear Governance", description: "Defined roles and decision rights" },
                        { factor: "Shared Incentives", description: "Aligned performance rewards" },
                        { factor: "Open Communication", description: "Transparent information sharing" },
                        { factor: "Joint Problem-Solving", description: "Collaborative issue resolution" },
                        { factor: "Continuous Learning", description: "Shared improvement initiatives" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">
                            <strong className="text-white">{item.factor}:</strong> {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case "platform-monitoring":
        return (
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light text-white mb-6">Platform-Enabled Monitoring & Control</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                The I5 framework's success depends on robust, real-time monitoring and control capabilities enabled by
                the integrated platform ecosystem. This comprehensive monitoring approach ensures optimal performance,
                early issue detection, and proactive optimization across all project phases.
              </p>
            </motion.div>

            {/* Platform Monitoring Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <Database className="h-8 w-8 text-gray-400 mr-4" />
                    Platform Monitoring Architecture
                  </h3>
                  <div className="border border-slate-600 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Traditional vs. Platform-Enabled Monitoring
                    </h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <div className="font-medium text-red-400 mb-2">Traditional Monitoring</div>
                        <div className="text-sm text-gray-300">
                          Reactive, manual reporting with limited real-time visibility, often resulting in delayed issue
                          detection and response.
                        </div>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <div className="font-medium text-green-400 mb-2">Platform-Enabled Monitoring</div>
                        <div className="text-sm text-gray-300">
                          Proactive, automated monitoring with real-time visibility, predictive analytics, and automated
                          response capabilities across all project phases and stakeholders.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/triangular-facade.png"
                    alt="Platform monitoring architecture"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>

              {/* Real-time Monitoring Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    component: "Executive Summary",
                    description: "High-level project health and performance indicators",
                    metrics: [
                      "Overall project status",
                      "Key milestone progress",
                      "Critical issues",
                      "Performance trends",
                    ],
                    updateFrequency: "Real-time",
                    image: "/images/modern-villa.png",
                  },
                  {
                    component: "Platform Health",
                    description: "System performance and availability monitoring",
                    metrics: ["System uptime", "Response times", "Error rates", "User activity"],
                    updateFrequency: "Every minute",
                    image: "/images/curved-apartment.png",
                  },
                  {
                    component: "Project Progress",
                    description: "Detailed progress tracking across all phases",
                    metrics: ["Phase completion", "Milestone status", "Schedule variance", "Resource utilization"],
                    updateFrequency: "Hourly",
                    image: "/images/modular-building.png",
                  },
                  {
                    component: "Quality Metrics",
                    description: "Quality performance and compliance monitoring",
                    metrics: ["Defect rates", "Quality scores", "Compliance status", "Inspection results"],
                    updateFrequency: "Daily",
                    image: "/images/glass-office.png",
                  },
                  {
                    component: "Financial Performance",
                    description: "Cost tracking and financial health indicators",
                    metrics: ["Budget variance", "Cost trends", "ROI tracking", "Cash flow"],
                    updateFrequency: "Daily",
                    image: "/images/blue-facade.png",
                  },
                  {
                    component: "Risk & Issues",
                    description: "Risk monitoring and issue tracking",
                    metrics: ["Risk levels", "Issue status", "Mitigation progress", "Escalations"],
                    updateFrequency: "Real-time",
                    image: "/images/concrete-housing.png",
                  },
                ].map((component, index) => (
                  <motion.div
                    key={component.component}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-32">
                      <Image
                        src={component.image || "/placeholder.svg"}
                        alt={component.component}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{component.component}</h4>
                      <p className="text-gray-300 text-sm mb-3">{component.description}</p>
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-gray-400">Key Metrics:</div>
                        <ul className="list-disc list-inside text-xs text-gray-300">
                          {component.metrics.map((metric, i) => (
                            <li key={i}>{metric}</li>
                          ))}
                        </ul>
                        <div className="mt-3 pt-3 border-t border-slate-600">
                          <Badge variant="outline" className="text-xs border-slate-500 text-gray-300">
                            Updates: {component.updateFrequency}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Predictive Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/origami-facade.png"
                    alt="Predictive analytics and early warning systems"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                    <AlertTriangle className="h-8 w-8 text-gray-400 mr-4" />
                    Predictive Analytics & Early Warning Systems
                  </h3>
                  <div className="space-y-6">
                    <div className="border border-slate-600 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Predictive Capabilities</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <div className="font-medium text-blue-400 mb-2">Schedule Prediction</div>
                          <div className="text-sm text-gray-300">
                            ML models analyze progress patterns to predict potential delays and recommend corrective
                            actions.
                          </div>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <div className="font-medium text-green-400 mb-2">Cost Forecasting</div>
                          <div className="text-sm text-gray-300">
                            Advanced analytics predict cost overruns and identify optimization opportunities.
                          </div>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <div className="font-medium text-purple-400 mb-2">Quality Prediction</div>
                          <div className="text-sm text-gray-300">
                            Quality models identify potential defects before they occur, enabling preventive action.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Automated Control Systems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-slate-600 pt-20"
            >
              <h3 className="text-3xl font-light text-white mb-6 flex items-center">
                <Settings className="h-8 w-8 text-gray-400 mr-4" />
                Automated Control Systems
              </h3>
              <p className="text-gray-300 mb-8 max-w-4xl">
                Advanced automation capabilities enable rapid response to issues and optimization opportunities,
                reducing manual intervention and improving overall system performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    system: "Schedule Optimization",
                    description: "Automatic schedule adjustments based on real-time conditions",
                    capabilities: [
                      "Resource reallocation",
                      "Task rescheduling",
                      "Critical path optimization",
                      "Milestone adjustment",
                    ],
                    triggers: ["Resource conflicts", "Weather delays", "Productivity changes", "Scope modifications"],
                    image: "/images/luxury-apartment-blue-facade.png",
                  },
                  {
                    system: "Quality Control",
                    description: "Automated quality monitoring and corrective actions",
                    capabilities: [
                      "Defect detection",
                      "Process adjustment",
                      "Inspection scheduling",
                      "Corrective action initiation",
                    ],
                    triggers: ["Quality thresholds", "Process variations", "Inspection results", "Customer feedback"],
                    image: "/images/curved-apartment-building.png",
                  },
                  {
                    system: "Cost Management",
                    description: "Automated cost tracking and optimization",
                    capabilities: [
                      "Budget monitoring",
                      "Cost forecasting",
                      "Variance analysis",
                      "Optimization recommendations",
                    ],
                    triggers: ["Budget thresholds", "Cost trends", "Market changes", "Scope variations"],
                    image: "/images/modular-pod-housing.png",
                  },
                  {
                    system: "Resource Management",
                    description: "Dynamic resource allocation and optimization",
                    capabilities: ["Capacity planning", "Resource allocation", "Skill matching", "Workload balancing"],
                    triggers: ["Capacity constraints", "Skill gaps", "Workload imbalances", "Priority changes"],
                    image: "/images/turquoise-modular-complex.png",
                  },
                  {
                    system: "Risk Management",
                    description: "Automated risk monitoring and mitigation",
                    capabilities: [
                      "Risk assessment",
                      "Mitigation activation",
                      "Contingency planning",
                      "Escalation management",
                    ],
                    triggers: ["Risk thresholds", "Trend analysis", "External events", "Performance indicators"],
                    image: "/images/geometric-glass-boxes.png",
                  },
                  {
                    system: "Platform Management",
                    description: "Automated platform monitoring and maintenance",
                    capabilities: [
                      "Performance monitoring",
                      "Auto-scaling",
                      "Maintenance scheduling",
                      "Issue resolution",
                    ],
                    triggers: ["Performance thresholds", "Usage patterns", "System health", "Maintenance schedules"],
                    image: "/images/minimalist-concrete-townhouses.png",
                  },
                ].map((system, index) => (
                  <motion.div
                    key={system.system}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="border border-slate-600 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-32">
                      <Image
                        src={system.image || "/placeholder.svg"}
                        alt={system.system}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{system.system}</h4>
                      <p className="text-gray-300 text-sm mb-3">{system.description}</p>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs font-medium text-gray-400 mb-1">Capabilities:</div>
                          <ul className="list-disc list-inside text-xs text-gray-300">
                            {system.capabilities.map((capability, i) => (
                              <li key={i}>{capability}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-400 mb-1">Triggers:</div>
                          <div className="flex flex-wrap gap-1">
                            {system.triggers.map((trigger, i) => (
                              <Badge key={i} variant="outline" className="text-xs border-slate-500 text-gray-300">
                                {trigger}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      default:
        return <div>Content not found</div>
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1e35] to-[#1a2b4a] text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(/images/geometric-office-building.png)`,
            y: heroY,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 backdrop-blur-sm text-gray-300 mb-8"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance & Risk Management
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight text-white">
              KPIs & Risk Management Framework
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
              Data-driven performance monitoring and proactive risk management for the{" "}
              <span className="text-white font-medium">I5 Real Estate Delivery Model</span>
            </p>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-600 pt-8"
            >
              <AnimatePresence mode="wait">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={`${stat.value}-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: index === currentSlide ? 1 : 0.7,
                      scale: index === currentSlide ? 1.1 : 1,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <stat.icon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Playback Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center items-center space-x-4 mt-8"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentSlide(0)}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-[#0a1628] border-b border-slate-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between lg:space-x-8 lg:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 lg:space-x-2 py-4 px-1 border-b-2 font-medium text-[9.5px] lg:text-[13px] whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                <tab.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
