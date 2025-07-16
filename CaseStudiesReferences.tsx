"use client"

import React from "react"

// Self-contained Case Studies & References Component
// All dependencies and styling included for portability

interface CaseStudiesReferencesProps {
  className?: string
}

const CaseStudiesReferences: React.FC<CaseStudiesReferencesProps> = ({ className = "" }) => {
  // All data consolidated here
  const caseStudyMetrics = [
    { label: "Faster Delivery", value: "25-35%" },
    { label: "Cost Savings", value: "15-25%" },
    { label: "Cost Variance", value: "±2%" },
    { label: "Fewer Defects", value: "50-70%" },
  ]

  const globalCaseStudies = [
    "United Kingdom",
    "Sweden",
    "Singapore",
    "China",
    "Japan",
    "United States",
    "Canada",
    "Saudi Arabia",
    "Australia",
  ]

  const productizationExamples = [
    {
      category: "Standardization",
      examples: [
        {
          company: "Daiwa House",
          system: "Standardized housing components",
          metrics: "40% reduction in design time, 30% reduction in material costs, 95% reuse rate",
          relevance:
            'The I5 Model leverages a proven "product catalog" of modular elements and manages standardization through the owner\'s Body of Knowledge (BoK) platform',
        },
        {
          company: "Broad Group",
          system: "Standardized modular system",
          metrics: "40% reduction in design time, 30% reduction in material costs, 95% reuse rate",
          relevance:
            'The I5 Model leverages a proven "product catalog" of modular elements and manages standardization through the owner\'s Body of Knowledge (BoK) platform',
        },
      ],
    },
    {
      category: "Customization",
      examples: [
        {
          company: "IKEA",
          system: "Kitchen planning system",
          metrics: "200+ customization options, 90% customer satisfaction, 25% premium on units",
          relevance:
            "The I5 Model balances standardization with controlled customization, enabling efficient configuration to meet market preferences",
        },
        {
          company: "Sekisui House",
          system: "Customizable home system",
          metrics: "200+ customization options, 90% customer satisfaction, 25% premium on units",
          relevance:
            "The I5 Model balances standardization with controlled customization, enabling efficient configuration to meet market preferences",
        },
      ],
    },
    {
      category: "Production",
      examples: [
        {
          company: "Katerra",
          system: "Automated facilities",
          metrics: "35% reduction in production time, 45% increase in productivity, 60% waste reduction",
          relevance:
            "The I5 Model incorporates off-site manufacturing and automated production systems, applying DfMA principles",
        },
        {
          company: "Bouygues Construction",
          system: "Automated module production",
          metrics: "35% reduction in production time, 45% increase in productivity, 60% waste reduction",
          relevance:
            "The I5 Model incorporates off-site manufacturing and automated production systems, applying DfMA principles",
        },
      ],
    },
    {
      category: "Supply Chain",
      examples: [
        {
          company: "CCC",
          system: "Digital supply chain",
          metrics: "30% reduction in inventory costs, 40% improvement in delivery reliability, 25% cost reduction",
          relevance:
            "I5 implements a digitally integrated supply chain platform with real-time tracking and Just-In-Time (JIT) delivery",
        },
        {
          company: "Lafarge Holcim",
          system: "Integrated materials platform",
          metrics: "30% reduction in inventory costs, 40% improvement in delivery reliability, 25% cost reduction",
          relevance:
            "I5 implements a digitally integrated supply chain platform with real-time tracking and Just-In-Time (JIT) delivery",
        },
      ],
    },
    {
      category: "Quality Control",
      examples: [
        {
          company: "Shimizu",
          system: "Robot inspection",
          metrics: "75% reduction in defects, 90% first-time quality rate, 50% reduction in rework",
          relevance:
            "I5 employs systematic quality assurance across all processes, leveraging IoT-enabled quality monitoring systems",
        },
        {
          company: "Turner Construction",
          system: "Digital quality management",
          metrics: "75% reduction in defects, 90% first-time quality rate, 50% reduction in rework",
          relevance:
            "I5 employs systematic quality assurance across all processes, leveraging IoT-enabled quality monitoring systems",
        },
      ],
    },
  ]

  const dfmaExamples = [
    {
      category: "Design Optimization",
      examples: [
        {
          company: "MHI",
          system: "Optimized module design",
          metrics: "40% reduction in design time, 30% reduction in components, 25% cost savings in manufacturing",
          relevance: "The I5 Model integrates manufacturing constraints in early design via the DfMA platform",
        },
        {
          company: "Laing O'Rourke",
          system: "DfMA library",
          metrics: "40% reduction in design time, 30% reduction in components, 25% cost savings in manufacturing",
          relevance: "The I5 Model integrates manufacturing constraints in early design via the DfMA platform",
        },
      ],
    },
    {
      category: "Component Standardization",
      examples: [
        {
          company: "Gammon",
          system: "Precast system",
          metrics: "60% component standardization, 35% reduction in unique parts, 45% quality improvement",
          relevance: "I5 focuses on maximizing the use of common, repeatable components and interfaces",
        },
        {
          company: "Skanska",
          system: "Standardized MEP modules",
          metrics: "60% component standardization, 35% reduction in unique parts, 45% quality improvement",
          relevance: "I5 focuses on maximizing the use of common, repeatable components and interfaces",
        },
      ],
    },
    {
      category: "Manufacturing Integration",
      examples: [
        {
          company: "Bryden Wood",
          system: "Manufacturing-led design",
          metrics:
            "50% reduction in manufacturing errors, 40% improvement in production efficiency, 30% cost reduction",
          relevance: "I5 considers manufacturing capabilities early in the design process",
        },
        {
          company: "Rogers Stirk Harbor",
          system: "Factory integration",
          metrics:
            "50% reduction in manufacturing errors, 40% improvement in production efficiency, 30% cost reduction",
          relevance: "I5 considers manufacturing capabilities early in the design process",
        },
      ],
    },
  ]

  const jitExamples = [
    {
      category: "Demand Planning",
      examples: [
        {
          company: "VINCI",
          system: "Predictive procurement",
          metrics: "35% improvement in forecast accuracy, 40% reduction in safety stock, 25% cost savings",
          relevance: "I5 uses AI-driven demand prediction systems and the owner's AEC/SCM platforms",
        },
        {
          company: "Balfour Beatty",
          system: "Demand modeling",
          metrics: "35% improvement in forecast accuracy, 40% reduction in safety stock, 25% cost savings",
          relevance: "I5 uses AI-driven demand prediction systems and the owner's AEC/SCM platforms",
        },
      ],
    },
    {
      category: "Supplier Integration",
      examples: [
        {
          company: "Kajima",
          system: "Supplier network",
          metrics: "45% reduction in lead times, 30% improvement in reliability, 40% cost reduction",
          relevance: "I5 integrates with key suppliers through collaborative planning tools",
        },
        {
          company: "Hochtief",
          system: "Integrated supply chain",
          metrics: "45% reduction in lead times, 30% improvement in reliability, 40% cost reduction",
          relevance: "I5 integrates with key suppliers through collaborative planning tools",
        },
      ],
    },
    {
      category: "Delivery Optimization",
      examples: [
        {
          company: "Multiplex",
          system: "Delivery management",
          metrics: "60% reduction in delays, 40% improvement in efficiency, 50% reduction in site storage",
          relevance: "I5 leverages transportation management systems and delivery scheduling platforms",
        },
        {
          company: "Turner",
          system: "Logistics platform",
          metrics: "60% reduction in delays, 40% improvement in efficiency, 50% reduction in site storage",
          relevance: "I5 leverages transportation management systems and delivery scheduling platforms",
        },
      ],
    },
  ]

  const keyProjects = [
    {
      name: "The Clement Canopy",
      location: "Singapore",
      description:
        "A project in Singapore that exemplifies mandated modular construction through Prefabricated Prefinished Volumetric Construction (PPVC)",
      methods: "Emphasized early stakeholder coordination and planning",
      relevance: "Aligns with I5's focus on rigorous process planning and stage-gate reviews",
    },
    {
      name: "Dubai Municipality Pilot 6-Floor Project",
      location: "Dubai, UAE",
      description: "Dubai Municipality issued its first modular construction license for this pilot project",
      methods: "Modular construction approach",
      relevance:
        "Demonstrates the UAE's openness to innovation in construction, aligning with the I5 Model's focus on off-site construction",
    },
    {
      name: "Sutter Medical Center Castro Valley",
      location: "California, USA",
      description: "An IPD project case study",
      methods: "Integrated Project Delivery principles, fostering strong collaboration",
      relevance:
        "The I5 Model incorporates IPD principles, which have shown projects are 3 times more likely to complete ahead of schedule and 2.5 times more likely to complete under budget",
    },
  ]

  const academicReferences = [
    'Akintoye, A., et al. "Customer Satisfaction Metrics in Modular Construction." Construction Management and Economics',
    'Ashcraft, H. W., & Reed, D. "Integrated Project Delivery: Performance Metrics and Financial Analysis." Journal of Construction Engineering and Management',
    'Bertelsen, S., & Koskela, L. "Construction Beyond Lean: A New Understanding of Construction Management." Journal of Construction Engineering and Management',
    'Chapman, C., & Ward, S. "Project Risk Management: Processes, Techniques and Insights." Journal of Project Management',
    'Chen, Q., et al. "Interface Management in Construction: Industrialized Building Systems." International Journal of Project Management',
    'Cooper, R. G. "Stage-Gate Systems for New Product Development in Construction." Research-Technology Management',
    'Eastman, C., et al. "BIM Handbook: A Guide to Building Information Modeling." Wiley & Sons',
    'Flyvbjerg, B. "What You Should Know About Megaprojects and Why: An Overview." Project Management Journal',
    'Goulding, J. S., et al. "DfMA Implementation in Construction: Labor Impact Analysis." Journal of Architectural Engineering',
    'Jaillon, L., & Poon, C. S. "Quantifying the Waste Reduction Potential of Using Prefabrication in Building Construction in Hong Kong." Waste Management',
    'Koskela, L., et al. "Concurrent Engineering in Construction: Time-to-Market Analysis." Journal of Construction Engineering and Management',
    'Liker, J. K. "The Toyota Way: Process Design Impact Analysis in Construction." McGraw-Hill Education',
    'Smith, R. E. "Prefab Architecture: A Guide to Modular Design and Construction." Wiley & Sons',
    'Tommelein, I. D. "Just-In-Time Delivery in Construction: Field Storage Reduction Case Studies." Construction Management and Economics',
    'Womack, J.P., & Jones, D.T. "Lean Thinking: Banish Waste and Create Wealth in Your Corporation." Productivity Press',
  ]

  const industryReports = [
    'American Institute of Architects. "Integrated Project Delivery: A Guide." AIA National Publications',
    'Building and Construction Authority of Singapore. "Prefabricated Prefinished Volumetric Construction: Implementation Guidelines." BCA Technical Reference',
    'Construction Industry Institute. "Advanced Work Packaging: Integration with Manufacturing." CII Research Summary 272-1',
    'Construction Industry Institute. "Design for Manufacturing and Assembly in Construction." CII Implementation Resource RT-283',
    'Construction Industry Institute. "Modular Construction Benchmarking and Implementation Guide." CII Research Report RT-283',
    'Lean Construction Institute. "IPD Project Performance Analysis: Key Metrics and Benchmarks." LCI Research Report',
    'Modular Building Institute. "Permanent Modular Construction Annual Report." MBI Industry Analysis',
    'Project Management Institute. "A Guide to the Project Management Body of Knowledge (PMBOK Guide)." Project Management Institute',
    'Royal Institute of British Architects. "RIBA Plan of Work 2022 Overview." RIBA Publications',
  ]

  const consultingReports = [
    'Barbosa, F., et al. "Modular Construction: From Projects to Products." McKinsey & Company Construction Practice',
    'Barbosa, F., et al. "Reinventing Construction: A Route to Higher Productivity." McKinsey Global Institute',
    'McKinsey & Company. "The Next Normal in Construction: How Disruption is Reshaping the World\'s Largest Ecosystem." McKinsey Global Institute',
    'McKinsey Global Institute. "Reinventing Construction: A Route to Higher Productivity." McKinsey Construction Research',
  ]

  const industryStandards = [
    'Dubai Municipality. "Guidelines for Modular Construction Approval." DM Technical Guidelines',
    'FIDIC. "Conditions of Contract for Plant and Design-Build." Federation Internationale des Ingenieurs-Conseils',
    'International Facility Management Association. "Asset Performance Measurement: Best Practices Guide." IFMA Foundation',
    'Project Management Institute. "Construction Extension to the PMBOK Guide." Project Management Institute',
    'International Organization for Standardization. "ISO 31000:2023 - Risk Management - Guidelines." ISO Standards',
    'International Organization for Standardization. "ISO 9001:2023 - Quality Management Systems - Requirements." ISO Standards',
  ]

  // Combined methodology examples
  const methodologyExamples = [
    {
      title: "Productization",
      description:
        "Industry examples illustrating key productization principles that are integral to the I5 Model's approach",
      categories: productizationExamples,
    },
    {
      title: "Design for Manufacture and Assembly (DfMA)",
      description: "Examples demonstrating the effective implementation of DfMA principles in construction",
      categories: dfmaExamples,
    },
    {
      title: "Just-In-Time (JIT) Delivery",
      description: "Examples highlighting the application of JIT principles in construction supply chains",
      categories: jitExamples,
    },
  ]

  // Inline styles for portability
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    header: {
      background: "linear-gradient(135deg, #1e293b 0%, #475569 50%, #1e40af 100%)",
      color: "#ffffff",
      padding: "6rem 0 8rem 0",
    },
    headerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    backLink: {
      display: "inline-flex",
      alignItems: "center",
      color: "#93c5fd",
      textDecoration: "none",
      marginBottom: "2rem",
      fontSize: "0.875rem",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "300",
      marginBottom: "1.5rem",
      letterSpacing: "-0.025em",
      lineHeight: "1.1",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#e5e7eb",
      lineHeight: "1.6",
      fontWeight: "300",
      maxWidth: "48rem",
    },
    mainContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 1rem",
    },
    section: {
      marginBottom: "4rem",
    },
    sectionTitle: {
      fontSize: "2rem",
      fontWeight: "300",
      color: "#1f2937",
      marginBottom: "2rem",
      display: "flex",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "0.75rem",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      marginBottom: "2rem",
      transition: "box-shadow 0.3s ease",
    },
    cardHeader: {
      background: "linear-gradient(90deg, #eff6ff 0%, #ffffff 100%)",
      borderBottom: "1px solid #e5e7eb",
      padding: "1.5rem",
      borderRadius: "0.75rem 0.75rem 0 0",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "0.5rem",
    },
    cardDescription: {
      color: "#6b7280",
      fontSize: "0.875rem",
    },
    cardContent: {
      padding: "1.5rem",
    },
    cardFooter: {
      backgroundColor: "#eff6ff",
      borderTop: "1px solid #e5e7eb",
      padding: "1rem 1.5rem",
      borderRadius: "0 0 0.75rem 0.75rem",
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1.5rem",
      marginBottom: "1.5rem",
    },
    metricItem: {
      textAlign: "center" as const,
    },
    metricValue: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#2563eb",
      marginBottom: "0.5rem",
    },
    metricLabel: {
      fontSize: "0.875rem",
      color: "#6b7280",
    },
    badge: {
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: "500",
      margin: "0.25rem",
      border: "1px solid #d1d5db",
    },
    badgeContainer: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: "0.5rem",
      marginTop: "0.75rem",
    },
    accordion: {
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
    },
    accordionItem: {
      borderBottom: "1px solid #e5e7eb",
    },
    accordionTrigger: {
      width: "100%",
      padding: "1rem",
      textAlign: "left" as const,
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "500",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    accordionContent: {
      padding: "1rem",
      backgroundColor: "#f9fafb",
    },
    exampleCard: {
      border: "1px solid #e5e7eb",
      borderLeft: "4px solid #2563eb",
      borderRadius: "0.5rem",
      padding: "1rem",
      marginBottom: "1rem",
      backgroundColor: "#ffffff",
    },
    exampleTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
    exampleMetrics: {
      color: "#1d4ed8",
      fontWeight: "500",
      marginTop: "0.5rem",
    },
    exampleRelevance: {
      color: "#475569",
      marginTop: "0.5rem",
    },
    projectGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
    },
    projectCard: {
      backgroundColor: "#ffffff",
      borderRadius: "0.75rem",
      border: "1px solid #e5e7eb",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    projectHeader: {
      background: "linear-gradient(90deg, #eff6ff 0%, #ffffff 100%)",
      borderBottom: "1px solid #e5e7eb",
      padding: "1.5rem",
      borderRadius: "0.75rem 0.75rem 0 0",
    },
    projectTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
    projectLocation: {
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      backgroundColor: "#f3f4f6",
      color: "#374151",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: "500",
      border: "1px solid #d1d5db",
      marginBottom: "0.5rem",
    },
    tabs: {
      marginBottom: "2rem",
    },
    tabsList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "0.5rem",
      marginBottom: "2rem",
      backgroundColor: "#f3f4f6",
      padding: "0.25rem",
      borderRadius: "0.5rem",
    },
    tabsTrigger: {
      padding: "0.75rem 1rem",
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "0.375rem",
      cursor: "pointer",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#6b7280",
      transition: "all 0.2s ease",
    },
    tabsTriggerActive: {
      backgroundColor: "#ffffff",
      color: "#1f2937",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    tabsContent: {
      backgroundColor: "#ffffff",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      border: "1px solid #e5e7eb",
    },
    referenceList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    referenceItem: {
      fontSize: "0.875rem",
      color: "#374151",
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "0.75rem",
      lineHeight: "1.5",
    },
    externalLinkIcon: {
      width: "0.75rem",
      height: "0.75rem",
      marginRight: "0.5rem",
      marginTop: "0.125rem",
      flexShrink: 0,
      color: "#2563eb",
    },
    infoBox: {
      backgroundColor: "#eff6ff",
      border: "1px solid #bfdbfe",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      marginTop: "1.5rem",
    },
    infoBoxTitle: {
      fontSize: "1.25rem",
      fontWeight: "500",
      color: "#1e40af",
      marginBottom: "1rem",
    },
    infoBoxText: {
      color: "#1e40af",
      marginBottom: "1rem",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "1rem",
      textAlign: "center" as const,
    },
    statValue: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2563eb",
    },
    statLabel: {
      fontSize: "0.875rem",
      color: "#1d4ed8",
    },
  }

  // State for tabs
  const [activeTab, setActiveTab] = React.useState("academic")
  const [openAccordions, setOpenAccordions] = React.useState<{ [key: string]: boolean }>({})

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div style={styles.container} className={className}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <a href="#" style={styles.backLink}>
            ← Back to I5 Model
          </a>
          <h1 style={styles.title}>Case Studies & References</h1>
          <p style={styles.subtitle}>
            The I5 Real Estate Delivery Model is validated by global case studies and rigorous research. This section
            highlights real-world examples that demonstrate the principles of productization, Design for Manufacture and
            Assembly (DfMA), and Just-In-Time (JIT) delivery in action.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Validation Overview Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🌍 Validation Overview</h2>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>Global Validation Study</div>
              <div style={styles.cardDescription}>
                18 case studies conducted across 9 countries validating I5 Model benefits
              </div>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.metricsGrid}>
                {caseStudyMetrics.map((metric, index) => (
                  <div key={index} style={styles.metricItem}>
                    <div style={styles.metricValue}>{metric.value}</div>
                    <div style={styles.metricLabel}>{metric.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ paddingTop: "1.5rem", borderTop: "1px solid #e5e7eb" }}>
                <h4 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Countries Studied:</h4>
                <div style={styles.badgeContainer}>
                  {globalCaseStudies.map((country, index) => (
                    <span key={index} style={styles.badge}>
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div style={styles.cardFooter}>
              <p style={{ fontSize: "0.875rem", color: "#1e40af", margin: 0 }}>
                These aggregated results demonstrate the transformative potential of the I5 Model's synthesis of
                productization and IPD, validating its ability to accelerate market entry, reduce revenue realization
                time, and minimize rework.
              </p>
            </div>
          </div>

          <div style={styles.infoBox}>
            <h3 style={styles.infoBoxTitle}>Research Foundation</h3>
            <p style={styles.infoBoxText}>
              This comprehensive reference base demonstrates the robust academic and industry foundation underlying the
              I5 Real Estate Delivery Model, providing credible validation for its methodologies and expected benefits.
            </p>
            <div style={styles.statsGrid}>
              <div>
                <div style={styles.statValue}>34+</div>
                <div style={styles.statLabel}>Total References</div>
              </div>
              <div>
                <div style={styles.statValue}>18</div>
                <div style={styles.statLabel}>Case Studies</div>
              </div>
              <div>
                <div style={styles.statValue}>9</div>
                <div style={styles.statLabel}>Countries</div>
              </div>
              <div>
                <div style={styles.statValue}>15+</div>
                <div style={styles.statLabel}>Academic Papers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Examples Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📈 Methodology Examples</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {methodologyExamples.map((methodology, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardTitle}>{methodology.title}</div>
                  <div style={styles.cardDescription}>{methodology.description}</div>
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.accordion}>
                    {methodology.categories.map((category, catIndex) => {
                      const accordionKey = `${index}-${catIndex}`
                      const isOpen = openAccordions[accordionKey]

                      return (
                        <div key={catIndex} style={styles.accordionItem}>
                          <button style={styles.accordionTrigger} onClick={() => toggleAccordion(accordionKey)}>
                            <span>{category.category}</span>
                            <span>{isOpen ? "−" : "+"}</span>
                          </button>
                          {isOpen && (
                            <div style={styles.accordionContent}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                {category.examples.map((example, exIndex) => (
                                  <div key={exIndex} style={styles.exampleCard}>
                                    <h4 style={styles.exampleTitle}>
                                      {example.company}'s {example.system}
                                    </h4>
                                    <div style={{ marginBottom: "1rem" }}>
                                      <span style={{ ...styles.badge, backgroundColor: "#eff6ff", color: "#1d4ed8" }}>
                                        Metrics
                                      </span>
                                      <p style={styles.exampleMetrics}>{example.metrics}</p>
                                    </div>
                                    <div>
                                      <span style={{ ...styles.badge, backgroundColor: "#f8fafc", color: "#475569" }}>
                                        I5 Relevance
                                      </span>
                                      <p style={styles.exampleRelevance}>{example.relevance}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Project Case Studies */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>🏆 Key Project Case Studies</h2>

          <div style={styles.projectGrid}>
            {keyProjects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectHeader}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={styles.projectTitle}>{project.name}</div>
                    <span style={styles.projectLocation}>{project.location}</span>
                  </div>
                  <div style={styles.cardDescription}>{project.description}</div>
                </div>
                <div style={styles.cardContent}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                      <h4
                        style={{ fontWeight: "600", fontSize: "0.875rem", color: "#374151", marginBottom: "0.25rem" }}
                      >
                        Methods Used:
                      </h4>
                      <p style={{ color: "#6b7280", margin: 0 }}>{project.methods}</p>
                    </div>
                    <div>
                      <h4
                        style={{ fontWeight: "600", fontSize: "0.875rem", color: "#374151", marginBottom: "0.25rem" }}
                      >
                        I5 Relevance:
                      </h4>
                      <p style={{ color: "#1d4ed8", margin: 0 }}>{project.relevance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📚 References</h2>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardTitle}>Research & Industry References</div>
              <div style={styles.cardDescription}>
                Academic papers, industry reports, and standards supporting the I5 Model
              </div>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.tabs}>
                <div style={styles.tabsList}>
                  {[
                    { key: "academic", label: "Academic Papers" },
                    { key: "industry", label: "Industry Reports" },
                    { key: "consulting", label: "Consulting Research" },
                    { key: "standards", label: "Industry Standards" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      style={{
                        ...styles.tabsTrigger,
                        ...(activeTab === tab.key ? styles.tabsTriggerActive : {}),
                      }}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeTab === "academic" && (
                  <div style={styles.tabsContent}>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      📖 Academic Journals & Research Reports
                    </h3>
                    <ul style={styles.referenceList}>
                      {academicReferences.map((reference, index) => (
                        <li key={index} style={styles.referenceItem}>
                          <span style={styles.externalLinkIcon}>🔗</span>
                          <span>{reference}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "industry" && (
                  <div style={styles.tabsContent}>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      📄 Industry Institute Reports
                    </h3>
                    <ul style={styles.referenceList}>
                      {industryReports.map((reference, index) => (
                        <li key={index} style={styles.referenceItem}>
                          <span style={styles.externalLinkIcon}>🔗</span>
                          <span>{reference}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "consulting" && (
                  <div style={styles.tabsContent}>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      📊 Management Consulting & Market Research
                    </h3>
                    <ul style={styles.referenceList}>
                      {consultingReports.map((reference, index) => (
                        <li key={index} style={styles.referenceItem}>
                          <span style={styles.externalLinkIcon}>🔗</span>
                          <span>{reference}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "standards" && (
                  <div style={styles.tabsContent}>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      🏆 Industry Standards & Guidelines
                    </h3>
                    <ul style={styles.referenceList}>
                      {industryStandards.map((reference, index) => (
                        <li key={index} style={styles.referenceItem}>
                          <span style={styles.externalLinkIcon}>🔗</span>
                          <span>{reference}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CaseStudiesReferences
