import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Skeleton className="h-4 w-24 bg-slate-700 mb-8" />
          <Skeleton className="h-12 w-3/4 bg-slate-700 mb-6" />
          <Skeleton className="h-4 w-full bg-slate-700 mb-2" />
          <Skeleton className="h-4 w-5/6 bg-slate-700 mb-2" />
          <Skeleton className="h-4 w-4/6 bg-slate-700" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section Skeleton */}
        <section className="mb-16">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="rounded-lg border border-gray-200 p-6">
            <Skeleton className="h-6 w-1/2 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-20 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>
              ))}
            </div>
            <Skeleton className="h-px w-full bg-gray-200 my-6" />
            <Skeleton className="h-5 w-40 mb-3" />
            <div className="flex flex-wrap gap-2">
              {[...Array(9)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-20 rounded-full" />
              ))}
            </div>
          </div>
        </section>

        {/* Productization Examples Skeleton */}
        <section className="mb-16">
          <Skeleton className="h-8 w-72 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 rounded-md" />
            ))}
          </div>
          <div className="rounded-lg border border-gray-200">
            <div className="p-6 border-b">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>
            <div className="p-6">
              <div className="space-y-8">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="border-l-4 border-blue-500 pl-6">
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DfMA Examples Skeleton */}
        <section className="mb-16">
          <Skeleton className="h-8 w-96 mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg border border-gray-200">
                <div className="p-6 border-b">
                  <Skeleton className="h-6 w-40" />
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {[...Array(2)].map((_, j) => (
                      <div key={j} className="border-l-4 border-blue-500 pl-4">
                        <Skeleton className="h-5 w-48 mb-2" />
                        <Skeleton className="h-4 w-64 mb-2" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References Section Skeleton */}
        <section className="mb-16">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-10 rounded-md" />
            ))}
          </div>
          <div className="rounded-lg border border-gray-200">
            <div className="p-6 border-b">
              <Skeleton className="h-6 w-64 mb-2" />
              <Skeleton className="h-4 w-96" />
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-start">
                    <Skeleton className="h-3 w-3 mr-2 mt-1" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Skeleton */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-48" />
        </div>
      </div>
    </div>
  )
}
