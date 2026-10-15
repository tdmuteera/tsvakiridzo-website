import Link from "next/link";
import { company } from "@/content/company";
import { publishedProjects } from "@/content/projects";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    `Published project records for ${company.legalName}. No completed projects are listed until real information is supplied.`,
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = publishedProjects();
  const sectors = Array.from(new Set(projects.map((project) => project.sector)));

  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Projects</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Projects
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            Completed work will be listed here when a client has agreed that it can be shared.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-16">
        {projects.length === 0 ? (
          <div className="border border-line bg-white p-8">
            <h2 className="font-serif text-2xl text-navy">No published projects yet</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              There is nothing to show yet. A new enquiry can still be discussed without using another client’s work as an example.
            </p>
            <Link href="/contact" className="mt-5 inline-block rounded-[1.75rem] bg-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-purple">
              Discuss a project
            </Link>
          </div>
        ) : (
          <>
            {sectors.length > 1 ? (
              <p className="mb-6 text-sm text-muted">Sectors represented: {sectors.join(", ")}.</p>
            ) : null}
            <ul className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug} className="border border-line">
                  <Link href={`/projects/${project.slug}`} className="block p-5 hover:bg-paper">
                    {project.placeholder ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Placeholder — not completed work</p>
                    ) : null}
                    <h2 className="mt-2 font-serif text-2xl text-navy">{project.title}</h2>
                    <p className="mt-2 text-sm text-muted">
                      {project.sector}
                      {project.year ? ` · ${project.year}` : ""}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-ink">{project.summary}</p>
                    <p className="mt-3 text-sm text-muted">
                      {project.services
                        .map((slug) => getService(slug)?.name)
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
