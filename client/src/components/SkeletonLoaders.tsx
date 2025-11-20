/**
 * Skeleton Loading Components
 * Provides placeholder UI while content is loading
 */

export function SkeletonCard() {
  return (
    <div className="bg-slate-700/30 rounded-lg p-6 space-y-4 animate-pulse">
      <div className="h-12 w-12 bg-slate-600/50 rounded-lg"></div>
      <div className="h-6 bg-slate-600/50 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-600/50 rounded w-full"></div>
        <div className="h-4 bg-slate-600/50 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-16 bg-slate-600/50 rounded w-3/4"></div>
      <div className="h-8 bg-slate-600/50 rounded w-full"></div>
      <div className="flex gap-4">
        <div className="h-12 bg-slate-600/50 rounded w-32"></div>
        <div className="h-12 bg-slate-600/50 rounded w-32"></div>
      </div>
    </div>
  );
}

export function SkeletonCurrencyBanner() {
  return (
    <div className="flex gap-4 overflow-hidden animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex-shrink-0 w-32 h-24 bg-slate-700/30 rounded-lg"></div>
      ))}
    </div>
  );
}

export function SkeletonFeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="space-y-3 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-4">
          <div className="h-12 bg-slate-600/50 rounded flex-1"></div>
          <div className="h-12 bg-slate-600/50 rounded flex-1"></div>
          <div className="h-12 bg-slate-600/50 rounded flex-1"></div>
        </div>
      ))}
    </div>
  );
}

export function SkeletonTestimonial() {
  return (
    <div className="bg-slate-700/30 rounded-lg p-8 space-y-4 animate-pulse">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-slate-600/50 rounded"></div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-600/50 rounded w-full"></div>
        <div className="h-4 bg-slate-600/50 rounded w-full"></div>
        <div className="h-4 bg-slate-600/50 rounded w-4/5"></div>
      </div>
      <div className="flex gap-3 pt-4">
        <div className="w-12 h-12 bg-slate-600/50 rounded-full"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-slate-600/50 rounded w-1/2"></div>
          <div className="h-3 bg-slate-600/50 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonConverter() {
  return (
    <div className="bg-slate-700/30 rounded-lg p-8 space-y-6 animate-pulse">
      <div className="h-8 bg-slate-600/50 rounded w-1/2"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="h-4 bg-slate-600/50 rounded"></div>
          <div className="h-10 bg-slate-600/50 rounded"></div>
          <div className="h-10 bg-slate-600/50 rounded"></div>
        </div>
        <div className="flex items-end justify-center">
          <div className="w-10 h-10 bg-slate-600/50 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-600/50 rounded"></div>
          <div className="h-10 bg-slate-600/50 rounded"></div>
          <div className="h-10 bg-slate-600/50 rounded"></div>
        </div>
      </div>
      <div className="h-12 bg-slate-600/50 rounded"></div>
    </div>
  );
}

export function SkeletonOfficeCard() {
  return (
    <div className="bg-slate-700/30 rounded-lg p-6 space-y-4 animate-pulse">
      <div className="flex gap-3">
        <div className="w-5 h-5 bg-slate-600/50 rounded"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-slate-600/50 rounded w-1/2"></div>
          <div className="h-3 bg-slate-600/50 rounded w-1/3"></div>
        </div>
      </div>
      <div className="h-4 bg-slate-600/50 rounded"></div>
      <div className="space-y-2">
        <div className="h-3 bg-slate-600/50 rounded"></div>
        <div className="h-3 bg-slate-600/50 rounded"></div>
      </div>
    </div>
  );
}

/**
 * Shimmer Effect Component
 * Creates a shimmering animation over skeleton loaders
 */
export function ShimmerEffect() {
  return (
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
  );
}
