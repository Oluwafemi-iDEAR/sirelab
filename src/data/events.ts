import type { CtaLink, ResourceLink } from "./common";

export type SireEvent = {
  id: string;
  status: "upcoming" | "past";
  title: string;
  image?: string;
  date?: string; // ISO date, used for sorting
  dateLabel: string;
  description?: string;
  tags?: string[];
  resourceLinks?: ResourceLink[];
  cta?: CtaLink;
};

export const events: SireEvent[] = [
  // --- Upcoming ---
  {
    id: "noise-mental-health-2025",
    status: "upcoming",
    title: "Noise & Mental Health Symposium",
    date: "2025-10-12",
    dateLabel: "Oct 12, 2025",
    description:
      "Cross-disciplinary workshop on measurement, mitigation, and policy.",
    tags: ["Hybrid", "Call for Posters"],
    cta: { label: "Register", href: "#" },
  },
  {
    id: "ai-environmental-sensing-2025",
    status: "upcoming",
    title: "AI for Environmental Sensing",
    date: "2025-11-05",
    dateLabel: "Nov 5, 2025",
    description:
      "Hands-on workshop on IoT + ML pipelines for field deployments.",
    tags: ["Workshop", "Beginner–Intermediate"],
    cta: { label: "Details", href: "#" },
  },
  {
    id: "sustainable-materials-forum-2026",
    status: "upcoming",
    title: "Sustainable Materials Forum",
    date: "2026-01-22",
    dateLabel: "Jan 22, 2026",
    description:
      "Lightning talks and demos spanning bio-concretes and circularity.",
    tags: ["Forum", "On Campus"],
    cta: { label: "Program", href: "#" },
  },

  // --- Past ---
  {
    id: "ecp-home-based-2021",
    status: "past",
    title:
      "Experiment Centric Pedagogy & Home-based Hands-on Learning in STEM",
    image:
      "https://static.wixstatic.com/media/cb9e31_1b49a4c80e944967a3d886bfe7c59d7d~mv2.png/v1/fill/w_516,h_288,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cb9e31_1b49a4c80e944967a3d886bfe7c59d7d~mv2.png",
    date: "2021-07-01",
    dateLabel: "Summer 2021 — Virtual workshop",
    resourceLinks: [
      {
        label: "Post-event Survey",
        url: "https://www.surveymonkey.com/r/9M6DVJ3",
      },
      {
        label: "Flyer (PDF)",
        url: "https://4aa71dbe-f4e5-4e3f-8a24-f1016e4360c6.filesusr.com/ugd/7104c9_5e5490d42aa949b5ab9b8387ffdf32a5.pdf",
      },
    ],
  },
  {
    id: "ai-environmental-sensing-2023",
    status: "past",
    title: "AI for Environmental Sensing — Mini-Symposium",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    date: "2023-06-01",
    dateLabel: "2023 — Panel + lightning talks",
    resourceLinks: [
      { label: "Agenda (PDF)", url: "#" },
      { label: "Slides", url: "#" },
    ],
  },
  {
    id: "data-driven-infrastructure-2019",
    status: "past",
    title: "Workshop on Data-Driven Decision-Making in Infrastructure",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    date: "2019-06-01",
    dateLabel: "2019 — Hands-on tutorials",
    resourceLinks: [
      { label: "Materials", url: "#" },
      { label: "Photos", url: "#" },
    ],
  },
];
