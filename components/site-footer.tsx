import Link from "next/link";
import { siteConfig, navigationItems } from "@/lib/data";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-card to-muted/50">
      {/* Subtle decorative gradient */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-blue/3 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand — full logo with wordmark */}
          <div>
            <Logo variant="full" size="md" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              Building, advising, supporting, and extending technology
              capabilities with clarity and care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-6 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-muted-foreground transition-colors duration-200 hover:text-brand-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-base text-muted-foreground transition-colors duration-200 hover:text-brand-blue"
              >
                {siteConfig.contact.email}
              </a>
              <Button variant="gradient" size="sm" className="w-fit" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`}
          </p>
          {/* Gradient brand mark */}
          <div className="flex h-1 w-16 overflow-hidden rounded-full">
            <div className="w-1/2 gradient-blue" />
            <div className="w-1/2 gradient-green" />
          </div>
        </div>
      </div>
    </footer>
  );
}
