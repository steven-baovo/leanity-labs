import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chính sách Bảo mật | Leanity Labs",
  description: "Chính sách bảo mật thông tin chính thức của Leanity Labs. Cam kết bảo vệ dữ liệu cá nhân, minh bạch trong thu thập và sử dụng dữ liệu.",
  openGraph: {
    title: "Chính sách Bảo mật | Leanity Labs",
    description: "Chính sách bảo mật thông tin chính thức của Leanity Labs. Cam kết bảo vệ dữ liệu cá nhân.",
    type: "website",
    locale: "vi_VN",
    url: "https://leanitylabs.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-[720px] mx-auto pb-16 pt-4 font-sans text-text-primary leading-[1.8] text-justify">

      {/* Page Header */}
      <header className="mb-10 border-b border-border-color pb-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-border-color rounded-full font-sans text-[0.7rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-4">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Cập nhật ngày: 01/06/2026
        </div>
        <h1 className="font-serif font-extrabold text-[clamp(2.2rem,5vw,3rem)] leading-[1.15] mb-4 tracking-[-0.02em] text-text-primary">
          Chính sách Bảo mật
        </h1>
        <p className="text-[1.05rem] text-text-secondary leading-[1.6] font-normal italic">
          Cam kết bảo vệ dữ liệu cá nhân và tính minh bạch học thuật đối với bạn đọc của Leanity Labs.
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col gap-8 text-[0.95rem] text-text-primary">

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            1. Giới thiệu chung
          </h2>
          <p>
            Chào mừng bạn đến với Leanity Labs (địa chỉ trang web chính thức: <a href="https://leanitylabs.com" className="text-primary hover:underline font-medium">https://leanitylabs.com</a>). Chúng tôi là một ấn phẩm tri thức và ban biên tập độc lập, hoạt động trong lĩnh vực nghiên cứu, biên soạn và chia sẻ kiến thức về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.
          </p>
          <p>
            Quyền riêng tư của bạn đọc là ưu tiên hàng đầu của chúng tôi. Chính sách Bảo mật này mô tả cách thức chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin cá nhân của bạn khi bạn truy cập trang web, gửi thư phản hồi học thuật hoặc tương tác với ban biên soạn. Tài liệu này được soạn thảo tuân thủ đầy đủ các quy chuẩn bảo mật quốc tế và quy định pháp lý quốc tế về bảo vệ dữ liệu (GDPR, CCPA).
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            2. Thông tin chúng tôi thu thập
          </h2>
          <p>
            Chúng tôi chỉ thu thập các thông tin thực sự cần thiết nhằm phục vụ trải nghiệm đọc và tương tác chuyên môn của bạn. Thông tin được chia thành hai nhóm chính:
          </p>

          <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-4 mt-2">
            <div>
              <strong className="text-text-primary block mb-1">a) Thông tin do bạn cung cấp trực tiếp:</strong>
              <p className="text-[0.88rem] text-text-secondary leading-[1.6] m-0">
                Khi bạn gửi phản hồi hoặc đề xuất đóng góp chuyên môn thông qua <Link href="/contact" className="text-primary hover:underline font-medium">Biểu mẫu Liên hệ</Link>, chúng tôi sẽ thu thập: Họ và tên, Địa chỉ email công tác, Tên đơn vị công tác/Tổ chức khoa học và nội dung tin nhắn chi tiết của bạn.
              </p>
            </div>
            <div className="border-t border-border-color pt-3">
              <strong className="text-text-primary block mb-1">b) Thông tin thu thập tự động (Cookies &amp; Dữ liệu nhật ký):</strong>
              <p className="text-[0.88rem] text-text-secondary  leading-[1.6] m-0">
                Khi bạn điều hướng trên trang web, hệ thống của chúng tôi và các dịch vụ phân tích được cấp phép tự động ghi lại các thông tin tiêu chuẩn: Địa chỉ IP, loại trình duyệt, hệ điều hành, nguồn giới thiệu (referral source), các trang đã xem, thời gian truy cập và các tương tác nhấp chuột cơ bản nhằm đo lường lưu lượng đọc báo.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            3. Cách thức sử dụng thông tin
          </h2>
          <p>
            Chúng tôi cam kết sử dụng thông tin thu thập được cho các mục đích hợp pháp sau:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 m-0 text-text-secondary text-[0.92rem]">
            <li>Phản hồi trực tiếp các câu hỏi học thuật, ý kiến phản biện hoặc đề xuất đóng góp nội dung từ bạn gửi tới Ban Biên Tập.</li>
            <li>Phân tích lưu lượng đọc, đo lường sự quan tâm của bạn đọc đối với các chủ đề bài viết khác nhau nhằm nâng cao chất lượng biên soạn nội dung chuyên môn.</li>
            <li>Duy trì sự an toàn ổn định kỹ thuật của hệ thống website, ngăn chặn các hành vi tấn công giả mạo hoặc spam biểu mẫu.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            4. Cookie và Công nghệ theo dõi
          </h2>
          <p>
            Leanity Labs sử dụng Cookie (các tệp dữ liệu nhỏ được lưu trữ trên ổ cứng thiết bị của bạn) để tối ưu hóa thời gian tải trang và ghi nhớ lựa chọn hiển thị của bạn đọc.
          </p>
          <p>
            Chúng tôi sử dụng các công cụ phân tích lượt đọc ẩn danh (không gắn liền định danh cá nhân cụ thể) để phục vụ việc thống kê lưu lượng đọc. Bạn hoàn toàn có quyền cấu hình trình duyệt để từ chối tất cả các cookie hoặc cảnh báo khi có cookie được gửi. Tuy nhiên, việc tắt cookie có thể làm giảm nhẹ trải nghiệm hiển thị mượt mà trên website.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            5. Cam kết Không chia sẻ dữ liệu
          </h2>
          <blockquote className="border-l-3 border-primary pl-4 italic text-text-secondary my-2">
            "Chúng tôi tuyệt đối KHÔNG bán, trao đổi, cho thuê hoặc chuyển giao trái phép bất kỳ thông tin nhận dạng cá nhân nào của bạn đọc cho bên thứ ba vì mục đích thương mại hoặc quảng cáo."
          </blockquote>
          <p>
            Thông tin của bạn chỉ được chia sẻ trong trường hợp bất khả kháng theo yêu cầu chính thức của pháp luật, hoặc chia sẻ ẩn danh với các nhà cung cấp dịch vụ hạ tầng đám mây (như Hosting, CDN) hỗ trợ vận hành trang web bảo mật.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            6. Bảo mật thông tin
          </h2>
          <p>
            Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ dữ liệu cá nhân của bạn. Toàn bộ lưu lượng truy cập và dữ liệu truyền đi qua biểu mẫu liên hệ đều được mã hóa bằng giao thức bảo mật lớp truyền tải **SSL/HTTPS** (biểu tượng ổ khóa an toàn trên trình duyệt). Dữ liệu được lưu trữ trên hệ thống máy chủ bảo mật cao, hạn chế tối đa quyền truy cập vật lý và kỹ thuật số.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            7. Quyền lợi hợp pháp của bạn
          </h2>
          <p>
            Theo các tiêu chuẩn bảo vệ quyền riêng tư toàn cầu, bạn có toàn quyền đối với dữ liệu cá nhân của mình, bao gồm:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2 m-0 text-text-secondary text-[0.92rem]">
            <li>Quyền yêu cầu cung cấp bản sao các thông tin cá nhân của bạn mà chúng tôi đang lưu trữ.</li>
            <li>Quyền yêu cầu sửa đổi các thông tin không chính xác hoặc đã lỗi thời.</li>
            <li>Quyền yêu cầu xóa bỏ hoàn toàn thông tin cá nhân của bạn khỏi cơ sở dữ liệu lưu trữ của Ban biên tập.</li>
          </ul>
          <p>
            Nếu bạn muốn thực hiện các quyền này, vui lòng liên hệ trực tiếp với chúng tôi qua các kênh thông tin ở mục cuối cùng.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            8. Liên kết của bên thứ ba
          </h2>
          <p>
            Là một chuyên trang khoa học, các bài viết của Leanity Labs thường chứa các đường liên kết (Hyperlink) dẫn đến các tài liệu nghiên cứu, công bố học thuật hoặc trang web tham khảo của bên thứ ba. Chúng tôi không kiểm soát và không chịu trách nhiệm về chính sách bảo mật dữ liệu cũng như nội dung trên các website liên kết đó. Bạn nên kiểm tra chính sách bảo mật của từng website trước khi cung cấp thông tin.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-serif text-xl font-bold text-text-primary mt-4 border-l-3 border-primary pl-3 text-left">
            9. Thay đổi chính sách
          </h2>
          <p>
            Chúng tôi có thể cập nhật Chính sách Bảo mật này định kỳ để phản ánh các thay đổi về công nghệ hoặc yêu cầu pháp lý từ các công cụ tìm kiếm. Mọi thay đổi lớn sẽ được thông báo bằng cách cập nhật ngày sửa đổi ở phần đầu của chính sách này. Chúng tôi khuyến khích bạn thường xuyên kiểm tra trang này để nắm bắt thông tin bảo vệ quyền riêng tư mới nhất.
          </p>
        </section>

        <section className="flex flex-col gap-3 border-t border-border-color pt-8 mt-4 text-left">
          <h2 className="font-serif text-xl font-bold text-text-primary border-l-3 border-primary pl-3">
            10. Thông tin liên hệ
          </h2>
          <p className="text-[0.92rem]">
            Nếu bạn có bất kỳ câu hỏi, góp ý hoặc yêu cầu nào liên quan đến Chính sách Bảo mật này, xin vui lòng kết nối trực tiếp với chúng tôi qua:
          </p>
          <address className="not-italic bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-2.5 text-[0.88rem] mt-2">
            <div><strong className="text-text-primary">Đơn vị chịu trách nhiệm:</strong> Ban Biên Tập Leanity Labs</div>
            <div><strong className="text-text-primary">Email tiếp nhận:</strong> <a href="mailto:contact@leanitylabs.com" className="text-primary hover:underline font-mono">contact@leanitylabs.com</a></div>
            <div><strong className="text-text-primary">Hotline / Zalo hỗ trợ:</strong> <a href="tel:+84865642110" className="text-primary hover:underline font-mono">086 564 2110</a></div>
            <div><strong className="text-text-primary">Văn phòng Biên soạn:</strong> 36 Đường số 4, Phường Thông Tây Hội, Gò Vấp, TP. Hồ Chí Minh, Việt Nam.</div>
          </address>
        </section>

      </div>
    </article>
  );
}
