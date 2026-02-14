import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {label && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/60">
          {description}
        </p>
      )}
    </div>
  )
}

interface PageHeroProps {
  title: string
  description: string
  label?: string
}

export function PageHero({ title, description, label }: PageHeroProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-accent via-accent/95 to-accent/90 pb-20 pt-24 md:pb-28 md:pt-32">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl -z-10"></div>
      
      <div className="relative z-10 max-w-3xl">
        {label && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 border border-white/30">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              {label}
            </span>
          </div>
        )}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-7 text-pretty text-lg leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </Section>
  )
}
