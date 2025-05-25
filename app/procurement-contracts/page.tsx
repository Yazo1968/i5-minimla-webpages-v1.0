"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Animation variants
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
  hidden: { opacity: 0, y: 30 },
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

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

// Animation helper components
function SplitTextAnimation({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(" ")

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  )
}

function AnimatedElement({
  children,
  delay = 0,
  direction = "up",
}: {
  children: any
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Expandable Detail Component
function DetailSection({
  title,
  children,
  defaultExpanded = false,
}: {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-sm flex items-center">
          <Info className="w-4 h-4 mr-2 text-blue-600" />
          {title}
        </span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-600" />
        )}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white border-t border-gray-200 max-h-96 overflow-y-auto">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Internal Navigation Component
const InternalNavigation = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "introduction", label: "INTRODUCTION" },
    { id: "guiding-principles", label: "PRINCIPLES" },
    { id: "category-management", label: "CATEGORIES" },
    { id: "contract-models", label: "CONTRACTS" },
    { id: "administration", label: "ADMIN" },
    { id: "supply-chain", label: "SUPPLY CHAIN" },
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
  }, [])

  return (
    <header className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="text-lg font-mono font-bold tracking-tight">PROCUREMENT & CONTRACTS</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
                className={`text-xs font-mono transition-all duration-300 relative ${
                  activeSection === section.id ? "text-black" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {section.label}
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
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
                className={`text-xs font-mono px-1 py-1 h-8 ${
                  activeSection === section.id ? "bg-gray-100 text-black" : "text-gray-500"
                }`}
              >
                {section.label.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => {
                document.getElementById(e.target.value)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
              className="w-48 h-8 text-xs font-mono border border-gray-300 rounded"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function ProcurementContractsPage() {
  return (
    <>
      <InternalNavigation />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-6">
        {/* Introduction - Single Viewport */}
        <div id="introduction" className="h-screen flex flex-col justify-center py-8">
          <div className="max-h-full overflow-hidden">
            <SplitTextAnimation
              text="procurement & contracts: building collaborative value chains for I5"
              className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight border-b-4 border-black pb-2 mb-3"
              delay={0}
            />

            <SplitTextAnimation
              text="strategic sourcing and aligned agreements for integrated, technology-enabled delivery"
              className="text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-4"
              delay={0.2}
            />

            <AnimatedElement delay={0.3}>
              <div className="space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                <p>
                  The transformative potential of the I5 Real Estate Delivery Model is critically dependent on a
                  sophisticated and forward-thinking approach to <strong>Procurement and Contract Strategies</strong>.
                  Traditional, often siloed and adversarial, procurement and contracting practices are fundamentally
                  misaligned with I5's core principles of productization, integration, and lifecycle value creation.
                </p>
                <p>
                  I5 necessitates a paradigm shift towards collaborative, value-centric procurement and strategically
                  crafted contractual frameworks designed to foster long-term partnerships, align incentives, manage
                  risk, and seamlessly integrate the entire supply chain into the Owner's controlled digital ecosystem.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <DetailSection title="Core Technology Governance Requirements">
                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    A non-negotiable cornerstone of I5 procurement and contracting is the explicit codification of the{" "}
                    <strong>Owner's direct control over its core digital platforms</strong> (BoK, VS, DfMA, AEC, SCM,
                    etc.) and the{" "}
                    <strong>
                      Owner's clear authority to define technical and operational requirements for any partner-used
                      construction technologies
                    </strong>{" "}
                    that interact with or feed data into this Owner ecosystem.
                  </p>
                  <p>
                    This governance is embedded contractually to ensure data integrity, security, interoperability, and
                    strategic alignment (I5 Tech HB: Sec 2.1, Sec 9.1.1, Sec 9.4). The Owner maintains absolute control
                    over:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Platform access rights and usage protocols</li>
                    <li>Data formats, security standards, and API specifications</li>
                    <li>Integration requirements for partner technologies</li>
                    <li>Performance and visibility standards for all connected systems</li>
                  </ul>
                </div>
              </DetailSection>
            </AnimatedElement>
          </div>
        </div>

        {/* Guiding Principles - Single Viewport */}
        <div id="guiding-principles" className="h-screen flex flex-col justify-center py-8">
          <div className="max-h-full overflow-hidden">
            <SplitTextAnimation
              text="guiding principles for I5 procurement: a strategic evolution"
              className="text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
              delay={0}
            />

            <AnimatedElement delay={0.2}>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">
                The I5 Model champions a set of procurement principles that move beyond transactional purchasing to
                strategic value creation (I5 HB: Sec 9.1.1):
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="p-3 bg-gray-50 mb-4 cursor-pointer"
              >
                <h3 className="font-semibold mb-3 text-center text-xs uppercase tracking-wider">
                  Seven Guiding Principles for I5 Procurement
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-2"
                >
                  {[
                    {
                      number: "1",
                      title: "Lifecycle Value",
                      description: "Total cost of ownership, quality, durability over lowest initial cost",
                    },
                    {
                      number: "2",
                      title: "Early Involvement",
                      description: "Supply chain engaged during Product Definition phases",
                    },
                    {
                      number: "3",
                      title: "Strategic Partnerships",
                      description: "Long-term relationships over ad-hoc engagements",
                    },
                    {
                      number: "4",
                      title: "Integrated Scope",
                      description: "Functional systems vs fragmented trades",
                    },
                    {
                      number: "5",
                      title: "Collaborative Risk",
                      description: "Fair allocation based on management capability",
                    },
                    {
                      number: "6",
                      title: "Performance Incentives",
                      description: "Rewards for quality, schedule, cost savings",
                    },
                    {
                      number: "7",
                      title: "Technology Mandate",
                      description: "Contractual requirements for platform use",
                    },
                  ].map((principle, index) => (
                    <motion.div
                      key={index}
                      className="p-2 bg-white border border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="text-lg font-bold text-gray-600 mb-1">{principle.number}</div>
                      <div className="font-semibold text-xs mb-1">{principle.title}</div>
                      <div className="text-xs text-gray-600 leading-tight">{principle.description}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <DetailSection title="Detailed Principles Explanations">
                <div className="space-y-4 text-sm leading-relaxed text-gray-800">
                  <ol className="list-decimal list-inside space-y-4">
                    <li>
                      <strong>Lifecycle Value over Lowest Initial Cost:</strong> Decisions prioritize total cost of
                      ownership, quality, durability, operational efficiency, and seamless integration over simply the
                      cheapest upfront bid. This holistic view is supported by data from the Owner's integrated
                      platforms.
                    </li>
                    <li>
                      <strong>Early and Deep Supply Chain Involvement:</strong> Crucial suppliers, manufacturers, and
                      specialist contractors are engaged during the I5 "Product Definition" and "Product Configuration"
                      phases (I5 Phases 1 & 2). Their expertise directly informs design for manufacturability (DfMA),
                      cost modeling, and risk identification, facilitated by collaborative work within the Owner's{" "}
                      <strong>DfMA and AEC Platforms</strong> (I5 HB: Sec 9.1.3; I5 Tech HB: Sec 4.1, Sec 4.2). This
                      proactive engagement significantly reduces costly late-stage changes.
                    </li>
                    <li>
                      <strong>Strategic, Program-Level Partnerships:</strong> Emphasis is placed on developing long-term
                      relationships with key partners rather than ad-hoc, project-by-project engagements. This fosters
                      trust, shared learning, continuous improvement, and supply chain stability, with partners becoming
                      proficient in I5 processes and technology interactions.
                    </li>
                    <li>
                      <strong>Integrated Scope Definition & Responsibility:</strong> Procurement focuses on integrated
                      functional systems, modules, or comprehensive service packages, rather than fragmented
                      trade-specific scopes. This approach minimizes ambiguous interface responsibilities and promotes
                      holistic system optimization.
                    </li>
                    <li>
                      <strong>Collaborative Risk Management & Balanced Allocation:</strong> Risks, including those
                      associated with technology (Owner platforms, integrations, partner tech dependencies), are
                      identified, assessed, and managed collaboratively. Contracts aim for fair risk allocation based on
                      who is best placed to manage a specific risk, rather than unilaterally transferring it. This
                      encourages transparency and proactive mitigation (I5 HB: Sec 9.2.3; I5 Tech HB: Sec 11.3).
                    </li>
                    <li>
                      <strong>Performance-Based Incentives:</strong> Contracts are structured to reward contributions to
                      overall project and product success (e.g., achieving quality targets, schedule milestones, cost
                      savings, successful technology integration), measured using objective data from the Owner's
                      platforms (I5 HB: Sec 9.1.1).
                    </li>
                    <li>
                      <strong>Technology Integration as a Contractual Mandate:</strong> Partner selection and
                      contractual agreements explicitly detail the technical requirements for partners to:
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                          Utilize specified Owner-controlled platforms (e.g., AEC for collaboration, BoK for accessing
                          standards).
                        </li>
                        <li>
                          Adhere to Owner-defined data formats, security protocols, and API specifications for all data
                          exchange with the Owner's ecosystem.
                        </li>
                        <li>
                          Ensure their own construction technologies (if feeding data to Owner systems) meet
                          Owner-stipulated conditions for reliability, visibility, and integration capability (I5 HB:
                          Sec 9.1.1; I5 Tech HB: Sec 9.2, Sec 9.4).
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </DetailSection>
            </AnimatedElement>
          </div>
        </div>

        {/* Category Management - Single Viewport */}
        <div id="category-management" className="h-screen flex flex-col justify-center py-8">
          <div className="max-h-full overflow-hidden">
            <SplitTextAnimation
              text="strategic category management and differentiated supplier relationships"
              className="text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
              delay={0}
            />

            <AnimatedElement delay={0.2}>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">
                I5 employs a sophisticated category management approach, developing tailored procurement strategies for
                different types of goods and services. This is coupled with supplier segmentation to manage
                relationships according to their strategic importance and integration needs (I5 HB: Sec 9.1.2).
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="p-3 bg-gray-50 mb-4 cursor-pointer"
              >
                <h3 className="font-semibold mb-3 text-center text-xs uppercase tracking-wider">
                  I5 Procurement Category Management
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-3 bg-white border border-gray-300 cursor-pointer"
                  >
                    <div className="font-semibold mb-2 text-center border-b border-gray-300 pb-1 text-xs">
                      Key Procurement Categories
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          name: "Owner Digital Platforms",
                          focus: "Long-term TCO, integration, scalability",
                        },
                        {
                          name: "Design Services",
                          focus: "DfMA capabilities, BIM proficiency",
                        },
                        {
                          name: "Manufacturing Services",
                          focus: "Quality systems, production capacity",
                        },
                        {
                          name: "Construction & Assembly",
                          focus: "Modular experience, AEC platform capability",
                        },
                      ].map((category, index) => (
                        <div key={index} className="p-2 bg-gray-50 rounded border">
                          <div className="font-semibold text-xs mb-1">{category.name}</div>
                          <div className="text-xs text-gray-600">{category.focus}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-3 bg-white border border-gray-300 cursor-pointer"
                  >
                    <div className="font-semibold mb-2 text-center border-b border-gray-300 pb-1 text-xs">
                      Supplier Segmentation
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          name: "Strategic Partners",
                          focus: "Long-term agreements, deep digital integration",
                        },
                        {
                          name: "Preferred Suppliers",
                          focus: "Framework agreements, standardized integration",
                        },
                        {
                          name: "Digital Readiness",
                          focus: "Primary criterion for segmentation and selection",
                        },
                      ].map((segment, index) => (
                        <div key={index} className="p-2 bg-gray-50 rounded border">
                          <div className="font-semibold text-xs mb-1">{segment.name}</div>
                          <div className="text-xs text-gray-600">{segment.focus}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <DetailSection title="Detailed Category Strategies and Supplier Segmentation">
                <div className="space-y-4 text-sm leading-relaxed text-gray-800">
                  <div>
                    <h4 className="font-semibold mb-2">Key Procurement Categories requiring specific I5 strategies:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Owner Digital Platforms:</strong> Involves strategic decisions on procuring or
                        developing the core BoK, VS, DfMA, AEC, SCM, etc., focusing on long-term TCO, integration,
                        scalability, security, and vendor partnership (if procured).
                      </li>
                      <li>
                        <strong>Design Services:</strong> Seeking partners with strong DfMA capabilities, a
                        collaborative mindset, and proven proficiency in utilizing the Owner's BIM (AEC) and design
                        standardization (BoK) platforms.
                      </li>
                      <li>
                        <strong>Manufacturing Services:</strong> Engaging manufacturers for standardized
                        modules/components, emphasizing their quality systems, production capacity, technological
                        capabilities (including data systems), and ability to technically integrate production data
                        (quality, status) with the Owner's DfMA/AEC platforms.
                      </li>
                      <li>
                        <strong>Construction & Assembly Services:</strong> Selecting contractors experienced in modular
                        assembly and integrated site management, capable of using the Owner's AEC platform for
                        coordination, progress reporting, and adhering to any Owner conditions for their site
                        technologies.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Supplier Segmentation Examples:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Strategic Partners</strong> (e.g., key module manufacturers, critical system suppliers):
                        Cultivated through long-term agreements with deep digital integration (e.g., real-time data
                        feeds from their MES to Owner's AEC/DfMA, co-development of BoK standards for their components).
                        Significant investment in relationship management and joint process improvement.
                      </li>
                      <li>
                        <strong>Preferred Suppliers</strong> (e.g., suppliers of standard components, key material
                        providers): Managed through framework agreements with clear performance metrics (tracked via
                        Owner's SCM/Quality platforms) and standardized digital integration requirements (e.g.,
                        adherence to specified API for order/delivery status).
                      </li>
                      <li>
                        The digital readiness and integration capability of a potential partner is a primary criterion
                        in their segmentation and selection.
                      </li>
                    </ul>
                  </div>
                </div>
              </DetailSection>
            </AnimatedElement>
          </div>
        </div>

        {/* Contract Models - Single Viewport */}
        <div id="contract-models" className="h-screen flex flex-col justify-center py-8">
          <div className="max-h-full overflow-hidden">
            <SplitTextAnimation
              text="tailoring contract models for the I5 ecosystem"
              className="text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
              delay={0}
            />

            <AnimatedElement delay={0.2}>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">
                The I5 Model thrives under contractual frameworks that promote collaboration, integration, and shared
                objectives, requiring careful selection and adaptation of standard industry forms (I5 HB: Sec 9.2). All
                contracts must embed I5's technology governance.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <div className="space-y-3">
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-gray-50 cursor-pointer"
                >
                  <h3 className="font-semibold mb-3 text-center text-xs uppercase tracking-wider">
                    Preferred Contract Models for I5
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  >
                    {[
                      {
                        type: "IPD & Alliancing",
                        features: [
                          "Multi-party agreements",
                          "Shared risk/reward pools",
                          "Collective governance",
                          "Technology risk sharing",
                        ],
                      },
                      {
                        type: "Design-Build",
                        features: [
                          "Single-point responsibility",
                          "Owner standards from BoK",
                          "Platform requirements",
                          "Progressive refinement",
                        ],
                      },
                      {
                        type: "CMAR Enhanced",
                        features: [
                          "Early CM involvement",
                          "Transparent cost management",
                          "Collaborative provisions",
                          "Interface management",
                        ],
                      },
                    ].map((contract, index) => (
                      <motion.div
                        key={index}
                        className="p-3 bg-white border border-gray-300 text-center cursor-pointer"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="font-semibold mb-2 text-xs">{contract.type}</div>
                        <ul className="space-y-1 text-xs text-left">
                          {contract.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span className="text-gray-600 mr-1 text-xs">✓</span>
                              <span className="text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-gray-800 text-white cursor-pointer"
                >
                  <h4 className="font-semibold mb-3 text-white text-xs">Essential Contractual Technology Governance</h4>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-2"
                  >
                    {[
                      {
                        title: "Platform Usage",
                        detail: "Mandatory use of Owner platforms",
                      },
                      {
                        title: "Data Standards",
                        detail: "API specs, formats, frequencies",
                      },
                      {
                        title: "Security Protocols",
                        detail: "Adherence to Owner CISO policies",
                      },
                      {
                        title: "Data Ownership",
                        detail: "All platform data remains Owner property",
                      },
                      {
                        title: "Partner Tech Requirements",
                        detail: "Owner-defined conditions for systems",
                      },
                      {
                        title: "Compliance",
                        detail: "Data privacy laws (UAE regs, GDPR)",
                      },
                    ].map((requirement, index) => (
                      <motion.div
                        key={index}
                        className="p-2 bg-gray-700 border border-gray-600 rounded cursor-pointer"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="font-semibold text-white text-xs mb-1">{requirement.title}</div>
                        <div className="text-xs text-gray-300">{requirement.detail}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <DetailSection title="Detailed Contractual Approaches and Essential Adaptations">
                <div className="space-y-4 text-sm leading-relaxed text-gray-800">
                  <div>
                    <h4 className="font-semibold mb-2">Preferred Contractual Approaches for I5:</h4>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li>
                        <strong>Integrated Project Delivery (IPD) & Alliancing:</strong> These highly collaborative
                        models, involving multi-party agreements with shared risk/reward pools and collective
                        governance, align best with I5's philosophy. They require detailed customization to incorporate
                        I5-specific processes, technology usage protocols (Owner platforms), intellectual property
                        rights related to joint innovations, and the roles of various partners within the ecosystem.
                        Technology risk related to platform integration and performance is often managed collectively.
                      </li>
                      <li>
                        <strong>Design-Build (DB) & Progressive Design-Build:</strong> These offer single-point
                        responsibility, facilitating design-construction integration. The Owner provides clearly defined
                        product standards, performance specifications (from BoK), and requirements for using Owner
                        platforms (AEC for design development/coordination, DfMA for optimization, BoK for accessing
                        standards) as part of the Employer's Requirements. Progressive DB is particularly suitable,
                        allowing collaborative refinement of design and cost with the selected DB partner before
                        finalizing a GMP, enabling better integration of manufacturing considerations.
                      </li>
                      <li>
                        <strong>Construction Management at Risk (CMAR) with Enhanced Collaboration:</strong> While more
                        traditional, CMAR can be adapted for I5 by mandating early CM involvement in design
                        (collaborating via Owner's AEC/DfMA platforms), requiring transparent cost management, and
                        incorporating strong collaborative provisions and incentive structures. Interface management
                        between designer, CM, and manufacturing partners (if procured separately by Owner or CM) is
                        critical and managed contractually.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Essential Contractual Adaptations for I5 (especially in contexts like UAE/GCC using modified
                      FIDIC):
                    </h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Clear Definition of "Product":</strong> Contract documents must clearly reference the
                        Owner's standardized product definitions, component libraries, and design guidelines managed
                        within the <strong>BoK Platform</strong>.
                      </li>
                      <li>
                        <strong>Off-Site Manufacturing Provisions:</strong> Detailed clauses covering quality assurance
                        at partner factories, inspection rights for the Owner, payment milestones tied to off-site
                        production progress (verified via data feeds to Owner's AEC/DfMA platforms), title transfer for
                        manufactured goods, transportation responsibilities, and risk of loss for off-site components.
                      </li>
                      <li>
                        <strong>Technology Governance & Platform Usage (Mandatory Clauses):</strong> Explicit
                        requirement for all relevant parties to utilize specified Owner-controlled digital platforms,
                        detailed specifications for partner data access rights, security protocols, data ownership
                        clauses, mandated technical standards for data exchange interfaces, Owner's right to define
                        conditions for partner-used construction technologies, and compliance with all relevant data
                        privacy laws.
                      </li>
                      <li>
                        <strong>Integrated Design & Change Management:</strong> Processes for collaborative design
                        refinement and managing changes via an integrated workflow, often orchestrated by the BoK
                        Governance Hub.
                      </li>
                      <li>
                        <strong>Risk & Reward Sharing Specific to Productized Delivery:</strong> Mechanisms that account
                        for risks unique to off-site manufacturing and the benefits of standardization.
                      </li>
                      <li>
                        <strong>Interface Management:</strong> Clearly defined responsibilities for managing the
                        critical interfaces between off-site manufactured components and on-site construction.
                      </li>
                    </ul>
                  </div>
                </div>
              </DetailSection>
            </AnimatedElement>
          </div>
        </div>

        {/* Contract Administration - Single Viewport */}
        <div id="administration" className="h-screen flex flex-col justify-center py-8">
          <div className="max-h-full overflow-hidden">
            <SplitTextAnimation
              text="collaborative contract administration & digitally enabled management"
              className="text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
              delay={0}
            />

            <AnimatedElement delay={0.2}>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">
                I5 transforms contract administration into a proactive, collaborative function that leverages the
                Owner's integrated digital platforms for efficiency and transparency (I5 HB: Sec 9.3).
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="p-3 bg-gray-50 mb-4 cursor-pointer"
              >
                <h3 className="font-semibold mb-3 text-center text-xs uppercase tracking-wider">
                  Digital Contract Administration Process
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-center justify-center space-x-2 flex-wrap gap-2"
                >
                  {[
                    "Shared Understanding\n(BoK Documentation)",
                    "Digital Management\n(AEC as CDE)",
                    "Automated Workflows\n(AEC/BoK)",
                    "Real-time Tracking\n(Integrated Platforms)",
                    "Dispute Prevention\n(Transparency)",
                  ].map((step, index, array) => (
                    <React.Fragment key={index}>
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gray-100 border border-gray-400 rounded p-2 text-center text-xs font-medium w-24"
                      >
                        {step.split("\n").map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </motion.div>
                      {index < array.length - 1 && (
                        <motion.div
                          variants={iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <ArrowRight className="w-3 h-3 text-gray-600" />
                        </motion.div>
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4"
              >
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-white border border-gray-300 cursor-pointer"
                >
                  <h4 className="font-semibold text-xs mb-2">Key Administration Features</h4>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Shared understanding via BoK documentation</li>
                    <li>• Centralized contract documentation (AEC as CDE)</li>
                    <li>• Automated workflows for reviews and approvals</li>
                    <li>• Real-time tracking of obligations and deliverables</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-white border border-gray-300 cursor-pointer"
                >
                  <h4 className="font-semibold text-xs mb-2">Financial Management</h4>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• Payment structures adapted for off-site manufacturing</li>
                    <li>• Verified milestone payments based on data feeds</li>
                    <li>• Real-time cost tracking across integrated systems</li>
                    <li>• Transparent financial management for all stakeholders</li>
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.5}>
              <DetailSection title="Comprehensive Contract Administration Details">
                <div className="space-y-4 text-sm leading-relaxed text-gray-800">
                  <ul className="list-disc list-inside space-y-3">
                    <li>
                      <strong>Shared Understanding & Proactive Issue Resolution:</strong> Emphasis on joint contract
                      understanding (potentially documented in BoK) and early, collaborative resolution of issues using
                      shared information within platforms like the <strong>AEC Platform</strong> (for project issues,
                      progress, quality data) and <strong>SCM Platform</strong> (for supplier performance, delivery
                      status), minimizing formal disputes.
                    </li>
                    <li>
                      <strong>Digital Contract Management:</strong> The Owner's digital ecosystem supports:
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>
                          Centralized contract documentation and version control (<strong>AEC as CDE</strong>).
                        </li>
                        <li>
                          Automated workflows (within <strong>AEC or BoK</strong>) for contract reviews, approvals, and
                          change order processing.
                        </li>
                        <li>
                          Tracking of contractual obligations and deliverables against project progress (in{" "}
                          <strong>AEC</strong>).
                        </li>
                        <li>
                          Linking payment milestones (<strong>Financial Systems</strong>) to verified completion data
                          (from <strong>AEC</strong> or partner feeds).
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Transparent Financial Management for Productized Delivery:</strong> Payment structures are
                      adapted to the cash flow needs of off-site manufacturing (e.g., verified milestone payments for
                      factory production based on data from Partner MES fed to AEC/DfMA). Real-time cost tracking
                      (integrating <strong>AEC, SCM, and Financial Systems</strong>) provides transparency for all
                      stakeholders.
                    </li>
                    <li>
                      <strong>Streamlined Dispute Prevention and Resolution:</strong> While contracts define formal
                      dispute resolution paths, the I5 approach prioritizes prevention through clarity (BoK standards),
                      transparency (shared platform data), and structured, multi-tiered internal escalation processes
                      before resorting to external ADR. The <strong>BoK Governance Hub</strong> may manage workflows for
                      escalating and resolving certain types of contractual disagreements internally.
                    </li>
                  </ul>
                </div>
              </DetailSection>
            </AnimatedElement>
          </div>
        </div>

        {/* Supply Chain - Single Viewport */}
        <div id="supply-chain" className="h-screen flex flex-col justify-center py-8">
          <div className="max-h-full overflow-hidden">
            <SplitTextAnimation
              text="optimizing the supply chain ecosystem for I5"
              className="text-sm md:text-base lg:text-lg font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
              delay={0}
            />

            <AnimatedElement delay={0.2}>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3">
                Effective I5 delivery requires managing the supply chain as an integrated ecosystem, not a disparate
                collection of vendors. This involves strategic network design, continuous supplier development, and
                meticulous coordination of parallel off-site and on-site activities, all digitally enabled (I5 HB: Sec
                9.4).
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="p-3 bg-gray-50 mb-4 cursor-pointer"
              >
                <h3 className="font-semibold mb-3 text-center text-xs uppercase tracking-wider">
                  I5 Supply Chain Ecosystem
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-3"
                >
                  {[
                    {
                      title: "Network Design",
                      items: ["Manufacturing Locations", "Key Suppliers", "Logistics Hubs", "JIT Optimization"],
                    },
                    {
                      title: "Supplier Development",
                      items: [
                        "Quality Management",
                        "Lean Manufacturing",
                        "Digital Integration",
                        "Performance Tracking",
                      ],
                    },
                    {
                      title: "Digital Coordination",
                      items: ["AEC Central Hub", "Partner Data Feeds", "JIT Scheduling", "Disruption Management"],
                    },
                  ].map((layer, index) => (
                    <motion.div
                      key={index}
                      className="p-2 bg-white border border-gray-300 cursor-pointer"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="font-semibold mb-2 text-xs">{layer.title}</div>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-1"
                      >
                        {layer.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="text-center p-1 bg-gray-50 rounded border text-xs"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4"
              >
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-white border border-gray-300 cursor-pointer"
                >
                  <h4 className="font-semibold text-xs mb-2">Network Design</h4>
                  <p className="text-xs text-gray-700">
                    Supply chain network optimized for JIT delivery, planned using Owner's SCM and AEC platforms.
                  </p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-white border border-gray-300 cursor-pointer"
                >
                  <h4 className="font-semibold text-xs mb-2">Supplier Development</h4>
                  <p className="text-xs text-gray-700">
                    Investment in supplier capabilities, particularly digital integration and data feed requirements.
                  </p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-3 bg-white border border-gray-300 cursor-pointer"
                >
                  <h4 className="font-semibold text-xs mb-2">Digital Coordination</h4>
                  <p className="text-xs text-gray-700">
                    AEC Platform serves as central coordination point for off-site and on-site dependencies.
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.5}>
              <DetailSection title="Detailed Supply Chain Management Strategies">
                <div className="space-y-4 text-sm leading-relaxed text-gray-800">
                  <ul className="list-disc list-inside space-y-3">
                    <li>
                      <strong>Integrated Supply Chain Network Design:</strong> The design of the supply chain network
                      (locations of manufacturers, key suppliers, logistics hubs) is optimized to support JIT delivery
                      for I5 products. This involves close collaboration with strategic partners, often planned and
                      visualized using the Owner's <strong>SCM and AEC platforms</strong>.
                    </li>
                    <li>
                      <strong>Proactive Supplier Development & Management:</strong> The Owner invests in developing
                      supplier capabilities, particularly in areas of quality management, lean manufacturing, and
                      crucially, <strong>digital integration</strong>. This includes ensuring suppliers can meet
                      mandated requirements for providing data feeds into the Owner's{" "}
                      <strong>AEC, DfMA, Quality, and SCM platforms</strong> and adhering to technology usage protocols.
                      Supplier performance is tracked using data from these integrated systems.
                    </li>
                    <li>
                      <strong>Digitally Coordinated Parallel Operations:</strong> The Owner's{" "}
                      <strong>AEC Platform</strong> serves as the central coordination point for managing the intricate
                      dependencies between off-site manufacturing (progress tracked via partner data feeds) and on-site
                      assembly schedules. This ensures components arrive JIT, installation sequences are optimized
                      (based on DfMA outputs), and any disruptions are managed collaboratively and visibly across the
                      integrated team.
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Conclusion:</strong> By embedding technology governance directly into its procurement and
                      contractual DNA, and by fostering collaborative, long-term relationships, the I5 Model ensures its
                      supply chain and partnerships actively support and enhance its productized, integrated, and
                      data-driven delivery objectives. This creates a robust commercial framework essential for
                      realizing the full potential of I5.
                    </p>
                  </div>
                </div>
              </DetailSection>
            </AnimatedElement>

            <AnimatedElement delay={0.6}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                className="p-3 bg-gray-100 border-t-2 border-gray-600 cursor-pointer"
              >
                <div className="text-xs text-gray-600 space-y-1">
                  <p>
                    <strong>Reference:</strong> Chapter 9 of the I5 Model Handbook 2025 for comprehensive guidance on
                    contract model selection, detailed risk-sharing mechanisms, and supplier management frameworks.
                  </p>
                  <p>
                    For specific technical specifications, API requirements, and data standards mandated for partner
                    technology integration and use of Owner platforms, consult the I5 Model Technology Principles and
                    Guidelines (especially Section 9).
                  </p>
                  <p className="italic">
                    (This content is derived from I5 HB: Chapter 9, with significant elaboration on the integration of
                    technology governance and platform roles based on principles from the I5 Tech HB.)
                  </p>
                </div>
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </>
  )
}
