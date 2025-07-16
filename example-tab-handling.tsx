"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ProcurementContractsFramework() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(0)

  // Read tab parameter from URL and set active tab
  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam) {
      const tabIndex = Number.parseInt(tabParam, 10)
      if (!isNaN(tabIndex) && tabIndex >= 0 && tabIndex <= 5) {
        setActiveTab(tabIndex)
      }
    }
  }, [searchParams])

  const tabs = [
    "Overview",
    "Procurement Strategy",
    "Contract Models",
    "Contract Management",
    "Supply Chain Ecosystem",
    "Comparative Analysis",
  ]

  // Rest of your component code...
}
