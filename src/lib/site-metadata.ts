import type { Metadata } from "next";
import { siteMeta } from "./site-content";

export function buildMetadata({
  title,
  description,
  path = "/",
  robots,
}: {
  title: string;
  description: string;
  path?: string;
  robots?: Metadata["robots"];
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${siteMeta.url}${path}`,
      siteName: siteMeta.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots,
  };
}
