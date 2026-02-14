import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PageHero,
  Section,
  SectionHeader,
  DarkSection,
} from "@/components/section";
import { Button } from "@/components/ui/button";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "GEOFINDA exists to build, advise, support, and extend technology capabilities with clarity, care, and craftsmanship.",
};

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
          <div className="mt-10 flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Too often, technology becomes a source of friction rather than
              progress. Systems become brittle. Decisions are made without
              enough context. Teams are stretched thin trying to keep up with
              change.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We started GEOFINDA because we saw an opportunity to do things
              differently. To be a technology partner that listens before
              building, that values clarity over complexity, and that stays
              involved long enough to see real outcomes.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are not trying to be the biggest technology company. We are
              trying to be the most useful one for the people we work with.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted/50">
        <SectionHeader
          label="Our Values"
          title="What guides how we work."
          description="These are not aspirational statements. They are the principles we hold ourselves to every day."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/5 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-green/5 text-base font-bold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeader label="Our Approach" title="Deliberate, not rigid." />
          <div className="mt-10 flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We do not force every engagement into a template. We assess,
              adapt, and apply the right approach for the situation. Sometimes
              that means a structured project with clear milestones. Sometimes
              it means embedding with your team and iterating together.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What stays constant is our commitment to quality, transparency,
              and outcomes that matter. We build technology that works well, not
              just technology that works.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="link-brand" asChild>
              <Link href="/how-we-work">
                See how we work
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button variant="link-brand" asChild>
              <Link href="/services">
                Explore our capabilities
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <DarkSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Interested in working together?
          </h2>
          <p className="mt-6 text-pretty text-xl leading-relaxed text-white/70">
            We would love to hear about what you are working on and how we might
            be able to help.
          </p>
          <div className="mt-10">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </DarkSection>
    </>
  );
}
