"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BarChart3, Clock, DollarSign, HardHat, Leaf, Truck, ChevronRight, Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView as useFramerInView, AnimatePresence } from "framer-motion"

export default function MarketContextPage() {
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      const sections = ["overview", "drivers", "models", "landscape", "regulatory", "impact"]
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
    <div className="min-h-screen bg-white overflow-hidden font-mono">
      {/* Navigation */}
      <motion.nav
        className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-12">
            <motion.div
              className="text-lg font-bold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MARKET CONTEXT
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "drivers", label: "DRIVERS" },
                { id: "models", label: "MODELS" },
                { id: "landscape", label: "LANDSCAPE" },
                { id: "regulatory", label: "REGULATORY" },
                { id: "impact", label: "IMPACT" },
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
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={{
                      color: activeSection === item.id ? "#000" : "#6b7280",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute -bottom-3 left-0 right-0 h-0.5 bg-black"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Navigation Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
                <motion.div animate={{ rotate: isNavOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                className="md:hidden border-t border-gray-200 py-3"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-3">
                  {[
                    { id: "overview", label: "OVERVIEW" },
                    { id: "drivers", label: "DRIVERS" },
                    { id: "models", label: "MODELS" },
                    { id: "landscape", label: "LANDSCAPE" },
                    { id: "regulatory", label: "REGULATORY" },
                    { id: "impact", label: "IMPACT" },
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
                      whileHover={{ x: 5, color: "#000" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Overview Section */}
      <motion.section
        id="overview"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-30"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
            scale: 1 + mousePosition.x * 0.1,
            rotate: mousePosition.x * 5,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gray-200 rounded-full opacity-40"
          animate={{
            x: mousePosition.x * -15,
            y: mousePosition.y * -15,
            rotate: mousePosition.x * 10,
            scale: 1 + Math.abs(mousePosition.y) * 0.1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gray-300 rounded-full opacity-20"
          animate={{
            x: mousePosition.x * 10,
            y: mousePosition.y * 25,
            rotate: -mousePosition.y * 15,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-center h-full max-h-[calc(100vh-8rem)]">
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <SplitTextAnimation
              text="Market Context: Navigating a Dynamic Real Estate Landscape"
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight border-b-4 border-black pb-3"
              delay={0}
            />

            <AnimatedElement delay={600}>
              <motion.p
                className="text-sm md:text-base text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  The global real estate and construction sectors are undergoing a period of intense change, driven by a
                  convergence of economic, technological, and societal pressures.
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Understanding this dynamic market context is crucial for recognizing the opportunities that innovative
                  delivery models like I5 can unlock.
                </motion.span>
              </motion.p>
            </AnimatedElement>

            <AnimatedElement delay={900}>
              <motion.div
                className="flex items-center gap-3 text-xs font-medium"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Explore the landscape
                </motion.span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ChevronRight className="h-3 w-3" />
                </motion.div>
              </motion.div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <AnimatedElement delay={1200}>
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ duration: 0.3 }}>
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <div className="relative z-10">
                    <motion.h3
                      className="text-lg font-semibold mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                    >
                      Delivery Timeline Comparison
                    </motion.h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <motion.div
                          className="flex justify-between text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                        >
                          <motion.span className="font-medium" whileHover={{ scale: 1.05 }}>
                            Traditional Approach
                          </motion.span>
                          <motion.span
                            className="font-medium"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            100% Timeline
                          </motion.span>
                        </motion.div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.5 }}
                          style={{ transformOrigin: "left" }}
                        >
                          <Progress value={100} className="h-6 bg-gray-300" indicatorClassName="bg-gray-600" />
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <motion.div
                          className="flex justify-between text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.6 }}
                        >
                          <motion.span className="font-medium" whileHover={{ scale: 1.05 }}>
                            I5 Model Approach
                          </motion.span>
                          <motion.span
                            className="font-medium"
                            animate={{
                              scale: [1, 1.1, 1],
                              color: ["#000", "#22c55e", "#000"],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            50-80% Timeline
                          </motion.span>
                        </motion.div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.2, delay: 1.7 }}
                          style={{ transformOrigin: "left" }}
                        >
                          <Progress value={65} className="h-6 bg-gray-300" indicatorClassName="bg-black" />
                        </motion.div>
                      </div>
                    </div>
                    <motion.p
                      className="text-xs text-gray-500 italic text-center mt-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      20-50% schedule compression with I5 Model implementation
                    </motion.p>
                  </div>
                </Card>
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </motion.section>

      {/* Drivers Section */}
      <motion.section
        id="drivers"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SplitTextAnimation
              text="The Evolving Terrain of Real Estate Development"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={400}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Understanding this dynamic market context is crucial for recognizing opportunities that innovative
                  delivery models like I5 can unlock.
                </motion.span>
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedElement delay={600}>
              <motion.h2
                className="text-lg font-bold mb-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Key Drivers Forcing Industry Transformation:
              </motion.h2>
              <motion.p
                className="text-sm text-gray-700 mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Developers worldwide, particularly in active regions like the UAE and GCC, face mounting challenges
                  that demand new approaches:
                </motion.span>
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <DriverCard
              icon={<DollarSign className="h-6 w-6" />}
              title="Escalating Costs"
              metric="15-25%"
              description="Material & labor cost increases over past 2 years"
              detail="Significant surges in construction material and labor costs (e.g., 15-25% increases in many markets over the past two years) are putting unprecedented pressure on project margins."
              delay={800}
            />
            <DriverCard
              icon={<Clock className="h-6 w-6" />}
              title="Compressed Timelines"
              metric="15%"
              description="NPV increase with 20% faster delivery"
              detail="Intense market demand requires faster delivery of increasingly complex projects, making speed-to-market a critical competitive differentiator. Reducing time-to-market by 20% can increase project NPV by up to 15%."
              delay={900}
            />
            <DriverCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Execution Challenges"
              metric="80%"
              description="Average budget overrun on large projects"
              detail="Large construction projects globally continue to underperform, averaging 20% longer schedules and 80% budget overruns. The industry has seen virtually no productivity growth in decades."
              delay={1000}
            />
            <DriverCard
              icon={<HardHat className="h-6 w-6" />}
              title="Labor Shortages"
              metric="41%"
              description="US construction workforce retiring by 2031"
              detail="Persistent shortages of skilled labor limit capacity and drive up costs, a problem expected to intensify with workforce demographics (e.g., 41% of the current U.S. construction workforce expected to retire by 2031)."
              delay={1100}
            />
            <DriverCard
              icon={<Truck className="h-6 w-6" />}
              title="Supply Chain Issues"
              metric="Majority"
              description="Of major projects affected by disruptions"
              detail="Recent global disruptions have exposed the fragility of traditional construction supply chains, leading to material shortages and price volatility affecting a majority of major projects."
              delay={1200}
            />
            <DriverCard
              icon={<Leaf className="h-6 w-6" />}
              title="Sustainability Mandates"
              metric="ESG"
              description="Growing regulations & market expectations"
              detail="Stricter environmental regulations and growing market expectations for 'greener,' healthier, and more socially responsible buildings are reshaping development priorities and investment criteria."
              delay={1300}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Models Section */}
      <motion.section
        id="models"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SplitTextAnimation
              text="Emerging Business Models in Response"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={400}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Innovative developers are adopting new strategies to address these pressures:
                </motion.span>
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-6">
            <AnimatedElement delay={600}>
              <motion.div className="relative" whileHover={{ scale: 1.02, rotateY: -5 }} transition={{ duration: 0.3 }}>
                <motion.div
                  className="bg-gray-900 text-white p-4 rounded-lg border-2 border-black"
                  initial={{ opacity: 0, x: -50, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-lg font-semibold mb-3 text-center uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Traditional Model
                  </motion.h3>
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.9,
                        },
                      },
                    }}
                  >
                    <ModelItem text="Bespoke, one-off projects" traditional />
                    <ModelItem text="Sequential design & build" traditional />
                    <ModelItem text="Adversarial contracts" traditional />
                    <ModelItem text="Limited technology use" traditional />
                    <ModelItem text="Site-based construction" traditional />
                  </motion.ul>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={900}>
              <motion.div className="relative" whileHover={{ scale: 1.02, rotateY: 5 }} transition={{ duration: 0.3 }}>
                <motion.div
                  className="bg-white p-4 rounded-lg border-2 border-black"
                  initial={{ opacity: 0, x: 50, rotateY: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-lg font-semibold mb-3 text-center uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    Innovative Approaches
                  </motion.h3>
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.2,
                        },
                      },
                    }}
                  >
                    <ModelItem text="Productized solutions" />
                    <ModelItem text="Integrated delivery (IPD)" />
                    <ModelItem text="Collaborative contracts" />
                    <ModelItem text="Digital transformation" />
                    <ModelItem text="Manufacturing mindset" />
                  </motion.ul>
                </motion.div>
              </motion.div>
            </AnimatedElement>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2,
                },
              },
            }}
          >
            <AnimatedElement delay={1200}>
              <motion.div
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  Productization Approaches
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  A shift from bespoke projects to manufactured products using:
                </motion.p>
                <motion.ul
                  className="ml-4 space-y-1 list-disc text-xs"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1.6,
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>Modular Construction:</motion.strong> 20-50% schedule
                    reduction, ~20% cost savings
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>Design for Manufacturing (DfMA):</motion.strong> Up to
                    30% labor reduction
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>Platform Strategies:</motion.strong> Up to 25% design
                    cost reduction
                  </motion.li>
                </motion.ul>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1400}>
              <motion.div
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  viewport={{ once: true }}
                >
                  Collaborative Contracting
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  Moving away from adversarial models towards:
                </motion.p>
                <motion.ul
                  className="ml-4 space-y-1 list-disc text-xs"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1.8,
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>Integrated Project Delivery (IPD):</motion.strong> 85%
                    of projects finish at/under budget
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>Target Value Design & Alliancing:</motion.strong>{" "}
                    Enhanced cost control
                  </motion.li>
                </motion.ul>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1600}>
              <motion.div
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  Advanced Technology Adoption
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  viewport={{ once: true }}
                >
                  Leveraging tools like:
                </motion.p>
                <motion.ul
                  className="ml-4 space-y-1 list-disc text-xs"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 2.0,
                      },
                    },
                  }}
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>BIM:</motion.strong> Up to 40% reduction in design
                    errors
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.strong whileHover={{ scale: 1.05 }}>Digital Twins:</motion.strong> Improved lifecycle
                    management
                  </motion.li>
                </motion.ul>
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </div>
      </motion.section>

      {/* Landscape Section */}
      <motion.section
        id="landscape"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SplitTextAnimation
              text="Competitive Landscape & Market Shifts"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={400}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  The competitive environment is intensifying, with both established players and new entrants adopting
                  innovative delivery methods
                </motion.span>
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            <RegionCard
              name="DUBAI"
              stat="45%"
              detail="Major pipeline controlled by Emaar, Nakheel, Dubai Holding"
              delay={600}
            />
            <RegionCard name="ABU DHABI" stat="35%" detail="Development controlled by Aldar" delay={750} />
            <RegionCard name="SAUDI ARABIA" stat="$1T+" detail="Planned development (NEOM, ROSHN)" delay={900} />
            <RegionCard name="SINGAPORE" stat="35%+" detail="PPVC adoption rate" delay={1050} />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2,
                },
              },
            }}
          >
            <AnimatedElement delay={1200}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm">
                  <motion.h3
                    className="text-lg font-semibold mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    International Benchmarks
                  </motion.h3>
                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.5,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="p-2 bg-gray-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                    >
                      <motion.h4 className="font-semibold text-sm" whileHover={{ scale: 1.05 }}>
                        UK
                      </motion.h4>
                      <motion.p
                        className="text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        viewport={{ once: true }}
                      >
                        Berkeley Homes investing in modular factories
                      </motion.p>
                    </motion.div>
                    <motion.div
                      className="p-2 bg-gray-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                    >
                      <motion.h4 className="font-semibold text-sm" whileHover={{ scale: 1.05 }}>
                        Japan
                      </motion.h4>
                      <motion.p
                        className="text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        viewport={{ once: true }}
                      >
                        Sekisui House industrialized homebuilding, reducing waste by 60%
                      </motion.p>
                    </motion.div>
                    <motion.div
                      className="p-2 bg-gray-100 rounded-lg"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                    >
                      <motion.h4 className="font-semibold text-sm" whileHover={{ scale: 1.05 }}>
                        Singapore
                      </motion.h4>
                      <motion.p
                        className="text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.9 }}
                        viewport={{ once: true }}
                      >
                        Mandates for PPVC driving adoption above 35%
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1400}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm">
                  <motion.h3
                    className="text-lg font-semibold mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}
                  >
                    Evolving Expectations
                  </motion.h3>
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.7,
                        },
                      },
                    }}
                  >
                    <motion.li
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="bg-black text-white p-1 rounded-full mt-0.5 flex-shrink-0 text-xs"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        •
                      </motion.span>
                      <motion.span
                        className="text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.9 }}
                        viewport={{ once: true }}
                      >
                        72% of commercial tenants prioritize smart building features
                      </motion.span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="bg-black text-white p-1 rounded-full mt-0.5 flex-shrink-0 text-xs"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        •
                      </motion.span>
                      <motion.span
                        className="text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        viewport={{ once: true }}
                      >
                        Corporate ESG goals driving preference for green-certified buildings
                      </motion.span>
                    </motion.li>
                    <motion.li
                      className="flex items-start gap-2"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="bg-black text-white p-1 rounded-full mt-0.5 flex-shrink-0 text-xs"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        •
                      </motion.span>
                      <motion.span
                        className="text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.1 }}
                        viewport={{ once: true }}
                      >
                        Dubai ranks 14th globally for green buildings
                      </motion.span>
                    </motion.li>
                  </motion.ul>
                </Card>
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </div>
      </motion.section>

      {/* Regulatory Section */}
      <motion.section
        id="regulatory"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white transform -skew-y-1"
          initial={{ opacity: 0, skewY: -2 }}
          whileInView={{ opacity: 1, skewY: -1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SplitTextAnimation
              text="Navigating Regulatory & Compliance Considerations"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={400}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Successfully developing real estate requires navigating a complex web of regulations, which are also
                  evolving to accommodate modern methods.
                </motion.span>
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatedElement delay={600}>
              <motion.h3
                className="text-lg font-semibold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Regulatory Evolution
              </motion.h3>
              <motion.div
                className="flex flex-wrap justify-center items-center gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8,
                    },
                  },
                }}
              >
                {[
                  "Traditional Building Codes",
                  "E-Permitting Systems",
                  "Modular Approvals",
                  "Sustainability Mandates",
                  "Net Zero 2050",
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-center">
                    <motion.div
                      className="bg-gray-200 border-2 border-gray-600 rounded-lg p-2 text-center w-32"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0 },
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#e5e7eb",
                        borderColor: "#374151",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.p
                        className="text-xs font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {item}
                      </motion.p>
                    </motion.div>
                    {index < 4 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                      >
                        <ArrowRight className="h-3 w-3 text-gray-400 mx-1" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8,
                },
              },
            }}
          >
            <AnimatedElement delay={800}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm h-full">
                  <motion.h3
                    className="text-sm font-semibold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    UAE Regulatory Overview
                  </motion.h3>
                  <motion.p
                    className="text-xs text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      Each emirate has specific authorities (e.g., Dubai Municipality, Abu Dhabi's DMT). Unified
                      building codes (like Dubai's) and e-permitting systems aim to streamline approvals, potentially
                      reducing processing times by 30-40%.
                    </motion.span>
                  </motion.p>
                </Card>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1000}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm h-full">
                  <motion.h3
                    className="text-sm font-semibold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    Modular & Prefabrication Approvals
                  </motion.h3>
                  <motion.div
                    className="space-y-2 text-xs text-gray-700"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.3,
                        },
                      },
                    }}
                  >
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        viewport={{ once: true }}
                      >
                        While traditional codes pose challenges, progress is evident (e.g., Dubai's first modular
                        construction license). Early engagement with authorities and clear documentation of code
                        compliance are key.
                      </motion.span>
                    </motion.p>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        viewport={{ once: true }}
                      >
                        Dubai aims for 25% of buildings to use 3D printing by 2030, signaling regulatory adaptation.
                      </motion.span>
                    </motion.p>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={1200}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 border-2 border-gray-300 bg-white/80 backdrop-blur-sm h-full">
                  <motion.h3
                    className="text-sm font-semibold mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    Sustainability and ESG Compliance
                  </motion.h3>
                  <motion.div
                    className="space-y-2 text-xs text-gray-700"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.5,
                        },
                      },
                    }}
                  >
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        viewport={{ once: true }}
                      >
                        Mandatory programs like Estidama (Abu Dhabi) and Al Sa'fat (Dubai) set minimum standards. The
                        UAE's Net Zero 2050 initiative drives stricter performance requirements.
                      </motion.span>
                    </motion.p>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        viewport={{ once: true }}
                      >
                        Compliance typically adds 2-5% to construction costs but delivers 10-15% operational savings.
                      </motion.span>
                    </motion.p>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatedElement>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        id="impact"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SplitTextAnimation
              text="The Imperative to Adapt: Risks vs. Gains"
              className="text-2xl md:text-3xl font-bold mb-3"
              delay={0}
            />
            <AnimatedElement delay={400}>
              <motion.p
                className="text-sm md:text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  The current market dynamics present a clear choice: adapt through innovation or risk obsolescence.
                </motion.span>
              </motion.p>
            </AnimatedElement>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            <AnimatedElement delay={600}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50, rotateY: -10 },
                  visible: { opacity: 1, x: 0, rotateY: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-white p-4 rounded-lg border-2 border-red-300"
                  initial={{ borderColor: "#fca5a5" }}
                  whileHover={{ borderColor: "#ef4444" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-lg font-semibold mb-3 text-center uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Risks of Inaction
                  </motion.h3>
                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.9,
                        },
                      },
                    }}
                  >
                    <ImpactItem label="Delivery Speed" value="20-50% Slower" negative />
                    <ImpactItem label="Margin Erosion" value="3-5% Loss" negative />
                    <ImpactItem label="Compliance Risk" value="30% by 2030" negative />
                    <ImpactItem label="Market Position" value="Declining" negative />
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatedElement>

            <AnimatedElement delay={900}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 50, rotateY: 10 },
                  visible: { opacity: 1, x: 0, rotateY: 0 },
                }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-white p-4 rounded-lg border-2 border-green-300"
                  initial={{ borderColor: "#86efac" }}
                  whileHover={{ borderColor: "#22c55e" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3
                    className="text-lg font-semibold mb-3 text-center uppercase"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    Gains from I5 Model
                  </motion.h3>
                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 1.2,
                        },
                      },
                    }}
                  >
                    <ImpactItem label="Schedule Compression" value="20-50% Faster" />
                    <ImpactItem label="Cost Savings" value="15-20% Lower" />
                    <ImpactItem label="Quality Improvement" value="60-80% Fewer Defects" />
                    <ImpactItem label="Brand Differentiation" value="Market Leader" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatedElement>
          </motion.div>

          <AnimatedElement delay={1200}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-4 border-2 border-gray-300 bg-gray-100 text-center">
                <motion.p
                  className="text-sm font-semibold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    viewport={{ once: true }}
                  >
                    The I5 Model, with its focus on productization, integrated delivery, and technology enablement, is
                    designed to help organizations navigate these market challenges effectively and capitalize on the
                    opportunities presented by this evolving landscape.
                  </motion.span>
                </motion.p>
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="font-semibold text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    viewport={{ once: true }}
                  >
                    For detailed statistics, regional examples, and strategic implementation recommendations, refer to
                    Chapter 2 of the I5 Model Handbook 2025.
                  </motion.p>
                  <motion.p
                    className="text-xs text-gray-600 italic mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    viewport={{ once: true }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                  >
                    (This content is derived from I5 HB: Chapter 2)
                  </motion.p>
                </motion.div>
              </Card>
            </motion.div>
          </AnimatedElement>
        </div>
      </motion.section>
    </div>
  )
}

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
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: (delay + index * 100) / 1000,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  )
}

