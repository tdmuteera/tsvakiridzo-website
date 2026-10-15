/**
 * Portfolio.
 *
 * Add a project only when the information is real and the company is willing
 * to publish it. Set published to true to show it on the website.
 *
 * Leave placeholder as false for real work. A placeholder entry, if you ever
 * need one while drafting, is labelled on the site and is not described as
 * completed company work.
 *
 * Example:
 * {
 *   slug: "example-records-system",
 *   title: "Records workflow for a client",
 *   sector: "To be confirmed",
 *   year: "2026",
 *   services: ["digital-transformation"],
 *   summary: "One or two sentences on what the assignment was.",
 *   objective: "What the client needed to change.",
 *   solution: "What was actually delivered.",
 *   outcome: "What changed, stated only if it can be supported.",
 *   image: "/images/projects/example.jpg",
 *   imageAlt: "Describe the photograph.",
 *   published: false,
 *   placeholder: false,
 * }
 */

export type Project = {
  slug: string;
  title: string;
  sector: string;
  year?: string;
  services: string[];
  summary: string;
  objective: string;
  solution: string;
  outcome: string;
  image?: string;
  imageAlt?: string;
  published: boolean;
  placeholder: boolean;
};

export const projects: Project[] = [];

export function publishedProjects() {
  return projects.filter((project) => project.published);
}

export function getProject(slug: string) {
  return publishedProjects().find((project) => project.slug === slug);
}
