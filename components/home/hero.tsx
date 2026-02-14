import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero py-36 md:py-48">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-light/5 blur-[100px]" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-8">
        <div className="max-w-4xl">
          {/* Brand badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full gradient-green animate-pulse" />
            <span className="text-base font-medium tracking-wide text-brand-blue-light">
              {siteConfig.name} {siteConfig.tagline}
            </span>
          </div>

          <h1 className="text-balance text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
            Technology that works{" "}
            <span className="text-gradient-brand">for you</span>, not around
            you.
          </h1>

          <p className="mt-8 max-w-3xl text-pretty text-xl leading-relaxed text-white/70 md:text-2xl">
            {siteConfig.description}
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline-dark" size="lg" asChild>
              <Link href="/services">Explore What We Do</Link>
            </Button>
          </div>
        </div>

        {/* Stats line */}
        <div className="mt-16 flex flex-wrap gap-8 text-sm">
          <div>
            <div className="font-bold text-lg text-primary">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="font-bold text-lg text-secondary">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="font-bold text-lg text-accent">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
