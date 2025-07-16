"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback, useMemo, memo } from "react"
import Link from "next/link"

// Simple Modal component to replace the Dialog from shadcn/ui
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/70" onClick={onClose}></div>
      <div className="relative bg-gray-900/95 border border-cyan-300/30 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6 z-50">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          ✕
        </button>
        <h3 className="text-lg font-semibold text-cyan-300 mb-4">{title}</h3>
        {children}
      </div>
    </div>
  )
}

// Memoized Particle component
const Particle = memo(({ delay, duration }: { delay: number; duration: number }) => {
  const style = useMemo(
    () => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }),
    [delay, duration],
  )

  return <div className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse" style={style} />
})

Particle.displayName = "Particle"

// Static data objects - moved outside component to prevent recreation
const STRATEGY_EXECUTION_DETAILS = {
  "strategic-risk": {
    financial: {
      title: "Financial Strategy Execution",
      points: [
        "Leverages BoK platform for standardized cost models and ROI optimization",
        "Achieves 15-25% cost savings through productization and economies of scale",
        "Accelerates time-to-revenue through parallel manufacturing and site work",
        "Platform TCO tracking ensures technology investment returns",
      ],
    },
    learning: {
      title: "Learning & Growth Strategy Execution",
      points: [
        "Digital skills training creates tech-savvy workforce",
        "Platform expertise becomes competitive advantage",
        "Innovation culture drives technology adoption",
        "Continuous learning adapts to tech evolution",
      ],
    },
    customer: {
      title: "Customer Strategy Execution",
      points: [
        "Financial stability ensures project completion guarantees",
        "Transparent financial management builds customer trust",
        "Flexible payment options improve customer acquisition",
        "Strong financial position enables better warranty terms",
      ],
    },
  },
  "operational-risk": {
    process: {
      title: "Internal Process Strategy Execution",
      points: [
        "DfMA platform optimizes designs for 30-50% faster assembly",
        "AEC platform enables real-time coordination reducing rework by 70-90%",
        "Parallel manufacturing and site work compress schedules by 25-35%",
        "Automated quality control systems ensure consistent standards",
      ],
    },
    customer: {
      title: "Customer Strategy Execution",
      points: [
        "Factory-controlled quality reduces defects by 50-70%",
        "Predictable delivery schedules improve customer confidence",
        "Virtual Showroom allows early engagement and customization",
        "Standardized components enable reliable warranty performance",
      ],
    },
    financial: {
      title: "Financial Strategy Execution",
      points: [
        "Reduced rework and delays lower project costs by 15-20%",
        "Predictable schedules improve cash flow management",
        "Volume procurement agreements reduce material costs",
        "Platform data enables accurate cost forecasting",
      ],
    },
  },
  "financial-risk": {
    financial: {
      title: "Financial Strategy Execution",
      points: [
        "Financial Framework provides structured investment planning",
        "Real-time cost tracking via AEC platform prevents overruns",
        "Scenario modeling capabilities support decision-making",
        "Performance monitoring tracks margins and cash flow continuously",
      ],
    },
    process: {
      title: "Internal Process Strategy Execution",
      points: [
        "Integrated scheduling optimizes resource allocation",
        "Digital payment systems streamline contractor management",
        "Platform integration ensures financial-operational alignment",
        "Automated reporting reduces administrative overhead",
      ],
    },
  },
  "compliance-risk": {
    process: {
      title: "Internal Process Strategy Execution",
      points: [
        "BoK maintains up-to-date regulatory standards and codes",
        "AEC platform tracks compliance documentation automatically",
        "Digital audit trails ensure traceability and accountability",
        "Standardized processes reduce compliance variations",
      ],
    },
    financial: {
      title: "Financial Strategy Execution",
      points: [
        "Proactive compliance reduces fine and penalty risks",
        "Standardized approaches lower compliance costs",
        "Digital documentation reduces administrative expenses",
        "Faster approvals accelerate project timelines",
      ],
    },
    customer: {
      title: "Customer Strategy Execution",
      points: [
        "Consistent compliance ensures promised features delivery",
        "Transparent documentation builds customer trust",
        "Standardized quality meets regulatory requirements",
        "Digital records enable easy warranty verification",
      ],
    },
  },
  "reputational-risk": {
    customer: {
      title: "Customer Strategy Execution",
      points: [
        "Virtual Showroom manages expectations transparently",
        "Quality metrics tracked in real-time via platforms",
        "Customer feedback integrated into BoK for improvements",
        "Consistent delivery builds brand reputation",
      ],
    },
    financial: {
      title: "Financial Strategy Execution",
      points: [
        "Strong reputation enables premium pricing strategies",
        "Reduced marketing costs through referral business",
        "Predictable quality lowers warranty provisions",
        "Brand value creation tracked as intangible asset",
      ],
    },
    learning: {
      title: "Learning & Growth Strategy Execution",
      points: [
        "Strong employer brand attracts top talent globally",
        "Knowledge sharing culture improves retention rates",
        "Innovation programs enhance company reputation",
        "Digital skills development creates competitive advantage",
      ],
    },
  },
  "technology-risk": {
    process: {
      title: "Internal Process Strategy Execution",
      points: [
        "Owner-controlled platforms ensure system reliability",
        "Integrated BIM-to-manufacturing workflows reduce errors",
        "Real-time data synchronization improves coordination",
        "Cybersecurity protocols protect critical information",
      ],
    },
    customer: {
      title: "Customer Strategy Execution",
      points: [
        "Digital twin delivery enhances customer value",
        "Smart building systems improve user experience",
        "Data security protects customer information",
        "Technology enables ongoing customer engagement",
      ],
    },
    financial: {
      title: "Financial Strategy Execution",
      points: [
        "Platform investments deliver measurable ROI",
        "Reduced IT costs through standardized systems",
        "Data analytics improve financial forecasting",
        "Technology enables new revenue streams",
      ],
    },
  },
}

