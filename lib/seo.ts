import type { Metadata } from "next";

// ─── Site URL ──────────────────────────────────────────────────────
export const SITE_URL = "https://techhub.geofinda.com";

// ─── Root Metadata ─────────────────────────────────────────────────
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GEOFINDA Tech Hub — Build, Advise, Support & Extend Technology",
    template: "%s | GEOFINDA Tech Hub",
  },
  description:
    "We build, advise, support, and extend technology capabilities. Custom software, web products, technology consulting, and dedicated engineering teams — delivered with clarity and care.",
  keywords: [
    "custom software development",
    "technology consulting",
    "web application development",
    "engineering teams",
    "software maintenance",
    "system integration",
    "GEOFINDA",
    "Tech Hub",
    "dedicated developers",
    "digital transformation",
  ],
  authors: [{ name: "GEOFINDA Tech Hub", url: SITE_URL }],
  creator: "GEOFINDA Tech Hub",
  publisher: "GEOFINDA Tech Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "GEOFINDA Tech Hub",
    title: "GEOFINDA Tech Hub — Build, Advise, Support & Extend Technology",
    description:
      "Custom software, web products, technology consulting, and dedicated engineering teams — delivered with clarity and care.",
    images: [
      {
        url: "/GTH-LOGO.png",
        width: 800,
        height: 210,
        alt: "GEOFINDA Tech Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEOFINDA Tech Hub — Build, Advise, Support & Extend Technology",
    description:
      "Custom software, web products, technology consulting, and dedicated engineering teams — delivered with clarity and care.",
    images: ["/GTH-LOGO.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GEOFINDA Tech Hub",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/GTH-LOGO.png`,
      },
      description:
        "We build, advise, support, and extend technology capabilities. Custom software, web products, technology consulting, and dedicated engineering teams.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GEOFINDA Tech Hub",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ─── Sitemap Route Definitions ─────────────────────────────────────
export const sitemapRoutes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/packages", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/delivery", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/how-we-work", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
];

// ─── Per-Page Metadata ─────────────────────────────────────────────
export const pageMetadata: Record<string, Metadata> = {
  about: {
    title: "About",
    description:
      "GEOFINDA Tech Hub builds, advises, supports, and extends technology capabilities with clarity, care, and craftsmanship.",
    keywords: [
      "about GEOFINDA",
      "technology company",
      "software craftsmanship",
      "tech consultancy values",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
      title: "About GEOFINDA Tech Hub",
      description:
        "We build, advise, support, and extend technology capabilities with clarity, care, and craftsmanship.",
      url: "/about",
    },
  },
  services: {
    title: "Services",
    description:
      "Explore our five core capability areas: custom software, web products, technology consulting, maintenance, and engineering capacity.",
    keywords: [
      "custom software",
      "web development",
      "technology consulting",
      "software maintenance",
      "engineering teams",
      "system integration",
    ],
    alternates: { canonical: "/services" },
    openGraph: {
      title: "Services — GEOFINDA Tech Hub",
      description:
        "Custom software, web products, technology consulting, maintenance, and dedicated engineering capacity.",
      url: "/services",
    },
  },
  packages: {
    title: "Packages",
    description:
      "Understand the typical ways we engage. From building end-to-end to extending your team, we structure work around your needs.",
    keywords: [
      "engagement models",
      "software packages",
      "project delivery",
      "team augmentation",
      "fixed-scope projects",
    ],
    alternates: { canonical: "/packages" },
    openGraph: {
      title: "Engagement Packages — GEOFINDA Tech Hub",
      description:
        "From building end-to-end to extending your team, we structure work around your needs.",
      url: "/packages",
    },
  },
  delivery: {
    title: "Delivery Models",
    description:
      "How we structure collaboration. From fixed-scope projects to dedicated engineering pods, we adapt delivery to the nature of the work.",
    keywords: [
      "delivery models",
      "agile delivery",
      "dedicated teams",
      "fixed-scope projects",
      "software project management",
    ],
    alternates: { canonical: "/delivery" },
    openGraph: {
      title: "Delivery Models — GEOFINDA Tech Hub",
      description:
        "From fixed-scope projects to dedicated engineering pods, we adapt delivery to the nature of the work.",
      url: "/delivery",
    },
  },
  "how-we-work": {
    title: "How We Work",
    description:
      "Our process is built on clarity, collaboration, and honest communication. Learn how we approach every engagement.",
    keywords: [
      "development process",
      "agile methodology",
      "collaboration",
      "project management",
      "transparent communication",
    ],
    alternates: { canonical: "/how-we-work" },
    openGraph: {
      title: "How We Work — GEOFINDA Tech Hub",
      description:
        "Built on clarity, collaboration, and honest communication. Learn how we approach every engagement.",
      url: "/how-we-work",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch with GEOFINDA Tech Hub. Whether you have a clear brief or just a rough idea, we are happy to listen.",
    keywords: [
      "contact GEOFINDA",
      "software consultation",
      "get in touch",
      "technology partner",
    ],
    alternates: { canonical: "/contact" },
    openGraph: {
      title: "Contact Us — GEOFINDA Tech Hub",
      description:
        "Tell us about your situation. Whether you have a clear brief or just a rough idea, we are happy to listen.",
      url: "/contact",
    },
  },
};
