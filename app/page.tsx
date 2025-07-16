import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Lato } from "next/font/google"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
})

export default function i5modelsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile First Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - Desktop Only */}
        <div className="absolute inset-0 w-full h-full hidden lg:block bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Video failed to load:", e)
              e.target.style.display = "none"
            }}
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/278c21f0-d74c-4401-800b-0ccad2cb9d27-video-ddRGlKQ4KsIYvaChkwYLprbq1yEXTZ.mp4" type="video/mp4" />
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/278c21f0-d74c-4401-800b-0ccad2cb9d27-video-y41onHM4ynVVoK2DlD6opZQCj2iDwM.webm" type="video/webm" />
          </video>
        </div>

        {/* Mobile Background - Gradient + Geometric Patterns */}
        <div className="absolute inset-0 w-full h-full lg:hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-white/15 rotate-12"></div>
            <div className="absolute bottom-40 left-20 w-20 h-20 border border-white/10 rotate-45"></div>
            <div className="absolute bottom-20 right-10 w-28 h-28 border border-white/20 -rotate-12"></div>
          </div>
        </div>

        {/* Content - Optimized for Mobile */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Title */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
              <Image
                src="/images/i5-logo-white.png"
                alt="I5 Model"
                width={80}
                height={80}
                className="sm:w-24 sm:h-24 lg:w-32 lg:h-32"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white">Model</h1>
            </div>

            {/* Main Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-6 leading-tight font-light px-2">
              Real estate & Construction Productization Frameworks & Platforms
            </h2>

            {/* Subtitle */}
            <h3 className="text-base sm:text-lg lg:text-xl text-gray-100 mb-10 leading-relaxed font-light max-w-3xl mx-auto px-4">
              Bridging the Industry 4.0 implementation gap through five interconnected dimensions
            </h3>

            {/* Call to Action - Mobile Friendly */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/insights/i5-model-overview"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto text-center"
              >
                Explore Frameworks
              </Link>
              <Link
                href="/insights/case-studies-references"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-light">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Insights */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
          <div className="flex items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mr-8">FRAMEWORKS & INSIGHTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Sector Challenges",
                url: "/insights/sector-challenges",
              },
              {
                title: "I5 Model Overview",
                url: "/insights/i5-model-overview",
              },
              {
                title: "CORE PRINCIPLES",
                url: "/insights/core-principles",
              },
              {
                title: "Delivery Framework",
                url: "/insights/delivery-framework",
              },
              {
                title: "Operational Ecosystem",
                url: "/insights/operational-ecosystem",
              },
              {
                title: "Organizational Framework",
                url: "/insights/organizational-framework",
              },
              {
                title: "Financial Framework",
                url: "/insights/financial-framework",
              },
              {
                title: "Procurement and Contracts Framework",
                url: "/insights/procurement-contracts-framework",
              },
              {
                title: "KPI's and Risk Management Framework",
                url: "/insights/kpi-risk-framework",
              },
              {
                title: "Case Studies and References",
                url: "/insights/case-studies-references",
              },
            ].map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="flex items-start space-x-4 group cursor-pointer hover:bg-white hover:shadow-lg transition-all duration-300 p-4 rounded-lg"
              >
                <span className="text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                  {index + 1}
                </span>
                <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/modern-blue-atrium.png"
                alt="Modern blue architectural atrium showcasing innovative real estate design"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div>
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
                Productizing Real Estate through Integrated Frameworks Ecosystem
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl">
                The I5 Model transforms traditional construction by integrating design, manufacturing, and assembly into
                a seamless industrialized process. Experience 40% faster delivery, 25% cost reduction, and superior
                quality through our revolutionary approach to building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">I5 Frameworks</h3>
              <p className="text-gray-600 mb-4">
                Discover our comprehensive suite of frameworks that revolutionize industrialized construction through
                integrated design, manufacturing, and assembly processes.
              </p>
              <Link href="/insights/i5-model-overview" className="text-blue-600 hover:text-blue-800 font-medium">
                Explore frameworks <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real-world applications of the I5 Model across residential, commercial, and infrastructure projects
                demonstrating measurable performance improvements.
              </p>
              <Link href="/insights/case-studies-references" className="text-blue-600 hover:text-blue-800 font-medium">
                View case studies <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Platform</h3>
              <p className="text-gray-600 mb-4">
                Our integrated technology platform enables seamless coordination across the entire construction value
                chain, from design optimization to final assembly.
              </p>
              <Link href="/insights/operational-ecosystem" className="text-blue-600 hover:text-blue-800 font-medium">
                Discover platform <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
