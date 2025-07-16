"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Settings,
  Building2,
  FileText,
  BarChart3,
  Layers,
  Workflow,
  Database,
  Cloud,
  Shield,
  Cpu,
  Network,
  Monitor,
  Lock,
  Globe,
  ArrowRight,
  ChevronDown,
  Eye,
  Cog,
  Activity,
  Truck,
  Factory,
  Smartphone,
  Code,
  Search,
  Gauge,
  Home,
  Hammer,
  ConeIcon as Crane,
  Package,
  Crown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export default function OperationalEcosystemPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(null)
  const [expandedContainer, setExpandedContainer] = useState<string | null>(null)

  const [passwordInput, setPasswordInput] = useState("")
  const [isPasswordVerified, setIsPasswordVerified] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-play card rotation
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % 6)
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const verifyPassword = () => {
    if (passwordInput === "i5model2025eco") {
      setIsPasswordVerified(true)
      setShowPasswordModal(false)
    } else {
      alert("Incorrect password. Please try again.")
    }
  }

  const tabs = [
    "Overview of I5\nOperational Ecosystem",
    "Owner-Controlled\nCore Platforms",
    "Partner-Owned\nConstruction Technologies",
    "Ecosystem Architecture\n& Data Flow",
    "Technical Deep Dive\n& Implementation",
    "Detailed Technical\nSpecifications",
  ]

  const corePrinciples = [
    {
      title: "Owner Control",
      description: "The Real Estate Developer explicitly owns, administers, and controls core digital platforms",
      icon: <Shield className="h-8 w-8" strokeWidth={1} />,
      color: "blue",
      details:
        "The Owner implementing I5 must explicitly own, administer, update, and control the core digital platforms (BoK, VS, DfMA, AEC, SCM, Financials, CRM, Operational Systems, IT Monitoring) and the strategic data they contain. This ensures strategic alignment, intellectual property protection, and integrated governance. While partners receive defined access, ultimate administration and technical control remain with the Owner.",
    },
    {
      title: "Enhance and Supplement Existing Technologies",
      description: "Prioritizes integrating and enhancing viable technologies rather than wholesale replacement",
      icon: <Settings className="h-8 w-8" strokeWidth={1} />,
      color: "green",
      details:
        "The I5 Model prioritizes integrating and enhancing existing viable technologies rather than wholesale replacement. This involves a thorough technology assessment to evaluate functional capabilities and, critically, technical suitability for inclusion in the I5 ecosystem, assessing factors like technical stack, architecture, scalability, data models, security, and especially API integration capabilities.",
    },
    {
      title: "Vendor Neutrality",
      description: "Technology selection based on functional capabilities and interoperability standards",
      icon: <Globe className="h-8 w-8" strokeWidth={1} />,
      color: "purple",
      details:
        "Technology solutions are selected based on functional capabilities and strict adherence to interoperability standards, rather than specific vendor preference. Platforms must be capable of exchanging data and enabling workflow orchestration via well-documented and standardized APIs (e.g., IFC for BIM, JSON/XML for data).",
    },
    {
      title: "Data Centrality and the Digital Thread",
      description: "Data treated as primary deliverable with unified logical data model",
      icon: <Database className="h-8 w-8" strokeWidth={1} />,
      color: "orange",
      details:
        "Data is treated as a primary project, asset, and organizational deliverable, not a byproduct, and is actively captured, structured, managed, secured, integrated, accessible, and leveraged for decision-making. This principle ensures a unified logical data model, striving for a single source of truth for critical information categories. This structured, integrated data forms the essential technical foundation for the operational Digital Twin.",
    },
    {
      title: "The Integrated Ecosystem",
      description: "Seamless workflows and data flow across entire real estate delivery lifecycle",
      icon: <Network className="h-8 w-8" strokeWidth={1} />,
      color: "emerald",
      details:
        "This principle emphasizes technically connecting various platforms and systems (Owner-controlled and integrated Partner systems) to ensure seamless workflows, efficient data flow, and holistic visibility across the entire real estate delivery and asset lifecycle. This includes mandating data feeds from Partner-owned Construction Technologies into appropriate Owner platforms.",
    },
    {
      title: "The BoK as Configurable Governance Hub",
      description: "Central engine for managing critical business decision workflows",
      icon: <Cpu className="h-8 w-8" strokeWidth={1} />,
      color: "indigo",
      details:
        "The Body of Knowledge (BoK) platform is the central, active engine responsible for managing critical business decision workflows and ensuring alignment with defined organizational governance rules. It provides technical tools for business users to define and configure governance rules (SOPs, Delegations of Authority), receives decision requests (often triggered by other platforms), pulls necessary contextual data via APIs, vets requests, and orchestrates cross-system actions in other functional platforms.",
    },
  ]

  const ownerPlatforms = [
    {
      name: "Body of Knowledge (BoK)",
      description: "Central Configurable Governance Hub and organizational knowledge repository",
      icon: <Database className="h-12 w-12" strokeWidth={1} />,
      features: [
        "Governance Rules Management (SOPs, DOA)",
        "Decision Orchestration Engine",
        "Standards Library & Repository",
        "Process Guidelines & Workflows",
        "Historical Decision Records",
        "Lessons Learned Database",
      ],
      color: "blue",
      details:
        "The BoK Platform serves as the central Configurable Governance Hub and organizational knowledge repository. It is the dynamic engine for critical business decisions, housing configured governance rules (e.g., Standard Operating Procedures (SOPs), Delegations of Authority (DOA)). The BoK receives decision requests (which can be triggered by data from other integrated platforms), pulls necessary contextual data from those systems via APIs, vets requests against defined rules, and orchestrates or triggers necessary actions in relevant functional platforms upon determination. This platform is Owner-created and is assumed to be a web-based application hosted in the cloud.",
    },
    {
      name: "Virtual Showroom (VS)",
      description: "Web-based 3D configurator and sales front-end platform",
      icon: <Monitor className="h-12 w-12" strokeWidth={1} />,
      features: [
        "3D Product Visualization & VR",
        "Real-time Configuration Engine",
        "Customer Feedback Capture",
        "Sales Team Integration",
        "BIM Model Streaming",
        "Configuration Rules Application",
      ],
      color: "green",
      details:
        "The Virtual Showroom (VS) is a web-based 3D configurator and sales front-end. Its functional role is to host a detailed product representation and interactive configurator for clients and sales teams. It streams optimized BIM/asset models (from the AEC/CDE), applies BoK configuration rules in real-time, and captures customer choices and feedback into CRM and AEC. The VS serves as a crucial data source for customer preferences and flags critical deviation requests to the BoK for governance. This platform is also Owner-created and assumed to be a web-based application hosted in the cloud.",
    },
    {
      name: "Design for Manufacture and Assembly (DfMA)",
      description: "Engineering and preparation for off-site manufacturing and assembly",
      icon: <Cog className="h-12 w-12" strokeWidth={1} />,
      features: [
        "Manufacturing Constraints Analysis",
        "Assembly Sequence Optimization",
        "Shop Drawings Generation",
        "Bills of Materials (BOMs)",
        "CNC File Generation",
        "Tolerance Management",
      ],
      color: "purple",
      details:
        "The DfMA Platform manages the detailed engineering and preparation for off-site manufacturing and on-site assembly. It receives design data, primarily from the AEC platform (using IFC), and applies manufacturing constraints and DfMA principles to analyze designs for producibility and assembly efficiency. The platform translates validated design intent into manufacturing-ready documentation, simulates assembly sequences, and manages detailed tolerances and interface specifications. It also integrates feedback data from manufacturing and assembly execution to refine designs and DfMA standards, feeding back to the BoK.",
    },
    {
      name: "Architecture, Engineering, and Construction (AEC)",
      description: "Central hub for project execution and Building Information Modeling",
      icon: <Building2 className="h-12 w-12" strokeWidth={1} />,
      features: [
        "Integrated Building Information Model (BIM)",
        "Project Schedule Management",
        "Cost Management Integration",
        "Quality Verification Systems",
        "Issue Tracking & Change Orders",
        "Common Data Environment (CDE)",
        "Field Construction Management",
        "As-Built Documentation",
      ],
      color: "orange",
      details:
        "The AEC Platform serves as the central hub for project execution information and collaboration throughout the delivery process (Phases 1-5). It hosts the integrated Building Information Model (BIM) as a primary source of truth (using IFC for interoperability) and manages the project schedule and costs (via integration). The AEC platform supports on-site construction management (via a Field module), documents quality verification, manages issue tracking and change orders, and acts as the Common Data Environment (CDE) for all project documentation. The As-Built data captured and validated within the AEC platform forms the crucial foundation for the operational Digital Twin.",
    },
    {
      name: "Supply Chain Management (SCM)",
      description: "Comprehensive supply chain and procurement coordination",
      icon: <Workflow className="h-12 w-12" strokeWidth={1} />,
      features: [
        "Supplier Relationship Management",
        "Purchase Order Management",
        "Inventory Control Systems",
        "Logistics Coordination",
        "Demand Signal Processing",
        "Financial Approvals Integration",
      ],
      color: "emerald",
      details:
        "This system manages all aspects of the supply chain within the I5 Model, from supplier relationship management to purchasing, inventory, and logistics coordination. It integrates design demand signals (BOMs from AEC/DfMA) and financial approvals with supplier and logistics execution data (from Partner Tech feeds).",
    },
    {
      name: "Financial Systems",
      description: "Comprehensive financial management and reporting",
      icon: <BarChart3 className="h-12 w-12" strokeWidth={1} />,
      features: [
        "Budget Management & Planning",
        "Actual Cost Tracking",
        "Payment Processing",
        "Cost Control Reporting",
        "Financial Reporting & Analytics",
        "Project Financial Management",
      ],
      color: "indigo",
      details:
        "These systems manage all financial aspects of I5 projects and the operational phase, serving as the authoritative source for financial truth. This includes budgeting, actual cost tracking, payment processing, cost control reporting, and overall financial reporting.",
    },
    {
      name: "Operational Systems",
      description: "Post-handover facility management and building operations",
      icon: <Home className="h-12 w-12" strokeWidth={1} />,
      features: [
        "Facility Management",
        "Building Performance Monitoring",
        "Maintenance Management (CMMS)",
        "Operational Cost Tracking",
        "Digital Twin Operations",
        "IoT/BMS Integration",
      ],
      color: "teal",
      details:
        "Following project handover, these systems support facility management, monitor building performance (integrating sensor data from IoT/BMS and Partner-maintained operational tech), manage maintenance activities (CMMS), and track operational costs. They host or utilize the operational Digital Twin, leveraging As-Built data from AEC and integrating real-world data.",
    },
    {
      name: "IT Monitoring & Analytics",
      description: "Comprehensive technology ecosystem oversight and insights",
      icon: <Activity className="h-12 w-12" strokeWidth={1} />,
      features: [
        "System Performance Monitoring",
        "Integration Status Tracking",
        "Data Quality Assessment",
        "Security Monitoring",
        "Resource Utilization Analysis",
        "Partner Data Feed Monitoring",
      ],
      color: "rose",
      details:
        "These tools provide comprehensive oversight and insights into the performance, health, and security of the entire I5 technology ecosystem. They collect technical data (uptime, error rates, resource utilization, logs) from all Owner platforms and monitor integration status and data quality, including mandated data feeds from Partner technologies.",
    },
  ]

  const partnerTechnologies = [
    {
      category: "Manufacturing Execution Systems (MES)",
      description: "Production workflow management and monitoring within Partner factories",
      icon: <Factory className="h-8 w-8" strokeWidth={1} />,
      examples: [
        "Production Planning & Scheduling",
        "Quality Control Integration",
        "Resource Management",
        "Production Data Collection",
        "Workflow Optimization",
        "Equipment Monitoring",
      ],
      governance:
        "Partners must provide real-time production status, quality metrics, and resource utilization data to Owner AEC and DfMA platforms",
    },
    {
      category: "Logistics Tracking Systems",
      description: "Shipment coordination and comprehensive asset tracking",
      icon: <Truck className="h-8 w-8" strokeWidth={1} />,
      examples: [
        "GPS Asset Tracking",
        "RFID Component Tracking",
        "Shipment Coordination",
        "Delivery Scheduling",
        "Route Optimization",
        "Inventory Management",
      ],
      governance:
        "Logistics partners must integrate tracking data and delivery status into Owner SCM and AEC platforms via standardized APIs",
    },
    {
      category: "Advanced Construction Technology",
      description: "Sophisticated on-site construction and assembly systems",
      icon: <Crane className="h-8 w-8" strokeWidth={1} />,
      examples: [
        "Computer-Controlled Cranes",
        "Robotics & Automation",
        "AR Guidance Systems",
        "Mobile Fabrication Units",
        "Field-Deployed CNC Equipment",
        "Precision Positioning Systems",
      ],
      governance:
        "Construction technology data must feed into AEC platform for real-time progress tracking and quality verification",
    },
    {
      category: "Quality Assurance Technology",
      description: "Specialized testing and verification equipment",
      icon: <Search className="h-8 w-8" strokeWidth={1} />,
      examples: [
        "3D Scanning for As-Built Verification",
        "Automated Testing Equipment",
        "Digital Verification Tools",
        "Sensor-Based Quality Monitoring",
        "Non-Destructive Testing",
        "Compliance Verification Systems",
      ],
      governance:
        "QA systems must provide verification results and compliance data to Owner quality management and AEC platforms",
    },
    {
      category: "Component Tracking Systems",
      description: "Digital identification and status reporting for building components",
      icon: <Package className="h-8 w-8" strokeWidth={1} />,
      examples: [
        "RFID Component Tagging",
        "Barcode Tracking Systems",
        "IoT-Connected Components",
        "Digital Component Passports",
        "Status Reporting Systems",
        "Location Tracking",
      ],
      governance:
        "Component tracking data must be integrated into Owner SCM and AEC platforms for complete supply chain visibility",
    },
  ]

  const architecturalLayers = [
    {
      layer: "Governance Hub Layer (BoK)",
      description:
        "The BoK platform conceptually sits 'above' the functional platforms, acting as the configurable engine that orchestrates critical decisions",
      icon: <Crown className="h-8 w-8" strokeWidth={1} />,
      color: "blue",
      details:
        "It interacts via the Integration Fabric to pull data, apply rules, and trigger actions across other systems. The BoK serves as the central decision-making authority with configurable business rules and workflow orchestration capabilities.",
    },
    {
      layer: "Functional Platforms Layer (Owner-Controlled)",
      description: "Specialized systems that fulfill core business and domain functions",
      icon: <Layers className="h-8 w-8" strokeWidth={1} />,
      color: "green",
      details:
        "This layer comprises the specialized systems (AEC, DfMA, SCM, Financials, CRM, Operational, IT Monitoring/Analytics) that fulfill core business and domain functions. These can be existing systems, procured solutions, or Owner-created (like BoK and VS, which are web-based cloud applications).",
    },
    {
      layer: "Integration Fabric/Layer",
      description: "Technical layer responsible for managing connections, data translation, and routing",
      icon: <Network className="h-8 w-8" strokeWidth={1} />,
      color: "purple",
      details:
        "This technical layer (which may be a standalone platform or part of the BoK's technical stack) is responsible for managing connections (APIs), translating data formats, routing information, and handling errors between Owner functional platforms and for ingesting data feeds from the Execution Layer.",
    },
    {
      layer: "Execution Layer (Partner-Owned Technologies)",
      description: "Partner-owned Construction Technologies that perform physical work",
      icon: <Hammer className="h-8 w-8" strokeWidth={1} />,
      color: "orange",
      details:
        "This layer includes the Partner-owned Construction Technologies (e.g., Manufacturing Execution Systems, Site Robotics, Logistics Software) that perform physical work. Data generated by this layer is pushed or pulled into specific Owner functional platforms via mandated, standardized integrations.",
    },
    {
      layer: "User Interface Layer",
      description: "Accessible interaction points for internal users, partners, and clients",
      icon: <Smartphone className="h-8 w-8" strokeWidth={1} />,
      color: "emerald",
      details:
        "This layer provides accessible interaction points for internal users, partners (with managed access), and clients (via VS). It includes web-based applications (BoK, VS primarily), desktop applications, and mobile apps (e.g., AEC Field).",
    },
  ]

  const technicalRequirements = [
    {
      title: "Security Architecture",
      description: "Defense-in-depth approach with comprehensive security layers",
      icon: <Shield className="h-8 w-8" strokeWidth={1} />,
      features: [
        "Network Security (firewalls, segmentation)",
        "Application Security (secure coding, OWASP)",
        "Data Security (encryption at rest and in transit)",
        "Authentication (MFA, SSO via IAM)",
        "Authorization (fine-grained RBAC)",
        "Security Monitoring (centralized SIEM)",
        "Vulnerability Management",
        "Penetration Testing",
      ],
    },
    {
      title: "Integration Framework",
      description: "Standardized API specifications and middleware implementation",
      icon: <Code className="h-8 w-8" strokeWidth={1} />,
      features: [
        "OpenAPI Specification Standards",
        "OAuth 2.0 Authentication",
        "RESTful API Design",
        "Message Queues (async communication)",
        "Data Transformation Tools",
        "Middleware/IPAAS Implementation",
        "Standard Integration Patterns",
        "Error Handling & Retry Logic",
      ],
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud hosting with disaster recovery capabilities",
      icon: <Cloud className="h-8 w-8" strokeWidth={1} />,
      features: [
        "IaaS/PaaS/SaaS Strategy",
        "Auto-scaling Capabilities",
        "Load Balancing",
        "Multi-region Deployment",
        "Disaster Recovery (DR)",
        "Business Continuity Planning (BCP)",
        "Backup & Restore Systems",
        "Network Topology Design",
      ],
    },
    {
      title: "Data Management",
      description: "Unified data model with comprehensive governance",
      icon: <Database className="h-8 w-8" strokeWidth={1} />,
      features: [
        "Unified Logical Data Model",
        "Master Data Management",
        "Data Quality Control",
        "Metadata Standards",
        "Data Governance Framework",
        "Single Source of Truth",
        "Data Lineage Tracking",
        "Data Security & Privacy",
      ],
    },
    {
      title: "Performance Monitoring",
      description: "Comprehensive system monitoring and analytics",
      icon: <Gauge className="h-8 w-8" strokeWidth={1} />,
      features: [
        "Uptime Monitoring",
        "Performance Metrics (response time, throughput)",
        "Error Rate Tracking",
        "Resource Utilization Analysis",
        "Integration Health Monitoring",
        "Partner Data Feed Quality",
        "Alerting & Notification Systems",
        "Performance Optimization",
      ],
    },
    {
      title: "Testing Strategy",
      description: "Multi-layered testing approach for system reliability",
      icon: <CheckCircle className="h-8 w-8" strokeWidth={1} />,
      features: [
        "Unit Testing",
        "Integration Testing (API verification)",
        "System Testing",
        "Security Testing",
        "Performance Testing (load, stress)",
        "User Acceptance Testing",
        "Automated Testing Pipelines",
        "Continuous Testing",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0a1628] via-[#0f1e35] to-[#1a2b4a] text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(/images/blue-financial-building.png)`,
            y,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-blue-100 mb-8"
            >
              <Network className="h-4 w-4 mr-2" strokeWidth={1} />
              I5 Digital Infrastructure
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">Operational Ecosystem</h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
              I5 Model's Digital Ecosystem and Owner Control - A comprehensive technological infrastructure enabling
              efficient real estate development through{" "}
              <span className="text-white font-medium">seamless integration</span> of design, manufacturing,
              construction, and management processes
            </p>

            {/* Interactive Platform Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Core Platform Integration</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:bg-white/10"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" strokeWidth={1} />
                    ) : (
                      <Play className="h-4 w-4" strokeWidth={1} />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setActiveCard(0)
                      setIsPlaying(false)
                    }}
                    className="text-white hover:bg-white/10"
                  >
                    <RotateCcw className="h-4 w-4" strokeWidth={1} />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ownerPlatforms.slice(0, 8).map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5, scale: 0.9 }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.5,
                      scale: activeCard === index ? 1.05 : 0.9,
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "relative p-4 rounded-lg border cursor-pointer transition-all",
                      activeCard === index
                        ? "bg-white/20 border-white/40"
                        : "bg-white/5 border-white/20 hover:bg-white/10",
                    )}
                    onClick={() => {
                      setActiveCard(index)
                      setIsPlaying(false)
                    }}
                  >
                    <div className="text-white mb-2">{platform.icon}</div>
                    <div className="text-sm font-medium text-white mb-1">{platform.name}</div>
                    <div className="text-xs text-blue-100 line-clamp-2">{platform.description}</div>
                    {activeCard === index && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4 }}
                        className="absolute bottom-0 left-0 h-1 bg-white/60 rounded-full"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-white/10 rounded-lg"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{ownerPlatforms[activeCard]?.name}</h4>
                  <p className="text-blue-100 mb-3">{ownerPlatforms[activeCard]?.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ownerPlatforms[activeCard]?.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full text-white">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#0a1628] border-b sticky top-0 z-40 shadow-sm border border-slate-100 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="grid grid-cols-6 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index === 5 && !isPasswordVerified) {
                    setShowPasswordModal(true)
                  } else {
                    setActiveTab(index)
                  }
                }}
                className={`py-4 px-2 font-medium text-sm transition-colors text-gray-950 border-b-8 text-center leading-tight ${
                  activeTab === index
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                {tab.split("\n").map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
                {index === 5 && !isPasswordVerified && <span className="ml-1 text-xs">🔒</span>}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#0a1628] p-8 rounded-lg shadow-xl border border-slate-600 w-full max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4">Protected Content</h3>
            <p className="text-gray-300 mb-6">
              This section contains detailed technical specifications and is password protected.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") verifyPassword()
                  }}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 bg-transparent border border-slate-600 text-white rounded-md hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={verifyPassword}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      <section className="p-6 border-gray-700/50 rounded-none border-0 shadow-none bg-[#030712] bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tab 1: Overview */}
              {activeTab === 0 && (
                <div className="space-y-20">
                  {/* Introduction */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h2 className="text-4xl font-light text-white mb-6">
                        Introduction to the I5 Operational Ecosystem
                      </h2>
                      <div className="prose prose-lg text-gray-300 space-y-4">
                        <p>
                          The I5 Operational Ecosystem creates an{" "}
                          <strong className="text-white">
                            integrated network of platforms, technologies, and methodologies
                          </strong>{" "}
                          designed to work in harmony, eliminating traditional information silos and providing real-time
                          visibility across the entire development lifecycle.
                        </p>
                        <p>
                          Central to this approach is the principle that{" "}
                          <strong className="text-white">
                            core digital platforms are explicitly owned, procured, administered, updated, and controlled
                            by the owner
                          </strong>
                          , who grants appropriate access to partners. The governance of specific construction
                          technologies used by partners is determined by the owner on a case-by-case basis.
                        </p>
                        <p>
                          This ecosystem underpins the I5 Model's principles of{" "}
                          <strong className="text-white">productization, integration, and data centrality</strong>.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/blue-geometric-facade.png"
                        alt="Integrated digital ecosystem visualization"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Core Technology Principles */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-light text-white mb-6">
                        Core Technology Principles Guiding the Ecosystem
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The successful implementation of the I5 Model relies on six fundamental technology principles,
                        ensuring technology acts as a cohesive and transformative force
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {corePrinciples.map((principle, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-transparent rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-slate-600"
                          onClick={() => setExpandedPrinciple(expandedPrinciple === index ? null : index)}
                        >
                          <div className="text-white mb-6">{principle.icon}</div>
                          <h3 className="text-xl font-semibold text-white mb-4">{principle.title}</h3>
                          <p className="text-gray-300 mb-4">{principle.description}</p>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-400 font-medium">Learn more</span>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 text-blue-400 transition-transform",
                                expandedPrinciple === index && "rotate-180",
                              )}
                            />
                          </div>

                          <AnimatePresence>
                            {expandedPrinciple === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-slate-600"
                              >
                                <p className="text-sm text-gray-300">{principle.details}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Digital Thread Visualization */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-transparent rounded-2xl p-8 shadow-lg border border-slate-600"
                  >
                    <h2 className="text-4xl font-light text-white mb-8 text-center">The Digital Thread</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">
                      Continuous flow of information ensuring transparency and data-driven insights throughout the asset
                      lifecycle
                    </p>

                    <div className="relative">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {["Design", "Procurement", "Manufacturing", "Construction", "Operations"].map(
                          (phase, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="relative"
                            >
                              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-transparent border-blue-950 border">
                                <span className="text-xl font-bold text-blue-400">{index + 1}</span>
                              </div>
                              <h3 className="font-semibold text-white mb-2">{phase}</h3>
                              <div className="text-sm text-gray-300">
                                {index < 4 && (
                                  <ArrowRight className="h-4 w-4 text-blue-400 mx-auto mt-4" strokeWidth={1} />
                                )}
                              </div>
                            </motion.div>
                          ),
                        )}
                      </div>

                      <div className="mt-8 p-6 rounded-lg bg-transparent">
                        <h4 className="font-semibold text-blue-300 mb-2">Real-time Data Integration</h4>
                        <p className="text-blue-200 text-sm">
                          All phases connected through owner-controlled digital platforms ensuring seamless data flow
                          and decision-making capabilities. Data flows from initial design to operational Digital Twin,
                          creating a continuous feedback loop for improvement.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Tab 2: Owner-Controlled Platforms */}
              {activeTab === 1 && (
                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h1 className="text-5xl font-light text-white mb-6">Owner-Controlled Core Platforms</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                      These core functional platforms form the heart of the I5 digital ecosystem, being explicitly
                      owned, administered, and controlled by the Real Estate Developer. They provide the central
                      capabilities to manage the I5 process end-to-end, act as authoritative sources for specific data,
                      and participate in integrated workflows orchestrated by the BoK Governance Hub.
                    </p>
                  </motion.div>

                  {/* Platform Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
                    {ownerPlatforms.map((platform, index) => {
                      // Define bento box spans - creates asymmetrical layout
                      const getColSpan = (index) => {
                        const pattern = [2, 1, 1, 2, 1, 2, 1, 1] // Bento box pattern
                        return pattern[index % pattern.length]
                      }

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`col-span-${getColSpan(index)} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-slate-600 bg-transparent border-0 cursor-pointer`}
                          onClick={() =>
                            setExpandedContainer(expandedContainer === `platform-${index}` ? null : `platform-${index}`)
                          }
                        >
                          <div className="flex items-start justify-between mb-6">
                            <div className="text-white mr-4">{platform.icon}</div>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 text-gray-400 transition-transform",
                                expandedContainer === `platform-${index}` && "rotate-180",
                              )}
                            />
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-4">{platform.name}</h3>
                          <p className="text-gray-300 mb-6">{platform.description}</p>

                          <div className="space-y-2 mb-4">
                            <h4 className="font-medium text-white mb-3">Key Features:</h4>
                            {platform.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" strokeWidth={1} />
                                {feature}
                              </div>
                            ))}
                            {platform.features.length > 4 && (
                              <div className="text-sm text-blue-400 font-medium">
                                +{platform.features.length - 4} more features
                              </div>
                            )}
                          </div>

                          <AnimatePresence>
                            {expandedContainer === `platform-${index}` && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-slate-600"
                              >
                                <p className="text-sm text-gray-300 mb-4">{platform.details}</p>
                                {platform.features.length > 4 && (
                                  <div className="space-y-2">
                                    <h5 className="font-medium text-white">Additional Features:</h5>
                                    {platform.features.slice(4).map((feature, idx) => (
                                      <div key={idx} className="flex items-center text-sm text-gray-300">
                                        <CheckCircle
                                          className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"
                                          strokeWidth={1}
                                        />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Platform Integration Diagram */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border-t border-slate-600"
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-light text-white mb-6">Platform Integration Architecture</h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        All platforms work together through standardized APIs and data exchange protocols, with the BoK
                        serving as the central orchestration hub
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-lg opacity-50"></div>
                      <div className="relative p-8">
                        <div className="text-center mb-8">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg bg-transparent">
                            <Database className="h-12 w-12 text-white" strokeWidth={1} />
                          </div>
                          <h3 className="text-xl font-semibold text-white">BoK Governance Hub</h3>
                          <p className="text-gray-300">Central orchestration and decision engine</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                          {ownerPlatforms.slice(1, 8).map((platform, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="rounded-lg p-4 shadow-md text-center bg-transparent"
                            >
                              <div className="text-white mb-2 flex justify-center">{platform.icon}</div>
                              <h4 className="font-medium text-white text-sm">{platform.name}</h4>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Tab 3: Partner Technologies */}
              {activeTab === 2 && (
                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h1 className="text-5xl font-light text-white mb-6">
                      Partner-Owned Construction Technologies & Owner Governance
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                      Executing the industrialized and integrated processes of the I5 Model involves specialized
                      construction technologies for manufacturing, assembly, quality control, and logistics. While these
                      technologies are typically owned and operated by external partners, their integration with the
                      Owner-controlled digital ecosystem is crucial and mandated.
                    </p>
                  </motion.div>

                  {/* Functional Role Introduction */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <h2 className="text-3xl font-light text-white mb-6 text-center">
                      Functional Role of Partner Technologies
                    </h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center mb-8">
                      Partner-owned construction technologies are the specialized execution tools used by partners for
                      physical construction activities. Their functional role is execution, but they generate crucial
                      data about the execution process that needs to flow into the Owner's ecosystem.
                    </p>
                  </motion.div>

                  {/* Partner Technology Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {partnerTechnologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-transparent rounded-xl p-8 shadow-lg border-slate-600 border-0 cursor-pointer"
                        onClick={() =>
                          setExpandedContainer(expandedContainer === `partner-${index}` ? null : `partner-${index}`)
                        }
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center">
                            <div className="text-white mr-4">{tech.icon}</div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">{tech.category}</h3>
                              <p className="text-gray-300">{tech.description}</p>
                            </div>
                          </div>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 text-gray-400 transition-transform flex-shrink-0",
                              expandedContainer === `partner-${index}` && "rotate-180",
                            )}
                          />
                        </div>

                        <div className="space-y-3 mb-4">
                          <h4 className="font-medium text-white">Examples:</h4>
                          {tech.examples.slice(0, 3).map((example, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                              {example}
                            </div>
                          ))}
                          {tech.examples.length > 3 && (
                            <div className="text-sm text-blue-400 font-medium">
                              +{tech.examples.length - 3} more examples
                            </div>
                          )}
                        </div>

                        <AnimatePresence>
                          {expandedContainer === `partner-${index}` && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-slate-600"
                            >
                              {tech.examples.length > 3 && (
                                <div className="space-y-2 mb-4">
                                  <h5 className="font-medium text-white">Additional Examples:</h5>
                                  {tech.examples.slice(3).map((example, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-gray-300">
                                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                                      {example}
                                    </div>
                                  ))}
                                </div>
                              )}
                              <div className="bg-yellow-900/30 p-4 rounded-lg">
                                <h5 className="font-medium text-yellow-300 mb-2">Owner Governance:</h5>
                                <p className="text-sm text-yellow-200">{tech.governance}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Owner Governance Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-light text-white mb-6">
                        Owner Governance Over Partner Technologies
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The Owner governs these Partner technologies by setting technical requirements for their
                        interaction with the Owner-controlled platforms and mandating data visibility
                      </p>
                    </div>

                    <div className="grid grid-cols-6 gap-4 auto-rows-auto">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="col-span-3 row-span-2 bg-transparent rounded-xl p-6 shadow-lg border border-slate-600"
                      >
                        <Eye className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-semibold text-white mb-3">Mandating Data Visibility</h3>
                        <p className="text-gray-300 text-sm">
                          Requiring Partners to provide data feeds (production status, site progress, quality
                          verification results, logistics tracking, sensor data) from their systems into Owner
                          platforms. This data is essential for performance monitoring, analysis, and triggering BoK
                          governance workflows.
                        </p>
                        <div className="mt-6 relative rounded-lg overflow-hidden h-56">
                          <Image
                            src="/images/origami-facade.png"
                            alt="Data visibility and monitoring visualization"
                            fill
                            className="object-cover opacity-60"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-span-3 bg-transparent rounded-xl p-6 shadow-lg border border-slate-600"
                      >
                        <Settings className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-semibold text-white mb-3">Setting Technical Standards</h3>
                        <p className="text-gray-300 text-sm">
                          Defining technical standards for how these data feeds must be provided, including API
                          specifications, data formats (e.g., JSON/XML, OPC UA), frequency, latency, and security. This
                          aligns with the Integration Framework and Vendor Neutrality principles.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="col-span-2 bg-transparent rounded-xl p-6 shadow-lg border border-slate-600"
                      >
                        <FileText className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-semibold text-white mb-3">Technical Documentation</h3>
                        <p className="text-gray-300 text-sm">
                          Partners must provide comprehensive technical documentation about their systems' interfaces
                          and data outputs as part of the contractual agreement, enabling Owner IT teams to design and
                          maintain integrations.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="col-span-4 bg-transparent rounded-xl p-6 shadow-lg border border-slate-600"
                      >
                        <Lock className="h-8 w-8 text-white mb-4" strokeWidth={1} />
                        <h3 className="text-lg font-semibold text-white mb-3">Cybersecurity & Liability</h3>
                        <p className="text-gray-300 text-sm">
                          Contracts include specific cybersecurity requirements and liability clauses related to the
                          security of data transferred and integrated systems, ensuring comprehensive protection of the
                          ecosystem.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Tab 4: Architecture & Data Flow */}
              {activeTab === 3 && (
                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h1 className="text-5xl font-light text-white mb-6">
                      Conceptual Ecosystem Architecture and Interaction Flow
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                      The I5 digital ecosystem is conceptually interconnected, reflecting the core principles of Owner
                      Control, an Integrated Ecosystem, Vendor Neutrality, and the BoK's central governance role. Its
                      architecture is structured into several interconnected layers.
                    </p>
                  </motion.div>

                  {/* Architectural Layers */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 shadow-lg border-slate-600 border-0"
                  >
                    <h2 className="text-3xl font-light text-white mb-8 text-center">
                      Architectural Layers of the I5 Digital Ecosystem
                    </h2>

                    <div className="space-y-6">
                      {architecturalLayers.map((layer, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start p-6 bg-gray-800/30 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors"
                          onClick={() =>
                            setExpandedContainer(expandedContainer === `layer-${index}` ? null : `layer-${index}`)
                          }
                        >
                          <div className="text-white mr-6 flex-shrink-0">{layer.icon}</div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold text-white">{layer.layer}</h3>
                              <ChevronDown
                                className={cn(
                                  "h-5 w-5 text-gray-400 transition-transform",
                                  expandedContainer === `layer-${index}` && "rotate-180",
                                )}
                              />
                            </div>
                            <p className="text-gray-300">{layer.description}</p>

                            <AnimatePresence>
                              {expandedContainer === `layer-${index}` && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-4 pt-4 border-t border-slate-600"
                                >
                                  <p className="text-sm text-gray-300">{layer.details}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Conceptual Interaction Flow */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-light text-white mb-6">
                        Conceptual Interaction Flow (The Digital Thread)
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The I5 Model's Digital Thread is a continuous flow of information ensuring transparency and
                        data-driven insights throughout the asset lifecycle. It connects various phases of the real
                        estate delivery process, from initial design to ongoing operations, enabling seamless data
                        exchange and informed decision-making.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                          {
                            phase: "Design & Planning",
                            icon: <FileText className="h-8 w-8" strokeWidth={1} />,
                            description: "AEC/DfMA leveraging BoK standards",
                          },
                          {
                            phase: "Procurement",
                            icon: <Workflow className="h-8 w-8" strokeWidth={1} />,
                            description: "SCM coordination and supplier management",
                          },
                          {
                            phase: "Manufacturing",
                            icon: <Cog className="h-8 w-8" strokeWidth={1} />,
                            description: "Partner data feeds into owner platforms",
                          },
                          {
                            phase: "Operations",
                            icon: <Activity className="h-8 w-8" strokeWidth={1} />,
                            description: "Digital Twin and continuous improvement",
                          },
                        ].map((phase, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-transparent rounded-xl p-6 shadow-lg text-center border border-slate-600"
                          >
                            <div className="text-white mb-4 flex justify-center">{phase.icon}</div>
                            <h3 className="font-semibold text-white mb-3">{phase.phase}</h3>
                            <p className="text-sm text-gray-300">{phase.description}</p>
                            {index < 3 && <ArrowRight className="h-5 w-5 text-blue-400 mx-auto mt-4" strokeWidth={1} />}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Tab 5: Technical Deep Dive */}
              {activeTab === 4 && (
                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h1 className="text-5xl font-light text-white mb-6">Technical Deep Dive & Implementation</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                      Comprehensive technical requirements, architecture patterns, and implementation guidelines for the
                      I5 ecosystem
                    </p>
                  </motion.div>

                  {/* Technical Requirements Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technicalRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-transparent rounded-xl p-8 shadow-lg border-slate-600 border-0"
                      >
                        <div className="text-white mb-6">{requirement.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-4">{requirement.title}</h3>
                        <p className="text-gray-300 mb-6">{requirement.description}</p>

                        <div className="space-y-2">
                          {requirement.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" strokeWidth={1} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Implementation Guidelines */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-light text-white mb-6">Implementation Guidelines</h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Strategic planning and governance frameworks for successful I5 ecosystem
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">Strategic Planning</h3>
                        <div className="space-y-4">
                          {[
                            "Technology Roadmap Development",
                            "Phased Deployment Scheduling",
                            "Resource Allocation Planning",
                            "Platform Selection Criteria",
                          ].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-white">Technology Governance</h3>
                        <div className="space-y-4">
                          {[
                            "Technical Oversight Bodies",
                            "Change Control Procedures",
                            "Risk Management Framework",
                            "Continuous Improvement Process",
                          ].map((item, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                              <span className="text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Tab 6: Detailed Technical Specifications */}
              {activeTab === 5 && isPasswordVerified && (
                <div className="space-y-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h1 className="text-5xl font-light text-white mb-6">Detailed Technical Specifications</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                      Comprehensive technical specifications, implementation details, and governance frameworks for the
                      I5 Operational Ecosystem
                    </p>
                  </motion.div>

                  {/* I5 Technology Principles in Technical Detail */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <h2 className="text-3xl font-light text-white mb-6">
                      I5 Technology Principles in Technical Detail
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Owner Control - Technical Implementation
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Identity and Access Management (IAM) with Role-Based Access Control (RBAC)</li>
                          <li>Centralized administration console with audit logging</li>
                          <li>Multi-tenant architecture with strict data segregation</li>
                          <li>API Gateway with OAuth 2.0 authentication and fine-grained authorization</li>
                          <li>Comprehensive audit trails for all system access and changes</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Business Rules Management System (BRMS)
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Rule engine with forward and backward chaining capabilities</li>
                          <li>Business user-friendly rule authoring interface</li>
                          <li>Version control and rule lifecycle management</li>
                          <li>Decision tables and decision trees support</li>
                          <li>Rule execution audit and explanation capabilities</li>
                          <li>Integration with workflow orchestration engine</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">API Specifications</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>OpenAPI 3.0 specification for all REST APIs</li>
                          <li>OAuth 2.0 with JWT for authentication and authorization</li>
                          <li>Rate limiting and throttling policies</li>
                          <li>Comprehensive error handling with standardized error codes</li>
                          <li>API versioning strategy with backward compatibility</li>
                          <li>API documentation with interactive testing capabilities</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Unified Logical Data Model</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Master data management with golden record concept</li>
                          <li>Canonical data model for cross-system integration</li>
                          <li>Data lineage tracking and metadata management</li>
                          <li>Data quality rules and validation framework</li>
                          <li>Semantic layer for business user data access</li>
                          <li>Data governance framework with stewardship roles</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Owner-Created Platforms Technical Composition */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <h2 className="text-3xl font-light text-white mb-6">
                      Owner-Created Platforms Technical Composition
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">BoK Platform Technical Architecture</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Microservices architecture with containerization (Docker/Kubernetes)</li>
                          <li>Event-driven architecture with message broker (Kafka/RabbitMQ)</li>
                          <li>BPM/Workflow engine (Camunda/Flowable) for process orchestration</li>
                          <li>Rules engine (Drools/Red Hat Decision Manager) for business rules</li>
                          <li>Document management system with versioning and metadata</li>
                          <li>AI/ML components for decision support and pattern recognition</li>
                          <li>GraphQL API for flexible data querying</li>
                          <li>Elasticsearch for advanced search capabilities</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">VS Platform Technical Architecture</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>WebGL/WebGPU frameworks for 3D rendering (Three.js/Babylon.js)</li>
                          <li>glTF/GLB for optimized 3D model streaming</li>
                          <li>Progressive loading for large model optimization</li>
                          <li>WebRTC for collaborative viewing sessions</li>
                          <li>Configurator logic with constraint satisfaction problem (CSP) solver</li>
                          <li>Real-time validation against manufacturing constraints</li>
                          <li>WebXR support for VR/AR experiences</li>
                          <li>Client-side caching strategies for performance optimization</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Cloud Hosting Specifications</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Multi-region deployment for high availability</li>
                          <li>Auto-scaling based on demand metrics</li>
                          <li>Content Delivery Network (CDN) for static assets</li>
                          <li>Database replication and read replicas</li>
                          <li>Backup strategy with point-in-time recovery</li>
                          <li>Disaster recovery with RPO/RTO definitions</li>
                          <li>Infrastructure as Code (IaC) with Terraform/CloudFormation</li>
                          <li>Monitoring and observability stack (Prometheus/Grafana)</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Technical Requirements for Other Platforms */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <h2 className="text-3xl font-light text-white mb-6">Technical Requirements for Other Platforms</h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">AEC Platform Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>IFC 4.3 or higher support for BIM interoperability</li>
                          <li>BCF (BIM Collaboration Format) for issue management</li>
                          <li>COBie data export for facility management</li>
                          <li>Real-time data ingestion from field devices and sensors</li>
                          <li>4D BIM capabilities (time-based simulation)</li>
                          <li>5D BIM capabilities (cost integration)</li>
                          <li>Clash detection and resolution workflows</li>
                          <li>API-based integration with scheduling and cost systems</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">DfMA Platform Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Manufacturing constraints analysis engine</li>
                          <li>Parametric modeling capabilities</li>
                          <li>Tolerance analysis and management</li>
                          <li>Assembly sequence optimization algorithms</li>
                          <li>CNC machine code generation</li>
                          <li>Nesting optimization for material efficiency</li>
                          <li>Digital twin simulation of manufacturing processes</li>
                          <li>Integration with PLM (Product Lifecycle Management) systems</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Operational Systems Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>COBie standard implementation for FM data</li>
                          <li>IoT sensor data integration framework</li>
                          <li>Building Management System (BMS) integration</li>
                          <li>Predictive maintenance algorithms</li>
                          <li>Energy management and optimization</li>
                          <li>Space utilization analytics</li>
                          <li>Digital twin visualization of operational data</li>
                          <li>Mobile maintenance management applications</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">IT Monitoring Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>SIEM (Security Information and Event Management) integration</li>
                          <li>Real-time monitoring of all system components</li>
                          <li>Custom metrics for I5-specific KPIs</li>
                          <li>Automated alerting with escalation paths</li>
                          <li>SLA monitoring and reporting</li>
                          <li>Log aggregation and analysis</li>
                          <li>Synthetic transaction monitoring</li>
                          <li>Partner data feed quality monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Partner Technology Integration Requirements */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <h2 className="text-3xl font-light text-white mb-6">Partner Technology Integration Requirements</h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">API/Interface Readiness Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>REST API with OpenAPI 3.0 specification</li>
                          <li>Webhook support for event-driven integration</li>
                          <li>Bulk data transfer capabilities</li>
                          <li>Rate limiting and throttling policies</li>
                          <li>Comprehensive error handling</li>
                          <li>API versioning strategy</li>
                          <li>API documentation with examples</li>
                          <li>API testing environment</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Data Exchange Standards</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>JSON/XML for structured data exchange</li>
                          <li>OPC UA for industrial equipment integration</li>
                          <li>IFC for BIM data exchange</li>
                          <li>ISO 15926 for plant lifecycle data</li>
                          <li>MQTT for IoT device communication</li>
                          <li>BCF for issue management</li>
                          <li>COBie for facility management data</li>
                          <li>GS1 standards for supply chain data</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Secure Connectivity Requirements</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>TLS 1.3 or higher for all communications</li>
                          <li>Mutual TLS (mTLS) for service-to-service authentication</li>
                          <li>Client certificates for partner system authentication</li>
                          <li>OAuth 2.0 with JWT for authorization</li>
                          <li>IP whitelisting for additional security</li>
                          <li>VPN or private connection options</li>
                          <li>API Gateway with rate limiting and threat protection</li>
                          <li>Regular security testing and vulnerability scanning</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Data Mapping and Transformation</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Canonical data model for system-agnostic integration</li>
                          <li>Data transformation services (ETL/ELT)</li>
                          <li>Schema validation and enforcement</li>
                          <li>Data quality checks and error handling</li>
                          <li>Master data management integration</li>
                          <li>Data lineage tracking</li>
                          <li>Metadata management</li>
                          <li>Transformation rule management and versioning</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Technical Guidelines for Implementation */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-transparent rounded-2xl p-8 md:p-12 border border-slate-600"
                  >
                    <h2 className="text-3xl font-light text-white mb-6">Technical Guidelines for Implementation</h2>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Strategic Planning</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Technology roadmap development</li>
                          <li>Phased deployment scheduling</li>
                          <li>Resource allocation planning</li>
                          <li>Platform selection criteria</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Technology Governance</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Technical oversight bodies</li>
                          <li>Change control procedures</li>
                          <li>Risk management framework</li>
                          <li>Continuous improvement process</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Security Architecture</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Defense-in-depth approach</li>
                          <li>Network security (firewalls, segmentation)</li>
                          <li>Application security (secure coding, OWASP)</li>
                          <li>Data security (encryption at rest and in transit)</li>
                          <li>Authentication (MFA, SSO via IAM)</li>
                          <li>Authorization (fine-grained RBAC)</li>
                          <li>Security monitoring (centralized SIEM)</li>
                          <li>Vulnerability management</li>
                          <li>Penetration testing</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Integration Framework</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Standardized API specifications</li>
                          <li>OpenAPI Specification Standards</li>
                          <li>OAuth 2.0 Authentication</li>
                          <li>RESTful API Design</li>
                          <li>Message Queues (async communication)</li>
                          <li>Data Transformation Tools</li>
                          <li>Middleware/IPAAS Implementation</li>
                          <li>Standard Integration Patterns</li>
                          <li>Error Handling & Retry Logic</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Scalable cloud hosting</li>
                          <li>IaaS/PaaS/SaaS Strategy</li>
                          <li>Auto-scaling Capabilities</li>
                          <li>Load Balancing</li>
                          <li>Multi-region Deployment</li>
                          <li>Disaster Recovery (DR)</li>
                          <li>Business Continuity Planning (BCP)</li>
                          <li>Backup & Restore Systems</li>
                          <li>Network Topology Design</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Data Management</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Unified data model</li>
                          <li>Unified Logical Data Model</li>
                          <li>Master Data Management</li>
                          <li>Data Quality Control</li>
                          <li>Metadata Standards</li>
                          <li>Data Governance Framework</li>
                          <li>Single Source of Truth</li>
                          <li>Data Lineage Tracking</li>
                          <li>Data Security & Privacy</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Performance Monitoring</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Comprehensive system monitoring</li>
                          <li>Uptime Monitoring</li>
                          <li>Performance Metrics (response time, throughput)</li>
                          <li>Error Rate Tracking</li>
                          <li>Resource Utilization Analysis</li>
                          <li>Integration Health Monitoring</li>
                          <li>Partner Data Feed Quality</li>
                          <li>Alerting & Notification Systems</li>
                          <li>Performance Optimization</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Testing Strategy</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Multi-layered testing approach</li>
                          <li>Unit Testing</li>
                          <li>Integration Testing (API verification)</li>
                          <li>System Testing</li>
                          <li>Security Testing</li>
                          <li>Performance Testing (load, stress)</li>
                          <li>User Acceptance Testing</li>
                          <li>Automated Testing Pipelines</li>
                          <li>Continuous Testing</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
