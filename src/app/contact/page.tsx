import { EnquiryForm } from "@/components/enquiry-form";
import { company, formatAddress } from "@/content/company";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${company.legalName} at ${formatAddress()}, ${company.email}, or ${company.phone.display}.`,
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const selected = params.service ? getService(params.service)?.name : undefined;
  const mapSrc =
    "https://www.openstreetmap.org/export/embed.html?bbox=30.96%2C-17.90%2C31.15%2C-17.75&layer=mapnik&marker=-17.8292%2C31.0522";

  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Contact</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Discuss your requirements.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            Use the form for a first enquiry, or write and call directly. Include the organisation, the service you are considering, what needs to change, and any deadline.
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <aside>
          <h2 className="font-serif text-2xl text-navy">Company details</h2>
          <dl className="mt-6 space-y-5 text-sm leading-6">
            <div>
              <dt className="font-medium text-navy">Address</dt>
              <dd className="text-muted">{formatAddress()}</dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Email</dt>
              <dd>
                <a className="text-blue underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-navy">Telephone</dt>
              <dd>
                <a className="text-blue underline" href={company.phone.href}>
                  {company.phone.display}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-6 text-muted">
            For letters, quotations and other formal correspondence, use the address, email and telephone shown here.
          </p>
          <div className="mt-8">
            <h2 className="font-serif text-2xl text-navy">Location</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              The map shows Harare. It is not a surveyed pin for the street address. Use the written address for correspondence.
            </p>
            <iframe
              title="Map of Harare, Zimbabwe"
              src={mapSrc}
              className="mt-4 h-64 w-full border border-line"
              loading="lazy"
            />
            <a
              className="mt-3 inline-block text-sm font-medium text-blue underline"
              href="https://www.google.com/maps/search/?api=1&query=341+Glenora+A%2C+Harare%2C+Zimbabwe"
            >
              Search the address in Google Maps
            </a>
          </div>
        </aside>
        <div>
          <h2 className="font-serif text-2xl text-navy">Enquiry form</h2>
          <div className="mt-6">
            <EnquiryForm initialService={selected} />
          </div>
        </div>
      </div>
    </>
  );
}
