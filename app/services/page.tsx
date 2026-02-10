import React from "react"
import type { Metadata } from "next"
import { Layers, Monitor, Compass, Shield, Users, Check } from "lucide-react"
import { PageHero, Section } from "@/components/section"
import { capabilities } from "@/lib/data"
import { CTASection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our five core capability areas: custom software, web products, technology consulting, maintenance, and engineering capacity.",
}

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="h-7 w-7" />,
  Monitor: <Monitor className="h-7 w-7" />,
  Compass: <Compass className="h-7 w-7" />,
  Shield: <Shield className="h-7 w-7" />,
  Users: <Users className="h-7 w-7" />,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Capabilities that cover the full technology lifecycle."
        description="We work across five interconnected areas. Most engagements draw from more than one, tailored to the specifics of your situation."
      />

      <Section>
        <div className="flex flex-col gap-20">
          {capabilities.map((capability, index) => (
            <div
              key={capability.slug}
              id={capability.slug}
              className="scroll-mt-24"
            >
              <div
                className={`flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {iconMap[capability.icon]}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {capability.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>

                {/* Details card */}
                <div className="flex-1 rounded-lg border border-border bg-card p-6 lg:max-w-md">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What this includes
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {capability.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-card-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < capabilities.length - 1 && (
                <div className="mt-20 border-t border-border" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
