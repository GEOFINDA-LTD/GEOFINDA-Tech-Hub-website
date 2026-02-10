import { Hero } from "@/components/home/hero"
import { CapabilitiesPreview } from "@/components/home/capabilities-preview"
import { ProcessPreview } from "@/components/home/process-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesPreview />
      <ProcessPreview />
      <CTASection />
    </>
  )
}
