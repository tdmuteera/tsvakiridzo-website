/**
 * Services derived from the company objectives. Add or revise a service here.
 * The services index and the individual service pages both read this file.
 */

export type ServiceGroup = "technology" | "engineering" | "integrated";

export type Service = {
  slug: string;
  name: string;
  group: ServiceGroup;
  summary: string;
  image: string;
  imageAlt: string;
  problem: string;
  value: string;
  useCases: string[];
  note?: string;
};

export const serviceGroups: { id: ServiceGroup; title: string; introduction: string }[] = [
  {
    id: "technology",
    title: "Information technology",
    introduction:
      "Consultancy, software, digital operations, training and the equipment that supports them.",
  },
  {
    id: "engineering",
    title: "Engineering",
    introduction:
      "Consultancy, supply and infrastructure work, offered within the legal and professional requirements that apply.",
  },
  {
    id: "integrated",
    title: "Combined assignments",
    introduction:
      "Projects that need technology and engineering together, including work delivered with other qualified parties.",
  },
];

export const services: Service[] = [
  {
    slug: "it-consultancy",
    image: "/images/network.jpg",
    imageAlt: "Network cables connected in a rack",
    name: "Information technology consultancy",
    group: "technology",
    summary:
      "Advice and technology solutions for organisations facing a defined business or operational problem.",
    problem:
      "Buying or building technology without a clear view of the problem often wastes money and leaves staff with tools they do not use.",
    value:
      "The company provides information technology consultancy and develops technology solutions through software development, systems engineering, artificial intelligence, automation and other emerging technologies, aimed at business and societal challenges.",
    useCases: [
      "Deciding whether to build, buy or adapt a system",
      "Shaping an automation or software initiative before development starts",
      "Reviewing how technology could address a specific operational difficulty",
    ],
  },
  {
    slug: "software-and-platforms",
    image: "/images/software.jpg",
    imageAlt: "A team working together around laptops",
    name: "Websites, software and digital platforms",
    group: "technology",
    summary:
      "Design, development and upkeep of websites, applications, management systems and digital platforms.",
    problem:
      "Everyday work slows down when information sits in disconnected files, or when the public and staff have no reliable digital place to work.",
    value:
      "The company designs, develops, implements, customises, maintains and upgrades websites, software applications, enterprise management systems and digital platforms that support efficiency, productivity and service delivery.",
    useCases: [
      "A company or school website",
      "An internal application for records, requests or operations",
      "Customising or upgrading a system already in use",
      "Ongoing maintenance after a platform is launched",
    ],
  },
  {
    slug: "digital-transformation",
    image: "/images/sme.jpg",
    imageAlt: "People reviewing work on paper and a laptop",
    name: "Digital transformation",
    group: "technology",
    summary:
      "Help for organisations moving from paper-based and manual work to digital records, workflows and processes.",
    problem:
      "Paper files and informal manual steps make it harder to find information, see the status of work, and give a consistent service.",
    value:
      "The company assists businesses, companies, institutions and organisations to move toward paperless, automated and digitally integrated operations, including digitisation of records, workflows and business processes.",
    useCases: [
      "Digitising an existing set of paper records",
      "Replacing a manual approval or request process",
      "Connecting related activities so staff are not re-entering the same information",
    ],
  },
  {
    slug: "training-and-support",
    image: "/images/school.jpg",
    imageAlt: "An empty classroom with desks and a chalkboard",
    name: "Training and user support",
    group: "technology",
    summary:
      "Training, technical guidance and user support so people can adopt and use technology properly.",
    problem:
      "A system does little for an organisation when the people expected to use it have not been shown how, or have nowhere to turn when it fails them.",
    value:
      "The company provides training, capacity building, technical guidance and user support on systems it develops, on existing software and digital platforms, and on other information technology solutions.",
    useCases: [
      "Staff training when a new system is introduced",
      "Guidance for a team adopting software already in place",
      "User support while people become confident with a platform",
    ],
  },
  {
    slug: "data-cloud-security-networks",
    image: "/images/corporate.jpg",
    imageAlt: "Glass office towers",
    name: "AI, data, cloud, security and networking",
    group: "technology",
    summary:
      "Technology work that improves decisions, information management, connectivity and the protection of systems.",
    problem:
      "Operations suffer when networks are unreliable, information cannot be interpreted, or systems are left exposed.",
    value:
      "The company researches, develops and implements artificial intelligence, data analytics, cloud computing, cybersecurity, networking and related solutions that support decision-making, information management and innovation.",
    useCases: [
      "Office networks, wireless access and related troubleshooting",
      "A clearer view of operational information through data work",
      "Cloud arrangements suited to how the organisation works",
      "Security measures appropriate to the systems being used",
    ],
    note: "This is a service offering. It is not a claim of a particular security certification or a completed research programme.",
  },
  {
    slug: "it-supply-and-support",
    image: "/images/hero.jpg",
    imageAlt: "A quiet office corridor with glass meeting rooms",
    name: "IT equipment, software and infrastructure",
    group: "technology",
    summary:
      "Procurement, supply, installation, configuration, maintenance and technical support for technology equipment and software.",
    problem:
      "Work stops when the right equipment or software is missing, poorly installed, or left without anyone to maintain it.",
    value:
      "The company provides information technology infrastructure, hardware and software procurement, supply, installation, configuration, maintenance and technical support, including technological equipment and related accessories.",
    useCases: [
      "Sourcing and supplying computers and related equipment",
      "Installing and configuring hardware or software",
      "Maintenance and technical support after installation",
    ],
  },
  {
    slug: "engineering-consultancy",
    image: "/images/engineering.jpg",
    imageAlt: "Steelwork on an industrial site",
    name: "Engineering consultancy",
    group: "engineering",
    summary:
      "Engineering advice, design, planning, project management and technical support across relevant disciplines.",
    problem:
      "Engineering work needs a clear design, a realistic plan and coordinated delivery, not only a contractor on site.",
    value:
      "The company provides engineering consultancy, design, planning, project management, technical support and related engineering services across relevant engineering disciplines.",
    useCases: [
      "Early design and planning for an engineering assignment",
      "Project management and technical support during delivery",
      "Advice on an engineering approach before materials or contractors are committed",
    ],
    note: "These services are subject to the professional and regulatory requirements that apply to the discipline and the assignment. The company will confirm what it can undertake before work begins.",
  },
  {
    slug: "engineering-supply",
    image: "/images/construction.jpg",
    imageAlt: "A construction site with a crane",
    name: "Engineering equipment and industrial supplies",
    group: "engineering",
    summary:
      "Sourcing and supply of engineering equipment, machinery, tools, materials, spare parts and related technical supplies.",
    problem:
      "Projects and maintenance stall when equipment, tools, materials or spare parts cannot be sourced reliably.",
    value:
      "The company sources, procures, imports, exports, distributes, supplies and delivers engineering equipment, machinery, tools, materials, spare parts and other industrial and technical supplies to individuals, businesses, institutions and organisations.",
    useCases: [
      "Supply of tools, spare parts or technical materials",
      "Sourcing machinery or equipment for a business or institution",
      "Delivery of industrial supplies required for a defined piece of work",
    ],
  },
  {
    slug: "construction-and-infrastructure",
    image: "/images/construction.jpg",
    imageAlt: "Structural work on a building site",
    name: "Construction and infrastructure",
    group: "engineering",
    summary:
      "Construction, civil engineering, infrastructure, installation, maintenance and rehabilitation, with the associated materials and technical services.",
    problem:
      "Facilities and infrastructure need to be built, installed, maintained or brought back into usable condition.",
    value:
      "The company undertakes and participates in construction, civil engineering, infrastructure development, installation, maintenance and rehabilitation projects, including the supply of associated materials, equipment and technical services.",
    useCases: [
      "An infrastructure or civil engineering assignment within the company’s permitted scope",
      "Installation or maintenance work associated with a facility",
      "Rehabilitation of an existing installation, together with the materials required",
    ],
    note: "This work is subject to applicable laws, licences and regulatory requirements. A specific project is accepted only where those requirements can be met.",
  },
  {
    slug: "integrated-projects",
    image: "/images/corporate.jpg",
    imageAlt: "A city of office buildings",
    name: "Integrated technology and engineering projects",
    group: "integrated",
    summary:
      "Assignments that combine information technology and engineering, including collaboration with other qualified professionals.",
    problem:
      "Some clients do not have a purely software problem or a purely engineering problem. Splitting the work across unrelated parties can leave gaps.",
    value:
      "The company undertakes technology and engineering projects, collaborates with qualified professionals and organisations, and provides integrated information technology and engineering solutions to public and private sector clients locally and internationally.",
    useCases: [
      "A project that needs both a digital system and physical works or equipment",
      "An assignment delivered with another qualified professional or organisation",
      "A public or private sector client that wants one coordinated point of contact",
    ],
    note: "Named partnerships will be published only when they have been agreed and are appropriate to announce. None are listed yet.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}
