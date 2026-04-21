'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogPost, getBlogPosts } from '@/lib/blog-posts'
import Link from 'next/link'
import Image from 'next/image'
import { formatDistance } from 'date-fns'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getBlogPosts()
      setPosts(data)
      setLoading(false)
    }

    loadPosts()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-card border-b border-border/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <h1 className="text-h2 text-foreground mb-4">Poker Blog</h1>
          <p className="text-base text-foreground/70">Insights, strategies, and poker education from our experts</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          {loading ? (
            <p className="text-foreground/70">Loading posts...</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden bg-card rounded-lg border border-border/50 hover:border-border transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.featured_image_url || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent capitalize">
                      {post.category || 'General'}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-auto line-clamp-3 text-sm">
                    {post.excerpt || 'No excerpt available yet.'}
                  </p>
                  <div className="flex items-center justify-between text-sm text-foreground/60 border-t border-border/50 pt-4 mt-4">
                    <span>{post.author}</span>
                    <span>{post.published_at ? formatDistance(new Date(post.published_at), new Date(), { addSuffix: true }) : 'Draft'}</span>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
