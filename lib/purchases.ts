import { supabase } from './supabase'
import { Course } from './courses'

export interface Purchase {
  id: string
  user_id: string
  course_id: string
  purchased_at: string
  expires_at: string | null
  access_granted: boolean
  created_at: string
}

export async function getUserPurchases(userId: string): Promise<(Purchase & { course: Course })[]> {
  if (!supabase) {
    console.error('Supabase not configured')
    return []
  }

  const { data, error } = await supabase
    .from('purchases')
    .select(`
      *,
      course:courses(*)
    `)
    .eq('user_id', userId)
    .order('purchased_at', { ascending: false })

  if (error) {
    console.error('Error fetching purchases:', error)
    return []
  }

  return data || []
}

export async function createPurchase(userId: string, courseId: string) {
  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  const { data, error } = await supabase
    .from('purchases')
    .insert({
      user_id: userId,
      course_id: courseId,
      access_granted: true,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating purchase:', error)
    throw error
  }

  return data
}

export async function hasPurchased(userId: string, courseId: string): Promise<boolean> {
  if (!supabase) {
    console.error('Supabase not configured')
    return false
  }

  const { data, error } = await supabase
    .from('purchases')
    .select('id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .maybeSingle()

  if (error) {
    console.error('Error checking purchase:', error)
    return false
  }

  return !!data
}
