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

export function CapabilitiesPreview() {
  return (
    <Section>
      <SectionHeader
        label="What We Do"
        title="Five capability areas. One technology partner."
        description="We work across the full spectrum of technology needs. From building new systems to supporting existing ones, we bring consistency and depth."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <Link
            key={capability.slug}
            href={`/services#${capability.slug}`}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-muted/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
              {iconMap[capability.icon]}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">
              {capability.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {capability.headline}
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Learn more
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
