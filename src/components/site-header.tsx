"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, formatAddress } from "@/content/company";
import { mainNavigation } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="border-b border-white/10 bg-navy text-sm text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2">
          <p className="hidden truncate sm:block">{formatAddress()}</p>
          <div className="hidden min-w-0 items-center gap-4 sm:flex">
            <a className="truncate hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className="shrink-0 hover:underline" href={company.phone.href}>
              {company.phone.display}
            </a>
          </div>
          <div className="flex w-full items-center justify-between gap-3 sm:hidden">
            <a className="rounded-full bg-white px-3 py-1 text-sm font-medium text-navy" href={company.phone.href}>
              Call {company.phone.display}
            </a>
            <a className="rounded-full border border-white/40 px-3 py-1 text-sm font-medium text-white" href={`mailto:${company.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="shrink-0" aria-label={`${company.brandName} home`}>
          <Image
            src={company.logo.src}
            alt={company.logo.alt}
            width={company.logo.width}
            height={company.logo.height}
            priority
            className="h-16 w-auto sm:h-[4.75rem]"
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={`border-b-2 pb-1 text-sm font-medium ${
                isActive(pathname, item.href)
                  ? "border-blue text-blue"
                  : "border-transparent text-ink hover:border-line hover:text-blue"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-[1.75rem] bg-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-purple lg:inline-block"
        >
          Get in touch
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded-[1.75rem] border border-line px-3 py-2 text-sm font-medium text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {mainNavigation.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block py-3 text-lg text-navy"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-4 inline-block rounded-[1.75rem] bg-blue px-4 py-3 text-sm font-medium text-white">
            Get in touch
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
