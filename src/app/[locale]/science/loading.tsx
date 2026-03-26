export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-[40vh] bg-gray-100" />
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        {/* Platform skeleton */}
        <div className="grid gap-8 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-gray-100" />
          ))}
        </div>
        {/* Pipeline skeleton */}
        <div className="space-y-6">
          <div className="mx-auto h-8 w-40 rounded bg-gray-100" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 w-24 rounded-lg bg-gray-100" />
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-56 rounded-2xl bg-gray-100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
