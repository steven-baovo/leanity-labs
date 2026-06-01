import { client } from "@/sanity/client";
import { getArticleBySlugQuery, Article } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { extractExternalLinks, fetchTitleFromUrl } from "@/utils/extractLinks";

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
    title: article.title,
    description: article.excerpt || "Bài phân tích nghiên cứu khoa học chuyên sâu từ Leanity Labs.",
    alternates: {
      canonical: `/post/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt || "Bài phân tích nghiên cứu khoa học chuyên sâu từ Leanity Labs.",
      url: `https://leanitylabs.com/post/${slug}`,
      type: "article",
      publishedTime: article.publishedAt ? new Date(article.publishedAt).toISOString() : undefined,
      authors: [article.authorName || "Leanity Labs"],
      images: article.imageUrl ? [{ url: article.imageUrl }] : [],
    }
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  // Tự động trích xuất và truy xuất tiêu đề cho các link tài liệu ngoài
  const extracted = article.body ? extractExternalLinks(article.body) : [];
  const autoCitations = await Promise.all(
    extracted.map(async (link) => {
      const title = await fetchTitleFromUrl(link.href);
      return {
        text: link.text,
        href: link.href,
        resolvedTitle: title || link.text,
      };
    })
  );

  const hasCitations = (article.citations && article.citations.length > 0) || autoCitations.length > 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://leanitylabs.com/post/${slug}#blogposting`,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://leanitylabs.com/#website",
      "url": "https://leanitylabs.com",
      "name": "Leanity Labs"
    },
    "headline": article.title,
    "description": article.excerpt || "Bài phân tích nghiên cứu khoa học chuyên sâu từ Leanity Labs.",
    "datePublished": article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date().toISOString(),
    "dateModified": article.publishedAt ? new Date(article.publishedAt).toISOString() : new Date().toISOString(),
    "mainEntityOfPage": `https://leanitylabs.com/post/${slug}`,
    "image": article.imageUrl ? [article.imageUrl] : ["https://leanitylabs.com/logo.png"],
    "author": {
      "@type": "Organization",
      "@id": "https://leanitylabs.com/#organization",
      "name": article.authorName || "Leanity Labs"
    },
    "publisher": {
      "@id": "https://leanitylabs.com/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      {(article.abstract || hasCitations) && (
        <div className="mt-16 bg-bg-surface border border-border-color rounded-default p-6">
          {article.abstract && (
            <div className="mb-6">
              <h4 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.05em] text-primary mb-3">Tóm tắt học thuật</h4>
              <p className="font-serif text-[0.85rem] text-text-primary leading-[1.6]">{article.abstract}</p>
            </div>
          )}
          
          {hasCitations && (
            <div>
              <h4 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.05em] text-primary mb-3">Tài liệu tham khảo</h4>
              <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
                {/* Tài liệu nhập tay thủ công */}
                {article.citations?.map((citation, idx) => (
                  <li key={`manual-${idx}`} className="text-[0.75rem] text-text-secondary pl-2.5 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                    {citation}
                  </li>
                ))}
                {/* Tài liệu trích xuất tự động */}
                {autoCitations.map((citation, idx) => (
                  <li key={`auto-${idx}`} className="text-[0.75rem] text-text-secondary pl-2.5 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                    <span className="font-medium text-text-primary">{citation.resolvedTitle}</span>
                    {" — "}
                    <a href={citation.href} target="_blank" rel="noreferrer noopener" className="text-primary hover:underline break-all">
                      {citation.href}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Department Bio Box for high E-E-A-T */}
      <div className="mt-12 border-t border-border-color pt-8 flex gap-4 items-start">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary text-[0.85rem] font-serif font-extrabold flex items-center justify-center shrink-0">
          {article.authorName ? article.authorName.substring(0, 2).toUpperCase() : 'LL'}
        </div>
        <div>
          <h4 className="font-sans text-[0.95rem] font-bold text-text-primary mb-1.5">{article.authorName || 'Ban Biên tập Leanity Labs'}</h4>
          <p className="text-[0.85rem] text-text-secondary leading-[1.6] m-0">
            {article.authorName === "Ban Biên soạn Khoa học Hệ thống" && 
              "Bộ phận chuyên môn chịu trách nhiệm khảo cứu chuyên sâu, biên dịch và tổng hợp các công trình khoa học kinh điển về lý thuyết hệ thống, lý thuyết hàng đợi và mô phỏng tối ưu dòng chảy."}
            {article.authorName === "Ban Biên soạn Tâm lý học Tích cực" && 
              "Nhóm chuyên trách khảo cứu và đúc kết các chuyên luận khoa học về trạng thái trải nghiệm tối ưu (Flow State), tư duy phát triển và năng lực tự điều chỉnh năng lượng nhận thức lành mạnh."}
            {article.authorName === "Ban Biên soạn Khoa học về Hiệu suất" && 
              "Bộ phận chuyên môn chịu trách nhiệm nghiên cứu các quy chuẩn nhịp độ (Takt Time), phương pháp giảm tải nhận thức và thiết lập nhịp điệu sinh học tối ưu khi con người phối hợp cùng công nghệ số."}
            {(!article.authorName || (article.authorName !== "Ban Biên soạn Khoa học Hệ thống" && article.authorName !== "Ban Biên soạn Tâm lý học Tích cực" && article.authorName !== "Ban Biên soạn Khoa học về Hiệu suất")) && 
              "Ban biên soạn học thuật tích hợp tại Leanity Labs, chuyên trách khảo cứu, biên dịch và hệ thống hóa các tri thức về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất."}
          </p>
          <div className="mt-3">
            <Link href="/editorial-policy" className="text-[0.78rem] text-primary font-semibold hover:underline no-underline">
              Tìm hiểu Quy chuẩn Biên soạn &amp; Thực nghiệm của chúng tôi &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
