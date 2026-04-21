import { supabase } from './supabase'

export interface Course {
  id: string
  title: string
  slug: string
  category: string
  short_description: string
  full_description: string
  instructor_name: string
  level: string
  price: number
  thumbnail_url: string | null
  badge: 'bestseller' | 'new' | 'community-favorite' | null
  published_at: string
  created_at: string
  updated_at: string
}

export interface CourseModule {
  id: string
  course_id: string
  module_number: number
  title: string
  description: string | null
  lesson_count: number
  duration_minutes: number
  order_index: number
}

export async function getCourses(category?: string): Promise<Course[]> {
  if (!supabase) {
    console.error('Supabase not configured')
    return []
  }

  let query = supabase.from('courses').select('*')

  if (category) {
    query = query.eq('category', category)
  }

  query = query.order('published_at', { ascending: false })

  const { data, error } = await query

  if (error) {
    console.error('Error fetching courses:', error)
    return []
  }

  return data || []
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  if (!supabase) {
    console.error('Supabase not configured')
    return null
  }

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching course:', error)
    return null
  }

  return data
}

export async function getCourseById(courseId: string): Promise<Course | null> {
  if (!supabase) {
    console.error('Supabase not configured')
    return null
  }

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', courseId)
    .single()

  if (error) {
    console.error('Error fetching course by ID:', error)
    return null
  }

  return data
}

export async function getCourseModules(courseId: string): Promise<CourseModule[]> {
  if (!supabase) {
    console.error('Supabase not configured')
    return []
  }

  const { data, error } = await supabase
    .from('course_modules')
    .select('*')
    .eq('course_id', courseId)
    .order('order_index', { ascending: true })

  if (error) {
    console.error('Error fetching modules:', error)
    return []
  }

  return data || []
}

export async function getCategories(): Promise<string[]> {
  if (!supabase) {
    console.error('Supabase not configured')
    return []
  }

  const { data, error } = await supabase
    .from('courses')
    .select('category')
    .neq('category', null)

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  const categories = [...new Set((data || []).map(d => d.category))].sort()
  return categories
}

export function getLevelColor(level: string): string {
  switch (level) {
    case 'beginner':
      return 'bg-emerald-500/20 text-emerald-400'
    case 'intermediate':
      return 'bg-blue-500/20 text-blue-400'
    case 'advanced':
      return 'bg-purple-500/20 text-purple-400'
    default:
      return 'bg-muted text-foreground/70'
  }
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
}
