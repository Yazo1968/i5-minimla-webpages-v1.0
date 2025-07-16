import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="w-full bg-gradient-to-br from-mckinsey-blue to-mckinsey-dark-blue py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <Skeleton className="h-12 w-3/4 bg-white/20 mb-6" />
            <Skeleton className="h-6 w-full bg-white/20 mb-2" />
            <Skeleton className="h-6 w-2/3 bg-white/20" />
          </div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="container px-4 md:px-6 py-12">
        <div className="flex flex-wrap gap-2 border-b mb-8 pb-0">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-10 w-32 bg-gray-200" />
          ))}
        </div>

        {/* Content Skeletons */}
        <div className="space-y-8">
          <div>
            <Skeleton className="h-8 w-1/3 bg-gray-200 mb-4" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
            <Skeleton className="h-4 w-2/3 bg-gray-200" />
          </div>

          <div>
            <Skeleton className="h-8 w-1/3 bg-gray-200 mb-4" />
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <Skeleton className="h-6 w-1/2 bg-gray-200 mb-3" />
                  <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                  <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                  <Skeleton className="h-4 w-2/3 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Insights Skeleton */}
      <div className="bg-gray-50 py-16">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-8 w-1/4 bg-gray-200 mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <Skeleton className="h-48 w-full bg-gray-200" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 bg-gray-200 mb-3" />
                  <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
                  <Skeleton className="h-4 w-full bg-gray-200 mb-4" />
                  <Skeleton className="h-4 w-1/3 bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
