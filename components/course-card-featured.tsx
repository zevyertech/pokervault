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
}

export function CourseCardFeatured({ slug, title, instructor, price, thumbnail, students, rating, level, badge }: CourseCardFeaturedProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="group cursor-pointer h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-5 shadow-md">
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

        <div className="flex flex-col flex-grow">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">{level}</p>
          <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-3 leading-snug">{title}</h3>

          <p className="text-sm text-muted-foreground mb-auto">{instructor}</p>

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
