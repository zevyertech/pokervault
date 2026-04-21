'use client'

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="inline-flex items-center gap-3 px-5 py-4 rounded-lg bg-accent/8 border border-accent/25 hover:border-accent/40 hover:bg-accent/12 transition-all">
        <span className="text-lg flex-shrink-0">✓</span>
        <span className="text-sm font-medium text-foreground">30-Day Money Back Guarantee</span>
      </div>
      <div className="inline-flex items-center gap-3 px-5 py-4 rounded-lg bg-accent/8 border border-accent/25 hover:border-accent/40 hover:bg-accent/12 transition-all">
        <span className="text-lg flex-shrink-0">♾️</span>
        <span className="text-sm font-medium text-foreground">Lifetime Access</span>
      </div>
      <div className="inline-flex items-center gap-3 px-5 py-4 rounded-lg bg-accent/8 border border-accent/25 hover:border-accent/40 hover:bg-accent/12 transition-all">
        <span className="text-lg flex-shrink-0">🔒</span>
        <span className="text-sm font-medium text-foreground">No Hidden Fees</span>
      </div>
      <div className="inline-flex items-center gap-3 px-5 py-4 rounded-lg bg-accent/8 border border-accent/25 hover:border-accent/40 hover:bg-accent/12 transition-all">
        <span className="text-lg flex-shrink-0">📱</span>
        <span className="text-sm font-medium text-foreground">Learn Anywhere</span>
      </div>
    </div>
  )
}

export function TrustBadgesCompact() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <span className="text-base">✓</span>
        <span className="text-xs text-muted-foreground">30-Day Guarantee</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-base">♾️</span>
        <span className="text-xs text-muted-foreground">Lifetime Access</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-base">🔒</span>
        <span className="text-xs text-muted-foreground">No Hidden Fees</span>
      </div>
    </div>
  )
}
