"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Ensure page starts at top when route changes
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "auto" })
    }

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(scrollToTop)

    // Backup scroll to top after a short delay
    const timeoutId = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])
}
