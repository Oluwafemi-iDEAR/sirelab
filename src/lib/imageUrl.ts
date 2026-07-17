import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityClient } from "./sanity";

const builder = imageUrlBuilder(sanityClient);

/**
 * Build an image URL from a Sanity image reference. When `source` is already a
 * plain string (e.g. a static `/images/...` fallback path), it is returned
 * unchanged so components can accept either shape.
 */
export function urlFor(source: SanityImageSource | string | undefined | null) {
  if (!source) return undefined;
  if (typeof source === "string") return source;
  return builder.image(source).auto("format").fit("max").url();
}
