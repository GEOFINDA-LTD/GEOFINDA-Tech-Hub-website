import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/data"

export function Hero() {
  return (
    <Section className="bg-[hsl(193,13%,21%)] py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
          {siteConfig.name} {siteConfig.tagline}
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-[hsl(0,0%,100%)] md:text-5xl lg:text-6xl">
          Technology that works for you, not around you.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[hsl(0,0%,100%)]/80 md:text-xl">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-[hsl(0,0%,100%)]/20 px-6 py-3 text-sm font-medium text-[hsl(0,0%,100%)] transition-colors hover:bg-[hsl(0,0%,100%)]/10"
          >
            Explore What We Do
          </Link>
        </div>
      </div>
    </Section>
  )
}
