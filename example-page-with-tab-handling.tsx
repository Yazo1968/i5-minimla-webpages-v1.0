"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ExamplePageWithTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const searchParams = useSearchParams()

  // Read tab parameter from URL and set active tab
  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam !== null) {
      const tabIndex = Number.parseInt(tabParam, 10)
      if (!isNaN(tabIndex) && tabIndex >= 0) {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-1 sm:px-2">
          <div className="overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <nav className="flex flex-nowrap min-w-full items-center justify-center">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-3 px-2 font-medium text-xs whitespace-nowrap transition-colors flex-shrink-0 border-b-4 mx-1.5 ${
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
        </div>
      </section>

      {/* Tab Content */}
      <section className="bg-white p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="py-12">
            {activeTab === 0 && <div>Overview Content</div>}
            {activeTab === 1 && <div>Procurement Strategy Content</div>}
            {activeTab === 2 && <div>Contract Models Content - This should open when clicking the nav link!</div>}
            {activeTab === 3 && <div>Contract Management Content</div>}
            {activeTab === 4 && <div>Supply Chain Ecosystem Content</div>}
            {activeTab === 5 && <div>Comparative Analysis Content</div>}
          </main>
        </div>
      </section>
    </div>
  )
}
