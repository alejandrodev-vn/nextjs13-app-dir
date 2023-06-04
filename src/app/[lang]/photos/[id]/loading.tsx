import { SkeletonCard } from '@components/skeleton-card'
export default function Loading() {
  return (
    <div className="bg-red space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Loading...</h1>

      <SkeletonCard isLoading={true} />
    </div>
  )
}
