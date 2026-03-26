export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-[40vh] bg-gray-100" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 rounded-2xl bg-gray-100" />
          ))}
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 rounded-2xl bg-gray-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
