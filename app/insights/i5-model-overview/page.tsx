"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Download,
  ChevronDown,
  ArrowUpRight,
  BarChart3,
  Building2,
  Cog,
  FileText,
  Users,
  Wallet,
  FileCodeIcon as FileContract,
  ShieldCheck,
  RotateCcw,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function I5ModelOverviewPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedSections, setExpandedSections] = useState<number[]>([0])
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeContentTab, setActiveContentTab] = useState(0)

  // Handle scroll events for parallax and animations
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Icons for each section
  const sectionIcons = [
    <BarChart3 className="text-gray-300 w-10 h-10" key="challenges" />,
    <Building2 className="flex-shrink-0 w-10 rounded-full flex items-center justify-center bg-transparent h-10 border-white text-white" key="principles" />,
    <Cog className="text-gray-300 h-10 w-10" key="ecosystem" />,
    <FileText className="text-gray-300 w-10 h-10" key="delivery" />,
    <Users className="text-gray-300 w-10 h-10" key="organization" />,
    <Wallet className="text-gray-300 w-10 h-10" key="financial" />,
    <FileContract className="text-gray-300 w-10 h-10" key="procurement" />,
    <ShieldCheck className="h-5 w-5 text-gray-300" key="performance" />,
  ]

  const sectionBriefs = [
    {
      title: "Sector Challenges",
      content:
        "This section highlights how traditional real estate methods struggle with project overruns, inconsistent quality, and slow delivery due to fragmented processes. It emphasizes the critical need for a comprehensive transformation like the I5 Model to overcome these challenges, especially in dynamic markets like the UAE/GCC, ensuring long-term competitiveness by addressing traditional industry pain points.",
      icon: "/images/brutalist-concrete-complex.png",
    },
    {
      title: "Core Principles",
      content:
        "The I5 Model synthesizes productization (treating buildings as standardized products) and Integrated Project Delivery (IPD) for exponential value. Key enablers include a product catalog (BoK), controlled customization, and owner-controlled digital platforms (AEC, BoK, VS) for seamless data flow. This approach ensures faster delivery, cost savings, and fewer defects through continuous improvement and agile feedback loops.",
      icon: "/images/geometric-office-building.png",
    },
    {
      title: "Operational Ecosystem",
      content:
        "The I5 Operational Ecosystem is a comprehensive technological infrastructure enabling efficient real estate development by integrating design, manufacturing, construction, and management. Core digital platforms (BoK, VS, DfMA, AEC) are explicitly owned and controlled by the owner, ensuring real-time visibility, strategic alignment, and seamless workflows by eliminating information silos and governing partner technologies.",
      icon: "/images/blue-office-building.png",
    },
    {
      title: "Delivery Framework",
      content:
        "The I5 Delivery Framework implements the model through five sequential phases, transforming concepts into completed assets with parallel workflows, continuous quality assurance, and iterative improvement. Formal gateway reviews ensure viability and prevent downstream issues. It leverages owner-controlled digital platforms (AEC, BoK, DfMA, VS) as a technological backbone for integrated project management, collaborative workflows, and seamless data flow.",
      icon: "/images/modular-building.png",
    },
    {
      title: "Organizational Framework",
      content:
        "The I5 Organizational Framework shifts from traditional silos to integrated, cross-functional teams aligned with product lines. It defines key roles and responsibilities, emphasizing owner-controlled digital platforms for seamless collaboration and knowledge continuity. This structure facilitates faster decision-making, reduced errors, and continuous improvement through defined governance and capability development.",
      icon: "/images/modern-office-campus.png",
    },
    {
      title: "Financial Framework",
      content:
        "The I5 Financial Framework provides a structured approach to investment, cost analysis, and ROI, explicitly accounting for significant upfront owner investment in core digital platforms. It highlights shifts to front-loaded design, off-site manufacturing, reduced contingency, and compressed financing costs. This framework maximizes value through schedule compression, quality improvement, and platform efficiency gains.",
      icon: "/images/glass-office.png",
    },
    {
      title: "Procurement and Contracts",
      content:
        "The I5 Procurement & Contracts Framework shifts to a strategic, value-based approach, aligning with productization and IPD. Contracts explicitly address owner control over core digital platforms and define requirements for partner technologies. It emphasizes early supplier involvement, long-term partnerships, and digitally integrated supply chains for seamless workflows, effective contract management, and comprehensive risk management.",
      icon: "/images/diamond-pattern-office.png",
    },
    {
      title: "Performance and Risk Framework",
      content:
        "The I5 Performance & Risk Framework ensures data-driven decision-making through robust KPIs and proactive risk management. It continuously monitors owner-controlled digital platforms and addresses technology-related risks, including platform failure/security and partner non-compliance. This framework provides early warning signals and quantifiable evidence of improvement, driving continuous learning and resilience.",
      icon: "/images/lattice-structure-tower.png",
    },
  ]

  const tabContent = [
    {
      title: "Preface of the I5 Model Handbook",
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-white mb-6">
                The Industry 4.0 Implementation Gap in Real Estate and Construction
              </h3>
              <div className="prose prose-lg text-gray-300 max-w-none">
                <p className="mb-6">
                  The real estate and construction sectors, vital to the global economy with annual expenditures
                  exceeding $10 trillion, exhibit a significant divergence from other industries in productivity growth
                  and technological advancement.
                </p>
                <p className="mb-6">
                  This divergence is a complex systemic challenge impacting economic development, environmental
                  sustainability, and built environment quality. The I5 Real Estate Delivery Model addresses this
                  Industry 4.0 implementation gap through five interconnected dimensions, replacing traditional
                  phase-gate methodologies with a concurrent, data-centric framework.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
                style={{
                  backgroundImage: `url(/images/hexagonal-modular-building.jpeg)`,
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg hover:bg-gray-900/70 transition-all border-slate-600 bg-transparent border-0"
            >
              <div className="text-4xl font-light text-white mb-4 text-center py-0 pb-2 border-b border-slate-500">20-30%</div>
              <h4 className="text-lg font-medium text-white mb-2 text-center">Schedule Compression</h4>
              <p className="text-gray-400 text-sm">
                The I5 Model has demonstrated significant schedule compression through concurrent, data-centric
                frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg hover:bg-gray-900/70 transition-all border-slate-600 bg-transparent border-0"
            >
              <div className="text-4xl font-light text-white mb-4 text-center border-b border-slate-500 pb-2">40-60%</div>
              <h4 className="text-lg font-medium text-white mb-2 text-center">Coordination Error Reduction</h4>
              <p className="text-gray-400 text-sm">
                Significant reduction in coordination errors through integrated digital platforms and collaborative
                approaches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg hover:bg-gray-900/70 transition-all border-slate-600 bg-transparent border-0"
            >
              <div className="text-4xl font-light text-white mb-4 text-center border-slate-500 border-b py-0 pb-2">30-40%</div>
              <h4 className="text-lg font-medium text-white mb-2 text-center">Labor Productivity Improvement</h4>
              <p className="text-gray-400 text-sm">
                Standardization and modularization techniques lead to significant improvements in labor productivity.
              </p>
            </motion.div>
          </div>

          <div className="bg-[#0a1628] rounded-lg border border-gray-800 overflow-hidden">
            <div className="border-b border-gray-800">
              <nav className="flex space-x-0">
                {[
                  { id: "feedback", title: "Agile Feedback Loops", icon: <RotateCcw className="h-4 w-4" /> },
                  { id: "alignment", title: "Stakeholder Alignment", icon: <Target className="h-4 w-4" /> },
                  { id: "transformation", title: "Strategic Transformation", icon: <Zap className="h-4 w-4" /> },
                  { id: "scaling", title: "Scaling Success", icon: <TrendingUp className="h-4 w-4" /> },
                ].map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveContentTab(index)}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors border-b-2 text-orange-500 ${
                      activeContentTab === index
                        ? "border-blue-600 text-blue-400 bg-gray-800/50"
                        : "border-transparent text-gray-400 hover:text-gray-300 hover:bg-gray-800/30"
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContentTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-lg text-gray-300 max-w-none"
                >
                  {activeContentTab === 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">
                          <RotateCcw className="h-5 w-5" />
                        </span>
                        Agile Feedback Loops
                      </h4>
                      <p className="mb-6">
                        The model incorporates agile feedback loops where every completed project provides insights for
                        refining design templates and improving coordination, ensuring adaptability to market shifts.
                        Unlike conventional systems that rely on sequential handoffs or fragmented Lean/modular
                        implementations, I5 aligns all participants under common goals.
                      </p>
                    </div>
                  )}

                  {activeContentTab === 1 && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 text-sm">
                          <Target className="h-5 w-5" />
                        </span>
                        Stakeholder Alignment
                      </h4>
                      <p className="mb-6">
                        I5 ensures that standardization, IPD collaboration, and Lean principles reinforce each other
                        throughout an entire portfolio. This alignment creates a synergistic effect where all
                        participants work toward common objectives, eliminating the traditional silos that plague
                        construction projects.
                      </p>
                    </div>
                  )}

                  {activeContentTab === 2 && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3 text-sm">
                          <Zap className="h-5 w-5" />
                        </span>
                        Strategic Transformation
                      </h4>
                      <p className="mb-6">
                        The I5 Model offers a strategic transformation to address growing complexity, tight margins, and
                        escalating demands for speed, quality, and sustainability, which traditional approaches struggle
                        with. This dual approach has demonstrated verifiable gains, compressing timelines significantly
                        by manufacturing major components off-site in parallel with site preparation.
                      </p>
                    </div>
                  )}

                  {activeContentTab === 3 && (
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3 text-sm">
                          <TrendingUp className="h-5 w-5" />
                        </span>
                        Scaling Success
                      </h4>
                      <p className="mb-6">
                        Ultimately, the I5 Model offers a comprehensive, repeatable system for transforming real estate
                        development, positioning organizations to consistently deliver projects more quickly, at lower
                        cost, and with fewer defects. It provides a clear blueprint for scaling success across multiple
                        projects, institutionalizing efficiencies and compounding returns with every new venture.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          
        </div>
      ),
    },
    {
      title: "Introduction to the I5 Model Handbook",
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000"
                style={{
                  backgroundImage: `url(/images/blue-office-building.png)`,
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-light text-white mb-6">The I5 Model's Foundational Approach</h3>
              <div className="prose prose-lg text-gray-300 max-w-none">
                <p className="mb-6">
                  The I5 Real Estate Delivery Model addresses industry challenges by merging productization and
                  Integrated Project Delivery (IPD) into a single, cohesive approach. This integration aligns with
                  global best practices, where productization treats buildings as standardized, repeatable solutions,
                  and IPD redefines collaboration by aligning all participants within a single, shared-risk contract.
                </p>
                <p>
                  This fusion streamlines design, procurement, and construction, reducing time and waste and enabling
                  continuous improvements with each new development. The I5 Model systematically embeds Lean
                  Construction principles, drawing on a proven "product catalog" of modular elements that can be
                  configured for specific market needs, which can reduce design time by up to 40%.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1628] p-8 rounded-lg border-gray-800 shadow-sm border">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center text-center justify-center pb-2 border-b border-slate-500">
              <span className="w-8 rounded-full flex items-center justify-center mr-3 text-center bg-transparent h-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className=""
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Key Enablers & Digital Transformation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {[
                    'Developing a core "product catalog"',
                    "Limiting customization to configurable options",
                    "Implementing configuration systems",
                    "Uniting all stakeholders in a single agreement",
                    "Engaging manufacturers and contractors early",
                    "Engineering elements for off-site fabrication",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    "Delivering modules Just-In-Time",
                    "Employing unified BIM models",
                    "Integrating IoT/RFID for real-time monitoring",
                    "Establishing digital twins",
                    "Institutionalizing feedback loops",
                    "Tracking standardized KPIs",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="prose prose-lg text-gray-300 max-w-none">
            <p className="mb-6">
              The model incorporates agile feedback loops where every completed project provides insights for refining
              design templates and improving coordination, ensuring adaptability to market shifts. Unlike conventional
              systems that rely on sequential handoffs or fragmented Lean/modular implementations, I5 aligns all
              participants under common goals, ensuring that standardization, IPD collaboration, and Lean principles
              reinforce each other throughout an entire portfolio.
            </p>
            <p className="mb-6">
              Ultimately, the I5 Model offers a comprehensive, repeatable system for transforming real estate
              development, positioning organizations to consistently deliver projects more quickly, at lower cost, and
              with fewer defects. It provides a clear blueprint for scaling success across multiple projects,
              institutionalizing efficiencies and compounding returns with every new venture.
            </p>
            <p className="mb-6">
              The I5 Model offers a strategic transformation to address growing complexity, tight margins, and
              escalating demands for speed, quality, and sustainability, which traditional approaches struggle with.
              This dual approach has demonstrated verifiable gains, compressing timelines significantly by manufacturing
              major components off-site in parallel with site preparation, leading to 20-50% project schedule
              reductions.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Important Note on Digital Platforms</h4>
                <p className="text-gray-300">
                  It is important to note that the digital platforms forming the core of this ecosystem (including BIM,
                  project management, and digital twin capabilities) will be owned, procured, administered, and
                  controlled by the owner, who grants appropriate access to partners.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg text-gray-300 max-w-none">
            <p>
              <strong>Handbook Structure:</strong> The handbook provides comprehensive guidance, structured into logical
              chapters, covering foundational concepts to detailed implementation strategies. It clarifies the owner's
              defined role in owning and administering core digital platforms, granting access to partners, and
              establishing technology governance, particularly detailed in Chapters 6 and 7. By applying these
              principles, organizations can transform their real estate delivery approach, achieving significant
              improvements in speed, cost, and quality while building long-term competitive advantage.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "I5 Model Section Briefs",
      content: (
        <div className="space-y-8">
          <div className="bg-[#0a1628] p-8 rounded-lg shadow-md border-l-4 border-blue-600 bg-transparent">
            <p className="text-xl text-gray-300 leading-relaxed">
              The I5 Model consists of eight interconnected frameworks that together form a comprehensive approach to
              real estate development and construction. Each section addresses specific aspects of the transformation
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {sectionBriefs.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a1628] border border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={cn(
                    "px-6 py-5 flex items-center justify-between cursor-pointer transition-colors",
                    expandedSections.includes(index)
                      ? "bg-gray-800/50 border-b border-gray-700"
                      : "hover:bg-gray-800/30",
                  )}
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 rounded-full flex items-center justify-center text-blue-400 bg-transparent h-10">
                      {sectionIcons[index]}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {index + 1}. {section.title}
                    </h3>
                  </div>
                  <div className="text-blue-400 bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center border border-gray-700 shadow-sm">
                    {expandedSections.includes(index) ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSections.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <p className="text-gray-300 mb-6">{section.content}</p>
                          <div className="flex space-x-4">
                            
                          </div>
                        </div>
                        <div className="relative h-48 md:h-full rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={section.icon || "/placeholder.svg"}
                            alt={section.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder.svg?height=600&width=800"
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(/images/flowing-apartment-building.png)`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">The I5 Model Overview</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              A comprehensive framework transforming real estate development through productization, integrated
              delivery, and owner-controlled digital platforms. Delivering 20-30% schedule compression and 40-60%
              reduction in coordination errors.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                20-30% schedule compression
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                40-60% error reduction
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                30-40% productivity gains
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)",
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.4), 0 4px 6px -2px rgba(59, 130, 246, 0.3)",
              }}
              className="inline-block"
            >
              <Link
                href="/insights/dashboard-a"
                className="inline-flex items-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg border-2 border-blue-400"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View RISK-BSC-I5 Dashboard
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#0a1628] border-b border-gray-800 sticky top-0 z-40 shadow-sm bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-2 font-medium text-sm transition-colors border-b-8 ${
                  activeTab === index
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-[#0a1628] bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tabContent[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Model Visualization */}
      

      {/* Related Insights */}
      
    </div>
  )
}
