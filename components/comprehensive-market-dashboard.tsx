"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BarChart3, Clock, DollarSign, HardHat, Leaf, Truck, ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "../hooks/use-in-view"

export default function ComprehensiveMarketDashboard() {
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isNavOpen, setIsNavOpen] = useState(false)

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "drivers", "models", "landscape", "regulatory", "impact"]
      const scrollPosition = window.scrollY + 200

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsNavOpen(false)
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold tracking-tight">I5 MARKET CONTEXT</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "drivers", label: "DRIVERS" },
                { id: "models", label: "MODELS" },
                { id: "landscape", label: "LANDSCAPE" },
                { id: "regulatory", label: "REGULATORY" },
                { id: "impact", label: "IMPACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 hover:text-black",
                    activeSection === item.id
                      ? "text-black border-b-2 border-black pb-1"
                      : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {[
                  { id: "overview", label: "OVERVIEW" },
                  { id: "drivers", label: "DRIVERS" },
                  { id: "models", label: "MODELS" },
                  { id: "landscape", label: "LANDSCAPE" },
                  { id: "regulatory", label: "REGULATORY" },
                  { id: "impact", label: "IMPACT" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left text-sm font-medium transition-all duration-200",
                      activeSection === item.id ? "text-black" : "text-gray-500 hover:text-gray-800",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gray-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gray-100 -z-10" />

      {/* Header section with overlapping elements */}
      <header id="overview" className="relative pt-32 px-8 md:px-16 lg:px-24 mb-32">
        <div
          className="absolute top-24 right-8 md:right-16 w-32 h-32 md:w-48 md:h-48 bg-black rounded-full opacity-5 -z-5"
          style={{
            transform: `translate(${(cursorPosition.x / (typeof window !== "undefined" ? window.innerWidth : 1000) - 0.5) * -20}px, ${(cursorPosition.y / (typeof window !== "undefined" ? window.innerHeight : 1000) - 0.5) * -20}px)`,
          }}
        />
        <div
          className="absolute top-40 left-1/4 w-24 h-24 md:w-40 md:h-40 bg-black rounded-full opacity-5 -z-5"
          style={{
            transform: `translate(${(cursorPosition.x / (typeof window !== "undefined" ? window.innerWidth : 1000) - 0.5) * 20}px, ${(cursorPosition.y / (typeof window !== "undefined" ? window.innerHeight : 1000) - 0.5) * 20}px)`,
          }}
        />

        <AnimatedElement delay={0}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight">
            MARKET CONTEXT:
            <span className="relative block mt-2">
              <span className="relative z-10">NAVIGATING</span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-gray-200 -z-5" />
            </span>
            A DYNAMIC REAL ESTATE LANDSCAPE
          </h1>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-4 mt-16">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <AnimatedElement delay={100}>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The global real estate and construction sectors are undergoing a period of intense change, driven by a
                convergence of economic, technological, and societal pressures. Understanding this dynamic market
                context is crucial for recognizing the opportunities that innovative delivery models like I5 can unlock{" "}
                <span className="text-sm text-gray-500">(I5 HB: Chap 2 Intro)</span>.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span>EXPLORE THE LANDSCAPE</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-5 lg:col-start-8 mt-8 md:mt-0">
            <AnimatedElement delay={300}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 rounded-md -z-10" />
                <Card className="p-6 relative z-10 border-2 border-gray-300">
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">DELIVERY TIMELINE COMPARISON</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>TRADITIONAL APPROACH</span>
                        <span>100% TIMELINE</span>
                      </div>
                      <Progress value={100} className="h-6 bg-gray-200" indicatorClassName="bg-gray-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>I5 MODEL APPROACH</span>
                        <span>50-80% TIMELINE</span>
                      </div>
                      <Progress value={65} className="h-6 bg-gray-200" indicatorClassName="bg-black" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    20-50% schedule compression with I5 Model implementation
                  </p>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </header>

      {/* Key Drivers section */}
      <section id="drivers" className="relative px-8 md:px-16 lg:px-24 mb-32">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl uppercase tracking-tight">
            THE EVOLVING TERRAIN OF
            <span className="relative ml-2">
              <span className="relative z-10">REAL ESTATE</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
            DEVELOPMENT
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <h3 className="text-2xl font-bold mb-8 mt-16 uppercase tracking-wide">
            KEY DRIVERS FORCING INDUSTRY TRANSFORMATION:
          </h3>
        </AnimatedElement>

        <AnimatedElement delay={200}>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Developers worldwide, particularly in active regions like the UAE and GCC, face mounting challenges that
            demand new approaches:
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={300}>
              <DriverCard
                icon={<DollarSign className="h-8 w-8" />}
                title="ESCALATING COSTS"
                metric="15-25%"
                description="Material & labor cost increases over past 2 years"
                detail="Significant surges in construction material and labor costs (e.g., 15-25% increases in many markets over the past two years) are putting unprecedented pressure on project margins (I5 HB: Sec 2.1.1)."
                className="transform translate-y-0"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={400}>
              <DriverCard
                icon={<Clock className="h-8 w-8" />}
                title="COMPRESSED TIMELINES"
                metric="15%"
                description="NPV increase with 20% faster delivery"
                detail="Intense market demand requires faster delivery of increasingly complex projects, making speed-to-market a critical competitive differentiator (I5 HB: Sec 2.1.1). Reducing time-to-market by 20% can increase project NPV by up to 15% (I5 HB: Sec 2.1.1)."
                className="transform translate-y-8 md:translate-y-12"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={500}>
              <DriverCard
                icon={<BarChart3 className="h-8 w-8" />}
                title="EXECUTION CHALLENGES"
                metric="80%"
                description="Average budget overrun on large projects"
                detail="Large construction projects globally continue to underperform, averaging 20% longer schedules and 80% budget overruns. The industry has seen virtually no productivity growth in decades (I5 HB: Sec 2.1.1)."
                className="transform translate-y-0"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={600}>
              <DriverCard
                icon={<HardHat className="h-8 w-8" />}
                title="LABOR SHORTAGES"
                metric="41%"
                description="US construction workforce retiring by 2031"
                detail="Persistent shortages of skilled labor limit capacity and drive up costs, a problem expected to intensify with workforce demographics (e.g., 41% of the current U.S. construction workforce expected to retire by 2031) (I5 HB: Sec 2.1.1)."
                className="transform translate-y-0 md:-translate-y-8"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={700}>
              <DriverCard
                icon={<Truck className="h-8 w-8" />}
                title="SUPPLY CHAIN ISSUES"
                metric="MAJORITY"
                description="Of major projects affected by disruptions"
                detail="Recent global disruptions have exposed the fragility of traditional construction supply chains, leading to material shortages and price volatility affecting a majority of major projects (I5 HB: Sec 2.1.1)."
                className="transform translate-y-8 md:translate-y-4"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={800}>
              <DriverCard
                icon={<Leaf className="h-8 w-8" />}
                title="SUSTAINABILITY MANDATES"
                metric="ESG"
                description="Growing regulations & market expectations"
                detail="Stricter environmental regulations and growing market expectations for 'greener,' healthier, and more socially responsible buildings are reshaping development priorities and investment criteria (I5 HB: Sec 2.1.1, Sec 2.2.4, Sec 2.3.3)."
                className="transform translate-y-0 md:-translate-y-8"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Business Models section */}
      <section id="models" className="relative px-8 md:px-16 lg:px-24 mb-32">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gray-100 -z-10" />

        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl uppercase tracking-tight">
            EMERGING BUSINESS MODELS
            <span className="relative ml-2">
              <span className="relative z-10">IN RESPONSE</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Innovative developers are adopting new strategies to address these pressures:
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <AnimatedElement delay={200}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-200 -z-10" />
                <div className="bg-gray-900 text-white p-8 rounded-lg relative z-10 border-2 border-black">
                  <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-wide">TRADITIONAL MODEL</h3>
                  <ul className="space-y-4">
                    <ModelItem text="Bespoke, one-off projects" traditional />
                    <ModelItem text="Sequential design & build" traditional />
                    <ModelItem text="Adversarial contracts" traditional />
                    <ModelItem text="Limited technology use" traditional />
                    <ModelItem text="Site-based construction" traditional />
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-16 lg:mt-32">
            <AnimatedElement delay={300}>
              <div className="relative">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black opacity-10 -z-10" />
                <div className="bg-white p-8 rounded-lg border-2 border-black relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-wide">INNOVATIVE APPROACHES</h3>
                  <ul className="space-y-4">
                    <ModelItem text="Productized solutions" />
                    <ModelItem text="Integrated delivery (IPD)" />
                    <ModelItem text="Collaborative contracts" />
                    <ModelItem text="Digital transformation" />
                    <ModelItem text="Manufacturing mindset" />
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>

        <div className="mt-24 space-y-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <AnimatedElement delay={400}>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-wide">PRODUCTIZATION APPROACHES:</h3>
                    <p className="text-gray-700">A shift from bespoke projects to manufactured products using:</p>
                    <ul className="ml-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white text-xs px-1 rounded mt-1">•</span>
                        <span>
                          <strong>Modular Construction:</strong> Offering potential schedule reductions of 20-50% and
                          cost savings around 20% <span className="text-sm text-gray-500">(I5 HB: Sec 2.1.2)</span>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white text-xs px-1 rounded mt-1">•</span>
                        <span>
                          <strong>Design for Manufacturing and Assembly (DfMA):</strong> Can reduce labor needs by up to
                          30% <span className="text-sm text-gray-500">(I5 HB: Sec 2.1.2)</span>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white text-xs px-1 rounded mt-1">•</span>
                        <span>
                          <strong>Platform Strategies:</strong> Standardized typologies can cut design costs by up to
                          25% <span className="text-sm text-gray-500">(I5 HB: Sec 2.1.2)</span>.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-wide">COLLABORATIVE CONTRACTING:</h3>
                    <p className="text-gray-700">Moving away from adversarial models towards:</p>
                    <ul className="ml-6 space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white text-xs px-1 rounded mt-1">•</span>
                        <span>
                          <strong>Integrated Project Delivery (IPD):</strong> Demonstrating that 85% of such projects
                          finish at or under budget <span className="text-sm text-gray-500">(I5 HB: Sec 2.1.2)</span>.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-black text-white text-xs px-1 rounded mt-1">•</span>
                        <span>
                          <strong>Target Value Design & Alliancing:</strong> Further enhancing cost control and
                          collaboration <span className="text-sm text-gray-500">(I5 HB: Sec 2.1.2)</span>.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-wide">ADVANCED TECHNOLOGY ADOPTION:</h3>
                    <p className="text-gray-700">
                      Leveraging tools like BIM (can reduce design errors by up to 40%), generative design, construction
                      automation, and digital twins to boost productivity and performance{" "}
                      <span className="text-sm text-gray-500">(I5 HB: Sec 2.1.3)</span>.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <AnimatedElement delay={500}>
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 -z-10" />
                  <Card className="p-6 relative z-10 border-2 border-gray-300">
                    <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">BIM IMPACT</h3>
                    <p className="mb-4 text-sm">Design error reduction capability:</p>
                    <div className="relative h-24 w-full flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-full border-8 border-gray-200"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="h-24 w-24 rounded-full border-8 border-black"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                            transform: "rotate(144deg)",
                          }}
                        ></div>
                      </div>
                      <span className="text-3xl font-bold z-10">40%</span>
                    </div>
                  </Card>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape section */}
      <section id="landscape" className="relative px-8 md:px-16 lg:px-24 mb-32">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl uppercase tracking-tight">
            COMPETITIVE LANDSCAPE &
            <span className="relative ml-2">
              <span className="relative z-10">MARKET SHIFTS</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            The competitive environment is intensifying, with both established players and new entrants adopting
            innovative delivery methods.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <AnimatedElement delay={200}>
              <RegionCard
                name="DUBAI"
                stat="45%"
                detail="Major pipeline controlled by Emaar, Nakheel, Dubai Holding"
                fullDetail="Dominant developers in Dubai (e.g., Emaar, Nakheel, Dubai Holding controlling ~45% of major development pipeline) are increasingly pressured to innovate (I5 HB: Sec 2.2.1)."
                className="h-full"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:translate-y-16">
            <AnimatedElement delay={300}>
              <RegionCard
                name="ABU DHABI"
                stat="35%"
                detail="Development controlled by Aldar"
                fullDetail="Abu Dhabi (e.g., Aldar controlling ~35%) are increasingly pressured to innovate (I5 HB: Sec 2.2.1)."
                className="h-full"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <AnimatedElement delay={400}>
              <RegionCard
                name="SAUDI ARABIA"
                stat="$1T+"
                detail="Planned development (NEOM, ROSHN)"
                fullDetail="Saudi Arabia's giga-projects (e.g., NEOM, ROSHN) are reshaping regional demand with over $1 trillion in planned development (I5 HB: Sec 2.2.1)."
                className="h-full"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:translate-y-16">
            <AnimatedElement delay={500}>
              <RegionCard
                name="SINGAPORE"
                stat="35%+"
                detail="PPVC adoption rate"
                fullDetail="Mandates for Prefabricated Prefinished Volumetric Construction (PPVC) are driving adoption above 35% (I5 HB: Sec 2.2.2)."
                className="h-full"
              />
            </AnimatedElement>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <AnimatedElement delay={600}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gray-200 -z-10" />
                <Card className="p-6 relative z-10 border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">INTERNATIONAL BENCHMARKS</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                      <h4 className="font-bold text-sm uppercase tracking-wide">UK</h4>
                      <p className="text-sm">
                        Developers like Berkeley Homes are investing in modular factories{" "}
                        <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.2)</span>.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                      <h4 className="font-bold text-sm uppercase tracking-wide">JAPAN</h4>
                      <p className="text-sm">
                        Sekisui House has industrialized homebuilding, reducing waste by 60%{" "}
                        <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.3)</span>.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                      <h4 className="font-bold text-sm uppercase tracking-wide">SINGAPORE</h4>
                      <p className="text-sm">
                        Mandates for Prefabricated Prefinished Volumetric Construction (PPVC) are driving adoption above
                        35% <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.2)</span>.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <AnimatedElement delay={700}>
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black opacity-10 -z-10" />
                <Card className="p-6 relative z-10 border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
                    EVOLVING INVESTOR & END-USER EXPECTATIONS
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white text-xs px-1 rounded mt-1 flex-shrink-0">•</span>
                      <span className="text-sm">
                        Demand for smart, sustainable, flexible, and healthy spaces is rising. 72% of commercial tenants
                        now prioritize smart building features{" "}
                        <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.4)</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white text-xs px-1 rounded mt-1 flex-shrink-0">•</span>
                      <span className="text-sm">
                        Corporate ESG goals are driving preference for green-certified buildings{" "}
                        <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.4)</span>. Dubai ranks 14th globally for
                        green buildings <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.4)</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white text-xs px-1 rounded mt-1 flex-shrink-0">•</span>
                      <span className="text-sm">
                        Institutional funding and REITs are changing capitalization models, favoring efficient and
                        predictable delivery <span className="text-xs text-gray-500">(I5 HB: Sec 2.2.4)</span>.
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Regulatory section */}
      <section id="regulatory" className="relative px-8 md:px-16 lg:px-24 mb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50 transform -skew-y-1 -z-10" />

        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl uppercase tracking-tight pt-16">
            NAVIGATING REGULATORY &
            <span className="relative ml-2">
              <span className="relative z-10">COMPLIANCE</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
            CONSIDERATIONS
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            Successfully developing real estate requires navigating a complex web of regulations, which are also
            evolving to accommodate modern methods.
          </p>
        </AnimatedElement>

        <div className="mb-16">
          <AnimatedElement delay={200}>
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">REGULATORY EVOLUTION FRAMEWORK</h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10" />
              <div className="flex flex-wrap justify-between items-center gap-4">
                {[
                  { label: "TRADITIONAL BUILDING CODES", desc: "Legacy frameworks" },
                  { label: "E-PERMITTING SYSTEMS", desc: "Digital transformation" },
                  { label: "MODULAR APPROVALS", desc: "Modern methods" },
                  { label: "SUSTAINABILITY MANDATES", desc: "ESG requirements" },
                  { label: "NET ZERO 2050", desc: "Climate targets" },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-0 left-1/2 h-8 w-0.5 bg-gray-300 -translate-x-1/2 -translate-y-full" />
                    <div className="bg-white border-2 border-gray-600 rounded-lg p-4 text-center w-48 relative z-10">
                      <p className="text-sm font-bold uppercase tracking-wide">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                    {index < 4 && <ChevronRight className="absolute top-1/2 -right-6 text-gray-400 -translate-y-1/2" />}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <AnimatedElement delay={300}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gray-200 -z-10" />
                <Card className="p-6 relative z-10 border-2 border-gray-300 h-full">
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">UAE REGULATORY OVERVIEW</h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      Each emirate has specific authorities (e.g., Dubai Municipality, Abu Dhabi's DMT). Unified
                      building codes (like Dubai's) and e-permitting systems aim to streamline approvals, potentially
                      reducing processing times by 30-40%{" "}
                      <span className="text-xs text-gray-500">(I5 HB: Sec 2.3.1)</span>.
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <AnimatedElement delay={400}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-200 -z-10" />
                <Card className="p-6 relative z-10 border-2 border-gray-300 h-full">
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">MODULAR & PREFABRICATION APPROVALS</h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      While traditional codes pose challenges, progress is evident (e.g., Dubai's first modular
                      construction license). Early engagement with authorities and clear documentation of code
                      compliance are key <span className="text-xs text-gray-500">(I5 HB: Sec 2.3.2)</span>.
                    </p>
                    <p>
                      Dubai aims for 25% of buildings to use 3D printing by 2030, signaling regulatory adaptation{" "}
                      <span className="text-xs text-gray-500">(I5 HB: Sec 2.3.2)</span>.
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <AnimatedElement delay={500}>
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gray-200 -z-10" />
                <Card className="p-6 relative z-10 border-2 border-gray-300 h-full">
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">SUSTAINABILITY AND ESG COMPLIANCE</h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      Mandatory programs like Estidama (Abu Dhabi) and Al Sa'fat (Dubai) set minimum standards. The
                      UAE's Net Zero 2050 initiative drives stricter performance requirements{" "}
                      <span className="text-xs text-gray-500">(I5 HB: Sec 2.3.3)</span>.
                    </p>
                    <p>
                      Compliance typically adds 2-5% to construction costs but delivers 10-15% operational savings{" "}
                      <span className="text-xs text-gray-500">(I5 HB: Sec 2.3.1)</span>.
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Impact Analysis section */}
      <section id="impact" className="relative px-8 md:px-16 lg:px-24 mb-32">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-2xl uppercase tracking-tight">
            THE IMPERATIVE TO
            <span className="relative ml-2">
              <span className="relative z-10">ADAPT:</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
            RISKS VS. GAINS
          </h2>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            The current market dynamics present a clear choice: adapt through innovation or risk obsolescence.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <AnimatedElement delay={200}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-100 -z-10" />
                <div className="bg-white p-8 rounded-lg border-2 border-red-300 relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-wide">RISKS OF INACTION</h3>
                  <div className="space-y-4 mb-6">
                    <ImpactItem label="DELIVERY SPEED" value="20-50% SLOWER" negative />
                    <ImpactItem label="MARGIN EROSION" value="3-5% LOSS" negative />
                    <ImpactItem label="COMPLIANCE RISK" value="30% BY 2030" negative />
                    <ImpactItem label="MARKET POSITION" value="DECLINING" negative />
                  </div>
                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Competitive Disadvantage:</strong> Competitors delivering 20-50% faster with
                      industrialized methods <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.1)</span>.
                    </p>
                    <p>
                      <strong>Margin Erosion:</strong> Traditional methods face 3-5% margin erosion compared to
                      industrialized approaches <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.1)</span>.
                    </p>
                    <p>
                      <strong>Sustainability Non-Compliance:</strong> Potential failure to meet tightening regulations,
                      with up to 30% of conventional building approaches potentially non-compliant by 2030 without
                      significant modification <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.1)</span>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <AnimatedElement delay={300}>
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-100 -z-10" />
                <div className="bg-white p-8 rounded-lg border-2 border-green-300 relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-wide">GAINS FROM I5 MODEL</h3>
                  <div className="space-y-4 mb-6">
                    <ImpactItem label="SCHEDULE COMPRESSION" value="20-50% FASTER" />
                    <ImpactItem label="COST SAVINGS" value="15-20% LOWER" />
                    <ImpactItem label="QUALITY IMPROVEMENT" value="60-80% FEWER DEFECTS" />
                    <ImpactItem label="BRAND DIFFERENTIATION" value="MARKET LEADER" />
                  </div>
                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Significant Schedule Compression:</strong> 20-50% reduction in project timelines{" "}
                      <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.2)</span>.
                    </p>
                    <p>
                      <strong>Substantial Cost Savings:</strong> 15-20% cost reductions achievable with mature
                      productized approaches <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.2)</span>.
                    </p>
                    <p>
                      <strong>Improved Quality & Predictability:</strong> Defect rates in factory-produced components
                      can be 60-80% lower than site-built equivalents{" "}
                      <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.2)</span>.
                    </p>
                    <p>
                      <strong>Market Differentiation:</strong> Early adopters can gain significant margin advantages and
                      enhance brand reputation <span className="text-xs text-gray-500">(I5 HB: Sec 2.4.2)</span>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative px-8 md:px-16 lg:px-24 pb-32">
        <div className="absolute -top-32 right-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-50 -z-10" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-gray-200 rounded-full opacity-50 -z-10" />

        <div className="relative max-w-4xl mx-auto">
          <AnimatedElement>
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-gray-200 -z-10" />
            <Card className="p-8 relative z-10 border-2 border-gray-300">
              <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wide">THE I5 MODEL ADVANTAGE</h2>
              <p className="text-center text-lg mb-8">
                The I5 Model, with its focus on productization, integrated delivery, and technology enablement, is
                designed to help organizations navigate these market challenges effectively and capitalize on the
                opportunities presented by this evolving landscape.
              </p>

              <div className="text-center">
                <p className="font-bold text-sm uppercase tracking-wide mb-2">
                  For detailed statistics, regional examples, and strategic implementation recommendations, refer to
                  Chapter 2 of the I5 Model Handbook 2025.
                </p>
                <p className="text-xs text-gray-600 italic">(This content is derived from I5 HB: Chapter 2) [^1]</p>
              </div>
            </Card>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

