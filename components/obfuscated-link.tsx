"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Encodes a string into a char-code array at build time.
 * Call this in data files or server components to prepare values.
 */
export function encode(value: string): number[] {
  return Array.from(value).map((c) => c.charCodeAt(0) + 3);
}

/** Decodes a char-code array back to a string (client-side only). */
function decode(codes: number[]): string {
  return codes.map((c) => String.fromCharCode(c - 3)).join("");
}

interface ObfuscatedLinkProps {
  /** Encoded char-code array (use `encode()` to generate). */
  encoded: number[];
  /** "mailto" | "tel" | "url" — determines the href prefix. */
  type: "mailto" | "tel" | "url";
  /** Optional icon rendered before the text. */
  icon?: ReactNode;
  /** Optional override for displayed text (e.g. domain without https://). */
  displayText?: string;
  className?: string;
}

/**
 * Renders a contact link that is invisible to HTML scrapers.
 * The actual value is decoded only in the browser via useEffect.
 */
export function ObfuscatedLink({
  encoded,
  type,
  icon,
  displayText,
  className,
}: ObfuscatedLinkProps) {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(decode(encoded));
  }, [encoded]);

  if (!value) {
    // Server render / initial hydration — no plaintext in HTML
    return (
      <span className={className}>
        {icon}
        <span className="opacity-0">Loading…</span>
      </span>
    );
  }

  const href =
    type === "mailto"
      ? `mailto:${value}`
      : type === "tel"
        ? `tel:${value}`
        : value;

  const linkProps =
    type === "url"
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

  return (
    <a href={href} className={className} {...linkProps}>
      {icon}
      {displayText ?? value}
    </a>
  );
}
