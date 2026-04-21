'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { Course, getCategories, getCourses } from '@/lib/courses'
import { Star, ChevronDown } from 'lucide-react'

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [courses, setCourses] = useState<Course[]>([])
  const [categories, setCategories] = useState<string[]>(['All Courses'])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      const [coursesData, categoryData] = await Promise.all([
        getCourses(),
        getCategories(),
      ])
      setCourses(coursesData)
      setCategories(['All Courses', ...categoryData])
      setLoading(false)
    }

    loadData()
  }, [])

  const filteredCourses = selectedCategory && selectedCategory !== 'All Courses'
    ? courses.filter(c => c.category === selectedCategory)
    : courses

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-1">
        {/* Header */}
        <section className="bg-card border-b border-border/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
            <h1 className="text-h2 text-foreground mb-4">Explore Courses</h1>
            <p className="text-base text-foreground/70 max-w-2xl">Find the perfect course to advance your poker game and increase your earnings</p>
          </div>
        </section>

        {/* Filters and Courses */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
            {/* Full-Width Dropdown */}
            <div className="mb-16">
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-card border border-border/50 rounded-lg hover:border-border transition-colors text-foreground font-medium"
                >
                  <span>{selectedCategory || 'Select Category'}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-lg shadow-lg z-10">
                    <div className="max-h-96 overflow-y-auto">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category === 'All Courses' ? null : category)
                            setDropdownOpen(false)
                          }}
                          className="w-full text-left px-6 py-3 hover:bg-accent/10 border-b border-border/30 last:border-b-0 text-foreground transition-colors"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Courses Grid */}
            {loading ? (
              <div className="text-center py-16">
                <p className="text-foreground/70">Loading courses...</p>
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-foreground/70">No courses found in this category.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.slug}`}
                    className="group flex flex-col h-full"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-5 bg-muted shadow-md flex-shrink-0">
                      <Image
                        src={course.thumbnail_url || '/placeholder.svg'}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {course.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-accent text-accent-foreground capitalize font-semibold shadow-md">
                            {course.badge.replace('-', ' ')}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col flex-grow">
                      <div className="mb-3">
                        <Badge variant="outline" className="capitalize text-xs font-semibold">
                          {course.level}
                        </Badge>
                      </div>

                      <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2 leading-snug">
                        {course.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-2">
                        {course.instructor_name}
                      </p>

                      <p className="text-sm text-foreground/65 line-clamp-2 mb-auto leading-relaxed">
                        {course.short_description}
                      </p>

                      <div className="flex items-center justify-between pt-5 border-t border-border/50 mt-5">
                        <span className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-semibold text-foreground">4.8</span>
                        </span>
                        <div className="text-base font-bold text-accent">
                          ${course.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
