import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/lib/data";

export function ProcessPreview() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        label="How We Work"
        title="A clear, repeatable process."
        description="Every engagement follows a consistent approach, adapted to the specifics of your situation."
      />

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item, index) => (
          <div key={item.step} className="group relative">
            {/* Connecting line on desktop */}
            {index < processSteps.length - 1 && (
              <div className="absolute right-0 top-10 hidden h-[2px] w-8 translate-x-full lg:block">
                <div className="h-full w-full bg-gradient-to-r from-brand-blue/20 to-brand-green/20" />
              </div>
            )}

            <div className="relative">
              <span className="text-gradient-blue text-6xl font-bold opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <Button variant="link-brand" asChild>
          <Link href="/how-we-work">
            See how we work in detail
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
