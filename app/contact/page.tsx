import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero, Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/data";
import { ObfuscatedLink } from "@/components/obfuscated-link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata.contact;

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
            <h3 className="text-xl font-semibold text-foreground">
              What to expect
            </h3>
            <div className="mt-6 flex flex-col gap-5">
              <div className="rounded-2xl bg-gradient-to-br from-muted to-muted/50 p-6 transition-all duration-200 hover:shadow-sm">
                <h4 className="text-base font-medium text-foreground">
                  No obligation
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  An initial conversation is always free and without commitment.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-muted to-muted/50 p-6 transition-all duration-200 hover:shadow-sm">
                <h4 className="text-base font-medium text-foreground">
                  Quick response
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  We typically respond within one to two business days.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-muted to-muted/50 p-6 transition-all duration-200 hover:shadow-sm">
                <h4 className="text-base font-medium text-foreground">
                  Your words, not ours
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Use the form to describe your situation however feels natural.
                  There is no template to follow.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-base text-muted-foreground">
                Prefer to reach us directly?
              </p>
              <div className="mt-3 flex flex-col gap-3">
                <ObfuscatedLink
                  encoded={siteConfig.contact.email}
                  type="mailto"
                  icon={<Mail className="h-5 w-5" />}
                  className="inline-flex items-center gap-2 text-base font-medium text-brand-blue transition-colors hover:text-brand-blue-deep"
                />
                <ObfuscatedLink
                  encoded={siteConfig.contact.phone}
                  type="tel"
                  icon={<Phone className="h-5 w-5" />}
                  className="inline-flex items-center gap-2 text-base font-medium text-brand-blue transition-colors hover:text-brand-blue-deep"
                />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
