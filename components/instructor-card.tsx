'use client'

interface InstructorCardProps {
  name: string
  title: string
  yearsExperience: number
  studentsCount: number
  bio: string
  specialty: string
}

export function InstructorCard({ name, title, yearsExperience, studentsCount, bio, specialty }: InstructorCardProps) {
  return (
    <div className="group">
      <div className="bg-card border border-border/50 rounded-lg p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-accent font-medium mt-1">{title}</p>
          </div>
          <div className="text-3xl">🏆</div>
        </div>

        <p className="text-sm text-foreground/70 mb-8 leading-relaxed flex-grow">{bio}</p>

        <div className="grid grid-cols-2 gap-6 mb-6 pt-6 border-t border-border/50">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">{yearsExperience}+</div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Years of Experience</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">{(studentsCount / 1000).toFixed(1)}K+</div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Students Taught</p>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50">
          <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Specialty</p>
          <p className="text-sm text-foreground/75 leading-relaxed">{specialty}</p>
        </div>
      </div>
    </div>
  )
}
