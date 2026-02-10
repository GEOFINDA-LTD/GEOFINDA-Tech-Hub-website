"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navigationItems } from "@/lib/data"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/gth-logo.png"
            alt="GEOFINDA Tech Hub logo"
            width={36}
            height={36}
            className="h-9 w-9"
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

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-4">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
