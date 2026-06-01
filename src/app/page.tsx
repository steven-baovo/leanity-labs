import { client } from "@/sanity/client";
import { getArticlesQuery, Article } from "@/sanity/queries";
import PaperCard from "@/components/PaperCard";
import { STATIC_FALLBACK_ARTICLES } from "@/sanity/fallbackData";

export const revalidate = 60; // ISR - revalidate every 60 seconds

export default async function Home() {
  let articles: Article[] = [];
  try {
    articles = await client.fetch<Article[]>(getArticlesQuery);
  } catch (err) {
    console.error("Failed to fetch articles from Sanity, using fallback:", err);
  }

  const displayArticles = articles && articles.length > 0 ? articles : STATIC_FALLBACK_ARTICLES;

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="flex flex-col">
        {displayArticles.length > 0 ? (
          displayArticles.map((article) => (
            <PaperCard key={article._id} article={article} />
          ))
        ) : (
          <p className="text-center py-10 text-text-muted">Chưa có bài viết nào được xuất bản.</p>
        )}
      </div>
    </div>
  );
}
