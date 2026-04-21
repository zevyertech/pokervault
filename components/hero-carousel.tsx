'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { mockCarouselBanners } from '@/lib/mock-data'

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const banners = mockCarouselBanners
  const totalBanners = banners.length

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % totalBanners)
    setIsAutoPlay(false)
  }

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + totalBanners) % totalBanners)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlay(false)
  }

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalBanners)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalBanners])

  const currentBanner = banners[current]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black border-b border-border/60">
      {/* Carousel Container */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <Image
          src={currentBanner.image}
          alt={currentBanner.title}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-hero text-white leading-tight">
                {currentBanner.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                {currentBanner.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={currentBanner.course ? `/courses/${currentBanner.course}` : '/explore'}>
                  <Button size="lg" className="bg-accent hover:bg-accent/95 text-accent-foreground font-semibold px-8 h-12 shadow-xl">
                    {currentBanner.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/20 border border-white/30 hover:bg-white/40 transition-all text-white"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/20 border border-white/30 hover:bg-white/40 transition-all text-white"
          aria-label="Next banner"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === current
                  ? 'bg-accent w-8'
                  : 'bg-white/50 w-3 hover:bg-white/70'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