const RISK_MANAGEMENT_DETAILS = {
  "strategic-risk": {
    title: "How I5 Manages Strategic Risk",
    content: `I5 Framework Management: Structured phases ensure market validation before major investment. Governance Framework: Stage gates prevent progression without strategic alignment. Financial Framework: ROI models validate strategic decisions. Operational Ecosystem: BoK stores market intelligence; Virtual Showroom tests product-market fit; AEC platform models scenarios`,
  },
  "operational-risk": {
    title: "How I5 Manages Operational Risk",
    content: `I5 Framework Management: Parallel manufacturing and site work reduce delay risks. Performance Monitoring: Real-time tracking of quality and schedule metrics. Procurement Framework: Long-term partnerships ensure reliable contractors. Operational Ecosystem: AEC platform coordinates all activities; DfMA ensures manufacturability; BoK captures lessons learned`,
  },
  "financial-risk": {
    title: "How I5 Manages Financial Risk",
    content: `Financial Framework: Structured investment planning and ROI methodology. Performance Monitoring: Financial KPIs track margins and cash flow. Governance Framework: Financial controls and authorization limits. Operational Ecosystem: AEC integrates with financial systems; Real-time cost tracking; Scenario modeling capabilities`,
  },
  "compliance-risk": {
    title: "How I5 Manages Compliance Risk",
    content: `Governance Framework: Clear decision rights and compliance protocols. Performance Monitoring: Compliance scorecards and audit trails. Procurement Framework: Contracts include compliance requirements. Operational Ecosystem: BoK maintains regulatory standards; AEC tracks compliance documentation; Digital audit trails`,
  },
  "reputational-risk": {
    title: "How I5 Manages Reputational Risk",
    content: `Performance Monitoring: Quality metrics and customer satisfaction tracking. Procurement Framework: Contractor performance management. Governance Framework: Quality standards and escalation procedures. Operational Ecosystem: Virtual Showroom manages expectations; AEC tracks quality data; BoK ensures consistent standards`,
  },
  "technology-risk": {
    title: "How I5 Manages Technology/Cyber Risk",
    content: `Governance Framework: Owner controls core platforms with security protocols. Performance Monitoring: Platform health metrics and cyber incident tracking. I5 Framework: Technology integration points at each phase. Operational Ecosystem: Owner-controlled platforms (BoK, VS, DfMA, AEC) with defined security; Partner technology governance`,
  },
}

