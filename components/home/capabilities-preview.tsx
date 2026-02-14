import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Monitor,
  Compass,
  Shield,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { capabilities } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="h-7 w-7" />,
  Monitor: <Monitor className="h-7 w-7" />,
  Compass: <Compass className="h-7 w-7" />,
  Shield: <Shield className="h-7 w-7" />,
  Users: <Users className="h-7 w-7" />,
};

const gradientAccents = [
  "from-brand-blue-light/20 to-brand-blue/10",
  "from-brand-green-light/20 to-brand-green/10",
  "from-brand-blue/20 to-brand-blue-deep/10",
  "from-brand-green/20 to-brand-green-deep/10",
  "from-brand-blue-light/20 to-brand-green-light/10",
];

export function CapabilitiesPreview() {
  return (
    <Section>
      <SectionHeader
        label="What We Do"
        title="Five capability areas. One technology partner."
        description="We work across the full spectrum of technology needs. From building new systems to supporting existing ones, we bring consistency and depth."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => (
          <Link
            key={capability.slug}
            href={`/services#${capability.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 hover:-translate-y-1"
          >
            {/* Gradient top accent */}
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradientAccents[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue-deep/5 text-brand-blue transition-all duration-300 group-hover:from-brand-blue/20 group-hover:to-brand-blue-deep/10">
              {iconMap[capability.icon]}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-card-foreground">
              {capability.title}
            </h3>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
              {capability.headline}
            </p>
            <div className="mt-5 flex items-center text-base font-medium text-brand-blue opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
              Learn more
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
