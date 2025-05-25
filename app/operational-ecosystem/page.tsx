"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Database,
  Cog,
  Building,
  BarChart3,
  Building2,
  Users,
  RotateCcw,
  Zap,
  Target,
  DollarSign,
  Shield,
  Settings,
  Monitor,
  Truck,
  Eye,
  Wifi,
  CheckCircle,
  ArrowRight,
  Link,
  Layers,
  Activity,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function OperationalEcosystemPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [expandedCards, setExpandedCards] = useState<string[]>([])

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
        duration: 0.5,
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
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsNavOpen(false)
    setActiveSection(sectionId)
  }

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]))
  }

  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "principles", "components", "architecture", "value-creation"]
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

  const sections = [
    { id: "introduction", label: "INTRO" },
    { id: "principles", label: "PRINCIPLES" },
    { id: "components", label: "COMPONENTS" },
    { id: "architecture", label: "ARCHITECTURE" },
    { id: "value-creation", label: "VALUE" },
  ]

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => (
    <motion.span className={className} initial="hidden" animate="visible">
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} custom={i}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  )

  return (
    <div className="min-h-screen bg-white font-mono text-xs">
      {/* Fixed Navigation */}
      <nav className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="px-3 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="text-sm font-bold tracking-tight">OPERATIONAL ECOSYSTEM</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "text-xs font-medium transition-all duration-300 hover:text-black relative px-2 py-1",
                    activeSection === section.id
                      ? "text-black bg-gray-100 rounded"
                      : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isNavOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200 py-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-3 gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "text-left text-xs font-medium transition-all duration-200 p-2 rounded",
                      activeSection === section.id ? "text-black bg-gray-100" : "text-gray-500 hover:text-gray-800",
                    )}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Introduction Section */}
      <section id="introduction" className="h-screen flex items-center justify-center relative pt-20 pb-3">
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-h-[calc(100vh-6rem)]">
          <div className="grid grid-cols-12 gap-3 items-center h-full">
            <div className="col-span-12 lg:col-span-7 space-y-3">
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight border-b-4 border-black pb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <AnimatedText text="OPERATIONAL ECOSYSTEM" />
              </motion.h1>

              <motion.h2
                className="text-sm md:text-base font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                The Integrated Technology Backbone of I5
              </motion.h2>

              <motion.div
                className="space-y-2 text-xs leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-gray-700">
                  The I5 Real Estate Delivery Model is enabled by a comprehensive <strong>Operational Ecosystem</strong>{" "}
                  – an integrated network of digital platforms, specialized construction technologies, and information
                  systems designed to work in concert across the entire development lifecycle.
                </p>
                <p className="text-gray-600">
                  This ecosystem represents a fundamental shift from fragmented, project-specific tools to an
                  integrated, data-centric approach that enables the productization and integrated delivery principles
                  at the heart of I5.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-2 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {[
                  {
                    icon: <Building2 className="h-4 w-4" />,
                    label: "Owner-Controlled Core",
                    desc: "Strategic platforms under direct control",
                  },
                  {
                    icon: <Users className="h-4 w-4" />,
                    label: "Partner Integration",
                    desc: "Specialized construction technologies",
                  },
                  {
                    icon: <RotateCcw className="h-4 w-4" />,
                    label: "Data-Centric Flow",
                    desc: "Continuous information exchange",
                  },
                  {
                    icon: <BarChart3 className="h-4 w-4" />,
                    label: "Performance Analytics",
                    desc: "Real-time insights and optimization",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 border border-gray-300 p-2 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center mb-1">
                      <span className="mr-2 text-gray-700">{item.icon}</span>
                      <span className="font-semibold text-xs">{item.label}</span>
                    </div>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <motion.div
                className="bg-gray-100 p-3 rounded-lg border-2 border-gray-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h3 className="text-center text-sm font-bold mb-3">Technology Governance Model</h3>

                <div className="space-y-2 mb-3">
                  <div className="bg-gray-900 text-white p-2 rounded text-center">
                    <div className="text-xs font-bold">OWNER CONTROL</div>
                    <div className="text-xs opacity-80">Strategic Platforms & Data</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-100 border border-blue-300 p-2 rounded text-center">
                      <div className="text-xs font-semibold">BoK Platform</div>
                      <div className="text-xs text-blue-700">Governance Hub</div>
                    </div>
                    <div className="bg-green-100 border border-green-300 p-2 rounded text-center">
                      <div className="text-xs font-semibold">AEC Platform</div>
                      <div className="text-xs text-green-700">Project Execution</div>
                    </div>
                  </div>

                  <div className="bg-gray-200 border border-gray-400 p-2 rounded text-center">
                    <div className="text-xs font-semibold">PARTNER TECHNOLOGIES</div>
                    <div className="text-xs text-gray-600">Specialized Construction Tools</div>
                  </div>
                </div>

                <div className="text-xs text-gray-600 space-y-1">
                  <p>
                    <strong>Key Principle:</strong> Owner maintains control over core platforms while leveraging partner
                    expertise in specialized construction technologies.
                  </p>
                  <p>
                    <strong>Integration:</strong> All systems connected through standardized APIs and data protocols.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section id="principles" className="h-screen flex items-center justify-center relative pt-20 pb-3 bg-gray-50">
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-h-[calc(100vh-6rem)]">
          <div className="text-center mb-4">
            <motion.h2
              className="text-xl md:text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Technology Principles
            </motion.h2>
            <motion.p
              className="text-xs text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Six fundamental principles guide the design and implementation of the I5 Operational Ecosystem
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                number: "1",
                icon: <Shield className="h-4 w-4" />,
                title: "Owner Control",
                description: "Direct control over core platforms, ensuring strategic alignment and IP protection",
                details:
                  "The Owner maintains direct control over platforms that are central to business strategy, competitive advantage, and intellectual property. This includes the BoK Platform (governance hub), Virtual Showroom (client engagement), and procurement of AEC and DfMA platforms that align with business objectives.",
                benefits: ["Strategic alignment", "IP protection", "Long-term value", "Vendor independence"],
              },
              {
                number: "2",
                icon: <RotateCcw className="h-4 w-4" />,
                title: "Enhance Existing Tech",
                description: "Leverage viable existing investments, minimizing disruption and maximizing ROI",
                details:
                  "Rather than wholesale replacement, the I5 approach identifies and enhances existing technology investments that provide value. This reduces implementation risk, preserves institutional knowledge, and maximizes return on previous technology investments.",
                benefits: ["Reduced risk", "Cost efficiency", "Faster adoption", "Knowledge preservation"],
              },
              {
                number: "3",
                icon: <CheckCircle className="h-4 w-4" />,
                title: "Vendor Neutrality",
                description: "Select based on capability and standards, avoiding vendor lock-in situations",
                details:
                  "Technology selection prioritizes open standards, interoperability, and capability over vendor relationships. This approach ensures flexibility, competitive pricing, and the ability to evolve the technology stack as needs change.",
                benefits: ["Flexibility", "Competitive pricing", "Future-proofing", "Best-of-breed solutions"],
              },
              {
                number: "4",
                icon: <Database className="h-4 w-4" />,
                title: "Data Centrality",
                description: "Treat data as primary asset with continuous, integrated information flow",
                details:
                  "Data is recognized as the organization's most valuable asset, with systems designed to capture, integrate, and leverage information across all processes. This enables real-time decision-making, predictive analytics, and continuous improvement.",
                benefits: ["Better decisions", "Predictive insights", "Process optimization", "Competitive advantage"],
              },
              {
                number: "5",
                icon: <Link className="h-4 w-4" />,
                title: "Integrated Ecosystem",
                description: "Connect platforms to eliminate silos and enable seamless workflows",
                details:
                  "All platforms and systems are connected through standardized APIs and data protocols, eliminating information silos and enabling seamless workflows. This integration is essential for the collaborative nature of IPD and the efficiency of productized delivery.",
                benefits: ["Workflow efficiency", "Reduced errors", "Real-time visibility", "Collaborative working"],
              },
              {
                number: "6",
                icon: <Target className="h-4 w-4" />,
                title: "BoK Governance Hub",
                description: "Central engine orchestrating critical business decision workflows",
                details:
                  "The Body of Knowledge (BoK) Platform serves as the central governance hub, orchestrating workflows across all other platforms. It maintains organizational knowledge, standards, and decision-making processes that ensure consistency and continuous improvement.",
                benefits: ["Consistent processes", "Knowledge retention", "Decision support", "Continuous improvement"],
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.number}
                className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleCard(`principle-${principle.number}`)}
              >
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="text-lg font-bold text-gray-600 mr-2">{principle.number}</div>
                      <div className="mr-2 text-gray-700">{principle.icon}</div>
                      <h3 className="font-semibold text-xs">{principle.title}</h3>
                    </div>
                    {expandedCards.includes(`principle-${principle.number}`) ? (
                      <ChevronDown className="h-3 w-3" />
                    ) : (
                      <ChevronRight className="h-3 w-3" />
                    )}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{principle.description}</p>

                  <AnimatePresence>
                    {expandedCards.includes(`principle-${principle.number}`) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 pt-2 mt-2"
                      >
                        <p className="text-xs text-gray-700 leading-relaxed mb-2">{principle.details}</p>
                        <div className="grid grid-cols-2 gap-1">
                          {principle.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-gray-50 px-2 py-1 rounded text-xs">
                              • {benefit}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-4 bg-white p-3 border border-gray-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-gray-700">
              <strong>Implementation Note:</strong> These principles work synergistically to create a technology
              ecosystem that supports both the productization and integrated delivery aspects of the I5 Model, while
              maintaining organizational control and flexibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Components Section */}
      <section id="components" className="h-screen flex items-center justify-center relative pt-20 pb-3">
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-h-[calc(100vh-6rem)]">
          <div className="text-center mb-4">
            <motion.h2
              className="text-xl md:text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Key Components of the I5 Digital Ecosystem
            </motion.h2>
          </div>

          <Tabs defaultValue="owner-platforms" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="owner-platforms" className="text-xs">
                  Owner Platforms
                </TabsTrigger>
                <TabsTrigger value="partner-tech" className="text-xs">
                  Partner Tech
                </TabsTrigger>
                <TabsTrigger value="integration" className="text-xs">
                  Integration
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="owner-platforms" className="space-y-3">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Core Owner Platforms */}
                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-sm font-semibold bg-gray-100 p-2 border-l-4 border-black">
                    Owner-Controlled Core Platforms
                  </h3>

                  <motion.div
                    className="grid grid-cols-1 gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Database className="h-4 w-4" />,
                        name: "BoK Platform",
                        type: "Owner-Created",
                        function: "Central governance hub orchestrating decision workflows and knowledge repository",
                        details:
                          "The Body of Knowledge Platform serves as the central nervous system of the I5 ecosystem. It maintains organizational standards, decision-making workflows, project templates, and lessons learned. The BoK orchestrates cross-platform workflows by pulling data from other systems and triggering actions based on business rules.",
                        capabilities: [
                          "Workflow orchestration",
                          "Knowledge management",
                          "Standards repository",
                          "Decision support",
                          "Performance analytics",
                          "Continuous improvement tracking",
                        ],
                      },
                      {
                        icon: <Monitor className="h-4 w-4" />,
                        name: "Virtual Showroom",
                        type: "Owner-Created",
                        function: "Interactive client engagement with 3D/VR visualization and configuration",
                        details:
                          "A sophisticated client engagement platform that allows customers to visualize, configure, and experience I5 products before construction. Integrates with the BoK for product standards and AEC for technical feasibility.",
                        capabilities: [
                          "3D/VR visualization",
                          "Product configuration",
                          "Client collaboration",
                          "Sales support",
                          "Marketing automation",
                          "Customer feedback collection",
                        ],
                      },
                      {
                        icon: <Cog className="h-4 w-4" />,
                        name: "DfMA Platform",
                        type: "Owner-Procured",
                        function: "Engineering for manufacturing and assembly with production optimization",
                        details:
                          "Specialized platform for Design for Manufacturing and Assembly, enabling the engineering of components for efficient factory production and on-site assembly. Critical for the productization aspect of I5.",
                        capabilities: [
                          "Manufacturing design",
                          "Assembly optimization",
                          "Component standardization",
                          "Production planning",
                          "Quality specifications",
                          "Supplier coordination",
                        ],
                      },
                      {
                        icon: <Building className="h-4 w-4" />,
                        name: "AEC Platform",
                        type: "Owner-Procured",
                        function: "Project execution hub with BIM, schedules, costs, and quality management",
                        details:
                          "Comprehensive Architecture, Engineering, and Construction platform managing all aspects of project execution. Serves as the operational backbone for project delivery within the I5 framework.",
                        capabilities: [
                          "BIM management",
                          "Schedule coordination",
                          "Cost control",
                          "Quality management",
                          "Document control",
                          "Field operations support",
                        ],
                      },
                    ].map((platform, index) => (
                      <motion.div
                        key={platform.name}
                        className="bg-gray-50 border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => toggleCard(`platform-${platform.name}`)}
                      >
                        <div className="p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="mr-2 text-gray-700">{platform.icon}</div>
                              <div>
                                <h4 className="text-xs font-semibold">{platform.name}</h4>
                                <p className="text-xs text-gray-600 italic">{platform.type}</p>
                              </div>
                            </div>
                            {expandedCards.includes(`platform-${platform.name}`) ? (
                              <ChevronDown className="h-3 w-3" />
                            ) : (
                              <ChevronRight className="h-3 w-3" />
                            )}
                          </div>

                          <p className="text-xs text-gray-700 mb-2">{platform.function}</p>

                          <AnimatePresence>
                            {expandedCards.includes(`platform-${platform.name}`) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-gray-200 pt-2 mt-2"
                              >
                                <p className="text-xs text-gray-700 leading-relaxed mb-2">{platform.details}</p>
                                <div className="grid grid-cols-2 gap-1">
                                  {platform.capabilities.map((capability, idx) => (
                                    <div key={idx} className="bg-white px-2 py-1 rounded text-xs border">
                                      • {capability}
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Supporting Systems */}
                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-sm font-semibold bg-gray-100 p-2 border-l-4 border-black">
                    Supporting Owner Systems
                  </h3>

                  <motion.div
                    className="grid grid-cols-2 gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Truck className="h-4 w-4" />,
                        name: "SCM Platform",
                        desc: "Supply chain management and logistics coordination",
                        type: "Procured",
                      },
                      {
                        icon: <DollarSign className="h-4 w-4" />,
                        name: "Financial Systems",
                        desc: "Cost management and financial reporting",
                        type: "Existing/Enhanced",
                      },
                      {
                        icon: <Users className="h-4 w-4" />,
                        name: "CRM Platform",
                        desc: "Customer relationship and sales management",
                        type: "Existing/Enhanced",
                      },
                      {
                        icon: <BarChart3 className="h-4 w-4" />,
                        name: "Analytics Platform",
                        desc: "Business intelligence and performance analytics",
                        type: "Procured",
                      },
                      {
                        icon: <CheckCircle className="h-4 w-4" />,
                        name: "Quality Systems",
                        desc: "Quality assurance and compliance management",
                        type: "Integrated",
                      },
                      {
                        icon: <Database className="h-4 w-4" />,
                        name: "Document Management",
                        desc: "Centralized document control and versioning",
                        type: "Integrated",
                      },
                    ].map((system, index) => (
                      <motion.div
                        key={system.name}
                        className="bg-blue-50 border border-blue-200 p-2 text-center hover:bg-blue-100 transition-colors"
                        variants={cardVariants}
                        whileHover="hover"
                      >
                        <div className="flex justify-center mb-1 text-blue-700">{system.icon}</div>
                        <div className="font-semibold text-xs mb-1">{system.name}</div>
                        <div className="text-xs text-blue-700 mb-1">{system.desc}</div>
                        <div className="text-xs text-blue-600 italic">({system.type})</div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div className="bg-white p-3 border border-gray-300 rounded" variants={itemVariants}>
                    <h4 className="text-xs font-semibold mb-2">Platform Integration Strategy</h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>Owner-Created:</strong> Platforms developed specifically for I5 requirements (BoK,
                        Virtual Showroom)
                      </p>
                      <p>
                        <strong>Owner-Procured:</strong> Best-of-breed solutions selected and configured for I5 (AEC,
                        DfMA)
                      </p>
                      <p>
                        <strong>Enhanced Existing:</strong> Current systems upgraded and integrated into the ecosystem
                      </p>
                      <p>
                        <strong>Data Flow:</strong> All platforms connected through standardized APIs and data protocols
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="partner-tech" className="space-y-3">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-sm font-semibold bg-gray-100 p-2 border-l-4 border-black">
                    Partner-Owned Construction Technologies
                  </h3>

                  <motion.div
                    className="grid grid-cols-2 gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Settings className="h-4 w-4" />,
                        name: "MES Systems",
                        type: "Factory Automation",
                        desc: "Manufacturing Execution Systems for production control",
                        details:
                          "Partner-owned systems that control factory production processes, quality control, and output tracking. Data feeds into Owner's AEC and SCM platforms for coordination.",
                      },
                      {
                        icon: <Cog className="h-4 w-4" />,
                        name: "Site Robotics",
                        type: "Construction Tech",
                        desc: "Automated construction and assembly equipment",
                        details:
                          "Robotic systems for precision assembly, material handling, and construction tasks. Performance data integrated with Owner's quality and progress tracking systems.",
                      },
                      {
                        icon: <Truck className="h-4 w-4" />,
                        name: "Logistics Tracking",
                        type: "Supply Chain",
                        desc: "Real-time component tracking and delivery",
                        details:
                          "GPS and RFID-based tracking systems for components from factory to site. Integration with Owner's SCM platform for just-in-time delivery coordination.",
                      },
                      {
                        icon: <CheckCircle className="h-4 w-4" />,
                        name: "Quality Systems",
                        type: "QA/QC Tech",
                        desc: "Automated quality inspection and testing",
                        details:
                          "Partner-operated quality control systems including automated inspection, testing equipment, and compliance verification. Results feed into Owner's quality management systems.",
                      },
                      {
                        icon: <Layers className="h-4 w-4" />,
                        name: "BIM Tools",
                        type: "Design Tech",
                        desc: "Specialized modeling and simulation software",
                        details:
                          "Partner-specific BIM tools for detailed engineering and simulation. Models and data synchronized with Owner's AEC platform for coordination.",
                      },
                      {
                        icon: <Wifi className="h-4 w-4" />,
                        name: "IoT Sensors",
                        type: "Monitoring",
                        desc: "Environmental and performance monitoring",
                        details:
                          "Sensor networks for monitoring construction conditions, material performance, and environmental factors. Data streams to Owner's analytics platform.",
                      },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="bg-gray-200 border-2 border-gray-500 p-2 hover:bg-gray-300 transition-colors cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => toggleCard(`tech-${tech.name}`)}
                      >
                        <div className="text-center">
                          <div className="flex justify-center mb-1 text-gray-700">{tech.icon}</div>
                          <div className="font-semibold text-xs mb-1">{tech.name}</div>
                          <div className="text-xs text-gray-600 mb-1">{tech.type}</div>
                          <div className="text-xs text-gray-700">{tech.desc}</div>

                          <AnimatePresence>
                            {expandedCards.includes(`tech-${tech.name}`) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t border-gray-400 pt-2 mt-2 text-left"
                              >
                                <p className="text-xs text-gray-700 leading-relaxed">{tech.details}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-sm font-semibold bg-gray-100 p-2 border-l-4 border-black">
                    Technology Governance Framework
                  </h3>

                  <motion.div className="bg-white p-3 border border-gray-300 rounded space-y-3" variants={itemVariants}>
                    <div>
                      <h4 className="text-xs font-semibold mb-2">Partner Technology Requirements</h4>
                      <div className="space-y-1 text-xs text-gray-700">
                        <p>
                          <strong>Data Integration:</strong> Mandatory data feeds into Owner platforms via standardized
                          APIs
                        </p>
                        <p>
                          <strong>Security Standards:</strong> Compliance with Owner-defined cybersecurity protocols
                        </p>
                        <p>
                          <strong>Performance Metrics:</strong> Real-time reporting of operational and quality metrics
                        </p>
                        <p>
                          <strong>Interoperability:</strong> Support for open standards and data exchange formats
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold mb-2">Owner Control Mechanisms</h4>
                      <div className="space-y-1 text-xs text-gray-700">
                        <p>
                          <strong>Technical Standards:</strong> Owner defines API specifications and data formats
                        </p>
                        <p>
                          <strong>Performance SLAs:</strong> Service level agreements for system availability and
                          response
                        </p>
                        <p>
                          <strong>Data Ownership:</strong> All operational data belongs to Owner regardless of source
                          system
                        </p>
                        <p>
                          <strong>Audit Rights:</strong> Owner maintains rights to audit partner technology compliance
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold mb-2">Integration Benefits</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {[
                          "Specialized expertise",
                          "Reduced capital investment",
                          "Technology innovation",
                          "Risk distribution",
                          "Scalability",
                          "Competitive selection",
                        ].map((benefit, idx) => (
                          <div key={idx} className="bg-gray-50 px-2 py-1 rounded text-xs">
                            • {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="integration" className="space-y-3">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-sm font-semibold bg-gray-100 p-2 border-l-4 border-black">
                    Integration Architecture
                  </h3>

                  <motion.div className="bg-white p-3 border border-gray-300 rounded" variants={itemVariants}>
                    <h4 className="text-xs font-semibold mb-2 flex items-center">
                      <Link className="h-3 w-3 mr-1" />
                      Digital Thread Implementation
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">Design Phase</span>
                        <span className="text-gray-600">AEC/DfMA → BoK Standards</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">Production Phase</span>
                        <span className="text-gray-600">Partner Tech → AEC/DfMA</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">Assembly Phase</span>
                        <span className="text-gray-600">Quality/SCM Integration</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">Operations Phase</span>
                        <span className="text-gray-600">Digital Twin Feedback</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">Improvement Phase</span>
                        <span className="text-gray-600">BoK/Analytics Refinement</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className="bg-white p-3 border border-gray-300 rounded" variants={itemVariants}>
                    <h4 className="text-xs font-semibold mb-2 flex items-center">
                      <Settings className="h-3 w-3 mr-1" />
                      API and Middleware Framework
                    </h4>
                    <div className="space-y-2 text-xs text-gray-700">
                      <p>
                        <strong>RESTful APIs:</strong> Standardized REST interfaces for all platform communications
                      </p>
                      <p>
                        <strong>Event-Driven Architecture:</strong> Real-time event streaming for immediate data
                        synchronization
                      </p>
                      <p>
                        <strong>Data Lake Integration:</strong> Centralized data repository for analytics and reporting
                      </p>
                      <p>
                        <strong>Security Layer:</strong> OAuth 2.0 and encryption for all data exchanges
                      </p>
                      <p>
                        <strong>Monitoring:</strong> Real-time monitoring of all integration points and data flows
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div className="space-y-3" variants={itemVariants}>
                  <h3 className="text-sm font-semibold bg-gray-100 p-2 border-l-4 border-black">
                    Data Management Strategy
                  </h3>

                  <motion.div
                    className="grid grid-cols-1 gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <Database className="h-3 w-3" />,
                        title: "Master Data Management",
                        desc: "Centralized management of core business entities",
                        details:
                          "Single source of truth for projects, products, suppliers, and customers across all platforms",
                      },
                      {
                        icon: <Activity className="h-3 w-3" />,
                        title: "Real-Time Synchronization",
                        desc: "Immediate data updates across all connected systems",
                        details:
                          "Event-driven architecture ensures all platforms have current information for decision-making",
                      },
                      {
                        icon: <CheckCircle className="h-3 w-3" />,
                        title: "Data Quality Assurance",
                        desc: "Automated validation and cleansing processes",
                        details: "Built-in data quality rules and validation to ensure accuracy and consistency",
                      },
                      {
                        icon: <BarChart3 className="h-3 w-3" />,
                        title: "Analytics and Reporting",
                        desc: "Unified reporting across all business functions",
                        details: "Consolidated dashboards and reports drawing from all integrated systems",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bg-blue-50 border border-blue-200 p-2 hover:bg-blue-100 transition-colors cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick={() => toggleCard(`data-${item.title}`)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center">
                            <span className="mr-1 text-blue-700">{item.icon}</span>
                            <h4 className="text-xs font-semibold">{item.title}</h4>
                          </div>
                          {expandedCards.includes(`data-${item.title}`) ? (
                            <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ChevronRight className="h-3 w-3" />
                          )}
                        </div>
                        <p className="text-xs text-blue-700 mb-1">{item.desc}</p>

                        <AnimatePresence>
                          {expandedCards.includes(`data-${item.title}`) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-blue-300 pt-1 mt-1"
                            >
                              <p className="text-xs text-blue-800 leading-relaxed">{item.details}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div className="bg-white p-3 border border-gray-300 rounded" variants={itemVariants}>
                    <h4 className="text-xs font-semibold mb-2 flex items-center">
                      <Target className="h-3 w-3 mr-1" />
                      Integration Success Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { metric: "Data Accuracy", target: ">99.5%" },
                        { metric: "System Uptime", target: ">99.9%" },
                        { metric: "Response Time", target: "<2 seconds" },
                        { metric: "Integration Points", target: "100% monitored" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-gray-50 p-2 rounded text-center">
                          <div className="text-xs font-semibold">{item.metric}</div>
                          <div className="text-xs text-gray-600">{item.target}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="h-screen flex items-center justify-center relative pt-20 pb-3 bg-gray-50">
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-h-[calc(100vh-6rem)]">
          <div className="text-center mb-4">
            <motion.h2
              className="text-xl md:text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Conceptual Architecture and Integration
            </motion.h2>
          </div>

          <div className="grid grid-cols-12 gap-3">
            {/* Digital Thread Visualization */}
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                className="bg-white p-4 border-2 border-gray-300 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-center text-sm font-semibold mb-4 uppercase tracking-wider text-gray-600 flex items-center justify-center">
                  <Link className="h-4 w-4 mr-2" />
                  Digital Thread: Data Flow Across Lifecycle
                </h3>

                <div className="grid grid-cols-5 gap-2 mb-4">
                  {[
                    {
                      label: "Design",
                      platforms: "AEC/DfMA\nBoK Standards",
                      color: "bg-blue-100 border-blue-300",
                      icon: <Layers className="h-3 w-3" />,
                      details:
                        "Initial design using BoK standards, AEC platform for coordination, DfMA for manufacturability",
                    },
                    {
                      label: "Production",
                      platforms: "Partner Tech\n→ AEC/DfMA",
                      color: "bg-green-100 border-green-300",
                      icon: <Settings className="h-3 w-3" />,
                      details:
                        "Factory production using partner MES systems, data flowing to Owner's AEC and DfMA platforms",
                    },
                    {
                      label: "Assembly",
                      platforms: "Quality/SCM\nIntegration",
                      color: "bg-yellow-100 border-yellow-300",
                      icon: <Cog className="h-3 w-3" />,
                      details:
                        "On-site assembly with quality control and supply chain coordination through integrated systems",
                    },
                    {
                      label: "Operations",
                      platforms: "Digital Twin\nFeedback",
                      color: "bg-purple-100 border-purple-300",
                      icon: <Monitor className="h-3 w-3" />,
                      details:
                        "Building operations with digital twin providing performance feedback and optimization insights",
                    },
                    {
                      label: "Improvement",
                      platforms: "BoK/Analytics\nRefinement",
                      color: "bg-red-100 border-red-300",
                      icon: <Target className="h-3 w-3" />,
                      details:
                        "Continuous improvement through analytics, lessons learned captured in BoK for future projects",
                    },
                  ].map((node, index) => (
                    <motion.div
                      key={node.label}
                      className={`${node.color} border-2 p-2 text-center hover:shadow-md transition-all cursor-pointer`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      onClick={() => toggleCard(`flow-${node.label}`)}
                    >
                      <div className="flex justify-center mb-1">{node.icon}</div>
                      <div className="font-semibold text-xs mb-1">{node.label}</div>
                      <div className="text-xs whitespace-pre-line">{node.platforms}</div>

                      <AnimatePresence>
                        {expandedCards.includes(`flow-${node.label}`) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-300 pt-1 mt-1"
                          >
                            <p className="text-xs text-gray-700 leading-relaxed">{node.details}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                  <span>Continuous Data Flow</span>
                  <ArrowRight className="h-3 w-3" />
                  <span>Real-time Integration</span>
                  <ArrowRight className="h-3 w-3" />
                  <span>Feedback Loops</span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  {
                    title: "Digital Thread",
                    desc: "Continuous data flow from design through execution to operations with feedback loops",
                    icon: <Link className="h-4 w-4" />,
                  },
                  {
                    title: "BoK Governance Hub",
                    desc: "Orchestrates cross-platform workflows by pulling data and triggering actions",
                    icon: <Target className="h-4 w-4" />,
                  },
                  {
                    title: "Integration Framework",
                    desc: "APIs and middleware enable secure, standardized data exchange",
                    icon: <Settings className="h-4 w-4" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-white p-3 border border-gray-300 text-center hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center mb-1 text-gray-700">{item.icon}</div>
                    <h4 className="font-semibold text-xs mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-700">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Architecture Principles */}
            <div className="col-span-12 lg:col-span-4">
              <motion.div
                className="bg-white p-3 border border-gray-300 mb-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold mb-3 flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Architecture Principles
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      icon: <Layers className="h-3 w-3" />,
                      principle: "Modularity",
                      desc: "Loosely coupled, highly cohesive components",
                    },
                    {
                      icon: <BarChart3 className="h-3 w-3" />,
                      principle: "Scalability",
                      desc: "Horizontal and vertical scaling capabilities",
                    },
                    {
                      icon: <Shield className="h-3 w-3" />,
                      principle: "Resilience",
                      desc: "Fault tolerance and disaster recovery",
                    },
                    {
                      icon: <Eye className="h-3 w-3" />,
                      principle: "Security",
                      desc: "End-to-end encryption and access control",
                    },
                    {
                      icon: <Activity className="h-3 w-3" />,
                      principle: "Observability",
                      desc: "Comprehensive monitoring and logging",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.principle}
                      className="bg-gray-50 p-2 rounded border flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="mr-2 text-gray-700 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-xs font-semibold">{item.principle}</div>
                        <div className="text-xs text-gray-600">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-white p-3 border border-gray-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold mb-3 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Implementation Phases
                </h3>
                <div className="space-y-2">
                  {[
                    { phase: "Phase 1", desc: "Core Owner platforms deployment" },
                    { phase: "Phase 2", desc: "Partner technology integration" },
                    { phase: "Phase 3", desc: "Advanced analytics and AI" },
                    { phase: "Phase 4", desc: "Ecosystem optimization" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.phase}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-xs font-semibold">{item.phase}</div>
                        <div className="text-xs text-gray-600">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation Section */}
      <section id="value-creation" className="h-screen flex items-center justify-center relative pt-20 pb-3">
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-h-[calc(100vh-6rem)]">
          <div className="text-center mb-4">
            <motion.h2
              className="text-xl md:text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Value Creation Through the Ecosystem
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Operational Efficiency",
                description: "Streamlined workflows and automated data exchange reduce time and costs",
                metrics: ["30-50% faster delivery", "25% reduction in coordination time", "40% fewer manual processes"],
                details:
                  "The integrated ecosystem eliminates manual data entry, reduces coordination overhead, and enables parallel workflows that significantly compress project timelines.",
              },
              {
                icon: <Target className="h-5 w-5" />,
                title: "Better Decisions",
                description: "Real-time, consolidated data enables faster, more informed decision-making",
                metrics: ["Real-time visibility", "Predictive analytics", "Risk early warning"],
                details:
                  "Decision-makers have access to current, accurate data from all systems, enabling proactive management and reducing the impact of issues through early detection.",
              },
              {
                icon: <RotateCcw className="h-5 w-5" />,
                title: "Continuous Improvement",
                description: "Performance data and feedback enable systematic analysis and refinement",
                metrics: ["3-5% improvement per iteration", "Systematic learning capture", "Best practice propagation"],
                details:
                  "The BoK platform captures lessons learned and performance data, enabling systematic improvement of products, processes, and outcomes across all projects.",
              },
              {
                icon: <DollarSign className="h-5 w-5" />,
                title: "Technology ROI",
                description: "Owner Control and Vendor Neutrality maximize return on technology investment",
                metrics: ["Reduced vendor lock-in", "Competitive selection", "Long-term value"],
                details:
                  "Strategic control over core platforms and vendor-neutral approach ensures maximum value from technology investments while maintaining flexibility for future evolution.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-900 text-white p-3 hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleCard(`value-${value.title}`)}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-2 text-white">{value.icon}</div>
                  <h3 className="font-semibold text-xs mb-2">{value.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-2">{value.description}</p>

                  <AnimatePresence>
                    {expandedCards.includes(`value-${value.title}`) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-700 pt-2 mt-2 text-left"
                      >
                        <p className="text-xs text-gray-300 leading-relaxed mb-2">{value.details}</p>
                        <div className="space-y-1">
                          {value.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-gray-800 px-2 py-1 rounded text-xs">
                              • {metric}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <motion.div
              className="bg-white p-4 border border-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold mb-3 flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Quantified Business Impact
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    metric: "Schedule Compression",
                    value: "30-50%",
                    desc: "Faster project delivery",
                    icon: <Zap className="h-3 w-3" />,
                  },
                  {
                    metric: "Cost Reduction",
                    value: "15-25%",
                    desc: "Lower total project cost",
                    icon: <DollarSign className="h-3 w-3" />,
                  },
                  {
                    metric: "Quality Improvement",
                    value: "60-80%",
                    desc: "Fewer defects and rework",
                    icon: <CheckCircle className="h-3 w-3" />,
                  },
                  {
                    metric: "Data Accuracy",
                    value: ">99%",
                    desc: "Reliable decision-making",
                    icon: <Database className="h-3 w-3" />,
                  },
                  {
                    metric: "Process Efficiency",
                    value: "40%",
                    desc: "Reduced manual effort",
                    icon: <Settings className="h-3 w-3" />,
                  },
                  {
                    metric: "Risk Mitigation",
                    value: "70%",
                    desc: "Earlier issue detection",
                    icon: <Shield className="h-3 w-3" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.metric}
                    className="bg-gray-50 p-2 rounded border text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center mb-1 text-gray-700">{item.icon}</div>
                    <div className="text-lg font-bold text-gray-800">{item.value}</div>
                    <div className="text-xs font-semibold">{item.metric}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 border border-gray-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold mb-3 flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Strategic Advantages
              </h3>
              <div className="space-y-2">
                {[
                  {
                    icon: <Building2 className="h-3 w-3" />,
                    advantage: "Competitive Differentiation",
                    desc: "Unique capability to deliver faster, higher quality projects with predictable outcomes",
                  },
                  {
                    icon: <BarChart3 className="h-3 w-3" />,
                    advantage: "Scalable Growth",
                    desc: "Technology platform enables rapid scaling without proportional increase in overhead",
                  },
                  {
                    icon: <Target className="h-3 w-3" />,
                    advantage: "Market Leadership",
                    desc: "First-mover advantage in industrialized real estate delivery methods",
                  },
                  {
                    icon: <Cog className="h-3 w-3" />,
                    advantage: "Innovation Platform",
                    desc: "Foundation for continuous innovation and adaptation to market changes",
                  },
                  {
                    icon: <Shield className="h-3 w-3" />,
                    advantage: "Risk Management",
                    desc: "Systematic approach to identifying and mitigating project and business risks",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.advantage}
                    className="bg-gray-50 p-2 rounded border flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="mr-2 text-gray-700 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="text-xs font-semibold mb-1">{item.advantage}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-gray-100 p-4 border-2 border-gray-300 text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              The I5 Operational Ecosystem provides the robust technological foundation necessary to move beyond
              traditional limitations, enabling a truly integrated, data-driven, and continuously improving approach to
              real estate development. This ecosystem transforms how organizations conceive, design, manufacture,
              assemble, and operate buildings, creating sustainable competitive advantages through technology
              excellence.
            </p>
            <div className="text-center">
              <p className="font-semibold text-sm mb-2">
                For detailed technical guidelines, implementation roadmaps, and platform specifications, refer to the I5
                Model Technology Principles and Guidelines (Sections 2, 3, 5-9) and Chapter 6 of the I5 Model Handbook
                2025.
              </p>
              <p className="text-xs text-gray-600 italic">
                (Content derived from I5 HB: Chapter 6, and I5 Tech HB: Sections 2, 3, 5-9.) [^3]
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
