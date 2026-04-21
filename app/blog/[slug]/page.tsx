'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { format } from 'date-fns'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogPost, getBlogPostBySlug } from '@/lib/blog-posts'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogDetailPage() {
  const { slug } = useParams() as { slug: string }
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      const data = await getBlogPostBySlug(slug)
      setPost(data)
      setLoading(false)
    }

    if (slug) {
      loadPost()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-foreground/70">Loading article...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center border border-border/70 rounded-xl bg-card p-8 max-w-lg w-full">
            <h1 className="text-2xl font-semibold mb-3">Article not found</h1>
            <p className="text-foreground/70 mb-6">This blog post may have been removed or not published yet.</p>
            <Link href="/blog" className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:border-accent/70 transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="border-b border-border/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-accent hover:text-accent/80 transition-colors">
            ← Back to Blog
          </Link>
          <div className="mt-6 mb-4 flex items-center gap-3">
            <Badge variant="outline">{post.category || 'General'}</Badge>
            <span className="text-sm text-foreground/60">{post.author}</span>
            <span className="text-sm text-foreground/50">•</span>
            <span className="text-sm text-foreground/60">
              {post.published_at ? format(new Date(post.published_at), 'PPP') : 'Draft'}
            </span>
          </div>
          <h1 className="text-h2 text-foreground leading-tight">{post.title}</h1>
          {post.excerpt && <p className="text-foreground/75 mt-4 text-lg">{post.excerpt}</p>}
        </div>
      </section>

      <section className="py-10 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/70 bg-card">
            <Image
              src={post.featured_image_url || '/placeholder.svg'}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none border border-border/70 rounded-xl bg-card p-8">
            <div className="whitespace-pre-wrap text-foreground/85 leading-relaxed">
              {post.content || 'No content available for this post yet.'}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
