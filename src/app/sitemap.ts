import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/content/company";
import { publishedArticles } from "@/content/insights";
import { publishedProjects } from "@/content/projects";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  const staticPaths = ["", "/about", "/services", "/industries", "/projects", "/insights", "/contact", "/privacy"];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
    })),
    ...publishedProjects().map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: now,
    })),
    ...publishedArticles().map((article) => ({
      url: `${base}/insights/${article.slug}`,
      lastModified: now,
    })),
  ];
}
