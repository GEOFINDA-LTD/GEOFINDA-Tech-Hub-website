import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { processSteps } from "@/lib/data"

export function ProcessPreview() {
  return (
    <Section className="relative overflow-hidden py-24 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl -z-10"></div>

      <SectionHeader
        label="How We Work"
        title="A clear, repeatable process."
        description="Every engagement follows a consistent approach, adapted to the specifics of your situation."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item, index) => (
          <div key={item.step} className="group relative">
            {/* Step indicator */}
            <div className="relative mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-white font-bold text-lg shadow-lg shadow-primary/20">
                {item.step}
              </div>
              {index < 3 && (
                <div className="absolute top-6 left-14 hidden h-0.5 w-12 bg-gradient-to-r from-primary to-secondary lg:block"></div>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60 group-hover:text-foreground/70 transition-colors">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <Link
          href="/how-we-work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group"
        >
          See how we work in detail
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  )
}
