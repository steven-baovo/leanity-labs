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
    <>
      <div className="flex gap-6 border-b border-border-dark mb-8 w-full max-w-[800px] mx-auto">
        <button className="bg-transparent border-none pb-3.5 text-[0.88rem] font-semibold text-text-primary cursor-pointer relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[2px] after:bg-text-primary">
          Ấn Bản Mới
        </button>
        <button className="bg-transparent border-none pb-3.5 text-[0.88rem] font-medium text-text-secondary hover:text-text-primary cursor-pointer transition-colors">
          Triết Lý Vận Hành
        </button>
      </div>

      <div className="w-full max-w-[800px] mx-auto">
        {/* Pinned Story (Hero) */}
        <header className="mb-8 border-b border-border-color pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-border-color rounded-full font-sans text-[0.7rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-4">
            <span className="w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_6px_#10b981]"></span>
            Thực thể Nghiên cứu Khoa học của Leanity SaaS
          </div>
          <h1 className="font-serif font-extrabold text-[clamp(2rem,4vw,2.5rem)] leading-[1.15] mb-4 tracking-[-0.02em] text-text-primary">
            Học Thuật Kiến Tạo Hiệu Năng Tối Thượng.
          </h1>
          <p className="text-[1.05rem] text-text-secondary leading-[1.5] font-normal">
            Chúng tôi tổng hợp, nghiên cứu và hệ thống hóa các định luật vận hành kinh điển thành các mô hình toán học số hóa – bộ não khoa học đứng sau công nghệ tối ưu hóa của <strong className="font-bold text-text-primary">Leanity SaaS</strong>.
          </p>
        </header>

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
    </>
  );
}