const RISK_IMPACT_DETAILS = {
  "strategic-risk": {
    title: "Strategic Risk Impact on BSC",
    impacts: [
      {
        perspective: "Financial Perspective",
        type: "direct",
        description:
          "Poor market timing traps capital in land banks during downturns. Wrong product mix (e.g., luxury vs. affordable) leads to slow absorption rates and reduced IRR.",
      },
      {
        perspective: "Customer Perspective",
        type: "direct",
        description:
          "Misreading demographic trends or buyer preferences leads to unsold inventory. Poor location selection affects resale values and customer satisfaction.",
      },
      {
        perspective: "Learning & Growth Perspective",
        type: "indirect",
        description:
          "Strategic pivots require new organizational capabilities. Entering new segments demands different expertise and green building certifications.",
      },
      {
        perspective: "Internal Process Perspective",
        type: "potential",
        description:
          "Rapid expansion may overwhelm existing processes. Aggressive timelines from strategic initiatives can compromise quality controls.",
      },
    ],
  },
  "operational-risk": {
    title: "Operational Risk Impact on BSC",
    impacts: [
      {
        perspective: "Internal Process Perspective",
        type: "direct",
        description:
          "Contractor failures, material shortages, and weather delays directly impact schedules. Safety incidents can halt work and trigger investigations.",
      },
      {
        perspective: "Customer Perspective",
        type: "indirect",
        description:
          "Operational failures affect customer experience through delayed handovers and construction defects. Poor finishing quality leads to warranty claims.",
      },
      {
        perspective: "Financial Perspective",
        type: "indirect",
        description:
          "Operational inefficiencies erode project margins through cost overruns and rework expenses. Extended construction periods increase financing costs.",
      },
      {
        perspective: "Learning & Growth Perspective",
        type: "potential",
        description:
          "Persistent operational issues may indicate skill gaps or training needs. High defect rates point to workforce capability issues.",
      },
    ],
  },
  "financial-risk": {
    title: "Financial Risk Impact on BSC",
    impacts: [
      {
        perspective: "Financial Perspective",
        type: "direct",
        description:
          "Interest rate increases directly impact project viability and buyer affordability. Construction loan terms affect project cash flow.",
      },
      {
        perspective: "Internal Process Perspective",
        type: "indirect",
        description:
          "Financial constraints force operational compromises. Cash flow issues may delay material procurement or contractor payments.",
      },
      {
        perspective: "Customer Perspective",
        type: "potential",
        description:
          "Financial distress becomes visible to customers through stalled projects or contractor payment issues, damaging buyer confidence.",
      },
    ],
  },
  "compliance-risk": {
    title: "Compliance Risk Impact on BSC",
    impacts: [
      {
        perspective: "Internal Process Perspective",
        type: "direct",
        description:
          "Building code requirements dictate design and construction methods. Permit delays can halt construction entirely.",
      },
      {
        perspective: "Financial Perspective",
        type: "indirect",
        description:
          "Non-compliance results in costly consequences: stop-work orders, fines, redesign costs, and legal fees.",
      },
      {
        perspective: "Customer Perspective",
        type: "indirect",
        description:
          "Compliance issues affect product delivery and features. Zoning changes may eliminate promised amenities.",
      },
      {
        perspective: "Learning & Growth Perspective",
        type: "potential",
        description:
          "Complex regulatory environments require continuous learning. New sustainability regulations demand green building expertise.",
      },
    ],
  },
  "reputational-risk": {
    title: "Reputational Risk Impact on BSC",
    impacts: [
      {
        perspective: "Customer Perspective",
        type: "direct",
        description:
          "Construction quality issues generate negative publicity and social media backlash. Delayed projects damage credibility for future launches.",
      },
      {
        perspective: "Financial Perspective",
        type: "indirect",
        description:
          "Reputation directly impacts pricing power and sales velocity. Negative reputation requires increased marketing spend and sales incentives.",
      },
      {
        perspective: "Learning & Growth Perspective",
        type: "indirect",
        description:
          "Poor reputation hampers talent acquisition in competitive construction labor markets. High turnover increases training costs.",
      },
    ],
  },
  "technology-risk": {
    title: "Technology/Cyber Risk Impact on BSC",
    impacts: [
      {
        perspective: "Internal Process Perspective",
        type: "direct",
        description:
          "BIM system failures can halt design coordination. Project management software outages disrupt scheduling and communication.",
      },
      {
        perspective: "Customer Perspective",
        type: "indirect",
        description:
          "Technology failures affect customer experience through smart home system malfunctions and data breaches exposing buyer information.",
      },
      {
        perspective: "Financial Perspective",
        type: "indirect",
        description:
          "Technology incidents create direct costs through system recovery and potential ransomware payments. Cyber insurance premiums increase.",
      },
      {
        perspective: "Learning & Growth Perspective",
        type: "potential",
        description:
          "Technology disruptions may reveal skills gaps in digital tools. BIM adoption failures indicate training needs.",
      },
    ],
  },
}