function DriverCard({
  icon,
  title,
  metric,
  description,
  detail,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  metric: string
  description: string
  detail: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, { once: true, amount: 0.3 })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: "easeOut",
      }}
      whileHover={{ y: -5, scale: 1.03, rotateY: 5 }}
      className="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-200 hover:border-gray-400"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="bg-gray-200 p-2 rounded-full mb-2"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: delay / 1000 }}
          >
            {icon}
          </motion.div>
        </motion.div>
        <motion.h3
          className="font-semibold text-sm mb-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: (delay + 200) / 1000 }}
        >
          {title}
        </motion.h3>
        <motion.div
          className="text-xl font-bold my-1"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: (delay + 400) / 1000, type: "spring", stiffness: 200 }}
          animate={{
            scale: [1, 1.1, 1],
            color: ["#000", "#374151", "#000"],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        >
          {metric}
        </motion.div>
        <motion.p
          className="text-xs text-gray-600 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: (delay + 600) / 1000 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          {isExpanded && (
            <motion.p
              className="text-xs text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {detail}
            </motion.p>
          )}
        </motion.div>
        <motion.div
          className="text-xs text-gray-400 mt-1"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {isExpanded ? "Click to collapse" : "Click for details"}
        </motion.div>
      </div>
    </motion.div>
  )
}

