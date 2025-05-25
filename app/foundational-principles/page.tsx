"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Menu, X, Users, Target, Building, Cog, Clock, Shield, Database } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedCounter } from "@/components/animated-counter"

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

export default function FoundationalPrinciplesPage() {
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
      const sections = ["overview", "productization", "ipd", "synergy", "enablers"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

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
      className="min-h-screen bg-white overflow-hidden font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ overflowX: "hidden" }}
    >
      {/* Navigation */}
      <motion.nav
        className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-12">
            <SplitTextAnimation
              text="FOUNDATIONAL PRINCIPLES"
              className="text-lg font-bold tracking-tight"
              delay={0.2}
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "productization", label: "PRODUCTIZATION" },
                { id: "ipd", label: "IPD" },
                { id: "synergy", label: "SYNERGY" },
                { id: "enablers", label: "ENABLERS" },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-xs font-medium transition-all duration-300 hover:text-black relative",
                    activeSection === item.id ? "text-black" : "text-gray-500 hover:text-gray-800",
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-3 left-0 right-0 h-0.5 bg-black"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                <motion.div animate={{ rotate: isNavOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200 py-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {[
                  { id: "overview", label: "OVERVIEW" },
                  { id: "productization", label: "PRODUCTIZATION" },
                  { id: "ipd", label: "IPD" },
                  { id: "synergy", label: "SYNERGY" },
                  { id: "enablers", label: "ENABLERS" },
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left text-xs font-medium transition-all duration-200",
                      activeSection === item.id ? "text-black" : "text-gray-500 hover:text-gray-800",
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Overview Section */}
      <motion.section
        id="overview"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Simple animated background elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-30"
          style={{ y }}
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
            scale: 1 + mousePosition.x * 0.1,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-40"
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            rotate: mousePosition.x * 10,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SplitTextAnimation
              text="Foundational Principles: The Core of the I5 Model"
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight border-b-4 border-black pb-3"
              delay={0}
            />

            <AnimatedElement delay={0.6}>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Redefining Real Estate Delivery Through Proven Concepts
                </h2>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={0.9}>
              <motion.p
                className="text-sm md:text-base text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The I5 Real Estate Delivery Model is built upon a strategic integration of two powerful, globally
                recognized concepts:{" "}
                <motion.strong
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Productization
                </motion.strong>{" "}
                and{" "}
                <motion.strong
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Integrated Project Delivery (IPD)
                </motion.strong>
                . By combining the strengths of these approaches, and enabling them through a sophisticated,
                Owner-controlled technology ecosystem, I5 offers a transformative path to overcome traditional industry
                inefficiencies.
              </motion.p>
            </AnimatedElement>

            <AnimatedElement delay={1.2}>
              <motion.p
                className="text-sm md:text-base text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                This chapter explores these foundational concepts, their individual benefits, and how their synergistic
                combination within the I5 framework creates unprecedented value for real estate developers.
              </motion.p>
            </AnimatedElement>
          </motion.div>
        </div>
      </motion.section>

      {/* Productization Section */}
      <motion.section
        id="productization"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="grid grid-cols-12 gap-6 items-start">
            <motion.div
              className="col-span-12 lg:col-span-8 space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SplitTextAnimation
                text="Productization: Treating Buildings as Manufactured Products"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0}
              />

              <AnimatedElement delay={0.4}>
                <motion.p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Productization marks a fundamental shift from viewing each building as a unique, one-off project to
                  approaching it as a standardized, repeatable, and configurable product, much like in advanced
                  manufacturing.
                </motion.p>
              </AnimatedElement>

              <AnimatedElement delay={0.6}>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <h3 className="text-lg font-semibold">What is Productization?</h3>
                </motion.div>
                <motion.p
                  className="text-sm text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  In the context of real estate development, productization involves creating standardized building
                  solutions that can be efficiently manufactured, configured to meet specific requirements, and
                  repeatedly delivered with consistent quality and performance. This approach leverages economies of
                  scale, reduces design complexity, and enables the application of manufacturing principles to
                  construction.
                </motion.p>
              </AnimatedElement>

              <AnimatedElement delay={0.8}>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <h3 className="text-lg font-semibold">Key Benefits of Productization:</h3>
                </motion.div>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between p-2 bg-green-50 border border-green-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">Schedule Reduction</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter from={0} to={30} duration={1.5} />
                            -50%
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="flex justify-between p-2 bg-green-50 border border-green-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">Cost Reduction</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter from={0} to={20} duration={1.5} />
                            +%
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between p-2 bg-green-50 border border-green-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">Lower Defect Rates</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter from={60} to={80} duration={1.5} />%
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="flex justify-between p-2 bg-green-50 border border-green-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">Waste Reduction</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter from={30} to={60} duration={1.5} />%
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedElement>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm">
                  <motion.h3
                    className="text-sm font-semibold mb-3 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Productization Elements
                  </motion.h3>
                  <motion.div
                    className="space-y-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Standard Components",
                      "Configurable Options",
                      "Manufacturing Processes",
                      "Quality Systems",
                      "Supply Chain Integration",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-200 border border-gray-800 p-2 text-center text-xs font-medium"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#e5e7eb",
                          borderColor: "#000000",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* IPD Section */}
      <motion.section
        id="ipd"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="grid grid-cols-12 gap-6 items-start">
            <motion.div
              className="col-span-12 lg:col-span-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm">
                  <motion.h3
                    className="text-sm font-semibold mb-3 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    IPD Team Structure
                  </motion.h3>
                  <motion.div
                    className="grid grid-cols-2 gap-2 mb-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {["Owner", "Architect", "Contractor", "Key Suppliers"].map((role, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-200 border-2 border-gray-600 rounded-lg p-2 text-center text-xs font-medium"
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#e5e7eb",
                          borderColor: "#000000",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {role}
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    className="bg-gray-900 text-white border-2 border-black rounded-lg p-2 text-center text-xs font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    Integrated IPD Team
                  </motion.div>
                  <motion.p
                    className="text-xs text-gray-500 italic text-center mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    All parties connected through multi-party agreement
                  </motion.p>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-8 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SplitTextAnimation
                text="Integrated Project Delivery: Aligning Stakeholders for Success"
                className="text-xl md:text-2xl font-bold bg-gray-100 p-3 border-l-4 border-black"
                delay={0}
              />

              <AnimatedElement delay={0.4}>
                <motion.p
                  className="text-sm md:text-base text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  IPD is a collaborative project delivery approach that contractually and behaviorally unites key
                  participants from the outset, fostering a "one team, one goal" mentality to optimize project outcomes
                  and reduce waste.
                </motion.p>
              </AnimatedElement>

              <AnimatedElement delay={0.6}>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <h3 className="text-lg font-semibold">What is Integrated Project Delivery?</h3>
                </motion.div>
                <motion.p
                  className="text-sm text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  IPD represents a fundamental departure from traditional project delivery methods. Instead of
                  sequential handoffs between disconnected parties, IPD creates a unified team where the owner,
                  architect, contractor, and key suppliers work together from project inception through completion,
                  sharing both risks and rewards.
                </motion.p>
              </AnimatedElement>

              <AnimatedElement delay={0.8}>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <h3 className="text-lg font-semibold">Demonstrated Benefits of IPD:</h3>
                </motion.div>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between p-2 bg-blue-50 border border-blue-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">More Likely Ahead of Schedule</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            3x
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="flex justify-between p-2 bg-blue-50 border border-blue-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">More Likely Under Budget</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            2.5x
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <motion.div
                      className="flex justify-between p-2 bg-blue-50 border border-blue-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">Reduction in Claims</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter from={60} to={70} duration={1.5} />%
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      className="flex justify-between p-2 bg-blue-50 border border-blue-200 rounded-lg text-sm relative overflow-hidden"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <motion.span className="font-medium">Higher Customer Satisfaction</motion.span>
                      <motion.div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <motion.span
                            className="font-bold"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            <AnimatedCounter from={25} to={30} duration={1.5} />%
                          </motion.span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedElement>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Synergy Section */}
      <motion.section
        id="synergy"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SplitTextAnimation
              text="The I5 Synergy: Combining Productization & IPD"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={0.4}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                While each approach offers significant benefits individually, the true power of the I5 Model emerges
                from their seamless integration.
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm">
                <motion.h3
                  className="text-lg font-semibold mb-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  The I5 Synergy Formula
                </motion.h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <motion.div
                      className="bg-gray-100 border-2 border-black rounded-lg p-3 text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div variants={iconVariants}>
                        <Building className="w-6 h-6 mx-auto mb-1" />
                      </motion.div>
                      <motion.h4 className="text-sm font-bold mb-1">Productization</motion.h4>
                      <motion.p className="font-bold mb-1 text-xs">WHAT</motion.p>
                      <motion.p className="text-xs">Standardized solutions</motion.p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="text-2xl font-light text-gray-600 text-center"
                    variants={itemVariants}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    +
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <motion.div
                      className="bg-gray-100 border-2 border-black rounded-lg p-3 text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div variants={iconVariants}>
                        <Users className="w-6 h-6 mx-auto mb-1" />
                      </motion.div>
                      <motion.h4 className="text-sm font-bold mb-1">IPD</motion.h4>
                      <motion.p className="font-bold mb-1 text-xs">HOW</motion.p>
                      <motion.p className="text-xs">Integrated delivery</motion.p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="text-2xl font-light text-gray-600 text-center"
                    variants={itemVariants}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    =
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <motion.div
                      className="bg-gray-900 text-white border-2 border-black rounded-lg p-3 text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div variants={iconVariants}>
                        <Target className="w-6 h-6 mx-auto mb-1 text-white" />
                      </motion.div>
                      <motion.h4 className="text-sm font-bold mb-1">I5 Model</motion.h4>
                      <motion.p className="font-bold mb-1 text-xs">
                        <AnimatedCounter from={20} to={25} duration={1.5} />-
                        <AnimatedCounter from={30} to={35} duration={1.5} />% Schedule Reduction
                      </motion.p>
                      <motion.p className="text-xs">
                        <AnimatedCounter from={10} to={15} duration={1.5} />-
                        <AnimatedCounter from={20} to={25} duration={1.5} />% Cost Savings
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedElement delay={0.8}>
              <motion.div className="space-y-3" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                <motion.h3
                  className="text-lg font-semibold"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  How Productization Enhances IPD:
                </motion.h3>
                <motion.ul
                  className="space-y-2 text-gray-700"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Provides clear, standardized scope for collaborative planning",
                    "Enables more accurate cost and schedule predictions",
                    "Reduces design complexity and decision-making time",
                    "Facilitates early supplier involvement in standardized components",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <motion.span
                        className="bg-black text-white p-1 rounded-full mt-0.5 flex-shrink-0 text-xs"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        •
                      </motion.span>
                      <motion.span className="text-sm">{item}</motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1.0}>
              <motion.div className="space-y-3" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                <motion.h3
                  className="text-lg font-semibold"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  How IPD Enhances Productization:
                </motion.h3>
                <motion.ul
                  className="space-y-2 text-gray-700"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Ensures all stakeholders contribute to product optimization",
                    "Aligns incentives for continuous product improvement",
                    "Facilitates rapid iteration and refinement of standard solutions",
                    "Creates shared ownership of product quality and performance",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <motion.span
                        className="bg-black text-white p-1 rounded-full mt-0.5 flex-shrink-0 text-xs"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        •
                      </motion.span>
                      <motion.span className="text-sm">{item}</motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </div>
      </motion.section>

      {/* Enablers Section */}
      <motion.section
        id="enablers"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SplitTextAnimation
              text="Key Enablers of the Combined Model"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={0.4}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Several critical enablers must be in place for the successful integration of Productization and IPD
                within the I5 Model:
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Design for Manufacturing and Assembly (DfMA)",
                description:
                  "Critical for productization, enhanced by IPD's early manufacturer involvement, optimized in the Owner's DfMA Platform.",
                icon: Cog,
              },
              {
                title: "Just-in-Time (JIT) Procurement",
                description:
                  "Coordinated by the integrated IPD team using shared schedules and logistics data, managed via Owner's AEC and SCM platforms.",
                icon: Clock,
              },
              {
                title: "Digital Collaboration Platforms",
                description:
                  "Owner-controlled AEC Platform and BoK Platform serve as the digital backbone, ensuring single source of truth.",
                icon: Database,
              },
              {
                title: "Robust Governance & Culture",
                description:
                  "Essential for managing the integrated ecosystem, with BoK Governance Hub orchestrating cross-functional decisions.",
                icon: Shield,
              },
            ].map((enabler, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm h-full">
                  <motion.div className="flex items-center gap-2 mb-2">
                    <motion.div variants={iconVariants}>
                      <enabler.icon className="w-5 h-5 text-gray-600" />
                    </motion.div>
                    <motion.h4
                      className="text-sm font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {enabler.title}
                    </motion.h4>
                  </motion.div>
                  <motion.p
                    className="text-xs text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {enabler.description}
                  </motion.p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="p-4 border-2 border-gray-300 bg-gray-100 text-center">
                <motion.p
                  className="text-sm font-semibold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  For a deeper understanding of Productization, IPD, and their synergistic application within the I5
                  Model, refer to Chapter 3 of the I5 Model Handbook 2025.
                </motion.p>
                <motion.p
                  className="text-xs text-gray-600 italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  (This content is derived from I5 HB: Chapter 3, with technology platform integration notes referencing
                  the I5 Tech HB.)
                </motion.p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}
