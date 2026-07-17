import type { CtaLink } from "./common";

export type ResearchHighlight = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: CtaLink;
};

export const researchHighlights: ResearchHighlight[] = [
  {
    id: "ai-iot-sustainability",
    title: "AI & IoT for Sustainability",
    description:
      "Smart sensing, edge AI, and decision systems for waste, air quality, and water monitoring.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    link: { label: "Learn more", href: "/publications" },
  },
  {
    id: "materials-built-environment",
    title: "Materials & Built Environment",
    description:
      "Self-healing concretes, acoustics, and resilient, low-carbon infrastructure systems.",
    image: "/images/noise-conference.jpg",
    link: { label: "Learn more", href: "/publications" },
  },
  {
    id: "health-environment",
    title: "Health & Environment",
    description:
      "Microplastics, noise & mental health, and exposure science for community outcomes.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    link: { label: "Learn more", href: "/publications" },
  },
];
