import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.group === service.group && item.slug !== service.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-5 py-12">
      <nav className="text-sm text-muted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-blue">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/services" className="hover:text-blue">Services</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-navy">{service.name}</li>
        </ol>
      </nav>
      <header className="mt-8 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">Service</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl">{service.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{service.summary}</p>
        </div>
        <div className="relative h-52 overflow-hidden rounded-[1.75rem] sm:h-64">
          <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 36vw, 100vw" />
        </div>
      </header>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-navy">The problem</h2>
            <p className="mt-3 leading-7 text-ink">{service.problem}</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">What the company provides</h2>
            <p className="mt-3 leading-7 text-ink">{service.value}</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Typical situations</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-ink">
              {service.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          {service.note ? <p className="border-l-2 border-blue pl-4 text-sm leading-6 text-muted">{service.note}</p> : null}
        </div>
        <aside className="h-fit rounded-[1.75rem] bg-lilac p-6 lg:sticky lg:top-32">
          <h2 className="font-serif text-2xl text-navy">Enquire about this service</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Say what you need, the organisation, and any timing. The service will be selected on the contact form.
          </p>
          <Link href={`/contact?service=${service.slug}`} className="mt-5 inline-block rounded-[1.75rem] bg-blue px-4 py-3 text-sm font-medium text-white hover:bg-purple">
            Discuss this service
          </Link>
        </aside>
      </div>
      {related.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-navy">Related services</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`} className="group block">
                  <span className="relative block h-24 overflow-hidden rounded-2xl">
                    <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 640px) 30vw, 100vw" />
                  </span>
                  <span className="mt-2 block text-sm font-medium text-navy group-hover:text-purple">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
