"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, ExternalLink, Home, FileText, Shield, Scale } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SitePage {
  title: string
  path: string
  description: string
  category: string
  lastUpdated?: string
  isExternal?: boolean
}

const sitePages: SitePage[] = [
  // Main Framework Pages
  {
    title: "Market Context",
    path: "/market-context",
    description: "Comprehensive analysis of real estate market dynamics and trends",
    category: "Framework Core",
    lastUpdated: "2024-01-15",
  },
  {
    title: "Foundational Principles",
    path: "/foundational-principles",
    description: "Core principles guiding the I5 development framework",
    category: "Framework Core",
    lastUpdated: "2024-01-14",
  },
  {
    title: "Framework Implementation",
    path: "/framework-implementation",
    description: "Practical implementation strategies and methodologies",
    category: "Framework Core",
    lastUpdated: "2024-01-13",
  },
  {
    title: "Comparative Analysis",
    path: "/comparative-analysis",
    description: "Comparative studies and market analysis frameworks",
    category: "Framework Core",
    lastUpdated: "2024-01-12",
  },

  // Operational Pages
  {
    title: "Operational Ecosystem",
    path: "/operational-ecosystem",
    description: "Comprehensive operational framework and ecosystem management",
    category: "Operations",
    lastUpdated: "2024-01-11",
  },
  {
    title: "Product Organization",
    path: "/product-organization",
    description: "Product development and organizational structure strategies",
    category: "Operations",
    lastUpdated: "2024-01-10",
  },
  {
    title: "Steady-State Operations",
    path: "/steady-state-operations",
    description: "Long-term operational sustainability and management practices",
    category: "Operations",
    lastUpdated: "2024-01-09",
  },

  // Financial & Legal
  {
    title: "Financial Framework",
    path: "/financial-framework",
    description: "Financial modeling, analysis, and strategic planning frameworks",
    category: "Financial & Legal",
    lastUpdated: "2024-01-08",
  },
  {
    title: "Procurement & Contracts",
    path: "/procurement-contracts",
    description: "Procurement strategies and contract management principles",
    category: "Financial & Legal",
    lastUpdated: "2024-01-07",
  },
  {
    title: "Performance & Risk Management",
    path: "/performance-risk-management",
    description: "Performance metrics and comprehensive risk management strategies",
    category: "Financial & Legal",
    lastUpdated: "2024-01-06",
  },

  // Utility Pages
  {
    title: "Home",
    path: "/",
    description: "Welcome to the I5 Development Framework",
    category: "Navigation",
    lastUpdated: "2024-01-15",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    description: "Privacy policy and data protection information",
    category: "Legal",
    lastUpdated: "2024-01-01",
  },
  {
    title: "Terms of Use",
    path: "/terms-of-use",
    description: "Terms of use and service agreements",
    category: "Legal",
    lastUpdated: "2024-01-01",
  },
]

const categoryIcons = {
  "Framework Core": FileText,
  Operations: Home,
  "Financial & Legal": Scale,
  Navigation: Home,
  Legal: Shield,
}

const categoryColors = {
  "Framework Core": "bg-blue-50 border-blue-200 text-blue-800",
  Operations: "bg-green-50 border-green-200 text-green-800",
  "Financial & Legal": "bg-purple-50 border-purple-200 text-purple-800",
  Navigation: "bg-gray-50 border-gray-200 text-gray-800",
  Legal: "bg-red-50 border-red-200 text-red-800",
}

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPages = useMemo(() => {
    if (!searchTerm) return sitePages

    return sitePages.filter(
      (page) =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  const groupedPages = useMemo(() => {
    const groups: Record<string, SitePage[]> = {}
    filteredPages.forEach((page) => {
      if (!groups[page.category]) {
        groups[page.category] = []
      }
      groups[page.category].push(page)
    })
    return groups
  }, [filteredPages])

  const totalPages = sitePages.length
  const filteredCount = filteredPages.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Site Map</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Navigate through all available content in the I5 Development Framework. Discover comprehensive resources for
            real estate development and market analysis.
          </p>

          {/* Search Section */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search pages, content, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
              aria-label="Search sitemap"
            />
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-sm text-gray-500">
            {searchTerm ? (
              <>
                Showing {filteredCount} of {totalPages} pages
              </>
            ) : (
              <>{totalPages} pages available</>
            )}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="space-y-12">
          {Object.entries(groupedPages).map(([category, pages], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || FileText
            const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors["Navigation"]

            return (
              <motion.section
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${colorClass}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                    <p className="text-gray-600">
                      {pages.length} page{pages.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Pages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pages.map((page, pageIndex) => (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + pageIndex * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="h-full"
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 group">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {page.title}
                            </CardTitle>
                            {page.isExternal && <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />}
                          </div>
                          <Badge variant="secondary" className={`w-fit text-xs ${colorClass}`}>
                            {category}
                          </Badge>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                            {page.description}
                          </CardDescription>

                          <div className="flex items-center justify-between">
                            <Link
                              href={page.path}
                              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                              aria-label={`Visit ${page.title}`}
                            >
                              Visit Page
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>

                            {page.lastUpdated && (
                              <span className="text-xs text-gray-400">
                                Updated {new Date(page.lastUpdated).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* No Results State */}
        {filteredCount === 0 && searchTerm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No pages found</h3>
            <p className="text-gray-600 mb-4">
              No pages match your search for "{searchTerm}". Try different keywords or browse by category.
            </p>
            <button onClick={() => setSearchTerm("")} className="text-blue-600 hover:text-blue-800 font-medium">
              Clear search
            </button>
          </motion.div>
        )}

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
        >
          <p>
            This sitemap is automatically updated as new content is added to the I5 Development Framework. Last updated:{" "}
            {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
