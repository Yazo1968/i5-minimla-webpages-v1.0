"use client"
import Image from "next/image"
import { useState } from "react"

export default function SectorChallengesPage() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ["Overview of Sector Challenges", "Real Estate Market Context", "Comparative Analysis"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
          <div
            className="absolute inset-0 bg-center bg-cover opacity-30"
            style={{ backgroundImage: "url('/images/angular-modular-building.png')" }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1628] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">Sector Challenges</h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            The real estate and construction sectors face significant systemic challenges that require comprehensive
            transformation. The I5 Real Estate Delivery Model addresses these issues by merging productization
            principles with Integrated Project Delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 backdrop-blur-sm text-white rounded-full text-lg font-medium border border-white/30">
              25-35% faster delivery
            </span>
            <span className="px-6 py-3 backdrop-blur-sm text-white rounded-full text-lg font-medium border border-white/30">
              15-25% cost savings
            </span>
            <span className="px-6 py-3 backdrop-blur-sm text-white rounded-full text-lg font-medium border border-white/30">
              50-70% fewer defects
            </span>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === index
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="p-8 bg-transparent rounded-none border-blue-600 border-t-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 0 && (
            <div className="space-y-16">
              {/* Container 1: Introduction */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-6">Introduction to the Challenges</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      The real estate and construction sectors are foundational to the global economy, yet they face
                      significant systemic challenges, exhibiting a pronounced divergence from other industries in
                      productivity growth and technological advancement.
                    </p>
                    <p>
                      Traditional project-based work, where each project is a unique endeavor, leads to considerable
                      redundant effort and limits the application of standardization and continuous improvement. This
                      has resulted in widespread inefficiencies, with industry analysis revealing that approximately{" "}
                      <strong>80% of large construction projects run over budget</strong> and{" "}
                      <strong>20% exceed their scheduled timelines</strong>.
                    </p>
                    <p>
                      The I5 Real Estate Delivery Model directly addresses these issues by merging productization
                      principles with Integrated Project Delivery (IPD). It transforms the traditional fragmented
                      ecosystem into integrated value networks that foster collaboration, enable data-driven
                      decision-making, and systematically improve delivery efficiency.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="space-y-4 text-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-black">Faster Delivery</span>
                        <span className="font-semibold text-blue-600">25-35%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">Cost Savings</span>
                        <span className="font-semibold text-green-600">15-25%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">Cost Variance</span>
                        <span className="font-semibold text-purple-600">±2%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-black">Fewer Defects</span>
                        <span className="font-semibold text-orange-600">50-70%</span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_5b190d37-5715-42ea-8fcc-f74f76ad3f57_0-IRcnrv71nr6cSN3s969Wwn7BUPy2jK.png"
                    alt="Modern building facade with geometric patterns and advanced lighting systems"
                    width={400}
                    height={250}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              {/* Digital Platforms Section */}
              <div className="rounded-lg p-8 bg-white0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-light text-gray-900 mb-6">Owner-Controlled Digital Ecosystem</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The I5 Model's comprehensive technological infrastructure integrates design, manufacturing,
                      construction, and management processes seamlessly through owner-controlled digital platforms.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">AEC Platform for project execution</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">DfMA for manufacturing optimization</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">BoK for standardized components</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">Virtual Showroom for client engagement</span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_7ca299e4-2416-4326-b1ae-02c0c0b5f894_1-onMxjUOYTE2wDwomno1yXRFBxGPlPb.png"
                    alt="Smart building with transparent glass facade and integrated LED lighting systems"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              {/* Container 2: Transformation */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">
                  How the I5 Model Transforms Challenges into Opportunities
                </h2>
                <div className="grid grid-cols-3 gap-4 auto-rows-auto">
                  {/* First container - spans 2 columns */}
                  <div className="col-span-2 bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_f916d490-c3b1-4fd7-ae92-d68ea3e89c03_3-uu6CkAleeHsegwShpqkl19jqgn9CKW.png"
                        alt="Parametric architecture with organic flowing forms representing Industry 4.0 design"
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Bridging the Industry 4.0 Implementation Gap
                    </h3>
                    <p className="text-gray-600 mb-4">
                      While technologies like Building Information Modeling (BIM) have been incorporated, traditional
                      frameworks have not been fundamentally restructured to harness Industry 4.0 principles.
                    </p>
                    <p className="text-gray-600 mb-0">
                      The I5 Model's <strong>owner-controlled digital platforms</strong> form a comprehensive
                      technological infrastructure designed to integrate design, manufacturing, construction, and
                      management processes seamlessly.
                    </p>
                  </div>

                  {/* Second container - spans 1 column */}
                  <div className="col-span-1 bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_f0a13b39-ac2e-407e-8267-7a4469a27c20_0-w5mpYRRNLzY3Ncnh1MVTVmWyIpldEb.png"
                        alt="Modular construction facade with standardized components and systematic design"
                        width={300}
                        height={200}
                        className="object-cover w-full h-32"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Project-Based Inefficiencies</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Traditional approaches lead to "reinvention of the wheel" for each project.
                    </p>
                    <p className="text-gray-600 text-sm mb-0">
                      I5 treats buildings as <strong>standardized, repeatable products</strong>.
                    </p>
                  </div>

                  {/* Third container - spans 1 column */}
                  <div
                    id="collaborative-risk-container"
                    className="col-span-1 bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_7783c340-7978-4773-aad4-fc8202540cbc_3-ogDabRAg3Pkr90iMoUjXM41ptKTQul.png"
                        alt="Innovative architectural composition demonstrating sustainable construction practices"
                        width={300}
                        height={200}
                        className="object-cover w-full h-32"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Collaborative Risk Management</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Traditional contracts often involve adversarial risk transfer.
                    </p>
                    <p className="text-gray-600 text-sm mb-0">
                      I5 implements <strong>collaborative contracting models</strong> through IPD.
                    </p>
                  </div>

                  {/* Fourth container - spans 2 columns */}
                  <div className="col-span-2 bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_40270718-18f1-4a53-87b3-e96e63e14402_2-X4ovKmhVGaIYaR40NkUtDhGN1U7vXH.png"
                        alt="Modern commercial building showcasing integrated project delivery coordination"
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Transforming Fragmented Ecosystems</h3>
                    <p className="text-gray-600 mb-4">
                      The fragmented nature of the industry leads to siloed teams and inefficiencies.
                    </p>
                    <p className="text-gray-600 mb-0">
                      I5 aligns all participants under common goals through an{" "}
                      <strong>integrated, cross-functional team approach</strong>, facilitated by owner-controlled
                      digital platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-16">
              {/* Market Context Content */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">Introduction to Market Challenges</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Real estate developers globally, and particularly in the UAE and GCC region, are facing converging
                      pressures that demand new approaches to development and construction. These forces are reshaping
                      the industry landscape, creating both challenges and opportunities.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      The traditional methods struggle to keep pace with demands for faster delivery, tighter budgets,
                      and higher quality, often leading to project overruns and inconsistent outcomes.
                    </p>
                  </div>
                  <div className="p-6 bg-transparent rounded-none border-blue-600 border-l border-r-0">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Regional Focus</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• UAE Market Dynamics</li>
                      <li>• GCC Investment Patterns</li>
                      <li>• Local Regulatory Context</li>
                      <li>• Cultural Considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modular Construction Section */}
              <div className="p-8 bg-transparent border-blue-600 border-t rounded-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_14824a04-1cd6-4b71-93a1-96b9bf36c301_3-X50vBvlJ5IIpHsE58J9OShCe8IKprv.png"
                    alt="Modern modular house design with advanced prefabrication techniques"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full"
                  />
                  <div>
                    <h2 className="text-3xl font-light text-gray-900 mb-6">Modular Construction Revolution</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The industry is embracing modular construction and off-site fabrication, with automated
                      manufacturing in factories boosting labor productivity by 50-200% while minimizing material waste.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Labor Productivity Boost</span>
                        <span className="font-semibold text-blue-600">50-200%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Schedule Compression</span>
                        <span className="font-semibold text-green-600">20-50%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Material Waste Reduction</span>
                        <span className="font-semibold text-purple-600">30-40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Tools & Technologies */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">Evolving Industry Trends & Key Drivers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 shadow-none">
                  {[
                    {
                      title: "Building Information Modeling (BIM)",
                      description: "Mainstream for complex projects, reducing design errors by up to 40%",
                      impact: "40% error reduction",
                    },
                    {
                      title: "Parametric Design",
                      description: "Allows design optimization based on performance criteria",
                      impact: "30-50% cycle time reduction",
                    },
                    {
                      title: "Off-site Fabrication",
                      description: "Automated manufacturing in factories boosts productivity",
                      impact: "50-200% productivity boost",
                    },
                    {
                      title: "Digital Twins & IoT",
                      description: "Live digital replicas for monitoring performance",
                      impact: "10-30% cost reduction",
                    },
                    {
                      title: "Predictive Analytics",
                      description: "Forecasting project outcomes and identifying issues",
                      impact: "20-40% schedule improvement",
                    },
                    {
                      title: "Generative Design",
                      description: "AI-driven tools exploring thousands of design options",
                      impact: "15-30% performance improvement",
                    },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow border-0 rounded-none bg-transparent border-blue-600 border-l"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{tech.title}</h3>
                      <p className="text-gray-600 mb-4">{tech.description}</p>
                      <div className="text-sm font-medium text-blue-600">{tech.impact}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment & ESG */}
              <div className="p-8 bg-transparent rounded-none border-blue-600 border-t">
                <h2 className="text-3xl font-light text-gray-900 mb-8">Investment Shifts & ESG Requirements</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Patterns</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Shift toward logistics and data centers</li>
                      <li>• Growth in Public-Private Partnerships (PPPs)</li>
                      <li>• Increased selectivity on quality and sustainability</li>
                      <li>• Higher upfront costs offset by faster builds</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">ESG Benefits</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 30-40% waste reduction</li>
                      <li>• 20-30% embodied carbon reduction</li>
                      <li>• Streamlined compliance reporting</li>
                      <li>• Premium sustainable building rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-16">
              {/* Comparative Analysis Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-8">Introduction to Comparative Analysis</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Traditional project delivery frameworks like the RIBA Plan of Work and FIDIC contract models, though
                    widely recognized, are often "rooted in pre-digital paradigms" and struggle to fully harness the
                    interconnected, data-driven principles of Industry 4.0.
                  </p>
                </div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_37b2e9a0-9be3-42c1-b0b3-c41d09ed65a1_1-TGUk1dFkuDeSkFPEaONQwDuSDZOFrN.png"
                  alt="Modern glass skyscrapers representing advanced construction methodologies"
                  width={500}
                  height={350}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              {/* I5 vs RIBA */}
              <div className="bg-white border-gray-200 rounded-lg overflow-hidden border-0">
                <div className="px-6 py-4 border-b bg-transparent rounded-none border-blue-600 shadow-none">
                  <h2 className="text-2xl font-semibold text-gray-900">I5 vs. RIBA Plan of Work</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">RIBA Approach</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Bespoke design for single projects</li>
                        <li>• Sequential handovers create ambiguities</li>
                        <li>• On-site construction managed linearly</li>
                        <li>• Limited standardization opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">I5 Advantages</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Repeatable product development</li>
                        <li>• Integrated team from project outset</li>
                        <li>• Off-site manufacturing and assembly</li>
                        <li>• Owner-controlled digital platforms</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-transparent border-t border-blue-600 rounded-none">
                      <div className="text-2xl font-bold text-blue-600 mb-2">40%</div>
                      <div className="text-sm text-blue-800">Productivity Improvement</div>
                    </div>
                    <div className="text-center p-4 bg-transparent rounded-none border-t border-blue-600">
                      <div className="text-2xl font-bold text-green-600 mb-2">Faster</div>
                      <div className="text-sm text-green-800">Speed to Market</div>
                    </div>
                    <div className="text-center p-4 border border-blue-600 rounded-none bg-transparent border-b-0 border-l-0 border-r-0">
                      <div className="text-2xl font-bold text-purple-600 mb-2">Reduced</div>
                      <div className="text-sm text-purple-800">Rework & Errors</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Structural Innovation Section */}
              <div className="rounded-lg p-8 bg-transparent py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-light text-gray-900 mb-6">
                      Structural Innovation & Design Excellence
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Advanced structural systems and parametric design enable unprecedented architectural possibilities
                      while maintaining cost efficiency and construction speed through systematic approaches.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Design Optimization</span>
                        <span className="font-semibold text-blue-600">15-30%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Structural Efficiency</span>
                        <span className="font-semibold text-green-600">20-40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Material Optimization</span>
                        <span className="font-semibold text-purple-600">25-35%</span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yazo1968_professional_architecture_photography_super_realisti_40270718-18f1-4a53-87b3-e96e63e14402_1-lBJWc2SY4P7sZTVpJqzM1qLsHbgXrk.png"
                    alt="Advanced structural tower with geometric lattice system demonstrating engineering excellence"
                    width={500}
                    height={350}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>

              {/* I5 vs FIDIC */}
              <div className="bg-white border-gray-200 rounded-lg overflow-hidden border-0">
                <div className="px-6 border-gray-200 bg-transparent border-b-0 py-2">
                  <h2 className="text-2xl font-semibold text-gray-900">I5 vs. FIDIC Contracts</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Allocation Differences</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="p-4 bg-transparent border-r rounded-none border-blue-600 text-blue-600">
                          <h4 className="font-medium mb-2 text-black">Traditional FIDIC</h4>
                          <p className="text-sm text-black">
                            Places design risk on either owner or contractor, with construction/supply chain risk
                            primarily on contractor. Technology risk often unaddressed.
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-transparent border-0">
                          <h4 className="font-medium mb-2 text-blue-600">I5 Recommended</h4>
                          <p className="text-sm text-blue-600">
                            Emphasizes shared risk for design and collaborative management. Owner responsible for core
                            platforms, partners for their technology.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-blue-600">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 py-2">Key Contractual Adaptations</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-2">
                        {[
                          "Mandatory use of specified owner platforms",
                          "Partner access rights and security protocols",
                          "Data ownership and usage rights",
                          "Integration requirements for partner systems",
                          "Compliance with data formats and exchange",
                          "Cybersecurity requirements and liability",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Benchmarking */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">
                  Performance Benchmarking & Continuous Improvement
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      metric: "Time Efficiency",
                      target: "20-50% reduction",
                      description: "Design, manufacturing, and assembly cycle times",
                    },
                    {
                      metric: "Cost Performance",
                      target: "15-20% reduction",
                      description: "Overall costs with <5% variance",
                    },
                    { metric: "Quality", target: "<1% defect rate", description: "Rework <2%" },
                    {
                      metric: "Resource Utilization",
                      target: "20-30% improvement",
                      description: "Labor, factory, material efficiency",
                    },
                    { metric: "Client Satisfaction", target: "NPS >50", description: "Overall satisfaction >8.5/10" },
                    {
                      metric: "Sustainability",
                      target: "30-40% reduction",
                      description: "Waste, carbon footprint, energy",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-none border-0 border-b border-blue-600">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.metric}</h3>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.target}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* UAE/GCC Regulatory Compliance */}
              <div className="bg-white border-gray-200 rounded-lg overflow-hidden border-0">
                <div className="px-6 py-4 border-b bg-transparent border-blue-600">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    UAE/GCC Regulatory Compliance & Regional Best Practices
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">UAE Regulatory Framework</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Dubai Municipality Building Code compliance</li>
                        <li>• Abu Dhabi Urban Planning Council standards</li>
                        <li>• UAE Fire and Life Safety Code integration</li>
                        <li>• Green Building Regulations (Al Sa'fat)</li>
                        <li>• Dubai Clean Energy Strategy 2050 alignment</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">GCC Regional Adaptations</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Climate-specific design requirements</li>
                        <li>• Local material sourcing preferences</li>
                        <li>• Cultural and religious considerations</li>
                        <li>• Labor law compliance frameworks</li>
                        <li>• Cross-border project coordination</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Best Practices Integration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Singapore Model Adaptation</h4>
                        <p className="text-blue-800 text-sm">
                          Integrated digital approval processes, BIM mandate compliance, and streamlined regulatory
                          workflows adapted for UAE context.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-blue-50">
                        <h4 className="font-medium text-green-900 mb-2">Japan Quality Standards</h4>
                        <p className="text-green-800 text-sm">
                          Precision manufacturing, quality control protocols, and continuous improvement methodologies
                          integrated into I5 framework.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation & Process Differences */}
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-8">Documentation & Process Transformation</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Documentation</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Paper-based approval processes</li>
                      <li>• Manual coordination between disciplines</li>
                      <li>• Sequential review cycles</li>
                      <li>• Version control challenges</li>
                      <li>• Limited real-time collaboration</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">I5 Digital Documentation</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Integrated digital approval workflows</li>
                      <li>• Real-time multi-disciplinary coordination</li>
                      <li>• Parallel review and approval processes</li>
                      <li>• Automated version control and tracking</li>
                      <li>• Live collaboration platforms</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficiency Gains</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">Approval Time</span>
                        <span className="font-semibold text-blue-600">60-80% faster</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">Documentation Errors</span>
                        <span className="font-semibold text-green-600">70-90% reduction</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">Coordination Efficiency</span>
                        <span className="font-semibold text-purple-600">3-5x improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Implementation Specifics */}
              <div className="rounded-lg p-8 bg-transparent">
                <h2 className="text-3xl font-light text-gray-900 mb-8">Owner Platform Technical Implementation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Platform Integration</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">AEC Platform</h4>
                        <p className="text-gray-600 text-sm">
                          Centralized project management with real-time collaboration, automated workflows, and
                          integrated approval processes.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">DfMA Platform</h4>
                        <p className="text-gray-600 text-sm">
                          Design for Manufacturing and Assembly optimization with automated component sizing and factory
                          coordination.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">BoK System</h4>
                        <p className="text-gray-600 text-sm">
                          Body of Knowledge repository with standardized components, specifications, and proven design
                          solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Regional Adaptation Strategies</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Climate Optimization</h4>
                        <p className="text-gray-600 text-sm">
                          Automated design adjustments for extreme heat, humidity, and sandstorm conditions specific to
                          GCC region.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Local Supply Chain</h4>
                        <p className="text-gray-600 text-sm">
                          Integration with regional suppliers, material availability optimization, and logistics
                          coordination.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">Regulatory Compliance</h4>
                        <p className="text-gray-600 text-sm">
                          Automated compliance checking against local building codes, safety standards, and
                          environmental regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