function ModelItem({ text, traditional = false }: { text: string; traditional?: boolean }) {
  return (
    <motion.div
      className="flex items-start gap-2"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      whileHover={{ x: 5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="mt-0.5 text-sm"
        whileHover={{ scale: 1.3, rotate: traditional ? -180 : 360 }}
        transition={{ duration: 0.3 }}
      >
        {traditional ? "×" : "✓"}
      </motion.span>
      <motion.span
        className="text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}

function RegionCard({
  name,
  stat,
  detail,
  delay = 0,
}: {
  name: string
  stat: string
  detail: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-gray-100 border-2 border-gray-400 rounded-lg p-3 text-center"
    >
      <motion.h3
        className="font-semibold text-sm mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: (delay + 200) / 1000 }}
      >
        {name}
      </motion.h3>
      <motion.div
        className="text-xl font-bold my-2"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: (delay + 400) / 1000, type: "spring", stiffness: 200 }}
        animate={{
          scale: [1, 1.1, 1],
          color: ["#000", "#059669", "#000"],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        {stat}
      </motion.div>
      <motion.p
        className="text-xs text-gray-600"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: (delay + 600) / 1000 }}
      >
        {detail}
      </motion.p>
    </motion.div>
  )
}

function ImpactItem({
  label,
  value,
  negative = false,
}: {
  label: string
  value: string
  negative?: boolean
}) {
  return (
    <motion.div
      className={`flex justify-between p-2 rounded-lg text-xs ${
        negative ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"
      }`}
      variants={{
        hidden: { opacity: 0, x: negative ? -20 : 20, scale: 0.9 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      whileHover={{
        scale: 1.02,
        backgroundColor: negative ? "#fef2f2" : "#f0fdf4",
        borderColor: negative ? "#fca5a5" : "#86efac",
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.span>
      <motion.span
        className="font-semibold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        animate={{
          color: negative ? ["#dc2626", "#ef4444", "#dc2626"] : ["#059669", "#10b981", "#059669"],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        {value}
      </motion.span>
    </motion.div>
  )
}

function AnimatedElement({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{
        duration: 1,
        delay: delay / 1000,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
