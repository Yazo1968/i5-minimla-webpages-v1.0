"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, BarChart3, Clock, DollarSign, HardHat, Leaf, Truck } from "lucide-react"

export default function MarketContextDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight border-b-4 border-black pb-4 mb-2">
          Market Context: Navigating a Dynamic Real Estate Landscape
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          The global real estate and construction sectors are undergoing intense change, driven by economic,
          technological, and societal pressures.
        </p>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="drivers">Key Drivers</TabsTrigger>
          <TabsTrigger value="models">Business Models</TabsTrigger>
          <TabsTrigger value="regions">Regional Markets</TabsTrigger>
          <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>The Evolving Terrain of Real Estate Development</CardTitle>
              <CardDescription>
                Understanding this dynamic market context is crucial for recognizing opportunities that innovative
                delivery models like I5 can unlock.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Industry Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Escalating Costs:</strong> 15-25% increases in materials and labor over past 2 years
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Compressed Timelines:</strong> 15% NPV increase with 20% faster delivery
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Execution Challenges:</strong> 80% average budget overrun on large projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Labor Shortages:</strong> 41% of US construction workforce retiring by 2031
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">I5 Model Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Schedule Compression:</strong> 20-50% reduction in project timelines
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Cost Savings:</strong> 15-20% cost reductions with mature productized approaches
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Quality Improvement:</strong> 60-80% fewer defects in factory-produced components
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>
                        <strong>Market Differentiation:</strong> Significant margin advantages for early adopters
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Delivery Timeline Comparison</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Traditional Approach</span>
                      <span className="font-medium">100% Timeline</span>
                    </div>
                    <Progress value={100} className="h-8 bg-gray-300" indicatorClassName="bg-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">I5 Model Approach</span>
                      <span className="font-medium">50-80% Timeline</span>
                    </div>
                    <Progress value={65} className="h-8 bg-gray-300" indicatorClassName="bg-black" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic text-center mt-4">
                  20-50% schedule compression with I5 Model implementation
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* KEY DRIVERS TAB */}
        <TabsContent value="drivers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Drivers Forcing Industry Transformation</CardTitle>
              <CardDescription>
                Developers worldwide face mounting challenges that demand new approaches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DriverCard
                  icon={<DollarSign className="h-8 w-8" />}
                  title="Escalating Costs"
                  metric="15-25%"
                  description="Material & labor cost increases over past 2 years"
                />
                <DriverCard
                  icon={<Clock className="h-8 w-8" />}
                  title="Compressed Timelines"
                  metric="15%"
                  description="NPV increase with 20% faster delivery"
                />
                <DriverCard
                  icon={<BarChart3 className="h-8 w-8" />}
                  title="Execution Challenges"
                  metric="80%"
                  description="Average budget overrun on large projects"
                />
                <DriverCard
                  icon={<HardHat className="h-8 w-8" />}
                  title="Labor Shortages"
                  metric="41%"
                  description="US construction workforce retiring by 2031"
                />
                <DriverCard
                  icon={<Truck className="h-8 w-8" />}
                  title="Supply Chain Issues"
                  metric="Majority"
                  description="Of major projects affected by disruptions"
                />
                <DriverCard
                  icon={<Leaf className="h-8 w-8" />}
                  title="Sustainability Mandates"
                  metric="ESG"
                  description="Growing regulations & market expectations"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BUSINESS MODELS TAB */}
        <TabsContent value="models" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Emerging Business Models in Response</CardTitle>
              <CardDescription>
                Innovative developers are adopting new strategies to address market pressures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center uppercase">Traditional Model</h3>
                  <ul className="space-y-3">
                    <ModelItem text="Bespoke, one-off projects" traditional />
                    <ModelItem text="Sequential design & build" traditional />
                    <ModelItem text="Adversarial contracts" traditional />
                    <ModelItem text="Limited technology use" traditional />
                    <ModelItem text="Site-based construction" traditional />
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg border-2 border-black">
                  <h3 className="text-xl font-semibold mb-4 text-center uppercase">Innovative Approaches</h3>
                  <ul className="space-y-3">
                    <ModelItem text="Productized solutions" />
                    <ModelItem text="Integrated delivery (IPD)" />
                    <ModelItem text="Collaborative contracts" />
                    <ModelItem text="Digital transformation" />
                    <ModelItem text="Manufacturing mindset" />
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Productization Approaches</h3>
                  <ul className="ml-6 space-y-2 list-disc">
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
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Collaborative Contracting</h3>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      <strong>Integrated Project Delivery (IPD):</strong> 85% of projects finish at/under budget
                    </li>
                    <li>
                      <strong>Target Value Design & Alliancing:</strong> Enhanced cost control
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Advanced Technology Adoption</h3>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      <strong>BIM:</strong> Up to 40% reduction in design errors
                    </li>
                    <li>
                      <strong>Digital Twins:</strong> Improved lifecycle management
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* REGIONAL MARKETS TAB */}
        <TabsContent value="regions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape & Market Shifts</CardTitle>
              <CardDescription>
                The competitive environment is intensifying, with both established players and new entrants adopting
                innovative delivery methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <RegionCard
                  name="DUBAI"
                  stat="45%"
                  detail="Major pipeline controlled by Emaar, Nakheel, Dubai Holding"
                />
                <RegionCard name="ABU DHABI" stat="35%" detail="Development controlled by Aldar" />
                <RegionCard name="SAUDI ARABIA" stat="$1T+" detail="Planned development (NEOM, ROSHN)" />
                <RegionCard name="SINGAPORE" stat="35%+" detail="PPVC adoption rate" />
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-semibold">International Benchmarks</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">UK</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Berkeley Homes investing in modular factories</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Japan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Sekisui House industrialized homebuilding, reducing waste by 60%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Singapore</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Mandates for PPVC driving adoption above 35%</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Evolving Expectations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>72% of commercial tenants prioritize smart building features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>Corporate ESG goals driving preference for green-certified buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-black text-white p-1 rounded-full mt-1">•</span>
                      <span>Dubai ranks 14th globally for green buildings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* IMPACT ANALYSIS TAB */}
        <TabsContent value="impact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>The Imperative to Adapt: Risks vs. Gains</CardTitle>
              <CardDescription>
                The current market dynamics present a clear choice: adapt through innovation or risk obsolescence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center uppercase">Risks of Inaction</h3>
                  <div className="space-y-3">
                    <ImpactItem label="Delivery Speed" value="20-50% Slower" negative />
                    <ImpactItem label="Margin Erosion" value="3-5% Loss" negative />
                    <ImpactItem label="Compliance Risk" value="30% by 2030" negative />
                    <ImpactItem label="Market Position" value="Declining" negative />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center uppercase">Gains from I5 Model</h3>
                  <div className="space-y-3">
                    <ImpactItem label="Schedule Compression" value="20-50% Faster" />
                    <ImpactItem label="Cost Savings" value="15-20% Lower" />
                    <ImpactItem label="Quality Improvement" value="60-80% Fewer Defects" />
                    <ImpactItem label="Brand Differentiation" value="Market Leader" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Regulatory Evolution</h3>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="bg-gray-200 border-2 border-gray-600 rounded-lg p-4 text-center w-40">
                    <p className="text-sm">
                      Traditional
                      <br />
                      Building Codes
                    </p>
                  </div>
                  <ArrowRight className="text-gray-600" />
                  <div className="bg-gray-200 border-2 border-gray-600 rounded-lg p-4 text-center w-40">
                    <p className="text-sm">
                      E-Permitting
                      <br />
                      Systems
                    </p>
                  </div>
                  <ArrowRight className="text-gray-600" />
                  <div className="bg-gray-200 border-2 border-gray-600 rounded-lg p-4 text-center w-40">
                    <p className="text-sm">
                      Modular
                      <br />
                      Approvals
                    </p>
                  </div>
                  <ArrowRight className="text-gray-600" />
                  <div className="bg-gray-200 border-2 border-gray-600 rounded-lg p-4 text-center w-40">
                    <p className="text-sm">
                      Sustainability
                      <br />
                      Mandates
                    </p>
                  </div>
                  <ArrowRight className="text-gray-600" />
                  <div className="bg-gray-200 border-2 border-gray-600 rounded-lg p-4 text-center w-40">
                    <p className="text-sm">
                      Net Zero
                      <br />
                      2050
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <p className="text-center font-medium">
                  The I5 Model, with its focus on productization, integrated delivery, and technology enablement, is
                  designed to help organizations navigate these market challenges effectively and capitalize on the
                  opportunities presented by this evolving landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-gray-200 p-6 rounded-lg text-center">
        <p className="font-semibold">
          For detailed statistics, regional examples, and strategic implementation recommendations, refer to Chapter 2
          of the I5 Model Handbook 2025.
        </p>
        <p className="text-sm text-gray-600 italic mt-2">(This content is derived from I5 HB: Chapter 2)</p>
      </div>
    </div>
  )
}

// Component for driver cards
function DriverCard({
  icon,
  title,
  metric,
  description,
}: {
  icon: React.ReactNode
  title: string
  metric: string
  description: string
}) {
  return (
    <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 transition-all hover:bg-gray-200 hover:translate-y-[-2px]">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-200 p-3 rounded-full mb-4">{icon}</div>
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
function RegionCard({ name, stat, detail }: { name: string; stat: string; detail: string }) {
  return (
    <div className="bg-gray-100 border-2 border-gray-400 rounded-lg p-4 text-center">
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
      className={`flex justify-between p-3 rounded-lg border ${negative ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}
    >
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
