export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  techStack: string[];
  category: 'AI' | 'SaaS' | 'Other';
  hasThumb: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "1dash-one-pane-for-everything-that-runs",
    name: "1Dash",
    tagline: "One pane for everything that runs",
    description: "Unified observability dashboard consolidating logs, metrics, and traces from distributed systems into a single real-time view.",
    url: "https://onedash-peach.vercel.app/",
    techStack: ["React", "TypeScript", "Tailwind", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: true
  },
  {
    slug: "agent-loop-ai-real-estate-platform",
    name: "Agent Loop",
    tagline: "AI Real Estate Platform",
    description: "End-to-end AI-powered platform for real estate professionals — automated listings, lead qualification, and market intelligence.",
    url: "https://propagent-web-plum.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "Supabase", "Vercel"],
    category: "AI",
    hasThumb: true,
    featured: true
  },
  {
    slug: "agentcy-control-mission-control",
    name: "Agentcy Control",
    tagline: "Mission Control",
    description: "Internal orchestration dashboard for managing AI agents, workflows, and deployments across the Agentcy platform.",
    url: "https://mission-control-juq3zsee0-michael-s-projects-1c4584cf.vercel.app/#capabilities",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: true
  },
  {
    slug: "art-of-service-seven-star-hospitality-excellence",
    name: "Art of Service",
    tagline: "Seven-Star Hospitality Excellence",
    description: "Digital training and certification platform for luxury hospitality staff — interactive modules, assessments, and credentialing.",
    url: "https://windsurf-project-flax-zeta.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "Vercel"],
    category: "Other",
    hasThumb: true,
    featured: false
  },
  {
    slug: "construct-wise-ai-powered-change-order-management",
    name: "Construct-wise",
    tagline: "AI-Powered Change Order Management",
    description: "Automates construction change order workflows — AI extracts, categorizes, and routes changes from documents and communications.",
    url: "https://windsurf-project-flax-zeta.vercel.app/#how-it-works",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    category: "AI",
    hasThumb: true,
    featured: false
  },
  {
    slug: "fillq-no-show-prevention",
    name: "FillQ",
    tagline: "No-Show Prevention",
    description: "Automated appointment confirmation and reminder system that reduces no-shows for service businesses via SMS, WhatsApp, and email.",
    url: "https://filliq.vercel.app/landing",
    techStack: ["Next.js", "React", "Tailwind", "Twilio", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: false
  },
  {
    slug: "knowledgebase",
    name: "KnowledgeBase",
    tagline: "AI Knowledge Assistant",
    description: "Intelligent document search and Q&A — upload PDFs, docs, and get instant cited answers powered by RAG and vector search.",
    url: "https://agentcy-assistant.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "Supabase", "Vercel"],
    category: "AI",
    hasThumb: true,
    featured: false
  },
  {
    slug: "lease-sentinel-property-management-for-south-africa",
    name: "Lease Sentinel",
    tagline: "Property Management for South Africa",
    description: "Compliance-first property management platform for SA landlords — lease generation, rent collection, maintenance, and regulatory reporting.",
    url: "https://lease-sentinel-liard.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: false
  },
  {
    slug: "mindeeze-practice-management-for-therapists",
    name: "MindEeze",
    tagline: "Practice Management for Therapists",
    description: "All-in-one practice management for mental health professionals — scheduling, notes, billing, telehealth, and client portal.",
    url: "https://mindeeze-app.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "PostgreSQL", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: false
  },
  {
    slug: "my-agentcy-ai-workforce-on-demand",
    name: "My-Agentcy",
    tagline: "AI Workforce on Demand",
    description: "Marketplace for deploying specialized AI agents — hire pre-built agents for sales, support, research, and automation tasks.",
    url: "https://frontend-five-peach-31.vercel.app/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
    category: "AI",
    hasThumb: true,
    featured: false
  },
  {
    slug: "reelbook-fishing-charter-management",
    name: "ReelBook",
    tagline: "Fishing Charter Management",
    description: "Booking and operations platform for fishing charters — calendar, crew management, customer CRM, and payment processing.",
    url: "https://fishing-charter-web.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "Stripe", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: false
  },
  {
    slug: "reviewradar-ai-review-response-for-sa-businesses",
    name: "ReviewRadar",
    tagline: "AI Review Response for SA Businesses",
    description: "Monitors Google, Facebook, and HelloPeter reviews — AI drafts contextual responses in brand voice for one-click publishing.",
    url: "https://review-radar-ten.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "OpenAI", "Vercel"],
    category: "AI",
    hasThumb: true,
    featured: false
  },
  {
    slug: "seasoul-wellness-yacht-crew-mental-health-therapy",
    name: "SeaSoul Wellness",
    tagline: "Yacht Crew Mental Health & Therapy",
    description: "Confidential mental health platform for superyacht crew — teletherapy, wellness resources, and peer support tailored to maritime life.",
    url: "https://agent2bed8b6e-8e18-4960-a50d-17a701be9d94-ekdqpa4ma.vercel.app/#meditation",
    techStack: ["Next.js", "React", "Tailwind", "WebRTC", "Vercel"],
    category: "Other",
    hasThumb: true,
    featured: false
  },
  {
    slug: "tender-ai-win-government-tenders-with-ai",
    name: "Tender AI",
    tagline: "Win Government Tenders with AI",
    description: "AI-powered tender discovery and proposal writing — scrapes SA government portals, matches opportunities, and generates compliant responses.",
    url: "https://tender-ai-sa.vercel.app/en",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "OpenAI", "Vercel"],
    category: "AI",
    hasThumb: true,
    featured: false
  },
  {
    slug: "the-holistic-hustle-co-intentional-community-in-ballito",
    name: "The Holistic Hustle & Co.",
    tagline: "Intentional Community in Ballito",
    description: "Membership platform for a wellness-focused co-living community — events, resource sharing, and community governance tools.",
    url: "https://holistic-hustle.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "Supabase", "Vercel"],
    category: "Other",
    hasThumb: true,
    featured: false
  },
  {
    slug: "thrift-list",
    name: "Thrift List",
    tagline: "Curated Second-Hand Fashion",
    description: "Curated marketplace for pre-loved fashion in South Africa — seller tools, buyer discovery, and sustainable commerce.",
    url: "https://sa-clothing-poster.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind", "Supabase", "Vercel"],
    category: "Other",
    hasThumb: true,
    featured: false
  },
  {
    slug: "whatsapp-crm-manage-your-customer-relationships",
    name: "WhatsApp CRM",
    tagline: "Manage Customer Relationships on WhatsApp",
    description: "WhatsApp Business API wrapper — shared inbox, automation flows, broadcast campaigns, and CRM integration for SA businesses.",
    url: "https://whatsapp-crm-sa.vercel.app/sign-in",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "WhatsApp API", "Clerk", "Vercel"],
    category: "SaaS",
    hasThumb: true,
    featured: false
  }
];