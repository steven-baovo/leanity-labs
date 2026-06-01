"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 w-full h-[57px] bg-bg-dark border-b border-border-dark flex items-center justify-between px-6 z-[200]">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-transparent border-none cursor-pointer text-text-secondary flex items-center justify-center p-1 transition-all duration-200 hover:text-text-primary active:scale-95"
            aria-label="Mở menu điều hướng"
            title="Menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
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
        </div>
      </header>

      {/* Dropdown Menu Panel (Leanity Labs Style) */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/15 backdrop-blur-[1px] z-[190] transition-opacity duration-300"
          />
          
          {/* Navigation Dropdown Box */}
          <div className="fixed top-[57px] left-0 w-full bg-bg-dark border-b border-border-dark z-[195] shadow-overlay transition-all duration-300">
            <div className="max-w-[1200px] mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Main Pages */}
              <div className="flex flex-col gap-4">
                <h4 className="font-sans text-[0.78rem] font-bold uppercase tracking-[0.05em] text-primary">Các trang chính</h4>
                <nav className="flex flex-col gap-3">
                  {[
                    { label: "Trang chủ", href: "/" },
                    { label: "Về chúng tôi", href: "/about" },
                    { label: "Chính sách biên soạn", href: "/editorial-policy" },
                    { label: "Liên hệ", href: "/contact" }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-[1.05rem] font-bold text-text-primary hover:text-primary transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Column 2: Research Areas */}
              <div className="flex flex-col gap-4">
                <h4 className="font-sans text-[0.78rem] font-bold uppercase tracking-[0.05em] text-primary">Chủ đề nghiên cứu</h4>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Khoa học hệ thống (System Science)", desc: "Mô phỏng tối ưu quy trình và cấu trúc hệ thống." },
                    { label: "Tâm lý học tích cực (Positive Psychology)", desc: "Trạng thái trôi chảy (Flow State) và sức khỏe nhận thức." },
                    { label: "Khoa học về hiệu suất (Performance Science)", desc: "Triết lý TPS, Takt Time và nhịp điệu làm việc số." }
                  ].map((topic, i) => (
                    <Link
                      key={i}
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col no-underline"
                    >
                      <span className="font-sans text-[0.9rem] font-bold text-text-primary group-hover:text-primary transition-colors duration-200">{topic.label}</span>
                      <span className="font-sans text-[0.75rem] text-text-muted mt-0.5">{topic.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Policy & Legal */}
              <div className="flex flex-col gap-4">
                <h4 className="font-sans text-[0.78rem] font-bold uppercase tracking-[0.05em] text-primary">Pháp lý & quy chuẩn</h4>
                <nav className="flex flex-col gap-3">
                  {[
                    { label: "Chính sách bảo mật", href: "/privacy" },
                    { label: "Điều khoản sử dụng", href: "/terms" }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-[0.88rem] text-text-secondary hover:text-primary transition-colors duration-200 no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-4 pt-4 border-t border-border-color">
                  <p className="font-sans text-[0.72rem] text-text-muted leading-relaxed m-0">
                    © 2026 Leanity Labs.<br />Đăng ký hoạt động nghiên cứu khoa học và phát triển công nghệ độc lập.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
