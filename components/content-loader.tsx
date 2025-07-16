import type React from "react"
import { useContent } from "@/hooks/use-content"
import { Skeleton } from "@/components/ui/skeleton"

interface ContentLoaderProps {
  pageId: string
  children: (content: any) => React.ReactNode
}

export function ContentLoader({ pageId, children }: ContentLoaderProps) {
  const { content, loading, error } = useContent(pageId)

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading content. Please try again.</p>
      </div>
    )
  }

  return <>{children(content)}</>
}
