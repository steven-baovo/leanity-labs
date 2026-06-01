import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Điều khoản Sử dụng | Leanity Labs",
  description: "Điều khoản sử dụng chính thức của Leanity Labs. Quy định về bản quyền học thuật, trách nhiệm nội dung và quy chuẩn tương tác cho bạn đọc.",
  openGraph: {
    title: "Điều khoản Sử dụng | Leanity Labs",
    description: "Điều khoản sử dụng chính thức của Leanity Labs. Quy định về bản quyền học thuật, trách nhiệm nội dung.",
    type: "website",
    locale: "vi_VN",
    url: "https://leanitylabs.com/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="max-w-[720px] mx-auto pb-16 pt-4 font-sans text-text-primary leading-[1.8] text-justify">

      {/* Page Header */}
      <header className="mb-10 border-b border-border-color pb-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-border-color rounded-full font-sans text-[0.7rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Cập nhật ngày: 01/06/2026
        </div>
        <h1 className="font-serif font-extrabold text-[clamp(2.2rem,5vw,3rem)] leading-[1.15] mb-4 tracking-[-0.02em] text-text-primary">
          Điều khoản Sử dụng
        </h1>
        <p className="text-[1.05rem] text-text-secondary leading-[1.6] font-normal italic">
          Quy định pháp lý, bản quyền tri thức học thuật và chuẩn mực tương tác dành cho bạn đọc của Leanity Labs.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col gap-8 text-[0.95rem] text-text-primary">

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            1. Chấp thuận Điều khoản
          </h2>
          <p>
            Chào mừng bạn đến với Leanity Labs (địa chỉ trang web chính thức: <a href="https://leanitylabs.com" className="text-primary hover:underline font-medium">https://leanitylabs.com</a>). Chúng tôi là một ấn phẩm tri thức và ban biên tập độc lập hoạt động trong lĩnh vực nghiên cứu, biên soạn và chia sẻ kiến thức về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.
          </p>
          <p>
            Bằng việc truy cập, tham khảo các bài viết, sử dụng biểu mẫu liên hệ hoặc tương tác với bất kỳ nội dung nào trên trang web này, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý tuân thủ toàn bộ các điều khoản được quy định tại văn bản này. Nếu bạn không đồng ý với bất kỳ phần nào trong các điều khoản này, vui lòng ngừng sử dụng trang web ngay lập tức.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            2. Quyền Sở hữu Trí tuệ &amp; Bản quyền Học thuật
          </h2>
          <p>
            Toàn bộ nội dung được xuất bản trên Leanity Labs bao gồm văn bản nghiên cứu, sơ đồ đồ họa, các mô hình toán học hệ thống, hình ảnh minh họa, thiết kế giao diện, logo và mã nguồn đều thuộc quyền sở hữu trí tuệ độc quyền của Ban Biên tập Leanity Labs hoặc các đối tác liên kết đã được cấp phép hợp pháp.
          </p>
          <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-4 mt-2">
            <div>
              <strong className="text-text-primary block mb-1">a) Quyền trích dẫn học thuật (Được phép):</strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Chúng tôi khuyến khích sự lan tỏa tri thức khoa học lành mạnh. Bạn được phép trích dẫn một phần nội dung (không quá 200 từ cho mỗi bài viết) phục vụ mục đích nghiên cứu, học tập cá nhân hoặc giáo dục phi thương mại, với điều kiện bắt buộc phải ghi rõ nguồn trích dẫn là "Leanity Labs" kèm theo đường dẫn liên kết ngược (Hyperlink) trực tiếp đến bài viết gốc.
              </p>
            </div>
            <div className="border-t border-border-color pt-3">
              <strong className="text-text-primary block mb-1">b) Các hành vi sao chép bị nghiêm cấm:</strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Tuyệt đối nghiêm cấm việc sao chép toàn bộ, dịch thuật trọn vẹn, tái bản thương mại, phân phối lại hoặc lưu trữ trên các hệ thống cơ sở dữ liệu công cộng bất kỳ nội dung nào của Leanity Labs khi chưa có sự đồng ý chính thức bằng văn bản từ Ban Biên tập.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            3. Quy chuẩn Đóng góp Chuyên môn
          </h2>
          <p>
            Khi bạn sử dụng biểu mẫu gửi thư phản hồi, ý kiến phản biện học thuật hoặc các đề xuất đóng góp bài viết trên trang web của chúng tôi, bạn cam kết tuân thủ các quy tắc ứng xử sau:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 m-0 text-text-secondary text-[0.92rem]">
            <li>Nội dung đóng góp phải đảm bảo tính trung thực, khách quan và có cơ sở khoa học rõ ràng.</li>
            <li>Thông tin cung cấp không được vi phạm bản quyền, nhãn hiệu hoặc bất kỳ quyền sở hữu trí tuệ nào của bên thứ ba.</li>
            <li>Không sử dụng ngôn từ kích động thù hận, quấy rối, quảng cáo thương mại trá hình hoặc đính kèm các mã độc hại.</li>
          </ul>
          <p>
            Ban Biên tập Leanity Labs bảo lưu quyền biên soạn, chỉnh sửa hoặc từ chối xuất bản các nội dung đóng góp dựa trên các tiêu chí học thuật riêng của ban chuyên môn mà không cần thông báo trước.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            4. Tuyên bố Miễn trừ Trách nhiệm Học thuật
          </h2>
          <blockquote className="border-l-3 border-primary pl-4 italic text-text-secondary my-2">
            "Toàn bộ các ấn phẩm, nghiên cứu và bài phân tích được đăng tải trên Leanity Labs chỉ nhằm mục đích nghiên cứu học thuật, giáo dục và cung cấp thông tin tham khảo tổng quát. Chúng tôi không cung cấp bất kỳ tư vấn chuyên môn pháp lý, y khoa hay tư vấn tâm lý trị liệu cụ thể nào."
          </blockquote>
          <p>
            Mặc dù Ban Biên tập luôn nỗ lực tối đa để đảm bảo tính chính xác, cập nhật và độ tin cậy của thông tin khoa học được xuất bản, chúng tôi không cam kết hoặc bảo đảm dưới bất kỳ hình thức nào về tính đầy đủ tuyệt đối hoặc sự phù hợp của thông tin cho một mục đích cụ thể của người đọc. 
          </p>
          <p>
            Mọi hành động áp dụng kiến thức từ Leanity Labs vào cuộc sống hoặc công việc cá nhân là quyết định tự nguyện và thuộc trách nhiệm cá nhân duy nhất của bạn đọc. Leanity Labs miễn trừ mọi trách nhiệm đối với bất kỳ tổn thất trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng thông tin từ trang web này.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            5. Hành vi Người dùng bị Nghiêm cấm
          </h2>
          <p>
            Để duy trì môi trường trao đổi tri thức an toàn và tin cậy, bạn đồng ý không thực hiện bất kỳ hành vi nào dưới đây:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 m-0 text-text-secondary text-[0.92rem]">
            <li>Sử dụng bất kỳ thiết bị tự động nào (như robot, crawler, scraper) để quét hoặc khai thác nội dung của trang web cho các mục đích thương mại hoặc huấn luyện các mô hình trí tuệ nhân tạo (AI) khi chưa được phép.</li>
            <li>Tấn công kỹ thuật số, làm quá tải hạ tầng hệ thống mạng (DDoS) hoặc can thiệp vào các tính năng bảo mật của trang web.</li>
            <li>Biến dạng, giả mạo tiêu đề hoặc can thiệp kỹ thuật để ẩn giấu nguồn gốc của các thông điệp gửi tới ban biên tập.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            6. Bảo vệ Quyền Riêng tư
          </h2>
          <p>
            Mọi dữ liệu cá nhân thu thập được từ bạn đọc trong quá trình truy cập hoặc gửi biểu mẫu đều được xử lý và bảo vệ nghiêm ngặt theo các tiêu chuẩn cao nhất được mô tả trong chi tiết tại <Link href="/privacy" className="text-primary hover:underline font-medium">Chính sách Bảo mật</Link> của chúng tôi.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            7. Luật áp dụng &amp; Giải quyết Tranh chấp
          </h2>
          <p>
            Các Điều khoản Sử dụng này được điều chỉnh và giải thích theo quy định của pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. 
          </p>
          <p>
            Mọi tranh chấp phát sinh từ việc sử dụng trang web này trước hết sẽ được giải quyết thông qua thương lượng hòa giải thiện chí giữa người dùng và Ban Biên tập Leanity Labs. Trong trường hợp không thể đạt được sự thống nhất, vụ việc sẽ được đưa ra phân xử tại Tòa án nhân dân có thẩm quyền tại Thành phố Hồ Chí Minh, Việt Nam.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            8. Thay đổi Điều khoản
          </h2>
          <p>
            Ban Biên tập có quyền cập nhật, sửa đổi hoặc thay thế bất kỳ phần nào của Điều khoản Sử dụng này vào bất kỳ lúc nào để đáp ứng các yêu cầu pháp lý hoặc sự thay đổi của định hướng xuất bản. Mọi cập nhật lớn sẽ được thông báo thông qua việc thay đổi ngày sửa đổi cuối cùng ở phần đầu trang. Việc bạn tiếp tục truy cập trang web sau khi các thay đổi được đăng tải đồng nghĩa với sự chấp thuận các điều khoản mới đó.
          </p>
        </section>

        <section className="flex flex-col gap-3 border-t border-border-color pt-8 mt-4 text-left">
          <h2 className="font-serif text-xl font-bold text-text-primary border-l-3 border-primary pl-3">
            9. Thông tin liên hệ
          </h2>
          <p className="text-[0.92rem]">
            Nếu bạn có bất kỳ câu hỏi nào liên quan đến Điều khoản Sử dụng này hoặc muốn yêu cầu cấp phép sử dụng nội dung, xin vui lòng kết nối với Ban Biên tập qua:
          </p>
          <address className="not-italic bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2.5 text-[0.88rem] mt-2">
            <div><strong className="text-text-primary">Đơn vị chịu trách nhiệm:</strong> Ban Biên Tập Leanity Labs</div>
            <div><strong className="text-text-primary">Email liên hệ chính thức:</strong> <a href="mailto:contact@leanitylabs.com" className="text-primary hover:underline font-mono">contact@leanitylabs.com</a></div>
            <div><strong className="text-text-primary">Hotline / Zalo hỗ trợ:</strong> <a href="tel:+84865642110" className="text-primary hover:underline font-mono">086 564 2110</a></div>
            <div><strong className="text-text-primary">Văn phòng Biên soạn:</strong> 36 Đường số 4, Phường Thông Tây Hội, Gò Vấp, TP. Hồ Chí Minh, Việt Nam.</div>
          </address>
        </section>

      </div>
    </article>
  );
}
