import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { PageHero, Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your situation. Whether you have a clear brief or just a rough idea, we are happy to listen.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Tell us about your situation."
        description="Whether you have a detailed brief or just an early idea, we are happy to listen. Describe what you are working on in your own words and we will take it from there."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Sidebar info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-foreground">
              What to expect
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="text-sm font-medium text-foreground">
                  No obligation
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  An initial conversation is always free and without commitment.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="text-sm font-medium text-foreground">
                  Quick response
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  We typically respond within one to two business days.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="text-sm font-medium text-foreground">
                  Your words, not ours
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Use the form to describe your situation however feels
                  natural. There is no template to follow.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Prefer email?
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
