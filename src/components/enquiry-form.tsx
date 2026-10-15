"use client";

import { useMemo, useState } from "react";
import { company } from "@/content/company";
import { services } from "@/content/services";

type FieldErrors = Partial<Record<"name" | "email" | "organisation" | "phone" | "service" | "message" | "consent", string[] | undefined>>;

const inputClass =
  "mt-2 w-full rounded-2xl border border-line bg-white px-3 py-2.5 text-base text-ink outline-none focus:border-purple";

export function EnquiryForm({ initialService }: { initialService?: string }) {
  const options = useMemo(() => ["General enquiry", ...services.map((service) => service.name)], []);
  const startingService = options.includes(initialService || "") ? initialService! : "General enquiry";
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [delivery, setDelivery] = useState<"email" | "stored" | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setFormError("");
    setErrors({});
    setDelivery(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      organisation: String(form.get("organisation") || ""),
      phone: String(form.get("phone") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
      consent: form.get("consent") === "on",
      companyWebsite: String(form.get("companyWebsite") || ""),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok: boolean;
        delivery?: "email" | "stored";
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.fieldErrors || {});
        setFormError(data.error || "The enquiry could not be sent.");
        return;
      }

      setDelivery(data.delivery || "email");
      event.currentTarget.reset();
    } catch {
      setFormError("The enquiry could not be sent. Check your connection or email the company directly.");
    } finally {
      setPending(false);
    }
  }

  if (delivery) {
    return (
      <div className="rounded-[1.75rem] bg-lilac p-6" role="status">
        <h2 className="font-serif text-2xl text-navy">Enquiry received</h2>
        {delivery === "email" ? (
          <p className="mt-3 leading-relaxed text-muted">
            Your message has been sent to {company.email}. The company will reply using the email address you provided.
          </p>
        ) : (
          <p className="mt-3 leading-relaxed text-muted">
            Your message has been recorded on this development server. Email delivery is not configured yet, so also write to{" "}
            <a className="text-blue underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>{" "}
            if you need a reply before that is switched on.
          </p>
        )}
        <button type="button" className="mt-5 text-sm font-medium text-blue underline" onClick={() => setDelivery(null)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" error={errors.name?.[0]} />
        <Field label="Email" name="email" type="email" required autoComplete="email" error={errors.email?.[0]} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organisation" name="organisation" autoComplete="organization" error={errors.organisation?.[0]} />
        <Field label="Telephone" name="phone" type="tel" autoComplete="tel" error={errors.phone?.[0]} />
      </div>
      <div>
        <label htmlFor="service" className="text-sm font-medium text-navy">
          Service of interest
        </label>
        <select id="service" name="service" defaultValue={startingService} className={inputClass}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service?.[0] ? <p className="mt-1 text-sm text-red-700">{errors.service[0]}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          What do you need? <span className="text-blue">Required</span>
        </label>
        <textarea id="message" name="message" required rows={7} className={inputClass} />
        <p className="mt-2 text-sm leading-6 text-muted">
          Include the organisation, the work you have in mind, any deadline, and the best way to reply. A few sentences is enough for a first enquiry.
        </p>
        {errors.message?.[0] ? <p className="mt-1 text-sm text-red-700">{errors.message[0]}</p> : null}
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink">
          <input name="consent" type="checkbox" className="mt-1" required />
          <span>
            I agree that {company.brandName} may use these details to respond to this enquiry. See the{" "}
            <a className="text-blue underline" href="/privacy">
              privacy notice
            </a>
            .
          </span>
        </label>
        {errors.consent?.[0] ? <p className="mt-1 text-sm text-red-700">{errors.consent[0]}</p> : null}
      </div>
      {formError ? (
        <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-[1.75rem] bg-blue px-5 py-3 text-sm font-medium text-white hover:bg-purple disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-navy">
        {label} {required ? <span className="text-blue">Required</span> : null}
      </label>
      <input id={name} name={name} type={type} required={required} autoComplete={autoComplete} className={inputClass} />
      {error ? <p className="mt-1 text-sm text-red-700">{error}</p> : null}
    </div>
  );
}
