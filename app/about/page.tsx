'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Brain, ShieldCheck, Rocket, Users, Sparkles, Target, Trophy, Cpu } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: 'Precision Learning',
      description: 'Every lesson is engineered for direct table impact, with practical frameworks and modern decision trees.',
      icon: Brain,
    },
    {
      title: 'Transparent Strategy',
      description: 'No gimmicks, no hype cycles. We teach tested systems and measurable poker fundamentals.',
      icon: ShieldCheck,
    },
    {
      title: 'Performance Culture',
      description: 'Our ecosystem is built for long-term growth, consistency, and disciplined execution.',
      icon: Rocket,
    },
    {
      title: 'Collective Edge',
      description: 'A serious community where players exchange insights, review hands, and scale results together.',
      icon: Users,
    },
  ]

  const pillars = [
    { title: 'Elite Mentors', text: 'Learn from proven professionals with elite-level tournament and cash game experience.', icon: Trophy },
    { title: 'Structured Paths', text: 'Progressive curriculum from fundamentals to advanced exploitation and game theory.', icon: Target },
    { title: 'Modern Platform', text: 'Fast, clean, and designed for focused learning with premium UX and future-ready systems.', icon: Cpu },
    { title: 'Results-First Mindset', text: 'Everything we ship is aimed at improving your decisions, confidence, and long-term ROI.', icon: Sparkles },
  ]

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="py-20 bg-card border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-accent/35 bg-gradient-to-br from-accent/20 via-card to-card p-8 sm:p-10">
            <p className="text-label text-accent mb-4">Who We Are</p>
            <h1 className="text-h2 text-foreground mb-4">Building the Most Futuristic Poker Learning Ecosystem</h1>
            <p className="text-base text-foreground/75 max-w-3xl">
              Poker Vault combines elite coaching, high-performance learning design, and a powerful community so players can move from random play to strategic mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Mission */}
          <div className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm p-8">
            <h2 className="text-h3 text-foreground mb-6">Our Mission</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              We help players think sharper, execute cleaner, and build sustainable edge through structured training and expert mentorship.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              From first bankroll plans to advanced exploit lines, Poker Vault is designed to turn intent into measurable growth.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-card border border-border/70 rounded-xl p-8 hover:border-accent/60 transition-all">
                    <div className="w-11 h-11 rounded-lg bg-accent/15 border border-accent/35 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* History */}
          <div className="rounded-2xl border border-border/70 bg-card/60 p-8">
            <h2 className="text-h3 text-foreground mb-6">Our Story</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Poker Vault started with one goal: make professional-level poker education practical, modern, and accessible to serious learners.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              We brought together top instructors, built a clean learning framework, and transformed years of experience into clear, actionable systems.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Today, we support a global player base with advanced training paths, community support, and a platform engineered for long-term improvement.
            </p>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-h3 text-foreground mb-6">Our Team</h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-8 max-w-3xl">
              A hybrid team of elite players, strategy coaches, and product builders focused on one thing: helping members win smarter.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Daniel Negreanu', role: 'Co-Founder & Lead Instructor', bio: 'WSOP Bracelet Winner with 30+ years of experience' },
                { name: 'Phil Ivey', role: 'Course Advisor', bio: 'Pro Tour Champion, known for tournament excellence' },
                { name: 'Sarah Chen', role: 'Community Manager', bio: 'Dedicated to building our thriving player community' },
              ].map((member) => (
                <div key={member.name} className="bg-card border border-border/70 rounded-xl p-6 text-center hover:border-accent/55 transition-all">
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
            <div className="grid sm:grid-cols-2 gap-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="rounded-xl border border-border/70 bg-card/70 p-5 hover:border-accent/60 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/35 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{pillar.title}</h4>
                        <p className="text-foreground/70 text-sm">{pillar.text}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
