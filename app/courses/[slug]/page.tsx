'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getCourseBySlug, getCourseModules, Course, CourseModule, getLevelColor, formatDuration } from '@/lib/courses'
import { useParams } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { hasPurchased as checkHasPurchased } from '@/lib/purchases'
import { CheckCircle2, Clock, Users, Star, Award } from 'lucide-react'
import { TrustBadgesCompact } from '@/components/trust-badges'
import Link from 'next/link'

export default function CourseDetailPage() {
  const { slug } = useParams() as { slug: string }
  const { user, isAuthenticated } = useAuth()
  const [course, setCourse] = useState<Course | null>(null)
  const [modules, setModules] = useState<CourseModule[]>([])
  const [loading, setLoading] = useState(true)
  const [hasPurchased, setHasPurchased] = useState(false)

  useEffect(() => {
    const loadCourse = async () => {
      setLoading(true)
      const courseData = await getCourseBySlug(slug as string)
      if (courseData) {
        setCourse(courseData)
        const modulesData = await getCourseModules(courseData.id)
        setModules(modulesData)

        if (isAuthenticated && user) {
          const purchased = await checkHasPurchased(user.id, courseData.id)
          setHasPurchased(purchased)
        }
      }
      setLoading(false)
    }

    loadCourse()
  }, [slug, isAuthenticated, user])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-foreground/70">Loading course...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Course not found</h2>
            <Button variant="outline" asChild>
              <Link href="/explore">Back to Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/explore" className="text-accent hover:text-accent/90 text-sm font-medium mb-12 inline-flex items-center gap-1.5 transition-colors">
            <span>←</span> Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Course Info */}
            <div className="lg:col-span-2">
              {/* Badges and Meta */}
              <div className="flex items-center gap-3 mb-8">
                <Badge className="text-xs font-semibold uppercase tracking-wider">
                  {course.level}
                </Badge>
                {course.badge && (
                  <Badge variant="secondary" className="flex items-center gap-1.5">
                    <Award className="w-3 h-3" />
                    {course.badge.replace('-', ' ')}
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h1 className="text-h1 text-foreground mb-8 leading-tight">
                {course.title}
              </h1>

              {/* Short Description */}
              <p className="text-xl text-foreground/80 mb-12 max-w-2xl leading-relaxed font-normal">
                {course.short_description}
              </p>

              {/* Instructor & Stats Row */}
              <div className="flex flex-col sm:flex-row gap-12 mb-12 pb-12 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-2xl flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Instructor</p>
                    <p className="font-semibold text-base text-foreground">{course.instructor_name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Course Rating</p>
                    <p className="font-semibold text-base text-foreground">4.9 (1,240 reviews)</p>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-foreground/75 leading-relaxed text-base font-normal">
                  {course.full_description}
                </p>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div>
              <div className="sticky top-24 bg-card rounded-lg border border-border/50 p-10 space-y-8 shadow-lg">
                {/* Price Section */}
                <div className="text-center py-6">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Course Price</p>
                  <div className="text-5xl font-bold text-accent mb-2">${course.price}</div>
                  <p className="text-sm text-foreground/70">Lifetime access to all course content</p>
                </div>

                {/* Primary CTA */}
                {hasPurchased ? (
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all" asChild>
                    <Link href={`/courses/${course.slug}/lessons`}>
                      <span className="flex items-center gap-2 justify-center">
                        <CheckCircle2 className="w-5 h-5" />
                        Access Course
                      </span>
                    </Link>
                  </Button>
                ) : (
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-semibold h-12 shadow-lg hover:shadow-xl transition-all" asChild>
                    <Link href={`/checkout?course=${course.id}`}>
                      Enroll Now
                    </Link>
                  </Button>
                )}

                {/* Course Stats */}
                <div className="bg-background/40 rounded-lg p-6 space-y-4 text-sm">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider">What You Get</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground/75">
                      <span className="text-accent text-lg">✓</span>
                      <span className="font-medium">{modules.length} structured modules</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/75">
                      <span className="text-accent text-lg">✓</span>
                      <span className="font-medium">{modules.reduce((sum, m) => sum + m.lesson_count, 0)} video lessons</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/75">
                      <span className="text-accent text-lg">✓</span>
                      <span className="font-medium">{formatDuration(modules.reduce((sum, m) => sum + m.duration_minutes, 0))} total content</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/75">
                      <span className="text-accent text-lg">✓</span>
                      <span className="font-medium">Permanent lifetime access</span>
                    </div>
                  </div>
                </div>

                {/* Trust */}
                <div className="border-t border-border/50 pt-6">
                  <p className="text-xs font-semibold text-foreground/70 mb-4 uppercase tracking-wider">Backed By</p>
                  <TrustBadgesCompact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-h2 text-foreground mb-4">What You&apos;ll Learn</h2>
            <p className="text-base text-foreground/70 max-w-2xl">Structured curriculum designed for mastery, not just consumption. Each module builds on previous concepts with hands-on application.</p>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="group bg-background border border-border/50 rounded-lg p-8 hover:border-accent/40 hover:shadow-md hover:bg-background/60 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20 text-accent font-bold text-sm flex-shrink-0">
                        {module.module_number}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                        {module.title}
                      </h3>
                    </div>
                    
                    {module.description && (
                      <p className="text-foreground/70 mb-5 text-sm leading-relaxed">
                        {module.description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-5 text-sm">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 text-foreground font-medium">
                        📚 {module.lesson_count} {module.lesson_count === 1 ? 'lesson' : 'lessons'}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 text-foreground font-medium">
                        <Clock className="w-4 h-4" />
                        {formatDuration(module.duration_minutes)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-2xl text-foreground/30 group-hover:text-accent/60 transition-colors flex-shrink-0 mt-1">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-border/50">
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">{modules.length}</p>
              <p className="text-sm text-foreground/70 font-medium">Comprehensive Modules</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">{modules.reduce((sum, m) => sum + m.lesson_count, 0)}</p>
              <p className="text-sm text-foreground/70 font-medium">Video Lessons</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">{formatDuration(modules.reduce((sum, m) => sum + m.duration_minutes, 0))}</p>
              <p className="text-sm text-foreground/70 font-medium">Total Content</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
