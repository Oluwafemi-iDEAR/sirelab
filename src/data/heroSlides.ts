import type { CtaLink } from "./common";

export type HeroSlide = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  ctaPrimary?: CtaLink;
  ctaSecondary?: CtaLink;
};

const SHARED_BODY =
  "We build solutions that advance sustainability, data-driven decision-making, and community impact through interdisciplinary research, teaching, and industry collaboration.";

const PRIMARY_CTA: CtaLink = { label: "Explore research", href: "#research-focus" };
const SECONDARY_CTA: CtaLink = {
  label: "Conferences & Workshops",
  href: "/conferences-workshops",
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-noise-2025",
    eyebrow: "SIRELAB Conference Engagement",
    title: "2025 Noise Conference (Vermont)",
    description: SHARED_BODY,
    image: "/images/noise-conference.jpg",
    imagePosition: "center",
    ctaPrimary: PRIMARY_CTA,
    ctaSecondary: SECONDARY_CTA,
  },
  {
    id: "hero-trb-2025",
    eyebrow: "SIRELAB Conference Engagement",
    title: "2025 TRB Conference (Washington DC)",
    description: SHARED_BODY,
    image: "/images/trb.jpg",
    imagePosition: "center",
    ctaPrimary: PRIMARY_CTA,
    ctaSecondary: SECONDARY_CTA,
  },
  {
    id: "hero-asee-2025",
    eyebrow: "SIRELAB Conference Engagement",
    title: "2025 ASEE Conference (Quebec, Canada)",
    description: SHARED_BODY,
    image: "/images/asee25.png",
    imagePosition: "center",
    ctaPrimary: PRIMARY_CTA,
    ctaSecondary: SECONDARY_CTA,
  },
];
