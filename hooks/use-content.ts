"use client"

import { useState, useEffect } from "react"
import { ContentManager } from "@/lib/content-manager"

export function useContent(pageId: string) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        const contentManager = ContentManager.getInstance()
        const pageContent = await contentManager.loadContent(pageId)
        setContent(pageContent)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [pageId])

  return { content, loading, error }
}