// Enhanced Driver Card component
function DriverCard({
  icon,
  title,
  metric,
  description,
  detail,
  className,
}: {
  icon: React.ReactNode
  title: string
  metric: string
  description: string
  detail: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border-2 border-gray-300 rounded-lg p-6 transition-all duration-700 cursor-pointer hover:border-black",
        isInView ? "opacity-100" : "opacity-0 translate-y-8",
        className,
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-3 rounded-full mb-4">{icon}</div>
        <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">{title}</h3>
        <div className="text-3xl font-bold my-2">{metric}</div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {isExpanded && <p className="text-xs text-gray-700 leading-relaxed">{detail}</p>}
        <div className="text-xs text-gray-400 mt-2">{isExpanded ? "CLICK TO COLLAPSE" : "CLICK FOR DETAILS"}</div>
      </div>
    </div>
  )
}

// Component for model items
function ModelItem({ text, traditional = false }: { text: string; traditional?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 text-lg font-bold">{traditional ? "×" : "✓"}</span>
      <span className="text-sm uppercase tracking-wide">{text}</span>
    </div>
  )
}

// Enhanced Region Card component
function RegionCard({
  name,
  stat,
  detail,
  fullDetail,
  className,
}: {
  name: string
  stat: string
  detail: string
  fullDetail: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border-2 border-gray-400 rounded-lg p-6 text-center transition-all duration-700 cursor-pointer hover:border-black",
        isInView ? "opacity-100" : "opacity-0 translate-y-8",
        className,
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">{name}</h3>
      <div className="text-3xl font-bold my-3">{stat}</div>
      <p className="text-sm text-gray-600 mb-4">{detail}</p>
      {isExpanded && <p className="text-xs text-gray-700 leading-relaxed">{fullDetail}</p>}
      <div className="text-xs text-gray-400 mt-2">{isExpanded ? "CLICK TO COLLAPSE" : "CLICK FOR DETAILS"}</div>
    </div>
  )
}

// Component for impact items
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
    <div
      className={`flex justify-between p-3 rounded-lg text-sm font-medium uppercase tracking-wide ${
        negative ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"
      }`}
    >
      <span>{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

// Animated element component
function AnimatedElement({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        transform: isInView ? "none" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
