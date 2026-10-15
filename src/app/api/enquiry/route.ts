import { NextResponse } from "next/server";
import { deliverEnquiry, enquirySchema, isRateLimited } from "@/lib/enquiry";

export const runtime = "nodejs";

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries from this connection. Please email the company directly or try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "The enquiry could not be read." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true, delivery: "email" });
  }

  const result = await deliverEnquiry(parsed.data);
  if (!result.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "The enquiry could not be delivered. Please email the company directly. Mail delivery is not configured on this server yet.",
      },
      { status: 503 },
    );
  }

  console.info(`[enquiry] accepted delivery=${result.delivery}`);
  return NextResponse.json({ ok: true, delivery: result.delivery });
}
