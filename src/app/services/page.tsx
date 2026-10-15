import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { company } from "@/content/company";
import { serviceGroups, servicesInGroup } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: `Information technology and engineering services offered by ${company.legalName}.`,
  path: "/services",
});

const groupTone = {
  technology: "bg-lilac",
  engineering: "bg-blush",
  integrated: "bg-paper",
} as const;

export default function ServicesPage() {
  return (
    <>
      <header className="bg-lilac">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h1 className="font-serif text-4xl text-navy">Services</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Information technology, engineering, and assignments that need both. Open a service, or jump to the group you need.
          </p>
          <nav className="mt-5 flex flex-wrap gap-2" aria-label="Service groups">
            {serviceGroups.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy hover:text-purple">
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </header>
      {serviceGroups.map((group) => (
        <section id={group.id} key={group.id} className={`scroll-mt-32 ${groupTone[group.id]}`}>
          <div className="mx-auto max-w-6xl px-5 py-10">
            <h2 className="font-serif text-2xl text-navy">{group.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{group.introduction}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesInGroup(group.id).map((service, index) => (
                <Reveal key={service.slug} delay={index * 80}>
                  <article className="group">
                    <Link href={`/services/${service.slug}`} className="block">
                      <div className="relative h-36 overflow-hidden rounded-2xl">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-105"
                          sizes="(min-width: 1024px) 30vw, 100vw"
                        />
                      </div>
                      <h3 className="mt-3 text-lg font-medium leading-snug text-navy group-hover:text-purple">{service.name}</h3>
                    </Link>
                    <p className="mt-1.5 line-clamp-3 text-sm leading-5 text-muted">{service.summary}</p>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="mt-2 inline-block text-sm font-medium text-purple underline decoration-purple/30 underline-offset-4"
                    >
                      Enquire
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
