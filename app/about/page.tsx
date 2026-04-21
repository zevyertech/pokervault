'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-h2 text-foreground mb-4">About Poker Vault</h1>
          <p className="text-base text-foreground/70">Building the future of poker education</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6 space-y-16">
          {/* Mission */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Our Mission</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Poker Vault exists to democratize poker education and empower players at all levels to improve their game. We believe that with proper guidance, strategy, and mental preparation, anyone can become a winning poker player.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Our mission is to bridge the gap between casual players and professional poker players by providing world-class education at an accessible price point, combined with a supportive community of like-minded individuals.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Excellence</h3>
                <p className="text-foreground/70">We only work with the best instructors and create the highest quality courses in the poker education space.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Integrity</h3>
                <p className="text-foreground/70">We believe in honest education and proven strategies. No hype, no shortcuts—just real poker knowledge.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Community</h3>
                <p className="text-foreground/70">We foster a supportive community where players help each other grow and succeed together.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Accessibility</h3>
                <p className="text-foreground/70">High-quality poker education should be accessible to everyone, regardless of their background or bankroll.</p>
              </div>
            </div>
          </div>

          {/* History */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Our Story</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Poker Vault was founded in 2020 by a group of professional poker players who saw a gap in the market. While there were plenty of resources for beginners, there weren&apos;t many comprehensive, up-to-date courses taught by actual professionals.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              We started by recruiting some of the best poker players in the world and creating courses that distilled years of their experience into digestible, actionable lessons. Our first course, "Texas Hold&apos;em Fundamentals," became an instant success with over 12,000 students in the first year.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Today, Poker Vault has grown to include 8+ courses covering everything from bankroll management to advanced tournament strategy, with a thriving community of 45,000+ students worldwide.
            </p>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Our Team</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-8">
              We&apos;re supported by a dedicated team of poker professionals, educators, and community managers who are passionate about helping others succeed in poker.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Daniel Negreanu', role: 'Co-Founder & Lead Instructor', bio: 'WSOP Bracelet Winner with 30+ years of experience' },
                { name: 'Phil Ivey', role: 'Course Advisor', bio: 'Pro Tour Champion, known for tournament excellence' },
                { name: 'Sarah Chen', role: 'Community Manager', bio: 'Dedicated to building our thriving player community' },
              ].map((member) => (
                <div key={member.name} className="bg-card border border-border/50 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Why Choose Poker Vault?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl text-accent flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">World-Class Instructors</h4>
                  <p className="text-foreground/70">Learn from professional poker players with proven track records and years of experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-accent flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Comprehensive Curriculum</h4>
                  <p className="text-foreground/70">Cover everything from fundamentals to advanced strategies across all poker formats.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-accent flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Lifetime Access</h4>
                  <p className="text-foreground/70">Once you enroll, you have permanent access to all course materials and future updates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-accent flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Active Community</h4>
                  <p className="text-foreground/70">Connect with 45,000+ poker enthusiasts for strategy discussions and support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl text-accent flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Money-Back Guarantee</h4>
                  <p className="text-foreground/70">We&apos;re confident in our courses. Get a full refund within 30 days if not satisfied.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
