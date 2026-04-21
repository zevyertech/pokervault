'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="py-16 bg-card border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-h2 text-foreground mb-4">Get In Touch</h1>
          <p className="text-base text-foreground/70">Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as quickly as possible.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Email */}
            <div className="bg-card border border-border/50 rounded-lg p-8 text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70 mb-4">Send us an email and we&apos;ll get back to you within 24 hours</p>
              <Link href="mailto:support@pokervault.com" className="text-accent hover:text-accent/90 font-semibold">
                support@pokervault.com
              </Link>
            </div>

            {/* Discord */}
            <div className="bg-card border border-border/50 rounded-lg p-8 text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Discord</h3>
              <p className="text-foreground/70 mb-4">Join our Discord community and chat with us directly</p>
              <Link href="https://discord.gg/pokervault" target="_blank" className="text-blue-600 hover:text-blue-700 font-semibold">
                Join Discord
              </Link>
            </div>

            {/* Telegram */}
            <div className="bg-card border border-border/50 rounded-lg p-8 text-center">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                <Send className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telegram</h3>
              <p className="text-foreground/70 mb-4">Message us on Telegram for quick responses</p>
              <Link href="https://t.me/pokervault" target="_blank" className="text-cyan-500 hover:text-cyan-600 font-semibold">
                Message on Telegram
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl">
            <h2 className="text-h3 text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border/50 rounded-lg p-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>

              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-700">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
