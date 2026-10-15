import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, publishedArticles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return publishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <nav className="text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/insights" className="hover:text-blue">Insights</Link>
      </nav>
      <header className="mt-6">
        <p className="text-xs uppercase tracking-[0.14em] text-blue">
          {article.category} · {article.date}
        </p>
        <h1 className="mt-3 font-serif text-4xl text-navy">{article.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{article.summary}</p>
      </header>
      <div className="mt-8 space-y-5 leading-7 text-ink">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
