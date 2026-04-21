import { supabase } from './supabase'

export interface BlogPost {
  id: string
  title: string
  slug: string
  category: string | null
  excerpt: string | null
  content: string | null
  author: string
  featured_image_url: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!supabase) {
    console.error('Supabase not configured')
    return []
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data || []
}
