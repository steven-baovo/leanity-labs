import { client } from "@/sanity/client";
import { getArticleBySlugQuery, Article } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 60;

import { STATIC_FALLBACK_ARTICLES } from "@/sanity/fallbackData";

async function getArticle(slug: string): Promise<Article | null> {
  // Kiểm tra dữ liệu bài viết dự phòng (fallback) trước để hiển thị tức thì
  const fallback = STATIC_FALLBACK_ARTICLES.find(a => a.slug.current === slug);
  if (fallback) return fallback;

  try {
    const article = await client.fetch<Article>(getArticleBySlugQuery, { slug });
    return article || null;
  } catch (err) {
    console.error(`Failed to fetch article for slug: ${slug}`, err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) return { title: 'Bài viết không tồn tại | Leanity Labs' };
  
  return {
    title: `${article.title} | Leanity Labs`,
    description: article.excerpt || "Bài phân tích nghiên cứu khoa học chuyên sâu từ Leanity Labs.",
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.imageUrl ? [article.imageUrl] : [],
    }
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-[800px] mx-auto pb-16">
      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-bg-surface py-1 px-3 rounded-full text-[0.75rem] font-bold text-primary uppercase tracking-[0.05em]">
            {article.categoryText || 'Nghiên cứu'}
          </span>
          <span className="text-text-muted text-[0.8rem]">{article.readTime || 5} phút đọc</span>
        </div>
        
        <h1 className="font-serif font-extrabold text-[clamp(2.2rem,5vw,3rem)] leading-[1.1] mb-6 tracking-[-0.02em] text-text-primary">
          {article.title}
        </h1>
        
        {article.excerpt && (
          <p className="text-[1.15rem] text-text-secondary leading-[1.5] font-normal mb-8 border-l-4 border-border-color pl-4 italic">
            {article.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between py-4 border-y border-border-color">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">
              {article.authorName ? article.authorName.charAt(0).toUpperCase() : 'LL'}
            </div>
            <div>
              <div className="font-semibold text-[0.9rem] text-text-primary">{article.authorName || 'Leanity Labs'}</div>
              <div className="text-[0.75rem] text-text-muted">
                {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content using Portable Text */}
      <div className="max-w-none">
        {article.body ? (
          <PortableText value={article.body} components={RichTextComponents} />
        ) : (
          <p className="italic text-text-muted">Nội dung bài viết đang được cập nhật.</p>
        )}
      </div>
      
      {/* Abstract and Citations */}
      {(article.abstract || (article.citations && article.citations.length > 0)) && (
        <div className="mt-16 bg-bg-surface border border-border-color rounded-default p-6">
          {article.abstract && (
            <div className="mb-6">
              <h4 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.05em] text-primary mb-3">Tóm tắt học thuật</h4>
              <p className="font-serif text-[0.85rem] text-text-primary leading-[1.6]">{article.abstract}</p>
            </div>
          )}
          
          {article.citations && article.citations.length > 0 && (
            <div>
              <h4 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.05em] text-primary mb-3">Tài liệu tham khảo</h4>
              <ul className="list-none flex flex-col gap-1.5 m-0 p-0">
                {article.citations.map((citation, idx) => (
                  <li key={idx} className="text-[0.75rem] text-text-secondary pl-2.5 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                    {citation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
