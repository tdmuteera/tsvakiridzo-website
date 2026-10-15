import type { Metadata } from "next";
import { company, getSiteUrl } from "@/content/company";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, getSiteUrl()).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${company.brandName}`,
      description,
      url,
      siteName: company.legalName,
      type: "website",
      locale: "en_ZW",
      images: [
        {
          url: "/brand/og.jpg",
          width: 1200,
          height: 630,
          alt: `${company.brandName} Engineering and IT Consultants`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.brandName}`,
      description,
      images: ["/brand/og.jpg"],
    },
  };
}
