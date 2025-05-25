"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Users,
  FileText,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Cog,
  Building,
  Truck,
  Wrench,
  Monitor,
  Award,
  TrendingUp,
  Eye,
  AlertTriangle,
  RefreshCw,
  Brain,
  Activity,
} from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      ease: "easeOut",
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
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
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
  children: React.ReactNode
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

function StaggeredList({
  children,
  delay = 0,
}: {
  children: React.ReactNode[]
  delay?: number
}) {
  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <AnimatedElement delay={delay + index * 0.1}>{child}</AnimatedElement>
      ))}
    </div>
  )
}

// Internal Navigation Component
const InternalNavigation = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "introduction", label: "INTRODUCTION" },
    { id: "organizational-structure", label: "ORGANIZATIONAL STRUCTURE" },
    { id: "detailed-unit-descriptions", label: "DETAILED UNIT DESCRIPTIONS" },
    { id: "standard-procedures", label: "STANDARD PROCEDURES" },
    { id: "process-control", label: "PROCESS CONTROL" },
    { id: "resource-management", label: "RESOURCE MANAGEMENT" },
    { id: "quality-management", label: "QUALITY MANAGEMENT" },
    { id: "metrics-analytics", label: "METRICS & ANALYTICS" },
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
          <div className="text-lg font-mono font-bold tracking-tight">STEADY-STATE OPERATIONS</div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
                className={`text-xs font-mono px-2 py-1 h-8 ${
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

export default function SteadyStateOperationsPage() {
  return (
    <>
      <InternalNavigation />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-6">
        <div id="introduction" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="steady-state operations: sustaining excellence in I5 delivery and asset management"
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight border-b-4 border-black pb-2 mb-4"
            delay={0}
          />

          <SplitTextAnimation
            text="embedding I5 for ongoing efficiency and continuous improvement"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-4"
            delay={0.2}
          />

          <AnimatedElement delay={0.3}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Once the I5 Real Estate Delivery Model is implemented, the focus shifts to establishing{" "}
              <strong>steady-state operations</strong>. This involves creating stable organizational structures,
              standardized processes, and robust management systems that consistently sustain the quality, efficiency,
              and integration benefits of I5 across multiple projects and throughout the lifecycle of delivered assets
              (I5 HB: Chap 10 Intro). This operational model is deeply embedded within, and reliant upon, the Owner's
              established technology ecosystem, ensuring data-driven decision-making and continuous refinement.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.4}>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              The <strong>BoK Governance Hub</strong> continues its central role, now governing critical operational
              decisions and the evolution of operational standards, while <strong>Operational Systems</strong> (hosting
              the Digital Twin) become primary sources of real-world asset performance data (I5 Tech HB: Sec 4.6, Sec
              2.6).
            </p>
          </AnimatedElement>
        </div>

        {/* Part 2: Organizational Structure - Fits in one screen */}
        <div id="organizational-structure" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="optimized operational organizational structure"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The shift to I5 culminates in a product-centric operational structure, moving away from temporary project
              teams to enduring functional units aligned with the I5 value chain (I5 HB: Sec 10.1.1).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Target className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">product management</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  market monitoring, product performance tracking, roadmap management
                </p>
                <p className="text-xs text-gray-500 italic">
                  platforms: VS, CRM, AEC, operational systems via BoK/analytics
                </p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Cog className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">design & engineering</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  maintains standardized designs, supports configuration, incorporates lessons
                </p>
                <p className="text-xs text-gray-500 italic">platforms: BoK, DfMA, AEC</p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Building className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">manufacturing operations</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  partner relationships, performance monitoring, quality standards
                </p>
                <p className="text-xs text-gray-500 italic">platforms: DfMA, AEC, quality via partner feeds</p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Truck className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">supply chain management</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  supplier agreements, procurement optimization, JIT logistics
                </p>
                <p className="text-xs text-gray-500 italic">platforms: SCM system</p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Wrench className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">site operations & assembly</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">on-site assembly, standardized processes, commissioning</p>
                <p className="text-xs text-gray-500 italic">platforms: AEC, BoK standards</p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Award className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">quality management</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">QMS oversight, compliance, continuous improvement</p>
                <p className="text-xs text-gray-500 italic">platforms: AEC/quality, partner feeds</p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Users className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">customer experience & asset ops</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  client relationships, asset management, facility operations
                </p>
                <p className="text-xs text-gray-500 italic">platforms: CRM, VS, operational systems</p>
              </motion.div>

              <motion.div
                className="p-2 bg-white rounded-lg border hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div variants={iconVariants}>
                    <Monitor className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <h4 className="font-semibold text-xs">digital systems / IT</h4>
                </div>
                <p className="text-xs text-gray-600 mb-1">platform administration, security, integration, evolution</p>
                <p className="text-xs text-gray-500 italic">all owner platforms + IT monitoring</p>
              </motion.div>
            </motion.div>
          </AnimatedElement>
        </div>

        {/* Part 3: Detailed Unit Descriptions - Fits in one screen */}
        <div id="detailed-unit-descriptions" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="detailed functional unit responsibilities"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Target className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">product management:</h4>
                  <p className="text-xs text-gray-700">
                    continuously monitors market needs, product performance (using data from{" "}
                    <strong>VS, CRM, AEC, operational systems via BoK/analytics</strong>), and manages the product
                    roadmap and lifecycle for standardized I5 offerings.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Cog className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">design and engineering:</h4>
                  <p className="text-xs text-gray-700">
                    maintains and refines standardized designs and components within the <strong>BoK platform</strong>{" "}
                    and <strong>DfMA platform</strong>, supports product configuration for new projects using the{" "}
                    <strong>AEC platform</strong>, and incorporates lessons learned.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Building className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">manufacturing operations (oversight):</h4>
                  <p className="text-xs text-gray-700">
                    manages relationships with manufacturing partners, monitors their performance (via data feeds to{" "}
                    <strong>DfMA/AEC/quality platforms</strong>), and ensures adherence to I5 quality and production
                    standards (from BoK).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Truck className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">supply chain management:</h4>
                  <p className="text-xs text-gray-700">
                    manages long-term supplier agreements, optimizes procurement (via <strong>SCM system</strong>), and
                    coordinates just-in-time logistics for ongoing projects and operational needs (e.g., maintenance
                    parts).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Wrench className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">site operations & assembly:</h4>
                  <p className="text-xs text-gray-700">
                    executes efficient on-site assembly and integration for new projects, leveraging standardized
                    processes (from BoK) and digital tools (<strong>AEC platform</strong>), and manages commissioning.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Award className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">quality management:</h4>
                  <p className="text-xs text-gray-700">
                    oversees the quality management system across all operations, utilizing data from{" "}
                    <strong>AEC/quality platforms</strong> and partner feeds to ensure compliance and drive continuous
                    quality improvement.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Users className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">customer experience & asset operations:</h4>
                  <p className="text-xs text-gray-700">
                    manages client relationships post-handover (via <strong>CRM</strong>), supports asset users
                    (potentially via <strong>VS</strong> for orientation), and oversees facility/asset management using{" "}
                    <strong>operational systems</strong> (CMMS, BMS, digital twin).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Monitor className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">digital systems / IT:</h4>
                  <p className="text-xs text-gray-700">
                    critically, this team owns, administers, maintains, secures, and evolves the entire owner-controlled
                    I5 technology ecosystem (BoK, VS, DfMA, AEC, SCM, financials, CRM, operational systems, IT
                    monitoring). They manage platform capacity, user access, integrations (including partner feeds), and
                    technology governance (I5 Tech HB: Sec 11.1, Sec 12.3).
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Part 4: Standard Operating Procedures - Fits in one screen */}
        <div id="standard-procedures" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="standard operating procedures (SOPs) for consistent execution"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Comprehensive SOPs, managed and disseminated via the Owner's <strong>BoK platform</strong> (web-based),
              are the bedrock of consistent execution in steady-state I5 operations (I5 HB: Sec 10.1.2; I5 Tech HB: Sec
              4.6).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <Card className="mb-4 p-4 bg-gray-50">
              <h3 className="font-semibold mb-3 text-center text-sm">SOP lifecycle management</h3>
              <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white border-2 border-gray-400 rounded-full text-xs font-medium text-center">
                  create/
                  <br />
                  document
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white border-2 border-gray-400 rounded-full text-xs font-medium text-center">
                  review/
                  <br />
                  approve
                  <br />
                  (BoK)
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white border-2 border-gray-400 rounded-full text-xs font-medium text-center">
                  disseminate
                  <br />
                  (BoK platform)
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white border-2 border-gray-400 rounded-full text-xs font-medium text-center">
                  execute/
                  <br />
                  monitor
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white border-2 border-gray-400 rounded-full text-xs font-medium text-center">
                  update/
                  <br />
                  improve
                </div>
              </div>
            </Card>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <FileText className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">scope:</h4>
                  <p className="text-xs text-gray-700">
                    SOPs cover all critical operational activities, including product configuration (using AEC/DfMA),
                    manufacturing oversight (partner processes aligned with BoK standards), supply chain management
                    (using SCM), site assembly (using AEC), quality assurance (using AEC/quality), customer engagement
                    (using VS/CRM), and importantly, SOPs for the administration, use, and data management within all{" "}
                    <strong>owner-controlled digital platforms</strong>.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <RefreshCw className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">maintenance & improvement:</h4>
                  <p className="text-xs text-gray-700">
                    SOPs are living documents, regularly reviewed and updated based on performance data (from the I5
                    ecosystem), lessons learned, and continuous improvement initiatives, with changes governed and
                    disseminated via the <strong>BoK platform</strong> (I5 HB: Sec 10.1.2).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Part 5: Process Control Mechanisms - Fits in one screen */}
        <div id="process-control" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="robust process control mechanisms"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              To maintain quality and efficiency, I5 employs a multi-layered process control framework, implemented
              through both procedural discipline and technical controls embedded within the Owner's platforms (I5 HB:
              Sec 10.1.3).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <Card className="mb-4 p-4 bg-gray-50">
              <h3 className="font-semibold mb-3 text-center text-sm">multi-layered process control framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">preventive controls</h4>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="p-1 bg-gray-50 rounded border">configuration rules (DfMA/AEC)</li>
                    <li className="p-1 bg-gray-50 rounded border">design validation (BoK standards)</li>
                    <li className="p-1 bg-gray-50 rounded border">pre-task planning</li>
                    <li className="p-1 bg-gray-50 rounded border">competency verification</li>
                  </ul>
                </Card>

                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">detective controls</h4>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="p-1 bg-gray-50 rounded border">in-process inspections (AEC/quality)</li>
                    <li className="p-1 bg-gray-50 rounded border">statistical process control</li>
                    <li className="p-1 bg-gray-50 rounded border">system monitoring (IT platform)</li>
                    <li className="p-1 bg-gray-50 rounded border">quality audits</li>
                  </ul>
                </Card>

                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">corrective controls</h4>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li className="p-1 bg-gray-50 rounded border">non-conformance workflows</li>
                    <li className="p-1 bg-gray-50 rounded border">process adjustments</li>
                    <li className="p-1 bg-gray-50 rounded border">corrective action tracking</li>
                    <li className="p-1 bg-gray-50 rounded border">lessons learned (BoK)</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Shield className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">preventive controls:</h4>
                  <p className="text-xs text-gray-700">
                    configuration rules in <strong>DfMA/AEC</strong>, design validation against <strong>BoK</strong>{" "}
                    standards, pre-task planning, and competency verification aim to prevent errors.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Eye className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">detective controls:</h4>
                  <p className="text-xs text-gray-700">
                    in-process inspections (data logged in <strong>AEC/quality</strong>), statistical process control
                    (analyzing data from partner MES feeds), system monitoring (<strong>IT monitoring platform</strong>
                    ), and quality audits detect deviations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">corrective controls:</h4>
                  <p className="text-xs text-gray-700">
                    formal non-conformance management (workflows in <strong>AEC/quality</strong>, potentially escalated
                    to <strong>BoK</strong>), process adjustment protocols, and corrective action tracking ensure issues
                    are resolved and learnings captured.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Part 6: Resource Management System - Fits in one screen */}
        <div id="resource-management" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="strategic resource management system"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Optimizing the use of human, technological, and production capacity is vital for sustained efficiency (I5
              HB: Sec 10.2).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <Card className="mb-4 p-4 bg-gray-50">
              <h3 className="font-semibold mb-3 text-center text-sm">strategic resource management components</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">human resources framework</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">
                    focus on maintaining skilled workforce proficient in I5 methodologies and digital platforms
                  </p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>ongoing training programs</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>platform-specific skills</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>performance management</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>career development paths</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Monitor className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">technology management plan</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">robust administration of owner-controlled platforms</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>platform administration</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>vendor relationships</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>uptime & performance</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>integration management</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>technology roadmap</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">capacity planning</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-2">systematic demand forecasting and resource alignment</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>demand forecasting (CRM/VS)</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>manufacturing capacity</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>platform capacity (licenses)</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>cloud resources</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span>▸</span>
                      <span>bottleneck prevention</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </Card>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Users className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">human resources framework:</h4>
                  <p className="text-xs text-gray-700">
                    focuses on maintaining a skilled workforce proficient in I5 methodologies and the enabling digital
                    platforms. This includes ongoing training (product knowledge, DfMA, lean,{" "}
                    <strong>platform-specific skills for BoK, VS, AEC, DfMA, etc.</strong>), performance management
                    aligned with I5 KPIs, and clear career development pathways (I5 HB: Sec 10.2.1; I5 Tech HB: Sec
                    12.2, Sec 12.3).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Monitor className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">technology management plan (owner platforms):</h4>
                  <p className="text-xs text-gray-700">
                    the Owner's IT/digital systems team implements a robust plan for the ongoing administration,
                    support, maintenance, security, and evolution of all core owner-controlled platforms (BoK, VS, DfMA,
                    AEC, etc.). This includes managing vendor relationships (for procured platforms), ensuring uptime
                    and performance (monitored by <strong>IT monitoring tools</strong>), managing integrations
                    (including partner data feeds), and executing a technology roadmap for continuous enhancement (I5
                    HB: Sec 10.2.2; I5 Tech HB: Sec 5.6, Sec 11). Governance over partner-used construction technologies
                    (monitoring compliance with owner requirements) is also an ongoing activity (I5 Tech HB: Sec 11.5).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">capacity planning methodology:</h4>
                  <p className="text-xs text-gray-700">
                    a systematic approach to forecasting demand (using data from{" "}
                    <strong>CRM/VS, AEC project pipeline</strong>) and aligning human, manufacturing (partner capacity),
                    site assembly, supply chain, and <strong>owner platform capacity</strong> (licenses, cloud resources
                    for BoK/VS, storage) to meet this demand efficiently, preventing bottlenecks while minimizing idle
                    resources (I5 HB: Sec 10.2.3).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Part 7: Quality Management System - Fits in one screen */}
        <div id="quality-management" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="embedded quality management system (QMS)"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The I5 QMS ensures consistent delivery of high-quality products and continuous improvement in all
              operational aspects, managed through standards in <strong>BoK</strong> and data/workflows in{" "}
              <strong>AEC/quality platforms</strong> (I5 HB: Sec 10.3).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <Card className="mb-4 p-4 bg-gray-50">
              <h3 className="font-semibold mb-3 text-center text-sm">I5 quality management system components</h3>
              <div className="space-y-3">
                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">quality assurance standards</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-1">
                    comprehensive standards for products, materials, processes, documentation, and inspection criteria
                  </p>
                  <p className="text-xs text-gray-500 italic">platform: BoK (standards definition & dissemination)</p>
                </Card>

                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">testing & verification protocols</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-1">
                    systematic protocols for incoming materials, in-process checks, final verification, and
                    commissioning
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    platforms: AEC/quality (documentation), partner feeds (critical input)
                  </p>
                </Card>

                <Card className="p-3 bg-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-gray-600" />
                    <h4 className="font-semibold text-xs">data-driven continuous improvement</h4>
                  </div>
                  <p className="text-xs text-gray-700 mb-1">
                    performance analysis of defect rates, rework, and customer feedback to drive improvements
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    platforms: AEC/quality analytics, VS/CRM (feedback), BoK (improvement updates)
                  </p>
                </Card>
              </div>
            </Card>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Award className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">quality assurance standards:</h4>
                  <p className="text-xs text-gray-700">
                    comprehensive standards (product, material, process, documentation, inspection criteria) are
                    defined, maintained, and disseminated via the <strong>BoK platform</strong>. These standards also
                    define requirements for quality data to be provided by partners (I5 HB: Sec 10.3.1).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">testing and verification protocols:</h4>
                  <p className="text-xs text-gray-700">
                    systematic protocols for incoming material inspection, in-process checks (manufacturing and site),
                    final product verification, and system commissioning are implemented. Results are meticulously
                    documented in the <strong>AEC/quality platform</strong>, with data feeds from partners providing
                    critical input (I5 HB: Sec 10.3.2; I5 Tech HB: Sec 4.4, Sec 9.2).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">data-driven continuous improvement:</h4>
                  <p className="text-xs text-gray-700">
                    performance data related to quality (defect rates, rework, customer feedback from VS/CRM) is
                    continuously analyzed (using <strong>AEC/quality analytics, analytics tools</strong>) to identify
                    root causes and drive targeted improvements. Approved changes to products or processes are updated
                    in the <strong>BoK platform</strong> and disseminated (I5 HB: Sec 10.3.3).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Part 8: Metrics and Analytics - Fits in one screen */}
        <div id="metrics-analytics" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="operational metrics and analytics for sustained performance"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Data-driven decision-making is central to steady-state I5 operations. A comprehensive system for
              performance monitoring, analytics, and reporting provides the necessary insights (I5 HB: Sec 10.4).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <Card className="mb-4 p-4 bg-gray-50">
              <h3 className="font-semibold mb-3 text-center text-sm">integrated performance monitoring system</h3>
              <Card className="p-3 bg-white">
                <h4 className="font-semibold mb-2 text-xs">real-time performance dashboards</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="text-center p-2 bg-gray-50 rounded border">
                    <div className="font-semibold text-xs">executive view</div>
                    <div className="text-xs text-gray-600">strategic KPIs, portfolio performance</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded border">
                    <div className="font-semibold text-xs">operational view</div>
                    <div className="text-xs text-gray-600">project status, resource utilization</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded border">
                    <div className="font-semibold text-xs">team view</div>
                    <div className="text-xs text-gray-600">task progress, quality metrics</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded border">
                    <div className="font-semibold text-xs">platform health</div>
                    <div className="text-xs text-gray-600">system performance, uptime</div>
                  </div>
                </div>
              </Card>
            </Card>
          </AnimatedElement>

          <AnimatedElement delay={0.4}>
            <Card className="mb-4 p-4 bg-gray-50">
              <h3 className="font-semibold mb-3 text-center text-sm">advanced analytics framework progression</h3>
              <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
                <div className="text-center p-2 bg-gray-200 border-2 border-gray-500 rounded-lg w-24">
                  <div className="text-xs font-medium">
                    descriptive
                    <br />
                    analytics
                    <br />
                    (what happened)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="text-center p-2 bg-gray-200 border-2 border-gray-500 rounded-lg w-24">
                  <div className="text-xs font-medium">
                    diagnostic
                    <br />
                    analytics
                    <br />
                    (why it happened)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="text-center p-2 bg-gray-800 text-white border-2 border-black rounded-lg w-24">
                  <div className="text-xs font-medium">
                    predictive
                    <br />
                    analytics
                    <br />
                    (what will happen)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600" />
                <div className="text-center p-2 bg-gray-800 text-white border-2 border-black rounded-lg w-24">
                  <div className="text-xs font-medium">
                    prescriptive
                    <br />
                    analytics
                    <br />
                    (what to do)
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <BarChart3 className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">integrated performance dashboards:</h4>
                  <p className="text-xs text-gray-700">
                    real-time and periodic dashboards, built using data aggregated from across the Owner's technology
                    ecosystem (
                    <strong>AEC, DfMA, SCM, financials, quality, VS/CRM, operational systems, IT monitoring</strong>),
                    provide tailored views of operational, financial, and strategic KPIs for different leadership levels
                    (executive, operational, team). This includes dashboards specifically monitoring the health and
                    performance of the Owner's digital platforms (I5 HB: Sec 10.4.1; I5 Tech HB: Sec 8.7, Sec 12.4).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Brain className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">advanced data analytics framework:</h4>
                  <p className="text-xs text-gray-700">
                    moving beyond descriptive reporting to diagnostic, predictive, and eventually prescriptive
                    analytics. This involves leveraging the rich historical and real-time data from the integrated I5
                    ecosystem (stored in data lakes/warehouses, accessed via <strong>analytics tools</strong>) to
                    understand <em>why</em> things happen, predict future outcomes (e.g., project delays, asset
                    maintenance needs, market trends), and recommend optimal actions. Insights feed into{" "}
                    <strong>BoK governance workflows</strong> for strategic decisions (I5 HB: Sec 10.4.2; I5 Tech HB:
                    Sec 13.1).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="flex items-start space-x-2">
                <Activity className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1 text-xs">structured reporting and decision support:</h4>
                  <p className="text-xs text-gray-700">
                    consistent, timely reporting (often generated automatically from owner platforms) provides the right
                    information to the right stakeholders, supporting informed operational and strategic decisions (I5
                    HB: Sec 10.4.3).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Part 9: Conclusion and References - Fits in one screen */}
        <div className="min-h-screen flex flex-col justify-center py-8">
          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              The I5 steady-state operational model ensures that the initial transformation benefits are not only
              sustained but continuously enhanced. By embedding standardized processes (managed in BoK), leveraging an
              integrated technology ecosystem (AEC, DfMA, VS, SCM, etc.), fostering a skilled and adaptable
              organization, and maintaining a relentless focus on data-driven quality and performance management,
              organizations can achieve ongoing operational excellence.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <Card className="p-4 bg-gray-100 border-t-4 border-gray-600 text-center">
              <p className="text-sm text-gray-700 mb-3">
                <strong>
                  for detailed SOPs, resource management frameworks, QMS protocols, and performance metric definitions,
                  refer to chapter 10 of the I5 model handbook 2025.
                </strong>
              </p>
              <p className="text-sm text-gray-700 mb-3">
                for technical details on managing the owner platforms (BoK, VS, AEC, etc.) in steady-state and
                integrating operational data, see relevant sections in the I5 model technology principles and guidelines
                (e.g., sections 4.6, 8.6, 8.7, 11, 12).
              </p>
              <p className="text-xs text-gray-600 italic">
                (this content is derived from I5 HB: chapter 10, with significant integration of how the
                owner-controlled technology ecosystem underpins these steady-state operations, referencing the I5 Tech
                HB.)
              </p>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </>
  )
}
