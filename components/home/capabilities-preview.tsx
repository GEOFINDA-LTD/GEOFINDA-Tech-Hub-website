import React from "react"
import Link from "next/link"
import { ArrowRight, Layers, Monitor, Compass, Shield, Users } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { capabilities } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="h-6 w-6" />,
  Monitor: <Monitor className="h-6 w-6" />,
  Compass: <Compass className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
}

const brandColors = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-accent/20 to-accent/5",
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
]

const borderColors = [
  "border-primary/30 hover:border-primary/50",
  "border-secondary/30 hover:border-secondary/50",
  "border-accent/30 hover:border-accent/50",
  "border-primary/30 hover:border-primary/50",
  "border-secondary/30 hover:border-secondary/50",
]

export function CapabilitiesPreview() {
  return (
    <Section className="py-24">
      <SectionHeader
        label="What We Do"
        title="Five capability areas. One technology partner."
        description="We work across the full spectrum of technology needs. From building new systems to supporting existing ones, we bring consistency and depth."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => (
          <Link
            key={capability.slug}
            href={`/services#${capability.slug}`}
            className={`group flex flex-col rounded-xl border-2 bg-gradient-to-br ${brandColors[index % 5]} ${borderColors[index % 5]} p-8 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/10 hover:-translate-y-1`}
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${
              index % 5 === 0 
                ? 'bg-primary/20 text-primary' 
                : index % 5 === 1 
                ? 'bg-secondary/20 text-secondary'
                : 'bg-accent/20 text-accent'
            } transition-transform group-hover:scale-110`}>
              {iconMap[capability.icon]}
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">
              {capability.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
              {capability.headline}
            </p>
            <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary gap-2 group-hover:gap-3 transition-all">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
