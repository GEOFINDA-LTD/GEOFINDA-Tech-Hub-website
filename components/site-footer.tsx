import Link from "next/link"
import Image from "next/image"
import { siteConfig, navigationItems } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/30 bg-gradient-to-b from-background to-card/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/gth-logo.png"
                alt="GEOFINDA Tech Hub logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight text-foreground">
                  GEOFINDA
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-primary">
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Navigation
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/70 font-medium transition-all hover:text-primary hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">
              Get in Touch
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-medium text-foreground/70 transition-all hover:text-primary"
              >
                {siteConfig.contact.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center rounded-lg bg-gradient-to-r from-primary to-primary/80 px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
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
