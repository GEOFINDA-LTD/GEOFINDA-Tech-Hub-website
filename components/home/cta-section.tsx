import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"

export function CTASection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-accent via-accent/95 to-accent/90 py-24 md:py-32">
      {/* Decorative gradient orbs */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl -z-10"></div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl md:text-5xl font-bold tracking-tight text-white">
          Every situation is different.
          <span className="block mt-2">Tell us about yours.</span>
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-white/80">
          Whether you have a clear brief or just a rough idea, we are happy to
          listen and help you figure out the best way forward.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-accent transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
