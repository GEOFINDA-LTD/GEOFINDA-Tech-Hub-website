import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { processSteps, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our process is built on clarity, collaboration, and honest communication. Learn how we approach every engagement.",
};

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

        <div className="mt-16 flex flex-col gap-0">
          {processSteps.map((item, index) => (
            <div
              key={item.step}
              className="group relative flex gap-10 pb-14 last:pb-0"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-bold text-white gradient-blue shadow-lg shadow-brand-blue/20">
                  {item.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-brand-blue/30 to-brand-green/20" />
                )}
              </div>

              {/* Content */}
              <div className="pb-4 pt-2">
                <h3 className="text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-muted/50">
        <SectionHeader
          label="Our Principles"
          title="What we believe drives better outcomes."
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

      {/* Communication */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            label="Communication"
            title="Transparency is not optional."
            description="You will always know where things stand. We share progress, surface risks early, and make sure you have the information you need to make good decisions."
            className="mx-auto max-w-2xl text-center"
          />
          <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
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
                <h4 className="text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Let us talk about your situation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
