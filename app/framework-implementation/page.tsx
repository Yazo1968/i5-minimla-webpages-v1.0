"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, CheckCircle, FileText, Settings, Layers, BarChart3, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, useSpring, useInView, useAnimation, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export default function FrameworkImplementationPage() {
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 5000], [0, 1])
  const smoothProgress = useSpring(scrollProgress, { damping: 50, stiffness: 400 })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsNavOpen(false)
    setActiveSection(sectionId)
  }

  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "phase1", "phase2", "phase3", "phase4", "phase5", "impact"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="min-h-screen bg-white font-mono relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />

      {/* Background pattern */}
      <motion.div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "20px 20px"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="text-base font-bold tracking-tight">FRAMEWORK IMPLEMENTATION</div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "phase1", label: "PHASE 1" },
                { id: "phase2", label: "PHASE 2" },
                { id: "phase3", label: "PHASE 3" },
                { id: "phase4", label: "PHASE 4" },
                { id: "phase5", label: "PHASE 5" },
                { id: "impact", label: "IMPACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-xs font-medium transition-all duration-300 hover:text-black relative px-2 py-1",
                    activeSection === item.id ? "text-black bg-gray-100 rounded" : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200 py-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "overview", label: "OVERVIEW" },
                  { id: "phase1", label: "PHASE 1" },
                  { id: "phase2", label: "PHASE 2" },
                  { id: "phase3", label: "PHASE 3" },
                  { id: "phase4", label: "PHASE 4" },
                  { id: "phase5", label: "PHASE 5" },
                  { id: "impact", label: "IMPACT" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left text-xs font-medium transition-all duration-200 p-2 rounded",
                      activeSection === item.id ? "text-black bg-gray-100" : "text-gray-500 hover:text-gray-800",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Scroll indicator for first section */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection === "overview" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-medium mb-2">SCROLL</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      {/* Overview Section */}
      <Section id="overview" className="pt-16">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="Framework Implementation"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight border-b-4 border-black pb-2"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <h2 className="text-lg md:text-xl font-bold">A Phased Approach to I5 Delivery</h2>
              </AnimatedElement>

              <AnimatedElement delay={0.5}>
                <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
                  The I5 Real Estate Delivery Model is implemented through a structured, five-phase framework that
                  transforms how projects are conceived, designed, manufactured, assembled, and supported.
                </p>
              </AnimatedElement>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.7}>
                <div className="bg-gray-100 p-3 rounded-lg border-2 border-gray-300">
                  <h3 className="text-center text-sm font-bold mb-3">Five-Phase Implementation</h3>
                  <div className="space-y-2">
                    {[
                      { number: "1", name: "Product Definition" },
                      { number: "2", name: "Product Configuration" },
                      { number: "3", name: "Pre-Production" },
                      { number: "4", name: "Production" },
                      { number: "5", name: "Commissioning & Handover" },
                    ].map((phase, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 bg-white p-2 rounded border"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {phase.number}
                        </motion.div>
                        <div className="text-xs font-medium">{phase.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Section>

      {/* Phase 1 Section */}
      <Section id="phase1" className="bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.1}>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Phase 1</h3>
                      <p className="text-xs text-gray-600">Product Definition</p>
                    </div>
                  </div>

                  <motion.div
                    className="bg-green-50 border border-green-200 rounded p-3 text-center mb-3"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xl font-bold">70%</div>
                    <div className="text-xs">Reduction in downstream design changes</div>
                  </motion.div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold">Technology Enablement:</h4>
                    {["CRM System", "BoK Platform", "AEC Platform", "Financial Systems"].map((tech, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-100 p-2 rounded text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="Phase 1: Product Definition – Laying the Strategic Foundation"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This initial phase transforms a concept into a validated product strategy with clear business
                  objectives, ensuring market viability before detailed development.
                </p>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "Market Analysis", desc: "Understanding market needs and competitor landscapes" },
                  { title: "Feasibility Study", desc: "Validating technical, financial, and regulatory viability" },
                  { title: "Design Guidelines", desc: "Defining parameters for standardized design" },
                ].map((item, index) => (
                  <AnimatedCard key={index} delay={0.4 + index * 0.1}>
                    <h4 className="text-xs font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </AnimatedCard>
                ))}
              </div>

              <motion.div
                className="bg-gray-900 text-white rounded p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2 text-sm">Gateway 1 Outcome:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Validated Product Definition</div>
                  <div>• Feasibility Report</div>
                  <div>• Business Case</div>
                  <div>• Preliminary Design Package</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Phase 2 Section */}
      <Section id="phase2">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="Phase 2: Product Configuration – Designing for Value"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This phase transforms the validated concept into detailed schematic design while launching initial
                  marketing efforts. This integrated approach can reduce time-to-market by 20-30%.
                </p>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "Schematic Design", desc: "Configuring standardized components for project needs" },
                  { title: "Digital Validation", desc: "Virtual validation using AEC and DfMA platforms" },
                  { title: "Virtual Showroom", desc: "Client experience and configuration platform" },
                ].map((item, index) => (
                  <AnimatedCard key={index} delay={0.4 + index * 0.1}>
                    <h4 className="text-xs font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </AnimatedCard>
                ))}
              </div>

              <motion.div
                className="bg-gray-900 text-white rounded p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2 text-sm">Gateway 2 Outcome:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Approved Schematic Design</div>
                  <div>• Integrated Digital Model</div>
                  <div>• Manufacturing Strategy</div>
                  <div>• Positive Market Response</div>
                </div>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.1}>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Phase 2</h3>
                      <p className="text-xs text-gray-600">Product Configuration</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { value: "20-30%", label: "Time reduction" },
                      { value: "60-70%", label: "Issues reduced" },
                      { value: "60-70%", label: "Pre-production" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded p-2 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="text-lg font-bold"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            type: "spring",
                            stiffness: 300,
                            duration: 0.6,
                          }}
                          viewport={{ once: true }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold">Workflow:</h4>
                    {["BoK Components", "AEC Platform Design", "DfMA Validation", "VS Platform Launch"].map(
                      (step, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-100 p-2 rounded text-xs flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5, backgroundColor: "rgb(229 231 235)" }}
                          transition={{
                            delay: 0.6 + index * 0.15,
                            duration: 0.5,
                            hover: { duration: 0.2 },
                          }}
                          viewport={{ once: true }}
                        >
                          <span className="w-4 h-4 bg-gray-400 rounded-full text-white text-xs flex items-center justify-center mr-2">
                            {index + 1}
                          </span>
                          {step}
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Section>

      {/* Phase 3 Section */}
      <Section id="phase3" className="bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.1}>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Phase 3</h3>
                      <p className="text-xs text-gray-600">Pre-Production</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {[
                      { value: "30-40%", label: "Time reduction" },
                      { value: "60-70%", label: "Error reduction" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded p-2 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold">Parallel Tracks:</h4>
                    <motion.div
                      className="bg-blue-50 p-2 rounded"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs font-bold">3A: Manufacturing</div>
                      <div className="text-xs">Factory production prep</div>
                    </motion.div>
                    <motion.div
                      className="bg-orange-50 p-2 rounded"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs font-bold">3B: Construction</div>
                      <div className="text-xs">Site-specific engineering</div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="Phase 3: Pre-Production – Preparing for Excellence"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This phase translates approved schematic design into comprehensive technical documentation with
                  parallel workstreams for off-site manufacturing (3A) and on-site construction (3B).
                </p>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  className="bg-white p-3 rounded border-l-4 border-blue-500"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-bold mb-2">Phase 3A: Manufacturing Track</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Detailed engineering for factory production</li>
                    <li>• Manufacturing process design</li>
                    <li>• Supply chain activation</li>
                    <li>• Tech: DfMA Platform, SCM System</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-white p-3 rounded border-l-4 border-orange-500"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-bold mb-2">Phase 3B: Construction Track</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Site-specific engineering</li>
                    <li>• Regulatory approvals</li>
                    <li>• Site logistics planning</li>
                    <li>• Tech: AEC Platform, BoK</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="bg-gray-900 text-white rounded p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2 text-sm">Gateway 3 Outcome:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Complete Technical Documentation</div>
                  <div>• Production Readiness Confirmed</div>
                  <div>• Partner Integration Verified</div>
                  <div>• Integrated Execution Plan</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Phase 4 Section */}
      <Section id="phase4">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="Phase 4: Production – Synchronized Manufacturing"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This phase marks physical realization through concurrent off-site manufacturing (4A) and on-site
                  construction/assembly (4B). This parallelism can reduce overall delivery time by 30-50%.
                </p>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div
                  className="bg-white p-3 rounded border-l-4 border-green-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-bold mb-2">Phase 4A: Off-Site Manufacturing</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Component production in partner facilities</li>
                    <li>• Quality control & testing</li>
                    <li>• Packaging & logistics coordination</li>
                    <li>• Tech: Partner MES → Owner Platforms</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-white p-3 rounded border-l-4 border-purple-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-bold mb-2">Phase 4B: On-Site Assembly</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Site preparation & foundations</li>
                    <li>• Infrastructure installation</li>
                    <li>• Precise component assembly</li>
                    <li>• Tech: AEC Platform Field Module</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="bg-gray-900 text-white rounded p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2 text-sm">Gateway 4 Outcome:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Completed Building Structure</div>
                  <div>• Manufacturing Activities Verified</div>
                  <div>• Construction Activities Documented</div>
                  <div>• Ready for Commissioning</div>
                </div>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.1}>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Phase 4</h3>
                      <p className="text-xs text-gray-600">Production</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { value: "30-50%", label: "Delivery time" },
                      { value: "60-70%", label: "Defect reduction" },
                      { value: "40-50%", label: "Assembly time" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded p-2 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="bg-gray-200 text-center p-2 rounded text-xs font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Real-time Coordination via AEC & SCM Platforms
                  </motion.div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Section>

      {/* Phase 5 Section */}
      <Section id="phase5" className="bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.1}>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Phase 5</h3>
                      <p className="text-xs text-gray-600">Commissioning & Handover</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {[
                      { value: "40-50%", label: "Issue reduction" },
                      { value: "3-5%", label: "Per iteration" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded p-2 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold">Improvement Loop:</h4>
                    {["Systems Commissioning", "Digital Handover", "Performance Analysis", "Lessons to BoK"].map(
                      (step, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-100 p-2 rounded text-xs flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-4 h-4 bg-gray-400 rounded-full text-white text-xs flex items-center justify-center mr-2">
                            {index + 1}
                          </span>
                          {step}
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="Phase 5: Commissioning & Handover – Activating Value"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This final delivery phase focuses on activating, testing, and verifying all building systems, followed
                  by formal handover and capturing lessons for continuous improvement.
                </p>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "Systems Commissioning", desc: "Testing and activation of all building systems" },
                  { title: "Digital Handover", desc: "Transfer of documentation and training" },
                  { title: "Continuous Improvement", desc: "Capturing lessons for future iterations" },
                ].map((item, index) => (
                  <AnimatedCard key={index} delay={0.4 + index * 0.1}>
                    <h4 className="text-xs font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </AnimatedCard>
                ))}
              </div>

              <motion.div
                className="bg-gray-900 text-white rounded p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2 text-sm">Final Project Close (Gate 5):</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Formal Acceptance Completed</div>
                  <div>• Contract Closures Finalized</div>
                  <div>• Project Data Archived</div>
                  <div>• Lessons Captured in BoK</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <Section id="impact">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-3 items-center h-full max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={0.1}>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold">Framework Impact</h3>
                      <p className="text-xs text-gray-600">Cumulative Benefits</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { value: "30-50%", label: "Schedule" },
                      { value: "60-80%", label: "Quality" },
                      { value: "3-5%", label: "Per iteration" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded p-2 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 300,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="text-lg font-bold">{stat.value}</div>
                        <div className="text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold">Key Benefits:</h4>
                    {[
                      "Predictable delivery timelines",
                      "Consistent quality outcomes",
                      "Reduced project risks",
                      "Enhanced stakeholder collaboration",
                      "Sustainable construction practices",
                      "Scalable delivery model",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-100 p-2 rounded text-xs flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                        <span>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-2">
              <AnimatedHeading
                text="I5 Framework Cumulative Impact"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0.1}
              />

              <AnimatedElement delay={0.3}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The I5 Framework, through its phased implementation and deep technology integration, offers a
                  repeatable system for transforming real estate delivery—driving efficiency, quality, and value across
                  the entire lifecycle.
                </p>
              </AnimatedElement>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    title: "Schedule Reduction",
                    desc: "30-50% overall delivery time reduction through parallel workflows and integrated delivery",
                  },
                  {
                    title: "Quality Improvement",
                    desc: "60-80% quality improvement through factory-controlled production and systematic QC",
                  },
                  {
                    title: "Continuous Improvement",
                    desc: "3-5% cost/quality improvements per iteration through systematic feedback",
                  },
                ].map((item, index) => (
                  <AnimatedCard key={index} delay={0.4 + index * 0.1}>
                    <h4 className="text-xs font-bold mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </AnimatedCard>
                ))}
              </div>

              <motion.div
                className="bg-gray-900 text-white rounded p-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2 text-sm">Framework Implementation Benefits:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Predictable delivery timelines</div>
                  <div>• Consistent quality outcomes</div>
                  <div>• Reduced project risks</div>
                  <div>• Enhanced stakeholder collaboration</div>
                  <div>• Sustainable construction practices</div>
                  <div>• Scalable delivery model</div>
                </div>
              </motion.div>

              <AnimatedElement delay={1.0}>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="font-bold text-sm mb-2">
                    For detailed activities, deliverables, and gateway requirements for each phase, refer to Chapter 4
                    of the I5 Model Handbook 2025.
                  </p>
                  <p className="text-xs text-gray-600">
                    (This content is derived from I5 HB: Chapter 4, with technology platform integration notes
                    referencing the I5 Tech HB.)
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  )
}

// Section component with scroll-based animations
function Section({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn("h-screen flex items-center justify-center relative overflow-hidden", className)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.1,
          },
        },
        exit: {
          opacity: 0,
          y: -50,
          transition: {
            duration: 0.4,
            ease: "easeIn",
          },
        },
      }}
    >
      {children}
    </motion.section>
  )
}

// Animated heading with letter-by-letter reveal
function AnimatedHeading({
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
    <h2 className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-1">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + wordIndex * 0.05 + charIndex * 0.02,
                duration: 0.3,
              }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  )
}

// Animated element with fade-in and slide-up effect
function AnimatedElement({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}

// Animated card with hover effect
function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      className="bg-white p-3 rounded border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
      transition={{
        delay,
        duration: 0.5,
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
