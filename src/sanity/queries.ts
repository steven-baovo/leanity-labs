import { groq } from "next-sanity";

export const getArticlesQuery = groq`
  *[_type == "post" || _type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    "authorName": author->name,
    "category": category->slug.current,
    "categoryText": category->title,
    readTime,
    claps,
    abstract,
    citations,
    "imageUrl": mainImage.asset->url
  }
`;

export const getArticleBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    "authorName": author->name,
    "category": category->slug.current,
    "categoryText": category->title,
    readTime,
    claps,
    citations,
    tags,
    abstract,
    "imageUrl": mainImage.asset->url
  }
`;

export const getRelatedArticlesQuery = groq`
  *[_type == "post" && category->slug.current == $categorySlug && _id != $currentId] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "authorName": author->name,
    "category": category->slug.current,
    "categoryText": category->title,
    readTime,
    "imageUrl": mainImage.asset->url
  }
`;

export interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  body?: any[];
  publishedAt: string;
  authorName?: string;
  category?: string;
  categoryText?: string;
  readTime?: number;
  claps?: number;
  abstract?: string;
  citations?: string[];
  tags?: string[];
  imageUrl?: string;
}
