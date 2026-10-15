import Image from "next/image";
import Link from "next/link";
import { industries } from "@/content/industries";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "How TSVAKIRIDZO ENGINEERING & IT CONSULTANTS (PRIVATE) LIMITED applies its technology and engineering services to SMEs, larger companies, schools and other institutions.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Industries</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            The same services, applied to different organisations.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            Small businesses, larger companies, schools and other institutions do not all need the same thing. These notes show where the company’s stated services may be relevant. They do not add specialist practices beyond those services.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16">
        {industries.map((industry) => (
          <article id={industry.slug} key={industry.slug} className="grid scroll-mt-28 gap-8 border-b border-line pb-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-64">
              <Image src={industry.image} alt={industry.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-navy">{industry.name}</h2>
              <p className="mt-4 leading-7 text-ink">{industry.summary}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue">Situations that may fit</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                {industry.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue">Relevant services</h3>
              <ul className="mt-3 space-y-2">
                {industry.relevantServices.map((slug) => {
                  const service = getService(slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/services/${slug}`} className="text-navy hover:text-blue">
                        {service.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
