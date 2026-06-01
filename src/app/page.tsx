import { client } from "@/sanity/client";
import { getArticlesQuery, Article } from "@/sanity/queries";
import PaperCard from "@/components/PaperCard";
import { STATIC_FALLBACK_ARTICLES } from "@/sanity/fallbackData";
import { Metadata } from "next";

export const revalidate = 60; // ISR - revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Leanity Labs | Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học Tích cực & Khoa học về Hiệu suất",
  description: "Leanity Labs là ấn phẩm chuyên khảo cứu, biên dịch và hệ thống hóa các tri thức về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  let articles: Article[] = [];
  try {
    articles = await client.fetch<Article[]>(getArticlesQuery);
  } catch (err) {
    console.error("Failed to fetch articles from Sanity, using fallback:", err);
  }

  const displayArticles = articles && articles.length > 0 ? articles : STATIC_FALLBACK_ARTICLES;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://leanitylabs.com/#website",
        "url": "https://leanitylabs.com",
        "name": "Leanity Labs",
        "description": "Ấn phẩm biên soạn & chia sẻ kiến thức khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất",
        "publisher": {
          "@id": "https://leanitylabs.com/#organization"
        },
        "inLanguage": "vi-VN"
      },
      {
        "@type": "Organization",
        "@id": "https://leanitylabs.com/#organization",
        "name": "Leanity Labs",
        "alternateName": "Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học & Hiệu suất",
        "url": "https://leanitylabs.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://leanitylabs.com/logo.svg",
          "width": "512",
          "height": "512"
        },
        "email": "contact@leanitylabs.com",
        "telephone": "+84-865-642-110",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "36 Đường số 4, Phường Thông Tây Hội",
          "addressLocality": "Thành phố Hồ Chí Minh",
          "addressRegion": "TP. Hồ Chí Minh",
          "postalCode": "71426",
          "addressCountry": "VN"
        },
        "sameAs": [
          "https://github.com/leanity-labs",
          "https://linkedin.com/in/leanitylabs"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
