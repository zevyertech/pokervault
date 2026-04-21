'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CourseCardFeaturedProps {
  id: string
  slug: string
  title: string
  instructor: string
  price: number
  thumbnail: string
  students: number
  rating: number
  level: string
  badge?: string
  category?: string
  shortDescription?: string
}

export function CourseCardFeatured({
  slug,
  title,
  instructor,
  price,
  thumbnail,
  students,
  rating,
  level,
  badge,
  category,
  shortDescription,
}: CourseCardFeaturedProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="group cursor-pointer h-full flex flex-col rounded-xl border border-border/70 bg-card/70 backdrop-blur-sm p-3 hover:border-accent/60 hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.25)] transition-all">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-4 shadow-md border border-border/50">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {badge && (
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {badge.toUpperCase()}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex flex-col flex-grow px-1 pb-1">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{level}</p>
            {category && (
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-border/60 text-foreground/70">
                {category}
              </span>
            )}
          </div>
          <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2 leading-snug">{title}</h3>

          <p className="text-sm text-muted-foreground mb-1">{instructor}</p>
          {shortDescription && (
            <p className="text-xs text-foreground/65 line-clamp-2 mb-auto">{shortDescription}</p>
          )}

          <div className="flex items-center justify-between pt-5 border-t border-border/50 mt-5">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm">★</span>
              <span className="text-sm font-semibold text-foreground">{rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">({(students / 1000).toFixed(1)}K)</span>
            </div>
            <p className="text-base font-bold text-accent">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
