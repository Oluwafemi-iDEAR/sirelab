import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) ?? "production";
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) ??
  "2024-10-01";

/**
 * True when a real Sanity project id is configured. When false, data hooks skip
 * network requests and fall back to the static content in `src/data/*`, so the
 * site renders fully even before the CMS is connected.
 */
export const isSanityConfigured = Boolean(
  projectId && projectId !== "your-project-id",
);

export const sanityClient = createClient({
  projectId: projectId ?? "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});
