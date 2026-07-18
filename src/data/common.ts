// Small shared shapes reused across data files, GROQ projections, and Sanity schema.

export type CtaLink = {
  label: string;
  href: string;
};

export type ResourceLink = {
  label: string;
  url: string;
};

// Portable Text is fetched from Sanity as an array of blocks. For static
// fallback content we allow a plain string, which the PortableText component
// renders as a single paragraph.
export type RichText = string | unknown[];
