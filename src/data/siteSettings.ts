import type { CtaLink, ResourceLink } from "./common";

export type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  youtube?: string;
};

export type SiteLogos = {
  sireLogo: string;
  sireIcon?: string;
  msuLogo: string;
  favicon?: string;
};

export type SiteSettings = {
  footerTagline: string;
  address: string;
  phone: string;
  officeHours: string;
  primaryEmail: string;
  socials: SocialLinks;
  googleMapsEmbedUrl: string;
  logos: SiteLogos;
  footerExploreLinks: CtaLink[];
  footerResourceLinks: ResourceLink[];
  web3formsAccessKey: string;
};

export const siteSettings: SiteSettings = {
  footerTagline:
    "Advancing science, engineering, and society through research, education, and partnerships.",
  address: "1700 East Cold Spring Lane, Baltimore, MD 21251",
  phone: "(443) 885-5445",
  officeHours: "Mon–Fri, 9am–5pm ET",
  primaryEmail: "info@morgan.edu",
  socials: {
    twitter: "#",
    linkedin: "#",
    youtube: "#",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.452291304526!2d-76.58462842404145!3d39.345993071631774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80597c29f8f2f%3A0x98d6275ed65a0fa6!2s1700%20E%20Cold%20Spring%20Ln%2C%20Baltimore%2C%20MD%2021251!5e0!3m2!1sen!2sus!4v1755778851228!5m2!1sen!2sus",
  logos: {
    sireLogo: "/images/sire_logo.png",
    sireIcon: "/images/sire-logo-icon.png",
    msuLogo: "/images/MSU_Logo.png",
    favicon: "/images/sire-logo-icon1.png",
  },
  footerExploreLinks: [
    { label: "About", href: "/about" },
    { label: "Publications", href: "/publications" },
    { label: "Conferences & Workshops", href: "/conferences-workshops" },
    { label: "Courses", href: "/courses" },
  ],
  footerResourceLinks: [
    { label: "Labs & Facilities", url: "/about" },
    { label: "Student Opportunities", url: "/contact" },
    { label: "Policies & Forms", url: "#" },
  ],
  web3formsAccessKey: "1ebcd1de-2679-44a4-be33-949707d67a44",
};
