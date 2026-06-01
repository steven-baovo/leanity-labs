import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full h-[57px] bg-bg-dark border-b border-border-dark flex items-center justify-between px-6 z-[200]">
      <div className="flex items-center gap-4">
        <button
          className="bg-transparent border-none cursor-pointer text-text-secondary flex items-center justify-center p-1 transition-all duration-200 hover:text-text-primary"
          aria-label="Mở menu điều hướng"
          title="Menu"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        
        <Link href="/" className="flex items-center gap-2 no-underline" aria-label="Leanity Labs Home">
          <svg className="w-[18px] h-[18px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="skewX(-14) translate(24, 0)">
              <rect x="20" y="5" width="25" height="90" rx="7" fill="#5e6ad2" />
              <rect x="53" y="55" width="25" height="40" rx="7" fill="#5e6ad2" />
            </g>
          </svg>
          <span className="font-serif font-bold text-[1.15rem] tracking-[-0.02em] text-text-primary">
            Leanity <span className="text-primary">Labs</span>
          </span>
        </Link>

        <div className="relative hidden md:flex items-center bg-bg-surface rounded-full py-2 px-4 pl-10 w-[240px] h-[38px] transition-all duration-200 border border-transparent focus-within:bg-white focus-within:border-border-dark">
          <svg className="absolute left-3.5 w-4 h-4 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Tìm kiếm nghiên cứu..." 
            aria-label="Tìm kiếm bài nghiên cứu" 
            className="bg-transparent border-none outline-none w-full font-sans text-[0.82rem] text-text-primary placeholder:text-text-muted"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <Link 
          href="/contact" 
          className="flex items-center gap-2 bg-[#191919] text-white rounded-full py-2 px-4 font-sans text-sm font-semibold transition hover:bg-primary no-underline" 
          title="Liên hệ Ban Biên soạn Leanity Labs"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Liên hệ</span>
        </Link>
        
        <button className="relative flex items-center justify-center p-1 text-text-secondary transition hover:text-text-primary" aria-label="Xem thông báo ấn bản mới" title="Thông báo">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-[2px] right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border border-border-dark" title="Ban thư ký Học thuật Leanity Labs">
          <span className="w-full h-full bg-[#e8f3ff] text-primary font-sans text-[0.72rem] font-bold flex items-center justify-center">LL</span>
        </div>
      </div>
    </header>
  );
}
