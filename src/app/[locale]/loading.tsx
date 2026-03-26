export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[60vh] bg-gray-100" />

      {/* Metrics skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 rounded-2xl bg-gray-100" />
          ))}
        </div>
      </div>

      {/* Section skeletons */}
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-4">
        <div className="mx-auto h-8 w-48 rounded bg-gray-100" />
        <div className="mx-auto h-4 w-72 rounded bg-gray-50" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 rounded-2xl bg-gray-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
