'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { getUserPurchases } from '@/lib/purchases'
import { StatsCard } from '@/components/stats-card'
import Link from 'next/link'
import { LogOut, BookOpen, TrendingUp, Zap } from 'lucide-react'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
  const { user, signOut, isAuthenticated, loading } = useAuth()
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

      <div className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-8">
              <div>
                <h1 className="text-h2 text-foreground mb-3">Your Learning Dashboard</h1>
                <p className="text-base text-foreground/70">Welcome back! Continue your journey to mastery.</p>
              </div>
              <Button variant="outline" onClick={signOut} className="gap-2 font-medium flex-shrink-0">
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Primary Stats - 2 column layout with richer data */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <StatsCard 
                label="Learning Progress"
                value={`${Math.min(purchases.length * 25, 100)}%`}
                sublabel={`${purchases.length} courses enrolled`}
                accent={true}
                icon="📚"
              />
              <StatsCard 
                label="Investment in Growth"
                value={`$${purchases.reduce((sum, p: any) => sum + (p.course?.price || 0), 0).toFixed(0)}`}
                sublabel="Total course spending"
                trend={12}
                icon="💎"
              />
            </div>

            {/* Continue Learning Section */}
            {purchases.length > 0 && (
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="w-5 h-5 text-accent" />
                  <h2 className="text-h3 text-foreground">Continue Learning</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {purchases.slice(0, 3).map((purchase: any) => (
                    <Link
                      key={purchase.id}
                      href={`/courses/${purchase.course?.slug}`}
                      className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-accent/40 hover:shadow-md transition-all"
                    >
                      <div className="aspect-video bg-gradient-to-br from-accent/25 to-accent/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity flex items-center justify-center">
                          <span className="text-4xl">📖</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                          In Progress
                        </p>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2 text-base">
                          {purchase.course?.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {purchase.course?.instructor_name}
                        </p>
                        <div className="space-y-2">
                          <div className="w-full bg-border/50 rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }} />
                          </div>
                          <p className="text-xs text-muted-foreground font-medium">45% complete</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Courses Section */}
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h2 className="text-h3 text-foreground">Your Library</h2>
            </div>

            {loadingPurchases ? (
              <p className="text-foreground/70">Loading courses...</p>
            ) : purchases.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-lg border border-border/50">
                <BookOpen className="w-20 h-20 text-foreground/25 mx-auto mb-8" />
                <h3 className="text-h3 text-foreground mb-4">Start Your Journey</h3>
                <p className="text-base text-foreground/70 mb-10 max-w-md mx-auto leading-relaxed">
                  Explore our library of premium poker courses taught by world-class professionals.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent/95 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Link href="/explore">Explore Courses</Link>
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {purchases.map((purchase: any) => (
                  <Link
                    key={purchase.id}
                    href={`/courses/${purchase.course?.slug}`}
                    className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-accent/40 hover:shadow-md transition-all flex flex-col h-full"
                  >
                    <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity flex items-center justify-center">
                        <div className="text-4xl">🎓</div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                        {purchase.course?.level}
                      </p>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2 text-base leading-snug">
                        {purchase.course?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-auto">
                        {purchase.course?.instructor_name}
                      </p>
                      <div className="pt-5 border-t border-border/50 mt-4">
                        <p className="text-xs font-semibold text-accent">
                          Lifetime Access
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
