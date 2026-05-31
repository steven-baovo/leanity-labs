import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đánh giá Năng lực Logic (IQ) | Leanity Labs",
  description: "Hệ thống bài kiểm tra đánh giá năng lực logic và phân tích hệ thống.",
};

export default function IQTestPage() {
  return (
    <div className="max-w-[800px] mx-auto py-10">
      <header className="mb-10 text-center">
        <h1 className="font-serif font-extrabold text-[2.5rem] mb-4 text-text-primary">Đánh giá Năng lực Logic (IQ)</h1>
        <p className="text-text-secondary text-[1.1rem]">Bài test mô phỏng đánh giá tư duy hệ thống và khả năng phân tích mô hình học thuật.</p>
      </header>

      <div className="bg-bg-surface border border-border-color rounded-default p-8 shadow-subtle">
        {/* Placeholder for Interactive React Quiz Component */}
        <div className="text-center py-16">
          <svg className="w-16 h-16 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <h2 className="font-sans font-bold text-xl mb-2">Hệ thống bài test đang được chuẩn bị</h2>
          <p className="text-text-muted">Các module Interactive Client-side đang được phát triển.</p>
        </div>
      </div>
    </div>
  );
}
