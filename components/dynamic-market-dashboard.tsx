"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Clock, DollarSign, HardHat, Leaf, Truck, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "../hooks/use-in-view"

export default function DynamicMarketDashboard() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gray-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gray-100 -z-10" />

      {/* Header section with overlapping elements */}
      <header className="relative pt-16 px-8 md:px-16 lg:px-24 mb-32">
        <div
          className="absolute top-24 right-8 md:right-16 w-32 h-32 md:w-48 md:h-48 bg-black rounded-full opacity-5 -z-5"
          style={{
            transform: `translate(${(cursorPosition.x / window.innerWidth - 0.5) * -20}px, ${(cursorPosition.y / window.innerHeight - 0.5) * -20}px)`,
          }}
        />
        <div
          className="absolute top-40 left-1/4 w-24 h-24 md:w-40 md:h-40 bg-black rounded-full opacity-5 -z-5"
          style={{
            transform: `translate(${(cursorPosition.x / window.innerWidth - 0.5) * 20}px, ${(cursorPosition.y / window.innerHeight - 0.5) * 20}px)`,
          }}
        />

        <AnimatedElement delay={0}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
            Market Context:
            <span className="relative">
              <span className="relative z-10">Navigating</span>
              <span className="absolute bottom-2 left-0 h-3 w-full bg-gray-200 -z-5" />
            </span>{" "}
            a Dynamic Real Estate Landscape
          </h1>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 md:col-span-7 lg:col-span-5">
            <AnimatedElement delay={100}>
              <p className="text-lg text-gray-700 mb-6">
                The global real estate and construction sectors are undergoing intense change, driven by economic,
                technological, and societal pressures.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span>Explore the landscape</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-6 lg:col-start-7 mt-8 md:mt-0">
            <AnimatedElement delay={300}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 rounded-md -z-10" />
                <Card className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-4">Delivery Timeline Comparison</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Traditional</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-6 bg-gray-200" indicatorClassName="bg-gray-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">I5 Model</span>
                        <span className="font-medium">50-80%</span>
                      </div>
                      <Progress value={65} className="h-6 bg-gray-200" indicatorClassName="bg-black" />
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </header>

      {/* Key Drivers section with overlapping cards */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32">
        <AnimatedElement>
          <h2 className="text-3xl font-bold mb-12 max-w-xl">
            Key Drivers
            <span className="relative ml-2">
              <span className="relative z-10">Forcing</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
            Industry Transformation
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={100}>
              <DriverCard
                icon={<DollarSign className="h-8 w-8" />}
                title="Escalating Costs"
                metric="15-25%"
                description="Material & labor cost increases over past 2 years"
                className="transform translate-y-0"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={200}>
              <DriverCard
                icon={<Clock className="h-8 w-8" />}
                title="Compressed Timelines"
                metric="15%"
                description="NPV increase with 20% faster delivery"
                className="transform translate-y-8 md:translate-y-12"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={300}>
              <DriverCard
                icon={<BarChart3 className="h-8 w-8" />}
                title="Execution Challenges"
                metric="80%"
                description="Average budget overrun on large projects"
                className="transform translate-y-0"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={400}>
              <DriverCard
                icon={<HardHat className="h-8 w-8" />}
                title="Labor Shortages"
                metric="41%"
                description="US construction workforce retiring by 2031"
                className="transform translate-y-0 md:-translate-y-8"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={500}>
              <DriverCard
                icon={<Truck className="h-8 w-8" />}
                title="Supply Chain Issues"
                metric="Majority"
                description="Of major projects affected by disruptions"
                className="transform translate-y-8 md:translate-y-4"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <AnimatedElement delay={600}>
              <DriverCard
                icon={<Leaf className="h-8 w-8" />}
                title="Sustainability Mandates"
                metric="ESG"
                description="Growing regulations & market expectations"
                className="transform translate-y-0 md:-translate-y-8"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Business Models section with asymmetrical layout */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gray-100 -z-10" />

        <AnimatedElement>
          <h2 className="text-3xl font-bold mb-12 max-w-xl">
            Emerging Business Models
            <span className="relative ml-2">
              <span className="relative z-10">in Response</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <AnimatedElement delay={100}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-200 -z-10" />
                <div className="bg-gray-900 text-white p-8 rounded-lg relative z-10">
                  <h3 className="text-xl font-semibold mb-6 text-center uppercase">Traditional Model</h3>
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
            <AnimatedElement delay={200}>
              <div className="relative">
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black opacity-10 -z-10" />
                <div className="bg-white p-8 rounded-lg border-2 border-black relative z-10">
                  <h3 className="text-xl font-semibold mb-6 text-center uppercase">Innovative Approaches</h3>
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

        <div className="mt-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <AnimatedElement delay={300}>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Productization Approaches</h3>
                  <ul className="ml-6 space-y-3 list-disc">
                    <li>
                      <strong>Modular Construction:</strong> 20-50% schedule reduction, ~20% cost savings
                    </li>
                    <li>
                      <strong>Design for Manufacturing (DfMA):</strong> Up to 30% labor reduction
                    </li>
                    <li>
                      <strong>Platform Strategies:</strong> Up to 25% design cost reduction
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Collaborative Contracting</h3>
                  <ul className="ml-6 space-y-3 list-disc">
                    <li>
                      <strong>Integrated Project Delivery (IPD):</strong> 85% of projects finish at/under budget
                    </li>
                    <li>
                      <strong>Target Value Design & Alliancing:</strong> Enhanced cost control
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-1 lg:row-start-1 mt-8 lg:mt-32">
            <AnimatedElement delay={400}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 -z-10" />
                <Card className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold mb-4">Technology Impact</h3>
                  <p className="mb-4">BIM can reduce design errors by up to:</p>
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
      </section>

      {/* Regional Markets section with masonry-style layout */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32">
        <AnimatedElement>
          <h2 className="text-3xl font-bold mb-12 max-w-xl">
            Competitive Landscape &
            <span className="relative ml-2">
              <span className="relative z-10">Market Shifts</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <AnimatedElement delay={100}>
              <RegionCard
                name="DUBAI"
                stat="45%"
                detail="Major pipeline controlled by Emaar, Nakheel, Dubai Holding"
                className="h-full"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:translate-y-16">
            <AnimatedElement delay={200}>
              <RegionCard name="ABU DHABI" stat="35%" detail="Development controlled by Aldar" className="h-full" />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <AnimatedElement delay={300}>
              <RegionCard
                name="SAUDI ARABIA"
                stat="$1T+"
                detail="Planned development (NEOM, ROSHN)"
                className="h-full"
              />
            </AnimatedElement>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:translate-y-16">
            <AnimatedElement delay={400}>
              <RegionCard name="SINGAPORE" stat="35%+" detail="PPVC adoption rate" className="h-full" />
            </AnimatedElement>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <AnimatedElement delay={500}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gray-200 -z-10" />
                <Card className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-4">International Benchmarks</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold">UK</h4>
                      <p>Berkeley Homes investing in modular factories</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold">Japan</h4>
                      <p>Sekisui House industrialized homebuilding, reducing waste by 60%</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold">Singapore</h4>
                      <p>Mandates for PPVC driving adoption above 35%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-16 lg:mt-32">
            <AnimatedElement delay={600}>
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black opacity-10 -z-10" />
                <Card className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-4">Evolving Expectations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1 flex-shrink-0">•</span>
                      <span>72% of commercial tenants prioritize smart building features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1 flex-shrink-0">•</span>
                      <span>Corporate ESG goals driving preference for green-certified buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1 flex-shrink-0">•</span>
                      <span>Dubai ranks 14th globally for green buildings</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Impact Analysis section with diagonal layout */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50 transform -skew-y-3 -z-10" />

        <AnimatedElement>
          <h2 className="text-3xl font-bold mb-16 max-w-xl pt-16">
            The Imperative to
            <span className="relative ml-2">
              <span className="relative z-10">Adapt:</span>
              <span className="absolute bottom-1 left-0 h-2 w-full bg-gray-200 -z-5" />
            </span>
            Risks vs. Gains
          </h2>
        </AnimatedElement>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <AnimatedElement delay={100}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-100 -z-10" />
                <div className="bg-white p-8 rounded-lg border-2 border-red-300 relative z-10">
                  <h3 className="text-xl font-semibold mb-6 text-center uppercase">Risks of Inaction</h3>
                  <div className="space-y-4">
                    <ImpactItem label="Delivery Speed" value="20-50% Slower" negative />
                    <ImpactItem label="Margin Erosion" value="3-5% Loss" negative />
                    <ImpactItem label="Compliance Risk" value="30% by 2030" negative />
                    <ImpactItem label="Market Position" value="Declining" negative />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-16 lg:mt-32">
            <AnimatedElement delay={200}>
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-100 -z-10" />
                <div className="bg-white p-8 rounded-lg border-2 border-green-300 relative z-10">
                  <h3 className="text-xl font-semibold mb-6 text-center uppercase">Gains from I5 Model</h3>
                  <div className="space-y-4">
                    <ImpactItem label="Schedule Compression" value="20-50% Faster" />
                    <ImpactItem label="Cost Savings" value="15-20% Lower" />
                    <ImpactItem label="Quality Improvement" value="60-80% Fewer Defects" />
                    <ImpactItem label="Brand Differentiation" value="Market Leader" />
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>

        <div className="mt-32 mb-16">
          <AnimatedElement delay={300}>
            <h3 className="text-2xl font-semibold mb-8">Regulatory Evolution</h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10" />
              <div className="flex flex-wrap justify-between items-center gap-4">
                {[
                  { label: "Traditional Building Codes", year: "Pre-2010" },
                  { label: "E-Permitting Systems", year: "2010-2015" },
                  { label: "Modular Approvals", year: "2015-2020" },
                  { label: "Sustainability Mandates", year: "2020-2030" },
                  { label: "Net Zero 2050", year: "2030-2050" },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-0 left-1/2 h-8 w-0.5 bg-gray-300 -translate-x-1/2 -translate-y-full" />
                    <div className="bg-white border-2 border-gray-600 rounded-lg p-4 text-center w-40 relative z-10">
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Conclusion with floating elements */}
      <section className="relative px-8 md:px-16 lg:px-24 pb-32">
        <div className="absolute -top-32 right-1/4 w-64 h-64 bg-gray-100 rounded-full opacity-50 -z-10" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-gray-200 rounded-full opacity-50 -z-10" />

        <div className="relative max-w-4xl mx-auto">
          <AnimatedElement>
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-gray-200 -z-10" />
            <Card className="p-8 relative z-10">
              <h2 className="text-2xl font-bold mb-6 text-center">The I5 Model Advantage</h2>
              <p className="text-center text-lg">
                The I5 Model, with its focus on productization, integrated delivery, and technology enablement, is
                designed to help organizations navigate these market challenges effectively and capitalize on the
                opportunities presented by this evolving landscape.
              </p>

              <div className="mt-8 text-center">
                <p className="font-semibold">
                  For detailed statistics, regional examples, and strategic implementation recommendations, refer to
                  Chapter 2 of the I5 Model Handbook 2025.
                </p>
                <p className="text-sm text-gray-600 italic mt-2">(This content is derived from I5 HB: Chapter 2)</p>
              </div>
            </Card>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

// Component for driver cards
function DriverCard({
  icon,
  title,
  metric,
  description,
  className,
}: {
  icon: React.ReactNode
  title: string
  metric: string
  description: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border-2 border-gray-300 rounded-lg p-6 transition-all duration-700",
        isInView ? "opacity-100" : "opacity-0 translate-y-8",
        className,
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-100 p-3 rounded-full mb-4">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="text-3xl font-bold my-2">{metric}</div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

// Component for model items
function ModelItem({ text, traditional = false }: { text: string; traditional?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 text-lg">{traditional ? "×" : "✓"}</span>
      <span>{text}</span>
    </div>
  )
}

// Component for region cards
function RegionCard({
  name,
  stat,
  detail,
  className,
}: {
  name: string
  stat: string
  detail: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border-2 border-gray-400 rounded-lg p-6 text-center transition-all duration-700",
        isInView ? "opacity-100" : "opacity-0 translate-y-8",
        className,
      )}
    >
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <div className="text-3xl font-bold my-3">{stat}</div>
      <p className="text-sm text-gray-600">{detail}</p>
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
      className={`flex justify-between p-3 rounded-lg ${
        negative ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"
      }`}
    >
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
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
