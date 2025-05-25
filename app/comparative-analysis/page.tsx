"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Users,
  FileText,
  Shield,
  Target,
  ArrowRight,
  Building,
  Award,
  TrendingUp,
  Zap,
  Building2,
  Globe,
  Scale,
  Clock,
  Layers,
  Eye,
  Cog,
} from "lucide-react"
import { motion } from "framer-motion"

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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

const tableRowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
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

// Internal Navigation Component
const InternalNavigation = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "introduction", label: "INTRODUCTION" },
    { id: "riba-comparison", label: "RIBA COMPARISON" },
    { id: "riba-advantages", label: "RIBA ADVANTAGES" },
    { id: "fidic-comparison", label: "FIDIC COMPARISON" },
    { id: "fidic-amendments", label: "FIDIC AMENDMENTS" },
    { id: "uae-compliance", label: "UAE COMPLIANCE" },
    { id: "global-practices", label: "GLOBAL PRACTICES" },
    { id: "summary", label: "SUMMARY" },
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
          <div className="text-lg font-mono font-bold tracking-tight">COMPARATIVE ANALYSIS</div>

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

export default function ComparativeAnalysisPage() {
  return (
    <>
      <InternalNavigation />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-6">
        {/* Introduction Section */}
        <div id="introduction" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="comparative analysis: I5 in context with industry standards"
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight border-b-4 border-black pb-2 mb-4"
            delay={0}
          />

          <SplitTextAnimation
            text="understanding I5's position in the broader industry landscape"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-4"
            delay={0.2}
          />

          <AnimatedElement delay={0.3}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              To fully appreciate the I5 Real Estate Delivery Model's innovative approach, it's valuable to compare it
              with established industry frameworks like the RIBA Plan of Work and FIDIC contract models, and to consider
              its alignment with regional practices, such as those in the UAE (I5 HB: Chap 5 Intro). This comparison
              highlights I5's distinct advantages in leveraging productization, integration, and technology to address
              modern development challenges.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.4}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">key comparison frameworks</h3>
                <motion.div
                  className="grid grid-cols-2 lg:grid-cols-4 gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="p-2 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Building className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">RIBA plan of work</h4>
                    </div>
                    <p className="text-xs text-gray-600">traditional project staging vs. I5 phases</p>
                  </motion.div>

                  <motion.div
                    className="p-2 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Scale className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">FIDIC contracts</h4>
                    </div>
                    <p className="text-xs text-gray-600">international standards vs. I5 collaboration</p>
                  </motion.div>

                  <motion.div
                    className="p-2 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">UAE compliance</h4>
                    </div>
                    <p className="text-xs text-gray-600">regional regulatory alignment</p>
                  </motion.div>

                  <motion.div
                    className="p-2 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">global best practices</h4>
                    </div>
                    <p className="text-xs text-gray-600">international industrialized construction</p>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>
        </div>

        {/* RIBA Comparison Section */}
        <div id="riba-comparison" className="min-h-screen flex flex-col justify-center py-8 pt-32">
          <SplitTextAnimation
            text="I5 framework vs. RIBA plan of work"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The RIBA Plan of Work is a widely recognized project staging guide. While both I5 and RIBA cover the full
              project lifecycle, I5 introduces key differentiators through its product-centric and technology-enabled
              approach (I5 HB: Sec 5.1).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">I5 vs RIBA phase comparison</h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Building className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">RIBA plan of work</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="font-semibold text-xs mb-1">Stage 0-2: Strategic Brief & Concept</div>
                        <div className="text-xs text-gray-600">Traditional bespoke approach</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="font-semibold text-xs mb-1">Stage 3-4: Technical Design</div>
                        <div className="text-xs text-gray-600">Sequential procurement & design</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="font-semibold text-xs mb-1">Stage 5: Construction</div>
                        <div className="text-xs text-gray-600">Predominantly on-site execution</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="font-semibold text-xs mb-1">Stage 6-7: Handover & Use</div>
                        <div className="text-xs text-gray-600">Traditional documentation transfer</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Target className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">I5 framework</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <div className="font-semibold text-xs mb-1">Phase 1-2: Product Definition & Config</div>
                        <div className="text-xs text-blue-700">Standardized product vision (BoK Platform)</div>
                      </div>
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <div className="font-semibold text-xs mb-1">Phase 3: Pre-Production</div>
                        <div className="text-xs text-green-700">Early manufacturer input (DfMA/AEC)</div>
                      </div>
                      <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                        <div className="font-semibold text-xs mb-1">Phase 4: Production</div>
                        <div className="text-xs text-yellow-700">Parallel off-site manufacturing</div>
                      </div>
                      <div className="p-2 bg-purple-50 rounded border border-purple-200">
                        <div className="font-semibold text-xs mb-1">Phase 5: Commissioning</div>
                        <div className="text-xs text-purple-700">Digital handover & feedback loop</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">phase alignment & key differences:</h4>
                    <ul className="text-xs text-gray-700 space-y-2">
                      <li>
                        <strong>Early Stages (RIBA 0-2 vs. I5 Phases 1-2):</strong> I5 emphasizes a{" "}
                        <strong>standardized product vision</strong> and detailed brief from the outset (managed in the
                        Owner's <strong>BoK Platform</strong>), leveraging pre-engineered components (from BoK/DfMA)
                        during concept design (I5 HB: Sec 5.1.1; I5 Tech HB: Sec 3.1). This can streamline feasibility
                        and shorten concept development compared to RIBA's traditionally bespoke approach.
                      </li>
                      <li>
                        <strong>Technical Design (RIBA 3-4 vs. I5 Phase 3):</strong> I5 integrates procurement and
                        manufacturer input much earlier, with technical details refined collaboratively using the
                        Owner's <strong>DfMA and AEC Platforms</strong> (Design for Manufacture and Assembly approach).
                        RIBA is adapting with DfMA overlays, but I5 has this inherently built-in (I5 HB: Sec 5.1.1; I5
                        Tech HB: Sec 3.1).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Building className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">construction & handover differences:</h4>
                    <ul className="text-xs text-gray-700 space-y-2">
                      <li>
                        <strong>Construction (RIBA 5 vs. I5 Phase 4):</strong> I5 heavily incorporates{" "}
                        <strong>off-site manufacturing</strong> of modular components in parallel with site preparation,
                        an approach that can significantly compress schedules (I5 HB: Sec 5.1.1). Traditional RIBA
                        execution is predominantly on-site.
                      </li>
                      <li>
                        <strong>Handover & In-Use (RIBA 6-7 vs. I5 Phase 5):</strong> I5 emphasizes a{" "}
                        <strong>digital handover</strong> (facilitated by Owner platforms like AEC/Operational Systems
                        for the Digital Twin) and a structured product <strong>feedback loop</strong> where operational
                        data informs future product iterations via the BoK (I5 HB: Sec 5.1.1; I5 Tech HB: Sec 4.5, Sec
                        4.6).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* RIBA Advantages Section */}
        <div id="riba-advantages" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="I5's advantages over traditional RIBA application"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">I5 advantages over traditional methods</h3>
                <motion.div
                  className="grid grid-cols-2 lg:grid-cols-4 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">speed to market</h4>
                    </div>
                    <p className="text-xs text-gray-600">overlapping design, procurement, and modular construction</p>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">standardization</h4>
                    </div>
                    <p className="text-xs text-gray-600">repeatable products minimize design errors</p>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">integrated teams</h4>
                    </div>
                    <p className="text-xs text-gray-600">early stakeholder involvement reduces disputes</p>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Cog className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">modern methods</h4>
                    </div>
                    <p className="text-xs text-gray-600">inherent DfMA and BIM-driven fabrication</p>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Zap className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">speed to market & standardization:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        <strong>Speed to Market:</strong> Overlapping design, procurement, and modular construction
                        significantly shortens delivery timelines (I5 HB: Sec 5.1.3).
                      </li>
                      <li>
                        <strong>Standardization & Reduced Rework:</strong> Focus on repeatable, proven "products"
                        (managed in BoK) minimizes design errors common in unique prototypes, leading to more
                        predictable outcomes (I5 HB: Sec 5.1.3).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">integration & modern methods:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        <strong>Integrated Team & Fewer Disputes:</strong> Early, continuous involvement of all
                        stakeholders (facilitated by shared Owner platforms like AEC) promotes accountability and
                        reduces ambiguities (I5 HB: Sec 5.1.3).
                      </li>
                      <li>
                        <strong>Alignment with Modern Methods:</strong> I5 inherently integrates Modern Methods of
                        Construction (MMC) like DfMA and BIM-driven fabrication (leveraging Owner's DfMA/AEC platforms)
                        (I5 HB: Sec 5.1.3).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FIDIC Comparison Section */}
        <div id="fidic-comparison" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="I5 framework vs. FIDIC contracts"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              FIDIC contracts are an international standard. The I5 Model, while adaptable, often aligns best with
              design-build or collaborative contracting principles, requiring some adaptation if using standard FIDIC
              forms (I5 HB: Sec 5.2). Contracts must also clearly define Owner control over core platforms and
              governance of partner tech (I5 Tech HB: Sec 2.1, Sec 9.4).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">contract structure comparison</h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Scale className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">traditional FIDIC</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="text-xs">Risk transfer focus</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="text-xs">Sequential contracting</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="text-xs">Limited collaboration</div>
                      </div>
                      <div className="p-2 bg-gray-50 rounded border">
                        <div className="text-xs">Standard dispute procedures</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">I5 adapted approach</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-50 rounded border border-blue-200">
                        <div className="text-xs text-blue-700">Collaborative risk management</div>
                      </div>
                      <div className="p-2 bg-green-50 rounded border border-green-200">
                        <div className="text-xs text-green-700">Design-build integration</div>
                      </div>
                      <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                        <div className="text-xs text-yellow-700">Shared responsibility</div>
                      </div>
                      <div className="p-2 bg-purple-50 rounded border border-purple-200">
                        <div className="text-xs text-purple-700">Proactive issue resolution</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">risk allocation:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        Traditional FIDIC often focuses on risk transfer. I5 promotes a more{" "}
                        <strong>collaborative risk management</strong> approach, with shared responsibility for design
                        integration and interface management (I5 HB: Sec 5.2.1).
                      </li>
                      <li>
                        Manufacturing introduces different risk profiles (supplier stability, off-site quality)
                        requiring specific contractual attention (I5 HB: Sec 5.2.1).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Cog className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">technology risk:</h4>
                    <p className="text-xs text-gray-700">
                      <strong>Technology Risk:</strong> I5 explicitly requires Owner responsibility for its core
                      platforms, while partner responsibility for their technology (subject to Owner requirements) and
                      shared/defined responsibility for integration risks must be contractually addressed (I5 HB: Sec
                      5.2.1; I5 Tech HB: Sec 9.4, Sec 11.1).
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Building className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">contract structure adaptation:</h4>
                    <p className="text-xs text-gray-700">
                      Best fit is often a <strong>design-build approach</strong> (akin to FIDIC Yellow Book) where the
                      Owner provides standardized product parameters (from BoK/DfMA platforms) and the contractor
                      finalizes design and coordinates manufacturing (I5 HB: Sec 5.2.2).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FIDIC Amendments Section */}
        <div id="fidic-amendments" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="key amendments needed for I5 implementation"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">key amendments needed</h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">off-site materials & modular units</h4>
                    </div>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>Clauses for off-site materials (payment, title transfer, inspection rights at factories)</li>
                      <li>Provisions for defects liability related to modular/repeated units</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Cog className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">digital platform governance</h4>
                    </div>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        Explicit clauses defining partner access to and use of{" "}
                        <strong>Owner-controlled digital platforms</strong> (AEC, BoK, etc.)
                      </li>
                      <li>Data standards, security protocols, and integration requirements</li>
                    </ul>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Building className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">partner technology requirements:</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      Clauses outlining Owner-stipulated conditions or requirements for{" "}
                      <strong>partner-provided construction technologies</strong> (I5 HB: Sec 5.2.2; I5 Tech HB: Sec
                      9.4).
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>Technology compliance standards</li>
                      <li>Data integration requirements</li>
                      <li>Performance monitoring obligations</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Eye className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">dispute resolution enhancement:</h4>
                    <p className="text-xs text-gray-700">
                      <strong>Dispute Resolution:</strong> I5 encourages enhanced dispute avoidance through proactive
                      issue identification (facilitated by transparent data on Owner platforms) and collaborative
                      resolution steps before formal FIDIC DAB or arbitration proceedings (I5 HB: Sec 5.2.3).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* UAE Compliance Section */}
        <div id="uae-compliance" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="UAE regulatory compliance & I5"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Implementing I5 in the UAE requires adherence to local building codes, permitting processes, and
              sustainability mandates. The I5's structured, productized, and digitally-enabled approach can align well
              and even streamline compliance (I5 HB: Sec 5.3).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">UAE regulatory alignment process</h3>
                <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">
                  <div className="flex flex-col items-center justify-center w-28 h-28 bg-white border-2 border-gray-400 rounded-lg text-xs font-medium text-center">
                    Early Authority
                    <br />
                    Engagement
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center w-28 h-28 bg-white border-2 border-gray-400 rounded-lg text-xs font-medium text-center">
                    Standardized
                    <br />
                    Submissions
                    <br />
                    (BoK/AEC)
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center w-28 h-28 bg-white border-2 border-gray-400 rounded-lg text-xs font-medium text-center">
                    Modular
                    <br />
                    Approvals
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center w-28 h-28 bg-white border-2 border-gray-400 rounded-lg text-xs font-medium text-center">
                    Sustainability
                    <br />
                    Certification
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center w-28 h-28 bg-white border-2 border-gray-400 rounded-lg text-xs font-medium text-center">
                    Performance
                    <br />
                    Tracking
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <FileText className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">permitting strategy:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        Early engagement with authorities (e.g., Dubai Municipality, Abu Dhabi DMT) using standardized
                        I5 product concepts.
                      </li>
                      <li>
                        Leveraging standardized submission packages (derived from BoK/AEC platforms) for repeated
                        elements can potentially reduce review times (I5 HB: Sec 5.3.1).
                      </li>
                      <li>
                        Ensuring Owner-controlled platforms used for design and documentation meet any local data
                        management or security regulations (I5 HB: Sec 5.3.1; I5 Tech HB: Sec 5.5).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Building className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">modular construction approvals:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        While evolving, authorities are showing openness (e.g., Dubai's first modular construction
                        license).
                      </li>
                      <li>
                        I5's documented QA/QC processes for factory production (data potentially managed in Owner's
                        AEC/Quality platforms) and clear compliance documentation (from BoK/DfMA) support approvals (I5
                        HB: Sec 5.3.2; I5 Tech HB: Sec 4.3, Sec 4.4).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Award className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">sustainability certification integration:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        I5's standardized designs (in BoK/DfMA) can be optimized once for Estidama or Al Sa'fat
                        requirements and then replicated.
                      </li>
                      <li>Off-site manufacturing (inherent in I5) typically produces less waste.</li>
                      <li>
                        Performance data from completed I5 projects (tracked via Owner's Operational Systems/Analytics)
                        can inform improvements and demonstrate compliance with initiatives like UAE Net Zero 2050 (I5
                        HB: Sec 5.3.3; I5 Tech HB: Sec 4.6).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Global Practices Section */}
        <div id="global-practices" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="global best practices & I5"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The I5 Model incorporates and learns from global best practices in industrialized construction and
              integrated delivery (I5 HB: Sec 5.4).
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">global best practices integrated into I5</h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">SINGAPORE</h4>
                    </div>
                    <div className="font-medium text-xs mb-1">PPVC System</div>
                    <div className="text-xs text-gray-700">
                      Early stakeholder coordination and pre-approval of modular systems. I5 echoes with early supplier
                      involvement and standardized BoK elements.
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">JAPAN</h4>
                    </div>
                    <div className="font-medium text-xs mb-1">Sekisui House Model</div>
                    <div className="text-xs text-gray-700">
                      Industrialized quality, JIT delivery, and continuous improvement. I5 aims for similar consistency
                      and learning loops via BoK.
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-3 bg-white rounded-lg border shadow-sm"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Layers className="w-4 h-4 text-gray-600" />
                      <h4 className="font-semibold text-xs">SCANDINAVIA</h4>
                    </div>
                    <div className="font-medium text-xs mb-1">Prefab Norm</div>
                    <div className="text-xs text-gray-700">
                      Automation in manufacturing and customizable pre-designed modules. I5's DfMA and VS platforms
                      support this.
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">learnings from leaders:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>
                        <strong>Singapore (PPVC):</strong> Early stakeholder coordination and pre-approval of modular
                        systems (I5 HB: Sec 5.4.1). I5 echoes this with early supplier involvement and standardized BoK
                        elements.
                      </li>
                      <li>
                        <strong>Japan (Sekisui House):</strong> Industrialized quality, JIT delivery, and continuous
                        improvement (I5 HB: Sec 5.4.1). I5 aims for similar consistency and learning loops (via BoK and
                        operational feedback).
                      </li>
                      <li>
                        <strong>Scandinavia (Prefab Norm):</strong> Automation in manufacturing and customizable
                        pre-designed modules (I5 HB: Sec 5.4.1). I5's DfMA and VS platforms support this.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="p-3 bg-white rounded-lg border shadow-sm"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start space-x-2">
                  <Globe className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-xs">regional adaptation:</h4>
                    <p className="text-xs text-gray-700">
                      I5 implementation in the UAE considers local workforce skills, climate, cultural expectations for
                      quality/uniqueness, and supply chain reliance, adapting global principles accordingly (I5 HB: Sec
                      5.4.2). The Owner-controlled platform model is particularly suited to regions with a high appetite
                      for technology and innovation (I5 HB: Sec 5.4.2).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Summary Section */}
        <div id="summary" className="min-h-screen flex flex-col justify-center py-8">
          <SplitTextAnimation
            text="summary: I5 vs traditional approaches"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.2}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="mb-4 p-4 bg-gray-50">
                <h3 className="font-semibold mb-3 text-center text-sm">comprehensive comparison matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 bg-gray-800 text-white p-3 text-left text-xs font-semibold">
                          ASPECT
                        </th>
                        <th className="border border-gray-400 bg-gray-800 text-white p-3 text-left text-xs font-semibold">
                          TRADITIONAL (RIBA/FIDIC)
                        </th>
                        <th className="border border-gray-400 bg-gray-800 text-white p-3 text-left text-xs font-semibold">
                          I5 MODEL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Design Approach */}
                      <motion.tr
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0 * 0.1 }}
                      >
                        <td className="border border-gray-400 bg-gray-200 p-3 text-xs font-semibold">
                          Design Approach
                        </td>
                        <td className="border border-gray-400 p-3 text-xs">Bespoke, project-specific</td>
                        <td className="border border-gray-400 p-3 text-xs">Standardized products (BoK)</td>
                      </motion.tr>

                      {/* Procurement */}
                      <motion.tr
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 1 * 0.1 }}
                        className="bg-gray-50"
                      >
                        <td className="border border-gray-400 bg-gray-200 p-3 text-xs font-semibold">Procurement</td>
                        <td className="border border-gray-400 p-3 text-xs">Sequential, late contractor input</td>
                        <td className="border border-gray-400 p-3 text-xs">Early, integrated (DfMA/AEC)</td>
                      </motion.tr>

                      {/* Construction */}
                      <motion.tr
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 2 * 0.1 }}
                      >
                        <td className="border border-gray-400 bg-gray-200 p-3 text-xs font-semibold">Construction</td>
                        <td className="border border-gray-400 p-3 text-xs">Predominantly on-site</td>
                        <td className="border border-gray-400 p-3 text-xs">Off-site manufacturing parallel</td>
                      </motion.tr>

                      {/* Technology */}
                      <motion.tr
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 3 * 0.1 }}
                        className="bg-gray-50"
                      >
                        <td className="border border-gray-400 bg-gray-200 p-3 text-xs font-semibold">Technology</td>
                        <td className="border border-gray-400 p-3 text-xs">Optional, fragmented</td>
                        <td className="border border-gray-400 p-3 text-xs">Core Owner platforms mandatory</td>
                      </motion.tr>

                      {/* Risk Management */}
                      <motion.tr
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 4 * 0.1 }}
                      >
                        <td className="border border-gray-400 bg-gray-200 p-3 text-xs font-semibold">
                          Risk Management
                        </td>
                        <td className="border border-gray-400 p-3 text-xs">Transfer-based</td>
                        <td className="border border-gray-400 p-3 text-xs">Collaborative, shared</td>
                      </motion.tr>

                      {/* Handover */}
                      <motion.tr
                        variants={tableRowVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 5 * 0.1 }}
                        className="bg-gray-50"
                      >
                        <td className="border border-gray-400 bg-gray-200 p-3 text-xs font-semibold">Handover</td>
                        <td className="border border-gray-400 p-3 text-xs">Traditional documentation</td>
                        <td className="border border-gray-400 p-3 text-xs">Digital twin & feedback loop</td>
                      </motion.tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </AnimatedElement>

          <AnimatedElement delay={0.3}>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              By understanding these comparisons, organizations can better appreciate how the I5 Model, with its strong
              emphasis on productization, collaborative integration, and a robust, Owner-controlled technology backbone,
              offers a progressive and effective alternative to traditional methods.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={0.4}>
            <Card className="p-4 bg-gray-100 border-t-4 border-gray-600 text-center">
              <p className="text-sm text-gray-700 mb-3">
                <strong>
                  For detailed comparison matrices, regional adaptation guidelines, and performance benchmarking
                  standards, refer to Chapter 5 of the I5 Model Handbook 2025.
                </strong>
              </p>
              <p className="text-sm text-gray-700 mb-3">
                For specifics on technology governance within these comparisons, consult the I5 Model Technology
                Principles and Guidelines.
              </p>
              <p className="text-xs text-gray-600 italic">
                (This content is derived from I5 HB: Chapter 5, with technology governance notes referencing the I5 Tech
                HB.)
              </p>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </>
  )
}
