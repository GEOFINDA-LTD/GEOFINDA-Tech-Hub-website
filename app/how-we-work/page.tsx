import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero, Section, SectionHeader } from "@/components/section"
import { processSteps, values } from "@/lib/data"

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our process is built on clarity, collaboration, and honest communication. Learn how we approach every engagement.",
}

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="Built on clarity, collaboration, and honest communication."
        description="We do not follow a rigid methodology. We follow principles that consistently lead to better outcomes, adapted to the realities of each engagement."
      />

      {/* Process Steps */}
      <Section>
        <SectionHeader
          label="Our Process"
          title="Four phases, consistently applied."
          description="Every engagement follows these phases. The depth and duration of each varies based on the nature of the work."
        />

        <div className="mt-14 flex flex-col gap-0">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-4 pt-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-muted">
        <SectionHeader
          label="Our Principles"
          title="What we believe drives better outcomes."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Communication */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            label="Communication"
            title="Transparency is not optional."
            description="You will always know where things stand. We share progress, surface risks early, and make sure you have the information you need to make good decisions."
            className="mx-auto max-w-2xl text-center"
          />
          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
            {[
              {
                title: "Regular Updates",
                text: "Consistent, structured communication at a cadence that works for the engagement.",
              },
              {
                title: "Early Warnings",
                text: "When something is not going as planned, you hear about it early with options.",
              },
              {
                title: "Clear Documentation",
                text: "Decisions, rationale, and progress are documented and accessible.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Let us talk about your situation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
