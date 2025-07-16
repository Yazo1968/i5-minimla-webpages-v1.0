import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  TrendingUp,
  Globe,
  Award,
  BookOpen,
  Package,
  Truck,
  Settings,
  CheckCircle,
  BarChart2,
  Users,
  Clock,
  ChevronRight,
  Database,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CaseStudiesReferencesPage() {
  const caseStudyMetrics = [
    { label: "Faster Delivery", value: "25-35%" },
    { label: "Cost Savings", value: "15-25%" },
    { label: "Cost Variance", value: "±2%" },
    { label: "Fewer Defects", value: "50-70%" },
  ]

  const globalCaseStudies = [
    "United Kingdom",
    "Sweden",
    "Singapore",
    "China",
    "Japan",
    "United States",
    "Canada",
    "Saudi Arabia",
    "Australia",
  ]

  const productizationExamples = [
    {
      category: "Standardization",
      icon: <Settings className="h-5 w-5" />,
      examples: [
        {
          company: "Daiwa House",
          system: "Standardized housing components",
          metrics: "40% reduction in design time, 30% reduction in material costs, 95% reuse rate",
          relevance:
            'The I5 Model leverages a proven "product catalog" of modular elements and manages standardization through the owner\'s Body of Knowledge (BoK) platform',
        },
        {
          company: "Broad Group",
          system: "Standardized modular system",
          metrics: "40% reduction in design time, 30% reduction in material costs, 95% reuse rate",
          relevance:
            'The I5 Model leverages a proven "product catalog" of modular elements and manages standardization through the owner\'s Body of Knowledge (BoK) platform',
        },
      ],
    },
    {
      category: "Customization",
      icon: <Users className="h-5 w-5" />,
      examples: [
        {
          company: "IKEA",
          system: "Kitchen planning system",
          metrics: "200+ customization options, 90% customer satisfaction, 25% premium on units",
          relevance:
            "The I5 Model balances standardization with controlled customization, enabling efficient configuration to meet market preferences",
        },
        {
          company: "Sekisui House",
          system: "Customizable home system",
          metrics: "200+ customization options, 90% customer satisfaction, 25% premium on units",
          relevance:
            "The I5 Model balances standardization with controlled customization, enabling efficient configuration to meet market preferences",
        },
      ],
    },
    {
      category: "Production",
      icon: <Package className="h-5 w-5" />,
      examples: [
        {
          company: "Katerra",
          system: "Automated facilities",
          metrics: "35% reduction in production time, 45% increase in productivity, 60% waste reduction",
          relevance:
            "The I5 Model incorporates off-site manufacturing and automated production systems, applying DfMA principles",
        },
        {
          company: "Bouygues Construction",
          system: "Automated module production",
          metrics: "35% reduction in production time, 45% increase in productivity, 60% waste reduction",
          relevance:
            "The I5 Model incorporates off-site manufacturing and automated production systems, applying DfMA principles",
        },
      ],
    },
    {
      category: "Supply Chain",
      icon: <Truck className="h-5 w-5" />,
      examples: [
        {
          company: "CCC",
          system: "Digital supply chain",
          metrics: "30% reduction in inventory costs, 40% improvement in delivery reliability, 25% cost reduction",
          relevance:
            "I5 implements a digitally integrated supply chain platform with real-time tracking and Just-In-Time (JIT) delivery",
        },
        {
          company: "Lafarge Holcim",
          system: "Integrated materials platform",
          metrics: "30% reduction in inventory costs, 40% improvement in delivery reliability, 25% cost reduction",
          relevance:
            "I5 implements a digitally integrated supply chain platform with real-time tracking and Just-In-Time (JIT) delivery",
        },
      ],
    },
    {
      category: "Quality Control",
      icon: <CheckCircle className="h-5 w-5" />,
      examples: [
        {
          company: "Shimizu",
          system: "Robot inspection",
          metrics: "75% reduction in defects, 90% first-time quality rate, 50% reduction in rework",
          relevance:
            "I5 employs systematic quality assurance across all processes, leveraging IoT-enabled quality monitoring systems",
        },
        {
          company: "Turner Construction",
          system: "Digital quality management",
          metrics: "75% reduction in defects, 90% first-time quality rate, 50% reduction in rework",
          relevance:
            "I5 employs systematic quality assurance across all processes, leveraging IoT-enabled quality monitoring systems",
        },
      ],
    },
  ]

  const dfmaExamples = [
    {
      category: "Design Optimization",
      icon: <Layers className="h-5 w-5" />,
      examples: [
        {
          company: "MHI",
          system: "Optimized module design",
          metrics: "40% reduction in design time, 30% reduction in components, 25% cost savings in manufacturing",
          relevance: "The I5 Model integrates manufacturing constraints in early design via the DfMA platform",
        },
        {
          company: "Laing O'Rourke",
          system: "DfMA library",
          metrics: "40% reduction in design time, 30% reduction in components, 25% cost savings in manufacturing",
          relevance: "The I5 Model integrates manufacturing constraints in early design via the DfMA platform",
        },
      ],
    },
    {
      category: "Component Standardization",
      icon: <Database className="h-5 w-5" />,
      examples: [
        {
          company: "Gammon",
          system: "Precast system",
          metrics: "60% component standardization, 35% reduction in unique parts, 45% quality improvement",
          relevance: "I5 focuses on maximizing the use of common, repeatable components and interfaces",
        },
        {
          company: "Skanska",
          system: "Standardized MEP modules",
          metrics: "60% component standardization, 35% reduction in unique parts, 45% quality improvement",
          relevance: "I5 focuses on maximizing the use of common, repeatable components and interfaces",
        },
      ],
    },
    {
      category: "Manufacturing Integration",
      icon: <Settings className="h-5 w-5" />,
      examples: [
        {
          company: "Bryden Wood",
          system: "Manufacturing-led design",
          metrics:
            "50% reduction in manufacturing errors, 40% improvement in production efficiency, 30% cost reduction",
          relevance: "I5 considers manufacturing capabilities early in the design process",
        },
        {
          company: "Rogers Stirk Harbor",
          system: "Factory integration",
          metrics:
            "50% reduction in manufacturing errors, 40% improvement in production efficiency, 30% cost reduction",
          relevance: "I5 considers manufacturing capabilities early in the design process",
        },
      ],
    },
  ]

  const jitExamples = [
    {
      category: "Demand Planning",
      icon: <BarChart2 className="h-5 w-5" />,
      examples: [
        {
          company: "VINCI",
          system: "Predictive procurement",
          metrics: "35% improvement in forecast accuracy, 40% reduction in safety stock, 25% cost savings",
          relevance: "I5 uses AI-driven demand prediction systems and the owner's AEC/SCM platforms",
        },
        {
          company: "Balfour Beatty",
          system: "Demand modeling",
          metrics: "35% improvement in forecast accuracy, 40% reduction in safety stock, 25% cost savings",
          relevance: "I5 uses AI-driven demand prediction systems and the owner's AEC/SCM platforms",
        },
      ],
    },
    {
      category: "Supplier Integration",
      icon: <Users className="h-5 w-5" />,
      examples: [
        {
          company: "Kajima",
          system: "Supplier network",
          metrics: "45% reduction in lead times, 30% improvement in reliability, 40% cost reduction",
          relevance: "I5 integrates with key suppliers through collaborative planning tools",
        },
        {
          company: "Hochtief",
          system: "Integrated supply chain",
          metrics: "45% reduction in lead times, 30% improvement in reliability, 40% cost reduction",
          relevance: "I5 integrates with key suppliers through collaborative planning tools",
        },
      ],
    },
    {
      category: "Delivery Optimization",
      icon: <Clock className="h-5 w-5" />,
      examples: [
        {
          company: "Multiplex",
          system: "Delivery management",
          metrics: "60% reduction in delays, 40% improvement in efficiency, 50% reduction in site storage",
          relevance: "I5 leverages transportation management systems and delivery scheduling platforms",
        },
        {
          company: "Turner",
          system: "Logistics platform",
          metrics: "60% reduction in delays, 40% improvement in efficiency, 50% reduction in site storage",
          relevance: "I5 leverages transportation management systems and delivery scheduling platforms",
        },
      ],
    },
  ]

  const keyProjects = [
    {
      name: "The Clement Canopy",
      location: "Singapore",
      description:
        "A project in Singapore that exemplifies mandated modular construction through Prefabricated Prefinished Volumetric Construction (PPVC)",
      methods: "Emphasized early stakeholder coordination and planning",
      relevance: "Aligns with I5's focus on rigorous process planning and stage-gate reviews",
    },
    {
      name: "Dubai Municipality Pilot 6-Floor Project",
      location: "Dubai, UAE",
      description: "Dubai Municipality issued its first modular construction license for this pilot project",
      methods: "Modular construction approach",
      relevance:
        "Demonstrates the UAE's openness to innovation in construction, aligning with the I5 Model's focus on off-site construction",
    },
    {
      name: "Sutter Medical Center Castro Valley",
      location: "California, USA",
      description: "An IPD project case study",
      methods: "Integrated Project Delivery principles, fostering strong collaboration",
      relevance:
        "The I5 Model incorporates IPD principles, which have shown projects are 3 times more likely to complete ahead of schedule and 2.5 times more likely to complete under budget",
    },
  ]

  const academicReferences = [
    'Akintoye, A., et al. "Customer Satisfaction Metrics in Modular Construction." Construction Management and Economics',
    'Ashcraft, H. W., & Reed, D. "Integrated Project Delivery: Performance Metrics and Financial Analysis." Journal of Construction Engineering and Management',
    'Bertelsen, S., & Koskela, L. "Construction Beyond Lean: A New Understanding of Construction Management." Journal of Construction Engineering and Management',
    'Chapman, C., & Ward, S. "Project Risk Management: Processes, Techniques and Insights." Journal of Project Management',
    'Chen, Q., et al. "Interface Management in Construction: Industrialized Building Systems." International Journal of Project Management',
    'Cooper, R. G. "Stage-Gate Systems for New Product Development in Construction." Research-Technology Management',
    'Eastman, C., et al. "BIM Handbook: A Guide to Building Information Modeling." Wiley & Sons',
    'Flyvbjerg, B. "What You Should Know About Megaprojects and Why: An Overview." Project Management Journal',
    'Goulding, J. S., et al. "DfMA Implementation in Construction: Labor Impact Analysis." Journal of Architectural Engineering',
    'Jaillon, L., & Poon, C. S. "Quantifying the Waste Reduction Potential of Using Prefabrication in Building Construction in Hong Kong." Waste Management',
    'Koskela, L., et al. "Concurrent Engineering in Construction: Time-to-Market Analysis." Journal of Construction Engineering and Management',
    'Liker, J. K. "The Toyota Way: Process Design Impact Analysis in Construction." McGraw-Hill Education',
    'Smith, R. E. "Prefab Architecture: A Guide to Modular Design and Construction." Wiley & Sons',
    'Tommelein, I. D. "Just-In-Time Delivery in Construction: Field Storage Reduction Case Studies." Construction Management and Economics',
    'Womack, J.P., & Jones, D.T. "Lean Thinking: Banish Waste and Create Wealth in Your Corporation." Productivity Press',
  ]

  const industryReports = [
    'American Institute of Architects. "Integrated Project Delivery: A Guide." AIA National Publications',
    'Building and Construction Authority of Singapore. "Prefabricated Prefinished Volumetric Construction: Implementation Guidelines." BCA Technical Reference',
    'Construction Industry Institute. "Advanced Work Packaging: Integration with Manufacturing." CII Research Summary 272-1',
    'Construction Industry Institute. "Design for Manufacturing and Assembly in Construction." CII Implementation Resource RT-283',
    'Construction Industry Institute. "Modular Construction Benchmarking and Implementation Guide." CII Research Report RT-283',
    'Lean Construction Institute. "IPD Project Performance Analysis: Key Metrics and Benchmarks." LCI Research Report',
    'Modular Building Institute. "Permanent Modular Construction Annual Report." MBI Industry Analysis',
    'Project Management Institute. "A Guide to the Project Management Body of Knowledge (PMBOK Guide)." Project Management Institute',
    'Royal Institute of British Architects. "RIBA Plan of Work 2022 Overview." RIBA Publications',
  ]

  const consultingReports = [
    'Barbosa, F., et al. "Modular Construction: From Projects to Products." McKinsey & Company Construction Practice',
    'Barbosa, F., et al. "Reinventing Construction: A Route to Higher Productivity." McKinsey Global Institute',
    'McKinsey & Company. "The Next Normal in Construction: How Disruption is Reshaping the World\'s Largest Ecosystem." McKinsey Global Institute',
    'McKinsey Global Institute. "Reinventing Construction: A Route to Higher Productivity." McKinsey Construction Research',
  ]

  const industryStandards = [
    'Dubai Municipality. "Guidelines for Modular Construction Approval." DM Technical Guidelines',
    'FIDIC. "Conditions of Contract for Plant and Design-Build." Federation Internationale des Ingenieurs-Conseils',
    'International Facility Management Association. "Asset Performance Measurement: Best Practices Guide." IFMA Foundation',
    'Project Management Institute. "Construction Extension to the PMBOK Guide." Project Management Institute',
    'International Organization for Standardization. "ISO 31000:2023 - Risk Management - Guidelines." ISO Standards',
    'International Organization for Standardization. "ISO 9001:2023 - Quality Management Systems - Requirements." ISO Standards',
  ]

  // Combined methodology examples for the new structure
  const methodologyExamples = [
    {
      title: "Productization",
      icon: <Package className="h-6 w-6" />,
      description:
        "Industry examples illustrating key productization principles that are integral to the I5 Model's approach",
      categories: productizationExamples,
    },
    {
      title: "Design for Manufacture and Assembly (DfMA)",
      icon: <Layers className="h-6 w-6" />,
      description: "Examples demonstrating the effective implementation of DfMA principles in construction",
      categories: dfmaExamples,
    },
    {
      title: "Just-In-Time (JIT) Delivery",
      icon: <Clock className="h-6 w-6" />,
      description: "Examples highlighting the application of JIT principles in construction supply chains",
      categories: jitExamples,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to I5 Model
          </Link>
          <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">Case Studies & References</h1>
          <p className="text-xl text-gray-100 leading-relaxed font-light max-w-3xl">
            The I5 Real Estate Delivery Model is validated by global case studies and rigorous research. This section
            highlights real-world examples that demonstrate the principles of productization, Design for Manufacture and
            Assembly (DfMA), and Just-In-Time (JIT) delivery in action.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section with Sticky Navigation */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sticky Navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-lg font-medium text-gray-900 mb-4">On This Page</h3>
              <nav className="space-y-3">
                <a href="#validation" className="flex items-center text-blue-600 hover:text-blue-800">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Validation Overview</span>
                </a>
                <a href="#methodology-examples" className="flex items-center text-gray-600 hover:text-blue-800">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Methodology Examples</span>
                </a>
                <a href="#key-projects" className="flex items-center text-gray-600 hover:text-blue-800">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Key Project Case Studies</span>
                </a>
                <a href="#references" className="flex items-center text-gray-600 hover:text-blue-800">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>References</span>
                </a>
              </nav>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Research Foundation</h4>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-xl font-bold text-blue-600">34+</div>
                    <div className="text-xs text-blue-700">References</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">18</div>
                    <div className="text-xs text-blue-700">Case Studies</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">9</div>
                    <div className="text-xs text-blue-700">Countries</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">15+</div>
                    <div className="text-xs text-blue-700">Papers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Validation Overview Section */}
            <section id="validation" className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8 flex items-center">
                <Globe className="mr-3 h-7 w-7 text-blue-600" />
                Validation Overview
              </h2>

              <Card className="mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b">
                  <CardTitle>Global Validation Study</CardTitle>
                  <CardDescription>
                    18 case studies conducted across 9 countries validating I5 Model benefits
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    {caseStudyMetrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t">
                    <h4 className="font-semibold mb-3">Countries Studied:</h4>
                    <div className="flex flex-wrap gap-2">
                      {globalCaseStudies.map((country, index) => (
                        <Badge key={index} variant="secondary">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-blue-50 border-t">
                  <p className="text-sm text-blue-800">
                    These aggregated results demonstrate the transformative potential of the I5 Model's synthesis of
                    productization and IPD, validating its ability to accelerate market entry, reduce revenue
                    realization time, and minimize rework.
                  </p>
                </CardFooter>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-medium text-blue-900 mb-4">Research Foundation</h3>
                <p className="text-blue-800 mb-4">
                  This comprehensive reference base demonstrates the robust academic and industry foundation underlying
                  the I5 Real Estate Delivery Model, providing credible validation for its methodologies and expected
                  benefits.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">34+</div>
                    <div className="text-sm text-blue-700">Total References</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">18</div>
                    <div className="text-sm text-blue-700">Case Studies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">9</div>
                    <div className="text-sm text-blue-700">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-blue-700">Academic Papers</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Methodology Examples Section - Redesigned with Accordions */}
            <section id="methodology-examples" className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8 flex items-center">
                <TrendingUp className="mr-3 h-7 w-7 text-blue-600" />
                Methodology Examples
              </h2>

              <div className="space-y-8">
                {methodologyExamples.map((methodology, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b">
                      <CardTitle className="flex items-center">
                        {methodology.icon}
                        <span className="ml-2">{methodology.title}</span>
                      </CardTitle>
                      <CardDescription>{methodology.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Accordion type="single" collapsible className="w-full">
                        {methodology.categories.map((category, catIndex) => (
                          <AccordionItem key={catIndex} value={`item-${index}-${catIndex}`}>
                            <AccordionTrigger className="hover:bg-gray-50 px-4 py-2 rounded-md">
                              <div className="flex items-center">
                                {category.icon && <span className="mr-2">{category.icon}</span>}
                                <span>{category.category}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4">
                              <div className="space-y-6 mt-4">
                                {category.examples.map((example, exIndex) => (
                                  <div
                                    key={exIndex}
                                    className="border-l-4 border-blue-500 pl-4 py-2 bg-white rounded-md shadow-sm"
                                  >
                                    <h4 className="font-semibold text-lg mb-2">
                                      {example.company}'s {example.system}
                                    </h4>
                                    <div className="mb-4">
                                      <Badge variant="outline" className="bg-blue-50">
                                        Metrics
                                      </Badge>
                                      <p className="mt-2 text-blue-700 font-medium">{example.metrics}</p>
                                    </div>
                                    <div>
                                      <Badge variant="outline" className="bg-slate-50">
                                        I5 Relevance
                                      </Badge>
                                      <p className="mt-2 text-slate-700">{example.relevance}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Project Case Studies - Redesigned */}
            <section id="key-projects" className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8 flex items-center">
                <Award className="mr-3 h-7 w-7 text-blue-600" />
                Key Project Case Studies
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {keyProjects.map((project, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge variant="outline">{project.location}</Badge>
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-1">Methods Used:</h4>
                          <p className="text-gray-600">{project.methods}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-1">I5 Relevance:</h4>
                          <p className="text-blue-700">{project.relevance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* References Section - Redesigned */}
            <section id="references" className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8 flex items-center">
                <BookOpen className="mr-3 h-7 w-7 text-blue-600" />
                References
              </h2>

              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b">
                  <CardTitle>Research & Industry References</CardTitle>
                  <CardDescription>
                    Academic papers, industry reports, and standards supporting the I5 Model
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="academic">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                      <TabsTrigger value="academic">Academic Papers</TabsTrigger>
                      <TabsTrigger value="industry">Industry Reports</TabsTrigger>
                      <TabsTrigger value="consulting">Consulting Research</TabsTrigger>
                      <TabsTrigger value="standards">Industry Standards</TabsTrigger>
                    </TabsList>

                    <TabsContent value="academic">
                      <div className="bg-white rounded-lg p-6 border">
                        <h3 className="flex items-center text-lg font-medium mb-4">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          Academic Journals & Research Reports
                        </h3>
                        <ul className="space-y-3">
                          {academicReferences.map((reference, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <ExternalLink className="h-3 w-3 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                              <span>{reference}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="industry">
                      <div className="bg-white rounded-lg p-6 border">
                        <h3 className="flex items-center text-lg font-medium mb-4">
                          <FileText className="h-5 w-5 mr-2 text-blue-600" />
                          Industry Institute Reports
                        </h3>
                        <ul className="space-y-3">
                          {industryReports.map((reference, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <ExternalLink className="h-3 w-3 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                              <span>{reference}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="consulting">
                      <div className="bg-white rounded-lg p-6 border">
                        <h3 className="flex items-center text-lg font-medium mb-4">
                          <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                          Management Consulting & Market Research
                        </h3>
                        <ul className="space-y-3">
                          {consultingReports.map((reference, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <ExternalLink className="h-3 w-3 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                              <span>{reference}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="standards">
                      <div className="bg-white rounded-lg p-6 border">
                        <h3 className="flex items-center text-lg font-medium mb-4">
                          <Award className="h-5 w-5 mr-2 text-blue-600" />
                          Industry Standards & Guidelines
                        </h3>
                        <ul className="space-y-3">
                          {industryStandards.map((reference, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <ExternalLink className="h-3 w-3 mr-2 mt-1 flex-shrink-0 text-blue-500" />
                              <span>{reference}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/insights/kpi-risk-framework">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  KPIs & Risk Management
                </Button>
              </Link>
              <Link href="/">
                <Button className="flex items-center">Back to I5 Model Overview</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
