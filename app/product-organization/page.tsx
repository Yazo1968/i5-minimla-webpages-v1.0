"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Target, Database, Shield, ArrowRight, Cog } from "lucide-react"
import { cn } from "@/lib/utils"

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" },
  },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function ProductOrganizationPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isNavOpen, setIsNavOpen] = useState(false)

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
      const sections = ["overview", "transformation", "teams", "roles", "governance", "integration"]
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
      {/* Navigation - matching exact pattern from other pages */}
      <motion.nav
        className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-12">
            <div className="text-lg font-bold tracking-tight">PRODUCT ORGANIZATION</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "transformation", label: "TRANSFORMATION" },
                { id: "teams", label: "TEAMS" },
                { id: "roles", label: "ROLES" },
                { id: "governance", label: "GOVERNANCE" },
                { id: "integration", label: "INTEGRATION" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-xs font-medium transition-all duration-300 hover:text-black relative",
                    activeSection === item.id ? "text-black" : "text-gray-500 hover:text-gray-800",
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-black transition-all duration-300" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                className="md:hidden border-t border-gray-200 py-3"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="flex flex-col space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { id: "overview", label: "OVERVIEW" },
                    { id: "transformation", label: "TRANSFORMATION" },
                    { id: "teams", label: "TEAMS" },
                    { id: "roles", label: "ROLES" },
                    { id: "governance", label: "GOVERNANCE" },
                    { id: "integration", label: "INTEGRATION" },
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "text-left text-xs font-medium transition-all duration-200",
                        activeSection === item.id ? "text-black" : "text-gray-500 hover:text-gray-800",
                      )}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Overview Section */}
      <section id="overview" className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-12 gap-6 items-center h-full max-h-[calc(100vh-8rem)]">
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight border-b-4 border-black pb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Product Organization: Structuring for I5 Success
            </motion.h1>

            <motion.h2
              className="text-lg md:text-xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From Project Silos to Integrated Product Teams
            </motion.h2>

            <motion.p
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              The I5 Model's success hinges not just on innovative processes and technology, but fundamentally on how
              the organization is structured and how its people collaborate. Traditional real estate development
              operates in project-based silos, leading to inefficiencies and fragmented knowledge.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  icon: <Target className="h-4 w-4" />,
                  label: "Cross-Functional Teams",
                  desc: "Integrated collaboration",
                },
                {
                  icon: <Database className="h-4 w-4" />,
                  label: "Knowledge Integration",
                  desc: "BoK-enabled learning",
                },
                {
                  icon: <Shield className="h-4 w-4" />,
                  label: "Governance Framework",
                  desc: "Structured decision-making",
                },
                { icon: <Cog className="h-4 w-4" />, label: "Supply Chain Integration", desc: "Partner ecosystem" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 border border-gray-300 p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center mb-2">
                    <motion.span className="mr-2 text-gray-700" variants={iconVariants}>
                      {item.icon}
                    </motion.span>
                    <span className="font-semibold text-xs">{item.label}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <motion.div
              className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-center text-sm font-bold mb-4">Organizational Transformation</h3>

              <div className="space-y-3 mb-4">
                <div className="bg-gray-900 text-white p-3 rounded text-center">
                  <div className="text-xs font-bold">FROM PROJECT SILOS</div>
                  <div className="text-xs opacity-80">Sequential, Fragmented</div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-600" />
                </div>

                <div className="bg-white border-2 border-black p-3 rounded text-center">
                  <div className="text-xs font-bold">TO PRODUCT TEAMS</div>
                  <div className="text-xs text-gray-700">Integrated, Collaborative</div>
                </div>
              </div>

              <div className="text-xs text-gray-600 space-y-2">
                <p>
                  <strong>Key Transformation:</strong> Moving from project-based silos to cross-functional product teams
                  that work collaboratively throughout the entire product lifecycle.
                </p>
                <p>
                  <strong>Technology Enablement:</strong> Supported by integrated digital platforms that facilitate
                  seamless collaboration and knowledge sharing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section
        id="transformation"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Organizational Transformation Journey
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              The shift from traditional project-based structures to integrated product organizations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-8">
            <motion.div
              className="bg-white p-6 rounded-lg border-2 border-red-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-red-700">Traditional Model</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Project-based silos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Sequential handoffs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Fragmented knowledge
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Department-focused
                </li>
              </ul>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ArrowRight className="h-12 w-12 text-gray-400" />
              </motion.div>
            </div>

            <motion.div
              className="bg-black text-white p-6 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4">I5 Product Model</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Cross-functional teams
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Continuous collaboration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Integrated knowledge (BoK)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Product lifecycle focus
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white p-4 border border-gray-300 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold mb-3 text-blue-700">Internal Evolution</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3">
                  <div className="text-xs text-gray-600">From: Project Manager</div>
                  <div className="font-semibold text-sm">To: Product Manager (lifecycle focus)</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <div className="text-xs text-gray-600">From: Traditional Designer</div>
                  <div className="font-semibold text-sm">To: Configuration Specialist</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <div className="text-xs text-gray-600">From: IT Support</div>
                  <div className="font-semibold text-sm">To: Platform Integration Lead</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-4 border border-gray-300 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-bold mb-3 text-green-700">Partner Adaptation</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-3">
                  <div className="text-xs text-gray-600">From: Traditional Architect</div>
                  <div className="font-semibold text-sm">To: Collaborative Design Partner</div>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <div className="text-xs text-gray-600">From: General Contractor</div>
                  <div className="font-semibold text-sm">To: Production & Assembly Partner</div>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <div className="text-xs text-gray-600">From: Isolated Systems</div>
                  <div className="font-semibold text-sm">To: Digitally Connected Operations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Cross-Functional Product Teams
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Breaking down silos through integrated collaboration
            </motion.p>
          </div>

          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6">
              <div className="bg-black text-white px-4 py-2 rounded-lg inline-block text-sm font-bold">
                PRODUCT LINE: Standardized Apartment Type
              </div>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { role: "Product Manager", desc: "Overall product strategy", color: "border-blue-200" },
                { role: "Design Lead", desc: "Design standards & innovation", color: "border-green-200" },
                { role: "Manufacturing Engineer", desc: "Partner liaison & DfMA", color: "border-purple-200" },
                { role: "Construction Specialist", desc: "Site assembly optimization", color: "border-orange-200" },
                { role: "Tech Integration", desc: "Digital workflow management", color: "border-red-200" },
                { role: "Quality Assurance", desc: "Standards & compliance", color: "border-yellow-200" },
              ].map((member, index) => (
                <motion.div
                  key={member.role}
                  className={`bg-white p-3 rounded-lg text-center border-2 ${member.color} cursor-pointer`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="font-bold text-xs mb-1">{member.role}</div>
                  <div className="text-xs text-gray-600">{member.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="font-bold text-xs mb-1">Technology Enablement:</div>
              <div className="text-xs text-gray-700">
                AEC Platform (BIM hub) • DfMA Platform (manufacturability) • BoK Platform (standards & lessons) • VS
                Platform (client insights)
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Purpose",
                desc: "Break down silos, ensure continuous collaboration, and integrate diverse expertise from the very beginning of a product's conception.",
                color: "text-blue-700",
              },
              {
                title: "Composition",
                desc: "Core team includes Product Manager, Design Lead, Manufacturing Engineer, Construction Specialist, and Technology Integration Specialist.",
                color: "text-green-700",
              },
              {
                title: "Technology Integration",
                desc: "Teams operate within the Owner's integrated digital environment, leveraging AEC, DfMA, BoK, and VS platforms.",
                color: "text-purple-700",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-4 border border-gray-300 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className={`font-bold text-sm mb-2 ${item.color}`}>{item.title}</h4>
                <p className="text-xs text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              New and Evolved Roles
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Essential positions for I5 Model success
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Product Portfolio Director",
                desc: "Strategic oversight for entire product lines, ensuring market alignment and portfolio optimization.",
                platforms: "BoK, VS/CRM, Analytics",
                color: "text-blue-700",
              },
              {
                title: "Product Managers",
                desc: "Day-to-day leadership for specific products, championing vision and driving lifecycle value.",
                platforms: "All core platforms",
                color: "text-green-700",
              },
              {
                title: "Design Standards Manager",
                desc: "Maintains integrity of standardized elements, components, and configuration guidelines.",
                platforms: "BoK, DfMA",
                color: "text-purple-700",
              },
              {
                title: "Manufacturing Integration Lead",
                desc: "Bridges design and partner manufacturing, ensuring production optimization and data flow.",
                platforms: "AEC, DfMA, Partner MES",
                color: "text-orange-700",
              },
              {
                title: "Digital Delivery Lead",
                desc: "Overall management of Owner's digital platforms, integration, and security.",
                platforms: "All platforms + integration",
                color: "text-red-700",
              },
              {
                title: "Quality Systems Manager",
                desc: "Develops and enforces quality standards across entire value chain.",
                platforms: "BoK, AEC/Quality, Partner QC",
                color: "text-yellow-700",
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                className="bg-white p-4 rounded-lg border border-gray-300 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className={`font-bold text-sm mb-2 ${role.color}`}>{role.title}</h4>
                <p className="text-xs text-gray-700 mb-2">{role.desc}</p>
                <div className="text-xs text-gray-500 italic">Platforms: {role.platforms}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg border-2 border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-center">Essential I5 Skills & Capabilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Beyond Traditional",
                  skills: ["Product Management", "DfMA Expertise", "Lean Production"],
                  color: "text-blue-600",
                },
                {
                  icon: <Cog className="h-8 w-8" />,
                  title: "Digital Proficiency",
                  skills: ["Platform mastery", "Integrated workflows", "Data flows understanding"],
                  color: "text-green-600",
                },
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Data Analytics",
                  skills: ["Performance analysis", "Continuous improvement", "Decision support"],
                  color: "text-purple-600",
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Specialized Tech",
                  skills: ["Platform administration", "API integration", "Cybersecurity"],
                  color: "text-orange-600",
                },
              ].map((skill, index) => (
                <div key={skill.title} className="text-center">
                  <div className="flex justify-center items-center mx-auto mb-2 text-black">{skill.icon}</div>
                  <h4 className="font-bold text-xs mb-2">{skill.title}</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {skill.skills.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance Section */}
      <section
        id="governance"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Governance Framework for Integrated Delivery
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Structured decision-making and performance management
            </motion.p>
          </div>

          <motion.div className="space-y-6">
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-center">Decision-Making Protocols</h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Strategic Decisions", "Product-Level Decisions", "Technical Decisions", "Technology Governance"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      className="bg-white p-3 rounded-lg text-center cursor-pointer"
                      variants={cardVariants}
                      whileHover="hover"
                    >
                      <div className="font-semibold text-xs">{item}</div>
                    </motion.div>
                  ),
                )}
              </motion.div>
              <p className="text-center mt-3 text-xs text-gray-600">Orchestrated by BoK Governance Hub</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-center">Stage Gate Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  "Product Definition Gate",
                  "Configuration Gate",
                  "Pre-Production Gate",
                  "Production Gate",
                  "Handover Gate",
                ].map((gate, index) => (
                  <motion.div
                    key={gate}
                    className="bg-white p-3 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="font-semibold text-xs">{gate}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 text-center">Performance Management</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Quality KPIs", "Cost Metrics", "Schedule Performance", "Process Efficiency"].map((metric, index) => (
                  <motion.div
                    key={metric}
                    className="bg-white p-3 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="font-semibold text-xs">{metric}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center mt-3 text-xs text-gray-600">Real-time data from integrated platforms</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section
        id="integration"
        className="h-screen flex items-center justify-center relative pt-28 pb-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="text-center mb-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Supply Chain as Core Organization
            </motion.h2>
            <motion.p
              className="text-sm md:text-base text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Integrating partners into the organizational ecosystem
            </motion.p>
          </div>

          <motion.div
            className="bg-white p-6 rounded-lg border-2 border-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-center">Supply Chain Integration Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {[
                { title: "Strategic Partner Selection", subtitle: "(Digital Readiness)" },
                { title: "Long-Term Partnerships", subtitle: "(Framework Agreements)" },
                { title: "Technology Integration", subtitle: "(Data Feeds)" },
                { title: "Digitally Integrated Logistics", subtitle: "(JIT via AEC/SCM)" },
              ].map((step, index) => (
                <div key={step.title} className="flex items-center">
                  <motion.div
                    className="bg-gray-100 p-4 rounded-lg text-center min-w-[160px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="font-bold text-xs mb-1">{step.title}</div>
                    <div className="text-xs text-gray-600">{step.subtitle}</div>
                  </motion.div>
                  {index < 3 && <ArrowRight className="h-4 w-4 text-gray-400 mx-2 hidden md:block" />}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Partner Selection",
                desc: "Partners are selected on technical capability, collaborative mindset, quality systems, and critically, their digital readiness.",
                points: ["Digital integration capability", "Data sharing protocols", "Technology usage requirements"],
                color: "text-blue-700",
              },
              {
                title: "Long-Term Partnership Structures",
                desc: "Framework agreements and strategic alliances foster stability and allow for shared investment in technology integrations.",
                points: ["Framework agreements", "Shared technology investment", "Continuous improvement"],
                color: "text-green-700",
              },
              {
                title: "Digitally Integrated Logistics",
                desc: "Just-In-Time delivery and efficient material flow coordinated via Owner's AEC and SCM platforms.",
                points: ["End-to-end visibility", "Real-time coordination", "Integrated data flows"],
                color: "text-purple-700",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-4 border border-gray-300 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className={`font-bold text-sm mb-3 ${item.color}`}>{item.title}</h4>
                <p className="text-xs text-gray-700 mb-3">{item.desc}</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {item.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 bg-black text-white p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3">Key Success Factors</h3>
            <p className="text-sm mb-4">
              The I5 Product Organization provides the essential human and procedural framework to successfully
              implement and sustain the I5 Model, fully leveraging its powerful technology ecosystem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {[
                "Cross-functional Integration",
                "Clear Governance",
                "Strategic Partnerships",
                "Continuous Development",
              ].map((factor, index) => (
                <motion.div
                  key={factor}
                  className="bg-gray-800 p-2 rounded"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {factor}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
