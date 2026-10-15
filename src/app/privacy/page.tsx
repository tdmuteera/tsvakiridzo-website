import { company, formatAddress } from "@/content/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy notice",
  description: `How ${company.legalName} handles personal details submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Privacy</p>
      <h1 className="mt-3 font-serif text-4xl text-navy">Privacy notice</h1>
      <div className="mt-8 space-y-5 leading-7 text-ink">
        <p>
          This notice explains what {company.legalName} collects when you use the enquiry form on this website. The company does not ask for more personal information than it needs to reply.
        </p>
        <h2 className="pt-2 font-serif text-2xl text-navy">What is collected</h2>
        <p>
          The form asks for your name, email address, organisation if you provide one, telephone number if you provide one, the service you are interested in, and your message. You are asked to confirm that these details may be used to respond.
        </p>
        <h2 className="pt-2 font-serif text-2xl text-navy">Why it is collected</h2>
        <p>
          The details are used to understand the enquiry and to reply. They are not sold, and they are not used for unrelated marketing.
        </p>
        <h2 className="pt-2 font-serif text-2xl text-navy">How it is handled</h2>
        <p>
          An enquiry is sent to {company.email} so the company can read it and reply. Messages sent through the form are not published on this website.
        </p>
        <p>
          The site does not use an analytics product and does not embed social media trackers. The contact page includes a map of Harare from OpenStreetMap. Opening that map, or the link to Google Maps, is subject to the privacy practices of those services.
        </p>
        <h2 className="pt-2 font-serif text-2xl text-navy">How long it is kept</h2>
        <p>
          Enquiry correspondence is kept for as long as needed to respond and to keep a record of the conversation, and then removed when it is no longer required for that purpose.
        </p>
        <h2 className="pt-2 font-serif text-2xl text-navy">Contact</h2>
        <p>
          To ask about information you have sent, email{" "}
          <a className="text-blue underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          or write to {formatAddress()}.
        </p>
      </div>
    </article>
  );
}
