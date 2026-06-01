import Link from 'next/link';
import { client } from "@/sanity/client";
import { Article } from "@/sanity/queries";
import { groq } from "next-sanity";
import { STATIC_FALLBACK_ARTICLES } from '@/sanity/fallbackData';

const getWeeklySignalArticlesQuery = groq`
  *[_type == "post" && "Weekly Signal" in tags] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    publishedAt,
    "authorName": author->name,
    "category": category->slug.current,
    "categoryText": category->title,
    readTime
  }
`;

async function getWeeklySignalArticles(): Promise<Article[]> {
  try {
    const articles = await client.fetch<Article[]>(getWeeklySignalArticlesQuery);
    if (articles && articles.length > 0) return articles;
  } catch (err) {
    console.error("Failed to fetch weekly signal articles", err);
  }
  return STATIC_FALLBACK_ARTICLES.filter(a => a.tags && a.tags.includes("Weekly Signal"));
}

interface Category {
  _id: string;
  title: string;
  slug: string;
}

const getCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`;

async function getCategories(): Promise<Category[]> {
  try {
    const categories = await client.fetch<Category[]>(getCategoriesQuery);
    if (categories && categories.length > 0) return categories;
  } catch (err) {
    console.error("Failed to fetch categories", err);
  }
  return [
    { _id: "cat-1", title: "System Science", slug: "system-science" },
    { _id: "cat-2", title: "Positive Psychology", slug: "positive-psychology" },
    { _id: "cat-3", title: "Performance Science", slug: "performance-science" },
    { _id: "cat-4", title: "Little's Law", slug: "littles-law" },
    { _id: "cat-5", title: "TPS Toyota", slug: "tps-toyota" },
    { _id: "cat-6", title: "Flow Dynamics", slug: "flow-dynamics" }
  ];
}

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', { month: 'short', day: 'numeric' });
  } catch (e) {
    return dateStr;
  }
}

export default async function RightSidebar() {
  const weeklySignalArticles = await getWeeklySignalArticles();
  const categories = await getCategories();

  return (
    <aside 
      className="w-[320px] p-10 sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto shrink-0 hidden lg:flex flex-col gap-9 bg-bg-dark [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" 
      aria-label="Right Sidebar Widgets"
    >
      <div className="flex flex-col">
        <h3 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.05em] text-text-primary mb-[18px]">
          Weekly Signal
        </h3>
        <div className="flex flex-col gap-[18px]">
          {weeklySignalArticles.map((article) => {
            const initial = article.authorName ? article.authorName.charAt(0).toUpperCase() : 'L';
            return (
              <div key={article._id} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[0.75rem]">
                  <span className="w-4 h-4 rounded-full bg-text-secondary text-white text-[0.5rem] font-extrabold flex items-center justify-center">
                    {initial}
                  </span>
                  <span className="font-semibold text-text-primary">{article.authorName || 'Ban Biên soạn'}</span>
                </div>
                <Link 
                  href={`/post/${article.slug.current}`} 
                  className="font-serif text-[0.92rem] font-bold leading-[1.4] text-text-primary cursor-pointer transition-colors duration-200 hover:text-primary no-underline"
                >
                  {article.title}
                </Link>
                <span className="text-[0.72rem] text-text-muted">{formatDate(article.publishedAt)}</span>
              </div>
            );
          })}
        </div>
        <Link href="/" className="text-[0.78rem] text-primary no-underline mt-[14px] font-semibold hover:underline">
          Xem danh sách đầy đủ
        </Link>
      </div>

      <div className="flex flex-col">
        <h3 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.05em] text-text-primary mb-[18px]">
          Chủ đề Nghiên cứu
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category._id} className="bg-bg-surface border border-border-color py-1.5 px-3.5 rounded-full font-sans text-[0.75rem] font-medium text-text-secondary cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white hover:border-text-primary">
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <footer className="border-t border-border-color pt-5 flex flex-wrap gap-3">
        <Link href="/about" className="no-underline text-text-muted text-[0.75rem] transition-colors duration-200 hover:text-text-primary">Triết lý</Link>
        <Link href="/" className="no-underline text-text-muted text-[0.75rem] transition-colors duration-200 hover:text-text-primary">Ấn bản</Link>
        <Link href="/contact" className="no-underline text-text-muted text-[0.75rem] transition-colors duration-200 hover:text-text-primary">Hợp tác</Link>
        <div className="w-full text-[0.7rem] text-text-muted mt-2">&copy; 2026 Leanity Labs.</div>
      </footer>
    </aside>
  );
}
