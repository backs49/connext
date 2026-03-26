export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-[40vh] bg-gray-100" />
      <div className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        {/* Overview skeleton */}
        <div className="grid gap-8 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-40 rounded-2xl bg-gray-100" />
          ))}
        </div>
        {/* CEO skeleton */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="h-80 rounded-2xl bg-gray-100" />
          <div className="space-y-4">
            <div className="h-6 w-32 rounded bg-gray-100" />
            <div className="h-4 w-full rounded bg-gray-50" />
            <div className="h-4 w-full rounded bg-gray-50" />
            <div className="h-4 w-3/4 rounded bg-gray-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
