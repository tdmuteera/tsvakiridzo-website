/**
 * Client sectors. Descriptions stay inside the services in services.ts.
 * They explain different uses of the same capabilities. They do not claim
 * a specialist practice that the objectives do not support.
 */

export type Industry = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  summary: string;
  needs: string[];
  relevantServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "smes",
    name: "Small and medium-sized enterprises",
    image: "/images/sme.jpg",
    imageAlt: "People reviewing documents and a laptop during a working meeting",
    summary:
      "Smaller businesses often need a dependable website, a simpler way to handle records, equipment that is installed properly, or engineering supplies for a specific job. The engagement can stay narrow.",
    needs: [
      "A website or a modest internal system for daily operations",
      "Moving a paper process, such as orders, requests or records, into a digital workflow",
      "Supply, setup and support of computers, software and networks",
      "Tools, spare parts or technical materials for the work the business already does",
    ],
    relevantServices: [
      "software-and-platforms",
      "digital-transformation",
      "it-supply-and-support",
      "training-and-support",
      "engineering-supply",
    ],
  },
  {
    slug: "large-organisations",
    name: "Larger companies and corporates",
    image: "/images/corporate.jpg",
    imageAlt: "Glass office towers photographed from below",
    summary:
      "Larger organisations may need consultancy before a system is commissioned, changes to enterprise platforms, infrastructure, or an engineering assignment with a defined scope. The company will say clearly which parts it can carry and which parts need other qualified parties.",
    needs: [
      "Consultancy on a technology or engineering approach",
      "Customisation, implementation or maintenance of a management system or digital platform",
      "Networks, cloud arrangements, data work and security measures suited to existing systems",
      "Project management, technical support, or integrated technology and engineering delivery",
    ],
    relevantServices: [
      "it-consultancy",
      "software-and-platforms",
      "data-cloud-security-networks",
      "engineering-consultancy",
      "integrated-projects",
    ],
  },
  {
    slug: "schools",
    name: "Schools and educational institutions",
    image: "/images/school.jpg",
    imageAlt: "An empty classroom with desks facing a green chalkboard",
    summary:
      "Schools and other learning institutions can use the same technology services as other organisations: a public website, digital records and workflows, staff training, and reliable equipment and networks. The company does not present itself as a specialist education-software publisher.",
    needs: [
      "A school website or a simple platform for notices and information",
      "Digitising records and everyday administrative processes",
      "Training and user support for staff using those systems",
      "Supply, installation and support of technology equipment and networks",
    ],
    relevantServices: [
      "software-and-platforms",
      "digital-transformation",
      "training-and-support",
      "it-supply-and-support",
      "data-cloud-security-networks",
    ],
  },
  {
    slug: "institutions",
    name: "Public, private and other institutions",
    image: "/images/network.jpg",
    imageAlt: "Network cables connected to equipment in a rack",
    summary:
      "Institutions that serve the public or a defined community often depend on records, service processes, facilities and infrastructure. Relevant work may be digital, engineering, or both, locally or internationally, and always within the rules that apply to that client.",
    needs: [
      "Digital records, workflows and platforms that support service delivery",
      "Technology infrastructure, maintenance and user support",
      "Engineering consultancy, materials or infrastructure work where the company is permitted to act",
      "A combined technology and engineering assignment with a single point of coordination",
    ],
    relevantServices: [
      "digital-transformation",
      "it-supply-and-support",
      "engineering-consultancy",
      "construction-and-infrastructure",
      "integrated-projects",
    ],
  },
];
