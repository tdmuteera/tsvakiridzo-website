import Link from "next/link";
import { company } from "@/content/company";
import { publishedArticles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    `Notes, explanations and company updates from ${company.legalName}. Articles appear here only when the company publishes them.`,
  path: "/insights",
});

export default function InsightsPage() {
  const articles = publishedArticles();

  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Insights</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Insights
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            Announcements and practical notes from the company will appear here.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-16">
        {articles.length === 0 ? (
          <div className="border border-line p-8">
            <h2 className="font-serif text-2xl text-navy">No articles yet</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              Nothing has been published. Check back for company notes, or ask a question directly.
            </p>
            <Link href="/contact" className="mt-5 inline-block rounded-[1.75rem] bg-blue px-4 py-2.5 text-sm font-medium text-white hover:bg-purple">
              Ask a question
            </Link>
          </div>
        ) : (
          <ul className="divide-y divide-line border-y border-line">
            {articles.map((article) => (
              <li key={article.slug} className="py-6">
                <p className="text-xs uppercase tracking-[0.14em] text-blue">
                  {article.category} · {article.date}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-navy">
                  <Link href={`/insights/${article.slug}`} className="hover:text-blue">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{article.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
