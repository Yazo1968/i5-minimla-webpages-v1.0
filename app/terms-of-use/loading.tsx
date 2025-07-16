import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-12 w-2/3 mb-8" />

        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-5/6 mb-8" />

        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-4/5 mb-6" />

        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-6" />

        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-5/6 mb-6" />
      </div>
    </div>
  )
}
