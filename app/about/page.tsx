import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero, Section, SectionHeader } from "@/components/section"
import { values } from "@/lib/data"

export const metadata: Metadata = {
  title: "About",
  description:
    "GEOFINDA exists to build, advise, support, and extend technology capabilities with clarity, care, and craftsmanship.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Technology partnership grounded in purpose."
        description="GEOFINDA exists to help people and organizations move forward with technology. We combine deep technical capability with a commitment to clarity, honesty, and long-term thinking."
      />

      {/* Purpose */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Our Purpose"
            title="We believe technology should serve people, not the other way around."
          />
          <div className="mt-8 flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Too often, technology becomes a source of friction rather than
              progress. Systems become brittle. Decisions are made without
              enough context. Teams are stretched thin trying to keep up with
              change.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We started GEOFINDA because we saw an opportunity to do things
              differently. To be a technology partner that listens before
              building, that values clarity over complexity, and that stays
              involved long enough to see real outcomes.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We are not trying to be the biggest technology company. We are
              trying to be the most useful one for the people we work with.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted">
        <SectionHeader
          label="Our Values"
          title="What guides how we work."
          description="These are not aspirational statements. They are the principles we hold ourselves to every day."
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

      {/* Approach */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Our Approach"
            title="Deliberate, not rigid."
          />
          <div className="mt-8 flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              We do not force every engagement into a template. We assess,
              adapt, and apply the right approach for the situation. Sometimes
              that means a structured project with clear milestones. Sometimes
              it means embedding with your team and iterating together.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              What stays constant is our commitment to quality, transparency,
              and outcomes that matter. We build technology that works well, not
              just technology that works.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/how-we-work"
              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              See how we work
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Explore our capabilities
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[hsl(193,13%,21%)]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[hsl(0,0%,100%)] md:text-4xl">
            Interested in working together?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[hsl(0,0%,100%)]/80">
            We would love to hear about what you are working on and how we
            might be able to help.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
