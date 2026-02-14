import React from "react";
import type { Metadata } from "next";
import { Layers, Monitor, Compass, Shield, Users, Check } from "lucide-react";
import { PageHero, Section } from "@/components/section";
import { capabilities } from "@/lib/data";
import { CTASection } from "@/components/home/cta-section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata.services;

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="h-8 w-8" />,
  Monitor: <Monitor className="h-8 w-8" />,
  Compass: <Compass className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Capabilities that cover the full technology lifecycle."
        description="We work across five interconnected areas. Most engagements draw from more than one, tailored to the specifics of your situation."
      />

      <Section>
        <div className="flex flex-col gap-28">
          {capabilities.map((capability, index) => (
            <div
              key={capability.slug}
              id={capability.slug}
              className="scroll-mt-28"
            >
              <div
                className={`flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-blue-deep/5 text-brand-blue">
                    {iconMap[capability.icon]}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {capability.title}
                  </h2>
                  <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                </div>

                {/* Details card */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/5 lg:max-w-lg">
                  <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground">
                    What this includes
                  </h3>
                  <ul className="mt-6 flex flex-col gap-4">
                    {capability.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                        <span className="text-base leading-relaxed text-card-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < capabilities.length - 1 && (
                <div className="mt-28 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