const RISK_BOXES = [
  {
    id: "strategic-risk",
    title: "Strategic Risk",
    content: "Market timing, land acquisition, product mix decisions",
    impacts: "financial:direct,customer:direct,learning:indirect,process:potential",
    frameworks: "framework:primary,governance:secondary,financial:secondary",
  },
  {
    id: "operational-risk",
    title: "Operational Risk",
    content: "Construction delays, contractor issues, site safety",
    impacts: "process:direct,customer:indirect,financial:indirect,learning:potential",
    frameworks: "framework:primary,performance:primary,procurement:secondary",
  },
  {
    id: "financial-risk",
    title: "Financial Risk",
    content: "Interest rates, project financing, buyer defaults",
    impacts: "financial:direct,process:indirect,customer:potential",
    frameworks: "financial:primary,performance:secondary,governance:secondary",
  },
  {
    id: "compliance-risk",
    title: "Compliance Risk",
    content: "Building codes, permits, environmental, zoning",
    impacts: "process:direct,financial:indirect,customer:indirect,learning:potential",
    frameworks: "governance:primary,performance:primary,procurement:secondary",
  },
  {
    id: "reputational-risk",
    title: "Reputational Risk",
    content: "Quality issues, delivery delays, community impact",
    impacts: "customer:direct,financial:indirect,learning:indirect",
    frameworks: "performance:primary,procurement:secondary,governance:secondary",
  },
  {
    id: "technology-risk",
    title: "Technology/Cyber Risk",
    content: "BIM failures, smart systems, project software",
    impacts: "process:direct,customer:indirect,financial:indirect,learning:potential",
    frameworks: "governance:primary,performance:primary,framework:secondary",
  },
]

const PERSPECTIVE_BOXES = [
  {
    id: "financial-perspective",
    title: "Financial Perspective",
    content:
      "Focus: Project profitability, cash flow management. Key Metrics: IRR, NPV, Land Bank Value, Debt Coverage",
  },
  {
    id: "customer-perspective",
    title: "Customer Perspective",
    content:
      "Focus: Buyer satisfaction, delivery reliability. Key Metrics: On-time Delivery, Defect Rate, Resale Value",
  },
  {
    id: "process-perspective",
    title: "Internal Process Perspective",
    content: "Focus: Construction efficiency, quality, safety. Key Metrics: Cycle Time, Safety Incidents, Rework %",
  },
  {
    id: "learning-perspective",
    title: "Learning & Growth Perspective",
    content:
      "Focus: Workforce capability, innovation adoption. Key Metrics: Safety Certifications, BIM Adoption, Green Building Expertise",
  },
]

const FRAMEWORK_BOXES = [
  { id: "framework", title: "I5 Framework\n(Project Delivery)" },
  { id: "performance", title: "I5 Performance Monitoring\n& Risk Framework" },
  { id: "procurement", title: "I5 Procurement &\nContract Framework" },
  { id: "financial", title: "I5 Financial\nFramework" },
  { id: "governance", title: "I5 Operational &\nGovernance Framework" },
]

const STRENGTH_CLASSES = {
  direct: "bg-blue-400/10 border-blue-400/60 shadow-lg shadow-blue-400/10 animate-pulse-slow",
  indirect: "bg-orange-400/10 border-orange-400/60 shadow-lg shadow-orange-400/10 animate-pulse-slow",
  potential: "bg-amber-400/10 border-amber-400/60 shadow-lg shadow-amber-400/10 animate-pulse-slow",
}

const IMPACT_TYPE_STYLES = {
  direct: "bg-blue-400/15 border-l-4 border-l-blue-400/80 border border-blue-400/30",
  indirect: "bg-orange-400/15 border-l-4 border-l-orange-400/80 border border-orange-400/30",
  potential: "bg-amber-400/15 border-l-4 border-l-amber-400/80 border border-amber-400/30",
}

const CONNECTION_COLORS = {
  direct: "#60a5fa",
  indirect: "#fb923c",
  potential: "#fbbf24",
}

// CSS for custom animations - to be included in your project
const customStyles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.bg-radial-gradient {
  background: radial-gradient(var(--tw-gradient-from), var(--tw-gradient-to));
}

.scale-103 {
  transform: scale(1.03);
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
`

// Memoized components
const PerspectiveBox = memo(
  ({
    box,
    selectedRisk,
    activeConnections,
  }: {
    box: any
    selectedRisk: string | null
    activeConnections: any[]
  }) => {
    const highlightClass = useMemo(() => {
      if (!selectedRisk) return ""
      const connection = activeConnections.find((conn) => conn.perspective === box.id.replace("-perspective", ""))
      return connection ? STRENGTH_CLASSES[connection.strength as keyof typeof STRENGTH_CLASSES] || "" : ""
    }, [selectedRisk, activeConnections, box.id])

    const contentParts = useMemo(() => {
      return box.content.split(". ").map((sentence: string, idx: number) => (
        <span key={idx}>
          {sentence.includes("Focus:") && <strong className="text-cyan-300">Focus:</strong>}
          {sentence.includes("Key Metrics:") && <strong className="text-cyan-300">Key Metrics:</strong>}
          {sentence.replace("Focus:", "").replace("Key Metrics:", "")}
          {idx < box.content.split(". ").length - 1 && ". "}
        </span>
      ))
    }, [box.content])

    return (
      <div
        id={box.id}
        className={`flex-1 p-2 rounded-xl bg-white/3 backdrop-blur-sm border border-white/10 transition-all duration-500 flex flex-col justify-center relative overflow-hidden group hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${highlightClass}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        <div className="text-xs font-semibold mb-1 text-blue-50">{box.title}</div>
        <div className="text-xs leading-tight text-blue-200">{contentParts}</div>
      </div>
    )
  },
)

