"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import {
  Users,
  FileText,
  BarChart3,
  CheckCircle,
  Settings,
  Target,
  Database,
  Briefcase,
  UserPlus,
  UserCheck,
  LineChart,
  ClipboardCheck,
  Cog,
  Zap,
  Clock,
} from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export default function OrganizationalFrameworkPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const tabs = [
    "Overview",
    "Key Roles & Structure",
    "Governance Framework",
    "Supply Chain Integration",
    "Capability Development",
    "Steady-State Operations",
  ]

  const keyMetrics = [
    { value: "25-35%", label: "Faster Delivery", color: "blue" },
    { value: "15-25%", label: "Cost Savings", color: "green" },
    { value: "±2%", label: "Cost Variance", color: "purple" },
    { value: "50-70%", label: "Fewer Defects", color: "orange" },
  ]

  const keyRoles = [
    {
      title: "Product Portfolio Director",
      description: "Provides strategic oversight of product lines and market alignment",
      icon: <Briefcase className="h-8 w-8" />,
      platformUse: "Utilizes aggregated data from owner platforms for strategic decisions",
    },
    {
      title: "Product Manager",
      description: "Leads specific product lines end-to-end, balancing customer needs with technical feasibility",
      icon: <Target className="h-8 w-8" />,
      platformUse: "Manages product lifecycle within owner platforms (BoK, AEC, etc.)",
    },
    {
      title: "Design Standards Manager",
      description: "Develops and maintains standardized design elements and configuration guidelines",
      icon: <FileText className="h-8 w-8" />,
      platformUse: "Works within the owner's BoK platform, using AEC/DfMA platforms for validation",
    },
    {
      title: "Manufacturing Integration Lead",
      description: "Optimizes designs for factory production and supply chain coordination",
      icon: <Settings className="h-8 w-8" />,
      platformUse: "Uses owner platforms (DfMA) and defines integration requirements for partner systems",
    },
    {
      title: "Digital Delivery Lead",
      description: "Manages the owner's BIM, Virtual Showroom, and other digital platforms",
      icon: <Database className="h-8 w-8" />,
      platformUse: "Administers owner platforms (AEC, DfMA, BoK, VS) and oversees integration points",
    },
    {
      title: "Quality Systems Manager",
      description: "Develops and enforces quality standards across design, manufacturing, and assembly",
      icon: <ClipboardCheck className="h-8 w-8" />,
      platformUse: "Manages quality data within owner platforms (AEC/Quality)",
    },
  ]

  const governanceFramework = [
    {
      level: "Strategic",
      description: "Product portfolio decisions, major investments, market entry/exit",
      authority: "Executive Leadership Team",
      techGovernance: "Decisions on major platform investments or strategic technology partnerships",
    },
    {
      level: "Product Development",
      description: "Product features, specifications, standardization approaches",
      authority: "Product Portfolio Director",
      techGovernance: "Decisions on standard components managed within BoK/DfMA platforms",
    },
    {
      level: "Technical",
      description: "Design standards, manufacturing processes, technical specifications",
      authority: "Technical Steering Committee",
      techGovernance: "Decisions on platform configurations, integration standards, core technical parameters",
    },
    {
      level: "Operational",
      description: "Daily workflow decisions, resource allocation, scheduling",
      authority: "Product Manager",
      techGovernance: "Day-to-day operational decisions leveraging platform data",
    },
    {
      level: "Technology Governance",
      description: "Platform administration, access rights, integration requirements",
      authority: "Owner (per established governance)",
      techGovernance: "Explicit owner authority over platform control, partner access, and requirements",
    },
  ]

  const partnerSelectionCriteria = [
    {
      criteria: "Technical Capability",
      description: "Experience with DfMA, manufacturing capacity, quality systems, and technical innovation",
      icon: <Cog className="h-6 w-6" />,
    },
    {
      criteria: "Collaborative Potential",
      description: "IPD experience, cultural alignment, communication systems, and willingness to share information",
      icon: <Users className="h-6 w-6" />,
    },
    {
      criteria: "Digital Readiness",
      description: "Ability to interact effectively with owner platforms and meet data exchange standards",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      criteria: "Financial Stability",
      description: "Ability to invest in necessary technology integration if required by the owner",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      criteria: "Performance Track Record",
      description: "Demonstrated reliability in meeting schedules/quality managed via owner platforms",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      criteria: "Strategic Alignment",
      description: "Compatibility with the owner's digital transformation vision",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  const roleTransformations = [
    {
      traditional: "Project Manager",
      i5Role: "Product Manager",
      responsibilities: "Product lifecycle management, standardization oversight, continuous improvement",
      skills:
        "Product management, standardization principles, manufacturing knowledge, platform proficiency (AEC, BoK)",
    },
    {
      traditional: "Design Manager",
      i5Role: "Design Standards Manager",
      responsibilities: "Component standardization, design system management, configuration guidelines",
      skills: "DfMA principles, parametric design, product platform knowledge, platform proficiency (BoK, AEC, DfMA)",
    },
    {
      traditional: "Procurement Manager",
      i5Role: "Supply Chain Integration Manager",
      responsibilities: "Strategic partnership development, JIT implementation, logistics optimization",
      skills: "Partnership management, integrated planning, logistics optimization, platform proficiency (SCM, AEC)",
    },
    {
      traditional: "IT / Systems Admin",
      i5Role: "Digital Platform Admin / Support",
      responsibilities: "Administering owner platforms, managing user access, supporting integration",
      skills: "Platform-specific administration skills, cloud infrastructure management, API management, cybersecurity",
    },
  ]

  const steadyStateUnits = [
    {
      unit: "Product Management",
      functions: "Market analysis, product strategy, roadmap development, product performance oversight",
      techFocus: "Utilizes aggregated performance data from owner platforms for strategic decisions",
      icon: <Target className="h-6 w-6" />,
    },
    {
      unit: "Design and Engineering",
      functions: "Standard design maintenance, product configuration, design optimization, technical documentation",
      techFocus: "Core users and contributors to BoK, AEC, DfMA platforms. Defines design data for partners",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      unit: "Manufacturing Operations",
      functions: "Component production, quality assurance, production planning, inventory management",
      techFocus: "Coordinates with partners via owner platforms; Monitors partner production data feeds",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      unit: "Digital Systems / IT",
      functions: "Platform administration, system integration management, data governance, technical support",
      techFocus: "Owns, administers, updates, controls the core owner platforms; Manages partner access",
      icon: <Database className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(/images/geometric-crystal-building.png)`,
            y,
          }}
        />
        {/* Background overlay div removed as requested */}

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
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-blue-100 mb-8"
            >
              <Users className="h-4 w-4 mr-2" />
              I5 Organizational Structure
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">Organizational Framework</h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
              A fundamental transformation in organizational structure, moving from traditional silos to{" "}
              <span className="text-white font-medium">integrated, cross-functional teams</span> that leverage{" "}
              <span className="text-white font-medium">owner-controlled digital platforms</span> for seamless
              collaboration
            </p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="backdrop-blur-sm rounded-lg p-4 border border-white/20 bg-transparent"
                >
                  <div className={`text-${metric.color}-400 mb-2`}>
                    {index === 0 && <Zap className="h-6 w-6 text-blue-600" />}
                    {index === 1 && <BarChart3 className="h-6 w-6 text-blue-600" />}
                    {index === 2 && <Target className="h-6 w-6 text-[rgba(37,99,235,1)]" />}
                    {index === 3 && <CheckCircle className="h-6 w-6 text-[rgba(37,99,235,1)]" />}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-blue-100">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
      <section className="bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 rounded-none shadow-none border-b"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tab 0: Overview */}
            {activeTab === 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* Introduction Section */}
                <section className="py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-6">
                        Introduction to the I5 Organizational Framework
                      </h2>
                      <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                          The I5 Real Estate Delivery Model necessitates a fundamental transformation in organizational
                          structure, moving from traditional silos to integrated, cross-functional teams that leverage
                          digital platforms for seamless collaboration.
                        </p>
                        <p>
                          This section clarifies the organizational setup required for the I5 Model, its implementation,
                          and its steady-state condition, highlighting the benefits of adopting this framework. Central
                          to this transformation is the strategic role of{" "}
                          <strong>owner-controlled core digital platforms</strong>, which serve as the technological
                          backbone for efficient real estate development and continuous improvement.
                        </p>
                        <p>
                          The I5 Model provides a structured pathway to achieve significant improvements in speed, cost,
                          and quality by embedding productization principles within a collaborative structure that
                          incentivizes continuous improvement.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-none"
                    >
                      <Image
                        src="/images/geometric-crystal-building.png"
                        alt="Modern organizational structure with integrated teams"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>
                </section>

                {/* Key Benefits Section */}
                <section className="py-16 bg-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-gray-900 mb-6 py-2 border-b">Key Benefits of the I5 Framework</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Organizations implementing the I5 Model can realize significant improvements across multiple
                        dimensions
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-6 shadow-sm"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Organizational Benefits</h3>
                        <div className="space-y-4">
                          {[
                            "Better collaboration across departments",
                            "Reduced handover errors between teams",
                            "Accelerated decision-making processes",
                            "Continuity of knowledge throughout product lifecycle",
                            "Enhanced cross-functional integration",
                            "Improved organizational agility",
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-6 shadow-sm"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Performance Benefits</h3>
                        <div className="space-y-4">
                          {[
                            "25-35% faster delivery times",
                            "15-25% cost savings",
                            "±2% cost variance improvement",
                            "50-70% reduction in defects",
                            "Enhanced quality consistency",
                            "Improved customer satisfaction",
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </section>

                {/* Product-Based Teams Section */}
                <section className="py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Product-Based Team Structure</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Organizations should establish dedicated teams organized around specific product lines rather
                        than individual projects
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          title: "Cross-Functional Integration",
                          description:
                            "Teams include representation from design, engineering, manufacturing, construction, and customer-facing functions",
                          icon: <Users className="h-8 w-8" />,
                        },
                        {
                          title: "Product Lifecycle Focus",
                          description:
                            "Teams manage entire product lifecycle from conception to delivery and continuous improvement",
                          icon: <Target className="h-8 w-8" />,
                        },
                        {
                          title: "Knowledge Continuity",
                          description:
                            "Body of Knowledge (BoK) platform ensures continuity of knowledge throughout the product lifecycle",
                          icon: <Database className="h-8 w-8" />,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <div className="text-blue-600">{item.icon}</div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{item.title}</h3>
                          <p className="text-gray-600 text-center">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Digital Platform Integration */}
                <section className="py-16 bg-[rgba(10,22,40,1)]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <h2 className="text-4xl font-light mb-8 text-white">
                        Owner-Controlled Digital Platform Integration
                      </h2>
                      <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-100">
                        Central to the I5 organizational transformation is the strategic role of owner-controlled core
                        digital platforms
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                          {
                            name: "Body of Knowledge (BoK)",
                            description:
                              "Central repository for standards, configurations, and organizational knowledge",
                            icon: <Database className="h-8 w-8" />,
                          },
                          {
                            name: "AEC Platform",
                            description: "Integrated project management and Building Information Modeling (BIM) hub",
                            icon: <FileText className="h-8 w-8" />,
                          },
                          {
                            name: "Design for Manufacture (DfMA)",
                            description: "Engineering platform for off-site manufacturing and assembly optimization",
                            icon: <Settings className="h-8 w-8" />,
                          },
                          {
                            name: "Virtual Showroom (VS)",
                            description: "Customer-facing platform for product visualization and configuration",
                            icon: <Target className="h-8 w-8" />,
                          },
                        ].map((platform, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 border border-slate-600 rounded-lg bg-slate-800/50"
                          >
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                              <div className="text-white">{platform.icon}</div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">{platform.name}</h3>
                            <p className="text-slate-300 text-sm">{platform.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Framework Components Overview */}
                <section className="py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Framework Components Overview</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The I5 Organizational Framework encompasses multiple interconnected components
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          component: "Key Roles & Structure",
                          description: "Essential roles and organizational structure for I5 implementation",
                          features: [
                            "Product Portfolio Director",
                            "Design Standards Manager",
                            "Digital Delivery Lead",
                            "Quality Systems Manager",
                          ],
                        },
                        {
                          component: "Governance Framework",
                          description: "Decision-making authority and oversight protocols",
                          features: [
                            "Strategic Decision Making",
                            "Gate Reviews",
                            "Quality Management",
                            "Performance Measurement",
                          ],
                        },
                        {
                          component: "Supply Chain Integration",
                          description: "Tightly integrated supply chain for precision delivery",
                          features: [
                            "Partner Selection Criteria",
                            "JIT Implementation",
                            "Strategic Partnerships",
                            "Technology Integration",
                          ],
                        },
                        {
                          component: "Capability Development",
                          description: "Structured approach to building required capabilities",
                          features: [
                            "Role Transformations",
                            "Learning Pathways",
                            "Skill Development",
                            "Platform Proficiency",
                          ],
                        },
                        {
                          component: "Steady-State Operations",
                          description: "Sustainable operations for ongoing product management",
                          features: [
                            "Product-Based Units",
                            "Continuous Improvement",
                            "Performance Monitoring",
                            "Knowledge Management",
                          ],
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.component}</h3>
                          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-2">Key Features:</div>
                            <ul className="list-disc list-inside text-xs text-gray-600">
                              {item.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>

                {/* Implementation Pathway */}
                <section className="py-16 bg-gray-50">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Implementation Pathway</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The transition from implementation to steady-state operations requires establishing stable
                        structures, processes, and management systems
                      </p>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          phase: "Phase 1: Foundation",
                          description: "Establish core organizational structure and digital platforms",
                          duration: "3-6 months",
                          activities: [
                            "Define key roles",
                            "Implement core platforms",
                            "Establish governance structure",
                            "Begin capability development",
                          ],
                        },
                        {
                          phase: "Phase 2: Integration",
                          description: "Integrate supply chain partners and refine processes",
                          duration: "6-12 months",
                          activities: [
                            "Partner selection and onboarding",
                            "Process optimization",
                            "Quality system implementation",
                            "Performance measurement setup",
                          ],
                        },
                        {
                          phase: "Phase 3: Optimization",
                          description: "Optimize operations and achieve steady-state performance",
                          duration: "12-18 months",
                          activities: [
                            "Continuous improvement implementation",
                            "Advanced capability development",
                            "Performance optimization",
                            "Knowledge management maturation",
                          ],
                        },
                      ].map((phase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-6 shadow-sm"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 bg-transparent text-blue-500 border-blue-500 border-2">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                                <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                              </div>
                              <p className="text-gray-600 mb-4">{phase.description}</p>
                              <div>
                                <div className="text-sm font-medium text-gray-700 mb-2">Key Activities:</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {phase.activities.map((activity, i) => (
                                    <div key={i} className="flex items-center space-x-2">
                                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                      <span className="text-sm text-gray-600">{activity}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              </section>
            )}

            {/* Tab 1: Key Roles & Structure */}
            {activeTab === 1 && (
              <>
                {/* Introduction Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Key Roles & Organizational Structure</h2>
                      <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                          The I5 Model requires dedicated teams organized around specific product lines rather than
                          individual projects, ensuring representation from all key functions and seamless integration
                          across the entire delivery process.
                        </p>
                        <p>
                          Each role is specifically designed to leverage{" "}
                          <strong>owner-controlled digital platforms</strong>, creating a cohesive ecosystem where data
                          flows seamlessly and decisions are made based on real-time, accurate information.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-none"
                    >
                      <Image
                        src="/images/geometric-crystal-building.png"
                        alt="Organizational structure with cross-functional teams"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>
                </section>

                {/* Key Roles Grid Section */}
                <section className="w-full py-16 bg-[rgba(10,22,40,1)]">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-white mb-6">Essential Roles in the I5 Model</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                          Each role is strategically designed to maximize the value of owner-controlled platforms while
                          ensuring seamless collaboration across all functions
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {keyRoles.map((role, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-transparent border-b-2 border-slate-500 shadow-none rounded-none"
                          >
                            <div className="text-blue-600 mb-6">{role.icon}</div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-50">{role.title}</h3>
                            <p className="mb-6 text-slate-500">{role.description}</p>

                            <div className="p-4 rounded-lg bg-transparent">
                              <h4 className="text-sm font-semibold mb-2 text-slate-100">Platform Interaction:</h4>
                              <p className="text-sm text-slate-200">{role.platformUse}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* RACI Matrix Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-none shadow-none border-b-0 py-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-none border-0 border-blue-600 rounded-none border-t-0"
                  >
                    <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
                      Sample RACI Matrix for Product Configuration Phase
                    </h2>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Activity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Product Manager
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Design Standards Manager
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Manufacturing Lead
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Digital Delivery Lead
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            {
                              activity: "Schematic Design Development",
                              pm: "A",
                              dsm: "R",
                              ml: "C",
                              ddl: "C",
                            },
                            {
                              activity: "Digital Model Validation",
                              pm: "C",
                              dsm: "C",
                              ml: "C",
                              ddl: "A/R",
                            },
                            {
                              activity: "Manufacturing Feasibility Assessment",
                              pm: "C",
                              dsm: "C",
                              ml: "A/R",
                              ddl: "I",
                            },
                            {
                              activity: "Cost Optimization",
                              pm: "C",
                              dsm: "C",
                              ml: "R",
                              ddl: "C",
                            },
                            {
                              activity: "Configuration Rules Definition (BoK)",
                              pm: "A",
                              dsm: "R",
                              ml: "C",
                              ddl: "C",
                            },
                          ].map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {row.activity}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.pm}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.dsm}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.ml}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.ddl}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Note:</span> A=Accountable, R=Responsible, C=Consulted,
                        I=Informed
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Role Transformations Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent shadow-none py-7">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-gray-900 mb-6 py-2 border-b">Role Transformations</h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Key adaptations required for traditional roles to succeed in the I5 Model
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {roleTransformations.map((role, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-6 shadow-none py-2.5"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-transparent">
                              <UserCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Traditional Role</div>
                              <h3 className="text-lg font-semibold text-gray-900">{role.traditional}</h3>
                            </div>
                          </div>

                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-transparent">
                              <UserPlus className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">I5 Model Role</div>
                              <h3 className="text-lg font-semibold text-gray-900">{role.i5Role}</h3>
                            </div>
                          </div>

                          <div className="mt-4 space-y-3">
                            <div>
                              <div className="text-sm font-medium text-gray-700 mb-1">New Responsibilities:</div>
                              <p className="text-sm text-gray-600">{role.responsibilities}</p>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-700 mb-1">Required Skill Development:</div>
                              <p className="text-sm text-gray-600">{role.skills}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>
                {/* External Partner Role Transformation Examples */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-gray-900 mb-6">
                        External Partner Role Transformation Examples
                      </h2>
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        How external partner roles adapt within the I5 Model
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {[
                        {
                          traditional: "Subcontractor",
                          i5Role: "Integrated Manufacturing Partner",
                          responsibilities:
                            "Component manufacturing, quality assurance, JIT delivery, data exchange with owner platforms",
                          skills:
                            "Manufacturing expertise, quality control, platform proficiency (DfMA, SCM), data management",
                        },
                        {
                          traditional: "Design Consultant",
                          i5Role: "Design Standards Specialist",
                          responsibilities:
                            "Component design, configuration rules, design system management, platform integration",
                          skills:
                            "DfMA principles, parametric design, platform proficiency (BoK, AEC, DfMA), standardization",
                        },
                        {
                          traditional: "Logistics Provider",
                          i5Role: "Integrated Logistics Partner",
                          responsibilities:
                            "JIT delivery, logistics optimization, real-time tracking, data integration with owner platforms",
                          skills:
                            "Logistics management, data integration, platform proficiency (SCM, AEC), real-time tracking",
                        },
                      ].map((role, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-lg p-6 shadow-none"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-transparent">
                              <UserCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Traditional Role</div>
                              <h3 className="text-lg font-semibold text-gray-900">{role.traditional}</h3>
                            </div>
                          </div>

                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-transparent">
                              <UserPlus className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">I5 Model Role</div>
                              <h3 className="text-lg font-semibold text-gray-900">{role.i5Role}</h3>
                            </div>
                          </div>

                          <div className="mt-4 space-y-3">
                            <div>
                              <div className="text-sm font-medium text-gray-700 mb-1">New Responsibilities:</div>
                              <p className="text-sm text-gray-600">{role.responsibilities}</p>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-700 mb-1">Required Skill Development:</div>
                              <p className="text-sm text-gray-600">{role.skills}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              </>
            )}

            {/* Tab 2: Governance Framework */}
            {activeTab === 2 && (
              <>
                {/* Introduction Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-6">
                        Introduction to the I5 Governance Framework
                      </h2>
                      <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                          Effective governance ensures the I5 Model operates according to established standards and
                          processes, with appropriate oversight and decision-making protocols across all organizational
                          levels.
                        </p>
                        <p>
                          Central to this transformation is the strategic role of{" "}
                          <strong>owner-controlled core digital platforms</strong>, which serve as the technological
                          backbone for efficient real estate development and continuous improvement.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-none"
                    >
                      <Image
                        src="/images/stacked-geometric-volumes.png"
                        alt="Modern governance structure with integrated oversight"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>
                </section>

                {/* Integration with Other I5 Frameworks */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Integration with Other I5 Frameworks</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          The Governance Framework operates as part of a cohesive system, deeply interconnected with
                          other core I5 frameworks
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          {
                            name: "Core Principles",
                            icon: <Zap className="h-6 w-6" />,
                            connection: "Productization & IPD implementation",
                          },
                          {
                            name: "Operational Ecosystem",
                            icon: <Users className="h-6 w-6" />,
                            connection: "Digital platform integration",
                          },
                          {
                            name: "Delivery Framework",
                            icon: <Settings className="h-6 w-6" />,
                            connection: "Process implementation",
                          },
                          {
                            name: "Financial Framework",
                            icon: <BarChart3 className="h-6 w-6" />,
                            connection: "Investment planning & ROI",
                          },
                          {
                            name: "Procurement & Contracts",
                            icon: <FileText className="h-6 w-6" />,
                            connection: "Collaborative contracting",
                          },
                          {
                            name: "KPIs & Risk Framework",
                            icon: <Target className="h-6 w-6" />,
                            connection: "Performance monitoring",
                          },
                        ].map((framework, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <div className="text-blue-600">{framework.icon}</div>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900">{framework.name}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{framework.connection}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Owner-Controlled Digital Platforms */}
                <section className="py-16 bg-[rgba(10,22,40,1)]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <h2 className="text-4xl font-light mb-8 text-white">Owner-Controlled Digital Platforms</h2>
                      <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-100">
                        Central to the I5 Governance Framework is the strategic role of owner-controlled core digital
                        platforms that serve as the technological backbone
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                          {
                            name: "Body of Knowledge (BoK)",
                            description:
                              "Central repository for standards, configurations, and organizational knowledge",
                            icon: <Database className="h-8 w-8" />,
                          },
                          {
                            name: "AEC Platform",
                            description: "Integrated project management and Building Information Modeling (BIM) hub",
                            icon: <FileText className="h-8 w-8" />,
                          },
                          {
                            name: "Design for Manufacture (DfMA)",
                            description: "Engineering platform for off-site manufacturing and assembly optimization",
                            icon: <Settings className="h-8 w-8" />,
                          },
                          {
                            name: "Virtual Showroom (VS)",
                            description: "Customer-facing platform for product visualization and configuration",
                            icon: <Target className="h-8 w-8" />,
                          },
                        ].map((platform, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 border border-slate-600 rounded-lg bg-slate-800/50"
                          >
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                              <div className="text-white">{platform.icon}</div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-white">{platform.name}</h3>
                            <p className="text-slate-300 text-sm">{platform.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Key Benefits Section */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6 pb-2 border-b">Key Benefits of the I5 Framework</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          The I5 Model provides a structured pathway to achieve significant improvements in speed, cost,
                          and quality by embedding governance principles within a collaborative structure
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-6">Governance Benefits</h3>
                          <div className="space-y-4">
                            {[
                              "Clear decision-making authority at all levels",
                              "Standardized processes and quality controls",
                              "Improved risk management and compliance",
                              "Enhanced accountability and transparency",
                              "Better resource allocation and oversight",
                              "Streamlined approval processes and gate reviews",
                            ].map((benefit, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-6">Digital Platform Benefits</h3>
                          <div className="space-y-4">
                            {[
                              "Centralized control over core platforms",
                              "Consistent data governance and security",
                              "Integrated performance monitoring",
                              "Standardized partner integration protocols",
                              "Real-time visibility into operations",
                              "Enhanced knowledge management and learning",
                            ].map((benefit, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Decision Authority Framework */}
                <section className="bg-transparent py-4">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl mb-6 py-2 border-b-0 rounded-full bg-blue-100 text-blue-500 font-medium">Decision Authority Framework</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Clear delineation of decision-making authority across organizational levels
                        </p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Level
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Decision Types
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Decision Authority
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Technology Governance
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {governanceFramework.map((level, index) => (
                              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {level.level}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{level.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{level.authority}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{level.techGovernance}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Quality Management System */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6 pb-2 border-b">Quality Management System</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Comprehensive quality management approach integrated with owner-controlled platforms
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          {
                            component: "Quality Standards",
                            description:
                              "Comprehensive standards for design, manufacturing, and assembly managed through the BoK platform",
                            icon: <ClipboardCheck className="h-8 w-8" />,
                          },
                          {
                            component: "Quality Control Processes",
                            description:
                              "Standardized inspection and testing protocols integrated with the AEC and DfMA platforms",
                            icon: <CheckCircle className="h-8 w-8" />,
                          },
                          {
                            component: "Continuous Improvement",
                            description:
                              "Structured approach to capturing lessons learned and implementing improvements through the BoK platform",
                            icon: <LineChart className="h-8 w-8" />,
                          },
                          {
                            component: "Partner Quality Integration",
                            description:
                              "Requirements for partner quality systems and data exchange with owner platforms",
                            icon: <Users className="h-8 w-8" />,
                          },
                          {
                            component: "Quality Metrics",
                            description:
                              "Real-time quality performance monitoring through integrated digital platforms",
                            icon: <BarChart3 className="h-8 w-8" />,
                          },
                          {
                            component: "Quality Governance",
                            description: "Clear roles and responsibilities for quality oversight and improvement",
                            icon: <Target className="h-8 w-8" />,
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                              <div className="text-blue-600">{item.icon}</div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{item.component}</h3>
                            <p className="text-gray-600 text-center">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Gate Review Process */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Gate Review Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Structured approach to product development with clear decision points
                        </p>
                      </div>

                      <div className="space-y-8">
                        {[
                          {
                            gate: "Gate 1: Concept Approval",
                            description:
                              "Review of initial product concept, market analysis, and business case for development",
                            criteria: [
                              "Market demand validation",
                              "Alignment with portfolio strategy",
                              "Preliminary financial feasibility",
                              "Technical feasibility assessment",
                            ],
                            authority: "Product Portfolio Director",
                          },
                          {
                            gate: "Gate 2: Design Standards Approval",
                            description:
                              "Review of standardized design elements, configuration rules, and manufacturing approach",
                            criteria: [
                              "Compliance with design standards",
                              "Manufacturing feasibility",
                              "Cost optimization assessment",
                              "Quality standards compliance",
                            ],
                            authority: "Technical Steering Committee",
                          },
                          {
                            gate: "Gate 3: Production Readiness",
                            description:
                              "Review of manufacturing setup, supply chain integration, and production planning",
                            criteria: [
                              "Manufacturing process validation",
                              "Supply chain readiness",
                              "Quality control implementation",
                              "Production capacity confirmation",
                            ],
                            authority: "Product Manager",
                          },
                          {
                            gate: "Gate 4: Market Launch",
                            description: "Review of market readiness, sales approach, and customer engagement strategy",
                            criteria: [
                              "Marketing materials readiness",
                              "Sales team training completion",
                              "Customer support readiness",
                              "Virtual Showroom implementation",
                            ],
                            authority: "Product Portfolio Director",
                          },
                        ].map((gate, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-semibold text-gray-900">{gate.gate}</h3>
                                  <span className="text-sm text-blue-600 font-medium">Authority: {gate.authority}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{gate.description}</p>
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-2">Key Criteria:</div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {gate.criteria.map((criterion, i) => (
                                      <div key={i} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{criterion}</span>
                                      </div>
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
                </section>
              </>
            )}

            {/* Tab 3: Supply Chain Integration */}
            {activeTab === 3 && (
              <>
                {/* Introduction Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Supply Chain Integration</h2>
                      <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                          The I5 Model requires a tightly integrated supply chain that leverages digital platforms for
                          seamless coordination, Just-In-Time delivery, and continuous improvement.
                        </p>
                        <p>
                          This section outlines the approach to partner selection, integration, and management within
                          the I5 Model, with a focus on the strategic role of{" "}
                          <strong>owner-controlled digital platforms</strong> in facilitating this integration.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-none"
                    >
                      <Image
                        src="/images/blue-geometric-facade.png"
                        alt="Integrated supply chain visualization"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>
                </section>

                {/* Partner Selection Criteria */}
                <section className="py-16 bg-[rgba(10,22,40,1)]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-white mb-6">Partner Selection Criteria</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                          Key criteria for selecting partners that can effectively integrate with the I5 Model
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partnerSelectionCriteria.map((criteria, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-transparent border-b-2 border-slate-500 shadow-none rounded-none"
                          >
                            <div className="text-blue-600 mb-6">{criteria.icon}</div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-50">{criteria.criteria}</h3>
                            <p className="text-slate-500">{criteria.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Digital Integration Requirements */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Digital Integration Requirements</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Technical requirements for partners to integrate with owner-controlled digital platforms
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-xl p-6 shadow-sm"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Exchange Requirements</h3>
                          <div className="space-y-4">
                            {[
                              "API integration with owner platforms",
                              "Real-time data sharing capabilities",
                              "Standardized data formats and protocols",
                              "Secure data transmission methods",
                              "Automated reporting capabilities",
                              "Data validation and quality controls",
                            ].map((requirement, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{requirement}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="bg-white rounded-xl p-6 shadow-sm"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-6">System Requirements</h3>
                          <div className="space-y-4">
                            {[
                              "Compatible software systems",
                              "Adequate hardware infrastructure",
                              "Cybersecurity protocols and compliance",
                              "User access management capabilities",
                              "System availability and reliability",
                              "Disaster recovery and backup systems",
                            ].map((requirement, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{requirement}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Just-In-Time Implementation */}
                <section className="py-16 bg-transparent">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl mb-6 py-2 rounded-full bg-blue-100 text-blue-500 font-medium">Just-In-Time Implementation</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Approach to implementing JIT delivery within the I5 Model
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          {
                            component: "Digital Coordination",
                            description:
                              "Real-time coordination through owner platforms to synchronize production and delivery",
                            icon: <Clock className="h-8 w-8" />,
                          },
                          {
                            component: "Production Scheduling",
                            description:
                              "Integrated scheduling across the supply chain to minimize inventory and maximize efficiency",
                            icon: <LineChart className="h-8 w-8" />,
                          },
                          {
                            component: "Logistics Optimization",
                            description:
                              "Optimized logistics planning to ensure timely delivery of components and materials",
                            icon: <Target className="h-8 w-8" />,
                          },
                          {
                            component: "Buffer Management",
                            description:
                              "Strategic buffer management to mitigate risks while minimizing inventory costs",
                            icon: <Settings className="h-8 w-8" />,
                          },
                          {
                            component: "Performance Monitoring",
                            description: "Real-time monitoring of JIT performance through integrated digital platforms",
                            icon: <BarChart3 className="h-8 w-8" />,
                          },
                          {
                            component: "Continuous Improvement",
                            description: "Structured approach to continuously improving JIT implementation",
                            icon: <LineChart className="h-8 w-8" />,
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                              <div className="text-blue-600">{item.icon}</div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{item.component}</h3>
                            <p className="text-gray-600 text-center">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Strategic Partnership Models */}
                <section className="bg-white py-8">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="bg-white py-8"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="bg-white py-1.5 font-medium text-3xl border-b">Strategic Partnership Models</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto py-2">
                          Different partnership models that can be implemented within the I5 framework
                        </p>
                      </div>

                      <div className="space-y-8">
                        {[
                          {
                            model: "Integrated Partner Network",
                            description:
                              "Network of strategic partners with deep integration into owner platforms and processes",
                            benefits: [
                              "Seamless coordination across the supply chain",
                              "Shared knowledge and continuous improvement",
                              "Reduced transaction costs and improved efficiency",
                              "Enhanced quality control and consistency",
                            ],
                            challenges: [
                              "Requires significant investment in integration",
                              "Partner selection and onboarding complexity",
                              "Potential dependency on key partners",
                              "Governance complexity across multiple organizations",
                            ],
                          },
                          {
                            model: "Manufacturing Alliance",
                            description:
                              "Strategic alliance with key manufacturing partners to optimize production and delivery",
                            benefits: [
                              "Specialized manufacturing expertise",
                              "Economies of scale in production",
                              "Shared investment in manufacturing capabilities",
                              "Enhanced quality control through specialization",
                            ],
                            challenges: [
                              "Coordination complexity across multiple manufacturers",
                              "Potential conflicts in production scheduling",
                              "Quality consistency across different manufacturers",
                              "Technology integration across different systems",
                            ],
                          },
                          {
                            model: "Vertical Integration",
                            description:
                              "Owner-controlled manufacturing capabilities for critical components or processes",
                            benefits: [
                              "Direct control over critical processes",
                              "Reduced dependency on external partners",
                              "Enhanced intellectual property protection",
                              "Streamlined coordination and decision-making",
                            ],
                            challenges: [
                              "Significant capital investment required",
                              "Operational complexity and management overhead",
                              "Potential lack of flexibility and scalability",
                              "Risk of internal inefficiencies without market pressure",
                            ],
                          },
                        ].map((model, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm pt-3.5"
                          >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{model.model}</h3>
                            <p className="text-gray-600 mb-6">{model.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-medium text-gray-900 mb-4">Benefits</h4>
                                <div className="space-y-2">
                                  {model.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start space-x-2">
                                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-gray-600">{benefit}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-lg font-medium text-gray-900 mb-4">Challenges</h4>
                                <div className="space-y-2">
                                  {model.challenges.map((challenge, i) => (
                                    <div key={i} className="flex items-start space-x-2">
                                      <Clock className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-gray-600">{challenge}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Partner Onboarding Process */}
                <section className="py-16 pt-4 bg-transparent">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6 pb-2 border-b">Partner Onboarding Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Structured approach to onboarding new partners into the I5 ecosystem
                        </p>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            phase: "Phase 1: Selection & Due Diligence",
                            description: "Comprehensive assessment of potential partners against selection criteria",
                            duration: "1-2 months",
                            activities: [
                              "Technical capability assessment",
                              "Financial stability evaluation",
                              "Cultural alignment assessment",
                              "Digital readiness evaluation",
                            ],
                          },
                          {
                            phase: "Phase 2: Integration Planning",
                            description: "Detailed planning for technical, process, and organizational integration",
                            duration: "1-2 months",
                            activities: [
                              "Technical integration planning",
                              "Process alignment and mapping",
                              "Organizational integration planning",
                              "Performance metrics definition",
                            ],
                          },
                          {
                            phase: "Phase 3: Technical Integration",
                            description: "Implementation of technical integration with owner platforms",
                            duration: "2-3 months",
                            activities: [
                              "API integration implementation",
                              "Data exchange setup",
                              "System testing and validation",
                              "User access and security setup",
                            ],
                          },
                          {
                            phase: "Phase 4: Operational Integration",
                            description: "Implementation of operational processes and procedures",
                            duration: "1-2 months",
                            activities: [
                              "Process implementation and training",
                              "Quality control implementation",
                              "Performance monitoring setup",
                              "Continuous improvement processes",
                            ],
                          },
                        ].map((phase, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-lg"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 bg-transparent text-blue-500 border-2 border-blue-500">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                                  <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{phase.description}</p>
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-2">Key Activities:</div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {phase.activities.map((activity, i) => (
                                      <div key={i} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{activity}</span>
                                      </div>
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
                </section>
              </>
            )}

            {/* Tab 4: Capability Development */}
            {activeTab === 4 && (
              <>
                {/* Introduction Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Capability Development</h2>
                      <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                          The I5 Model requires a structured approach to developing the capabilities needed for
                          successful implementation and operation, with a focus on the skills and knowledge required to
                          leverage owner-controlled digital platforms effectively.
                        </p>
                        <p>
                          This section outlines the approach to capability development within the I5 Model, including
                          role transformations, learning pathways, and skill development requirements.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-none"
                    >
                      <Image
                        src="/images/blue-office-building.png"
                        alt="Capability development visualization"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>
                </section>

                {/* Core Capabilities Section */}
                <section className="py-16 bg-[rgba(10,22,40,1)]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-white mb-6">Core Capabilities</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                          Essential capabilities required for successful implementation and operation of the I5 Model
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          {
                            capability: "Product Management",
                            description:
                              "Ability to manage product lines end-to-end, balancing customer needs with technical feasibility",
                            icon: <Target className="h-8 w-8" />,
                          },
                          {
                            capability: "Design for Manufacture",
                            description: "Expertise in designing products for efficient manufacturing and assembly",
                            icon: <Settings className="h-8 w-8" />,
                          },
                          {
                            capability: "Digital Platform Management",
                            description:
                              "Skills to effectively administer and leverage owner-controlled digital platforms",
                            icon: <Database className="h-8 w-8" />,
                          },
                          {
                            capability: "Supply Chain Integration",
                            description:
                              "Ability to integrate and manage a network of manufacturing and logistics partners",
                            icon: <Users className="h-8 w-8" />,
                          },
                          {
                            capability: "Quality Management",
                            description: "Expertise in implementing and managing comprehensive quality systems",
                            icon: <ClipboardCheck className="h-8 w-8" />,
                          },
                          {
                            capability: "Continuous Improvement",
                            description: "Skills to implement and sustain continuous improvement processes",
                            icon: <LineChart className="h-8 w-8" />,
                          },
                        ].map((capability, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-transparent border-b-2 border-slate-500 shadow-none rounded-none"
                          >
                            <div className="text-blue-600 mb-6">{capability.icon}</div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-50">{capability.capability}</h3>
                            <p className="text-slate-500">{capability.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Learning Pathways */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Learning Pathways</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Structured learning pathways for developing key capabilities
                        </p>
                      </div>

                      <div className="space-y-8">
                        {[
                          {
                            pathway: "Product Management Pathway",
                            description:
                              "Comprehensive learning pathway for developing product management capabilities",
                            modules: [
                              "Product Strategy and Portfolio Management",
                              "Market Analysis and Customer Needs",
                              "Product Development and Lifecycle Management",
                              "Platform-Based Product Management",
                              "Performance Monitoring and Optimization",
                            ],
                            duration: "6-12 months",
                          },
                          {
                            pathway: "Design for Manufacture Pathway",
                            description: "Learning pathway focused on developing DfMA capabilities and expertise",
                            modules: [
                              "DfMA Principles and Methodologies",
                              "Standardization and Configuration Management",
                              "Manufacturing Process Design",
                              "Quality by Design Principles",
                              "DfMA Platform Proficiency",
                            ],
                            duration: "4-8 months",
                          },
                          {
                            pathway: "Digital Platform Management Pathway",
                            description: "Learning pathway for developing digital platform management capabilities",
                            modules: [
                              "Platform Administration and Governance",
                              "Data Management and Integration",
                              "User Access and Security Management",
                              "Platform Customization and Configuration",
                              "Performance Monitoring and Optimization",
                            ],
                            duration: "3-6 months",
                          },
                          {
                            pathway: "Supply Chain Integration Pathway",
                            description: "Learning pathway focused on developing supply chain integration capabilities",
                            modules: [
                              "Partner Selection and Management",
                              "Just-In-Time Implementation",
                              "Logistics Optimization",
                              "Supply Chain Visibility and Control",
                              "Continuous Improvement in Supply Chain",
                            ],
                            duration: "4-8 months",
                          },
                        ].map((pathway, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-semibold text-gray-900">{pathway.pathway}</h3>
                                  <span className="text-sm text-blue-600 font-medium">{pathway.duration}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{pathway.description}</p>
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-2">Learning Modules:</div>
                                  <div className="space-y-2">
                                    {pathway.modules.map((module, i) => (
                                      <div key={i} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{module}</span>
                                      </div>
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
                </section>

                {/* Platform Proficiency Requirements */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Platform Proficiency Requirements</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Specific proficiency requirements for each owner-controlled digital platform
                        </p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Platform
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Basic Proficiency
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Advanced Proficiency
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Expert Proficiency
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {[
                              {
                                platform: "Body of Knowledge (BoK)",
                                basic: "Ability to navigate and access information within the BoK platform",
                                advanced: "Ability to contribute to and update content within the BoK platform",
                                expert:
                                  "Ability to administer the BoK platform and manage its structure and governance",
                              },
                              {
                                platform: "AEC Platform",
                                basic: "Ability to access and view models and project information",
                                advanced: "Ability to create and modify models and project information",
                                expert:
                                  "Ability to administer the AEC platform and manage its integration with other systems",
                              },
                              {
                                platform: "Design for Manufacture (DfMA)",
                                basic: "Ability to access and view manufacturing data and specifications",
                                advanced: "Ability to create and modify manufacturing data and specifications",
                                expert:
                                  "Ability to administer the DfMA platform and manage its integration with manufacturing systems",
                              },
                              {
                                platform: "Virtual Showroom (VS)",
                                basic: "Ability to navigate and demonstrate product configurations",
                                advanced: "Ability to create and modify product configurations and visualizations",
                                expert:
                                  "Ability to administer the VS platform and manage its integration with other systems",
                              },
                            ].map((platform, index) => (
                              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {platform.platform}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{platform.basic}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{platform.advanced}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{platform.expert}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Capability Development Approach */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Capability Development Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Comprehensive approach to developing capabilities within the organization
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          {
                            component: "Formal Training",
                            description: "Structured training programs for developing specific skills and knowledge",
                            examples: [
                              "Product Management Certification",
                              "DfMA Training Program",
                              "Digital Platform Administration Training",
                              "Supply Chain Integration Workshop",
                            ],
                            icon: <FileText className="h-8 w-8" />,
                          },
                          {
                            component: "On-the-Job Learning",
                            description: "Practical learning through hands-on experience with guidance and support",
                            examples: [
                              "Mentoring Programs",
                              "Job Shadowing",
                              "Guided Practice Sessions",
                              "Progressive Responsibility Assignment",
                            ],
                            icon: <Users className="h-8 w-8" />,
                          },
                          {
                            component: "Knowledge Sharing",
                            description:
                              "Structured approach to sharing knowledge and best practices across the organization",
                            examples: [
                              "Communities of Practice",
                              "Knowledge Sharing Sessions",
                              "Best Practice Documentation",
                              "Lessons Learned Reviews",
                            ],
                            icon: <Database className="h-8 w-8" />,
                          },
                          {
                            component: "External Expertise",
                            description: "Leveraging external expertise to accelerate capability development",
                            examples: [
                              "Expert Consultants",
                              "Industry Partnerships",
                              "Academic Collaborations",
                              "Technology Vendor Training",
                            ],
                            icon: <Briefcase className="h-8 w-8" />,
                          },
                          {
                            component: "Capability Assessment",
                            description: "Regular assessment of capabilities to identify gaps and development needs",
                            examples: [
                              "Skills Assessment",
                              "Competency Frameworks",
                              "Performance Reviews",
                              "Development Planning",
                            ],
                            icon: <ClipboardCheck className="h-8 w-8" />,
                          },
                          {
                            component: "Continuous Learning",
                            description: "Embedding continuous learning into the organizational culture",
                            examples: [
                              "Learning Management System",
                              "Personal Development Plans",
                              "Learning Time Allocation",
                              "Recognition for Learning",
                            ],
                            icon: <LineChart className="h-8 w-8" />,
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                              <div className="text-blue-600">{item.icon}</div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{item.component}</h3>
                            <p className="text-gray-600 text-center mb-4">{item.description}</p>
                            <div className="text-sm text-gray-500">
                              <div className="font-medium mb-2">Examples:</div>
                              <ul className="list-disc list-inside space-y-1">
                                {item.examples.map((example, i) => (
                                  <li key={i}>{example}</li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Implementation Timeline */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Capability Development Timeline</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Phased approach to developing capabilities over time
                        </p>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            phase: "Phase 1: Foundation (0-6 months)",
                            description: "Establishing core capabilities required for initial implementation",
                            focus: [
                              "Core team capability development",
                              "Platform administration capabilities",
                              "Basic proficiency across all platforms",
                              "Initial role transformations",
                            ],
                          },
                          {
                            phase: "Phase 2: Expansion (6-12 months)",
                            description: "Expanding capabilities to support broader implementation",
                            focus: [
                              "Advanced proficiency development",
                              "Expanded team capability development",
                              "Partner capability development",
                              "Knowledge sharing mechanisms",
                            ],
                          },
                          {
                            phase: "Phase 3: Maturation (12-18 months)",
                            description: "Maturing capabilities to support full implementation",
                            focus: [
                              "Expert proficiency development",
                              "Continuous improvement capabilities",
                              "Knowledge management maturation",
                              "Capability assessment and refinement",
                            ],
                          },
                          {
                            phase: "Phase 4: Optimization (18+ months)",
                            description: "Optimizing capabilities for sustained performance",
                            focus: [
                              "Specialized capability development",
                              "Innovation capabilities",
                              "Continuous learning culture",
                              "External knowledge integration",
                            ],
                          },
                        ].map((phase, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                                <p className="text-gray-600 mb-4">{phase.description}</p>
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-2">Focus Areas:</div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {phase.focus.map((focus, i) => (
                                      <div key={i} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{focus}</span>
                                      </div>
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
                </section>
              </>
            )}

            {/* Tab 5: Steady-State Operations */}
            {activeTab === 5 && (
              <>
                {/* Introduction Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-6">Steady-State Operations</h2>
                      <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                          The I5 Model requires a structured approach to establishing and maintaining steady-state
                          operations, with a focus on continuous improvement and optimization of product lines and
                          processes.
                        </p>
                        <p>
                          This section outlines the approach to steady-state operations within the I5 Model, including
                          organizational structure, continuous improvement processes, and performance monitoring.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-none"
                    >
                      <Image
                        src="/images/modern-office-campus.png"
                        alt="Steady-state operations visualization"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>
                  </motion.div>
                </section>

                {/* Organizational Units */}
                <section className="py-16 bg-[rgba(10,22,40,1)]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-white mb-6">Steady-State Organizational Units</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                          Key organizational units required for steady-state operations
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steadyStateUnits.map((unit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-transparent border-b-2 border-slate-500 shadow-none rounded-none"
                          >
                            <div className="text-blue-600 mb-6">{unit.icon}</div>
                            <h3 className="text-xl font-semibold mb-4 text-slate-50">{unit.unit}</h3>
                            <p className="mb-6 text-slate-500">{unit.functions}</p>

                            <div className="p-4 rounded-lg bg-transparent">
                              <h4 className="text-sm font-semibold mb-2 text-slate-100">Technology Focus:</h4>
                              <p className="text-sm text-slate-200">{unit.techFocus}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Continuous Improvement Process */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Continuous Improvement Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Structured approach to continuous improvement within steady-state operations
                        </p>
                      </div>

                      <div className="space-y-8">
                        {[
                          {
                            step: "Performance Monitoring",
                            description:
                              "Continuous monitoring of key performance indicators across all aspects of operations",
                            activities: [
                              "Real-time data collection and analysis",
                              "Automated performance dashboards",
                              "Regular performance reviews",
                              "Variance analysis and root cause identification",
                            ],
                            icon: <BarChart3 className="h-8 w-8" />,
                          },
                          {
                            step: "Improvement Identification",
                            description: "Structured process for identifying improvement opportunities",
                            activities: [
                              "Performance gap analysis",
                              "Customer feedback analysis",
                              "Partner input and suggestions",
                              "Innovation workshops and ideation sessions",
                            ],
                            icon: <Target className="h-8 w-8" />,
                          },
                          {
                            step: "Improvement Implementation",
                            description: "Systematic approach to implementing improvements",
                            activities: [
                              "Improvement prioritization and selection",
                              "Implementation planning and resource allocation",
                              "Pilot testing and validation",
                              "Full-scale implementation and change management",
                            ],
                            icon: <Settings className="h-8 w-8" />,
                          },
                          {
                            step: "Knowledge Integration",
                            description: "Process for integrating new knowledge into the organization",
                            activities: [
                              "Documentation of improvements and lessons learned",
                              "Updates to the Body of Knowledge platform",
                              "Training and knowledge sharing",
                              "Standard operating procedure updates",
                            ],
                            icon: <Database className="h-8 w-8" />,
                          },
                        ].map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <div className="text-blue-600 mr-3">{step.icon}</div>
                                  <h3 className="text-xl font-semibold text-gray-900">{step.step}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{step.description}</p>
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-2">Key Activities:</div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {step.activities.map((activity, i) => (
                                      <div key={i} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{activity}</span>
                                      </div>
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
                </section>

                {/* Performance Monitoring Framework */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Performance Monitoring Framework</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Comprehensive framework for monitoring performance across all aspects of operations
                        </p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Category
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Key Metrics
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Target Performance
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Data Source
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {[
                              {
                                category: "Product Performance",
                                metrics: "Quality defects, customer satisfaction, warranty claims",
                                target: "50-70% reduction in defects, 95% customer satisfaction",
                                source: "Quality Management System, Customer Feedback Platform",
                              },
                              {
                                category: "Operational Efficiency",
                                metrics: "Cycle time, resource utilization, waste reduction",
                                target: "25-35% reduction in cycle time, 15-25% improvement in resource utilization",
                                source: "AEC Platform, DfMA Platform, Production Management System",
                              },
                              {
                                category: "Financial Performance",
                                metrics: "Cost variance, margin improvement, ROI",
                                target: "±2% cost variance, 15-25% margin improvement",
                                source: "Financial Management System, Cost Tracking System",
                              },
                              {
                                category: "Supply Chain Performance",
                                metrics: "On-time delivery, inventory levels, lead time",
                                target: "98% on-time delivery, 30-50% reduction in inventory",
                                source: "Supply Chain Management System, Partner Portals",
                              },
                              {
                                category: "Innovation Performance",
                                metrics: "New product introduction, improvement implementation",
                                target: "2-3 major improvements per quarter, 1-2 new products per year",
                                source: "Body of Knowledge Platform, Innovation Management System",
                              },
                            ].map((row, index) => (
                              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {row.category}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">{row.metrics}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{row.target}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{row.source}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Knowledge Management System */}
                <section className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Knowledge Management System</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Comprehensive approach to managing knowledge within the organization
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          {
                            component: "Body of Knowledge Platform",
                            description:
                              "Central repository for all organizational knowledge, standards, and best practices",
                            features: [
                              "Standardized documentation structure",
                              "Version control and change management",
                              "Search and retrieval capabilities",
                              "Integration with other platforms",
                            ],
                            icon: <Database className="h-8 w-8" />,
                          },
                          {
                            component: "Communities of Practice",
                            description:
                              "Groups of practitioners sharing knowledge and best practices in specific domains",
                            features: [
                              "Regular knowledge sharing sessions",
                              "Collaborative problem solving",
                              "Best practice development",
                              "Mentoring and coaching",
                            ],
                            icon: <Users className="h-8 w-8" />,
                          },
                          {
                            component: "Lessons Learned Process",
                            description: "Structured approach to capturing and applying lessons from experience",
                            features: [
                              "Post-implementation reviews",
                              "Structured documentation format",
                              "Integration with the BoK platform",
                              "Application in future projects",
                            ],
                            icon: <ClipboardCheck className="h-8 w-8" />,
                          },
                          {
                            component: "Training and Development",
                            description: "Comprehensive approach to developing and maintaining capabilities",
                            features: [
                              "Formal training programs",
                              "On-the-job learning",
                              "Knowledge assessments",
                              "Continuous learning culture",
                            ],
                            icon: <FileText className="h-8 w-8" />,
                          },
                          {
                            component: "Innovation Management",
                            description: "Structured approach to generating and implementing innovative ideas",
                            features: [
                              "Idea generation processes",
                              "Innovation evaluation and selection",
                              "Implementation support",
                              "Recognition and rewards",
                            ],
                            icon: <Target className="h-8 w-8" />,
                          },
                          {
                            component: "External Knowledge Integration",
                            description: "Approach to integrating external knowledge into the organization",
                            features: [
                              "Industry partnerships",
                              "Academic collaborations",
                              "Technology vendor relationships",
                              "Customer feedback integration",
                            ],
                            icon: <Briefcase className="h-8 w-8" />,
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                              <div className="text-blue-600">{item.icon}</div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{item.component}</h3>
                            <p className="text-gray-600 text-center mb-4">{item.description}</p>
                            <div className="text-sm text-gray-500">
                              <div className="font-medium mb-2">Key Features:</div>
                              <ul className="list-disc list-inside space-y-1">
                                {item.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Transition to Steady State */}
                <section className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-light text-gray-900 mb-6">Transition to Steady State</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                          Approach to transitioning from implementation to steady-state operations
                        </p>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            phase: "Phase 1: Organizational Structure",
                            description: "Establishing the organizational structure for steady-state operations",
                            duration: "3-6 months",
                            activities: [
                              "Define organizational units and roles",
                              "Establish reporting relationships",
                              "Allocate resources and responsibilities",
                              "Implement governance structures",
                            ],
                          },
                          {
                            phase: "Phase 2: Process Stabilization",
                            description: "Stabilizing core processes for consistent performance",
                            duration: "6-12 months",
                            activities: [
                              "Standardize operating procedures",
                              "Implement quality control processes",
                              "Establish performance monitoring",
                              "Implement continuous improvement processes",
                            ],
                          },
                          {
                            phase: "Phase 3: Knowledge Management",
                            description: "Establishing robust knowledge management systems",
                            duration: "6-12 months",
                            activities: [
                              "Implement the Body of Knowledge platform",
                              "Establish communities of practice",
                              "Implement lessons learned processes",
                              "Develop training and development programs",
                            ],
                          },
                          {
                            phase: "Phase 4: Performance Optimization",
                            description: "Optimizing performance across all aspects of operations",
                            duration: "Ongoing",
                            activities: [
                              "Implement advanced performance monitoring",
                              "Establish innovation management processes",
                              "Implement external knowledge integration",
                              "Continuously improve all aspects of operations",
                            ],
                          },
                        ].map((phase, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg p-6 shadow-sm"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                                  <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{phase.description}</p>
                                <div>
                                  <div className="text-sm font-medium text-gray-700 mb-2">Key Activities:</div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {phase.activities.map((activity, i) => (
                                      <div key={i} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-600">{activity}</span>
                                      </div>
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
                </section>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  )
}
