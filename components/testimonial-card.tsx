'use client'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  achievement: string
  featured?: boolean
}

export function TestimonialCard({ quote, author, role, achievement, featured = false }: TestimonialCardProps) {
  if (featured) {
    return (
      <div className="bg-gradient-to-br from-accent/8 to-transparent border border-accent/30 rounded-lg p-10 shadow-md">
        <div className="mb-6">
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-sm">★</span>
            ))}
          </div>
          <p className="text-xl leading-relaxed text-foreground font-normal mb-8">{`"${quote}"`}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{author}</p>
              <p className="text-sm text-muted-foreground mt-1">{role}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider">Achievement</p>
              <p className="text-sm font-medium text-foreground mt-1">{achievement}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border/50 rounded-lg p-7 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-amber-400 text-sm">★</span>
        ))}
      </div>
      <p className="text-foreground/85 text-sm leading-relaxed mb-6 flex-grow">{`"${quote}"`}</p>
      <div className="pt-5 border-t border-border/50">
        <p className="font-semibold text-foreground text-sm">{author}</p>
        <p className="text-xs text-muted-foreground mt-1">{role}</p>
        <p className="text-xs font-medium text-accent mt-3">{achievement}</p>
      </div>
    </div>
  )
}
