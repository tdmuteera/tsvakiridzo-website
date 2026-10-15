/**
 * Company identity, contact details and profile copy.
 * Edit this file when official details change. Do not hard-code these
 * values in page components.
 *
 * Confirmed from the company objectives and the details supplied for this site:
 * - Legal name, as written in the objectives document
 * - Address
 * - Email and telephone supplied for the website
 *
 * Vision, mission, values and the profile narrative are working statements
 * prepared from those objectives. They are not a separately adopted policy
 * document. Revise them here when the company confirms its public wording.
 */

export const company = {
  legalName: "Tsvakiridzo Engineering & IT Consultants (Private) Limited",
  brandName: "Tsvakiridzo",
  shortDescription:
    "Information technology and engineering services for businesses, schools and other organisations.",
  logo: {
    src: "/brand/logo.png",
    width: 498,
    height: 438,
    alt: "Tsvakiridzo Pvt Ltd, IT Consultants",
  },
  address: {
    line1: "341 Glenora A",
    locality: "Harare",
    country: "Zimbabwe",
  },
  email: "tsvakiridzo@gmail.com",
  phone: {
    display: "+263 78 785 4279",
    href: "tel:+263787854279",
  },
  /**
   * Add confirmed profiles here later, for example:
   * { label: "Facebook", href: "https://facebook.com/..." }
   * Do not add accounts that have not been confirmed.
   */
  social: [] as { label: string; href: string }[],
} as const;

export function formatAddress() {
  return `${company.address.line1}, ${company.address.locality}, ${company.address.country}`;
}

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (configured || "http://localhost:3000").replace(/\/$/, "");
}

export const profile = {
  paragraphs: [
    "Tsvakiridzo Engineering & IT Consultants (Private) Limited is a Zimbabwean company formed to provide information technology and engineering services. It works with businesses, companies, institutions and other organisations that need practical help with digital systems, technology infrastructure or engineering work.",
    "The company’s technology work covers consultancy, software and websites, digital platforms, the move from manual or paper-based operations to digital processes, training and user support, and selected work in artificial intelligence, data, cloud computing, cybersecurity and networking. It also supplies, installs and supports information technology equipment and software.",
    "Its engineering work covers consultancy, design, planning, project management and technical support, together with the supply of engineering equipment and industrial materials, and construction, civil engineering and infrastructure work. Engineering and construction services are offered subject to the laws, licences and professional requirements that apply to the particular assignment.",
    "Clients may be small and medium-sized enterprises, larger companies, schools and other public or private organisations, in Zimbabwe or elsewhere. An enquiry is handled against the work the client actually needs. The company does not assume that every organisation needs the same service.",
    "Where a project needs skills beyond the people directly involved, the company can collaborate with qualified professionals and other organisations. This website does not list a project history. Completed work will be published only when the facts are available and suitable to share.",
  ],
};

export const vision = {
  label: "Working vision",
  statement:
    "Organisations able to rely on sound digital systems and competent engineering, so that technology and infrastructure support clearer decisions, steadier operations and better service to the people they serve.",
};

export const mission = {
  label: "Working mission",
  statement:
    "To help businesses, institutions and other organisations improve how they work, by advising on, building and supporting information technology and engineering solutions, and by training the people who use them, within the professional and regulatory limits that apply.",
};

export const values = [
  {
    title: "Integrity",
    text: "Describe the work accurately, keep agreements clear, and decline to imply experience, licences or results that have not been established.",
  },
  {
    title: "Practical innovation",
    text: "Use software, automation and newer technologies where they address a real operational problem, not as decoration.",
  },
  {
    title: "Professionalism",
    text: "Plan and deliver work with care, and respect the licences, standards and regulations that govern engineering and technology assignments.",
  },
  {
    title: "Client focus",
    text: "Start from the client’s processes, people and constraints, and recommend a service that fits that situation.",
  },
  {
    title: "Reliability",
    text: "Treat handover, maintenance and user support as part of the work, so a system or installation remains useful after it is introduced.",
  },
] as const;

export const approach = [
  {
    step: "01",
    title: "Understand the operation",
    text: "Clarify the process, records, site or system involved, who uses it, and what currently gets in the way.",
  },
  {
    step: "02",
    title: "Define a practical scope",
    text: "Advise on an approach the organisation can adopt, including what is in scope, what depends on licences or third parties, and what should wait.",
  },
  {
    step: "03",
    title: "Build or supply what is needed",
    text: "Develop, customise, install or coordinate the technology or engineering work agreed, rather than leaving the client with a recommendation only.",
  },
  {
    step: "04",
    title: "Train, support and adjust",
    text: "Help people use what has been introduced, and remain available for maintenance, upgrades and technical support where that is part of the engagement.",
  },
] as const;
