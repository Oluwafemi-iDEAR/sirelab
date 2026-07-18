import { useQuery } from "@tanstack/react-query";

import { isSanityConfigured, sanityClient } from "../lib/sanity";

const FIVE_MINUTES = 5 * 60 * 1000;

export type SanityDataResult<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

/**
 * Fetches `query` from Sanity and returns the result, falling back to static
 * content when Sanity is not configured, the query errors, or it returns empty.
 * This keeps every page functional before and after the CMS is connected.
 */
export function useSanityData<T>(
  key: string,
  query: string,
  fallback: T,
): SanityDataResult<T> {
  const result = useQuery({
    queryKey: [key],
    queryFn: () => sanityClient.fetch<T>(query),
    enabled: isSanityConfigured,
    staleTime: FIVE_MINUTES,
    retry: 1,
  });

  const fetched = result.data;
  const hasContent =
    fetched != null &&
    (!Array.isArray(fetched) || (fetched as unknown[]).length > 0);

  return {
    data: isSanityConfigured && hasContent ? (fetched as T) : fallback,
    isLoading: isSanityConfigured && result.isLoading,
    isError: result.isError,
  };
}