PerspectiveBox.displayName = "PerspectiveBox"

const RiskBox = memo(
  ({
    box,
    selectedRisk,
    onSelectRisk,
  }: {
    box: any
    selectedRisk: string | null
    onSelectRisk: (box: any) => void
  }) => {
    const isSelected = selectedRisk === box.id

    const handleClick = useCallback(() => {
      onSelectRisk(box)
    }, [box, onSelectRisk])

    return (
      <div
        id={box.id}
        className={`flex-1 p-2 rounded-xl bg-white/3 backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-500 flex flex-col justify-center relative overflow-hidden group hover:scale-[1.02] hover:-translate-x-1 hover:shadow-lg hover:shadow-black/40 hover:border-orange-400/50 mx-0 ml-12 ${isSelected ? "bg-gradient-to-br from-orange-400/15 to-amber-400/15 border-orange-400/70 -translate-x-1 scale-[1.03] shadow-xl shadow-orange-400/15" : ""}`}
        onClick={handleClick}
      >
        <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-radial-gradient from-white/10 to-transparent rounded-full transition-all duration-500 -translate-x-1/2 -translate-y-1/2 group-hover:w-64 group-hover:h-64"></div>
        <div className="text-xs font-semibold mb-1 text-blue-50 relative z-10">{box.title}</div>
        <div className="text-xs text-blue-200 relative z-10">{box.content}</div>
      </div>
    )
  },
)

RiskBox.displayName = "RiskBox"

const FrameworkBox = memo(
  ({
    framework,
    selectedRisk,
  }: {
    framework: any
    selectedRisk: string | null
  }) => {
    const highlightClass = useMemo(() => {
      if (!selectedRisk) return ""

      const selectedRiskData = RISK_BOXES.find((r) => r.id === selectedRisk)
      if (!selectedRiskData) return ""

      const frameworks = selectedRiskData.frameworks.split(",")
      const frameworkMatch = frameworks.find((f) => f.startsWith(framework.id))

      if (!frameworkMatch) return ""

      const [, level] = frameworkMatch.split(":")

      if (level === "primary") {
        return STRENGTH_CLASSES.direct
      } else if (level === "secondary") {
        return STRENGTH_CLASSES.indirect
      }

      return ""
    }, [selectedRisk, framework.id])

    return (
      <div
        id={framework.id}
        className={`p-2 rounded-xl text-center bg-white/3 backdrop-blur-sm border border-white/10 transition-all duration-500 cursor-pointer relative overflow-hidden group hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/40 ${highlightClass}`}
      >
        <div className="absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:w-32 group-hover:h-32"></div>
        <div className="text-xs font-semibold leading-tight text-blue-50 relative z-10 whitespace-pre-line">
          {framework.title}
        </div>
      </div>
    )
  },
)

FrameworkBox.displayName = "FrameworkBox"

