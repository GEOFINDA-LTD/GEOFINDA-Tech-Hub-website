import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Clock, RefreshCw, Users } from "lucide-react";
import { PageHero, Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { deliveryModels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Delivery Models",
  description:
    "How we structure collaboration. From fixed-scope projects to dedicated engineering pods, we adapt delivery to the nature of the work.",
};

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-7 w-7" />,
  Clock: <Clock className="h-7 w-7" />,
  RefreshCw: <RefreshCw className="h-7 w-7" />,
  Users: <Users className="h-7 w-7" />,
};

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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {deliveryModels.map((model) => (
            <div
              key={model.title}
              className="group rounded-2xl border border-border bg-card p-10 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/5 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue-deep/5 text-brand-blue transition-all duration-300 group-hover:from-brand-blue/20 group-hover:to-brand-blue-deep/10">
                {iconMap[model.icon]}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-card-foreground">
                {model.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Relationship between capabilities and delivery */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="A Note on Structure"
            title="Capabilities and delivery models are independent choices."
            className="mx-auto max-w-3xl"
          />
          <div className="mt-10 flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A consulting engagement might be delivered as a fixed-scope
              project or as part of an ongoing retainer. A custom software build
              could be handled by a dedicated pod or through a time-bound
              engagement.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We help you find the right combination based on your goals,
              timeline, and how your team works. The important thing is that the
              structure serves the work, not the other way around.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="link-brand" asChild>
              <Link href="/contact">
                Let us help you find the right structure
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
