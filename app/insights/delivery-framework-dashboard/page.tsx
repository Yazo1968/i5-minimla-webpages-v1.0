"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  CheckCircle,
  Users,
  Settings,
  Target,
  Zap,
  Building2,
  FileText,
  BarChart3,
  Layers,
  GitBranch,
  Workflow,
  Shield,
  Cog,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export default function DeliveryFrameworkPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tabs = [
    "Overview of I5 Delivery Framework",
    "Phase 1: Product Definition",
    "Phase 2: Product Configuration",
    "Phase 3: Pre-Production",
    "Phase 4: Production",
    "Phase 5: Handover and Support",
  ]

  const phases = [
    {
      id: 1,
      title: "Product Definition",
      subtitle: "Market-First Approach",
      description: "Transform initial concepts into validated product strategies",
      icon: <Target className="h-8 w-8 text-blue-400" />,
      color: "blue",
      benefits: [
        "70% reduction in downstream design changes",
        "Market demand validation",
        "Clear business objectives",
        "20-30% improvement in project success rates",
      ],
      duration: "4-6 weeks",
    },
    {
      id: 2,
      title: "Product Configuration",
      subtitle: "Parallel Development",
      description: "Detailed schematic design with simultaneous market engagement",
      icon: <Settings className="h-8 w-8 text-blue-400" />,
      color: "green",
      benefits: [
        "20-30% faster time-to-market",
        "Digital model validation",
        "Customer feedback integration",
        "70-80% prevention of downstream production issues",
      ],
      duration: "8-12 weeks",
    },
    {
      id: 3,
      title: "Pre-Production",
      subtitle: "Dual-Track Preparation",
      description: "Manufacturer and contractor preparation in parallel",
      icon: <Workflow className="h-8 w-8 text-blue-400" />,
      color: "purple",
      benefits: [
        "30-40% reduction in pre-production time",
        "Manufacturing readiness",
        "Site preparation",
        "70-80% prevention of production/construction issues",
      ],
      duration: "6-10 weeks",
    },
    {
      id: 4,
      title: "Production",
      subtitle: "Concurrent Execution",
      description: "Manufacturing and on-site construction simultaneously",
      icon: <Building2 className="h-8 w-8 text-blue-400" />,
      color: "orange",
      benefits: ["30-50% faster delivery", "Quality control integration", "JIT coordination"],
      duration: "12-20 weeks",
    },
    {
      id: 5,
      title: "Handover & Support",
      subtitle: "Continuous Improvement",
      description: "Systems commissioning and knowledge transfer",
      icon: <CheckCircle className="h-8 w-8 text-blue-400" />,
      color: "emerald",
      benefits: [
        "40-50% reduction in post-occupancy issues",
        "Performance optimization",
        "Lessons learned",
        "8-20% reduction in operational costs",
      ],
      duration: "4-8 weeks",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-screen flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/modern-office-campus.png"
            alt="Modern office campus background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 backdrop-blur-sm text-blue-200 mb-6">
                <Workflow className="h-4 w-4 mr-2" />
                I5 Implementation Framework
              </div>

              <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                Delivery <span className="text-blue-400">Framework</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A structured pathway transforming concepts into delivered products through
                <span className="text-white font-medium"> five sequential phases</span> with parallel workflows and
                continuous quality assurance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/insights/delivery-framework-dashboard"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors group"
                >
                  <span>View Dashboard</span>
                  <BarChart3 className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-6 py-3 border border-white/20 hover:bg-white/10 rounded-lg text-white font-medium transition-colors">
                  <span>Learn More</span>
                </button>
              </div>
            </motion.div>

            {/* Right Content - Phase Overview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Five-Phase Process</h3>
              <div className="space-y-4">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="text-blue-400 mr-4">{phase.icon}</div>
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        Phase {phase.id}: {phase.title}
                      </div>
                      <div className="text-slate-400 text-sm">{phase.duration}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-1 sm:px-2">
          <div className="overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <nav className="flex flex-nowrap min-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 px-2 font-medium text-xs whitespace-nowrap transition-colors flex-shrink-0 border-b-4 ${
                    activeTab === index
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="bg-white p-6 rounded-none border-r border-slate-600 shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab 1: Overview */}
          {activeTab === 0 && (
            <div className="space-y-20 bg-transparent">
              {/* Container 1: Introduction to the I5 Framework */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-4xl font-light text-gray-900 mb-6">Introduction to the I5 Framework</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      The <strong>I5 Real Estate Delivery Model</strong> is systematically implemented through{" "}
                      <strong>five sequential phases</strong>, each designed to transform an initial concept into a
                      validated product strategy and ultimately, a completed asset.
                    </p>
                    <p>
                      This framework is designed to{" "}
                      <strong>accelerate delivery, reduce costs, and enhance quality</strong> by fostering parallel
                      activities, rigorous quality control at every stage, and continuous feedback loops for product and
                      process refinement.
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
                    alt="Modern commercial building showcasing integrated project delivery"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Container 2: Integrated Project Management */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 md:p-12 border-slate-400 rounded-none border-b-0"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light text-gray-900 mb-6">Integrated Project Management</h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Project management within the I5 Framework represents a significant departure from traditional,
                    siloed approaches, moving towards <strong>integrated, cross-functional teams</strong>. These
                    multidisciplinary teams, comprising experts from architecture, engineering, manufacturing,
                    construction, and supply chain, collaborate intensively from the project's inception.
                  </p>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
                    This <strong>collaborative ethos, rooted in Integrated Project Delivery (IPD) principles</strong>,
                    aims to optimize project outcomes, enhance value for the owner, minimize waste, and maximize
                    efficiency. The collaboration is extensively supported by the{" "}
                    <strong>owner-controlled digital platforms</strong> that serve as the{" "}
                    <strong>technological backbone</strong> of the I5 Model.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 shadow-none gap-x-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`p-8 text-center shadow-none bg-transparent border-r border-slate-600 rounded-none`}
                  >
                    <Users className="h-12 w-12 mx-auto mb-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Functional Teams</h3>
                    <p className="text-gray-600">
                      Multidisciplinary experts from architecture, engineering, manufacturing, construction, and supply
                      chain collaborate from inception.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="p-8 text-center shadow-none bg-transparent border-r border-slate-600 rounded-none "
                  >
                    <Layers className="h-12 w-12 mx-auto mb-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Platform Integration</h3>
                    <p className="text-gray-600">
                      Owner-controlled digital platforms serve as the technological backbone, enabling seamless
                      collaboration and data flow.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-xl p-8 text-center bg-transparent shadow-none"
                  >
                    <GitBranch className="h-12 w-12 mx-auto mb-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">IPD Principles</h3>
                    <p className="text-gray-600">
                      Collaborative ethos rooted in Integrated Project Delivery principles to optimize outcomes and
                      maximize efficiency.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Container 3: Gateways for Control and Progress */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="text-center mb-12 w-full max-w-none">
                  <h2 className="text-4xl font-light text-gray-900 mb-6">Gateways for Control and Progress</h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                    A defining feature of the I5 Real Estate Delivery Model is the inclusion of{" "}
                    <strong>formal gateway reviews</strong> at the conclusion of each phase. These gateways serve as
                    critical checkpoints to ensure that all specific activities and deliverables have been met, and that
                    the project is sufficiently prepared to <strong>progress to the subsequent phase</strong>.
                  </p>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    This structured control mechanism is vital for ensuring that the product concept remains{" "}
                    <strong>market-viable, technically feasible, and financially sound</strong>, effectively preventing
                    substantial investments in non-viable concepts and minimizing downstream issues that can be costly
                    to rectify. This disciplined approach is particularly crucial for managing the{" "}
                    <strong>front-loaded nature of I5 investments</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 border-slate-600 border-b pb-px w-full">
                  {phases.map((phase, index) => (
                    <motion.div
                      key={phase.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-xl p-6 border-gray-100 hover:shadow-xl transition-shadow bg-transparent shadow-none border-0"
                    >
                      <div className="text-blue-600 mb-4">{phase.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase {phase.id}</h3>
                      <h4 className="text-sm font-medium text-gray-700 mb-3">{phase.title}</h4>
                      <div className="space-y-2">
                        {phase.benefits.map((benefit, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-gray-100 border-t-0">
                        <div className="text-xs text-gray-500">Duration: {phase.duration}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Container 4: Integration with Other Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 bg-transparent"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
                  Integration with Other Frameworks (Avoiding Duplication)
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-8">
                  The Delivery Framework of the I5 Model is deeply interconnected with its other core frameworks,
                  operating as a cohesive system:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-0">
                    <div className="bg-white p-6 border-r border-slate-600 rounded-none shadow-none">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="h-5 w-5 text-blue-600 mr-2" />
                        Core Principles
                      </h3>
                      <p className="text-gray-600 text-sm">
                        The sequential phases of the Delivery Framework are the practical application ground for the{" "}
                        <strong>productization of real estate</strong> (treating buildings as standardized, manufactured
                        products) and the implementation of <strong>Integrated Project Delivery (IPD)</strong>{" "}
                        methodologies.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-none border-r border-slate-600 shadow-none">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Layers className="h-5 w-5 text-green-600 mr-2" />
                        Operational Ecosystem
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Each phase's activities are heavily reliant on and contribute to the{" "}
                        <strong>four interconnected digital platforms</strong> – the{" "}
                        <strong>Body of Knowledge (BoK) Platform</strong>, the{" "}
                        <strong>Virtual Showroom (VS) Platform</strong>, the{" "}
                        <strong>Design for Manufacture and Assembly (DfMA) Platform</strong>, and the{" "}
                        <strong>
                          Architecture, Engineering, and Construction (AEC) / Common Data Environment (CDE) Suite
                        </strong>
                        . These platforms, <strong>owned and controlled by the owner</strong>, are instrumental for
                        digital modeling, collaborative workflows, efficient information management, and real-time data
                        flow throughout the entire delivery process.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-none border-r border-slate-600 shadow-none">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="h-5 w-5 text-purple-600 mr-2" />
                        Organizational Framework
                      </h3>
                      <p className="text-gray-600 text-sm">
                        The execution of each phase is performed by <strong>cross-functional teams</strong> operating
                        with <strong>clearly defined roles and responsibilities</strong>. The Delivery Framework
                        necessitates a fundamental transformation in organizational structure to facilitate seamless
                        collaboration and leverage the capabilities of the digital platforms.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-0">
                    <div className="bg-white rounded-lg p-6 shadow-none">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <BarChart3 className="h-5 w-5 text-orange-600 mr-2" />
                        Financial Framework
                      </h3>
                      <p className="text-gray-600 text-sm">
                        The structured, phased approach of the Delivery Framework significantly influences the{" "}
                        <strong>cost distribution</strong> and <strong>capital requirements</strong> of projects,
                        notably involving increased upfront investments, including those in the owner-controlled
                        platforms. These investments are justified by the long-term value and efficiency gains realized
                        across multiple projects.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-none">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <FileText className="h-5 w-5 text-red-600 mr-2" />
                        Procurement & Contracts Framework
                      </h3>
                      <p className="text-gray-600 text-sm">
                        The framework's success hinges on strategies such as <strong>early supplier involvement</strong>
                        , the adoption of <strong>collaborative contracting models</strong> (e.g., IPD), and the
                        establishment of <strong>long-term partnerships</strong>. Procurement strategies and contract
                        selection are meticulously adapted to accommodate the unique requirements of off-site
                        manufacturing and integrated project delivery.
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-none">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="h-5 w-5 text-indigo-600 mr-2" />
                        KPIs & Risk Framework
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Throughout all five phases, project performance is continually monitored using a comprehensive
                        set of <strong>Operational, Financial, and Strategic Key Performance Indicators (KPIs)</strong>.
                        Concurrently, <strong>risk management</strong> is an embedded and ongoing process, involving
                        structured identification, thorough assessment, and proactive mitigation strategies for all
                        project phases, with a particular emphasis on <strong>technology-related risks</strong>{" "}
                        associated with the digital platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Phase 1: Product Definition */}
          {activeTab === 1 && (
            <div className="space-y-16">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                  <Target className="h-5 w-5 mr-2" />
                  <span>Phase 1</span>
                </div>
                <h1 className="text-5xl font-light text-gray-900 mb-6">Product Definition</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Transform an initial concept into a validated product strategy underpinned by clear business
                  objectives
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">4-6 weeks</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">70%</div>
                    <div className="text-sm text-gray-500">Reduction in design changes</div>
                  </div>
                </div>
              </motion.div>

              {/* Container 1: Purpose of Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center gap-y-2.5"
              >
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">Purpose of Phase 1</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      <strong>Phase One</strong> serves as the <strong>foundational stage</strong> for the entire real
                      estate development process within the I5 Model. Its primary objective is to transform an initial
                      concept into a <strong>validated product strategy</strong> underpinned by clear business
                      objectives.
                    </p>
                    <p>
                      This phase adopts a <strong>market-first approach</strong>, ensuring that all standardized product
                      solutions are developed in direct response to <strong>verified market demand patterns</strong>.
                    </p>
                    <p>
                      A critical outcome of effective product definition at this early stage is the potential to{" "}
                      <strong>reduce downstream design changes by up to 70%</strong>, significantly contributing to
                      overall project efficiency and success.
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
                    src="/images/curved-apartment.png"
                    alt="Market research and product strategy development"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Container 2: Key Activities in Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-transparent rounded-2xl p-8 md:p-12 border-t border-slate-600 rounded-none border-b"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Activities in Phase 1</h2>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                      Market Analysis & Demand Forecasting
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Market segmentation analysis</strong> to identify optimal product-market matches
                        </p>
                        <p className="mb-2">
                          • <strong>Competitor benchmarking</strong> to uncover competitive advantages
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Demographic and demand forecasting</strong> to pinpoint sustainable demand for
                          standardized products
                        </p>
                        <p className="mb-2">
                          • <strong>Customer preference mapping</strong> through surveys and focus groups
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-6 w-6 text-green-600 mr-3" />
                      Feasibility Assessment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Site compatibility assessment</strong> utilizing preliminary digital modeling on
                          owner-provided platforms
                        </p>
                        <p className="mb-2">
                          • <strong>Technical feasibility analysis</strong> assessing potential for modularity, factory
                          production capacity, and transportation logistics
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Regulatory compliance review</strong> ensuring product design can accommodate
                          variations across target locations
                        </p>
                        <p className="mb-2">• Maintaining core design integrity while allowing for local adaptations</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Cog className="h-6 w-6 text-purple-600 mr-3" />
                      Business Case & Preliminary Design
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        • <strong>Financial modeling</strong> integrating development costs, operational costs, revenue
                        projections, and expected investment returns
                      </p>
                      <p>
                        • <strong>Risk assessment</strong> to identify and develop preliminary mitigation strategies for
                        risks unique to the productized approach
                      </p>
                      <p>
                        • <strong>Design brief development</strong> translating market requirements into precise design
                        parameters (spatial needs, performance specifications, target cost parameters, sustainability
                        objectives, and aesthetic guidelines)
                      </p>
                      <p>
                        • <strong>Modularization strategy</strong> defining standardized, repeatable elements with core
                        component definition (managed within the owner's Body of Knowledge platform)
                      </p>
                      <p>
                        • <strong>Conceptual test fits</strong> validating the standardized approach's adaptability to
                        typical site variations, utilizing owner-provided AEC platform tools
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Container 3: Key Deliverables of Phase 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=""
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Deliverables of Phase 1</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <FileText className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Definition Document</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive document providing detailed description of the proposed product concept, including
                      market positioning, target customer segments, core value propositions, key features, and
                      standardization strategy.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 rounded-none border-slate-600 border-r"
                  >
                    <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Feasibility Report</h3>
                    <p className="text-gray-600 text-sm">
                      Thorough assessment encompassing technical, regulatory, and logistical aspects, demonstrating that
                      the product concept can be successfully delivered using the I5 approach.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none rounded-none border-slate-600 border-0"
                  >
                    <BarChart3 className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Case</h3>
                    <p className="text-gray-600 text-sm">
                      Robust financial validation document including detailed development cost estimates, revenue
                      projections, and return metrics, proving the product meets investment thresholds.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none rounded-none border-0 border-r border-slate-600"
                  >
                    <Building2 className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Preliminary Design Package</h3>
                    <p className="text-gray-600 text-sm">
                      Initial design package including conceptual site plans, typical unit layouts, modularization
                      strategy diagrams, and preliminary material specifications. May include early Virtual Showroom
                      visualizations.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:col-span-2 border-0 shadow-none rounded-none border-slate-600 border-r"
                  >
                    <Workflow className="h-8 w-8 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation Strategy</h3>
                    <p className="text-gray-600 text-sm">
                      High-level roadmap outlining the approach for product development, including key partner
                      requirements, manufacturing and logistics strategies, regulatory approval plan, and initial risk
                      management framework.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Container 4: Gateway Requirements at End of Phase 1 */}
            </div>
          )}

          {/* Phase 2: Product Configuration */}
          {activeTab === 2 && (
            <div className="space-y-16">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
                  <Settings className="h-5 w-5 mr-2" />
                  <span>Phase 2</span>
                </div>
                <h1 className="text-5xl font-light text-gray-900 mb-6">Product Configuration</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Detailed schematic design with simultaneous market engagement
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">8-12 weeks</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">20-30%</div>
                    <div className="text-sm text-gray-500">Faster time-to-market</div>
                  </div>
                </div>
              </motion.div>

              {/* Container 1: Purpose of Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">Purpose of Phase 2</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      <strong>Phase Two</strong> focuses on the <strong>detailed schematic design</strong> of the
                      product, ensuring that all technical specifications are met while simultaneously engaging with the
                      market to gather customer feedback.
                    </p>
                    <p>
                      This phase leverages <strong>parallel development</strong> methodologies, allowing for the
                      simultaneous creation of digital models and market research activities. This approach aims to{" "}
                      <strong>accelerate time-to-market</strong> by ensuring that design iterations are informed by
                      real-time customer insights.
                    </p>
                    <p>
                      A key outcome of Phase Two is the <strong>digital model validation</strong>, which confirms that
                      the product design can be effectively manufactured and assembled in a factory setting.
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
                    src="/images/blue-geometric-facade.png"
                    alt="Digital modeling and market engagement"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Container 2: Key Activities in Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-transparent rounded-2xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Activities in Phase 2</h2>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Layers className="h-6 w-6 text-green-600 mr-3" />
                      Digital Modeling
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Creation of detailed digital models</strong> using owner-controlled platforms
                        </p>
                        <p className="mb-2">
                          • <strong>Validation of technical specifications</strong> ensuring manufacturability and
                          assembly feasibility
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Integration of customer feedback</strong> into design iterations
                        </p>
                        <p className="mb-2">
                          • <strong>Optimization of design parameters</strong> based on market insights
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 text-blue-600 mr-3" />
                      Market Engagement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Conducting market surveys</strong> to gather customer preferences
                        </p>
                        <p className="mb-2">
                          • <strong>Engaging with stakeholders</strong> to refine product features
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Utilizing Virtual Showroom</strong> for interactive design presentations
                        </p>
                        <p className="mb-2">
                          • <strong>Collecting feedback on design iterations</strong> to inform further development
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Cog className="h-6 w-6 text-purple-600 mr-3" />
                      Design Optimization
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        • <strong>Optimizing design for manufacturability</strong> using Design for Manufacture and
                        Assembly (DfMA) principles
                      </p>
                      <p>
                        • <strong>Ensuring design consistency</strong> across different site variations
                      </p>
                      <p>
                        • <strong>Refining material specifications</strong> based on cost and performance considerations
                      </p>
                      <p>
                        • <strong>Developing detailed design packages</strong> for manufacturing and construction
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Container 3: Key Deliverables of Phase 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=""
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Deliverables of Phase 2</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <FileText className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Model Package</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive package of digital models and technical specifications, validated for
                      manufacturability and assembly.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-slate-600 border-r rounded-none"
                  >
                    <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Feedback Report</h3>
                    <p className="text-gray-600 text-sm">
                      Document summarizing customer feedback and its impact on design iterations.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 border-0 shadow-none border-r-0 border-slate-600"
                  >
                    <BarChart3 className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimized Design Package</h3>
                    <p className="text-gray-600 text-sm">
                      Finalized design package incorporating customer feedback and optimized for manufacturability and
                      assembly.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-none border-0 border-r border-slate-600 shadow-none"
                  >
                    <Building2 className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing Readiness Plan</h3>
                    <p className="text-gray-600 text-sm">
                      Detailed plan outlining steps for preparing the product for manufacturing, including material
                      sourcing, production scheduling, and quality control measures.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:col-span-2 shadow-none rounded-none border-0 border-r border-slate-600"
                  >
                    <Workflow className="h-8 w-8 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gateway Review Documentation</h3>
                    <p className="text-gray-600 text-sm">
                      Documentation supporting the formal gateway review at the end of Phase Two, demonstrating that all
                      design and market activities have been completed successfully.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Container 4: Gateway Requirements at End of Phase 2 */}
            </div>
          )}

          {/* Phase 3: Pre-Production */}
          {activeTab === 3 && (
            <div className="space-y-16">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-6">
                  <Workflow className="h-5 w-5 mr-2" />
                  <span>Phase 3</span>
                </div>
                <h1 className="text-5xl font-light text-gray-900 mb-6">Pre-Production</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Manufacturer and contractor preparation in parallel
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">6-10 weeks</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">30-40%</div>
                    <div className="text-sm text-gray-500">Reduction in pre-production time</div>
                  </div>
                </div>
              </motion.div>

              {/* Container 1: Purpose of Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">Purpose of Phase 3</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      <strong>Phase Three</strong> is dedicated to the{" "}
                      <strong>preparation of both manufacturers and contractors</strong> for the upcoming production
                      phase. This dual-track approach ensures that all necessary preparations are completed
                      simultaneously, minimizing delays and maximizing efficiency.
                    </p>
                    <p>
                      The primary objectives of Phase Three include <strong>manufacturing readiness</strong> and{" "}
                      <strong>site preparation</strong>, ensuring that the product can be manufactured efficiently and
                      that the construction site is ready for the assembly process.
                    </p>
                    <p>
                      By focusing on these preparations early, Phase Three aims to{" "}
                      <strong>prevent production/construction issues</strong> and reduce the overall project timeline.
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/modular-building.png"
                    alt="Manufacturer and contractor preparation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Container 2: Key Activities in Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-transparent rounded-2xl p-8 md:p-12 border-t border-slate-600 rounded-none border-b"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Activities in Phase 3</h2>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="h-6 w-6 text-purple-600 mr-3" />
                      Manufacturer Preparation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Setting up production lines</strong> for manufacturing standardized components
                        </p>
                        <p className="mb-2">
                          • <strong>Procuring necessary materials and equipment</strong> for production
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Developing quality control protocols</strong> for manufacturing processes
                        </p>
                        <p className="mb-2">
                          • <strong>Testing and validating manufacturing processes</strong> using digital models
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 text-blue-600 mr-3" />
                      Contractor Preparation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className className="mb-2">
                          • <strong>Preparing construction sites</strong> for assembly activities
                        </p>
                        <p className="mb-2">
                          • <strong>Coordinating logistics for component delivery</strong> to the construction site
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Developing site-specific assembly plans</strong> based on digital models
                        </p>
                        <p className="mb-2">
                          • <strong>Training site teams on assembly procedures</strong> using owner-controlled platforms
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Cog className="h-6 w-6 text-green-600 mr-3" />
                      Coordination & Scheduling
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        • <strong>Coordinating production schedules</strong> with construction timelines
                      </p>
                      <p>
                        • <strong>Developing contingency plans</strong> for potential delays or issues
                      </p>
                      <p>
                        • <strong>Ensuring seamless communication</strong> between manufacturers and contractors
                      </p>
                      <p>
                        • <strong>Validating site readiness</strong> through digital simulations
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Container 3: Key Deliverables of Phase 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=""
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Deliverables of Phase 3</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <FileText className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufacturing Readiness Report</h3>
                    <p className="text-gray-600 text-sm">
                      Document outlining the readiness of manufacturing processes, including production schedules,
                      material procurement, and quality control protocols.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-slate-600 border-r rounded-none"
                  >
                    <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Site Readiness Report</h3>
                    <p className="text-gray-600 text-sm">
                      Document confirming the readiness of construction sites for assembly, including site preparation,
                      logistics coordination, and safety protocols.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none rounded-none border-slate-600 border-0"
                  >
                    <BarChart3 className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Logistics Plan</h3>
                    <p className="text-gray-600 text-sm">
                      Detailed plan outlining the logistics for component delivery, including transportation schedules,
                      storage requirements, and handling procedures.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <Building2 className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Assembly Plan</h3>
                    <p className="text-gray-600 text-sm">
                      Detailed plan outlining the assembly procedures for constructing the product on-site, including
                      step-by-step instructions, equipment requirements, and safety protocols.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:col-span-2 shadow-none rounded-none border-0 border-slate-600 border-r"
                  >
                    <Workflow className="h-8 w-8 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gateway Review Documentation</h3>
                    <p className="text-gray-600 text-sm">
                      Documentation supporting the formal gateway review at the end of Phase Three, demonstrating that
                      all manufacturing and contractor preparations have been completed successfully.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Container 4: Gateway Requirements at End of Phase 3 */}
            </div>
          )}

          {/* Phase 4: Production */}
          {activeTab === 4 && (
            <div className="space-y-16">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-6">
                  <Building2 className="h-5 w-5 mr-2" />
                  <span>Phase 4</span>
                </div>
                <h1 className="text-5xl font-light text-gray-900 mb-6">Production</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Manufacturing and on-site construction simultaneously
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">12-20 weeks</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">30-50%</div>
                    <div className="text-sm text-gray-500">Faster delivery</div>
                  </div>
                </div>
              </motion.div>

              {/* Container 1: Purpose of Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">Purpose of Phase 4</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      <strong>Phase Four</strong> is the execution phase, where{" "}
                      <strong>manufacturing and on-site construction occur simultaneously</strong>. This concurrent
                      execution is a key aspect of the I5 model, designed to accelerate delivery timelines.
                    </p>
                    <p>
                      The primary objectives of Phase Four include <strong>efficient manufacturing</strong> of
                      standardized components and <strong>rapid on-site assembly</strong>, ensuring that the product is
                      delivered quickly and effectively.
                    </p>
                    <p>
                      By focusing on concurrent execution, Phase Four aims to{" "}
                      <strong>reduce overall project delivery time</strong> and improve project efficiency.
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/blue-office-building.png"
                    alt="Manufacturing and on-site construction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Container 2: Key Activities in Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-transparent rounded-2xl p-8 md:p-12 border-t border-slate-600 rounded-none border-b"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Activities in Phase 4</h2>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="h-6 w-6 text-orange-600 mr-3" />
                      Manufacturing
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Manufacturing standardized components</strong> according to design specifications
                        </p>
                        <p className="mb-2">
                          • <strong>Implementing quality control measures</strong> to ensure component quality
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Coordinating component delivery</strong> to construction sites
                        </p>
                        <p className="mb-2">
                          • <strong>Tracking component production</strong> using digital platforms
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 text-blue-600 mr-3" />
                      On-Site Construction
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Assembling standardized components</strong> according to assembly plans
                        </p>
                        <p className="mb-2">
                          • <strong>Implementing quality control measures</strong> to ensure assembly quality
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Coordinating assembly activities</strong> with manufacturing schedules
                        </p>
                        <p className="mb-2">
                          • <strong>Tracking assembly progress</strong> using digital platforms
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Cog className="h-6 w-6 text-green-600 mr-3" />
                      Coordination & Logistics
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        • <strong>Coordinating manufacturing and assembly schedules</strong> to ensure timely delivery
                      </p>
                      <p>
                        • <strong>Managing logistics for component delivery</strong> to construction sites
                      </p>
                      <p>
                        • <strong>Ensuring seamless communication</strong> between manufacturers and construction teams
                      </p>
                      <p>
                        • <strong>Monitoring project progress</strong> using digital platforms
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Container 3: Key Deliverables of Phase 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=""
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Deliverables of Phase 4</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <FileText className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Manufactured Components</h3>
                    <p className="text-gray-600 text-sm">
                      Delivery of standardized components manufactured according to design specifications and quality
                      control protocols.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-slate-600 border-r rounded-none"
                  >
                    <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Assembled Structure</h3>
                    <p className="text-gray-600 text-sm">
                      Completion of on-site assembly according to assembly plans and quality control measures.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none rounded-none border-slate-600 border-0"
                  >
                    <BarChart3 className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Progress Reports</h3>
                    <p className="text-gray-600 text-sm">
                      Regular progress reports tracking manufacturing and assembly activities, including key performance
                      indicators and milestones.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <Building2 className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Control Documentation</h3>
                    <p className="text-gray-600 text-sm">
                      Documentation outlining quality control measures implemented during manufacturing and assembly,
                      including inspection reports and test results.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:col-span-2 shadow-none rounded-none border-0 border-slate-600 border-r"
                  >
                    <Workflow className="h-8 w-8 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gateway Review Documentation</h3>
                    <p className="text-gray-600 text-sm">
                      Documentation supporting the formal gateway review at the end of Phase Four, demonstrating that
                      all manufacturing and construction activities have been completed successfully.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Container 4: Gateway Requirements at End of Phase 4 */}
            </div>
          )}

          {/* Phase 5: Handover & Support */}
          {activeTab === 5 && (
            <div className="space-y-16">
              {/* Phase Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-6">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Phase 5</span>
                </div>
                <h1 className="text-5xl font-light text-gray-900 mb-6">Handover & Support</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Systems commissioning and knowledge transfer
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">4-8 weeks</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40-50%</div>
                    <div className="text-sm text-gray-500">Reduction in post-occupancy issues</div>
                  </div>
                </div>
              </motion.div>

              {/* Container 1: Purpose of Phase 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">Purpose of Phase 5</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      <strong>Phase Five</strong> focuses on the{" "}
                      <strong>systems commissioning and knowledge transfer</strong> necessary for the successful
                      handover and ongoing support of the delivered product.
                    </p>
                    <p>
                      The primary objectives of Phase Five include <strong>systems commissioning</strong> to ensure
                      proper functionality and <strong>knowledge transfer</strong> to enable effective operation and
                      maintenance.
                    </p>
                    <p>
                      By focusing on these activities, Phase Five aims to <strong>reduce post-occupancy issues</strong>
                      and improve the long-term performance of the delivered product.
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/luxury-modern-mansion.png"
                    alt="Systems commissioning and knowledge transfer"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Container 2: Key Activities in Phase 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-transparent rounded-2xl p-8 md:p-12 border-t border-slate-600 rounded-none border-b"
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Activities in Phase 5</h2>

                <div className="space-y-8">
                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="h-6 w-6 text-emerald-600 mr-3" />
                      Systems Commissioning
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Testing and validating all systems</strong> to ensure proper functionality
                        </p>
                        <p className="mb-2">
                          • <strong>Calibrating systems</strong> to optimize performance
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Documenting system settings and configurations</strong>
                        </p>
                        <p className="mb-2">
                          • <strong>Addressing any identified issues or deficiencies</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 text-blue-600 mr-3" />
                      Knowledge Transfer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="mb-2">
                          • <strong>Training operating and maintenance personnel</strong>
                        </p>
                        <p className="mb-2">
                          • <strong>Providing documentation and manuals</strong>
                        </p>
                      </div>
                      <div>
                        <p className="mb-2">
                          • <strong>Conducting walkthroughs and demonstrations</strong>
                        </p>
                        <p className="mb-2">
                          • <strong>Establishing ongoing support channels</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Cog className="h-6 w-6 text-purple-600 mr-3" />
                      Performance Optimization
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        • <strong>Monitoring system performance</strong> to identify areas for improvement
                      </p>
                      <p>
                        • <strong>Implementing optimization strategies</strong> to enhance efficiency and reduce costs
                      </p>
                      <p>
                        • <strong>Collecting lessons learned</strong> to inform future projects
                      </p>
                      <p>
                        • <strong>Establishing continuous improvement processes</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Container 3: Key Deliverables of Phase 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=""
              >
                <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Key Deliverables of Phase 5</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <FileText className="h-8 w-8 text-emerald-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Commissioning Report</h3>
                    <p className="text-gray-600 text-sm">
                      Document outlining the results of systems commissioning, including test results, calibration
                      settings, and identified issues.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-slate-600 border-r rounded-none"
                  >
                    <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Training Materials</h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive training materials for operating and maintenance personnel, including manuals,
                      documentation, and videos.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none rounded-none border-slate-600 border-0"
                  >
                    <BarChart3 className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Monitoring Reports</h3>
                    <p className="text-gray-600 text-sm">
                      Regular performance monitoring reports tracking system performance, identifying areas for
                      improvement, and documenting optimization strategies.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 shadow-none border-0 border-r border-slate-600 rounded-none"
                  >
                    <Building2 className="h-8 w-8 text-orange-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Agreements</h3>
                    <p className="text-gray-600 text-sm">
                      Formal support agreements outlining the terms and conditions for ongoing support, including
                      response times, service levels, and escalation procedures.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:col-span-2 shadow-none rounded-none border-0 border-slate-600 border-r"
                  >
                    <Workflow className="h-8 w-8 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gateway Review Documentation</h3>
                    <p className="text-gray-600 text-sm">
                      Documentation supporting the formal gateway review at the end of Phase Five, demonstrating that
                      all handover and support activities have been completed successfully.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Container 4: Gateway Requirements at End of Phase 5 */}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
