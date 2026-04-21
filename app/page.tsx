'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { InstructorCard } from '@/components/instructor-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { TrustBadges } from '@/components/trust-badges'
import { CourseCardFeatured } from '@/components/course-card-featured'
import { HeroCarousel } from '@/components/hero-carousel'
import { mockCourses } from '@/lib/mock-data'

const featuredCourses = mockCourses.slice(0, 4)
const featuredCourseCards = featuredCourses.map((course, index) => ({
  id: course.id,
  slug: course.slug,
  title: course.title,
  instructor: course.instructor_name,
  price: course.price,
  thumbnail: course.thumbnail,
  students: 5000 + index * 1700,
  rating: 4.6 + index * 0.1,
  level: course.level,
  badge: course.badge,
  category: course.category,
  shortDescription: course.short_description,
}))

const testimonials = [
  {
    quote: 'Doubled my hourly rate at the tables within 6 months. The mental game module alone was worth 10x the course price.',
    author: 'Marcus Chen',
    role: 'Professional Cash Game Player',
    achievement: '+$45K Annual Winnings',
    featured: true,
  },
  {
    quote: 'Finally understood position strategy. The framework Phil teaches is crystal clear and immediately applicable.',
    author: 'Sarah Mitchell',
    role: 'Tournament Regular',
    achievement: 'Final Table 3 Majors',
  },
  {
    quote: 'The range theory section transformed how I think about poker. Highly recommended for serious players.',
    author: 'James Rodriguez',
    role: 'Semi-Pro Grinder',
    achievement: 'Poker 500 Ranking',
  },
  {
    quote: 'Unlike other courses, this teaches actual winning strategy, not hype. Best investment I\'ve made.',
    author: 'Emma Thompson',
    role: 'Tournament Player',
    achievement: 'Regional Champion',
  },
  {
    quote: 'I stopped punting stacks after module two. The structure and drills are practical and easy to apply.',
    author: 'Noah Ibrahim',
    role: 'Online Grinder',
    achievement: '+18bb/100 Improvement',
  },
  {
    quote: 'The bankroll rules and review templates changed everything for me. I now play with total confidence.',
    author: 'Liam Costa',
    role: 'Live Cash Specialist',
    achievement: '12-Month Winning Streak',
  },
  {
    quote: 'Hands-down the cleanest poker education platform I\'ve used. You can feel the quality in every module.',
    author: 'Ravi Kapoor',
    role: 'MTT Competitor',
    achievement: '$27K Tournament Score',
  },
]

const instructors = [
  {
    name: 'Daniel Negreanu',
    title: 'Poker Legend & Strategist',
    yearsExperience: 30,
    studentsCount: 45000,
    bio: 'Multiple World Series of Poker bracelets. Pioneered modern poker strategy and continues to push boundaries.',
    specialty: 'No-Limit Hold\'em & Tournament Play',
  },
  {
    name: 'Phil Ivey',
    title: 'Pro Tour Champion',
    yearsExperience: 28,
    studentsCount: 38000,
    bio: 'Known as the Tiger Woods of poker. Excels across all formats and continues to win at the highest levels.',
    specialty: 'Tournament Strategy & Adaptability',
  },
  {
    name: 'Vanessa Selbst',
    title: 'Cash Game Specialist',
    yearsExperience: 18,
    studentsCount: 22000,
    bio: 'Dominant cash game player with proven profitability. Breaks down complex concepts clearly.',
    specialty: 'Cash Games & Bankroll Management',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Trust Section */}
      <section className="py-20 bg-card border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-label text-accent mb-4">Our Commitment</p>
            <h2 className="text-h2 text-foreground">Built on Trust & Results</h2>
          </div>
          <TrustBadges />
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-label text-accent mb-4">Bestselling Courses</p>
            <div className="flex items-end justify-between gap-8">
              <div>
                <h2 className="text-h2 text-foreground mb-4">
                  Begin Your Journey
                </h2>
                <p className="text-base text-foreground/70 max-w-2xl leading-relaxed">
                  Our most popular courses, chosen by thousands of serious poker players looking to improve their game and earnings.
                </p>
              </div>
              <Link href="/explore" className="hidden sm:block flex-shrink-0">
                <Button variant="outline" className="font-semibold">View All Courses →</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredCourseCards.map((course) => (
              <CourseCardFeatured key={course.id} {...course} />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link href="/explore">
              <Button variant="outline" className="font-semibold">View All Courses →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-card border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-label text-accent mb-4">Success Stories</p>
            <h2 className="text-h2 text-foreground">Real Results from Real Players</h2>
          </div>
          <div className="max-w-3xl">
            <TestimonialCard {...testimonials[0]} />
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-label text-accent mb-4">Expert Instructors</p>
            <h2 className="text-h2 text-foreground mb-6">Learn from Champions</h2>
            <p className="text-base text-foreground/70 max-w-2xl leading-relaxed">
              Each instructor brings years of professional experience and proven track records. When you learn from Poker Vault, you&apos;re learning from the best in the game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.name} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-card border-b border-border/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-label text-accent mb-4">Social Proof</p>
            <h2 className="text-h2 text-foreground">Join Thousands of Winning Players</h2>
          </div>

          <div className="relative">
            <div
              className="flex gap-6 w-max"
              style={{ animation: 'marquee 55s linear infinite' }}
            >
              {[...testimonials.slice(1), ...testimonials.slice(1)].map((testimonial, idx) => (
                <div key={idx} className="w-[320px] sm:w-[360px]">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 bg-background border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h1 text-foreground mb-8">
            Ready to Transform Your Game?
          </h2>
          <p className="text-lg text-foreground/75 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 45K+ players who have already improved their skills and increased their earnings through Poker Vault courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/explore">
              <Button size="lg" className="bg-accent hover:bg-accent/95 text-accent-foreground px-8 font-semibold shadow-lg hover:shadow-xl transition-all">
                Explore Courses
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="lg" variant="outline" className="px-8 font-semibold">
                Create Free Account
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            30-day money-back guarantee on all courses • No credit card required to browse
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
