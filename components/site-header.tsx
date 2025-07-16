"use client"

import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const navigationData = {
  "Sector Challenges": {
    href: "/insights/sector-challenges",
    sections: [
      { name: "Overview", tab: 0 },
      { name: "Real Estate Market Context", tab: 1 },
      { name: "Comparative Analysis", tab: 2 },
    ],
  },
  "I5 Model Overview": {
    href: "/insights/i5-model-overview",
    sections: [
      { name: "Preface of the I5 Model Handbook", tab: 0 },
      { name: "Introduction to the I5 Model Handbook", tab: 1 },
      { name: "I5 Model Section Briefs", tab: 2 },
    ],
  },
  "Core Principles": {
    href: "/insights/core-principles",
    sections: [
      { name: "Overview of I5 Core Principles", tab: 0 },
      { name: "Deep Dive: Core Principles and Their Benefits", tab: 1 },
    ],
  },
  "Delivery Framework": {
    href: "/insights/delivery-framework",
    sections: [
      { name: "Overview of I5 Delivery Framework", tab: 0 },
      { name: "Phase 1: Product Definition", tab: 1 },
      { name: "Phase 2: Product Configuration", tab: 2 },
      { name: "Phase 3: Pre-Production", tab: 3 },
      { name: "Phase 4: Production", tab: 4 },
      { name: "Phase 5: Handover and Support", tab: 5 },
    ],
  },
  "Operational Ecosystem": {
    href: "/insights/operational-ecosystem",
    sections: [
      { name: "Overview of I5\nOperational Ecosystem", tab: 0 },
      { name: "Owner-Controlled\nCore Platforms", tab: 1 },
      { name: "Partner-Owned\nConstruction Technologies", tab: 2 },
      { name: "Ecosystem Architecture\n& Data Flow", tab: 3 },
      { name: "Technical Deep Dive\n& Implementation", tab: 4 },
      { name: "Detailed Technical\nSpecifications", tab: 5 },
    ],
  },
  "Organizational Framework": {
    href: "/insights/organizational-framework",
    sections: [
      { name: "Overview", tab: 0 },
      { name: "Key Roles & Structure", tab: 1 },
      { name: "Governance Framework", tab: 2 },
      { name: "Supply Chain Integration", tab: 3 },
      { name: "Capability Development", tab: 4 },
      { name: "Steady-State Operations", tab: 5 },
    ],
  },
  "Financial Framework": {
    href: "/insights/financial-framework",
    sections: [
      { name: "Overview", tab: 0 },
      { name: "Cost Structure", tab: 1 },
      { name: "Investment Framework", tab: 2 },
      { name: "Risk Management", tab: 3 },
      { name: "Value Realization", tab: 4 },
    ],
  },
  "Procurement & Contracts": {
    href: "/insights/procurement-contracts-framework",
    sections: [
      { name: "Overview", tab: 0 },
      { name: "Procurement Strategy", tab: 1 },
      { name: "Contract Models", tab: 2 },
      { name: "Contract Management", tab: 3 },
      { name: "Supply Chain Ecosystem", tab: 4 },
      { name: "Comparative Analysis", tab: 5 },
    ],
  },
  "KPI & Risk Management": {
    href: "/insights/kpi-risk-framework",
    sections: [
      { name: "Overview", tab: 0 },
      { name: "Key Performance Indicators", tab: 1 },
      { name: "Risk Management", tab: 2 },
      { name: "Continuous Improvement", tab: 3 },
      { name: "Performance Benchmarking", tab: 4 },
      { name: "Integrated Management", tab: 5 },
      { name: "Platform Monitoring", tab: 6 },
    ],
  },
  "Case Studies": {
    href: "/insights/case-studies-references",
    sections: [
      { name: "Validation Overview", tab: 0 },
      { name: "Methodology Examples", tab: 1 },
      { name: "Key Project Case Studies", tab: 2 },
      { name: "References", tab: 3 },
    ],
  },
  "RISK-BSC-I5 Dashboard": {
    href: "#", // This parent link can remain '#' as it's a group title
    sections: [
      "Risk & BSC Dashboard|/insights/dashboard-a",
      "Delivery Framework Dashboard|/insights/delivery-framework-dashboard",
      "Financial Dashboard|/insights/financial-dashboard", // Added new link
    ],
  },
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="mr-4 hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              type="button"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center">
              <img src="/images/i5-logo-blue.png" alt="I5 Model" className="h-8 w-auto" />
              <span className="ml-3 text-xl font-bold text-gray-900">Model</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Full-screen navigation menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between h-16 border-b border-gray-200">
              <Link href="/" className="flex items-center" onClick={closeMenu}>
                <img src="/images/i5-logo-blue.png" alt="I5 Model" className="h-8 w-auto" />
                <span className="ml-3 text-xl font-bold text-gray-900">Model</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Search */}

            {/* Navigation Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 py-px">
              {Object.entries(navigationData).map(([pageName, pageData]) => (
                <div key={pageName} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow py-2 pr-2 pl-2">
                  <Link
                    href={pageData.href}
                    onClick={closeMenu}
                    className="font-semibold text-gray-900 hover:text-blue-600 block mb-2 text-base bg-blue-200"
                  >
                    {pageName === "RISK-BSC-I5 Dashboard"
                      ? "Risk & BSC Dashboard"
                      : pageName === "Delivery Framework Dashboard"
                        ? "Delivery Dashboard"
                        : pageName}
                  </Link>

                  {/* Section Links */}
                  {pageData.sections.length > 0 && (
                    <div className="space-y-2">
                      {pageData.sections.map((section, index) => {
                        // Check if section contains a pipe (custom link format)
                        if (typeof section === "string" && section.includes("|")) {
                          const [title, url] = section.split("|")
                          return (
                            <Link
                              key={index}
                              href={url}
                              onClick={closeMenu}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 px-2 rounded hover:bg-white"
                            >
                              {title}
                            </Link>
                          )
                        }
                        // Handle new object structure with tab property
                        const sectionData = typeof section === "object" ? section : { name: section, tab: index }
                        return (
                          <Link
                            key={index}
                            href={`${pageData.href}?tab=${sectionData.tab}`}
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-blue-600 transition-colors rounded hover:bg-white px-1 leading-3 leading-4 text-xs py-px"
                          >
                            {sectionData.name.replace(/\n/g, " ")}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <Link href="/privacy-policy" onClick={closeMenu} className="text-sm text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-use" onClick={closeMenu} className="text-sm text-gray-500 hover:text-blue-600">
                  Terms of Use
                </Link>
              </div>
              <p className="text-sm text-gray-500">© 2023 I5 Model. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
