import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"

export function CTASection() {
  return (
    <Section className="bg-[hsl(193,13%,21%)]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-[hsl(0,0%,100%)] md:text-4xl">
          Every situation is different. Tell us about yours.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-[hsl(0,0%,100%)]/80">
          Whether you have a clear brief or just a rough idea, we are happy to
          listen and help you figure out the best way forward.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
