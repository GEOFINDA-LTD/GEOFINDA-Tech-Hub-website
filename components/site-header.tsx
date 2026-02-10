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
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative">
            <Image
              src="/images/gth-logo.png"
              alt="GEOFINDA Tech Hub logo"
              width={36}
              height={36}
              className="h-10 w-10"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-foreground">
              GEOFINDA
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-primary">
              TECH HUB
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all relative pb-1",
                  pathname === item.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary"
                    : "text-foreground/70 hover:text-foreground"
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
