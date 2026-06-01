import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quy chuẩn Biên soạn & Quy trình Thực nghiệm | Leanity Labs",
  description: "Quy chuẩn biên dịch chuyên sâu, chuyên luận tổng hợp đa nguồn và phương pháp nghiên cứu thực nghiệm độc lập tại Leanity Labs.",
  openGraph: {
    title: "Quy chuẩn Biên soạn & Quy trình Thực nghiệm | Leanity Labs",
    description: "Quy chuẩn biên dịch chuyên sâu, chuyên luận tổng hợp đa nguồn và phương pháp nghiên cứu thực nghiệm độc lập tại Leanity Labs.",
    type: "website",
    locale: "vi_VN",
    url: "https://leanitylabs.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <article className="max-w-[720px] mx-auto pb-16 pt-4 font-sans text-text-primary leading-[1.8] text-justify">

      {/* Page Header */}
      <header className="mb-10 border-b border-border-color pb-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-border-color rounded-full font-sans text-[0.7rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Quy chuẩn biên soạn
        </div>
        <h1 className="font-serif font-extrabold text-[clamp(2.2rem,5vw,3rem)] leading-[1.15] mb-4 tracking-[-0.02em] text-text-primary">
          Quy chuẩn Biên soạn<br />&amp; Quy trình Thực nghiệm
        </h1>
        <p className="text-[1.05rem] text-text-secondary leading-[1.6] font-normal italic">
          Bộ nguyên tắc tích hợp: Biên dịch chuyên sâu, Chuyên luận tổng hợp đa nguồn và Thực nghiệm khoa học độc lập tại Leanity Labs.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col gap-8 text-[0.95rem] text-text-primary">

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            1. Ba Trụ cột Hoạt động Học thuật
          </h2>
          <p>
            Tại <strong>Leanity Labs</strong>, chúng tôi hướng tới xây dựng một hệ sinh thái tri thức toàn diện, có tính thực tiễn cao và tôn trọng sâu sắc tính học thuật. Ban Biên soạn vận hành tích hợp theo ba nhánh hoạt động chính:
          </p>
          <div className="grid grid-cols-1 gap-4 mt-2">
            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-1.5">
              <strong className="text-text-primary text-[0.95rem] flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 text-primary text-[0.7rem] font-bold rounded-full flex items-center justify-center">1</span>
                Nhánh A: Biên dịch Tri thức Chuyên sâu (Academic Translation)
              </strong>
              <p className="text-[0.85rem] text-text-secondary leading-[1.6] m-0">
                Tiếp cận các công trình khoa học kinh điển hoặc công bố mới nhất từ các học giả quốc tế uy tín, tiến hành biên dịch chuẩn xác sang tiếng Việt với sự đối soát nghiêm ngặt về mặt thuật ngữ.
              </p>
            </div>
            
            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-1.5">
              <strong className="text-text-primary text-[0.95rem] flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 text-primary text-[0.7rem] font-bold rounded-full flex items-center justify-center">2</span>
                Nhánh B: Biên soạn Chuyên luận &amp; Tổng hợp Đa nguồn (Editorial Synthesis)
              </strong>
              <p className="text-[0.85rem] text-text-secondary leading-[1.6] m-0">
                Khảo cứu, liên kết và đối chiếu chéo nhiều công trình nghiên cứu khoa học cùng chủ đề. Từ đó, đúc kết ra những bài học cốt lõi, phương pháp giản hóa hoặc các khung ứng dụng (framework) độc quyền do đội ngũ chuyên môn Leanity Labs phát triển.
              </p>
            </div>

            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-1.5">
              <strong className="text-text-primary text-[0.95rem] flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 text-primary text-[0.7rem] font-bold rounded-full flex items-center justify-center">3</span>
                Nhánh C: Thực nghiệm &amp; Mô phỏng Độc lập (Original Research &amp; Testing)
              </strong>
              <p className="text-[0.85rem] text-text-secondary leading-[1.6] m-0">
                Thiết kế và phát triển các bộ công cụ đo lường nhận thức, các bài trắc nghiệm tâm lý học thực tế, cùng các thuật toán mô phỏng hệ thống do đội ngũ kỹ thuật và khoa học của chúng tôi tự thiết kế và vận hành.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            2. Quy chuẩn dành cho Biên dịch Chuyên sâu
          </h2>
          <p>
            Đối với các tài liệu dịch thuật trực tiếp từ các công trình quốc tế, Ban biên tập tuân thủ nghiêm ngặt các tiêu chí sau:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 m-0 text-text-secondary text-[0.92rem]">
            <li><strong>Chính xác thuật ngữ chuyên môn:</strong> Sử dụng các hệ thống từ điển thuật ngữ khoa học hệ thống, tâm lý học và khoa học hiệu suất chuẩn mực để bản địa hóa thuật ngữ một cách chuẩn xác nhất, không suy diễn làm sai lệch ý đồ của tác giả gốc.</li>
            <li><strong>Bảo toàn nội dung khoa học:</strong> Giữ nguyên vẹn cấu trúc lập luận, công thức toán học và các số liệu thực nghiệm gốc của nghiên cứu.</li>
            <li><strong>Minh bạch tác quyền:</strong> Luôn ghi rõ tên tác giả, năm công bố, nguồn tạp chí và đính kèm đường dẫn trực tiếp (Hyperlink) về tài liệu nguồn ở cuối bài dịch. Sẵn sàng gỡ bỏ bài đăng nếu nhận được yêu cầu chính thức từ tác giả gốc.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            3. Quy chuẩn Biên soạn Chuyên luận &amp; Tổng hợp Đa nguồn
          </h2>
          <p>
            Đối với các bài viết mang tính đúc kết và tổng hợp tri thức từ nhiều nghiên cứu khoa học, Ban Biên soạn tuân thủ quy trình kiểm soát chất lượng chặt chẽ:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 m-0 text-text-secondary text-[0.92rem]">
            <li><strong>Khảo cứu đa nguồn uy tín:</strong> Chỉ tuyển chọn chất liệu từ các bài báo khoa học đã qua bình duyệt ngang hàng (peer-reviewed) được công bố trên các hệ thống lớn như ResearchGate, Elsevier, Nature, Science.</li>
            <li><strong>Kiến tạo giá trị thực tiễn mới:</strong> Đi sâu phân tích điểm chung và điểm khác biệt giữa các nghiên cứu, từ đó đúc kết ra bài học thực tiễn, phương pháp giản hóa và mô hình ứng dụng cụ thể có tính độc bản để độc giả dễ ứng dụng vào đời sống.</li>
            <li><strong>Minh bạch thư mục tài liệu:</strong> Liệt kê đầy đủ và minh bạch danh mục tài liệu tham khảo đa nguồn ở cuối bài viết phục vụ cho mục đích đối chiếu học thuật.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            4. Quy trình Kiểm định Nghiên cứu &amp; Thực nghiệm Độc lập
          </h2>
          <p>
            Đối với các dự án thực nghiệm độc lập, các bộ trắc nghiệm tâm lý học nhận thức hoặc công cụ mô phỏng toán học do chúng tôi thiết kế, quy trình kiểm soát bắt buộc phải đi qua 3 bước nghiệm thu kỹ thuật:
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="bg-bg-surface border border-border-color rounded-default p-5">
              <strong className="text-text-primary block mb-1">Bước 1: Thiết lập Phương pháp luận dựa trên Lý thuyết (Methodology Design)</strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Các bộ công cụ đo lường (ví dụ như bài kiểm tra nhận thức, trắc nghiệm tâm lý) bắt buộc phải được xây dựng dựa trên các khung lý thuyết khoa học đã được công nhận rộng rãi trên thế giới.
              </p>
            </div>
            <div className="bg-bg-surface border border-border-color rounded-default p-5">
              <strong className="text-text-primary block mb-1">Bước 2: Bảo mật &amp; Đạo đức Dữ liệu (Ethical Data Collection)</strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Toàn bộ dữ liệu thu được từ quá trình tương tác thực nghiệm của người dùng đều được xử lý ẩn danh hoàn toàn, mã hóa bảo mật SSL/HTTPS tuyệt đối và tuân thủ nghiêm ngặt Chính sách Bảo mật, cam kết không bán dữ liệu vì mục đích quảng cáo thương mại.
              </p>
            </div>
            <div className="bg-bg-surface border border-border-color rounded-default p-5">
              <strong className="text-text-primary block mb-1">Bước 3: Đối soát Chéo kết quả kỹ thuật (Internal Audit &amp; Revision)</strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Trước khi công bố thuật toán trắc nghiệm hoặc mô phỏng, đội ngũ chuyên môn phải tiến hành chạy thử nghiệm nội bộ để kiểm tra sai số, hiệu chỉnh tham số toán học và bảo đảm tính khách quan, tin cậy của thuật toán hiển thị kết quả.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            5. Tiếp nhận Phản biện &amp; Hoàn thiện liên tục
          </h2>
          <p>
            Leanity Labs tin tưởng rằng sự tương tác chuyên môn đa chiều là chìa khóa để tri thức ngày một hoàn thiện hơn. Chúng tôi luôn trân trọng mọi ý kiến đóng góp, phản biện học thuật từ các nhà nghiên cứu, chuyên gia dịch thuật và toàn thể độc giả liên quan đến cả bài viết lẫn các công cụ thực nghiệm của chúng tôi.
          </p>
          <p>
            Mọi ý kiến phản hồi xin vui lòng gửi về Ban biên soạn theo biểu mẫu liên hệ chính thức ở cuối trang.
          </p>
        </section>

        <section className="flex flex-col gap-3 border-t border-border-color pt-8 mt-4 text-left">
          <h2 className="font-serif text-xl font-bold text-text-primary border-l-3 border-primary pl-3">
            6. Kết nối đóng góp chuyên môn
          </h2>
          <p className="text-[0.92rem]">
            Nếu bạn phát hiện sai sót thuật ngữ, có đóng góp về phương pháp thực nghiệm hoặc mong muốn kết nối đóng góp bài viết nghiên cứu, xin vui lòng gửi thông tin qua:
          </p>
          <address className="not-italic bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2.5 text-[0.88rem] mt-2">
            <div><strong className="text-text-primary">Kênh đóng góp:</strong> <Link href="/contact" className="text-primary hover:underline font-medium">Biểu mẫu liên hệ học thuật</Link></div>
            <div><strong className="text-text-primary">Email ban biên soạn:</strong> <a href="mailto:contact@leanitylabs.com" className="text-primary hover:underline font-mono">contact@leanitylabs.com</a></div>
            <div><strong className="text-text-primary">Văn phòng đối soát:</strong> 36 Đường số 4, Phường Thông Tây Hội, TP. Hồ Chí Minh, Việt Nam.</div>
          </address>
        </section>

      </div>
    </article>
  );
}
