import Link from 'next/link';

export default function RightSidebar() {
  return (
    <aside 
      className="w-[320px] p-10 sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto shrink-0 hidden lg:flex flex-col gap-9 bg-bg-dark [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" 
      aria-label="Right Sidebar Widgets"
    >
      <div className="flex flex-col">
        <h3 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.05em] text-text-primary mb-[18px]">
          Bản tin chọn lọc
        </h3>
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="w-4 h-4 rounded-full bg-text-secondary text-white text-[0.5rem] font-extrabold flex items-center justify-center">L</span>
              <span className="font-semibold text-text-primary">Ban Nghiên Cứu Hệ Thống</span>
            </div>
            <Link href="/post/ung-dung-dinh-luat-little-va-ly-thuyet-hang-doi-mm1" className="font-serif text-[0.92rem] font-bold leading-[1.4] text-text-primary cursor-pointer transition-colors duration-200 hover:text-primary no-underline">
              Ứng dụng định luật Little giảm 42% thời gian chờ quy trình số.
            </Link>
            <span className="text-[0.72rem] text-text-muted">2 ngày trước</span>
          </div>
 
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="w-4 h-4 rounded-full bg-text-secondary text-white text-[0.5rem] font-extrabold flex items-center justify-center">T</span>
              <span className="font-semibold text-text-primary">Ban Khoa Học Hiệu Suất</span>
            </div>
            <Link href="/post/mo-hinh-hoa-so-do-dong-gia-tri-so" className="font-serif text-[0.92rem] font-bold leading-[1.4] text-text-primary cursor-pointer transition-colors duration-200 hover:text-primary no-underline">
              Toyota Production System trong văn phòng công nghệ: Từ lãng phí vật lý đến lãng phí số.
            </Link>
            <span className="text-[0.72rem] text-text-muted">1 tuần trước</span>
          </div>
 
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[0.75rem]">
              <span className="w-4 h-4 rounded-full bg-text-secondary text-white text-[0.5rem] font-extrabold flex items-center justify-center">A</span>
              <span className="font-semibold text-text-primary">Ban Biên Soạn Tinh Gọn</span>
            </div>
            <Link href="/post/can-bang-takt-time-so" className="font-serif text-[0.92rem] font-bold leading-[1.4] text-text-primary cursor-pointer transition-colors duration-200 hover:text-primary no-underline">
              Cân bằng Takt Time giữa con người và robot tự động hóa.
            </Link>
            <span className="text-[0.72rem] text-text-muted">May 15</span>
          </div>
        </div>
        <Link href="/" className="text-[0.78rem] text-primary no-underline mt-[14px] font-semibold hover:underline">
          Xem danh sách đầy đủ
        </Link>
      </div>

      <div className="flex flex-col">
        <h3 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.05em] text-text-primary mb-[18px]">
          Chủ đề Nghiên cứu
        </h3>
        <div className="flex flex-wrap gap-2">
          {["System Science", "Positive Psychology", "Performance Science", "Little's Law", "TPS Toyota", "Flow Dynamics"].map((topic) => (
            <button key={topic} className="bg-bg-surface border border-border-color py-1.5 px-3.5 rounded-full font-sans text-[0.75rem] font-medium text-text-secondary cursor-pointer transition-all duration-200 hover:bg-text-primary hover:text-white hover:border-text-primary">
              {topic}
            </button>
          ))}
        </div>
      </div>

      <footer className="border-t border-border-color pt-5 flex flex-wrap gap-3">
        <Link href="/about" className="no-underline text-text-muted text-[0.75rem] transition-colors duration-200 hover:text-text-primary">Triết lý</Link>
        <Link href="/" className="no-underline text-text-muted text-[0.75rem] transition-colors duration-200 hover:text-text-primary">Ấn bản</Link>
        <Link href="/contact" className="no-underline text-text-muted text-[0.75rem] transition-colors duration-200 hover:text-text-primary">Hợp tác</Link>
        <div className="w-full text-[0.7rem] text-text-muted mt-2">&copy; 2026 Leanity Labs.</div>
      </footer>
    </aside>
  );
}
