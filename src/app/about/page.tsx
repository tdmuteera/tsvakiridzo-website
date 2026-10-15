import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { approach, company, mission, profile, values, vision } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `Who ${company.legalName} is, the work it undertakes, and the working vision, mission and values drawn from its objectives.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">About</p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            A Harare company for information technology and engineering.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {company.legalName} helps organisations improve operations through technology and engineering services.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Profile" title="Who the company is and what it is here to do." />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-ink">
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl text-navy">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">{vision.statement}</p>
          </article>
          <article>
            <h2 className="font-serif text-3xl text-navy">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">{mission.statement}</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">Values</h2>
        <div className="mt-8 space-y-5">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 140}>
              <div className="flex gap-4">
                <span
                  className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                    ["bg-blue", "bg-purple", "bg-pink", "bg-slate-400", "bg-blue"][index]
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-2xl text-navy">{value.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{value.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-lilac">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-3xl text-navy">How client work is approached</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <div>
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${["bg-blue", "bg-purple", "bg-pink", "bg-slate-400"][index]}`}
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-lg font-medium text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