const ImpactDetailPanel = memo(({ selectedRisk }: { selectedRisk: string | null }) => {
  const impactDetails = selectedRisk ? RISK_IMPACT_DETAILS[selectedRisk as keyof typeof RISK_IMPACT_DETAILS] : null

  if (!impactDetails) {
    return (
      <div className="text-center py-4 text-blue-200">
        <div className="text-2xl mb-2 opacity-30">📊</div>
        <p className="text-xs">Select a risk category to view detailed impact analysis</p>
        <div className="mt-2 space-y-1 text-xs opacity-70">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-1 bg-blue-400 rounded"></div>
            <span>Direct Impact</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-1 bg-orange-400 rounded"></div>
            <span>Indirect Impact</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-1 bg-amber-400 rounded"></div>
            <span>Potential Impact</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {impactDetails.impacts.map((impact: any, idx: number) => (
        <div
          key={idx}
          className={`p-2 rounded-lg transition-all duration-300 hover:translate-x-1 ${IMPACT_TYPE_STYLES[impact.type as keyof typeof IMPACT_TYPE_STYLES]}`}
        >
          <strong className="block mb-1 text-xs text-white uppercase tracking-wide font-semibold">
            {impact.perspective} - {impact.type} impact
          </strong>
          <div className="text-xs leading-tight">{impact.description}</div>
        </div>
      ))}
    </div>
  )
})

ImpactDetailPanel.displayName = "ImpactDetailPanel"

// Custom hook for canvas operations - optimized
const useCanvasDrawing = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  selectedRisk: string | null,
  activeConnections: any[],
) => {
  const drawCurvedLine = useCallback(
    (ctx: CanvasRenderingContext2D, startX: number, startY: number, endX: number, endY: number, color: string) => {
      ctx.save()
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.8
      ctx.lineCap = "round"
      ctx.shadowColor = color
      ctx.shadowBlur = 5

      const controlX = (startX + endX) / 2
      const controlY = Math.min(startY, endY) - 30

      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.quadraticCurveTo(controlX, controlY, endX, endY)
      ctx.stroke()
      ctx.restore()
    },
    [],
  )

  const drawConnections = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !selectedRisk) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    activeConnections.forEach((conn) => {
      const riskEl = document.getElementById(selectedRisk)
      const perspEl = document.getElementById(`${conn.perspective}-perspective`)

      if (riskEl && perspEl) {
        const riskRect = riskEl.getBoundingClientRect()
        const perspRect = perspEl.getBoundingClientRect()
        const canvasRect = canvas.getBoundingClientRect()

        const startX = riskRect.left - canvasRect.left + 2
        const startY = riskRect.top - canvasRect.top + riskRect.height / 2
        const endX = perspRect.right - canvasRect.left - 2
        const endY = perspRect.top - canvasRect.top + perspRect.height / 2

        drawCurvedLine(
          ctx,
          startX,
          startY,
          endX,
          endY,
          CONNECTION_COLORS[conn.strength as keyof typeof CONNECTION_COLORS],
        )
      }
    })
  }, [canvasRef, selectedRisk, activeConnections, drawCurvedLine])

  return { drawConnections }
}

