import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "symbol" = icon only (header), "full" = icon + wordmark image (footer/elsewhere) */
  variant?: "symbol" | "full";
  /** Override the link destination. Defaults to "/" */
  href?: string;
  /** Additional className on the wrapping link */
  className?: string;
  /** Size multiplier — controls both image dimensions and container */
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    symbol: { w: 56, h: 56 },
    full: { w: 200, h: 56 },
  },
  md: {
    symbol: { w: 80, h: 80 },
    full: { w: 260, h: 68 },
  },
  lg: {
    symbol: { w: 96, h: 96 },
    full: { w: 320, h: 80 },
  },
};

export function Logo({
  variant = "symbol",
  href = "/",
  className,
  size = "md",
}: LogoProps) {
  const dims = sizes[size][variant];

  return (
    <Link
      href={href}
      className={cn(
        "group inline-block leading-none transition-opacity hover:opacity-90",
        className,
      )}
    >
      {variant === "symbol" ? (
        <Image
          src="/gth-logo.png"
          alt="GEOFINDA Tech Hub"
          width={dims.w}
          height={dims.h}
          className="block rounded-lg transition-transform duration-300 group-hover:scale-105"
          priority
        />
      ) : (
        <Image
          src="/GTH-LOGO.png"
          alt="GEOFINDA Tech Hub"
          width={dims.w}
          height={dims.h}
          className="block rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
          priority
        />
      )}
    </Link>
  );
}
