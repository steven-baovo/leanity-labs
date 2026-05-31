# 🎨 Hệ Thống Quy Chuẩn Thiết Kế Giao Diện (UI/UX Design System Specification) - Medium Editorial Style

Tài liệu này quy định hệ thống quy chuẩn thiết kế giao diện **Medium Editorial Style** dành riêng cho **Leanity Labs**. Hệ thống này được thiết kế dựa trên triết lý tối giản, tập trung tối đa vào thói quen đọc và tính học thuật cao cấp của **Medium.com**:
*   Loại bỏ hoàn toàn các chức năng đăng bài của người dùng thường (chỉ phục vụ một chiều cho Ban biên soạn).
*   Sử dụng nền giấy sáng (Light Paper Canvas) có độ tương phản cao, dịu mắt.
*   Tôn vinh nghệ thuật chữ (Serif Typography) và khoảng trắng (Whitespace) để tối ưu hóa sự tập trung tri thức.

---

## 📐 1. Quy Chuẩn Góc Bo & Khoảng Trắng (Radii & Grid System)

*   **Bo góc tối giản**:
    *   **Mặc định**: `6px` hoặc `8px` (`rounded-md`) cho Card bộ mô phỏng (Simulator) và các trường thông tin.
    *   **Bo tròn Pill (`rounded-full`)**: Dành riêng cho các nhãn danh mục (Badges) và nút bấm chính để tạo điểm nhấn hiện đại.
*   **Whitespace (Khoảng thở)**:
    *   Khoảng cách biên và đệm được nới rộng tối đa để tạo cảm giác thoáng đãng, sang trọng (tương tự trang đọc báo cao cấp).

---

## 🌈 2. Bảng Màu Giấy Cao Cấp (Light Paper Palette)

Bảng màu được tinh chỉnh để đạt tỷ lệ tương phản hoàn hảo (WCAG 2.1 AAA), giúp việc đọc tài liệu dài trở nên vô cùng dễ chịu dưới ánh sáng tự nhiên.

*   **Background (Nền chính)**: Màu trắng giấy tự nhiên `#ffffff` hoặc kem giấy siêu nhẹ `#fbfbfb`.
*   **Surface (Nền Card phụ)**: Màu xám giấy nhạt `#f2f2f2` hoặc xám mềm `#fafafa`.
*   **Text Primary (Chữ chính)**: Màu than đá sâu thẳm `#191919` hoặc `#242424` (thay vì màu đen kịt) để giảm mỏi mắt.
*   **Text Secondary (Chữ phụ & Chú thích)**: Xám trung tính `#6b6b75` hoặc `#757575`.
*   **Primary Accent (Màu nhấn thương hiệu)**: Màu xanh cổ vịt tối giản của Medium `#1a8917` (hoặc Tím Indigo học thuật `#5e6ad2` để duy trì nhận diện Leanity). Chúng tôi sẽ chọn **Tím Indigo `#5e6ad2`** để giữ vững sợi dây liên kết thương hiệu với **Leanity SaaS** nhưng được phối hợp mượt mà trên nền sáng.
*   **Border (Đường kẻ mảnh)**: Rất mảnh và nhẹ màu `#e6e6e6` hoặc `#f2f2f2` (`1px solid`).

---

## 📚 3. Quy Chuẩn Typography Ấn Bản (Medium Serif Typography)

Nghệ thuật chữ là trọng tâm của giao diện Medium Style. Trải nghiệm đọc được cấu trúc hóa chặt chẽ:

1.  **Hệ thống Font chữ (Font Family Hierarchy)**:
    *   **Tiêu đề & Nội dung đọc (Headings & Article Body)**: Sử dụng font chữ **Merriweather** hoặc **Playfair Display** (Serif) có chân cổ điển, uy tín, mang lại cảm giác học thuật tối thượng và độ bám mắt cực tốt.
    *   **Thành phần điều hướng & UI (UI Elements)**: Sử dụng font chữ **Plus Jakarta Sans** hoặc **Outfit** (Sans-serif) không chân hiện đại để giữ cho Menu, Nút bấm và Thống số luôn sắc nét, gọn gàng.
2.  **Độ giãn dòng & Cỡ chữ đọc (Readability Specs)**:
    *   Cỡ chữ nội dung đọc chính: `1.05rem` - `1.15rem`.
    *   Độ giãn dòng (Line-height): `line-height: 1.75` (leading-relaxed) kết hợp căn lề cột đọc trung tâm cố định ở mức rộng `680px` - `720px` (Medium Reading Column Standard) để mắt không phải di chuyển ngang quá xa.
3.  **Hộp trích dẫn nổi bật (Medium Blockquotes)**:
    *   Nằm giữa cột đọc, cỡ chữ lớn hơn (`1.3rem`), in nghiêng (italic), biên trái kẻ mảnh 3px màu tím Indigo `#5e6ad2` hoặc xám đậm `#242424`.

---

## 📊 4. Thiết Kế Công Cụ Tương Tác Học Thuật (Simulator & Widgets Integration)

Để bộ mô phỏng vận hành (Simulator) hòa hợp với thiết kế phẳng tinh tế của Medium:

*   **Visual Structure**: Bộ mô phỏng được bọc trong các card viền mảnh nền xám nhạt `#f9f9f9` với bóng đổ tactile cực nhẹ `.shadow-subtle` (`box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02)`).
*   **Biểu đồ & Progress Ring**:
    *   Đường đồ thị SVG màu tím Indigo `#5e6ad2` mảnh (`stroke-width: 2`).
    *   Progress Ring bao quanh điểm số trung tâm có màu xám nhạt làm nền và màu Indigo cho phần phần trăm hoàn thành.

---

## 🔗 5. Quy Chuẩn Nhãn Tự Mô Tả & Entity Schema

Duy trì nghiêm ngặt các khai báo kỹ thuật E-E-A-T và khả năng tiếp cận:
*   Mọi liên kết đọc báo, nút tải về PDF bắt buộc khai báo `aria-label` mô tả rõ bài báo nghiên cứu nào.
*   Cài đặt Schema JSON-LD định nghĩa rõ mối quan hệ khoa học giữa `ResearchOrganization` (Leanity Labs) và `SoftwareApplication` (Leanity SaaS) để Googlebot dễ dàng trích xuất thông tin.
