"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { name: "market context", path: "/market-context" },
    { name: "foundational principles", path: "/foundational-principles" },
    { name: "framework implementation", path: "/framework-implementation" },
    { name: "comparative analysis", path: "/comparative-analysis" },
    { name: "operational ecosystem", path: "/operational-ecosystem" },
    { name: "product organization", path: "/product-organization" },
    { name: "financial framework", path: "/financial-framework" },
    { name: "procurement & contracts", path: "/procurement-contracts" },
    { name: "steady-state operations", path: "/steady-state-operations" },
    { name: "performance & risk", path: "/performance-risk-management" },
  ]

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (pathname === path) {
      // If we're already on this page, scroll to top with enhanced behavior
      const scrollToTop = () => {
        // Force scroll to top immediately, then smooth scroll for visual feedback
        window.scrollTo({ top: 0, behavior: "smooth" })

        // Ensure we're at the top after animation completes
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "auto" })
        }, 500)
      }

      // Execute scroll with slight delay to ensure DOM is ready
      requestAnimationFrame(scrollToTop)
    } else {
      // Navigate to the new page - the useScrollToTop hook will handle scrolling to top
      router.push(path)
    }
  }

  const handleKeyDown = (path: string, e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleNavClick(path, e as any)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="px-4 md:px-16 lg:px-24 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center pr-8">
            <img
              src="/assets/i5-logo.svg"
              alt="I5 Model Framework"
              className="h-24 w-24 object-contain aspect-square transition-all duration-200 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center">
            {navItems.map((item, index) => (
              <React.Fragment key={item.path}>
                {index > 0 && <div className="h-6 w-px bg-gray-500 mx-4" aria-hidden="true" />}
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  onKeyDown={(e) => handleKeyDown(item.path, e)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Navigate to ${item.name}`}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-black relative px-3 py-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                    pathname === item.path
                      ? "text-black bg-gray-100/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"
                      layoutId="mainNavActiveIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-200 py-4 bg-gradient-to-b from-white to-gray-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    handleNavClick(item.path, e)
                    setIsMenuOpen(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      handleNavClick(item.path, e as any)
                      setIsMenuOpen(false)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Navigate to ${item.name}`}
                  className={cn(
                    "text-left text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1",
                    pathname === item.path
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
