import { MetadataRoute } from 'next';
import { STATIC_FALLBACK_ARTICLES } from '@/sanity/fallbackData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leanitylabs.com';

  // Các trang tĩnh chính
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/editorial-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Các trang bài viết động từ fallback data
  const postPages = STATIC_FALLBACK_ARTICLES.map((article) => ({
    url: `${baseUrl}/post/${article.slug.current}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
