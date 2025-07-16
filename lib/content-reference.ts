// Simple content reference system
export const contentAssets = {
  "kpi-risk-framework": {
    assetPath: "/assets/kpi-risk-framework.md",
    sections: [
      "overview",
      "kpis",
      "risk-management",
      "continuous-improvement",
      "benchmarking",
      "integrated-management",
      "platform-monitoring",
    ],
  },
  "procurement-contracts-framework": {
    assetPath: "/assets/procurement-contracts-framework.md",
    sections: ["overview", "procurement-strategy", "contract-models", "supplier-management"],
  },
  // Add other frameworks as needed
}

// Helper to get content structure
export function getContentStructure(frameworkId: string) {
  return contentAssets[frameworkId] || null
}
