'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { mockCommunityTestimonials } from '@/lib/mock-data'
import { MessageCircle, Send } from 'lucide-react'

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-h2 text-foreground mb-4">Join Our Community</h1>
          <p className="text-base text-foreground/70 max-w-2xl">Connect with serious poker players, share strategies, and grow together</p>
        </div>
      </section>

      {/* Community Sections */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {/* Discord Community */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-h3 text-foreground">Discord Community</h2>
                </div>
                <p className="text-base text-foreground/70 leading-relaxed mb-6">
                  Join our active Discord server with 10,000+ poker enthusiasts. Get instant feedback on hands, discuss strategy, and network with serious players from around the world.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Daily strategy discussions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Hand review sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Live coaching streams</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Exclusive course bonuses</span>
                  </div>
                </div>
                <Link href="https://discord.gg/pokervault" target="_blank">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    Join Discord Server
                  </Button>
                </Link>
              </div>
            </div>

            {/* Telegram Community */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Send className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h2 className="text-h3 text-foreground">Telegram Channel</h2>
                </div>
                <p className="text-base text-foreground/70 leading-relaxed mb-6">
                  Subscribe to our Telegram channel for daily poker tips, market updates, and exclusive course announcements. Stay updated with the latest poker trends.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Daily poker tips</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Course announcements</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Market analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-accent">✓</span>
                    <span>Special promotions</span>
                  </div>
                </div>
                <Link href="https://t.me/pokervault" target="_blank">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold flex items-center gap-2 w-full sm:w-auto">
                    <Send className="w-5 h-5" />
                    Join Telegram Channel
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="text-center mb-16">
              <p className="text-label text-accent mb-4">Community Stories</p>
              <h2 className="text-h2 text-foreground">What Members Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mockCommunityTestimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-card border border-border/50 rounded-lg p-8 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
          <h2 className="text-h2 text-foreground mb-6">Ready to Join?</h2>
          <p className="text-lg text-foreground/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of poker players who are improving their game and building lasting connections in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://discord.gg/pokervault" target="_blank">
              <Button size="lg" className="bg-accent hover:bg-accent/95 text-accent-foreground font-semibold px-8">
                Join Discord
              </Button>
            </Link>
            <Link href="https://t.me/pokervault" target="_blank">
              <Button size="lg" variant="outline" className="font-semibold px-8">
                Join Telegram
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
