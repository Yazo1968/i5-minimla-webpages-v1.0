import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ibmPlexMono } from "./fonts"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ScrollToTopProvider } from "@/components/scroll-to-top-provider"

export const metadata: Metadata = {
  title: "I5 Development Framework",
  description: "Innovative approaches to real estate development",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={ibmPlexMono.className}>
      <body className="min-h-screen bg-white flex flex-col">
        <ScrollToTopProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ScrollToTopProvider>
      </body>
    </html>
  )
}
