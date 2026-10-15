/**
 * Insights and resources.
 *
 * Add an article when the company has something factual to publish:
 * a service note, a practical explanation, or a company announcement.
 * Do not add invented case studies or news.
 *
 * Write the body as paragraphs. Set published to true when it should appear.
 */

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  body: string[];
  published: boolean;
};

export const articles: Article[] = [];

export function publishedArticles() {
  return articles
    .filter((article) => article.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string) {
  return publishedArticles().find((article) => article.slug === slug);
}
