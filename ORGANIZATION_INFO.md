# 📋 Hồ Sơ Thực Thể & Thông Tin Định Danh Leanity Labs

Tài liệu này lưu trữ toàn bộ thông tin định danh chính thức của **Leanity Labs**. Việc lưu trữ hồ sơ này giúp đảm bảo sự đồng nhất trên toàn bộ hệ thống giao diện (Header, Footer, Contact Page) và cấu trúc dữ liệu SEO (JSON-LD Schema) trong tương lai.

---

## 🏢 1. Thông Tin Cơ Bản (Entity Details)

*   **Tên chính thức**: Leanity Labs
*   **Tên đầy đủ (Mô tả phụ)**: Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học Tích cực & Khoa học về Hiệu suất
*   **Lĩnh vực hoạt động**: Biên soạn tri thức và chia sẻ kiến thức về khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.
*   **Mô tả ngắn (SEO Description)**: Ấn phẩm biên soạn & chia sẻ kiến thức khoa học hệ thống, tâm lý học tích cực và khoa học về hiệu suất.

---

## 📞 2. Kênh Liên Hệ Trực Tiếp (Contact Points)

*   **Email liên hệ chính thức**: [contact@leanitylabs.com](mailto:contact@leanitylabs.com)
*   **Hotline & Zalo hỗ trợ**: `086 564 2110` (Định dạng quốc tế: `+84-865-642-110`)
*   **Địa chỉ văn phòng**: `36 Đường số 4, Phường Thông Tây Hội, Gò Vấp, TP. Hồ Chí Minh, Việt Nam`
*   **Mã bưu chính (Postal Code)**: `71426`
*   **Thời gian làm việc (Opening Hours)**:
    *   Thứ Hai đến Thứ Sáu: `08:30` - `17:30`
    *   Thứ Bảy, Chủ Nhật & Ngày Lễ: Nghỉ theo quy định.

---

## 🗺️ 3. Tọa Độ Địa Lý & Bản Đồ (Geographic Coordinates)

*   **Vĩ độ (Latitude)**: `10.8326` (10°49'57.4" N)
*   **Kinh độ (Longitude)**: `106.6631` (106°39'47.2" E)
*   **Vị trí địa lý**: Phường Thông Tây Hội, Quận Gò Vấp, Thành phố Hồ Chí Minh.
*   **Liên kết chỉ đường bản đồ thực tế**: [Đường đi tới văn phòng Leanity Labs](https://www.openstreetmap.org/search?query=36%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%204%2C%20Ph%C6%B0%E1%BB%9Dng%20Th%C3%B4ng%20T%C3%A2y%20H%E1%BB%99i%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh)

---

## 🔗 4. Kênh Mạng Xã Hội & Học Thuật (sameAs Links)

*   **Mã nguồn mở (GitHub)**: [https://github.com/leanity-labs](https://github.com/leanity-labs)
*   **Mạng xã hội Doanh nghiệp (LinkedIn)**: [https://linkedin.com/company/leanity-labs](https://linkedin.com/company/leanity-labs)
*   **Hồ sơ công bố học thuật**: [https://www.researchgate.net](https://www.researchgate.net)

---

## 🛠️ 5. Cấu trúc JSON-LD Schema Mẫu (Tương thích SEO)

Mẫu kịch bản dưới đây được nhúng trực tiếp vào mã nguồn của trang liên hệ để khai báo thực thể minh bạch chuẩn chỉ:

```json
{
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
        "alternateName": "Ấn phẩm & Ban Biên tập Tri thức Khoa học Hệ thống, Tâm lý học Tích cực & Khoa học về Hiệu suất",
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
          "streetAddress": "36 Đường số 4, Phường Thông Tây Hội, Gò Vấp",
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
          "https://linkedin.com/company/leanity-labs",
          "https://www.researchgate.net"
        ]
      }
    }
  ]
}
```
