import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { z } from "zod";
import { company } from "@/content/company";
import { services } from "@/content/services";

const serviceNames = ["General enquiry", ...services.map((service) => service.name)];

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  organisation: z.string().trim().max(160).optional().default(""),
  phone: z.string().trim().max(40).optional().default(""),
  service: z
    .string()
    .trim()
    .refine((value) => serviceNames.includes(value), "Choose a service from the list."),
  message: z
    .string()
    .trim()
    .min(20, "Describe the requirement in at least a few sentences.")
    .max(4000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Confirm that we may use these details to reply." }),
  }),
  companyWebsite: z.string().max(0).optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < 60 * 60 * 1000);
  if (recent.length >= 8) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function plainText(enquiry: EnquiryInput) {
  return [
    "New website enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Organisation: ${enquiry.organisation || "—"}`,
    `Phone: ${enquiry.phone || "—"}`,
    `Service: ${enquiry.service}`,
    "",
    enquiry.message,
  ].join("\n");
}

async function storeEnquiry(enquiry: EnquiryInput) {
  const file = path.join(process.cwd(), "data", "enquiries.json");
  let existing: unknown[] = [];
  try {
    const raw = await fs.readFile(file, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) existing = parsed;
  } catch {
    existing = [];
  }

  existing.push({
    receivedAt: new Date().toISOString(),
    name: enquiry.name,
    email: enquiry.email,
    organisation: enquiry.organisation,
    phone: enquiry.phone,
    service: enquiry.service,
    message: enquiry.message,
  });

  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
}

async function emailEnquiry(enquiry: EnquiryInput) {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) return false;

  const port = Number(process.env.SMTP_PORT || 465);
  const to = process.env.ENQUIRY_TO_EMAIL?.trim() || company.email;
  const from = process.env.SMTP_FROM?.trim() || user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: enquiry.email,
    subject: `Website enquiry: ${enquiry.service}`,
    text: plainText(enquiry),
  });

  return true;
}

export async function deliverEnquiry(enquiry: EnquiryInput) {
  let emailed = false;
  let stored = false;

  try {
    emailed = await emailEnquiry(enquiry);
  } catch (error) {
    console.error("[enquiry] email delivery failed");
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }

  const onVercel = process.env.VERCEL === "1";
  if (!onVercel) {
    try {
      await storeEnquiry(enquiry);
      stored = true;
    } catch (error) {
      console.error("[enquiry] local storage failed");
      if (process.env.NODE_ENV === "development") {
        console.error(error);
      }
    }
  }

  if (emailed) return { ok: true as const, delivery: "email" as const };
  if (stored) return { ok: true as const, delivery: "stored" as const };
  return { ok: false as const };
}
