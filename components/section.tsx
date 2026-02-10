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
    <div className={cn("max-w-2xl", className)}>
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {label}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
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
    <Section className="bg-[hsl(193,13%,21%)] pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="max-w-3xl">
        {label && (
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[hsl(195,63%,52%)]">
            {label}
          </p>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-[hsl(0,0%,100%)] md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-[hsl(0,0%,100%)]/80">
          {description}
        </p>
      </div>
    </Section>
  )
}
