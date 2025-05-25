"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="py-3 flex flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-[10px] sm:text-xs text-gray-500 font-mono whitespace-nowrap">
            Copyright©2025 I5 model, handbook, technology, principles & guidelines. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center space-x-0.5 sm:space-x-1 text-[10px] sm:text-xs text-gray-500 font-mono whitespace-nowrap">
            <Link href="mailto:info@i5model.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              info@i5model.com
            </Link>
            <span className="text-gray-400 px-0.5">|</span>
            <button
              onClick={() => {
                router.push("/privacy-policy")
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50)
              }}
              className="hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-gray-400 px-0.5">|</span>
            <button
              onClick={() => {
                router.push("/terms-of-use")
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50)
              }}
              className="hover:text-gray-700 transition-colors"
            >
              Terms of Use
            </button>
            <span className="text-gray-400 px-0.5">|</span>
            <button
              onClick={() => {
                router.push("/sitemap-page")
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50)
              }}
              className="hover:text-gray-700 transition-colors"
            >
              Site Map
            </button>
            <span className="text-gray-400 ml-1 sm:ml-2">United Arab Emirates</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
