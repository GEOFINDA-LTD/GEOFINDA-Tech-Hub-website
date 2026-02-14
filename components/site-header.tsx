"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-background/95 backdrop-blur-sm",
      )}
    >
      {/* Gradient accent line */}
      <div className="h-[2px] w-full gradient-brand" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Logo variant="symbol" size="md" />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-brand-blue"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute inset-x-1 -bottom-[1px] h-0.5 rounded-full gradient-blue" />
                )}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Button variant="gradient" size="sm" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-8 py-5">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-primary/5 text-brand-blue"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="gradient" className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
