import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, publishedProjects } from "@/content/projects";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return publishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 py-12">
      <nav className="text-sm text-muted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/" className="hover:text-blue">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/projects" className="hover:text-blue">Projects</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-navy">{project.title}</li>
        </ol>
      </nav>
      <header className="mt-8 max-w-3xl">
        {project.placeholder ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Placeholder — not completed company work</p>
        ) : (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Project</p>
        )}
        <h1 className="mt-3 font-serif text-4xl text-navy">{project.title}</h1>
        <p className="mt-3 text-sm text-muted">
          {project.sector}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.summary}</p>
      </header>
      {project.image ? (
        <div className="relative mt-8 h-80">
          <Image src={project.image} alt={project.imageAlt || ""} fill className="object-cover" sizes="100vw" />
        </div>
      ) : null}
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {[
          ["Objective", project.objective],
          ["What was delivered", project.solution],
          ["Outcome", project.outcome],
        ].map(([label, text]) => (
          <section key={label}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue">{label}</h2>
            <p className="mt-3 leading-7 text-ink">{text}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Services:{" "}
        {project.services.map((serviceSlug, index) => {
          const service = getService(serviceSlug);
          if (!service) return null;
          return (
            <span key={serviceSlug}>
              {index > 0 ? ", " : ""}
              <Link href={`/services/${service.slug}`} className="text-blue underline">
                {service.name}
              </Link>
            </span>
          );
        })}
      </p>
    </article>
  );
}
