import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold">
                P
              </div>
              <h3 className="font-semibold text-foreground">Poker Vault</h3>
            </Link>
            <p className="text-sm text-foreground/70">Premium poker education for ambitious players.</p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/explore" className="text-foreground/70 hover:text-foreground transition-colors">Explore All</Link></li>
              <li><Link href="/explore" className="text-foreground/70 hover:text-foreground transition-colors">Cash Games</Link></li>
              <li><Link href="/explore" className="text-foreground/70 hover:text-foreground transition-colors">Tournaments</Link></li>
              <li><Link href="/explore" className="text-foreground/70 hover:text-foreground transition-colors">Strategy</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/community" className="text-foreground/70 hover:text-foreground transition-colors">Community</Link></li>
              <li><Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-foreground/70 hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="https://discord.gg/pokervault" target="_blank" className="text-foreground/70 hover:text-foreground transition-colors">Discord</Link></li>
              <li><Link href="https://t.me/pokervault" target="_blank" className="text-foreground/70 hover:text-foreground transition-colors">Telegram</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-sm text-foreground/60 text-center">
            © 2024 Poker Vault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
