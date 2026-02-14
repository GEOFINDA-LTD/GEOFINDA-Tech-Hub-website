import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/data"

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-28 md:py-40">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute left-20 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl -z-10"></div>

      <div className="relative z-10 max-w-4xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
          <Sparkles className="h-4 w-4" />
          <span>{siteConfig.name} • {siteConfig.tagline}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Technology that works for you
          </span>
          <span className="block text-foreground">, not around you.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/70 md:text-xl">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-foreground/10 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            Explore Our Services
          </Link>
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
    </Section>
  )
}
