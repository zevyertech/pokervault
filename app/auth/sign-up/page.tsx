'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function SignUpPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setLoading(true)
    // Add sign-up logic here
    setTimeout(() => setLoading(false), 1000)
  }

  const handleOAuthClick = (provider: string) => {
    // Add OAuth logic here
    console.log(`Sign up with ${provider}`)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-h2 text-foreground mb-3">Create Account</h1>
            <p className="text-base text-foreground/70">Join thousands of poker players improving their game</p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-8">
            <Button
              onClick={() => handleOAuthClick('Google')}
              variant="outline"
              size="lg"
              className="w-full font-semibold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>

            <Button
              onClick={() => handleOAuthClick('Discord')}
              variant="outline"
              size="lg"
              className="w-full font-semibold flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.372.288a.07.07 0 0 1-.006.119a12.973 12.973 0 0 1-1.873.892a.07.07 0 0 0-.037.099a14.97 14.97 0 0 0 1.293 2.1a.078.078 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.079.079 0 0 0 .033-.057c.5-4.812-.838-8.987-3.646-12.72a.071.071 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.931 2.155-2.157 2.155z" />
              </svg>
              Sign up with Discord
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-foreground/60">Or create with email</span>
            </div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <Input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/95 text-accent-foreground font-semibold" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-foreground/70 mb-12">
            Already have an account?{' '}
            <Link href="/auth/sign-in" className="text-accent hover:text-accent/90 font-semibold">
              Sign in
            </Link>
          </p>

          {/* Demo Credentials */}
          <div className="bg-card border border-border/50 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Try Demo Account</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-foreground/60 mb-1">Email:</p>
                <p className="text-foreground font-mono bg-background/50 p-2 rounded">demo@poker.com</p>
              </div>
              <div>
                <p className="text-foreground/60 mb-1">Password:</p>
                <p className="text-foreground font-mono bg-background/50 p-2 rounded">Demo123!</p>
              </div>
            </div>
            <p className="text-xs text-foreground/50 mt-4">Use these credentials to explore the full app experience</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
