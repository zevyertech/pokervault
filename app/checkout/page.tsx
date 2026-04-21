'use client'

import { Suspense, useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/lib/auth-context'
import { getCourseById, Course } from '@/lib/courses'
import { useSearchParams, useRouter } from 'next/navigation'
import { createPurchase } from '@/lib/purchases'
import { TrustBadgesCompact } from '@/components/trust-badges'
import Link from 'next/link'
import { CheckCircle2, Sparkles, Lock } from 'lucide-react'

function CheckoutPageContent() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const courseId = searchParams.get('course')

  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [purchasing, setPurchasing] = useState(false)
  const [purchased, setPurchased] = useState(false)
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/sign-in')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    const loadCourse = async () => {
      if (courseId) {
        const data = await getCourseById(courseId)
        setCourse(data)
      }
      setLoading(false)
    }

    loadCourse()
  }, [courseId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!course || !user) return

    setPurchasing(true)
    try {
      await createPurchase(user.id, course.id)

      setPurchased(true)
      setTimeout(() => {
        router.push(`/courses/${course.slug}`)
      }, 3000)
    } catch (error) {
      console.error('Purchase failed:', error)
      alert('Purchase failed. Please try again.')
    } finally {
      setPurchasing(false)
    }
  }

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

  if (!isAuthenticated) {
    return null
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Course not found</h2>
            <Button variant="outline" asChild>
              <Link href="/explore">Browse Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (purchased) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-2">Purchase Successful!</h2>
            <p className="text-foreground/70 mb-8">
              You now have full access to {course.title}. Redirecting you to the course...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-3">Secure Checkout</h1>
            <p className="text-foreground/70">Complete your purchase and start learning immediately</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handlePurchase} className="space-y-8">
                {/* Payment Details */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-accent" />
                    Payment Information
                  </h2>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cardholder Name
                      </label>
                      <Input
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        disabled={purchasing}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Card Number
                      </label>
                      <Input
                        name="cardNumber"
                        placeholder="4242 4242 4242 4242"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        disabled={purchasing}
                        maxLength={19}
                        className="bg-background"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Expiry Date
                        </label>
                        <Input
                          name="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                          disabled={purchasing}
                          maxLength={5}
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Security Code
                        </label>
                        <Input
                          name="cvc"
                          placeholder="123"
                          value={formData.cvc}
                          onChange={handleChange}
                          required
                          disabled={purchasing}
                          maxLength={4}
                          className="bg-background"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Info */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <p className="text-sm font-semibold text-foreground mb-4">This transaction is secured by:</p>
                  <TrustBadgesCompact />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12"
                  disabled={purchasing}
                >
                  {purchasing ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⌛</span>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Complete Purchase
                    </span>
                  )}
                </Button>

                <p className="text-xs text-foreground/50 text-center">
                  This is a mockup. No actual payment processing occurs.
                </p>
              </form>
            </div>

            {/* Sticky Purchase Card */}
            <div>
              <div className="sticky top-24 bg-gradient-to-br from-card to-card/80 rounded-lg border border-border p-6 space-y-6">
                {/* Course Preview */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-4 text-center">
                  <p className="text-3xl mb-2">🎓</p>
                  <h3 className="font-bold text-foreground mb-2 line-clamp-3 text-sm leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    by {course.instructor_name}
                  </p>
                </div>

                {/* Price Section */}
                <div className="border-t border-b border-border py-4">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-accent">${course.price}</span>
                    <span className="text-xs text-muted-foreground">one-time payment</span>
                  </div>
                  <p className="text-xs text-muted-foreground">♾️ Lifetime access included</p>
                </div>

                {/* Course Details */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Level</span>
                    <span className="font-medium text-foreground">{course.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Format</span>
                    <span className="font-medium text-foreground">Video + Materials</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">Duration</span>
                    <span className="font-medium text-foreground">Self-paced</span>
                  </div>
                </div>

                {/* Guarantee Badge */}
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
                  <p className="text-xs font-semibold text-accent mb-1">30-DAY GUARANTEE</p>
                  <p className="text-xs text-foreground/70">Full refund if not satisfied</p>
                </div>

                {/* Confidence Badge */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Trusted by 45K+ students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <div className="flex-1 flex items-center justify-center">
            <p className="text-foreground/70">Loading checkout...</p>
          </div>
          <Footer />
        </div>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  )
}
