import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { PageHero, Section, SectionHeader } from "@/components/section"
import { engagementModels } from "@/lib/data"

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Understand the typical ways we engage. From building end-to-end to extending your team, we structure work around your needs.",
}

export default function PackagesPage() {
  return (
    <>
      <PageHero
        label="Engagements"
        title="Typical ways we work together."
        description="These are not rigid products. They are common patterns of engagement that help you orient yourself. Every engagement is shaped by your specific situation."
      />

      <Section>
        <SectionHeader
          title="Choose the engagement pattern that fits."
          description="Most work naturally aligns with one of these patterns. Some engagements evolve from one into another as needs become clearer."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <div
              key={model.title}
              className={`flex flex-col rounded-lg border border-border bg-card p-6 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {model.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {model.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {model.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Message */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Not sure which pattern fits?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            That is completely normal. Many conversations start without a clear
            scope. Describe your situation and we will help you figure out the
            right structure together.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Describe Your Situation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
