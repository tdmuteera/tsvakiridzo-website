import Image from "next/image";
import Link from "next/link";
import { company, formatAddress } from "@/content/company";
import { footerNavigation } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src={company.logo.src}
            alt={company.logo.alt}
            width={company.logo.width}
            height={company.logo.height}
            className="h-24 w-auto rounded-[1.75rem] bg-white p-2"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-200">
            {company.legalName}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">{company.shortDescription}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky">Visit and write</h2>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6 text-slate-200">
            <p>{formatAddress()}</p>
            <p>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href={company.phone.href}>
                {company.phone.display}
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky">On this site</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link className="text-slate-200 hover:text-white hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {company.social.length > 0 ? (
            <ul className="mt-6 space-y-2 text-sm">
              {company.social.map((item) => (
                <li key={item.href}>
                  <a className="text-slate-200 hover:text-white hover:underline" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <p>Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
