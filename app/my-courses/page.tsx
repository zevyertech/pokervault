'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { getUserPurchases } from '@/lib/purchases'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'
import { redirect } from 'next/navigation'

export default function MyCoursesPage() {
  const { user, isAuthenticated, loading } = useAuth()
  const [purchases, setPurchases] = useState([])
  const [loadingPurchases, setLoadingPurchases] = useState(true)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      redirect('/sign-in')
    }
  }, [isAuthenticated, loading])

  useEffect(() => {
    const loadPurchases = async () => {
      if (user) {
        const data = await getUserPurchases(user.id)
        setPurchases(data)
      }
      setLoadingPurchases(false)
    }

    if (user) {
      loadPurchases()
    }
  }, [user])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-foreground/70">Loading...</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-card/50 border-b border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Courses</h1>
          <p className="text-lg text-foreground/70">Continue your poker education</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loadingPurchases ? (
            <p className="text-foreground/70">Loading courses...</p>
          ) : purchases.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-lg border border-border/50">
              <BookOpen className="w-16 h-16 text-foreground/30 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-3">No courses yet</h3>
              <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
                Start your poker education journey. Browse our comprehensive course catalog.
              </p>
              <Button asChild size="lg">
                <Link href="/explore" className="gap-2">
                  Explore Courses <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {purchases.map((purchase: any) => (
                <div
                  key={purchase.id}
                  className="group bg-card rounded-lg border border-border/50 overflow-hidden hover:border-accent/50 transition-colors"
                >
                  <div className="relative h-40 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center overflow-hidden">
                    <BookOpen className="w-16 h-16 text-accent/50" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                      {purchase.course?.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-1">
                      by {purchase.course?.instructor_name}
                    </p>
                    <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                      {purchase.course?.short_description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs font-medium text-accent px-2 py-1 bg-accent/10 rounded capitalize">
                        {purchase.course?.level}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <Link href={`/courses/${purchase.course?.slug}`}>
                          Open
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
