export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="h-10 bg-gray-200 rounded w-48 mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-96 mb-8 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-300 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
