import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Clock, RefreshCw, Users } from "lucide-react"
import { PageHero, Section, SectionHeader } from "@/components/section"
import { deliveryModels } from "@/lib/data"

export const metadata: Metadata = {
  title: "Delivery Models",
  description:
    "How we structure collaboration. From fixed-scope projects to dedicated engineering pods, we adapt delivery to the nature of the work.",
}

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-6 w-6" />,
  Clock: <Clock className="h-6 w-6" />,
  RefreshCw: <RefreshCw className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
}

export default function DeliveryPage() {
  return (
    <>
      <PageHero
        label="Delivery Models"
        title="What we do and how we deliver it are related, but not the same."
        description="The delivery model shapes how we collaborate day-to-day. We match the structure to the nature of the work, not the other way around."
      />

      <Section>
        <SectionHeader
          title="Four ways to structure our collaboration."
          description="Each model offers different trade-offs in terms of flexibility, predictability, and depth of integration."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {deliveryModels.map((model) => (
            <div
              key={model.title}
              className="rounded-lg border border-border bg-card p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                {iconMap[model.icon]}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                {model.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Relationship between capabilities and delivery */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="A Note on Structure"
            title="Capabilities and delivery models are independent choices."
            className="mx-auto max-w-3xl"
          />
          <div className="mt-8 flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              A consulting engagement might be delivered as a fixed-scope
              project or as part of an ongoing retainer. A custom software build
              could be handled by a dedicated pod or through a time-bound
              engagement.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We help you find the right combination based on your goals,
              timeline, and how your team works. The important thing is that the
              structure serves the work, not the other way around.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Let us help you find the right structure
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
