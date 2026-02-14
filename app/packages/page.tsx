import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { engagementModels } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata.packages;

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

        {/* Featured card – first engagement model */}
        {engagementModels.length > 0 && (
          <div className="mt-16 group rounded-2xl border border-border bg-card p-10 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
              <div className="flex-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-blue-deep/10 text-xl font-bold text-brand-blue">
                  01
                </div>
                <h3 className="mt-6 text-2xl font-bold text-card-foreground md:text-3xl">
                  {engagementModels[0].title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {engagementModels[0].description}
                </p>
              </div>
              <ul className="flex flex-col gap-4 lg:min-w-[340px] lg:pt-2">
                {engagementModels[0].details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                      <Check className="h-3.5 w-3.5 text-brand-green" />
                    </div>
                    <span className="text-base leading-relaxed text-muted-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Remaining engagement models – 2×2 grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {engagementModels.slice(1).map((model, i) => (
            <div
              key={model.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/5 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue-deep/5 text-lg font-bold text-brand-blue">
                {String(i + 2).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-card-foreground">
                {model.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                {model.description}
              </p>
              <ul className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
                {model.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                      <Check className="h-3.5 w-3.5 text-brand-green" />
                    </div>
                    <span className="text-base leading-relaxed text-muted-foreground">
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
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Not sure which pattern fits?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            That is completely normal. Many conversations start without a clear
            scope. Describe your situation and we will help you figure out the
            right structure together.
          </p>
          <div className="mt-10">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Describe Your Situation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
