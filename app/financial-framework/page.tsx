"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, TrendingUp, DollarSign, Shield, Target, BarChart3, Building2, Leaf, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const phaseVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

export default function FinancialFrameworkPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sections = [
    { id: "overview", name: "OVERVIEW" },
    { id: "cost-structure", name: "COST STRUCTURE" },
    { id: "cost-details", name: "COST DETAILS" },
    { id: "investment", name: "INVESTMENT" },
    { id: "investment-roi", name: "INVESTMENT ROI" },
    { id: "value-engineering", name: "VALUE ENGINEERING" },
    { id: "risk-management", name: "RISK MANAGEMENT" },
    { id: "long-term-value", name: "LONG-TERM VALUE" },
  ]

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-lg font-mono font-bold tracking-tight text-black">
              FINANCIAL FRAMEWORK & VALUE OPTIMIZATION
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-full px-2 py-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-300 relative",
                    activeSection === section.id
                      ? "text-black bg-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {section.name}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="font-mono text-xs"
              >
                {sections.find((s) => s.id === activeSection)?.name}
                <ChevronDown className={cn("ml-1 h-3 w-3 transition-transform", isMobileMenuOpen && "rotate-180")} />
              </Button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-2"
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-xs font-mono font-medium transition-colors",
                    activeSection === section.id ? "text-black bg-gray-50" : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {section.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pt-32">
        {/* Overview Section */}
        <section id="overview" className="h-screen px-4 md:px-8 lg:px-12 py-8 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-black">
                Financial Framework & Value Optimization
              </h2>
              <h3 className="text-xl md:text-2xl font-mono font-semibold mb-8 text-gray-700">
                Funding and Maximizing I5 Returns
              </h3>
              <p className="text-base font-mono text-gray-700 mb-8 leading-relaxed">
                The I5 Model's transformative power in real estate delivery is underpinned by an equally innovative{" "}
                <strong>Financial Framework</strong>. This framework moves beyond traditional, often reactive,
                project-based accounting to embrace proactive financial planning, strategic investment in enabling
                technologies, systematic value optimization across the asset lifecycle, and robust risk management
                tailored to productized development.
              </p>

              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                    <CardHeader className="pb-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <TrendingUp className="h-6 w-6 mb-2 text-gray-700" />
                      </motion.div>
                      <CardTitle className="font-mono text-sm">Proactive Planning</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-mono text-xs text-gray-600">
                        Strategic investment in enabling technologies and systematic value optimization
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                    <CardHeader className="pb-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <DollarSign className="h-6 w-6 mb-2 text-gray-700" />
                      </motion.div>
                      <CardTitle className="font-mono text-sm">Value Creation</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-mono text-xs text-gray-600">
                        True value created through sustained performance and portfolio-level efficiencies
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                    <CardHeader className="pb-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <Shield className="h-6 w-6 mb-2 text-gray-700" />
                      </motion.div>
                      <CardTitle className="font-mono text-sm">Risk Management</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-mono text-xs text-gray-600">
                        Robust risk management tailored to productized development methodologies
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Structure Section - Part 1 */}
        <section id="cost-structure" className="h-screen px-4 md:px-8 lg:px-12 py-8 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-black">
                The I5 Cost Structure Paradigm
              </h2>
              <p className="text-sm font-mono text-gray-700 mb-6 leading-relaxed">
                Implementing the I5 Model fundamentally reshapes project cost structures, shifting expenditure profiles
                and introducing new categories of strategic investment.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Traditional Model */}
                <Card className="border-2 border-gray-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-mono text-lg text-center">TRADITIONAL MODEL</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Design & Engineering</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        2-3%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">On-Site Construction</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        65-75%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Technology/Systems</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        1-2%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Contingency</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        5-10%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Material Waste</span>
                      <Badge variant="destructive" className="font-mono text-xs">
                        High
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* I5 Model */}
                <Card className="border-2 border-black bg-gray-100">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-mono text-lg text-center">I5 MODEL</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Strategic Tech Investment</span>
                      <Badge className="font-mono bg-black text-white text-xs">Portfolio Asset</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Front-Loaded Design</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        5-7%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Off-Site Manufacturing</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        25-35%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">On-Site Assembly</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        35-45%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded">
                      <span className="font-mono text-xs font-medium">Reduced Contingency</span>
                      <Badge variant="outline" className="font-mono text-xs">
                        3-5%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Technology Investment Breakdown */}
              <Card className="border-2 border-gray-300 bg-gray-100">
                <CardHeader className="pb-3">
                  <CardTitle className="font-mono text-base text-center">
                    Strategic Technology Investment Components
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white border border-gray-200 rounded p-3 text-center">
                      <div className="font-mono font-semibold text-xs mb-1">Core Platforms</div>
                      <div className="font-mono text-xs text-gray-600">BoK, VS, DfMA, AEC</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 text-center">
                      <div className="font-mono font-semibold text-xs mb-1">Customization</div>
                      <div className="font-mono text-xs text-gray-600">I5 Workflow Integration</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 text-center">
                      <div className="font-mono font-semibold text-xs mb-1">Integration</div>
                      <div className="font-mono text-xs text-gray-600">System Connections</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 text-center">
                      <div className="font-mono font-semibold text-xs mb-1">Maintenance</div>
                      <div className="font-mono text-xs text-gray-600">Lifecycle Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Cost Structure Section - Part 2 */}
        <section id="cost-details" className="h-screen px-4 md:px-8 lg:px-12 py-8 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-mono font-bold mb-4 text-black">Cost Structure Details</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-2">
                    Strategic Technology Investment
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Investment in core digital platforms (BoK, VS, DfMA, AEC, SCM) as foundational enablers. These are
                    strategic corporate assets designed to yield portfolio-wide efficiencies and are typically amortized
                    accordingly.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-2">
                    Intelligent Front-Loading
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Higher proportion of initial investment (5-7% of total project cost) to early phases. Supports
                    intensive design work using Owner's AEC and DfMA Platforms, focusing on standardization and robust
                    digital prototyping.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-2">
                    Optimized Production Costs
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    25-35% of construction expenditure shifts to controlled off-site manufacturing. Enables economies of
                    scale, higher productivity, reduced waste (30-40% less), and consistently higher quality.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-2">Streamlined Assembly</h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    On-site work (35-45% of total cost) transforms into predictable assembly. Reduces reliance on large
                    labor pools, minimizes weather delays, enhances safety through AEC Platform coordination.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-2">
                    Enhanced Predictability
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Standardization, DfMA, and digital planning reduce traditional risks, allowing lower contingency
                    (3-5% vs. 5-10%). Accounts for new technology platform integration risks.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Framework Section - Part 1 */}
        <section id="investment" className="h-screen px-4 md:px-8 lg:px-12 py-8 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-black">Strategic Capital Allocation</h2>
              <p className="text-sm font-mono text-gray-700 mb-6 leading-relaxed">
                The I5 Model's capital requirement profile demands strategic funding aligned with its phased nature and
                upfront investment in standardization and technology.
              </p>

              {/* Investment Phases */}
              <div className="mb-6">
                <h3 className="text-lg font-mono font-semibold mb-4 text-center">Phased Capital Deployment</h3>
                <motion.div
                  className="flex flex-wrap justify-center gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      phase: "1",
                      name: "Product Definition",
                      investment: "Smaller Investment",
                      funding: "Corporate Funded",
                      highlight: false,
                    },
                    {
                      phase: "2",
                      name: "Product Configuration",
                      investment: "Moderate Investment",
                      funding: "Corporate/Initial Project",
                      highlight: false,
                    },
                    {
                      phase: "3",
                      name: "Pre-Production",
                      investment: "Increasing Capital",
                      funding: "Project Finance",
                      highlight: false,
                    },
                    {
                      phase: "4",
                      name: "Production",
                      investment: "Major Capital",
                      funding: "Full Project Finance",
                      highlight: true,
                    },
                    {
                      phase: "5",
                      name: "Commissioning",
                      investment: "Final Investment",
                      funding: "Project Completion",
                      highlight: false,
                    },
                  ].map((item, index) => (
                    <motion.div key={item.phase} variants={phaseVariants} whileHover="hover" custom={index}>
                      <Card
                        className={cn(
                          "w-40 text-center border-2 cursor-pointer",
                          item.highlight ? "bg-black text-white border-black" : "border-gray-300",
                        )}
                      >
                        <CardContent className="p-3">
                          <motion.div
                            className={cn(
                              "text-xl font-mono font-bold mb-1",
                              item.highlight ? "text-white" : "text-black",
                            )}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {item.phase}
                          </motion.div>
                          <div
                            className={cn(
                              "font-mono font-semibold mb-1 text-xs",
                              item.highlight ? "text-white" : "text-black",
                            )}
                          >
                            {item.name}
                          </div>
                          <div
                            className={cn("font-mono text-xs mb-1", item.highlight ? "text-gray-300" : "text-gray-600")}
                          >
                            {item.investment}
                          </div>
                          <div
                            className={cn(
                              "font-mono text-xs italic",
                              item.highlight ? "text-gray-300" : "text-gray-500",
                            )}
                          >
                            {item.funding}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="p-4 bg-white border-l-4 border-black rounded-r">
                <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-2">
                  Phased Capital Deployment & Risk Mitigation
                </h4>
                <p className="font-mono text-xs text-gray-700 leading-relaxed">
                  Capital committed progressively across I5 phases. Initial phases require smaller corporate-funded
                  investments for market research, concept design, standardization efforts, and platform setup.
                  Subsequent phases require larger capital but with greater certainty due to extensive upfront
                  validation through Owner-controlled platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Framework Section - Part 2 */}
        <section id="investment-roi" className="h-screen px-4 md:px-8 lg:px-12 py-8 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-mono font-semibold mb-4 text-center">I5 ROI Framework</h3>
              <motion.div
                className="grid md:grid-cols-3 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-black text-white border-2 border-black cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <BarChart3 className="h-8 w-8 mx-auto mb-2" />
                      </motion.div>
                      <h4 className="font-mono font-semibold mb-2 text-sm">Program-Level ROI</h4>
                      <p className="font-mono text-xs text-gray-300 mb-3">
                        Benefits across multiple projects leveraging standardized products
                      </p>
                      <motion.div
                        className="space-y-1"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • Compounding benefits
                        </motion.div>
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • Learning curves
                        </motion.div>
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • Amortized costs
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-black text-white border-2 border-black cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Target className="h-8 w-8 mx-auto mb-2" />
                      </motion.div>
                      <h4 className="font-mono font-semibold mb-2 text-sm">Technology Platform ROI</h4>
                      <p className="font-mono text-xs text-gray-300 mb-3">
                        Long-term returns from Owner's digital platform investments
                      </p>
                      <motion.div
                        className="space-y-1"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • Operational efficiency
                        </motion.div>
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • Enhanced decisions
                        </motion.div>
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • New capabilities
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="bg-black text-white border-2 border-black cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                      </motion.div>
                      <h4 className="font-mono font-semibold mb-2 text-sm">Value Drivers</h4>
                      <p className="font-mono text-xs text-gray-300 mb-3">
                        Tangible benefits improving IRR and revenue realization
                      </p>
                      <motion.div
                        className="space-y-1"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • 20-50% schedule
                        </motion.div>
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • 10-20% cost savings
                        </motion.div>
                        <motion.div variants={itemVariants} className="font-mono text-xs">
                          • 60-70% quality
                        </motion.div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">Program-Level ROI</h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Realized across multiple projects leveraging standardized products and established Owner technology
                    ecosystem, leading to compounding benefits from learning curves and amortized upfront costs.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">
                    Technology Platform ROI
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Long-term assessment of returns from Owner's strategic investment in core digital platforms.
                    Measured by operational efficiency improvements, enhanced decision quality, and new business
                    capabilities across the entire portfolio.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">Value Drivers</h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    ROI calculations incorporate schedule compression (20-50%), direct cost savings (10-20%), quality
                    improvements (60-70% defect reduction), and enhanced sustainability, leading to improved IRR.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Engineering Section */}
        <section id="value-engineering" className="h-screen px-4 md:px-8 lg:px-12 py-8 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-black text-center">
                Proactive Value Engineering
              </h2>
              <p className="text-sm font-mono text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                Value engineering is a continuous, proactive discipline embedded throughout the product lifecycle,
                driven by data and collaboration within the Owner's digital platforms.
              </p>

              {/* Two Column Layout with Curved Connection */}
              <div className="relative mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Box - Lifecycle Cost Analysis */}
                  <div className="bg-white p-6 rounded-lg border border-gray-300 relative z-10">
                    <h3 className="font-mono text-lg font-semibold mb-3">Lifecycle Cost Analysis</h3>
                    <p className="font-mono text-sm text-gray-700 mb-4 leading-relaxed">
                      Decisions informed by rigorous LCCA, evaluating total cost of ownership —initial capital,
                      operational expenses, maintenance, and replacement costs.
                    </p>
                    <ul className="space-y-2 font-mono text-sm text-gray-600">
                      <li>• Component lifespan data in BoK</li>
                      <li>• Design for maintainability via DfMA</li>
                      <li>• Real-world performance via Digital Twin</li>
                    </ul>
                  </div>

                  {/* Right Box - Target Value Design */}
                  <div className="bg-white p-6 rounded-lg border border-gray-300 relative z-10">
                    <h3 className="font-mono text-lg font-semibold mb-3">Target Value Design (TVD)</h3>
                    <p className="font-mono text-sm text-gray-700 mb-4 leading-relaxed">
                      Market-driven target costs established first, with integrated design team collaboratively
                      developing solutions within these targets.
                    </p>
                    <ul className="space-y-2 font-mono text-sm text-gray-600">
                      <li>• AEC Platform for BIM-based estimating</li>
                      <li>• DfMA Platform for manufacturing analysis</li>
                      <li>• BoK Platform for cost benchmarks</li>
                    </ul>
                  </div>
                </div>

                {/* Curved Connection Line */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
                  <svg width="200" height="100" viewBox="0 0 200 100" className="text-gray-400">
                    <path
                      d="M 20 50 Q 100 20 180 50"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>

              {/* Value Engineering Process Flow */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-mono font-semibold mb-6 text-center">Value Engineering Process Flow</h3>
                <motion.div
                  className="flex flex-wrap justify-center items-center gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Market-Driven Target Cost (TVD)",
                    "Collaborative Design (AEC/DfMA)",
                    "Lifecycle Cost Analysis (LCCA)",
                    "Performance Data (Digital Twin)",
                    "Continuous Improvement (BoK)",
                  ].map((step, index, array) => (
                    <motion.div key={step} className="flex items-center" variants={itemVariants}>
                      <motion.div
                        className="bg-white border border-gray-300 rounded-lg p-3 w-40 h-20 flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs text-center font-medium text-gray-700">{step}</div>
                      </motion.div>
                      {index < array.length - 1 && (
                        <motion.div
                          className="mx-2 text-xl text-gray-500 font-bold"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          →
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Risk Management Section */}
        <section id="risk-management" className="h-screen px-4 md:px-8 lg:px-12 py-8 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-black">Financial Risk Management</h2>
              <p className="text-sm font-mono text-gray-700 mb-6 leading-relaxed">
                Proactive identification, assessment, and mitigation of financial risks, employing Owner's integrated
                platforms for enhanced visibility and control.
              </p>

              <motion.div
                className="grid md:grid-cols-3 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border-2 border-gray-300 cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-mono text-sm">Traditional Risks</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Market & Demand Risks</div>
                        <div className="font-mono text-xs text-gray-600 italic">Monitored via CRM/Market Analytics</div>
                      </motion.div>
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Project Execution Risks</div>
                        <div className="font-mono text-xs text-gray-600 italic">Managed via AEC Platform</div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border-2 border-gray-300 cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-mono text-sm">I5-Specific Risks</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Supply Chain Dependencies</div>
                        <div className="font-mono text-xs text-gray-600 italic">SCM/AEC Platform monitoring</div>
                      </motion.div>
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Technology Performance</div>
                        <div className="font-mono text-xs text-gray-600 italic">
                          Platform uptime, security, integration
                        </div>
                      </motion.div>
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Standardization Adoption</div>
                        <div className="font-mono text-xs text-gray-600 italic">Market acceptance tracking</div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={cardVariants} whileHover="hover">
                  <Card className="border-2 border-gray-300 cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-mono text-sm">Contingency Planning</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Project-Specific: 3-5%</div>
                        <div className="font-mono text-xs text-gray-600 italic">Design, manufacturing, assembly</div>
                      </motion.div>
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Technology Platform Contingency</div>
                        <div className="font-mono text-xs text-gray-600 italic">BoK, integration, cybersecurity</div>
                      </motion.div>
                      <motion.div
                        className="p-2 bg-gray-50 border border-gray-200 rounded"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-mono text-xs font-medium mb-1">Management Reserves</div>
                        <div className="font-mono text-xs text-gray-600 italic">Strategic unforeseen events</div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <div className="space-y-3">
                <div className="p-3 bg-white border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">Holistic Assessment</h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Beyond traditional risks, I5 assesses supply chain dependencies, technology performance &
                    integration risks, and standardization adoption challenges.
                  </p>
                </div>

                <div className="p-3 bg-white border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">
                    Sophisticated Contingency
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Risk-based allocation including project-specific contingencies, dedicated Technology Platform
                    Contingency for core digital infrastructure, and management reserves.
                  </p>
                </div>

                <div className="p-3 bg-white border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">Digital Controls</h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Leveraging integrated platforms (AEC, SCM, Financial Systems, BoK) for robust expenditure controls,
                    budget management, and change management with real-time cost data.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Long-term Value Section */}
        <section id="long-term-value" className="h-screen px-4 md:px-8 lg:px-12 py-8 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-black">Long-Term Value Creation</h2>
              <p className="text-sm font-mono text-gray-700 mb-6 leading-relaxed">
                Financial benefits extend well into operational life of assets and across the entire development
                portfolio.
              </p>

              <motion.div
                className="grid md:grid-cols-3 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="p-4" variants={itemVariants}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Building2 className="h-8 w-8 mb-2 text-gray-700" />
                  </motion.div>
                  <h4 className="font-mono font-semibold mb-2 text-sm">Optimized Asset Performance</h4>
                  <motion.ul
                    className="space-y-1 font-mono text-xs text-gray-600"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Digital Twin monitoring</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Predictive maintenance</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Energy optimization</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Enhanced returns</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div className="p-4" variants={itemVariants}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Leaf className="h-8 w-8 mb-2 text-gray-700" />
                  </motion.div>
                  <h4 className="font-mono font-semibold mb-2 text-sm">Sustainability ROI</h4>
                  <motion.ul
                    className="space-y-1 font-mono text-xs text-gray-600"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Reduced operational costs</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Enhanced asset value</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Carbon credit revenue</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Lower regulatory risk</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>

                <motion.div className="p-4" variants={itemVariants}>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <PieChart className="h-8 w-8 mb-2 text-gray-700" />
                  </motion.div>
                  <h4 className="font-mono font-semibold mb-2 text-sm">Portfolio-Level Advantage</h4>
                  <motion.ul
                    className="space-y-1 font-mono text-xs text-gray-600"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Economies of scale</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Knowledge compounding</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Efficient capital allocation</span>
                    </motion.li>
                    <motion.li variants={itemVariants} className="flex items-start">
                      <span className="mr-1">▸</span>
                      <span>Strategic resource use</span>
                    </motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>

              <div className="space-y-3">
                <div className="p-3 bg-white border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">
                    Asset Performance & Lifecycle Value
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    I5 products designed for operational efficiency. Digital Twin provides platform for real-time
                    monitoring, predictive maintenance, and energy optimization, enhancing long-term financial returns.
                  </p>
                </div>

                <div className="p-3 bg-white border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">Sustainability ROI</h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Financial benefits include reduced operational costs, enhanced asset value, carbon credit revenue,
                    and lower regulatory risk, systematically tracked using DfMA, AEC, and Operational platforms.
                  </p>
                </div>

                <div className="p-3 bg-white border-l-4 border-black rounded-r">
                  <h4 className="font-mono font-semibold text-xs uppercase tracking-wide mb-1">
                    Portfolio Strategic Advantage
                  </h4>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    Economies of scale through amortized costs, knowledge compounding via BoK, and enhanced
                    predictability enabling efficient capital allocation across the portfolio.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <Card className="border-2 border-gray-400 bg-gray-100 mt-4">
                <CardContent className="p-4 text-center">
                  <h3 className="font-mono text-sm font-bold mb-2">Strategic Financial Enabler</h3>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">
                    The I5 Financial Framework provides financial discipline, analytical tools, and forward-looking
                    perspective required to fund transformation, optimize value, manage risks, and ensure superior
                    returns.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="h-screen px-4 md:px-8 lg:px-12 py-8 overflow-hidden">
          <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-gray-200 border-t-4 border-gray-600 text-center">
                <p className="font-mono text-sm text-gray-700 mb-4">
                  <strong>
                    For detailed financial modeling techniques, specific ROI formulas, risk assessment matrices, and
                    value optimization protocols, refer to Chapter 8 of the I5 Model Handbook 2025.
                  </strong>
                </p>
                <p className="font-mono text-sm text-gray-700 mb-4">
                  For technical details on how platform TCO is considered and technology risks are managed, consult
                  relevant sections in the I5 Model Technology Principles and Guidelines.
                </p>
                <p className="font-mono text-xs text-gray-600 italic">
                  (This content is derived from I5 HB: Chapter 8, with amplified connections to the Owner-controlled
                  technology ecosystem's role as detailed in the I5 Tech HB.)
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