// Strategy execution dialog component
const StrategyExecutionDialog = memo(
  ({
    isOpen,
    onClose,
    selectedRisk,
    activeConnections,
  }: {
    isOpen: boolean
    onClose: () => void
    selectedRisk: string | null
    activeConnections: any[]
  }) => {
    if (!selectedRisk || !activeConnections.length) return null

    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Strategy Execution Details">
        <div className="space-y-4">
          {activeConnections.map((conn, idx) => {
            const strategyDetails = STRATEGY_EXECUTION_DETAILS[selectedRisk as keyof typeof STRATEGY_EXECUTION_DETAILS]
            const strategy = strategyDetails?.[conn.perspective as keyof typeof strategyDetails]
            if (!strategy) return null

            return (
              <div key={idx} className="mb-3 pb-3 border-b border-white/10 last:border-b-0">
                <h5 className="text-sm font-semibold text-yellow-300 mb-2">{strategy.title}</h5>
                <ul className="space-y-1">
                  {strategy.points.map((point, pidx) => (
                    <li key={pidx} className="text-xs text-blue-200 leading-relaxed">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Modal>
    )
  },
)

StrategyExecutionDialog.displayName = "StrategyExecutionDialog"

// Risk management dialog component
const RiskManagementDialog = memo(
  ({
    isOpen,
    onClose,
    selectedRisk,
  }: {
    isOpen: boolean
    onClose: () => void
    selectedRisk: string | null
  }) => {
    if (!selectedRisk) return null
    const riskDetails = RISK_MANAGEMENT_DETAILS[selectedRisk as keyof typeof RISK_MANAGEMENT_DETAILS]

    return (
      <Modal isOpen={isOpen} onClose={onClose} title={riskDetails.title}>
        <div className="text-sm text-blue-100 leading-relaxed whitespace-pre-wrap">{riskDetails.content}</div>
      </Modal>
    )
  },
)

RiskManagementDialog.displayName = "RiskManagementDialog"

// Main component
const I5DashboardStandalone: React.FC = () => {
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null)
  const [activeConnections, setActiveConnections] = useState<any[]>([])
  const [showStrategyDialog, setShowStrategyDialog] = useState(false)
  const [showRiskDialog, setShowRiskDialog] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const topSectionRef = useRef<HTMLDivElement>(null)
  const [showHint, setShowHint] = useState(true)

  const { drawConnections } = useCanvasDrawing(canvasRef, selectedRisk, activeConnections)

  // Memoized particles - reduced count for performance
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        key: i,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
      })),
    [],
  )

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const topSection = topSectionRef.current
    if (canvas && topSection) {
      canvas.width = topSection.offsetWidth
      canvas.height = topSection.offsetHeight
    }
  }, [])

  const selectRisk = useCallback((riskData: any) => {
    setSelectedRisk(riskData.id)
    setShowHint(false) // Hide hint when risk is selected

    const impacts = riskData.impacts.split(",")
    const connections = impacts.map((impact: string) => {
      const [perspectiveId, strength] = impact.split(":")
      return { perspective: perspectiveId, strength: strength }
    })
    setActiveConnections(connections)
  }, [])

  const clearSelection = useCallback(() => {
    setSelectedRisk(null)
    setActiveConnections([])
    setShowHint(true) // Show hint again when cleared

    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [])

  // Effects
  useEffect(() => {
    resizeCanvas()
    const handleResize = () => {
      resizeCanvas()
      if (selectedRisk) {
        setTimeout(drawConnections, 100)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [resizeCanvas, selectedRisk, drawConnections])

  useEffect(() => {
    if (selectedRisk) {
      setTimeout(drawConnections, 100)
    }
  }, [selectedRisk, activeConnections, drawConnections])

  return (
    <>
      {/* Inject custom styles */}
      <style>{customStyles}</style>

      <div
        className="min-h-[calc(100vh-200px)] text-white overflow-hidden relative pb-8"
        style={{ background: "#232A39" }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <Particle key={particle.key} delay={particle.delay} duration={particle.duration} />
          ))}
        </div>

        <div className="relative z-10 p-4 h-full flex flex-col min-h-0 overflow-hidden pb-0">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2 animate-fadeIn">
            

            <div className="flex-1 text-center">
              <h1 className="text-3xl font-semibold bg-gradient-to-r from-slate-100 via-blue-200 to-slate-100 bg-clip-text text-transparent tracking-tight">
                Integrated Risk-BSC-I5 Management
              </h1>
            </div>
          </div>

          {/* refresh button */}
          <div className="flex justify-center mb-4">
            <Link
              href="/insights/dashboard-a"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all hover:scale-105 flex items-center gap-3 border-2 border-white/30 animate-pulse"
            >
              <span className="tracking-tight">Refresh Dashboard</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                <path d="M16 16h5v5"></path>
              </svg>
            </Link>
          </div>

          {/* Legend */}
          <div className="mb-2 animate-fadeIn">
            <div className="flex justify-center gap-4 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg shadow-black/15">
              <div className="flex items-center gap-2 text-xs text-blue-100">
                <div className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-sm shadow-sm"></div>
                <span>Direct Impact</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-100">
                <div className="w-4 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-sm shadow-sm"></div>
                <span>Indirect Impact</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-blue-100">
                <div className="w-4 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-sm shadow-sm"></div>
                <span>Potential Impact</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col flex-1 min-h-0 pb-1">
            {/* Top Section */}
            <div
              ref={topSectionRef}
              className="relative flex justify-between gap-4 flex-1 mb-4 animate-fadeIn min-h-[400px]"
            >
              {/* BSC Column */}
              <div className="flex-1 flex flex-col w-1/4 min-w-0">
                <div className="text-center text-lg font-semibold mb-2 tracking-tight bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                  Balanced Scorecard
                </div>
                <div className="flex-1 flex flex-col gap-2 min-h-0">
                  {PERSPECTIVE_BOXES.map((box) => (
                    <PerspectiveBox
                      key={box.id}
                      box={box}
                      selectedRisk={selectedRisk}
                      activeConnections={activeConnections}
                    />
                  ))}
                </div>
              </div>

              {/* Canvas for connections */}
              <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

              {/* Risk Column */}
              <div className="flex-1 flex flex-col w-1/4 min-w-0">
                <div className="text-center text-lg font-semibold mb-2 tracking-tight bg-gradient-to-r from-orange-400 to-slate-300 bg-clip-text text-transparent">
                  Risk Categories
                  <div className="text-sm font-normal tracking-normal opacity-70 mt-1">Click to explore impacts</div>
                </div>
                <div className="flex-1 flex flex-col gap-2 min-h-0">
                  {RISK_BOXES.map((box) => (
                    <RiskBox key={box.id} box={box} selectedRisk={selectedRisk} onSelectRisk={selectRisk} />
                  ))}
                </div>
              </div>

              {/* Animated Hint */}
              {showHint && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-bounce">
                  <div className="bg-yellow-400/90 backdrop-blur-sm border border-yellow-300 rounded-lg px-3 py-2 shadow-lg shadow-yellow-400/30">
                    <div className="text-xs font-semibold text-gray-900 whitespace-nowrap">
                      Click any of the Risk Categories
                    </div>
                  </div>
                </div>
              )}

              {/* Impact Details Panel */}
              <div className="w-2/5 bg-gray-900/90 backdrop-blur-lg border border-cyan-300/50 rounded-xl p-3 shadow-xl shadow-black/25 z-20 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm text-cyan-300 font-semibold">
                    {selectedRisk && RISK_IMPACT_DETAILS[selectedRisk as keyof typeof RISK_IMPACT_DETAILS]
                      ? RISK_IMPACT_DETAILS[selectedRisk as keyof typeof RISK_IMPACT_DETAILS].title
                      : "Risk Impact Analysis"}
                  </h4>
                  {selectedRisk && (
                    <button
                      onClick={clearSelection}
                      className="text-xs px-2 py-0.5 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 hover:bg-red-500/30 transition-colors flex-shrink-0"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <ImpactDetailPanel selectedRisk={selectedRisk} />
              </div>
            </div>

            {/* Bottom Section - I5 Ecosystem */}
            <div className="animate-fadeIn flex-shrink-0 mb-4">
              <div className="text-center p-2 bg-gradient-to-br from-blue-400/15 to-slate-400/15 backdrop-blur-sm border border-blue-400/30 rounded-t-xl text-sm font-semibold uppercase tracking-wide relative overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-blue-300/8 to-transparent animate-spin-slow"></div>
                <span className="relative z-10 tracking-tight">I5 Operational Ecosystem</span>
              </div>
              <div className="grid grid-cols-5 gap-2 p-3 bg-white/2 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-xl">
                {FRAMEWORK_BOXES.map((framework) => (
                  <FrameworkBox key={framework.id} framework={framework} selectedRisk={selectedRisk} />
                ))}
              </div>

              {/* Info Panels */}
              {selectedRisk && (
                <div className="grid grid-cols-3 gap-3 mt-3 h-auto">
                  <div className="p-3 bg-gray-900/85 backdrop-blur-lg rounded-xl border border-cyan-300/20 shadow-xl shadow-black/25 text-xs overflow-y-auto">
                    <h3 className="text-sm mb-2 text-cyan-300 font-semibold text-center">
                      I5 Management: {RISK_BOXES.find((r) => r.id === selectedRisk)?.title}
                    </h3>
                    <div className="text-blue-100 leading-tight">
                      {RISK_MANAGEMENT_DETAILS[selectedRisk as keyof typeof RISK_MANAGEMENT_DETAILS]?.content}
                    </div>
                  </div>

                  <div className="p-3 bg-gray-900/85 backdrop-blur-lg rounded-xl border border-cyan-300/20 shadow-xl shadow-black/25 text-xs overflow-y-auto col-span-2">
                    <h3 className="text-sm mb-2 text-cyan-300 font-semibold text-center">How I5 Executes Strategy</h3>
                    <div className="grid grid-cols-3 gap-2 divide-x divide-white/20">
                      {Object.entries(
                        activeConnections.reduce((acc: any, conn) => {
                          if (!acc[conn.perspective]) {
                            acc[conn.perspective] = []
                          }
                          acc[conn.perspective].push(conn)
                          return acc
                        }, {}),
                      ).map(([perspective, connections], index) => {
                        const strategyDetails =
                          STRATEGY_EXECUTION_DETAILS[selectedRisk as keyof typeof STRATEGY_EXECUTION_DETAILS]
                        const strategy = strategyDetails?.[perspective as keyof typeof strategyDetails]
                        if (!strategy) return null

                        return (
                          <div key={perspective} className={`${index > 0 ? "pl-2" : ""}`}>
                            <h5 className="text-xs font-semibold text-yellow-300 mb-1">{strategy.title}</h5>
                            <ul className="space-y-0.5">
                              {strategy.points.map((point, pidx) => (
                                <li key={pidx} className="text-xs text-blue-200 leading-tight">
                                  • {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dialogs */}
        <StrategyExecutionDialog
          isOpen={showStrategyDialog}
          onClose={() => setShowStrategyDialog(false)}
          selectedRisk={selectedRisk}
          activeConnections={activeConnections}
        />

        <RiskManagementDialog
          isOpen={showRiskDialog}
          onClose={() => setShowRiskDialog(false)}
          selectedRisk={selectedRisk}
        />
      </div>
    </>
  )
}

export default I5DashboardStandalone
