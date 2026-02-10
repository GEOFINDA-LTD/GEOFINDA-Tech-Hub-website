import Link from "next/link"
import Image from "next/image"
import { siteConfig, navigationItems } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/gth-logo.png"
                alt="GEOFINDA Tech Hub logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-wide text-foreground">
                  GEOFINDA
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
                  TECH HUB
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building, advising, supporting, and extending technology
              capabilities with clarity and care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {siteConfig.contact.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
