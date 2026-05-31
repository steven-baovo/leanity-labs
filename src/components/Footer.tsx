import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-color pt-16 pb-8 font-sans mt-auto" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Col 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 no-underline mb-2" aria-label="Leanity Labs Home">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#5e6ad2" stroke="#5e6ad2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-serif font-bold text-[1.15rem] tracking-[-0.02em] text-text-primary">
              Leanity <span className="text-primary">Labs</span>
            </span>
          </Link>
          <p className="text-[0.85rem] leading-[1.6] text-text-secondary">
            Sáng kiến độc lập về nghiên cứu khoa học hệ thống, toán học vận hành và chuyển đổi tinh gọn số. Chúng tôi hệ thống hóa tri thức học thuật giúp kiến tạo hiệu năng tối thượng cho doanh nghiệp.
          </p>
        </div>

        {/* Col 2: Academic & Philosophy */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-[0.9rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-2">Học Thuật & Dự Án</h4>
          <ul className="list-none flex flex-col gap-3 m-0 p-0">
            <li><Link href="/#publications" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Ấn Bản Nghiên Cứu</Link></li>
            <li><Link href="/#philosophy" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Triết Lý Vận Hành</Link></li>
            <li><Link href="/about#editorial-policy" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Quy trình Kiểm duyệt</Link></li>
            <li><a href="https://leanity.com" target="_blank" rel="noopener noreferrer" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Leanity SaaS</a></li>
          </ul>
        </div>

        {/* Col 3: Compliance & Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-[0.9rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-2">Chính Sách & Pháp Lý</h4>
          <ul className="list-none flex flex-col gap-3 m-0 p-0">
            <li><Link href="/about" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Giới thiệu Dự án</Link></li>
            <li><Link href="/privacy" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Chính sách Bảo mật</Link></li>
            <li><Link href="/terms" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Điều khoản Sử dụng</Link></li>
            <li><Link href="/about#contributors" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Ban Biên soạn</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Connection */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-[0.9rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-2">Kết Nối</h4>
          <ul className="list-none flex flex-col gap-3 m-0 p-0">
            <li><Link href="/#connect" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Đề xuất Hợp tác</Link></li>
            <li><Link href="/contact" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Văn phòng Liên hệ</Link></li>
            <li><a href="mailto:editorial@leanitylabs.com" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">editorial@leanitylabs.com</a></li>
            <li><Link href="/about#funding" className="no-underline text-[0.85rem] text-text-secondary transition-colors hover:text-primary">Minh bạch Tài trợ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[0.8rem] text-text-muted text-center md:text-left">
          &copy; 2026 Leanity Labs. Đăng ký hoạt động nghiên cứu khoa học và phát triển công nghệ độc lập.
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/leanity-labs" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors hover:text-primary" title="GitHub" aria-label="GitHub">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors hover:text-primary" title="LinkedIn" aria-label="LinkedIn">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors hover:text-primary" title="Google Scholar" aria-label="Google Scholar">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-5"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
