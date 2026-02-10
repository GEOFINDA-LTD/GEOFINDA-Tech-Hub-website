import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { processSteps } from "@/lib/data"

export function ProcessPreview() {
  return (
    <Section className="bg-muted">
      <SectionHeader
        label="How We Work"
        title="A clear, repeatable process."
        description="Every engagement follows a consistent approach, adapted to the specifics of your situation."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item) => (
          <div key={item.step} className="relative">
            <span className="text-4xl font-bold text-primary/15">
              {item.step}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/how-we-work"
          className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          See how we work in detail
          <ArrowRight className="ml-1 h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  )
}
