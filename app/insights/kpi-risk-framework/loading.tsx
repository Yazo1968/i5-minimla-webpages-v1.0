export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-white/20 rounded-full mx-auto mb-6" />
            <div className="h-16 w-96 bg-white/20 rounded-lg mx-auto mb-6" />
            <div className="h-6 w-80 bg-white/20 rounded mx-auto mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <div className="h-8 w-8 bg-white/20 rounded mx-auto mb-3" />
                  <div className="h-8 w-16 bg-white/20 rounded mx-auto mb-2" />
                  <div className="h-4 w-20 bg-white/20 rounded mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Skeleton */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-96 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
