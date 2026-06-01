import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ Ban biên tập & Ấn phẩm Tri thức | Leanity Labs",
  description: "Trang liên hệ chính thức của Leanity Labs. Kết nối Ban Biên tập, gửi phản hồi đóng góp bài viết về khoa học hệ thống, tâm lý học tích cực và khoa học hiệu suất.",
  openGraph: {
    title: "Liên hệ Ban biên tập & Ấn phẩm Tri thức | Leanity Labs",
    description: "Trang liên hệ chính thức của Leanity Labs. Kết nối Ban Biên tập, gửi phản hồi đóng góp bài viết về khoa học hệ thống, tâm lý học tích cực và khoa học hiệu suất.",
    type: "website",
    locale: "vi_VN",
    url: "https://leanitylabs.com/contact",
  },
};

export default function ContactPage() {
  // Cấu trúc dữ liệu JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://leanitylabs.com/contact",
        "url": "https://leanitylabs.com/contact",
        "name": "Liên hệ với Ban biên tập & Ấn phẩm Tri thức | Leanity Labs",
        "description": "Địa chỉ liên hệ chính thức, số điện thoại, email và biểu mẫu kết nối, đóng góp nội dung học thuật cho Ban biên tập Leanity Labs.",
        "inLanguage": "vi-VN",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://leanitylabs.com/#website",
          "url": "https://leanitylabs.com",
          "name": "Leanity Labs",
          "description": "Ấn phẩm biên soạn & chia sẻ kiến thức khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất"
        },
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://leanitylabs.com/#organization",
          "name": "Leanity Labs",
          "alternateName": "Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học & Hiệu suất",
          "url": "https://leanitylabs.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://leanitylabs.com/logo.svg",
            "width": "512",
            "height": "512"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+84-865-642-110",
              "contactType": "general inquiries",
              "email": "contact@leanitylabs.com",
              "areaServed": "VN",
              "availableLanguage": ["Vietnamese", "English"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "36 Đường số 4, Phường Thông Tây Hội",
            "addressLocality": "Thành phố Hồ Chí Minh",
            "addressRegion": "TP. Hồ Chí Minh",
            "postalCode": "71426",
            "addressCountry": "VN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "10.8326",
            "longitude": "106.6631"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:30",
            "closes": "17:30"
          },
          "sameAs": [
            "https://github.com/leanity-labs",
            "https://linkedin.com/in/leanitylabs",
            "https://www.researchgate.net"
          ]
        }
      }
    ]
  };

  return (
    <>
      {/* Nhúng dữ liệu có cấu trúc JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[850px] mx-auto pb-16">
        {/* Page Header */}
        <header className="mb-10 border-b border-border-color pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg-surface border border-border-color rounded-full font-sans text-[0.7rem] font-bold text-text-primary uppercase tracking-[0.05em] mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
            Kênh liên hệ chính thức
          </div>
          <h1 className="font-serif font-extrabold text-[clamp(2rem,4vw,2.5rem)] leading-[1.2] mb-4 tracking-[-0.02em] text-text-primary">
            Kết Nối Ý Tưởng Khoa Học &amp; Biên Tập.
          </h1>
          <p className="text-[1.02rem] text-text-secondary leading-[1.6] font-normal">
            Chào mừng bạn đến với văn phòng liên hệ của <strong className="text-text-primary">Leanity Labs</strong>. Chúng tôi tiếp nhận các đóng góp chuyên môn, phản biện học thuật và bài viết chia sẻ tri thức về khoa học hệ thống, tâm lý học tích cực và khoa học hiệu suất từ các học giả, biên tập viên và bạn đọc.
          </p>
        </header>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Column Left: Contact Form (60%) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="border-b border-border-color pb-3">
              <h2 className="font-serif text-lg font-bold text-text-primary">
                Gửi phản hồi &amp; đóng góp chuyên môn
              </h2>
              <p className="text-xs text-text-secondary mt-1">
                Vui lòng hoàn thành các trường thông tin dưới đây để Ban biên tập lưu trữ và xử lý.
              </p>
            </div>
            
            <ContactForm />
          </div>

          {/* Column Right: Office Info & Visual Map (40%) */}
          <div className="md:col-span-5 flex flex-col gap-8">

            {/* Academic Secretariat Info Card */}
            <div className="bg-bg-surface border border-border-color rounded-default p-5 flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#e8f3ff] text-primary flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.05em] text-text-primary">
                  Ban Thư Ký Biên Tập
                </h3>
              </div>
              <p className="text-[0.78rem] text-text-secondary leading-[1.6]">
                Đơn vị tiếp nhận, quản lý và điều phối các đề xuất nội dung, bài phân tích chuyên đề và phản hồi từ độc giả trước khi chuyển giao Ban biên soạn Leanity Labs.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="flex flex-col gap-4">
              <h4 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.05em] text-text-primary border-b border-border-color pb-2">
                Thông tin trực tiếp
              </h4>

              <address className="not-italic flex flex-col gap-4 text-[0.8rem]">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-text-primary">Email Ban Biên soạn:</span>
                    <a href="mailto:contact@leanitylabs.com" className="text-primary hover:underline font-mono">contact@leanitylabs.com</a>
                  </div>
                </div>



                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-text-primary">Hotline / Zalo hỗ trợ:</span>
                    <a href="tel:+84865642110" className="text-primary hover:underline font-mono">086 564 2110</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-text-primary">Địa chỉ văn phòng:</span>
                    <span className="text-text-secondary leading-[1.5]">
                      36 Đường số 4, Phường Thông Tây Hội, TP. Hồ Chí Minh.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-text-primary">Thời gian mở cửa (Opening Hours):</span>
                    <time dateTime="Mo-Fr 08:30-17:30" className="text-text-secondary">
                      Thứ 2 - Thứ 6: 08:30 - 17:30 <br />
                      <span className="text-[0.72rem] text-text-muted italic">(Nghỉ Thứ bảy, Chủ nhật và các ngày lễ theo quy định)</span>
                    </time>
                  </div>
                </div>
              </address>
            </div>

            {/* Premium Interactive SVG Map Placement */}
            <div className="flex flex-col gap-3">
              <h4 className="font-sans text-[0.8rem] font-bold uppercase tracking-[0.05em] text-text-primary border-b border-border-color pb-2">
                Tọa độ địa lý nghiên cứu
              </h4>
              <div className="relative w-full aspect-video rounded-default bg-bg-surface border border-border-color overflow-hidden flex flex-col items-center justify-center p-4">
                {/* SVG Visual Graphic Design representing coordinates */}
                <svg className="w-full h-full text-text-muted opacity-80" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="0" y1="40" x2="200" y2="40" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="0" y1="60" x2="200" y2="60" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="0" y1="80" x2="200" y2="80" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="120" y1="0" x2="120" y2="100" stroke="#f2f2f2" strokeWidth="1" />
                  <line x1="160" y1="0" x2="160" y2="100" stroke="#f2f2f2" strokeWidth="1" />

                  {/* Geographic Axis */}
                  <line x1="100" y1="0" x2="100" y2="100" stroke="#e6e6e6" strokeWidth="0.75" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="#e6e6e6" strokeWidth="0.75" strokeDasharray="3 3" />

                  {/* Academic Compass Ring */}
                  <circle cx="100" cy="50" r="30" stroke="#e6e6e6" strokeWidth="1" />
                  <circle cx="100" cy="50" r="2" fill="#5e6ad2" />

                  {/* Compass Indicators */}
                  <text x="100" y="16" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#8c8c96">N</text>
                  <text x="138" y="52" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#8c8c96">E</text>
                  <text x="100" y="87" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#8c8c96">S</text>
                  <text x="63" y="52" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fontWeight="bold" fill="#8c8c96">W</text>

                  {/* Grid Labels */}
                  <text x="5" y="47" fontSize="5" fontFamily="monospace" fill="#a1a1aa">10°49'57.4&quot;N</text>
                  <text x="140" y="95" fontSize="5" fontFamily="monospace" fill="#a1a1aa">106°39'47.2&quot;E</text>

                  {/* Pulsing Pin at (100, 50) */}
                  <circle cx="100" cy="50" r="8" fill="#5e6ad2" fillOpacity="0.15" className="animate-ping" />
                  <path d="M100 42C97.2386 42 95 44.2386 95 47C95 50.75 100 58 100 58C100 58 105 50.75 105 47C105 44.2386 102.761 42 100 42ZM100 49.5C98.6193 49.5 97.5 48.3807 97.5 47C97.5 45.6193 98.6193 44.5 100 44.5C101.381 44.5 102.5 45.6193 102.5 47C102.5 48.3807 101.381 49.5 100 49.5Z" fill="#5e6ad2" />
                </svg>

                {/* Overlay Text */}
                <div className="absolute bottom-3 left-3 flex flex-col gap-0.5 bg-white/90 backdrop-blur-sm border border-border-color rounded py-1 px-2">
                  <span className="font-sans text-[0.62rem] font-bold text-text-primary">Leanity Labs HQ</span>
                  <span className="font-mono text-[0.55rem] text-text-secondary">10.8326° N, 106.6631° E</span>
                </div>

                {/* Real Navigation Link */}
                <a
                  href="https://www.openstreetmap.org/search?query=36%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%204%2C%20Ph%C6%B0%E1%BB%9Dng%20Th%C3%B4ng%20T%C3%A2y%20H%E1%BB%99i%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 flex items-center gap-1 bg-white border border-border-dark hover:border-primary hover:text-primary rounded-full py-1 px-2.5 font-sans text-[0.62rem] font-semibold shadow-subtle no-underline transition-all cursor-pointer"
                  title="Mở bản đồ chỉ đường"
                >
                  <span>Chỉ đường</span>
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
