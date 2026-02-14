// ─── Mock Data Layer ───────────────────────────────────────────────
// All content is centralized here for easy future API integration.
// Replace these exports with fetch calls when APIs are ready.

export interface Capability {
  slug: string
  title: string
  headline: string
  description: string
  details: string[]
  icon: string // lucide icon name
}

export interface EngagementModel {
  title: string
  description: string
  details: string[]
}

export interface DeliveryModel {
  title: string
  description: string
  icon: string
}

export interface Value {
  title: string
  description: string
}

export const siteConfig = {
  name: "GEOFINDA",
  tagline: "Tech Hub",
  description:
    "We build, advise, support, and extend technology capabilities. Whatever your situation, we can help you move forward with clarity and confidence.",
  contact: {
    // Encoded to prevent bot scraping — decoded client-side by ObfuscatedLink
    email: [119,104,102,107,107,120,101,67,106,104,114,105,108,113,103,100,49,102,114,112],
    phone: [51,58,60,54,55,52,53,53,60,54],
  },
}

export const capabilities: Capability[] = [
  {
    slug: "systems-custom-software",
    title: "Systems & Custom Software",
    headline: "Reliable systems designed around how you actually work.",
    description:
      "We design and build systems that manage data, automate workflows, integrate tools, and support operations reliably. From internal platforms to complex integrations, we create software that fits your processes rather than forcing you to adapt.",
    details: [
      "Data management and workflow automation",
      "System integration and API development",
      "Internal tools and operational platforms",
      "Legacy system modernization",
    ],
    icon: "Layers",
  },
  {
    slug: "web-digital-products",
    title: "Web & Digital Products",
    headline: "Digital experiences that are clear, fast, and built to last.",
    description:
      "We build websites, dashboards, portals, and interfaces that are clear, fast, accessible, and maintainable. Every product is designed with users in mind and engineered to evolve alongside your needs.",
    details: [
      "Websites and web applications",
      "Dashboards and analytics portals",
      "Customer-facing digital products",
      "Accessible and responsive interfaces",
    ],
    icon: "Monitor",
  },
  {
    slug: "consulting-advisory",
    title: "Technology Consulting & Advisory",
    headline: "Better technical decisions, before and during execution.",
    description:
      "We help people make better technical decisions through reviews, audits, planning, and roadmaps. Whether you need guidance before building or want a second perspective on work in progress, we bring clarity to complex choices.",
    details: [
      "Technical reviews and architecture audits",
      "Technology roadmapping and planning",
      "Vendor and tool evaluation",
      "Team structure and process advisory",
    ],
    icon: "Compass",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance, Support & Optimization",
    headline: "Keeping your systems healthy, secure, and evolving.",
    description:
      "Technology needs attention over time. We keep systems healthy, secure, performant, and evolving so you can focus on what matters most. From routine maintenance to performance optimization, we ensure reliability.",
    details: [
      "Ongoing system monitoring and maintenance",
      "Security updates and vulnerability management",
      "Performance optimization and scaling",
      "Incremental improvements and feature additions",
    ],
    icon: "Shield",
  },
  {
    slug: "engineering-pods",
    title: "Engineering Capacity (Pods)",
    headline: "Dedicated engineers who integrate into your workflow.",
    description:
      "We provide dedicated engineers or small teams that integrate into existing workflows and deliver continuously. Our pods work as an extension of your team, bringing consistent quality and deep context to ongoing work.",
    details: [
      "Dedicated individual engineers or small teams",
      "Seamless integration with your existing workflows",
      "Continuous, context-rich delivery",
      "Flexible scaling up or down as needed",
    ],
    icon: "Users",
  },
]

export const engagementModels: EngagementModel[] = [
  {
    title: "Build End-to-End",
    description:
      "We take responsibility for delivering a complete solution from concept through to launch, managing the full lifecycle of design, development, and deployment.",
    details: [
      "Full project ownership from start to finish",
      "Requirements gathering through delivery",
      "Structured milestones and clear communication",
    ],
  },
  {
    title: "Advise & Guide",
    description:
      "We work alongside your team to provide strategic guidance, technical leadership, and decision-making support before or during execution.",
    details: [
      "Strategic and technical advisory",
      "Architecture and technology decisions",
      "Risk assessment and mitigation planning",
    ],
  },
  {
    title: "Improve What Exists",
    description:
      "We assess what you already have, identify opportunities for improvement, and make meaningful enhancements to existing systems and products.",
    details: [
      "System audits and gap analysis",
      "Performance and security improvements",
      "Codebase modernization and refactoring",
    ],
  },
  {
    title: "Support Over Time",
    description:
      "We provide ongoing technical support, maintenance, and incremental improvements to keep your systems running smoothly and evolving with your needs.",
    details: [
      "Proactive monitoring and maintenance",
      "Incident response and resolution",
      "Continuous improvement and optimization",
    ],
  },
  {
    title: "Extend Your Team",
    description:
      "We embed dedicated engineers into your workflows who contribute continuously, building deep context and delivering as part of your organization.",
    details: [
      "Embedded engineering capacity",
      "Full integration with your processes and tools",
      "Long-term commitment and knowledge retention",
    ],
  },
]

export const deliveryModels: DeliveryModel[] = [
  {
    title: "Fixed-Scope Projects",
    description:
      "Clearly defined deliverables, timelines, and outcomes. Best suited for well-understood problems where scope can be agreed upfront.",
    icon: "Target",
  },
  {
    title: "Time-Bound Engagements",
    description:
      "A focused period of work with agreed objectives but flexibility in how outcomes are reached. Ideal for exploratory or iterative work.",
    icon: "Clock",
  },
  {
    title: "Ongoing Retainers",
    description:
      "A continuous relationship where we provide regular support, maintenance, or development capacity over an extended period.",
    icon: "RefreshCw",
  },
  {
    title: "Dedicated Engineering Pods",
    description:
      "A team of engineers fully embedded in your organization, working as an extension of your own team with shared tools and processes.",
    icon: "Users",
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start by listening. Understanding your situation, goals, constraints, and what success looks like for you.",
  },
  {
    step: "02",
    title: "Shape",
    description:
      "We translate understanding into a clear plan. Defining scope, approach, technology choices, and how we will work together.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We execute with discipline and transparency. Regular communication, iterative delivery, and consistent quality throughout.",
  },
  {
    step: "04",
    title: "Evolve",
    description:
      "Technology is never finished. We help you maintain, optimize, and extend what has been built as your needs grow.",
  },
]

export const values: Value[] = [
  {
    title: "Clarity Over Complexity",
    description:
      "We believe the best technical solutions are ones that can be clearly explained and easily understood. We avoid unnecessary complexity.",
  },
  {
    title: "Partnership, Not Transactions",
    description:
      "We build relationships grounded in trust and shared goals. We care about your outcomes as much as the technology itself.",
  },
  {
    title: "Craft and Discipline",
    description:
      "We take pride in well-engineered work. Clean code, thoughtful architecture, and reliable systems are the standard, not the exception.",
  },
  {
    title: "Honest Communication",
    description:
      "We tell you what you need to hear, not what you want to hear. Transparency builds trust and leads to better decisions.",
  },
]

export const navigationItems = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Packages", href: "/packages" },
  { label: "Delivery", href: "/delivery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]
