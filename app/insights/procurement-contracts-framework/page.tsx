"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import NextLink from "next/link"
import {
  ArrowRight,
  Download,
  CheckCircle,
  XCircle,
  FileText,
  Building2,
  Users,
  BarChart3,
  Database,
  Wrench,
  Store,
  Rocket,
  TrendingUp,
  Lightbulb,
  Handshake,
  Signal,
  Calendar,
  Package,
  Activity,
  AlertTriangle,
  Clock,
} from "lucide-react"

export default function ProcurementContractsFramework() {
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
    "Overview",
    "Procurement Strategy",
    "Contract Models",
    "Contract Management",
    "Supply Chain Ecosystem",
    "Comparative Analysis",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/images/blue-geometric-facade-close.png')`,
            y,
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
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-blue-100 mb-8"
            >
              <FileText className="h-4 w-4 mr-2" />
              I5 Implementation Framework
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Procurement &<br />
              Contracts
              <br />
              Framework
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
              Comprehensive strategies for procurement and contracts, moving beyond traditional practices to embrace
              collaborative, value-based approaches that support productization, integration, and long-term
              partnerships.
            </p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: "20-30%", label: "Cost Reduction", color: "blue" },
                { value: "15-25%", label: "Time Savings", color: "green" },
                { value: "40-60%", label: "Fewer Disputes", color: "purple" },
                { value: "30-50%", label: "Better Compliance", color: "orange" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="backdrop-blur-sm rounded-lg p-4 border border-white/20 bg-transparent"
                >
                  <div className={`text-${metric.color}-400 mb-2`}>
                    {index === 0 && <Download className="h-6 w-6 text-white" />}
                    {index === 1 && <Clock className="h-6 w-6 text-white" />}
                    {index === 2 && <Handshake className="h-6 w-6 text-white" />}
                    {index === 3 && <CheckCircle className="h-6 w-6 text-white" />}
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
            <nav className="flex flex-nowrap min-w-full items-center justify-center">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 px-2 font-medium text-xs whitespace-nowrap transition-colors flex-shrink-0 border-b-4 mx-1.5 ${
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
          {/* Main Content */}
          <main className="py-12">
            {/* Overview Tab */}
            {activeTab === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-16">
                  {/* Container 1: Introduction */}
                  <section>
                    <div className="grid lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                          Introduction to the I5 Procurement & Contracts Framework
                        </h2>
                        <div className="prose prose-lg text-gray-600 max-w-none">
                          <p>
                            Effective procurement and contract strategies are{" "}
                            <strong>central to realizing the benefits of the I5 Model</strong>, which transforms
                            traditional, often adversarial, practices into integrated, productized delivery methods. The
                            I5 Model's procurement approach shifts from a narrow focus on lowest initial price to a
                            <strong> strategic, value-based approach</strong> that supports long-term standardization
                            and collaboration. This is crucial for enabling collaborative relationships, aligning
                            incentives, and managing risk effectively across the entire delivery ecosystem.
                          </p>
                          <p>
                            A core principle is that{" "}
                            <strong>
                              core digital platforms are explicitly owned, procured, administered, updated, and
                              controlled by the owner
                            </strong>
                            , who grants appropriate access to partners. The governance of specific construction
                            technologies used by partners is determined by the owner on a case-by-case basis. This
                            ownership model ensures{" "}
                            <strong>strategic alignment and intellectual property protection</strong>.
                          </p>
                        </div>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-xl p-6 sticky top-24 border border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Framework Overview</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              Owner-controlled digital platforms (BoK, VS, DfMA, AEC, SCM)
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              Strategic procurement approaches
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              Collaborative contract models
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              Integrated supply chain management
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Container 2: Key Principles */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Principles of I5 Procurement</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      The transition to productized delivery is guided by key principles:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        {
                          title: "Value Definition",
                          description:
                            "Shifts from focusing on the lowest initial cost to optimizing for lifecycle value and integration efficiency.",
                          image: "/images/blue-office-building.png",
                        },
                        {
                          title: "Timing",
                          description:
                            "Emphasizes early supply chain involvement during product definition, rather than traditional engagement after design completion.",
                          image: "/images/geometric-office-building.png",
                        },
                        {
                          title: "Relationship Model",
                          description:
                            "Fosters strategic, program-level partnerships over transactional, project-based relationships.",
                          image: "/images/diamond-pattern-office.png",
                        },
                        {
                          title: "Scope Delineation",
                          description:
                            "Focuses on integrated scope by functional system or module, rather than fragmented trade disciplines.",
                          image: "/images/glass-office.png",
                        },
                        {
                          title: "Risk Allocation",
                          description:
                            "Promotes collaborative risk management across the team instead of transferring risk down the supply chain.",
                          image: "/images/blue-facade.png",
                        },
                        {
                          title: "Performance Measurement",
                          description:
                            "Measures contribution to overall project outcomes (tracked via owner platforms) rather than mere compliance with specifications.",
                          image: "/images/flowing-apartment-building.png",
                        },
                        {
                          title: "Technology Integration",
                          description:
                            "Mandates defined requirements for partner interaction with owner platforms and establishes owner governance over partner construction technologies.",
                          image: "/images/blue-geometric-facade.png",
                        },
                      ].map((principle, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={principle.image || "/placeholder.svg"}
                              alt={principle.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{principle.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Container 3: Integration Framework */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Integration with Other I5 Frameworks</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      The Procurement & Contracts Framework is deeply integrated with other core I5 frameworks to
                      operate as a cohesive system:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Core Principles",
                          description:
                            "This framework is the practical application ground for the productization of real estate (treating buildings as standardized, manufactured products) and the implementation of Integrated Project Delivery (IPD) methodologies.",
                          link: "/insights/core-principles",
                          icon: <Building2 className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "Delivery Framework",
                          description:
                            "The success of project delivery hinges on strategies such as early supplier involvement, the adoption of collaborative contracting models, and the establishment of long-term partnerships.",
                          link: "/insights/delivery-framework",
                          icon: <Rocket className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "Operational Ecosystem",
                          description:
                            "Contracts explicitly address the owner's mandatory use of specified owner platforms (BoK, VS, DfMA, AEC), partner access rights, data ownership, usage rights, confidentiality, integration requirements for partner systems with owner platforms, and cybersecurity requirements.",
                          link: "/insights/operational-ecosystem",
                          icon: <Wrench className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "Organizational Framework",
                          description:
                            "The roles and responsibilities defined within the Organizational Framework directly influence cost management, resource allocation, and financial decision-making within the I5 Model.",
                          link: "/insights/organizational-framework",
                          icon: <Users className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "Financial Framework",
                          description:
                            "Financial parameters, such as investment frameworks, Return on Investment (ROI) methodologies, and risk contingency management, are directly supported by and integrated with contract structures and payment mechanisms.",
                          link: "/insights/financial-framework",
                          icon: <BarChart3 className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "KPIs & Risk Framework",
                          description:
                            "Project performance is continually monitored using a comprehensive set of Operational, Financial, and Strategic Key Performance Indicators (KPIs) that are crucial for financial assessment.",
                          link: "#",
                          icon: <Activity className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                      ].map((framework, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="mb-4">{framework.icon}</div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{framework.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">{framework.description}</p>
                          <NextLink
                            href={framework.link}
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                          >
                            Learn more <ArrowRight className="ml-1 h-4 w-4" />
                          </NextLink>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Owner-Controlled Digital Platforms */}
                  <section className="bg-slate-900 text-white rounded-2xl p-8 border border-gray-200">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-white mb-4">Owner-Controlled Digital Platforms</h2>
                      <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                        Central to the I5 Procurement Framework is the strategic role of owner-controlled core digital
                        platforms that enable standardization, integration, and collaborative delivery across the entire
                        ecosystem.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          title: "Body of Knowledge (BoK)",
                          description:
                            "Centralized repository for standardized components, materials, and procurement specifications",
                          icon: <Database className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "AEC Platform",
                          description: "Integrated project management and coordination platform for all stakeholders",
                          icon: <Building2 className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "Design for Manufacturing (DfMA)",
                          description:
                            "Specialized platform for optimizing designs for off-site manufacturing and assembly",
                          icon: <Wrench className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                        {
                          title: "Virtual Showroom (VS)",
                          description: "Customer-facing platform for product configuration and client engagement",
                          icon: <Store className="h-8 w-8 text-[#2563EB]" strokeWidth={1} />,
                        },
                      ].map((platform, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                          <div className="mb-4">{platform.icon}</div>
                          <h3 className="text-lg font-semibold text-white mb-3">{platform.title}</h3>
                          <p className="text-blue-100 text-sm leading-relaxed">{platform.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {/* Procurement Strategy Tab */}
            {activeTab === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-16">
                  {/* Container 1: Purpose */}
                  <section>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Purpose of Procurement Strategy Development
                      </h2>
                      <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        The transition to productized delivery necessitates a fundamental shift in procurement
                        thinking—from price-focused, project-by-project purchasing to{" "}
                        <strong>strategic, value-based procurement</strong> that supports long-term standardization and
                        collaboration. This strategy aims to structure procurement processes and contractual frameworks
                        to{" "}
                        <strong>
                          enable collaborative relationships, align incentives, and effectively manage risk
                        </strong>{" "}
                        across the entire delivery ecosystem, all within the{" "}
                        <strong>context of owner-controlled digital platforms and defined technology governance</strong>
                        .
                      </p>
                    </div>
                  </section>

                  {/* Container 2: Key Principles */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Principles of I5 Procurement Strategy</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      To operationalize the principles outlined in the Overview, procurement strategies for I5
                      implementation should:
                    </p>
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                      {[
                        {
                          title: "Align with Product Strategy",
                          description:
                            "Directly support defined product platforms and standardization objectives, with materials and services selected to enable repeatable solutions (managed in the BoK platform).",
                          step: "01",
                        },
                        {
                          title: "Enable Early Involvement",
                          description:
                            "Engage key suppliers and manufacturing partners during the product definition phase to incorporate production expertise into the design process (facilitated via DfMA and AEC platforms).",
                          step: "02",
                        },
                        {
                          title: "Support Integration",
                          description:
                            "Facilitate collaboration between design, manufacturing, and on-site assembly, leveraging owner platforms for coordination rather than reinforcing traditional silos.",
                          step: "03",
                        },
                        {
                          title: "Create Long-term Value",
                          description:
                            "Consider the total cost of ownership, including quality, durability, and operational performance, beyond just initial acquisition costs.",
                          step: "04",
                        },
                        {
                          title: "Manage Supply Chain Complexity",
                          description:
                            "Address the growing complexity of supply chain relationships as production shifts off-site, often coordinated via owner's SCM and AEC platforms.",
                          step: "05",
                        },
                        {
                          title: "Incorporate Technology Governance",
                          description:
                            "Include steps to assess partner digital readiness, define requirements for integrating with owner platforms, and address any owner-stipulated conditions for partner-used construction technologies.",
                          step: "06",
                        },
                      ].map((strategy, index) => (
                        <div key={index} className="relative">
                          <div className="bg-white rounded-xl border border-gray-200 p-6 h-full hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-slate-600 mb-4">{strategy.step}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{strategy.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Container 3: Implementation Process */}
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Process</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          phase: "Assessment Phase",
                          image: "/images/curved-apartment-building.png",
                          items: [
                            "Analyze current procurement practices and identify gaps relative to I5 requirements",
                            "Evaluate internal procurement capabilities and resource needs",
                            "Assess supply market capabilities for productized delivery and digital integration",
                            "Review regulatory and compliance requirements impacting procurement",
                          ],
                        },
                        {
                          phase: "Strategy Development",
                          image: "/images/modular-pod-housing.png",
                          items: [
                            "Define procurement objectives and Key Performance Indicators (KPIs) aligned with I5 goals",
                            "Develop category strategies for key procurement areas, including partner technology capabilities",
                            "Create a procurement governance structure and approval processes",
                            "Establish supplier qualification (including digital readiness) and performance management frameworks",
                          ],
                        },
                        {
                          phase: "Implementation Planning",
                          image: "/images/turquoise-modular-complex.png",
                          items: [
                            "Develop a roadmap with a phased approach",
                            "Create a communication plan for internal stakeholders and the supply market regarding technology requirements",
                            "Establish training programs for the procurement team and project stakeholders",
                            "Design a transition management approach from current to future state",
                          ],
                        },
                      ].map((phase, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={phase.image || "/placeholder.svg"}
                              alt={phase.phase}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                            </div>
                          </div>
                          <div className="p-6">
                            <ul className="space-y-3">
                              {phase.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Container 4: Category Management */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Procurement Category Management & Supplier Segmentation
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Category management and supplier segmentation ensure an effective supply chain for I5
                      implementation. A specific approach is needed for procuring/managing the owner's core platforms
                      versus setting requirements for partner technologies.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Procurement Categories */}
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                          Procurement Category Structure for I5 Implementation
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              category: "Owner Digital Platforms",
                              importance: "Very High",
                              description:
                                "Owner-led procurement/development, long-term Total Cost of Ownership (TCO), integration capability, scalability, security, vendor management (if procured), and alignment with I5 processes.",
                            },
                            {
                              category: "Design Services",
                              importance: "High",
                              description:
                                "Requires DfMA expertise and proficiency with owner platforms (AEC, DfMA, BoK).",
                            },
                            {
                              category: "Manufacturing Services",
                              importance: "High",
                              description:
                                "Requires ability to integrate with owner DfMA/AEC platforms for data exchange.",
                            },
                            {
                              category: "Construction Services",
                              importance: "High",
                              description:
                                "Requires ability to use owner AEC platform for coordination and adherence to owner requirements for site technologies.",
                            },
                            {
                              category: "Materials and Components",
                              importance: "Medium to High",
                              description:
                                "Considers standardization potential, supply stability, and cost volatility.",
                            },
                            {
                              category: "Partner Technology Systems",
                              importance: "Variable",
                              description:
                                "Requires alignment with owner requirements for source, reliability, integration, visibility, and security.",
                            },
                            {
                              category: "Logistics Services",
                              importance: "Medium",
                              description: "Requires tracking capabilities integrated with owner AEC/SCM platforms.",
                            },
                          ].map((item, index) => (
                            <div key={index} className="border-l-4 border-gray-200 pl-4">
                              <div className="flex items-center mb-2">
                                <div className="w-3 h-3 bg-slate-600 rounded-full mr-3"></div>
                                <h4 className="font-semibold text-gray-900">{item.category}</h4>
                                <span className="ml-auto px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                                  {item.importance}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Supplier Segmentation */}
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">
                          Supplier Segmentation for I5 Implementation
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              segment: "Strategic Partners",
                              description:
                                "Critical to I5 success; involve deep integration with owner platforms (AEC, DfMA, SCM, BoK), co-development potential, and alignment on technology roadmaps.",
                            },
                            {
                              segment: "Preferred Suppliers",
                              description:
                                "Important to operations; require standardized data exchange with owner platforms (e.g., orders, status updates, quality reports) and use of supplier portals.",
                            },
                            {
                              segment: "Transactional Suppliers",
                              description:
                                "Standardized offerings with minimal integration required, potentially basic electronic transactions.",
                            },
                            {
                              segment: "Emerging Partners",
                              description:
                                "New relationships with strategic potential; may require support for meeting basic integration requirements and a phased integration approach.",
                            },
                          ].map((item, index) => (
                            <div key={index} className="border-l-4 border-gray-200 pl-4">
                              <div className="flex items-center mb-2">
                                <div className="w-3 h-3 bg-slate-600 rounded-full mr-3"></div>
                                <h4 className="font-semibold text-gray-900">{item.segment}</h4>
                              </div>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {/* Contract Models Tab */}
            {activeTab === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-16">
                  {/* Container 1: Purpose */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Purpose of Contract Models and Selection</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Selecting the appropriate contract model is crucial for establishing the legal and commercial
                      framework that defines responsibilities and allocates risk throughout the I5 delivery process. A
                      key requirement is that{" "}
                      <strong>
                        contracts must explicitly address the use of owner-controlled platforms and the governance of
                        partner-used technologies
                      </strong>
                      . This ensures the chosen model facilitates collaboration, standardization, and parallel
                      off-site/on-site activities.
                    </p>
                  </section>

                  {/* Container 2: Contract Model Comparison */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Contract Model Comparison for I5 Implementation
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      The I5 Model requires contracting approaches that facilitate collaboration, standardization, and
                      parallel activities, differing from traditional construction contracts.
                    </p>
                    <div className="overflow-hidden bg-white rounded-xl border border-gray-200 mb-8">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Contract Model
                              </th>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Key Features</th>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                Technology Requirements
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {[
                              {
                                model: "Integrated Project Delivery (IPD)",
                                features:
                                  "A multi-party agreement with shared risk/reward, collective governance, and early involvement",
                                tech: "Very High technology clause needs, defining platform access, data ownership, integration requirements, intellectual property (IP) related to platform usage, and potentially shared technology risk protocols",
                              },
                              {
                                model: "Design-Build",
                                features: "A single entity responsible for design and construction",
                                tech: "High technology clause needs, specifying the contractor's use of owner platforms (AEC, DfMA), data submission standards, and conditions for the contractor's construction technology",
                              },
                              {
                                model: "Construction Management at Risk (CMAR)",
                                features:
                                  "CM provides pre-construction services then converts to a General Contractor (GC)",
                                tech: "Medium-High technology clause needs, defining the CM and designer's use of owner platforms, coordination protocols via platforms, and conditions for the CM's sub/partner technology",
                              },
                              {
                                model: "Progressive Design-Build",
                                features: "A two-phase design-build process",
                                tech: "High technology clause needs, similar to Design-Build, requiring clear definition of platform usage and technology requirements during the collaborative phase",
                              },
                              {
                                model: "Alliance Contracting",
                                features:
                                  "Owner and key providers work as an integrated team, sharing all risks/rewards",
                                tech: "Very High technology clause needs, requiring comprehensive technology governance clauses covering platforms, partner technology, data, and integration within the alliance framework",
                              },
                              {
                                model: "Framework Agreement with Works Orders",
                                features: "A master agreement for multiple projects leveraging standardization",
                                tech: "Medium technology clause needs, where the master agreement defines standard platform usage terms and integration requirements for all call-offs",
                              },
                            ].map((row, index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 bg-slate-600 rounded-full mr-3"></div>
                                    <span className="font-medium text-gray-900">{row.model}</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{row.features}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{row.tech}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Off-Site Manufacturing Models */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Off-Site Manufacturing Commercial Models
                      </h3>
                      <p className="text-gray-600 mb-4">
                        These can be employed within or alongside the primary contract structures:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            model: "Direct Supply Contract",
                            description:
                              "The owner contracts directly with the manufacturer. The owner defines integration requirements for manufacturer systems (e.g., data feeds to AEC/DfMA) and access protocols for the manufacturer to use owner platforms.",
                          },
                          {
                            model: "Subcontract to Main Contractor",
                            description:
                              "The main contractor is responsible for ensuring the manufacturer integrates with owner platforms as required by the main contract.",
                          },
                          {
                            model: "Nominated Subcontractor",
                            description:
                              "The owner may have more direct input on defining technology integration requirements for the nominated manufacturer.",
                          },
                          {
                            model: "Supply and Install Contract",
                            description:
                              "Requires integration with owner platforms for both manufacturing (DfMA/AEC) and site assembly (AEC).",
                          },
                          {
                            model: "Manufacturing as Joint Venture",
                            description:
                              "The Joint Venture (JV) must adhere to owner-defined integration requirements for data exchange with owner platforms.",
                          },
                        ].map((item, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">{item.model}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Container 3: Selection Factors */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contract Model Selection Factors</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Selecting the appropriate contract model requires consideration of multiple factors:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        {
                          title: "Project Characteristics",
                          items: [
                            "Complexity, schedule requirements, design certainty",
                            "Standardization potential",
                            "Off-site manufacturing scope",
                            "Site constraints",
                          ],
                        },
                        {
                          title: "Organizational Capabilities",
                          items: [
                            "Procurement expertise, contract management experience",
                            "IT capability to manage owner platforms",
                            "Capability to define and enforce technology standards",
                          ],
                        },
                        {
                          title: "Market Conditions",
                          items: [
                            "Supply chain maturity for prefabrication",
                            "Contractor capabilities",
                            "Partner digital readiness and capability",
                            "Regulatory environment",
                          ],
                        },
                        {
                          title: "Strategic Objectives",
                          items: [
                            "Schedule acceleration, cost certainty",
                            "Quality and performance expectations",
                            "Risk tolerance, long-term relationship development goals",
                            "Innovation priorities",
                            "Desired level of technology control",
                          ],
                        },
                      ].map((factor, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">{factor.title}</h3>
                          <ul className="space-y-2">
                            {factor.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Visual representation of contract models */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Integrated Delivery",
                        image: "/images/geometric-glass-boxes.png",
                        description: "IPD and Alliance models for complex integration",
                      },
                      {
                        title: "Design-Build Approaches",
                        image: "/images/minimalist-concrete-townhouses.png",
                        description: "Single-point responsibility models",
                      },
                      {
                        title: "Framework Agreements",
                        image: "/images/white-modular-building.png",
                        description: "Standardized, repeatable contracts",
                      },
                    ].map((model, index) => (
                      <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={model.image || "/placeholder.svg"}
                            alt={model.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <h4 className="text-lg font-semibold text-white">{model.title}</h4>
                            <p className="text-sm text-gray-200">{model.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Container 4: UAE/GCC Context */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Adapting Contract Models to the UAE/GCC Context
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Implementing I5 in the UAE and broader GCC context requires careful adaptation of contracting
                      approaches to align with local requirements while achieving integration benefits.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Considerations in the UAE/GCC Context
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Legal and Regulatory Framework: Including Civil Code provisions, municipality requirements (with potential data residency/security laws affecting owner platforms), and decennial liability",
                            "Standard Contract Forms: FIDIC Red Book is common, Yellow Book for design-build, with heavily amended forms or bespoke contracts",
                            "Regional Market Characteristics: Strong emphasis on client/employer control (aligns with owner platform control model), traditional separation of design/construction, and variable digital maturity among local partners",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Adaptation Approaches</h3>
                        <ul className="space-y-3">
                          {[
                            "FIDIC-Based Design-Build: Use FIDIC Yellow Book with supplementary conditions for off-site manufacturing, early contractor involvement, collaborative processes, and detailed clauses on owner platform usage, access, and integration",
                            "Modified FIDIC with IPD Principles: Maintain FIDIC structure but add provisions for shared risk/reward, collaborative governance, early involvement, and specific technology governance clauses",
                            "Bespoke Collaborative Contract: Develop custom contracts that explicitly define owner platform control, partner access, integration requirements, and partner technology governance",
                            "Framework Agreement: Develop master agreements compliant with local law, ensuring the master agreement includes standard technology platform terms",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technology Governance Clauses */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Specific UAE/GCC Contract Modifications for I5 Implementation
                      </h3>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Technology Governance Clauses (Critical):</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {[
                            "Mandatory use of specified owner platforms (BoK, VS, DfMA, AEC)",
                            "Partner access rights, limitations, and security protocols",
                            "Data ownership, usage rights, and confidentiality related to platforms",
                            "Integration requirements for partner systems with owner platforms",
                            "Compliance with owner standards for data formats and exchange",
                            "Owner conditions or requirements for specific partner-used construction technologies (if applicable, determined case-by-case)",
                            "Cybersecurity requirements and liability",
                            "Compliance with UAE data privacy and residency laws",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-gray-600">
                        Other modifications include provisions for off-site materials and payment (vesting
                        certificates), testing and inspection rights (including manufacturing facilities and quality
                        data via owner platforms), detailed design approval processes (managed via owner platforms), and
                        comprehensive defects liability and warranties.
                      </p>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {/* Contract Management Tab */}
            {activeTab === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-16">
                  {/* Container 1: Purpose */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Purpose of Contract Management and Administration
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Collaborative contract administration establishes procedures and practices that support the
                      integrated, team-based approach of the I5 Model while maintaining appropriate accountability and
                      control. This is largely <strong>facilitated by the owner's digital platforms</strong>. It shifts
                      from a traditional focus on compliance monitoring to a more collaborative approach, leveraging
                      shared information environments.
                    </p>
                  </section>

                  {/* Container 2: Collaborative vs Traditional */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Collaborative vs. Traditional Contract Administration
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      The I5 Model requires a collaborative approach to contract administration, founded on:
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div className="rounded-xl p-6 border border-gray-200 bg-transparent">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <XCircle className="mr-2 h-5 w-5 text-gray-500" />
                          Traditional Approach
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          {[
                            "Adversarial relationships with focus on compliance",
                            "Information silos and limited transparency",
                            "Reactive issue management after problems arise",
                            "Excessive documentation and administrative burden",
                            "Blame-focused problem resolution",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <XCircle className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0 text-gray-600" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl p-6 border border-gray-200 bg-transparent">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                          I5 Collaborative Approach
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          {[
                            "Mutual Accountability: All parties share responsibility for contract success",
                            "Transparency: Open sharing of information via owner platforms",
                            "Proactive Management: Early identification and resolution of issues using platform data",
                            "Balanced Documentation: Maintaining appropriate records within owner platforms without excessive administration",
                            "Solution Orientation: Focus on finding effective solutions rather than assigning blame",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <CheckCircle className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Implementation Methods */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Implementation Methods Leveraging Owner Platforms
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          "Joint contract workshops and documented shared understanding (BoK)",
                          "Change evaluation committees and streamlined documentation/workflow (AEC)",
                          "Balanced scorecard approach (using platform data) and joint reviews for performance monitoring",
                          "Tiered issue resolution processes and issue tracking (AEC)",
                          "Decision matrices with clear authorities and decision logging (AEC/BoK)",
                          "Efficient documentation standards and collaborative documentation platforms (AEC, BoK)",
                        ].map((method, index) => (
                          <div key={index} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-blue-500"></div>
                            {method}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Platform Integration Visual */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src="/images/curved-balcony-building.png"
                          alt="Digital platform integration"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <h4 className="text-lg font-semibold text-white">Digital Platform Integration</h4>
                          <p className="text-sm text-gray-200">Owner-controlled systems enabling collaboration</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src="/images/organic-pod-development.png"
                          alt="Collaborative management"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <h4 className="text-lg font-semibold text-white">Collaborative Management</h4>
                          <p className="text-sm text-gray-200">Shared accountability and transparency</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Container 3: Leveraging Owner Platforms */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Leveraging Owner Platforms for Contract Management
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Effective management of contractual relationships in the I5 framework benefits significantly from
                      the <strong>owner's integrated digital ecosystem</strong>. These systems facilitate information
                      sharing, automate routine processes, and provide analytics:
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      {[
                        {
                          platform: "AEC Platform (Core Functions)",
                          functions: [
                            "Serves as a central repository for contracts",
                            "Manages workflows (e.g., change order processing)",
                            "Links contract milestones to schedules",
                            "Tracks costs",
                            "Facilitates communication",
                            "Generates reports and dashboards",
                          ],
                        },
                        {
                          platform: "Owner SCM/Procurement System",
                          functions: [
                            "Manages supplier contract details, performance history, and compliance information",
                            "Generates purchase orders/contracts",
                            "Processes invoices",
                          ],
                        },
                        {
                          platform: "Body of Knowledge (BoK) Platform",
                          functions: [
                            "Acts as a repository for approved contract templates and standard clauses",
                            "Stores lessons learned on contract effectiveness",
                          ],
                        },
                        {
                          platform: "Virtual Showroom (VS) / CRM",
                          functions: [
                            "Links client choices and agreements to delivery contracts",
                            "Ensures alignment for scope and billing",
                          ],
                        },
                      ].map((platform, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">{platform.platform}</h3>
                          <ul className="space-y-2">
                            {platform.functions.map((func, funcIndex) => (
                              <li key={funcIndex} className="flex items-start text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-blue-500"></div>
                                {func}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* I5 Phases Usage */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Owner Platforms Usage Throughout I5 Phases
                      </h3>
                      <div className="grid md:grid-cols-5 gap-4">
                        {[
                          {
                            phase: "Phase 1: Product Definition",
                            activities: [
                              "Storing partner capability assessments (BoK)",
                              "Documenting preliminary agreements (AEC/SCM)",
                            ],
                          },
                          {
                            phase: "Phase 2: Product Configuration",
                            activities: [
                              "Managing design-assist agreements (AEC/SCM)",
                              "Developing contract templates (BoK)",
                              "Linking client configurations (VS) to contractual scope",
                            ],
                          },
                          {
                            phase: "Phase 3: Pre-Production",
                            activities: [
                              "Executing procurement (SCM)",
                              "Managing main contracts/subcontracts (AEC/SCM)",
                              "Tracking deliverables against milestones (AEC)",
                            ],
                          },
                          {
                            phase: "Phase 4: Production",
                            activities: [
                              "Tracking progress for payment (AEC)",
                              "Managing change orders (AEC)",
                              "Documenting quality compliance (AEC/Quality)",
                              "Coordinating logistics (AEC/SCM)",
                            ],
                          },
                          {
                            phase: "Phase 5: Handover & Support",
                            activities: [
                              "Verifying completion (AEC)",
                              "Managing warranty claims (AEC/Operational platform)",
                              "Capturing contract performance lessons learned (BoK)",
                            ],
                          },
                        ].map((phase, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3 text-sm">{phase.phase}</h4>
                            <ul className="space-y-2">
                              {phase.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="text-xs text-gray-600">
                                  • {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Container 4: Financial and Payment Management */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial and Payment Management</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Financial and payment management processes align with the I5 Model's integrated approach,
                      utilizing data and workflows within owner platforms.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Payment Approaches for Off-Site Manufacturing
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Progress payments",
                            "Milestone payments",
                            "Advance payment plus completion",
                            "Material plus value add",
                            "Stage payments",
                          ].map((approach, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-blue-500"></div>
                              {approach}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-500 mt-4">
                          Verification methodologies for these are potentially based on data feeds into AEC and Quality
                          platforms.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Security Approaches</h3>
                        <ul className="space-y-3">
                          {[
                            "Off-site materials bonds",
                            "Vesting certificates (transferring ownership upon payment)",
                            "Advance payment guarantees",
                            "Escrow arrangements",
                            "Specific insurance coverage for off-site components",
                          ].map((security, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-blue-500"></div>
                              {security}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Container 5: Dispute Prevention */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Dispute Prevention and Resolution</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Effective dispute management focuses first on prevention through{" "}
                      <strong>clear communication and proactive issue resolution</strong>, greatly facilitated by{" "}
                      <strong>transparency provided by owner platforms (like AEC)</strong>.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tiered Issue Resolution Processes</h3>
                        <ul className="space-y-3">
                          {[
                            "Initial discussion between project team members",
                            "Escalation to contract managers",
                            "Mediation with a neutral third party",
                            "Formal dispute resolution (arbitration or litigation)",
                          ].map((process, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {process}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Elements of Dispute Prevention</h3>
                        <ul className="space-y-3">
                          {[
                            "Clear contract language and defined roles/responsibilities",
                            "Proactive communication and information sharing via owner platforms",
                            "Regular progress meetings and documented decisions",
                            "Prompt response to issues and change requests",
                            "Collaborative problem-solving approach",
                          ].map((element, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {/* Supply Chain Ecosystem Tab */}
            {activeTab === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-16">
                  {/* Container 1: Purpose */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Purpose of Managing the Supply Chain Ecosystem
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Supply chain network design establishes the optimal structure of suppliers, manufacturers,
                      distributors, and logistics providers to support the I5 Model's productized approach. This design
                      explicitly considers{" "}
                      <strong>integration with the owner's digital platforms (SCM, AEC, DfMA)</strong>. Effective
                      network design balances efficiency, resilience, and innovation across the ecosystem, integrated
                      digitally.
                    </p>
                  </section>

                  {/* Container 2: Network Design */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Supply Chain Network Design</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Key elements of supply chain network design in I5 include:
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      {[
                        {
                          title: "Manufacturing Facility Strategy",
                          description:
                            "(Typically partner facilities) Focuses on location decisions, capacity planning, and the level of technology and automation (partner technology potentially meeting owner requirements).",
                        },
                        {
                          title: "Supplier Network Configuration",
                          description:
                            "Defines the tier structure, geographic distribution, and redundancy strategies.",
                        },
                        {
                          title: "Logistics and Distribution System",
                          description:
                            "Addresses transportation modes, warehousing, and Just-In-Time (JIT) vs. buffer inventory strategies.",
                        },
                        {
                          title: "Information and Planning Systems",
                          description:
                            "Leverages owner platforms and integrated partner systems for demand forecasting, production planning, inventory management, order management, tracking, and performance measurement.",
                        },
                      ].map((element, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{element.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{element.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Supply Chain Configuration Options */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Supply Chain Configuration Options</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            config: "Vertically Integrated",
                            description:
                              "Requires full adoption and integration of internal manufacturing systems with the owner's core platforms (AEC, DfMA, SCM, BoK).",
                            complexity: "High",
                          },
                          {
                            config: "Strategic Partnership Network",
                            description:
                              "Requires robust, standardized integration protocols between owner platforms and strategic partner systems.",
                            complexity: "Medium-High",
                          },
                          {
                            config: "Managed Supply Network",
                            description:
                              "Requires strong owner capability to manage multiple integrations and enforce data standards across diverse partners interacting with owner platforms.",
                            complexity: "Medium",
                          },
                          {
                            config: "Hybrid Configuration",
                            description:
                              "Requires managing both internal system integration and external partner system integration with owner platforms.",
                            complexity: "High",
                          },
                        ].map((config, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{config.config}</h4>
                              <span
                                className={`px-2 py-1 text-xs rounded-full bg-blue-100 text-black ${
                                  config.complexity === "High"
                                    ? "bg-gray-200 text-gray-800"
                                    : config.complexity === "Medium-High"
                                      ? "bg-gray-100 text-gray-700"
                                      : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {config.complexity}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{config.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Supply Chain Visualization */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                      {
                        title: "Manufacturing",
                        image: "/images/modular-wooden-house.png",
                        description: "Off-site production facilities",
                      },
                      {
                        title: "Logistics",
                        image: "/images/waterfront-luxury-villa.png",
                        description: "JIT delivery systems",
                      },
                      {
                        title: "Assembly",
                        image: "/images/lattice-structure-tower.png",
                        description: "On-site integration",
                      },
                      {
                        title: "Coordination",
                        image: "/images/curved-townhouse-row.png",
                        description: "Platform-enabled management",
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                        <div className="aspect-square relative overflow-hidden">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-3 left-3">
                            <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                            <p className="text-xs text-gray-200">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Container 3: Supplier Development */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Supplier Development and Management</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Effective supplier development actively enhances supplier performance, fosters innovation, and
                      creates a collaborative ecosystem supporting the I5 Model. This explicitly includes the supplier's{" "}
                      <strong>ability to integrate digitally with the owner's ecosystem</strong>.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Core Supplier Development Focus Areas
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              area: "Capability Enhancement",
                              description: "Particularly digital integration capabilities with owner platforms",
                              icon: <Rocket className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                            },
                            {
                              area: "Performance Improvement",
                              description: "Continuous improvement in quality, cost, and delivery metrics",
                              icon: <TrendingUp className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                            },
                            {
                              area: "Innovation and Knowledge Sharing",
                              description: "Collaborative development of new solutions and processes",
                              icon: <Lightbulb className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                            },
                            {
                              area: "Relationship and Integration",
                              description:
                                "Collaborative planning processes and information sharing via owner platforms",
                              icon: <Handshake className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                            },
                          ].map((area, index) => (
                            <div key={index} className="flex items-start">
                              <div className="mr-3">{area.icon}</div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">{area.area}</h4>
                                <p className="text-sm text-gray-600">{area.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Supplier Development Approaches</h3>
                        <div className="space-y-4">
                          {[
                            {
                              approach: "Formal Programs",
                              description: "Structured development initiatives with clear objectives and timelines",
                            },
                            {
                              approach: "Joint Improvement Initiatives",
                              description: "Improving data exchange efficiency and collaborative processes",
                            },
                            {
                              approach: "Capability Building Workshops",
                              description:
                                "Including training on owner platform usage protocols, data standards, or required integration technologies",
                            },
                            {
                              approach: "Direct Technology/System Integration Support",
                              description:
                                "Establishing required integrations between partner systems and owner platforms",
                            },
                          ].map((approach, index) => (
                            <div key={index} className="border-l-4 border-gray-200 pl-4">
                              <h4 className="font-semibold text-gray-900 mb-1">{approach.approach}</h4>
                              <p className="text-sm text-gray-600">{approach.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Container 4: Parallel Management */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Parallel Off-Site and On-Site Management</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Parallel off-site and on-site management establishes processes and tools{" "}
                      <strong>(primarily owner platforms like AEC)</strong> to coordinate manufacturing activities
                      (partner facilities) with site construction, ensuring smooth integration of prefabricated
                      components with site-built elements.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Coordination Challenges</h3>
                        <ul className="space-y-3">
                          {[
                            "Schedule synchronization",
                            "Quality and compliance",
                            "Information management (via owner platforms)",
                            "Resource allocation",
                          ].map((challenge, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Critical Tools for Parallel Management
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">Leveraging owner platforms include:</p>
                        <ul className="space-y-2">
                          {[
                            "Integrated Master Schedule (AEC): Manages schedule planning, critical path analysis, and resource allocation, with regular updates from both factory and site teams",
                            "Last Planner System: Potentially managed via AEC collaboration features",
                            "Production Control System (Partner): Must integrate with the owner AEC platform to provide required status updates and data feeds",
                            "Logistics Management System: Tracking integration with owner AEC/SCM platforms",
                            "Quality Management System (Owner): Applies consistent standards (BoK) and manages streamlined documentation (AEC/Quality), requiring partner data feeds",
                            "Visual Management Boards: Digital boards integrated with AEC platform data are preferred",
                          ].map((tool, index) => (
                            <li key={index} className="text-xs text-gray-600">
                              • {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Container 5: JIT Delivery */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Logistics and Just-In-Time (JIT) Delivery</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Integrated logistics management ensures that materials, components, and modules flow efficiently
                      from suppliers through manufacturing to the construction site, with minimal inventory and JIT
                      delivery. This is <strong>coordinated via owner platforms and integrated partner systems</strong>.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">JIT Implementation Components</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          {
                            component: "Demand Signal Management",
                            description:
                              "Uses owner AEC/SCM platforms and potentially supplier portals to communicate production/site needs",
                            icon: <Signal className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                          },
                          {
                            component: "Supplier Integration",
                            description:
                              "Achieved through collaborative planning tools and shared forecasts via owner platforms",
                            icon: <Handshake className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                          },
                          {
                            component: "Delivery Scheduling",
                            description:
                              "Leverages transportation management systems (TMS) and delivery scheduling platforms integrated with owner AEC",
                            icon: <Calendar className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                          },
                          {
                            component: "Inventory Minimization",
                            description:
                              "Achieved through RFID tracking (owner standards) and inventory management systems with integrated visibility",
                            icon: <Package className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                          },
                          {
                            component: "Logistics Monitoring",
                            description:
                              "Uses IoT sensors and real-time tracking dashboards, with an integrated view potentially via owner AEC/SCM platform",
                            icon: <Activity className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                          },
                          {
                            component: "Exception Management",
                            description:
                              "Relies on alert systems and mobile communication tools, which can be integrated with owner platforms",
                            icon: <AlertTriangle className="h-6 w-6 text-[#2563EB]" strokeWidth={1} />,
                          },
                        ].map((comp, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="mb-2">{comp.icon}</div>
                            <h4 className="font-semibold text-gray-900 mb-2">{comp.component}</h4>
                            <p className="text-sm text-gray-600">{comp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
            )}

            {/* Comparative Analysis Tab */}
            {activeTab === 5 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-16">
                  {/* Container 1: Purpose */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Purpose of Comparative Analysis and Decision Guide
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      This section provides a structured approach to help organizations select the most appropriate
                      contract and procurement strategies for specific project contexts, organizational capabilities,
                      and strategic objectives within the I5 framework. A key focus is{" "}
                      <strong>considering the owner-controlled technology ecosystem</strong> in these decisions.
                    </p>
                  </section>

                  {/* Container 2: Decision Factors */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contract Model Selection Decision Factors</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      The decision to adopt a specific contract model should be informed by:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        {
                          title: "Project Characteristics",
                          items: [
                            "Size, complexity, schedule requirements",
                            "Design certainty, standardization potential",
                            "Off-site manufacturing scope",
                            "Site constraints",
                          ],
                        },
                        {
                          title: "Organizational Capabilities",
                          items: [
                            "Procurement and contract management expertise",
                            "IT capability to manage owner platforms",
                            "Capability to define and enforce technology standards",
                          ],
                        },
                        {
                          title: "Market Conditions",
                          items: [
                            "Supply chain maturity for prefabrication",
                            "Contractor capabilities and experience",
                            "Partner digital readiness and capability",
                            "Regulatory environment",
                          ],
                        },
                        {
                          title: "Strategic Objectives",
                          items: [
                            "Schedule acceleration, cost certainty",
                            "Quality and performance expectations",
                            "Risk tolerance, long-term relationship development goals",
                            "Innovation priorities",
                            "Desired level of technology control",
                          ],
                        },
                      ].map((factor, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">{factor.title}</h3>
                          <ul className="space-y-2">
                            {factor.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Container 3: Selection Matrix */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contract Model Selection Matrix</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      A contract model selection matrix helps evaluate suitability for different project types. For
                      example, IPD and Progressive Design-Build are highly suitable for projects with high design
                      uncertainty or complex integration requirements, facilitating{" "}
                      <strong>collaborative technology solutioning</strong>. All integrated models support faster
                      schedules, <strong>enabled by owner platforms</strong>, and platforms enhance repeatability across
                      all models. It is crucial to note that the{" "}
                      <strong>
                        owner retains platform administration responsibility regardless of the chosen contract model
                      </strong>
                      .
                    </p>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-3 px-4 font-semibold text-gray-900">Contract Model</th>
                              <th className="text-center py-3 px-4 font-semibold text-gray-900">Design Uncertainty</th>
                              <th className="text-center py-3 px-4 font-semibold text-gray-900">Complex Integration</th>
                              <th className="text-center py-3 px-4 font-semibold text-gray-900">
                                Schedule Acceleration
                              </th>
                              <th className="text-center py-3 px-4 font-semibold text-gray-900">Technology Control</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                model: "IPD",
                                uncertainty: "High",
                                integration: "High",
                                schedule: "High",
                                control: "High",
                              },
                              {
                                model: "Progressive Design-Build",
                                uncertainty: "High",
                                integration: "High",
                                schedule: "Medium",
                                control: "Medium",
                              },
                              {
                                model: "Design-Build",
                                uncertainty: "Medium",
                                integration: "Medium",
                                schedule: "High",
                                control: "Medium",
                              },
                              {
                                model: "Alliance Contracting",
                                uncertainty: "High",
                                integration: "High",
                                schedule: "Medium",
                                control: "High",
                              },
                              {
                                model: "CMAR",
                                uncertainty: "Medium",
                                integration: "Medium",
                                schedule: "Medium",
                                control: "Medium",
                              },
                              {
                                model: "Framework Agreement",
                                uncertainty: "Low",
                                integration: "Medium",
                                schedule: "High",
                                control: "High",
                              },
                            ].map((row, index) => (
                              <tr key={index} className="border-b border-gray-200">
                                <td className="py-3 px-4">
                                  <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-3 bg-blue-500"></div>
                                    <span className="font-medium">{row.model}</span>
                                  </div>
                                </td>
                                <td className="text-center py-3 px-4">
                                  <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                      row.uncertainty === "High"
                                        ? "bg-gray-200 text-gray-800"
                                        : row.uncertainty === "Medium"
                                          ? "bg-gray-100 text-gray-700"
                                          : "bg-gray-50 text-gray-600"
                                    }`}
                                  >
                                    {row.uncertainty}
                                  </span>
                                </td>
                                <td className="text-center py-3 px-4">
                                  <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                      row.integration === "High"
                                        ? "bg-gray-200 text-gray-800"
                                        : row.integration === "Medium"
                                          ? "bg-gray-100 text-gray-700"
                                          : "bg-gray-50 text-gray-600"
                                    }`}
                                  >
                                    {row.integration}
                                  </span>
                                </td>
                                <td className="text-center py-3 px-4">
                                  <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                      row.schedule === "High"
                                        ? "bg-gray-200 text-gray-800"
                                        : row.schedule === "Medium"
                                          ? "bg-gray-100 text-gray-700"
                                          : "bg-gray-50 text-gray-600"
                                    }`}
                                  >
                                    {row.schedule}
                                  </span>
                                </td>
                                <td className="text-center py-3 px-4">
                                  <span
                                    className={`px-2 py-1 text-xs rounded-full ${
                                      row.control === "High"
                                        ? "bg-gray-200 text-gray-800"
                                        : row.control === "Medium"
                                          ? "bg-gray-100 text-gray-700"
                                          : "bg-gray-50 text-gray-600"
                                    }`}
                                  >
                                    {row.control}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Best Practices Visualization */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src="/images/pod-window-facade.png"
                          alt="International best practices"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <h4 className="text-lg font-semibold text-white">International Best Practices</h4>
                          <p className="text-sm text-gray-200">Global insights for I5 implementation</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src="/images/angular-modular-building.png"
                          alt="Regional adaptation"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <h4 className="text-lg font-semibold text-white">UAE/GCC Adaptation</h4>
                          <p className="text-sm text-gray-200">Regional context and requirements</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Container 4: Best Practices */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">International and Regional Best Practices</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Insights from global and regional best practices inform I5 implementation, particularly regarding
                      technology integration:
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">International Best Practices</h3>
                        <div className="space-y-4">
                          {[
                            {
                              practice: "Scandinavian Collaborative Approaches",
                              description:
                                "Emphasize integrated digital platforms. For I5, this translates to adapting framework agreements and focusing on robust integration protocols for owner platforms.",
                            },
                            {
                              practice: "Japanese Industrialized Housing Systems",
                              description:
                                "Focus on vertically integrated manufacturing and standardized component libraries. For I5, this informs the standardized component approach (BoK) and encourages considering selective vertical integration versus strong partnerships.",
                            },
                            {
                              practice: "North American Integrated Project Delivery (IPD)",
                              description:
                                "Emphasizes multi-party agreements and target value design. For I5, this means adapting collaborative contract models and explicitly adding technology governance to IPD agreements.",
                            },
                            {
                              practice: "Australian Alliance Contracting",
                              description:
                                "Promotes shared risk. For I5, this means integrating technology risk into the shared risk pool.",
                            },
                          ].map((item, index) => (
                            <div key={index} className="border-l-4 pl-4 border-blue-500">
                              <h4 className="font-semibold text-gray-900 mb-2">{item.practice}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Regional Best Practices in UAE and GCC
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              practice: "Modified FIDIC Approaches",
                              description:
                                "Familiar in the region. For I5, this means adding robust clauses for owner platforms, integration, and partner technology governance to FIDIC-based contracts.",
                            },
                            {
                              practice: "Public Sector Framework Agreements",
                              description:
                                "Provide a template for standardized prequalification, including digital readiness.",
                            },
                            {
                              practice: "Joint Venture (JV) Delivery Models",
                              description: "It is crucial to clarify how JVs interact with owner platforms.",
                            },
                            {
                              practice: "Early Contractor Involvement",
                              description: "Requires assessing the digital capability of contractors in early stages.",
                            },
                          ].map((item, index) => (
                            <div key={index} className="border-l-4 pl-4 border-blue-500">
                              <h4 className="font-semibold text-gray-900 mb-2">{item.practice}</h4>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Container 5: Integration with Other Frameworks */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      Integration with Other Frameworks (Reinforced)
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Procurement and contract strategies are closely aligned with the financial parameters and
                      operational models of the I5 framework, ensuring alignment across all aspects of implementation,
                      including the <strong>owner-controlled technology ecosystem</strong>.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="rounded-xl p-6 border border-gray-200 bg-transparent">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Integration with Financial Parameters
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                          {[
                            "Contract structures support the investment framework",
                            "Payment mechanisms align with capital requirements (including any partner investment needed for technology integration)",
                            "Risk allocation reflects financial risk management (including technology risks)",
                            "Performance metrics in contracts align with ROI calculations",
                            "Value engineering protocols are integrated into contractual processes",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 bg-blue-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl p-6 border border-gray-200 bg-transparent">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration with Operational Model</h3>
                        <ul className="space-y-3 text-gray-600">
                          {[
                            "Contractual roles and responsibilities align with the steady-state operational structure, including platform interaction roles and technology governance",
                            "Contract metrics align with operational KPIs (tracked via owner platforms)",
                            "Reporting requirements support operational monitoring needs",
                            "Contractual incentives reinforce operational performance objectives",
                            "Contract clauses explicitly define partner obligations regarding owner platforms (access, security, data) and partner technology",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 text-blue-500 bg-blue-500"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Container 6: Roadmap */}
                  <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Procurement Strategy Roadmap</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Implementing new procurement and contract approaches requires a structured roadmap:
                    </p>

                    <div className="space-y-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Maturity Assessment</h3>
                        <p className="text-gray-600 mb-4">
                          Assess current maturity, including{" "}
                          <strong>digital procurement and technology governance capabilities</strong>.
                        </p>
                      </div>

                      <div className="bg-white rounded-xl border border-gray-200 p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Phased Implementation</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {[
                            {
                              phase: "Phase 1: Foundation Building",
                              description: "Define initial requirements for partner access to owner platforms.",
                            },
                            {
                              phase: "Phase 2: Capability Enhancement",
                              description:
                                "Develop detailed platform integration protocols and define standard technology clauses for contracts.",
                            },
                            {
                              phase: "Phase 3: Integration and Optimization",
                              description:
                                "Refine the partner technology governance framework (e.g., checklists, matrices).",
                            },
                            {
                              phase: "Phase 4: Transformation and Innovation",
                              description:
                                "Focus on evolving the platform ecosystem and integration capabilities to drive continuous innovation and market leadership.",
                            },
                          ].map((phase, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-2">{phase.phase}</h4>
                              <p className="text-sm text-gray-600">{phase.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Planning</h3>
                        <p className="text-gray-600">
                          Adapt the roadmap considering factors like <strong>current digital/platform maturity</strong>{" "}
                          and the overall <strong>technology control strategy</strong>.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Implementation Roadmap Visual */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Implementation Journey</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                      {[
                        {
                          phase: "Foundation",
                          image: "/images/stacked-geometric-volumes.png",
                          description: "Building core capabilities",
                        },
                        {
                          phase: "Enhancement",
                          image: "/images/luxury-modern-mansion.png",
                          description: "Developing integration protocols",
                        },
                        {
                          phase: "Optimization",
                          image: "/images/blue-modular-housing.png",
                          description: "Refining governance frameworks",
                        },
                        {
                          phase: "Innovation",
                          image: "/images/brutalist-concrete-complex.png",
                          description: "Driving market leadership",
                        },
                      ].map((phase, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
                        >
                          <div className="aspect-square relative overflow-hidden">
                            <img
                              src={phase.image || "/placeholder.svg"}
                              alt={phase.phase}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-3 left-3">
                              <h4 className="text-sm font-semibold text-white">{phase.phase}</h4>
                              <p className="text-xs text-gray-200">{phase.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </section>
    </div>
  )
}
