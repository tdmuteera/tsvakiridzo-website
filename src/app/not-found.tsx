import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">404</p>
      <h1 className="mt-3 font-serif text-4xl text-navy">This page is not on the site.</h1>
      <p className="mt-4 leading-7 text-muted">The address may be mistyped, or the page has not been published.</p>
      <Link href="/" className="mt-6 inline-block text-sm font-medium text-blue underline">
        Return to the homepage
      </Link>
    </div>
  );
}
