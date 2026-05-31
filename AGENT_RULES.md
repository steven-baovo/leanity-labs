# 🔴 NGUYÊN TẮC VẬN HÀNH TỐI CAO DÀNH CHO AI AGENT (SUPREME AI OPERATIONAL RULES)

> [!IMPORTANT]
> **YÊU CẦU BẮT BUỘC (CRITICAL MANDATE)**:
> Mọi trợ lý AI coding hoặc Agent khi khởi chạy, tiếp quản hoặc tiếp tục làm việc trên workspace này **BẮT BUỘC PHẢI ĐỌC TỆP TIN NÀY ĐẦU TIÊN** trước khi thực hiện bất kỳ hành động hoặc đề xuất nào.

---

## 🚫 1. Nguyên Tắc Tối Cao: Hạn Chế Tự Ý Đẩy Code Lên GitHub (`git push`)

1. **Tuyệt đối KHÔNG tự ý chạy lệnh `git push`**:
   * Agent **không được phép** thực hiện lệnh `git push` (hoặc bất kỳ công cụ/API nào tương đương nhằm đẩy code lên repository từ xa) dưới mọi hình thức, trừ khi có **lệnh yêu cầu rõ ràng, trực tiếp bằng văn bản từ USER** trong phiên chat.
2. **Quy trình Quản lý Mã nguồn Cục bộ**:
   * Mọi sửa đổi, tinh chỉnh, bổ sung mã nguồn chỉ được phép dừng lại ở mức **Staged** (`git add`) hoặc **Local Commit** (`git commit`) trên máy tính cục bộ của USER.
   * Agent chỉ được phép thông báo cho USER biết mã nguồn đã được commit an toàn tại local và chờ lệnh đẩy (`push`) hoặc để USER tự thực hiện thủ công.

---

## 🛠️ 2. Tiêu Chuẩn Phát Triển & Công Nghệ (Development Standards)

1. **Tuân thủ UX/UI Thiết kế Medium Editorial**:
   * Website tuân thủ nghiêm ngặt phong cách **Medium Light Paper Editorial** (Nền sáng giống giấy, typography Serif sang trọng và cột đọc căn giữa 720px).
   * **KHÔNG** tự ý import hoặc sử dụng Tailwind CSS trừ khi USER chỉ định rõ phiên bản và yêu cầu cụ thể. Sử dụng CSS thuần tùy biến cao trong `css/styles.css`.
2. **Tương tác và Tích hợp CMS**:
   * Các bài nghiên cứu được tải động thông qua Sanity CMS public fetch client (`projectId: iymmq5x6`).
   * Luôn đảm bảo cơ chế dữ liệu dự phòng (static fallbacks) hoạt động trơn tru trong trường hợp API của Sanity bị ngắt hoặc chưa được cấu hình CORS.
   * Mọi sự kiện click trên các thành phần được render động từ CMS phải được bắt bằng kỹ thuật **Ủy quyền Sự kiện (Event Delegation)** trong JS để tránh mất listener.

---

## 📁 3. Trách Nhiệm Duy Trì Tài Liệu

* Mọi thay đổi lớn về UX/UI phải được cập nhật vào [DESIGN_LANGUAGE.md](file:///D:/Leanity%20Labs/DESIGN_LANGUAGE.md) dành riêng cho phần thiết kế.
* Tệp tin `AGENT_RULES.md` này chỉ được chỉnh sửa hoặc bổ sung khi có sự đồng ý trực tiếp từ USER.
