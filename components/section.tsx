import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-36", className)}>
      <div className="mx-auto max-w-7xl px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {label && (
        <p className="mb-4 text-base font-semibold uppercase tracking-wider text-brand-blue">
          {label}
        </p>
      )}
      <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

/* ─── Decorative background shared by Hero & PageHero ───────── */
function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-brand-green/8 blur-[80px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}

/* ─── Dark‑surface CTA section background ───────────────────── */
export function DarkSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden gradient-dark py-24 md:py-36",
        className,
      )}
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-green/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-8">{children}</div>
    </section>
  );
}

interface PageHeroProps {
  title: string;
  description: string;
  label?: string;
}

export function PageHero({ title, description, label }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden gradient-hero pb-20 pt-20 md:pb-28 md:pt-28">
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-8">
        <div className="max-w-4xl">
          {label && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="text-base font-medium tracking-wide text-brand-blue-light">
                {label}
              </span>
            </div>
          )}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-8 text-pretty text-xl leading-relaxed text-white/70 md:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
