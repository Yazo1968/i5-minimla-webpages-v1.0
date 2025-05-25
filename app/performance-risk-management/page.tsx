"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, DollarSign, Target, Shield, RefreshCw, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function PerformanceRiskManagementPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isAnimating, setIsAnimating] = useState(false)

  const sections = [
    { id: "overview", name: "OVERVIEW" },
    { id: "kpi-framework", name: "KPI FRAMEWORK" },
    { id: "operational-kpis-1", name: "OPERATIONAL KPIS 1" },
    { id: "operational-kpis-2", name: "OPERATIONAL KPIS 2" },
    { id: "financial-kpis-1", name: "FINANCIAL KPIS 1" },
    { id: "financial-kpis-2", name: "FINANCIAL KPIS 2" },
    { id: "strategic-kpis-1", name: "STRATEGIC KPIS 1" },
    { id: "strategic-kpis-2", name: "STRATEGIC KPIS 2" },
    { id: "risk-management-1", name: "RISK MGMT 1" },
    { id: "risk-management-2", name: "RISK MGMT 2" },
    { id: "risk-management-3", name: "RISK MGMT 3" },
    { id: "continuous-improvement-1", name: "IMPROVEMENT 1" },
    { id: "continuous-improvement-2", name: "IMPROVEMENT 2" },
    { id: "performance-governance", name: "GOVERNANCE" },
    { id: "conclusion", name: "CONCLUSION" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsAnimating(true)
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <motion.div
      className="min-h-screen bg-white"
      style={{ overflowY: isAnimating ? "hidden" : "auto" }}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {/* Secondary Navigation Header */}
      <header className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-2 md:px-4 lg:px-6">
          <div className="flex items-center justify-between h-12">
            <div className="text-sm font-mono font-bold tracking-tight">PERFORMANCE & RISK MANAGEMENT</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "text-[10px] font-medium transition-all duration-300 hover:text-black relative px-1",
                    activeSection === section.id ? "text-black" : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {sections.slice(0, 8).map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className={`text-[10px] font-mono px-1 py-1 h-6 ${
                    activeSection === section.id ? "bg-gray-100 text-black" : "text-gray-500"
                  }`}
                >
                  {section.name.split(" ")[0]}
                </Button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Select value={activeSection} onValueChange={scrollToSection}>
                <SelectTrigger className="w-32 h-6 text-[10px] font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section.id} value={section.id} className="text-[10px] font-mono">
                      {section.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="pt-28">
        {/* Overview Section */}
        <section id="overview" className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-4"
            >
              <h1 className="text-xl md:text-2xl font-mono font-bold mb-2 tracking-tight">
                PERFORMANCE & RISK MANAGEMENT
              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-mono max-w-4xl mx-auto leading-relaxed mb-4">
                Ensuring I5 Success Through Data-Driven Oversight and Proactive Mitigation
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-3 mb-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-3">
                    <motion.div variants={iconVariants}>
                      <BarChart3 className="h-5 w-5 mb-2 text-gray-700" />
                    </motion.div>
                    <h3 className="text-[10px] font-mono font-semibold mb-1">PERFORMANCE MONITORING</h3>
                    <p className="text-[10px] text-gray-600 font-mono">
                      Multi-dimensional KPI framework for comprehensive oversight
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-3">
                    <motion.div variants={iconVariants}>
                      <Shield className="h-5 w-5 mb-2 text-gray-700" />
                    </motion.div>
                    <h3 className="text-[10px] font-mono font-semibold mb-1">RISK MANAGEMENT</h3>
                    <p className="text-[10px] text-gray-600 font-mono">
                      Proactive identification and mitigation of project risks
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-3">
                    <motion.div variants={iconVariants}>
                      <RefreshCw className="h-5 w-5 mb-2 text-gray-700" />
                    </motion.div>
                    <h3 className="text-[10px] font-mono font-semibold mb-1">CONTINUOUS IMPROVEMENT</h3>
                    <p className="text-[10px] text-gray-600 font-mono">
                      Systematic learning and evolution through data insights
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="p-3 bg-gray-50 border border-gray-200 rounded-lg"
            >
              <p className="text-[10px] md:text-xs font-mono text-gray-700 leading-relaxed">
                The I5 Real Estate Delivery Model transcends traditional project execution by embedding a sophisticated,
                ongoing system for <strong>Performance Monitoring and Risk Management</strong>. This is not a separate,
                reactive function but an integral, proactive discipline woven into the fabric of I5 operations. The
                Owner's integrated technology ecosystem – particularly the data aggregation and analytics capabilities
                of platforms like <strong>AEC, DfMA, SCM, Quality, Financials, VS/CRM, IT Monitoring</strong>, and the
                governance orchestration of the <strong>BoK Platform</strong> – is the critical enabler of this
                comprehensive oversight and agile response framework.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* KPI Framework Section */}
        <section
          id="kpi-framework"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">I5 MULTI-DIMENSIONAL KPI FRAMEWORK</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                The pulse of I5 performance through comprehensive operational, financial, and strategic metrics
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <motion.div variants={iconVariants}>
                      <Activity className="h-6 w-6 mb-3 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xs font-mono font-semibold mb-3 text-blue-700">OPERATIONAL KPIs</h3>
                    <div className="space-y-2">
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-blue-50 rounded border border-blue-200">
                          <div className="text-[10px] font-mono font-semibold">Cycle Time Reduction</div>
                          <div className="text-[10px] text-gray-600">Target: 20-50% reduction</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              AEC/DfMA/BoK Platforms
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-blue-50 rounded border border-blue-200">
                          <div className="text-[10px] font-mono font-semibold">Resource Productivity</div>
                          <div className="text-[10px] text-gray-600">Target: 30-50% uplift</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              Partner MES → AEC/DfMA
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-blue-50 rounded border border-blue-200">
                          <div className="text-[10px] font-mono font-semibold">First-Time Quality</div>
                          <div className="text-[10px] text-gray-600">Target: &gt;95% FTQ</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              Quality Platform/AEC
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <motion.div variants={iconVariants}>
                      <DollarSign className="h-6 w-6 mb-3 text-green-600" />
                    </motion.div>
                    <h3 className="text-xs font-mono font-semibold mb-3 text-green-700">FINANCIAL KPIs</h3>
                    <div className="space-y-2">
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-green-50 rounded border border-green-200">
                          <div className="text-[10px] font-mono font-semibold">Gross Margin Improvement</div>
                          <div className="text-[10px] text-gray-600">Target: 3-5% improvement</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              Financials/AEC
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-green-50 rounded border border-green-200">
                          <div className="text-[10px] font-mono font-semibold">Direct Cost Reduction</div>
                          <div className="text-[10px] text-gray-600">Target: 15-30%</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              DfMA/Quality data
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-green-50 rounded border border-green-200">
                          <div className="text-[10px] font-mono font-semibold">Cost Variance</div>
                          <div className="text-[10px] text-gray-600">Target: ±3% of budget</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              AEC/Financials
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <motion.div variants={iconVariants}>
                      <Target className="h-6 w-6 mb-3 text-purple-600" />
                    </motion.div>
                    <h3 className="text-xs font-mono font-semibold mb-3 text-purple-700">STRATEGIC KPIs</h3>
                    <div className="space-y-2">
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-purple-50 rounded border border-purple-200">
                          <div className="text-[10px] font-mono font-semibold">Net Promoter Score</div>
                          <div className="text-[10px] text-gray-600">Target: &gt;50 via VS/CRM/Surveys</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              VS/CRM
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-purple-50 rounded border border-purple-200">
                          <div className="text-[10px] font-mono font-semibold">Innovation Rate</div>
                          <div className="text-[10px] text-gray-600">Measured Value Contribution</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              BoK Innovation Module
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <div className="p-2 bg-purple-50 rounded border border-purple-200">
                          <div className="text-[10px] font-mono font-semibold">Energy Efficiency</div>
                          <div className="text-[10px] text-gray-600">Target: 20-40% improvement</div>
                          <motion.div variants={itemVariants}>
                            <Badge variant="outline" className="text-[9px] mt-1">
                              Operational Systems
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Operational KPIs Part 1 */}
        <section
          id="operational-kpis-1"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">OPERATIONAL KPIS - PART 1</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Optimizing the Engine of Delivery - Real-time and trend insights into core efficiency and effectiveness
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">CYCLE TIME REDUCTION</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Target: 20-50% reduction</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Beyond overall project duration, I5 meticulously tracks phase-specific cycle times:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Product Configuration Cycle:</strong> From brief to manufacturable design via
                          AEC/DfMA/BoK Platforms
                        </li>
                        <li>
                          • <strong>Manufacturing Lead Time per Module Batch:</strong> Data fed from Partner MES into
                          AEC/DfMA for analysis against baselines
                        </li>
                        <li>
                          • <strong>Site Assembly Rate:</strong> Units installed per shift, tracked in AEC Platform via
                          field data or partner tech feeds
                        </li>
                      </ul>
                      <p>This granular tracking identifies specific bottlenecks in the end-to-end value stream.</p>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      AEC/DfMA/BoK Platforms
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">RESOURCE UTILIZATION & PRODUCTIVITY</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Target: 30-50% labor productivity uplift</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Comprehensive productivity metrics include:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Factory Labor Productivity:</strong> Hours per module, tracked via Partner MES feeds
                          to AEC/DfMA
                        </li>
                        <li>
                          • <strong>Site Assembly Crew Productivity:</strong> Installation tasks completed per hour,
                          from AEC Field
                        </li>
                        <li>
                          • <strong>Material Yield Efficiency:</strong> Percentage of raw material converted to finished
                          product in factory
                        </li>
                        <li>
                          • <strong>Digital Platform Utilization Rates:</strong> Ensuring Owner's investment in BoK, VS,
                          AEC, DfMA yields active engagement and efficiency gains
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      Partner MES → AEC/DfMA
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Operational KPIs Part 2 */}
        <section
          id="operational-kpis-2"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">OPERATIONAL KPIS - PART 2</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Quality Control and Supply Chain Performance Metrics
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">DEFECT RATES & FIRST-TIME QUALITY (FTQ)</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Target: &gt;95% FTQ, near-zero defects</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>I5 targets near-zero defects with comprehensive quality metrics:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Manufacturing Defects per Million Opportunities (DPMO):</strong> From Partner QC
                          data fed to Owner's Quality Platform/AEC
                        </li>
                        <li>
                          • <strong>First-Time-Right Rate:</strong> For manufactured components and site assembly
                          connections (targeting &gt;95%)
                        </li>
                        <li>
                          • <strong>Post-Occupancy Defect Frequency:</strong> Tracked via CRM/Operational Systems
                        </li>
                      </ul>
                      <p>
                        This rigorous quality tracking, enabled by digital checklists and data feeds, allows for rapid
                        root cause analysis and corrective action.
                      </p>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      Quality Platform/AEC
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">SUPPLY CHAIN PERFORMANCE</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Target: &gt;95% OTIF Delivery</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Comprehensive supply chain metrics focus on:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>On-Time In-Full (OTIF) Delivery:</strong> From all suppliers and manufacturing
                          partners (targeting &gt;95%, tracked via SCM/AEC Platforms integrating logistics partner data)
                        </li>
                        <li>
                          • <strong>Supplier Quality Conformance Rates:</strong> Materials/components meeting specs on
                          arrival
                        </li>
                        <li>
                          • <strong>Inventory Turnover Rates:</strong> For any centrally held standard components,
                          optimizing working capital
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      SCM/AEC Platforms
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Financial KPIs Part 1 */}
        <section
          id="financial-kpis-1"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">FINANCIAL KPIS - PART 1</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Measuring Economic Viability and Enhanced Value - Demonstrating tangible financial advantages of the I5
                Model
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      GROSS MARGIN IMPROVEMENT & DETAILED COST SAVINGS
                    </h3>
                    <div className="text-[10px] text-gray-600 mb-3">
                      Target: 3-5% improvement over traditional, 15-30% direct cost reduction
                    </div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>
                        Tracking gross margin per I5 product line with detailed analysis of cost savings across
                        categories:
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Standardized Design Amortization Benefits:</strong> BoK/AEC design cost per unit
                          over multiple projects
                        </li>
                        <li>
                          • <strong>Reduced Material Waste:</strong> DfMA/Partner data analysis
                        </li>
                        <li>
                          • <strong>Optimized Labor Costs:</strong> AEC/Partner data tracking
                        </li>
                        <li>
                          • <strong>Lower Rework Costs:</strong> Quality/AEC data monitoring
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      Financials/AEC
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      RETURN ON INVESTMENT (ROI) & ENHANCED PAYBACK PERIODS
                    </h3>
                    <div className="text-[10px] text-gray-600 mb-3">
                      Target: 2-5% IRR uplift, 20-30% payback reduction
                    </div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Differentiating between multiple ROI metrics:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Project IRR:</strong> Targeting 2-5% uplift over traditional delivery
                        </li>
                        <li>
                          • <strong>I5 Program ROI:</strong> Across a series of projects leveraging productization
                        </li>
                        <li>
                          • <strong>Owner Technology Platform ROI:</strong> Measuring long-term value from investments
                          in BoK, VS, DfMA, AEC, etc.
                        </li>
                      </ul>
                      <p>
                        Faster delivery cycles (tracked in AEC) directly contribute to quicker revenue recognition and
                        improved payback periods.
                      </p>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      AEC/Financials
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Financial KPIs Part 2 */}
        <section
          id="financial-kpis-2"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">FINANCIAL KPIS - PART 2</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">Cash Flow Optimization and Cost Predictability</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">OPTIMIZED CASH FLOW & WORKING CAPITAL</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Target: 15-25% working capital reduction</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>The I5 Model aims to smooth cash flow profiles despite early manufacturing investments:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Cash Conversion Cycle:</strong> Synchronizing payments with verified off-site
                          progress (data from Partner MES to AEC/Financials)
                        </li>
                        <li>
                          • <strong>Peak Working Capital Requirement:</strong> Targeting 15-25% reduction through
                          optimized payment timing
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      Partner MES → AEC/Financials
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      EXCEPTIONAL COST PREDICTABILITY & VARIANCE CONTROL
                    </h3>
                    <div className="text-[10px] text-gray-600 mb-3">
                      Target: ±3% final cost variance, &lt;2% change orders
                    </div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>
                        Due to standardization (BoK), detailed digital planning (AEC/DfMA), and controlled
                        manufacturing:
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Final Cost Variance:</strong> Within ±3% of budget
                        </li>
                        <li>
                          • <strong>Initial Estimate Accuracy:</strong> Within ±5%
                        </li>
                        <li>
                          • <strong>Change Order Volume:</strong> &lt;2% of total project value, managed and tracked via
                          AEC Platform, with major changes governed by BoK workflows
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      AEC/BoK workflows
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Strategic KPIs Part 1 */}
        <section
          id="strategic-kpis-1"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">STRATEGIC KPIS - PART 1</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Assessing Long-Term Market Impact and Sustainability - Measuring I5's success in achieving broader
                business and societal goals
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">MARKET PENETRATION & CLIENT ADOPTION</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Demonstrating market acceptance and growth</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Key market penetration metrics include:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Market Share Growth:</strong> In target segments
                        </li>
                        <li>
                          • <strong>Project Volume Growth:</strong> For I5 deliveries (tracked via AEC/Portfolio
                          Management tools)
                        </li>
                        <li>
                          • <strong>Client Conversion Rates:</strong> From traditional methods to I5 (tracked in CRM/VS)
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      AEC/Portfolio Management
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">SUPERIOR CLIENT SATISFACTION & LOYALTY</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Target: &gt;50 Net Promoter Score</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Comprehensive client satisfaction measurement:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Net Promoter Score (NPS):</strong> Targeting &gt;50
                        </li>
                        <li>
                          • <strong>Detailed Client Satisfaction Ratings:</strong> Across quality, schedule, cost, and
                          overall experience (data collected via VS/CRM/Survey tools)
                        </li>
                        <li>
                          • <strong>Repeat Client Rate:</strong> Key indicator of long-term success
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      VS/CRM/Survey tools
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Strategic KPIs Part 2 */}
        <section
          id="strategic-kpis-2"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">STRATEGIC KPIS - PART 2</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">Innovation and Sustainability Performance Metrics</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">INNOVATION VELOCITY & IMPACT</h3>
                    <div className="text-[10px] text-gray-600 mb-3">Measured value contribution from innovations</div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Innovation tracking includes:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Innovation Rate:</strong> Number of new BoK standards, improved DfMA processes, new
                          platform features enhancing efficiency
                        </li>
                        <li>
                          • <strong>Implementation Rate:</strong> Of these innovations
                        </li>
                        <li>
                          • <strong>Measured Value Contribution:</strong> E.g., % cost reduction from a new BoK standard
                        </li>
                      </ul>
                      <p>Often managed via an Innovation Module within BoK or integrated idea management tools.</p>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      BoK Innovation Module
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">ENHANCED SUSTAINABILITY PERFORMANCE</h3>
                    <div className="text-[10px] text-gray-600 mb-3">
                      Target: 20-40% energy improvement, &gt;90% waste diversion
                    </div>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>Comprehensive sustainability metrics:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Embodied Carbon Reduction:</strong> kg CO₂e/m², data from DfMA/AEC/BoK using
                          material databases
                        </li>
                        <li>
                          • <strong>Construction Waste Diversion Rate:</strong> Targeting &gt;90%, data from AEC/Site
                          Reports
                        </li>
                        <li>
                          • <strong>Operational Energy & Water Efficiency:</strong> Projected/actual compared to
                          baselines (targeting 20-40% energy improvement, data from DfMA/AEC simulations and later
                          Operational Systems)
                        </li>
                      </ul>
                    </div>
                    <Badge variant="outline" className="text-[9px] mt-2">
                      DfMA/AEC/BoK/Operational Systems
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Risk Management Part 1 */}
        <section
          id="risk-management-1"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">DYNAMIC RISK MANAGEMENT - PART 1</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                A Proactive and Integrated Approach - Leveraging technology ecosystem for comprehensive risk oversight
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      SYSTEMATIC RISK IDENTIFICATION & ASSESSMENT
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>Comprehensive risk identification process includes:</p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Structured risk workshops</strong> at key I5 phase transitions, involving
                          cross-functional teams and key partners
                        </li>
                        <li>
                          • <strong>Dynamic, centralized Risk Register</strong> (managed within AEC Platform or
                          dedicated BoK module) as a living document
                        </li>
                        <li>
                          • <strong>Comprehensive risk categorization:</strong> Strategic, Financial, Operational,
                          Technical/Technology, Supply Chain, Interface, and External
                        </li>
                      </ul>
                      <p>
                        Risks are assessed for probability and potential impact using standardized matrices, with data
                        from AEC, DfMA, SCM, and Financial Systems informing the assessment.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {[
                        "Strategic",
                        "Financial",
                        "Operational",
                        "Technical",
                        "Supply Chain",
                        "Interface",
                        "External",
                      ].map((risk, index) => (
                        <div key={index} className="p-1 bg-gray-50 rounded border text-center">
                          <div className="text-[9px] font-mono font-semibold">{risk}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      ADVANCED SCENARIO PLANNING & FINANCIAL STRESS TESTING
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        Moving beyond basic sensitivity analysis, I5 employs scenario planning to model high-impact,
                        low-probability events:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Manufacturing Partner Insolvency</div>
                            <div className="text-gray-600">Supply chain disruption modeling</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Regulatory Approval Delays</div>
                            <div className="text-gray-600">Timeline and cost impact analysis</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Major Cyberattack</div>
                            <div className="text-gray-600">Owner's technology ecosystem protection</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Critical Partner Data Feed Failure</div>
                            <div className="text-gray-600">Extended period disruption modeling</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Risk Management Part 2 */}
        <section
          id="risk-management-2"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">DYNAMIC RISK MANAGEMENT - PART 2</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Technology Risk Focus and Contractual Risk Mitigation
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border-2 border-gray-800 bg-gray-900 text-white cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3 text-white">TECHNOLOGY RISK FOCUS</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[10px] font-mono font-semibold mb-2 text-gray-300">OWNER PLATFORM RISKS</h4>
                        <ul className="space-y-1 text-[10px] font-mono text-gray-400">
                          <li>▸ Performance degradation/downtime</li>
                          <li>▸ Security breaches (BoK, VS, AEC)</li>
                          <li>▸ Data integrity issues</li>
                          <li>▸ Integration failures</li>
                          <li>▸ Scalability limitations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono font-semibold mb-2 text-gray-300">
                          PARTNER TECHNOLOGY RISKS
                        </h4>
                        <ul className="space-y-1 text-[10px] font-mono text-gray-400">
                          <li>▸ Non-compliance with Owner requirements</li>
                          <li>▸ Partner MES/site tech failures</li>
                          <li>▸ Data feed reliability issues</li>
                          <li>▸ Cybersecurity vulnerabilities</li>
                          <li>▸ Integration disruptions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      CONTRACTUAL RISK MITIGATION & SHARED ACCOUNTABILITY
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        Contracts are strategically structured to allocate risks to the party best able to manage them,
                        including performance bonds and guarantees for critical suppliers and manufacturers.
                      </p>
                      <p>
                        <strong>For technology, contracts explicitly define:</strong>
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>SLAs</strong> for Owner-provided platform access and performance for partners
                        </li>
                        <li>
                          • <strong>Partner obligations</strong> regarding security, reliability, and data quality of
                          their systems that integrate with Owner's ecosystem
                        </li>
                        <li>
                          • <strong>Liability and remediation processes</strong> for failures in integrations or data
                          feeds
                        </li>
                        <li>
                          • <strong>Requirements for partners</strong> to adhere to Owner's cybersecurity protocols for
                          all connected systems
                        </li>
                      </ul>
                      <p>
                        Shared risk/reward mechanisms incentivize collaborative problem-solving when risks materialize.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Risk Management Part 3 */}
        <section
          id="risk-management-3"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">DYNAMIC RISK MANAGEMENT - PART 3</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Cybersecurity and Digital Risk Management Framework
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      ROBUST CYBERSECURITY & DIGITAL RISK MANAGEMENT FRAMEWORK
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        Paramount, ongoing activity due to I5's deep digital integration, involving continuous
                        enforcement of Security Architecture Design.
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>IT Monitoring and SIEM tools</strong> for real-time threat detection, vulnerability
                          scanning, and security event correlation
                        </li>
                        <li>
                          • <strong>Stringent access controls</strong> (IAM, MFA, RBAC via Owner platforms) for all
                          users (internal and partner)
                        </li>
                        <li>
                          • <strong>Regular security audits</strong>, penetration testing of external interfaces, and
                          ongoing awareness training
                        </li>
                        <li>
                          • <strong>Well-documented Cybersecurity Incident Response Plan</strong> including coordinated
                          actions with Partner IT teams
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Continuous Improvement Part 1 */}
        <section
          id="continuous-improvement-1"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">CONTINUOUS IMPROVEMENT - PART 1</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Learning and Evolving - Driven by systematic feedback mechanisms and rigorous benchmarking
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      SYSTEMATIC FEEDBACK LOOPS FROM PROJECTS TO PRODUCT ITERATIONS
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        Post-project reviews are structured, multi-stakeholder events including partners, designed to
                        capture detailed lessons learned:
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Design effectiveness</strong> (DfMA insights)
                        </li>
                        <li>
                          • <strong>Manufacturing efficiency</strong> (partner feedback)
                        </li>
                        <li>
                          • <strong>Assembly challenges</strong> (site team input via AEC)
                        </li>
                        <li>
                          • <strong>Quality outcomes</strong> (Quality platform data)
                        </li>
                        <li>
                          • <strong>Client satisfaction</strong> (VS/CRM feedback)
                        </li>
                      </ul>
                      <p>
                        This feedback, along with quantitative performance data from the I5 ecosystem, is formally
                        documented and managed within the BoK Platform's knowledge repository.
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-3">
                      <div className="flex items-center space-x-2 overflow-x-auto">
                        {[
                          "Post-Project Reviews",
                          "Feedback Documentation",
                          "Improvement Proposals",
                          "Validation & Implementation",
                          "Impact Measurement",
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-16 h-16 rounded-lg border-2 border-gray-400 flex items-center justify-center bg-gray-100 flex-shrink-0">
                              <span className="text-[9px] font-mono text-center px-1">{step}</span>
                            </div>
                            {index < 4 && <span className="text-sm text-gray-400 mx-1">→</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Continuous Improvement Part 2 */}
        <section
          id="continuous-improvement-2"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">CONTINUOUS IMPROVEMENT - PART 2</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">Benchmarking and Data-Driven Decision Making</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border border-gray-300 cursor-pointer">
                    <CardContent className="p-4">
                      <h3 className="text-xs font-mono font-semibold mb-3">INTERNAL BENCHMARKING</h3>
                      <div className="space-y-2 text-[10px] font-mono text-gray-700">
                        <p>
                          Leveraging standardized data captured across Owner's platforms (AEC, DfMA, Financials,
                          Quality, etc.), performance of different I5 projects, product lines, teams, and specific
                          configured BoK workflows are compared to identify:
                        </p>
                        <div className="space-y-1">
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Project vs Project Performance</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Product Line Comparisons</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Team Efficiency Metrics</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">BoK Workflow Optimization</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">Platform Utilization Rates</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border border-gray-300 cursor-pointer">
                    <CardContent className="p-4">
                      <h3 className="text-xs font-mono font-semibold mb-3">EXTERNAL BENCHMARKING</h3>
                      <div className="space-y-2 text-[10px] font-mono text-gray-700">
                        <p>
                          I5 performance metrics (cycle time, cost per m², defect rates) are systematically compared
                          against relevant industry benchmarks and competitor performance. This includes benchmarking
                          the TCO and performance of Owner's technology platforms against IT industry standards:
                        </p>
                        <div className="space-y-1">
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">RIBA Stage Comparisons</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">FIDIC Project Outcomes</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">CII Data Benchmarks</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">ISO Standards Alignment</div>
                          </div>
                          <div className="p-2 bg-gray-50 rounded border">
                            <div className="font-semibold">IT Platform TCO Standards</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      DATA-DRIVEN DECISION-MAKING & LEAN/SIX SIGMA METHODOLOGIES
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        <strong>Data-Driven Decision-Making:</strong> Real-time and historical performance analytics,
                        generated by IT Monitoring & Analytics tools from integrated data across the I5 ecosystem, are
                        directly fed into management dashboards and reporting systems. This data provides an objective
                        basis for operational decision-making, strategic planning, risk assessment, and prioritization
                        of continuous improvement initiatives.
                      </p>
                      <p>
                        <strong>Lean and Six Sigma Application:</strong> I5 actively employs Lean principles (Value
                        Stream Mapping, Waste Elimination, Pull Systems, 5S, Last Planner® System implemented via AEC
                        Platform) and Six Sigma methodologies (DMAIC, Statistical Process Control using data from
                        Quality/AEC/DfMA platforms, Design for Six Sigma - DFSS) to systematically identify and
                        eliminate inefficiencies, reduce variability, and enhance quality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Performance Governance Section */}
        <section
          id="performance-governance"
          className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4 bg-gray-50"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">INTEGRATED PERFORMANCE MANAGEMENT</h2>
              <p className="text-xs font-mono text-gray-600 mb-4">
                Ensuring Accountability and Alignment - Cohesive framework for managing overall performance
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      MULTI-LEVEL GOVERNANCE STRUCTURE FOR PERFORMANCE OVERSIGHT
                    </h3>
                    <div className="space-y-2 text-[10px] font-mono text-gray-700">
                      <p>
                        Performance is reviewed at multiple levels with defined meeting cadences, specific KPIs (drawn
                        from integrated platform data), and decision rights for corrective actions, with escalations
                        managed through the BoK Governance Hub:
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                          <div>
                            <div className="font-semibold">Executive Level</div>
                            <div className="text-gray-600">Strategic KPIs, portfolio performance</div>
                          </div>
                          <div className="text-gray-500">Quarterly reviews</div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                          <div>
                            <div className="font-semibold">Program Level</div>
                            <div className="text-gray-600">Product line performance, cross-project learning</div>
                          </div>
                          <div className="text-gray-500">Monthly reviews</div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                          <div>
                            <div className="font-semibold">Project Level</div>
                            <div className="text-gray-600">Specific project deliverables, milestones</div>
                          </div>
                          <div className="text-gray-500">Weekly reviews</div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded border">
                          <div>
                            <div className="font-semibold">Functional Level</div>
                            <div className="text-gray-600">Departmental efficiency, process adherence</div>
                          </div>
                          <div className="text-gray-500">Bi-weekly reviews</div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-900 text-white rounded border border-gray-800">
                          <div>
                            <div className="font-semibold">Technology Governance</div>
                            <div className="text-gray-300">Platform health, security, ROI, partner compliance</div>
                          </div>
                          <div className="text-gray-400">Continuous monitoring</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">PERFORMANCE-DRIVEN INCENTIVE SYSTEMS</h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        Incentive programs for internal teams and potentially key partners are directly linked to the
                        achievement of I5 KPIs. This includes metrics for:
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Schedule adherence</strong> (AEC data)
                        </li>
                        <li>
                          • <strong>Cost control</strong> (Financials/AEC data)
                        </li>
                        <li>
                          • <strong>Quality outcomes</strong> (Quality platform data)
                        </li>
                        <li>
                          • <strong>Client satisfaction</strong> (VS/CRM data)
                        </li>
                        <li>
                          • <strong>Innovation contributions</strong> (BoK data)
                        </li>
                        <li>
                          • <strong>Effective utilization and data quality</strong> within Owner's technology platforms
                        </li>
                      </ul>
                      <p>Team-based incentives are emphasized to reinforce collaborative behaviors.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border border-gray-300 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">
                      GOVERNANCE OF CONTINUOUS IMPROVEMENT INITIATIVES
                    </h3>
                    <div className="space-y-3 text-[10px] font-mono text-gray-700">
                      <p>
                        A formal system, typically managed as a workflow within the BoK Platform, governs the lifecycle
                        of improvement initiatives:
                      </p>
                      <ul className="space-y-1 ml-3">
                        <li>
                          • <strong>Idea submission</strong> (by any stakeholder)
                        </li>
                        <li>
                          • <strong>Evaluation</strong> (cost/benefit, feasibility, strategic alignment using data from
                          across the ecosystem)
                        </li>
                        <li>
                          • <strong>Prioritization</strong> and resource allocation
                        </li>
                        <li>
                          • <strong>Implementation tracking</strong> (potentially in AEC for project-like improvements)
                        </li>
                        <li>
                          • <strong>Impact verification</strong> (using platform data)
                        </li>
                      </ul>
                      <p>
                        This ensures that continuous improvement is a managed, strategic process, not an ad-hoc
                        activity.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion" className="min-h-screen flex items-center justify-center px-2 md:px-4 lg:px-6 py-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto text-center"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-6">I5 PERFORMANCE TARGET SUMMARY</h2>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
                {[
                  { value: "20-50%", label: "Schedule Reduction" },
                  { value: "15-30%", label: "Cost Savings" },
                  { value: ">95%", label: "First-Time Quality" },
                  { value: "±3%", label: "Cost Variance" },
                  { value: ">50", label: "Net Promoter Score" },
                  { value: "20-40%", label: "Energy Efficiency" },
                  { value: ">95%", label: "OTIF Delivery" },
                  { value: "<2%", label: "Change Order Volume" },
                  { value: "10-30%", label: "Carbon Reduction" },
                ].map((metric, index) => (
                  <motion.div variants={cardVariants} whileHover="hover" key={index}>
                    <Card className="border-2 border-gray-800 bg-gray-900 text-white cursor-pointer">
                      <CardContent className="p-2 text-center">
                        <div className="text-sm font-mono font-bold mb-1">{metric.value}</div>
                        <div className="text-[9px] font-mono text-gray-300">{metric.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto mb-6">
                <p className="text-xs font-mono text-gray-700 leading-relaxed">
                  By deeply integrating performance monitoring and risk management into its operational DNA, and by
                  leveraging its Owner-controlled technology ecosystem as the primary source of data and analytical
                  insight, the I5 Model creates a resilient, adaptive, and continuously learning delivery system capable
                  of achieving and sustaining superior outcomes in the complex modern built environment.
                </p>
              </div>

              <motion.div variants={cardVariants} whileHover="hover">
                <Card className="border-2 border-gray-400 bg-gray-100 cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="text-xs font-mono font-semibold mb-3">REFERENCES & TECHNICAL DETAILS</h3>
                    <div className="space-y-2 text-[10px] font-mono text-gray-600">
                      <p>
                        <strong>
                          For detailed frameworks on KPIs, risk registers, and benchmarking methodologies:
                        </strong>
                        <br />
                        Refer to Chapter 11 of the I5 Model Handbook 2025
                      </p>
                      <p>
                        <strong>For technical details on platform integration and monitoring systems:</strong>
                        <br />
                        See I5 Model Technology Principles and Guidelines (Sections 8.7, 10.4, 11, 12.4, 13.1)
                      </p>
                      <p className="text-[9px] italic text-gray-500 mt-3">
                        (Content derived from I5 HB: Chapter 11, with elaboration on Owner-controlled technology
                        ecosystem and BoK Governance Hub, referencing I5 Tech HB)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  )
}
