"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Zap,
  Target,
  Users,
  Database,
  Shield,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  Building,
  Cog,
  Brain,
  CheckCircle,
} from "lucide-react"
import { motion, useTransform, useScroll, useInView } from "framer-motion"

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
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
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
    </motion.div>
  )
}

function AnimatedElement({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
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

function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedIcon({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
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
    { id: "challenge", label: "THE CHALLENGE" },
    { id: "solution", label: "I5 SOLUTION" },
    { id: "pillars", label: "CORE PILLARS" },
    { id: "technology", label: "TECHNOLOGY" },
    { id: "outcomes", label: "OUTCOMES" },
    { id: "transformation", label: "TRANSFORMATION" },
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
    <motion.header
      className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-lg font-mono font-bold tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I5 FRAMEWORK HOME
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }}
                className={`text-xs font-mono transition-all duration-300 relative ${
                  activeSection === section.id ? "text-black" : "text-gray-500 hover:text-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ overflowX: "hidden" }}
    >
      <InternalNavigation />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-6">
        {/* Introduction */}
        <motion.section
          id="introduction"
          className="relative min-h-[75vh] flex flex-col justify-center py-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ y }}
            className="absolute top-1/4 left-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-30 -z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
            className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-40 -z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          />

          <SplitTextAnimation
            text="home: transforming real estate and construction for the future"
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight border-b-4 border-black pb-2 mb-4"
            delay={0}
          />

          <AnimatedElement delay={0.8}>
            <motion.p
              className="text-sm text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              The real estate and construction sectors are foundational to the global economy, with annual expenditures
              exceeding{" "}
              <motion.strong
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                $10 trillion
              </motion.strong>{" "}
              and accounting for approximately{" "}
              <motion.strong
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                13% of worldwide GDP
              </motion.strong>{" "}
              (I5 HB: Preface).
            </motion.p>
          </AnimatedElement>

          <AnimatedElement delay={1.0}>
            <motion.p
              className="text-sm text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              The{" "}
              <motion.strong
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                I5 Real Estate Delivery Model
              </motion.strong>{" "}
              offers a structured, strategic pathway to bridge this Industry 4.0 implementation gap.
            </motion.p>
          </AnimatedElement>
        </motion.section>

        {/* The Challenge */}
        <motion.section
          id="challenge"
          className="relative min-h-[75vh] flex flex-col justify-center py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, threshold: 0.2 }}
        >
          <motion.div
            className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gray-100 -z-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <SplitTextAnimation
            text="the challenge: an industry at a crossroads"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedCard delay={0.6}>
              <Card className="p-4 bg-gray-50">
                <motion.h4
                  className="font-semibold mb-2 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  productivity growth since 1950s
                </motion.h4>
                <div className="flex items-end justify-center gap-8 mb-3">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-16 h-24 bg-gray-800 mb-2 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: 96 }}
                      transition={{ duration: 1.2, delay: 1.2 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="text-sm font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      viewport={{ once: true }}
                    >
                      250-300%
                    </motion.div>
                    <motion.div
                      className="text-xs text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      viewport={{ once: true }}
                    >
                      manufacturing
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-16 h-10 bg-gray-400 mb-2 rounded-t"
                      initial={{ height: 0 }}
                      whileInView={{ height: 40 }}
                      transition={{ duration: 1.2, delay: 1.3 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="text-sm font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.9 }}
                      viewport={{ once: true }}
                    >
                      ~0%
                    </motion.div>
                    <motion.div
                      className="text-xs text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.1 }}
                      viewport={{ once: true }}
                    >
                      construction
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </AnimatedCard>

            <AnimatedElement delay={0.8}>
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Productivity Stagnation:",
                    text: "While manufacturing has seen 250-300% productivity gains since the 1950s, construction productivity has remained largely flat.",
                  },
                  {
                    title: "Digitalization Gap:",
                    text: "Technology investments average less than 1% of revenue, compared to 3-4% across other industries.",
                  },
                  {
                    title: "Project Performance Issues:",
                    text: "Developments frequently exceed budgets by 20-30% and schedules by 20%.",
                  },
                  {
                    title: "Systemic Pressures:",
                    text: "Escalating costs, labor shortages, supply chain vulnerabilities, and sustainability mandates strain traditional delivery models.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <strong>{item.title}</strong> {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </motion.section>

        {/* I5 Solution */}
        <motion.section
          id="solution"
          className="relative min-h-[75vh] flex flex-col justify-center py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, threshold: 0.2 }}
        >
          <SplitTextAnimation
            text="the solution: the I5 real estate delivery model"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedElement delay={0.6}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  "The I5 Real Estate Delivery Model offers a structured, strategic pathway to bridge this Industry 4.0 implementation gap. It's a comprehensive system designed to redefine how real estate is conceptualized, manufactured, delivered, and operated.",
                  "The I5 Model merges the best of productization and Integrated Project Delivery (IPD) principles into a cohesive approach.",
                  "Technology is a fundamental enabler of this transformation.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-sm text-gray-700 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.3 }}
                    viewport={{ once: true }}
                  >
                    {text.includes("I5 Real Estate Delivery Model") ? (
                      <>
                        The{" "}
                        <motion.strong
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          I5 Real Estate Delivery Model
                        </motion.strong>{" "}
                        {text.substring(text.indexOf("offers"))}
                      </>
                    ) : text.includes("productization") ? (
                      <>
                        The I5 Model merges the best of{" "}
                        <motion.strong
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.4 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          productization
                        </motion.strong>{" "}
                        and{" "}
                        <motion.strong
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.6 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          Integrated Project Delivery (IPD)
                        </motion.strong>{" "}
                        principles into a cohesive approach.
                      </>
                    ) : text.includes("fundamental enabler") ? (
                      <>
                        Technology is a{" "}
                        <motion.strong
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.8 + index * 0.3 }}
                          viewport={{ once: true }}
                        >
                          fundamental enabler
                        </motion.strong>{" "}
                        of this transformation.
                      </>
                    ) : (
                      text
                    )}
                  </motion.p>
                ))}
              </motion.div>
            </AnimatedElement>

            <AnimatedCard delay={0.8}>
              <Card className="p-4 bg-gray-50">
                <motion.h4
                  className="font-semibold mb-3 text-sm text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  transformation journey
                </motion.h4>
                <div className="space-y-4">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-xs font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ once: true }}
                    >
                      current state
                    </motion.div>
                    <motion.div
                      className="space-y-1 text-xs text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                      viewport={{ once: true }}
                    >
                      {[
                        "• fragmented processes",
                        "• low digitalization",
                        "• project-based approach",
                        "• siloed teams",
                        "• unpredictable outcomes",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.3 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedIcon delay={2.3}>
                      <ArrowRight className="w-6 h-6 mx-auto text-gray-600" />
                    </AnimatedIcon>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="text-xs font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.7 }}
                      viewport={{ once: true }}
                    >
                      I5 future state
                    </motion.div>
                    <motion.div
                      className="space-y-1 text-xs text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 2.9 }}
                      viewport={{ once: true }}
                    >
                      {[
                        "• integrated workflows",
                        "• digital ecosystem",
                        "• product-based delivery",
                        "• collaborative teams",
                        "• predictable excellence",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 3.1 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </AnimatedCard>
          </motion.div>
        </motion.section>

        {/* Core Pillars */}
        <motion.div
          id="pillars"
          className="relative min-h-[75vh] flex flex-col justify-center py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, threshold: 0.2 }}
        >
          <SplitTextAnimation
            text="core pillars of the I5 model"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.4}>
            <motion.p
              className="text-sm text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              The I5 Model is built upon five interconnected dimensions, each enabled and amplified by a strategic
              technology ecosystem:
            </motion.p>
          </AnimatedElement>

          <AnimatedCard delay={0.6}>
            <Card className="mb-4 p-4 bg-gray-50">
              <motion.h3
                className="font-semibold mb-3 text-center text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                the five pillars of I5
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Zap, title: "integrated framework", desc: "concurrent, data-centric workflows", number: "1" },
                  { icon: Building, title: "industrialized methods", desc: "manufacturing principles", number: "2" },
                  { icon: Database, title: "information centrality", desc: "data as primary deliverable", number: "3" },
                  { icon: Users, title: "incentive alignment", desc: "collaborative contracts", number: "4" },
                  { icon: Cog, title: "infrastructure integration", desc: "cyber-physical systems", number: "5" },
                ].map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="p-3 bg-white relative overflow-hidden hover:shadow-md transition-all duration-300">
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-1 bg-gray-800"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                      <motion.div
                        className="absolute top-2 right-2 text-2xl font-bold text-gray-200 opacity-30"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 0.3, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {pillar.number}
                      </motion.div>
                      <div className="relative z-10">
                        <AnimatedIcon delay={1.8 + index * 0.1}>
                          <pillar.icon className="w-5 h-5 text-gray-600 mb-2" />
                        </AnimatedIcon>
                        <motion.h4
                          className="font-semibold text-xs mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {pillar.title}
                        </motion.h4>
                        <motion.p
                          className="text-xs text-gray-600"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {pillar.desc}
                        </motion.p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </AnimatedCard>

          <motion.div
            className="grid md:grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            viewport={{ once: true }}
          >
            <AnimatedElement delay={2.7}>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.9 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Integrated Framework:",
                    text: "Moves from linear, document-centric processes to concurrent, data-centric workflows.",
                  },
                  {
                    title: "Industrialized Methods:",
                    text: "Applies manufacturing principles of standardization and modularization.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.1 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <strong>{item.title}</strong> {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={2.8}>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.0 }}
                viewport={{ once: true }}
              >
                {[
                  { title: "Incentive Alignment:", text: "Employs contractual structures that foster collaboration." },
                  {
                    title: "Infrastructure Integration:",
                    text: "Connects physical building systems with digital management platforms.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.5 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <strong>{item.title}</strong> {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </motion.div>

        {/* Technology Advantage */}
        <motion.div
          id="technology"
          className="relative min-h-[75vh] flex flex-col justify-center py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, threshold: 0.2 }}
        >
          <SplitTextAnimation
            text="the I5 technology advantage"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.4}>
            <motion.p
              className="text-sm text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              A unique aspect of the I5 Model is its sophisticated,{" "}
              <motion.strong
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Owner-controlled technology ecosystem
              </motion.strong>
              .
            </motion.p>
          </AnimatedElement>

          <AnimatedCard delay={0.6}>
            <Card className="mb-4 p-4 bg-gray-800 text-white">
              <motion.h3
                className="font-semibold mb-3 text-center text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                technology ecosystem core principles
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Shield,
                    title: "owner control",
                    desc: "developer owns and administers core platforms for strategic alignment",
                  },
                  { icon: Target, title: "enhance existing tech", desc: "integrate viable existing investments" },
                  {
                    icon: CheckCircle,
                    title: "vendor neutrality",
                    desc: "best-of-breed solutions without vendor lock-in",
                  },
                  { icon: Brain, title: "BoK as governance hub", desc: "orchestrating critical business workflows" },
                ].map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="p-3 bg-gray-700 border-gray-600">
                      <motion.div
                        className="flex items-center space-x-2 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <AnimatedIcon delay={1.6 + index * 0.1}>
                          <principle.icon className="w-4 h-4 text-white" />
                        </AnimatedIcon>
                        <motion.h4
                          className="font-semibold text-xs text-white"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {principle.title}
                        </motion.h4>
                      </motion.div>
                      <motion.p
                        className="text-xs text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {principle.desc}
                      </motion.p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </AnimatedCard>

          <motion.div
            className="grid md:grid-cols-2 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            viewport={{ once: true }}
          >
            <AnimatedElement delay={2.6}>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.8 }}
                viewport={{ once: true }}
              >
                {[
                  { title: "Owner Control:", text: "The Owner owns and administers the core digital platforms." },
                  {
                    title: "Enhance and Supplement Existing Technologies:",
                    text: "I5 aims to integrate and leverage an Owner's viable existing technology investments.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <strong>{item.title}</strong> {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={2.7}>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.9 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Vendor Neutrality:",
                    text: "The ecosystem design focuses on functional capability and interoperability standards.",
                  },
                  {
                    title: "The Body of Knowledge (BoK) as a Configurable Governance Hub:",
                    text: "The BoK platform is uniquely envisioned as an active engine.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-xs"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.4 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <strong>{item.title}</strong> {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          id="outcomes"
          className="relative min-h-[75vh] flex flex-col justify-center py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, threshold: 0.2 }}
        >
          <SplitTextAnimation
            text="expected outcomes"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.4}>
            <motion.p
              className="text-sm text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Organizations adopting the I5 Model can anticipate significant improvements:
            </motion.p>
          </AnimatedElement>

          <AnimatedCard delay={0.6}>
            <Card className="mb-4 p-4 bg-gray-50">
              <motion.h3
                className="font-semibold mb-3 text-center text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                I5 model expected outcomes
              </motion.h3>
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Clock,
                    value: "20-50%",
                    title: "faster completion",
                    desc: "parallel workflows and off-site manufacturing",
                  },
                  {
                    icon: DollarSign,
                    value: "15-25%",
                    title: "reduced costs",
                    desc: "standardization and fewer overruns",
                  },
                  { icon: Star, value: "50%", title: "fewer defects", desc: "controlled factory production" },
                  {
                    icon: TrendingUp,
                    value: "high",
                    title: "scalability",
                    desc: "continuous refinement across portfolio",
                  },
                ].map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Card className="p-3 text-center hover:shadow-md transition-all duration-300">
                      <AnimatedIcon delay={1.4 + index * 0.1}>
                        <outcome.icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                      </AnimatedIcon>
                      <motion.div
                        className="text-lg font-bold text-gray-800 mb-1"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                      >
                        {outcome.value}
                      </motion.div>
                      <motion.div
                        className="font-semibold text-xs mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {outcome.title}
                      </motion.div>
                      <motion.p
                        className="text-xs text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {outcome.desc}
                      </motion.p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </AnimatedCard>
        </motion.div>

        {/* Transformation & CTA */}
        <motion.div
          id="transformation"
          className="relative min-h-[75vh] flex flex-col justify-center py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, threshold: 0.2 }}
        >
          <SplitTextAnimation
            text="navigating the future of development"
            className="text-lg md:text-xl font-semibold tracking-tight leading-tight border-b-2 border-gray-300 pb-2 mb-3"
            delay={0}
          />

          <AnimatedElement delay={0.4}>
            <motion.p
              className="text-sm text-gray-700 leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              The I5 Model provides a clear blueprint for organizations ready to move beyond incremental adjustments and
              embrace a comprehensive transformation.
            </motion.p>
          </AnimatedElement>

          <AnimatedCard delay={0.6}>
            <Card className="p-6 bg-gray-100 border-t-4 border-gray-600 text-center">
              <motion.h3
                className="text-lg font-bold mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                ready to transform your real estate delivery?
              </motion.h3>
              <motion.p
                className="text-sm text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                The I5 Model offers a proven pathway to bridge the Industry 4.0 gap and achieve superior outcomes in
                today's challenging market.
              </motion.p>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    href: "/market-context",
                    title: "explore context",
                    desc: "understand the market drivers and industry transformation",
                    action: "learn more",
                  },
                  {
                    href: "/foundational-principles",
                    title: "core principles",
                    desc: "discover productization and integrated delivery concepts",
                    action: "discover",
                  },
                  {
                    href: "/framework-implementation",
                    title: "implementation",
                    desc: "learn the five-phase approach to I5 transformation",
                    action: "implement",
                  },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group border-2 border-gray-300 rounded-lg p-4 transition-all hover:border-black bg-white block"
                    >
                      <motion.h4
                        className="text-sm font-bold mb-2 uppercase tracking-wide"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {link.title}
                      </motion.h4>
                      <motion.p
                        className="text-xs text-gray-700 mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {link.desc}
                      </motion.p>
                      <motion.div
                        className="flex items-center justify-center text-xs font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span>{link.action}</span>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <ArrowRight className="h-3 w-3 ml-2" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.8}>
            <Card className="p-4 bg-gray-100 border-t-4 border-gray-600 text-center">
              <motion.p
                className="text-sm text-gray-700 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.strong
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  for a comprehensive understanding of the I5 model, refer to the I5 model handbook 2025.
                </motion.strong>
              </motion.p>
              <motion.p
                className="text-sm text-gray-700 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                for detailed technical principles, platform guidelines, and integration strategies, consult the I5 model
                technology principles and guidelines.
              </motion.p>
              <motion.p
                className="text-xs text-gray-600 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
              >
                (this content synthesizes information from I5 HB: preface, chapter 1; and I5 tech HB: preface, sections
                1 & 2. specific statistics are from I5 HB preface and section 1.2 unless otherwise noted from I5 tech
                HB.)
              </motion.p>
            </Card>
          </AnimatedCard>
        </motion.div>
      </div>
    </motion.div>
  )
}
