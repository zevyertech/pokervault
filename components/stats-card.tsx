'use client'

interface StatsCardProps {
  label: string
  value: string | number
  sublabel?: string
  accent?: boolean
  trend?: number
  icon?: string
}

export function StatsCard({ label, value, sublabel, accent = false, trend, icon }: StatsCardProps) {
  return (
    <div className={`rounded-lg border p-8 transition-all ${
      accent 
        ? 'bg-gradient-to-br from-accent/10 to-transparent border-accent/30 hover:border-accent/50 hover:shadow-md' 
        : 'bg-card border-border/50 hover:border-border/70 hover:shadow-md'
    }`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">{label}</p>
          {sublabel && <p className="text-sm text-foreground/70 font-medium">{sublabel}</p>}
        </div>
        {icon && <span className="text-4xl flex-shrink-0">{icon}</span>}
      </div>

      <div className="flex items-baseline gap-3">
        <span className={`text-5xl font-bold ${accent ? 'text-accent' : 'text-foreground'}`}>
          {value}
        </span>
        {trend !== undefined && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${trend >= 0 ? 'bg-green-500/20 text-green-600' : 'bg-red-500/20 text-red-600'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  )
}
