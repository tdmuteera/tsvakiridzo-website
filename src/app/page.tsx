import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { company } from "@/content/company";
import { industries } from "@/content/industries";
import { publishedProjects } from "@/content/projects";
import { getService, services as allServices } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Information technology and engineering",
  description:
    `${company.legalName} provides software, digital systems, technology infrastructure and engineering services for organisations in Zimbabwe and beyond.`,
  path: "/",
});

const featured = [
  {
    slug: "software-and-platforms",
    image: "/images/software.jpg",
    imageAlt: "A team working together around laptops",
    tone: "bg-blue",
  },
  {
    slug: "digital-transformation",
    image: "/images/sme.jpg",
    imageAlt: "People reviewing work on paper and a laptop",
    tone: "bg-purple",
  },
  {
    slug: "it-consultancy",
    image: "/images/network.jpg",
    imageAlt: "Network cables connected in a rack",
    tone: "bg-pink",
  },
  {
    slug: "engineering-consultancy",
    image: "/images/engineering.jpg",
    imageAlt: "Steelwork on an industrial site",
    tone: "bg-slate-500",
  },
] as const;

const ticker = [
  "Software",
  "Digital systems",
  "Consultancy",
  "Engineering",
  "Networks",
  "Training",
  "Infrastructure",
  "Schools",
  "Companies",
];

export default function HomePage() {
  const projects = publishedProjects().slice(0, 3);
  const services = featured
    .map((item) => ({ ...item, service: getService(item.slug) }))
    .filter((item) => item.service);
  const shown = new Set<string>(featured.map((item) => item.slug));
  const otherServices = allServices.filter((service) => !shown.has(service.slug));

  return (
    <>
      <div className="fusion-line" aria-hidden="true" />
      <section className="relative overflow-hidden bg-lilac">
        <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-purple/20 float-a" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[8%] top-10 h-24 w-24 rounded-full bg-pink/25 float-b" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-7 lg:grid-cols-[1.15fr_0.85fr] lg:py-8">
          <div className="hero-rise relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple">Engineering and IT consultants</p>
            <p className="mt-2 max-w-lg text-xs leading-5 text-muted">{company.legalName}</p>
            <h1 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Technology and engineering services for organisations that need the work done.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted sm:text-base">
              The company advises on, builds and supports digital systems, technology infrastructure and engineering work for businesses, schools and other organisations.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-[1.75rem] bg-blue px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple">
                Discuss your requirements
              </Link>
              <Link href="/services" className="rounded-[1.75rem] border border-purple/40 px-5 py-2.5 text-center text-sm font-medium text-purple hover:border-pink hover:text-pink">
                View services
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-48 w-full max-w-md sm:h-56 lg:h-60">
            <div className="orbit pointer-events-none absolute -left-6 -top-4 h-28 w-28 rounded-full border border-dashed border-purple/50" aria-hidden="true">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-pink" />
            </div>
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.75rem] bg-pink/20" aria-hidden="true" />
            <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/hero.jpg"
                alt="A quiet office corridor with glass meeting rooms"
                fill
                priority
                className="hero-photo object-cover object-[center_30%]"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-purple/10 bg-white py-3" aria-hidden="true">
        <div className="marquee-track gap-8 px-4 text-sm font-medium text-navy">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              <span className={index % 3 === 0 ? "text-purple" : index % 3 === 1 ? "text-pink" : "text-blue"}>{item}</span>
              <span className="text-slate-300">/</span>
            </span>
          ))}
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-7">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">Services</h2>
            <Link href="/services" className="text-sm font-medium text-purple underline decoration-purple/30 underline-offset-4">
              See every service
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90}>
                <Link href={`/services/${item.service!.slug}`} className="group block">
                  <div className="relative h-36 overflow-hidden rounded-2xl sm:h-40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 22vw, 50vw"
                    />
                  </div>
                  <span className={`mt-3 block h-1 w-10 rounded-full ${item.tone} transition-all group-hover:w-16`} />
                  <h3 className="mt-3 text-base font-medium leading-snug text-navy group-hover:text-purple">{item.service!.name}</h3>
                  <p className="mt-1.5 line-clamp-3 text-sm leading-5 text-muted">{item.service!.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            Also{" "}
            {otherServices.map((service, index) => (
              <span key={service.slug}>
                {index > 0 ? ", " : ""}
                <Link href={`/services/${service.slug}`} className="font-medium text-navy underline decoration-purple/30 underline-offset-4 hover:text-purple">
                  {service.name}
                </Link>
              </span>
            ))}
            .
          </p>
        </div>
      </section>

      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">Industries</h2>
            <Link href="/industries" className="text-sm font-medium text-pink underline decoration-pink/30 underline-offset-4">
              How the work applies
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 80}>
                <Link href={`/industries#${industry.slug}`} className="group block">
                  <div className="relative h-28 overflow-hidden rounded-2xl">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 22vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-3 text-base font-medium text-navy group-hover:text-pink">{industry.name}</h3>
                  <p className="mt-1 text-sm leading-5 text-muted">{industry.summary.split(/(?<=\.)\s/)[0]}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <h2 className="font-serif text-2xl text-navy">Projects</h2>
          {projects.length === 0 ? (
            <p className="text-sm leading-6 text-muted">
              No completed projects are listed yet.{" "}
              <Link href="/projects" className="font-medium text-blue underline decoration-blue/30 underline-offset-4">
                Open the projects page
              </Link>
            </p>
          ) : (
            <ul className="divide-y divide-line">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`} className="block py-2 text-sm text-navy hover:text-purple">
                    {project.title}
                    <span className="text-muted"> · {project.sector}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-8 top-0 h-24 w-24 rounded-full bg-purple/50 float-a" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-16 w-16 rounded-full bg-pink/40 float-b" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl">Tell us what you need done.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Write with the organisation, the service you have in mind, and enough detail for a useful first reply.
            </p>
          </div>
          <Link href="/contact" className="rounded-[1.75rem] bg-white px-5 py-2.5 text-center text-sm font-medium text-navy hover:bg-blush">
            Contact the company
          </Link>
        </div>
      </section>
    </>
  );
}
