"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import {
  Building2,
  Users,
  Cog,
  TrendingUp,
  Target,
  CheckCircle,
  BarChart3,
  Clock,
  DollarSign,
  Shield,
  Lightbulb,
  FileText,
  Database,
  Layers,
  Settings,
  GitBranch,
} from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export default function CorePrinciplesPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const tabs = ["Overview of I5 Core Principles", "Deep Dive: Core Principles and Their Benefits"]

  const keyMetrics = [
    { value: "25-35%", label: "Faster Delivery", icon: <Clock className="size-11" /> },
    { value: "15-25%", label: "Cost Savings", icon: <DollarSign className="size-11" /> },
    { value: "±2%", label: "Cost Variance", icon: <Target className="size-11" /> },
    { value: "50-70%", label: "Fewer Defects", icon: <Shield className="size-11" /> },
  ]

  const keyEnablers = [
    {
      title: "Core Product Catalog",
      description:
        "Develop modular components and floorplans for repeatable building blocks, managing standardization through the owner's Body of Knowledge (BoK) platform",
      icon: <Database className="h-8 w-8" />,
      benefit: "40% reduction in design time",
    },
    {
      title: "Unified Stakeholder Agreement",
      description:
        "Unite all participants in shared risk/reward contracts with early engagement of manufacturers and key contractors",
      icon: <Users className="h-8 w-8" />,
      benefit: "60-70% reduction in coordination issues",
    },
    {
      title: "Off-site Fabrication",
      description: "Engineer elements for high-volume production and JIT delivery with sophisticated logistics systems",
      icon: <Building2 className="h-8 w-8" />,
      benefit: "20-50% schedule reduction",
    },
    {
      title: "Digital Integration",
      description:
        "Employ unified BIM models via owner's AEC platform, IoT sensors, and digital twins for comprehensive lifecycle management",
      icon: <Cog className="h-8 w-8" />,
      benefit: "30-40% communication efficiency",
    },
    {
      title: "Continuous Learning",
      description: "Institutionalize feedback loops and standardized KPIs via BoK platform for systematic improvement",
      icon: <TrendingUp className="h-8 w-8" />,
      benefit: "Systematic improvement cycle",
    },
  ]

  const frameworks = [
    {
      name: "Delivery Framework",
      icon: <Layers className="h-5 w-5" />,
      description: "Sequential phases from concept to realization",
    },
    {
      name: "Operational Ecosystem",
      icon: <Cog className="h-5 w-5" />,
      description: "Technological infrastructure design",
    },
    {
      name: "Organizational Framework",
      icon: <Users className="h-5 w-5" />,
      description: "Cross-functional team structures",
    },
    {
      name: "Financial Framework",
      icon: <DollarSign className="h-5 w-5" />,
      description: "Investment and ROI optimization",
    },
    {
      name: "Procurement & Contracts",
      icon: <FileText className="h-5 w-5" />,
      description: "Strategic value-based approach",
    },
    {
      name: "KPIs & Risk Framework",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Performance monitoring and risk management",
    },
  ]

  const definitions = [
    {
      term: "Just-In-Time (JIT)",
      definition:
        "Production and inventory control system delivering materials precisely when needed, minimizing inventory costs and waste",
      relevance:
        "Essential for managing flow from off-site manufacturing to construction sites, coordinated via owner's AEC/SCM platforms",
      keyAspects: ["Demand Pull", "Waste Reduction", "Continuous Flow", "High Quality", "Supplier Integration"],
    },
    {
      term: "Integrated Project Delivery (IPD)",
      definition:
        "Multi-party agreement binding owner, architect, and builders with shared risk/reward from early project lifecycle",
      relevance: "Central to I5's collaborative ethos, ensuring alignment and shared incentives among all participants",
      keyAspects: [
        "Shared Risk and Reward",
        "Early Participant Involvement",
        "Collaborative Decision-Making",
        "Open Communication",
        "BIM Integration",
      ],
    },
    {
      term: "Lean Construction",
      definition:
        "Adaptation of lean manufacturing principles focusing on value maximization and waste elimination in construction",
      relevance:
        "Systematically embedded in I5 to reduce waste and improve efficiency in processes managed within owner platforms",
      keyAspects: ["Value Focus", "Waste Elimination", "Flow and Pull", "Continuous Improvement", "Respect for People"],
    },
    {
      term: "Design for Manufacture and Assembly (DfMA)",
      definition:
        "Design philosophy optimizing for ease of manufacturing and assembly to reduce costs and improve quality",
      relevance:
        "Critical methodology within I5 impacting design optimization and component standardization via owner's DfMA platform",
      keyAspects: ["Simplification", "Standardization", "Modularity", "Error Proofing", "Early Collaboration"],
    },
    {
      term: "Six Sigma",
      definition:
        "Data-driven methodology for improving processes by identifying and removing defects, aiming for 3.4 defects per million opportunities",
      relevance:
        "Principles infused into I5 operations for optimization and waste reduction using platform data and DMAIC framework",
      keyAspects: [
        "Customer Focus",
        "Data-Driven Decisions",
        "Process Orientation",
        "Proactive Management",
        "DMAIC Methodology",
      ],
    },
    {
      term: "Building Information Modeling (BIM)",
      definition:
        "Collaborative process using intelligent 3D models for efficient planning, design, construction, and management",
      relevance:
        "Owner's AEC platform serves as central BIM hub and single source of truth, forming foundation for Digital Twin",
      keyAspects: [
        "3D Modeling",
        "Data Integration",
        "Collaboration",
        "Lifecycle Management",
        "Digital Twin Foundation",
      ],
    },
    {
      term: "Common Data Environment (CDE)",
      definition:
        "Centralized digital workspace where all project information is stored, managed, and shared among stakeholders in a controlled manner",
      relevance:
        "Owner's AEC platform serves as the central CDE, ensuring single source of truth and controlled information exchange",
      keyAspects: [
        "Centralized Storage",
        "Version Control",
        "Access Management",
        "Audit Trail",
        "Workflow Integration",
      ],
    },
    {
      term: "Digital Twin",
      definition:
        "Real-time digital replica of physical assets that uses data from IoT sensors and other sources to understand performance and predict future behavior",
      relevance:
        "Built upon owner's BIM platform foundation, Digital Twin enables lifecycle asset management and predictive maintenance",
      keyAspects: [
        "Real-time Data",
        "Predictive Analytics",
        "Asset Performance",
        "Lifecycle Management",
        "IoT Integration",
      ],
    },
    {
      term: "Last Planner System (LPS)",
      definition:
        "Collaborative planning methodology within Lean Construction that focuses on reliable workflow and commitment-based planning",
      relevance:
        "Integrated into I5's collaborative planning processes via owner platforms to ensure reliable workflow and reduce variability",
      keyAspects: [
        "Collaborative Planning",
        "Commitment-based",
        "Workflow Reliability",
        "Constraint Removal",
        "Continuous Learning",
      ],
    },
    {
      term: "Kanban",
      definition:
        "Visual workflow management method that uses cards and boards to visualize work, limit work-in-progress, and maximize efficiency",
      relevance:
        "Applied within I5 project management via owner platforms to visualize project phases and optimize workflow",
      keyAspects: [
        "Visual Management",
        "Work-in-Progress Limits",
        "Flow Optimization",
        "Continuous Improvement",
        "Pull System",
      ],
    },
    {
      term: "Value Stream Mapping",
      definition:
        "Lean technique for analyzing and designing the flow of materials and information required to bring a product to completion",
      relevance:
        "Used in I5 to map and optimize the entire project delivery process from design through construction and handover",
      keyAspects: [
        "Process Visualization",
        "Waste Identification",
        "Flow Analysis",
        "Future State Design",
        "Continuous Improvement",
      ],
    },
    {
      term: "5S Methodology",
      definition:
        "Workplace organization method using five Japanese terms: Sort, Set in Order, Shine, Standardize, and Sustain",
      relevance:
        "Applied to both physical construction sites and digital workspaces within I5 to maintain organization and efficiency",
      keyAspects: [
        "Workplace Organization",
        "Waste Elimination",
        "Standardization",
        "Visual Management",
        "Continuous Discipline",
      ],
    },
    {
      term: "Statistical Process Control (SPC)",
      definition:
        "Method of quality control using statistical methods to monitor and control processes to ensure they operate efficiently",
      relevance:
        "Embedded in I5's quality management systems via owner platforms to monitor construction processes and maintain quality standards",
      keyAspects: [
        "Process Monitoring",
        "Statistical Analysis",
        "Quality Control",
        "Variation Reduction",
        "Predictive Quality",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1e35] to-[#1a2b4a] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-30"
            style={{ backgroundImage: "url('/images/hexagonal-modular-building.jpeg')" }}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1628] to-transparent"></div>

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
              <Lightbulb className="h-4 w-4 mr-2" />
              I5 Model Foundation
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight text-white">Core Principles</h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
              The foundational principles that transform conventional real estate development through the synthesis of{" "}
              <span className="text-white font-medium">Productization</span> and{" "}
              <span className="text-white font-medium">Integrated Project Delivery</span>
            </p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-600 py-5"
            >
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="backdrop-blur-sm rounded-lg p-4 border-gray-700/50 bg-transparent border-0"
                >
                  <div className="text-gray-400 mb-2">{metric.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#0a1628] border-b sticky top-0 z-40 shadow-sm border-slate-100 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-2 font-medium text-sm whitespace-nowrap transition-colors text-gray-950 border-b-8 ${
                  activeTab === index
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="p-6 border-gray-700/50 rounded-none border-0 shadow-none bg-coolGray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tab 1: Overview */}
              {activeTab === 0 && (
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
                      <h2 className="text-4xl font-light text-white mb-6">
                        Introduction to the I5 Framework's Foundational Principles
                      </h2>
                      <div className="prose prose-lg text-gray-300 space-y-4">
                        <p>
                          The I5 Real Estate Delivery Model is built upon a synthesis of{" "}
                          <strong className="text-white">Productization</strong> and{" "}
                          <strong className="text-white">Integrated Project Delivery (IPD)</strong>, creating a cohesive
                          and transformative approach to real estate development.
                        </p>
                        <p>
                          Unlike traditional methods that often lead to fragmented processes and inconsistent results,
                          the I5 Model aims to streamline how projects are designed, procured, and built, driving
                          significant improvements in speed, cost, and quality.
                        </p>
                        <p>
                          This is all underpinned by a robust digital ecosystem where{" "}
                          <strong className="text-white">
                            core digital platforms are explicitly owned, procured, administered, updated, and controlled
                            by the owner
                          </strong>
                          .
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
                        src="/images/modern-office-campus.png"
                        alt="Modern architectural design showcasing I5 principles"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>

                  {/* I5 Synthesis */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-8 md:p-12 bg-transparent border-slate-600 border-0 rounded-none border-b-0 border-t-0-0"
                  >
                    <h2 className="text-4xl font-light text-white mb-6">
                      The I5 Synthesis: Productization + IPD = Exponential Value
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      The I5 Model's core strength lies in its synergistic combination of productization and IPD, which
                      collectively generates exponential value.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-slate-600 border-b">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="rounded-xl p-8 shadow-lg border-slate-600 border-0 bg-transparent"
                    >
                      <div className="flex items-center mb-6">
                        <Building2 className="h-8 w-8 text-gray-400 mr-4" />
                        <h3 className="text-2xl font-semibold text-white">Productization</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Treats buildings as <strong className="text-white">standardized, repeatable products</strong>{" "}
                        rather than unique, bespoke projects. Adapts manufacturing principles to construction.
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          Efficiency and consistency focus
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          Proven product catalog of modular elements
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          Continuous improvement cycles
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="rounded-xl p-8 shadow-lg border-0 border-slate-600 bg-transparent"
                    >
                      <div className="flex items-center mb-6">
                        <Users className="h-6 w-6 text-gray-400 mr-4" />
                        <h3 className="text-2xl font-semibold text-white">Integrated Project Delivery</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Redefines collaboration by{" "}
                        <strong className="text-white">aligning all project participants</strong> under a single,
                        shared-risk contract and common goals from the outset.
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          Mutual accountability and transparency
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          Proactive problem-solving approach
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                          Early stakeholder engagement
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  {/* Results */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h4 className="text-2xl font-semibold text-white mb-8">
                      Verifiable Gains That Outperform Traditional Methods
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {keyMetrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="rounded-lg p-6 shadow-md border-slate-600 bg-transparent border-0"
                        >
                          <div className="text-gray-400 mb-3 flex justify-center">{metric.icon}</div>
                          <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                          <div className="text-sm text-gray-300">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Key Enablers */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-white mb-6">Key Enablers of the I5 Model</h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Five key enablers drive successful implementation, supported by a sophisticated digital
                        ecosystem
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center border-slate-600 border-t border-r-0 border-b">
                      {keyEnablers.map((enabler, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-gray-700/50 bg-transparent border-0 text-left"
                        >
                          <div className="text-gray-400 mb-6">{enabler.icon}</div>
                          <h3 className="text-xl font-semibold text-white mb-4">{enabler.title}</h3>
                          <p className="text-gray-300 mb-4">{enabler.description}</p>
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-700/50 text-gray-300">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            {enabler.benefit}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Integration with Other Frameworks */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-8 md:p-12 bg-transparent border-slate-600 border-0 md:pt-12"
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-white mb-6">Integration with Other I5 Frameworks</h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The core principles are deeply interwoven with other foundational frameworks, ensuring a
                        cohesive and integrated approach
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {frameworks.map((framework, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700/30 bg-transparent"
                        >
                          <div className="text-gray-400 mr-3 mb-3">{framework.icon}</div>
                          <h3 className="text-lg font-semibold text-white mb-2">{framework.name}</h3>
                          <p className="text-gray-300 text-sm">{framework.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Tab 2: Deep Dive */}
              {activeTab === 1 && (
                <div className="space-y-20">
                  {/* Productization Deep Dive */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                      <div>
                        <h2 className="text-4xl font-light text-white mb-6">
                          Productization: Treating Buildings as Products
                        </h2>
                        <p className="text-xl text-gray-300 mb-6">
                          Productization fundamentally redefines real estate development by treating buildings as{" "}
                          <strong className="text-white">standardized, repeatable products</strong> rather than unique,
                          bespoke endeavors.
                        </p>
                        <p className="text-gray-300">
                          This approach adapts lean manufacturing principles to construction, creating standardized
                          building solutions that can be efficiently replicated and customized.
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                      >
                        <Image
                          src="/images/modular-building.png"
                          alt="Standardized modular construction"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-slate-600 border-b">
                      {[
                        {
                          title: "Reduced Design Time",
                          description:
                            "Up to 40% reduction in design time through proven modular elements managed in the owner's BoK platform",
                          icon: <Clock className="h-6 w-6" />,
                          stat: "40%",
                          detail: "vs. 25-50% redundant effort in traditional methods",
                        },
                        {
                          title: "Improved Quality",
                          description:
                            "Standardized components and factory-controlled manufacturing lead to higher quality and fewer defects",
                          icon: <Shield className="h-6 w-6" />,
                          stat: "50-70%",
                          detail: "fewer defects vs. traditional methods",
                        },
                        {
                          title: "Cost Predictability",
                          description: "Lower contingency through shared cost library in BoK/AEC platforms",
                          icon: <DollarSign className="h-6 w-6" />,
                          stat: "3-5%",
                          detail: "vs. 5-10% in traditional methods",
                        },
                        {
                          title: "Supply Chain Optimization",
                          description: "JIT delivery and specialized supply chains via owner's AEC/SCM platforms",
                          icon: <TrendingUp className="h-6 w-6" />,
                          stat: "JIT",
                          detail: "Real-time visibility and reduced stockpiling",
                        },
                        {
                          title: "Sustainability Enhancement",
                          description: "Standardized designs optimized once for performance and replicated",
                          icon: <Lightbulb className="h-6 w-6" />,
                          stat: "30-40%",
                          detail: "waste reduction + 20-30% embodied carbon reduction",
                        },
                        {
                          title: "Process Optimization",
                          description: "Designs optimized once and replicated across multiple projects",
                          icon: <Settings className="h-6 w-6" />,
                          stat: "∞",
                          detail: "Compounding efficiency gains",
                        },
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="rounded-xl p-6 shadow-lg border-gray-700/50 bg-transparent border-0"
                        >
                          <div className="text-gray-400 mb-3">{benefit.icon}</div>
                          <div className="text-2xl font-bold text-white mb-2">{benefit.stat}</div>
                          <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                          <p className="text-gray-300 text-sm mb-2">{benefit.description}</p>
                          <p className="text-gray-400 text-xs">{benefit.detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* IPD Deep Dive */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-8 md:p-12 bg-transparent border-slate-600 border-0 border-b rounded-none"
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
                          src="/images/blue-geometric-facade.png"
                          alt="Collaborative project delivery"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div>
                        <h2 className="text-4xl font-light text-white mb-6">
                          Integrated Project Delivery: Collaborative Contracts
                        </h2>
                        <p className="text-xl text-gray-300 mb-6">
                          IPD is a collaborative project delivery approach that aligns people, systems, business
                          structures, and practices to optimize project results and maximize efficiency.
                        </p>
                        <p className="text-gray-300">
                          It fundamentally shifts away from traditional, often adversarial, contract models toward
                          shared accountability and mutual success.
                        </p>
                      </div>
                    </div>

                    {/* IPD Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-0 gap-y-0 rounded-none">
                      {[
                        {
                          title: "Enhanced Collaboration",
                          description:
                            "60-70% reduction in design coordination issues through single multi-party agreements",
                          icon: <Users className="h-6 w-6" />,
                          stat: "60-70%",
                        },
                        {
                          title: "Faster Delivery",
                          description: "3x more likely to complete ahead of schedule through concurrent activities",
                          icon: <Clock className="h-6 w-6" />,
                          stat: "3x",
                        },
                        {
                          title: "Cost Certainty",
                          description: "2.5x more likely to complete under budget due to shared incentives",
                          icon: <DollarSign className="h-6 w-6" />,
                          stat: "2.5x",
                        },
                        {
                          title: "Improved Decision-Making",
                          description: "Real-time information sharing via owner-controlled CDE platforms",
                          icon: <BarChart3 className="h-6 w-6" />,
                          stat: "Real-time",
                        },
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-6 border-gray-700/50 rounded-none border-0 bg-transparent shadow-none"
                        >
                          <div className="text-gray-400 mb-4">{benefit.icon}</div>
                          <div className="text-2xl font-bold text-white mb-2">{benefit.stat}</div>
                          <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                          <p className="text-gray-300">{benefit.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Synergy Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h2 className="text-4xl font-light text-white mb-8">
                      The Synergy: Productization + IPD = Exponential Value
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-xl p-8 shadow-lg border bg-transparent border-slate-600"
                      >
                        <div className="flex justify-center mb-6">
                          <Database className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Integrated Digital Backbone</h3>
                        <p className="text-gray-300 mb-4">
                          Owner-controlled platforms (AEC, BoK, VS) provide single source of truth and seamless data
                          flow
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                          30-40% improved communication + 50-70% fewer documentation errors
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="rounded-xl p-8 shadow-lg border border-slate-600 bg-transparent"
                      >
                        <div className="flex justify-center mb-6">
                          <GitBranch className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
                        <p className="text-gray-300 mb-4">
                          Agile feedback loops refine design templates via BoK platform for systematic improvement
                        </p>
                        <div className="text-sm font-medium text-gray-400">Systematic improvement cycle</div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-xl p-8 shadow-lg border bg-transparent border-slate-600"
                      >
                        <div className="flex justify-center mb-6">
                          <TrendingUp className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Scalability</h3>
                        <p className="text-gray-300 mb-4">
                          Clear blueprint for scaling success across multiple projects with compounding returns
                        </p>
                        <div className="text-sm font-medium text-gray-400">Institutionalized efficiencies</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
