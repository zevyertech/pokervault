'use client'

import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, X, LogOut, User } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const { user, signOut, isAuthenticated } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:bg-accent/90 transition-colors">
              PV
            </div>
            <span className="font-semibold text-lg hidden sm:inline text-foreground">Poker Vault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Explore Courses
            </Link>
            <Link href="/community" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Community
            </Link>
            <Link href="/blog" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm">{user.email}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-courses" className="cursor-pointer">
                      My Courses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="cursor-pointer text-destructive">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 space-y-2">
            <Link href="/explore" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
              Explore Courses
            </Link>
            <Link href="/community" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
              Community
            </Link>
            <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
              Blog
            </Link>
            <Link href="/about" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
              About
            </Link>
            {!isAuthenticated && (
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
