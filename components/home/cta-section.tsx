import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DarkSection } from "@/components/section";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <DarkSection>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
          Every situation is different.{" "}
          <span className="text-gradient-brand">Tell us about yours.</span>
        </h2>
        <p className="mt-6 text-pretty text-xl leading-relaxed text-white/70">
          Whether you have a clear brief or just a rough idea, we are happy to
          listen and help you figure out the best way forward.
        </p>
        <div className="mt-10">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </DarkSection>
  );
}
