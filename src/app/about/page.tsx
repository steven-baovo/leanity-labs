import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Giới thiệu về Leanity Labs | Ấn phẩm & Ban Biên tập Tri thức",
  description: "Tìm hiểu về Leanity Labs - Ấn phẩm biên soạn và chia sẻ kiến thức chuyên sâu về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.",
  openGraph: {
    title: "Giới thiệu về Leanity Labs | Ấn phẩm & Ban Biên tập Tri thức",
    description: "Tìm hiểu về Leanity Labs - Ấn phẩm biên soạn và chia sẻ kiến thức chuyên sâu về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.",
    type: "website",
    locale: "vi_VN",
    url: "https://leanitylabs.com/about",
  },
};

export default function AboutPage() {
  return (
    <article className="max-w-[720px] mx-auto pb-16 pt-4 font-sans text-text-primary leading-[1.8] text-justify">

      {/* Page Header */}
      <header className="mb-10 border-b border-border-color pb-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-border-color rounded-full font-sans text-[0.7rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Về chúng tôi
        </div>
        <h1 className="font-serif font-extrabold text-[clamp(2.2rem,5vw,3rem)] leading-[1.15] mb-4 tracking-[-0.02em] text-text-primary">
          Kiến thức Hệ thống,<br />Hiệu năng Bền vững.
        </h1>
        <p className="text-[1.05rem] text-text-secondary leading-[1.6] font-normal italic">
          Giới thiệu về tôn chỉ hoạt động, đội ngũ biên soạn và cam kết minh bạch học thuật của Leanity Labs.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col gap-9 text-[0.95rem] text-text-primary">

        {/* 1. Sứ mệnh của chúng tôi */}
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-2 border-l-3 border-primary pl-3 text-left">
            1. Sứ mệnh &amp; Tôn chỉ Hoạt động
          </h2>
          <p>
            Chào mừng bạn đến với <strong>Leanity Labs</strong>. Chúng tôi là một ấn phẩm tri thức độc lập và phi lợi nhuận, hoạt động tích hợp theo mô hình ba nhánh học thuật: **biên dịch tri thức chuyên sâu**, **biên soạn chuyên luận tổng hợp đa nguồn** và **thiết kế thực nghiệm, mô phỏng khoa học độc lập**.
          </p>
          <p>
            Sứ mệnh của Leanity Labs là mang đến các tài liệu Việt hóa chuẩn xác, các chuyên luận đối chiếu sâu sắc từ nhiều công trình khoa học uy tín thế giới, kết hợp cùng các công cụ trắc nghiệm nhận thức và mô phỏng hệ thống tự phát triển. Từ đó, cung cấp hệ sinh thái tài liệu tham khảo đáng tin cậy giúp bạn đọc Việt Nam kiến tạo cuộc sống lành mạnh, tư duy hệ thống mạch lạc và đạt hiệu suất bền vững.
          </p>
        </section>

        {/* 2. Ba trụ cột Tri thức */}
        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-2 border-l-3 border-primary pl-3 text-left">
            2. Ba Trụ cột Tri thức Chính
          </h2>
          <p>
            Mọi bài viết, chuyên đề nghiên cứu và ấn bản tại Leanity Labs được xây dựng xoay quanh ba trụ cột cốt lõi mang tính liên ngành chặt chẽ:
          </p>

          <div className="grid grid-cols-1 gap-4 mt-3">
            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2">
              <strong className="text-text-primary text-[1rem] flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 text-primary text-[0.7rem] font-bold rounded-full flex items-center justify-center">01</span>
                Khoa học Hệ thống (Systems Science)
              </strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Tìm hiểu các định luật vận hành kinh điển (như Định luật Little, Lý thuyết hàng đợi M/M/1), cấu trúc phản hồi dòng chảy dữ liệu và mô hình hóa hệ thống. Chúng tôi phân tích cách thức tổ chức bộ máy nhận thức và vận hành kỹ thuật số giảm thiểu tối đa các điểm tắc nghẽn thông tin.
              </p>
            </div>

            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2">
              <strong className="text-text-primary text-[1rem] flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 text-primary text-[0.7rem] font-bold rounded-full flex items-center justify-center">02</span>
                Tâm lý học Tích cực (Positive Psychology)
              </strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Tập trung nghiên cứu trạng thái trải nghiệm tối ưu - "Trôi chảy" (Flow State) theo mô hình của Mihaly Csikszentmihalyi, tư duy phát triển (Growth Mindset) và năng lượng tinh thần tự điều chỉnh. Chúng tôi hướng bạn đọc tới việc xây dựng niềm vui nhận thức bền vững từ sâu bên trong.
              </p>
            </div>

            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2">
              <strong className="text-text-primary text-[1rem] flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 text-primary text-[0.7rem] font-bold rounded-full flex items-center justify-center">03</span>
                Khoa học về Hiệu suất (Performance Science)
              </strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Ứng dụng các quy tắc nhịp độ (Takt Time) từ Hệ thống sản xuất Toyota (TPS) vào môi trường văn phòng số hiện đại. Nghiên cứu cách thức phân bổ công việc thông minh, giảm tải nhận thức và thiết lập nhịp điệu sinh học tối ưu để con người phối hợp hiệu quả cùng công nghệ.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Ban Biên soạn */}
        <section id="contributors" className="flex flex-col gap-3 scroll-mt-20">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-2 border-l-3 border-primary pl-3 text-left">
            3. Đội ngũ Ban Biên soạn
          </h2>
          <p>
            Chúng tôi là một nhóm các học giả biên dịch, nhà nghiên cứu quy trình vận hành và biên tập viên độc lập có cùng niềm tin mãnh liệt vào sức mạnh của tri thức khoa học:
          </p>
          <div className="bg-bg-surface border border-border-color rounded-default p-6 flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-serif font-extrabold flex items-center justify-center shrink-0">
                BT
              </div>
              <div>
                <strong className="text-text-primary block text-[0.95rem]">Ban Thư ký Biên tập</strong>
                <span className="text-[0.78rem] text-text-secondary block mb-1">editorial@leanitylabs.com</span>
                <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                  Chịu trách nhiệm tiếp nhận, thẩm định ban đầu và điều phối các đề xuất đóng góp bài viết, liên hệ phản hồi chuyên môn từ độc giả toàn cầu.
                </p>
              </div>
            </div>
            <div className="border-t border-border-color pt-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-serif font-extrabold flex items-center justify-center shrink-0">
                HK
              </div>
              <div>
                <strong className="text-text-primary block text-[0.95rem]">Ban Biên soạn Khoa học</strong>
                <span className="text-[0.78rem] text-text-secondary block mb-1">science@leanitylabs.com</span>
                <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                  Tập hợp các học giả phụ trách chuyên sâu hai nhánh nghiên cứu: Khoa học Hệ thống &amp; Khoa học Hiệu suất, đảm bảo tính chuẩn xác toán học của các mô hình vận hành số hóa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Minh bạch tài trợ */}
        <section id="funding" className="flex flex-col gap-3 scroll-mt-20">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-2 border-l-3 border-primary pl-3 text-left">
            4. Cam kết Minh bạch Tài trợ
          </h2>
          <blockquote className="border-l-3 border-primary pl-4 italic text-text-secondary my-2">
            "Leanity Labs hoàn toàn độc lập và phi thương mại. Chúng tôi không nhận quảng cáo hiển thị, không bán dữ liệu bạn đọc và không chịu ảnh hưởng bởi bất kỳ tổ chức thương mại công nghệ nào."
          </blockquote>
          <p>
            Mọi chi phí vận hành hạ tầng máy chủ và xuất bản nội dung của trang web đều được tài trợ hoàn toàn bởi quỹ nghiên cứu độc lập phi lợi nhuận của ban sáng lập và đóng góp tự nguyện từ các học giả liên kết. Điều này bảo đảm mọi bài viết được xuất bản trên trang đều đạt được tính khách quan tuyệt đối, không có xung đột lợi ích thương mại.
          </p>
        </section>

        {/* 5. Liên hệ học thuật */}
        <section className="flex flex-col gap-3 border-t border-border-color pt-8 mt-4 text-left">
          <h2 className="font-serif text-xl font-bold text-text-primary border-l-3 border-primary pl-3">
            5. Kết nối chuyên môn
          </h2>
          <p className="text-[0.92rem]">
            Nếu bạn là một nhà nghiên cứu, biên tập viên tự do hoặc độc giả mong muốn đóng góp ý kiến phản biện học thuật cho Leanity Labs, vui lòng gửi thư cho ban biên soạn hoặc ghé thăm văn phòng của chúng tôi tại:
          </p>
          <address className="not-italic bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2.5 text-[0.88rem] mt-2">
            <div><strong className="text-text-primary">Đơn vị chủ quản:</strong> Ban Biên Tập Leanity Labs</div>
            <div><strong className="text-text-primary">Email tiếp nhận:</strong> <a href="mailto:contact@leanitylabs.com" className="text-primary hover:underline font-mono">contact@leanitylabs.com</a></div>
            <div><strong className="text-text-primary">Hotline khoa học:</strong> <a href="tel:+84865642110" className="text-primary hover:underline font-mono">086 564 2110</a></div>
            <div><strong className="text-text-primary">Văn phòng chính:</strong> 36 Đường số 4, Phường Thông Tây Hội, Gò Vấp, TP. Hồ Chí Minh, Việt Nam.</div>
          </address>
        </section>

      </div>
    </article>
  );
}
