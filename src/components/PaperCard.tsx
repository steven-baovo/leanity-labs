import Link from 'next/link';
import { Article } from '@/sanity/queries';
import { calculateReadTime } from '@/utils/readTime';

interface PaperCardProps {
  article: Article;
}

export default function PaperCard({ article }: PaperCardProps) {
  const readTime = calculateReadTime(article.body, article.readTime);

  // Simple format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { month: 'short', day: 'numeric' });
  };

  return (
    <article className="bg-transparent border-b border-border-color py-6 flex flex-col group">
      <div className="flex items-center gap-2 text-[0.75rem] text-text-secondary mb-2.5 flex-wrap">
        <span className="w-[18px] h-[18px] rounded-full bg-primary text-white text-[0.5rem] font-extrabold flex items-center justify-center">
          {article.authorName ? article.authorName.charAt(0).toUpperCase() : 'LL'}
        </span>
        <span className="font-semibold text-text-primary">{article.authorName || 'Leanity Labs Editorial Board'}</span>
        <span className="text-text-muted">·</span>
        <span className="paper-date">{formatDate(article.publishedAt)}</span>
        <span className="text-text-muted">·</span>
        <span className="bg-bg-surface py-[1px] px-2 rounded-full text-[0.68rem] font-medium text-text-secondary">
          {article.categoryText || 'Nghiên cứu'}
        </span>
      </div>
      
      <div className="flex gap-6 justify-between items-start">
        <div className="flex-1">
          <Link href={`/post/${article.slug.current}`} className="no-underline">
            <h3 className="font-serif text-[1.25rem] font-bold leading-[1.35] mb-1.5 text-text-primary group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-text-secondary text-[0.85rem] leading-[1.5] mb-[14px] line-clamp-2">
              {article.excerpt || 'Bài phân tích nghiên cứu khoa học chuyên sâu.'}
            </p>
          </Link>
        </div>
        
        {article.imageUrl && (
          <div className="w-[100px] h-[70px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover border border-border-color rounded-default"
            />
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-3">
          <span className="text-[0.75rem] text-text-muted">{readTime} phút đọc</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-1.5 cursor-pointer text-text-secondary hover:text-text-primary transition-colors bg-transparent border-none p-0">
            <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
            </svg>
            <span className="text-sm font-medium">{article.claps || 0}</span>
          </button>
          <button className="bg-transparent border-none text-text-secondary hover:text-text-primary cursor-pointer p-0" aria-label="Tải về báo cáo PDF" title="Tải PDF">
            <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
