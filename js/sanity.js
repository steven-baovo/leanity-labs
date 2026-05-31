/* ==========================================================================
   LEANITY LABS - SANITY.IO HEADLESS CMS INTEGRATION SYSTEM
   Fetches dynamic academic articles and renders them in Medium Editorial Style
   ========================================================================== */

const SANITY_CONFIG = {
    projectId: "iymmq5x6",        // Sanity Project ID thực tế của bạn
    dataset: "production",        // Dataset mặc định
    apiVersion: "2021-10-21",     // API version
    useCdn: true                  // Sử dụng CDN siêu tốc của Sanity
};

// Dữ liệu học thuật dự phòng chuẩn mực (Hiển thị ngay khi chưa cấu hình Sanity Project ID)
const STATIC_FALLBACK_ARTICLES = [
    {
        _id: "sanity-paper-1",
        title: "Ứng dụng Định luật Little và Lý thuyết Hàng đợi M/M/1 trong Tối ưu hóa Chu kỳ Vận hành SaaS",
        excerpt: "Nghiên cứu ứng dụng toán học chỉ ra phương pháp giảm thiểu thắt nút cổ chai dữ liệu và rút ngắn thời gian chu kỳ trong quy trình vận hành của các công ty công nghệ số...",
        publishedAt: "2026-03-15",
        authorName: "Leanity Labs Editorial Board",
        category: "systems",
        categoryText: "Khoa học Hệ thống",
        readTime: 5,
        claps: 482,
        abstract: "Nghiên cứu này giải quyết bài toán tối ưu hóa thời gian xử lý và giảm thiểu tồn đọng (work-in-progress) trong các hệ thống quy trình dịch vụ số. Bằng cách áp dụng mô hình hàng đợi M/M/1 truyền thống kết hợp với Định luật Little (L = λW), chúng tôi xây dựng một công thức tính toán năng suất biên cho phép các kiến trúc sư quy trình tự động xác định chính xác điểm tắc nghẽn thông tin. Kết quả thực nghiệm cho thấy việc ứng dụng công thức này vào bộ máy phân tích của Leanity SaaS giúp giảm trung bình 42% thời gian chu kỳ tổng thể của doanh nghiệp thử nghiệm.",
        citations: [
            "Little, J. D. (2011). \"A Proof for the Queueing Formula: L = λW\". Operations Research.",
            "Hopp, W. J., & Spearman, M. L. (2011). Factory Physics (3rd ed.). Waveland Press."
        ],
        imageUrl: "static"
    },
    {
        _id: "sanity-paper-2",
        title: "Mô hình hóa Sơ đồ Dòng Giá trị Số (Digital Value Stream Mapping) trong Kỷ nguyên Chuyển đổi Số B2B",
        excerpt: "Hệ thống hóa phương pháp vẽ sơ đồ dòng giá trị (VSM) truyền thống của Toyota thành công cụ đo đạc tự động thời gian thực bằng thuật toán thu thập dữ liệu...",
        publishedAt: "2026-01-20",
        authorName: "Leanity Labs Editorial Board",
        category: "lean",
        categoryText: "Quản trị Tinh gọn",
        readTime: 7,
        claps: 319,
        abstract: "Sơ đồ dòng giá trị (Value Stream Mapping - VSM) là công cụ tinh gọn kinh điển để xác định các lãng phí (Muda) trong sản xuất vật lý. Tuy nhiên, trong môi trường văn phòng số và dịch vụ phần mềm, các lãng phí này vô hình và cực kỳ khó đo đạc bằng phương pháp bấm giờ thủ công. Bài viết này giới thiệu mô hình \"Digital VSM\" - một hệ thống thuật toán tự động phân tích dấu vết luồng dữ liệu (activity logs) của nhân sự và hệ thống để tự động dựng lại bản đồ dòng giá trị thời gian thực. Mô hình này đã được cấu trúc hóa hoàn chỉnh để chạy ngầm trong phân hệ đo lường của Leanity SaaS.",
        citations: [
            "Rother, M., & Shook, J. (2003). Learning to See: Value Stream Mapping to Add Value and Eliminate Muda. Lean Enterprise Institute.",
            "Womack, J. P., & Jones, D. T. (2003). Lean Thinking: Banish Waste and Create Wealth in Your Corporation. Free Press."
        ],
        imageUrl: "static"
    },
    {
        _id: "sanity-paper-3",
        title: "Cân bằng Takt Time Số: Triết lý TPS ứng dụng vào Thiết kế Luồng Tự động hóa Doanh nghiệp",
        excerpt: "Phân tích chuyên sâu cách thức cân bằng nhịp độ sản sinh giá trị (Takt Time) trong các mô hình làm việc tự động giữa người và phần mềm hỗ trợ doanh nghiệp vừa và nhỏ...",
        publishedAt: "2025-11-10",
        authorName: "Leanity Labs Editorial Board",
        category: "optimization",
        categoryText: "Tối ưu hóa SaaS",
        readTime: 6,
        claps: 294,
        abstract: "Một trong những nguyên nhân lớn nhất khiến các dự án tự động hóa quy trình thất bại là sự mất cân bằng về năng lực xử lý giữa nhân sự và các bot/phần mềm tự động, tạo ra các hàng đợi công việc khổng lồ hoặc gây lãng phí tài nguyên máy tính. Nghiên cứu này ứng dụng triết lý Takt Time của Hệ thống sản xuất Toyota (TPS) để xây dựng thuật toán cân bằng tải luồng công việc số tự động (Digital Workload Balancing). Phương pháp này đã được ứng dụng trực tiếp trong lõi phân phối nhiệm vụ thông minh của Leanity SaaS.",
        citations: [
            "Ohno, T. (1988). Toyota Production System: Beyond Large-Scale Production. Productivity Press.",
            "Liker, J. K. (2004). The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer. McGraw-Hill."
        ],
        imageUrl: "static"
    }
];

// Hàm lấy tên Chuyên mục hiển thị dựa theo tag slug
function getCategoryText(slug) {
    switch (slug) {
        case "systems": return "Khoa học Hệ thống";
        case "lean": return "Quản trị Tinh gọn";
        case "optimization": return "Tối ưu hóa SaaS";
        default: return "Nghiên cứu";
    }
}

// Định dạng thời gian hiển thị học thuật
function formatPublishedDate(dateStr) {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// 1. TẢI DỮ LIỆU TỪ SANITY API (Hoặc Fallback)
async function fetchSanityArticles() {
    if (SANITY_CONFIG.projectId === "YOUR_PROJECT_ID" || !SANITY_CONFIG.projectId) {
        console.log("[Sanity.io] Chưa cấu hình Project ID. Đang hiển thị ấn phẩm tĩnh dự phòng chất lượng cao.");
        return STATIC_FALLBACK_ARTICLES;
    }

    // Câu truy vấn GROQ tối ưu
    const query = encodeURIComponent(`*[_type == "post" || _type == "article"] | order(publishedAt desc) {
        _id,
        title,
        excerpt,
        publishedAt,
        "authorName": author->name,
        category,
        readTime,
        claps,
        abstract,
        citations,
        "imageUrl": mainImage.asset->url
    }`);

    const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data && data.result && data.result.length > 0) {
            console.log(`[Sanity.io] Đã kéo thành công ${data.result.length} ấn phẩm khoa học từ CMS.`);
            return data.result.map(art => ({
                ...art,
                categoryText: getCategoryText(art.category)
            }));
        }
        console.warn("[Sanity.io] Không tìm thấy dữ liệu bài viết trên CMS. Đang sử dụng bộ dữ liệu dự phòng.");
        return STATIC_FALLBACK_ARTICLES;
    } catch (error) {
        console.error("[Sanity.io] Lỗi kết nối API Sanity, đang tự động chuyển về bộ dữ liệu dự phòng. Chi tiết:", error);
        return STATIC_FALLBACK_ARTICLES;
    }
}

// 2. KẾT XUẤT HTML BÀI VIẾT (Medium Editorial Card Template)
function generateArticleCardHTML(article, index) {
    const isStaticThumb = article.imageUrl === "static" || !article.imageUrl;
    
    // Tự động tạo SVG Thumbnail chất lượng cao theo chuyên mục nếu không có ảnh tải lên
    let thumbnailHTML = "";
    if (isStaticThumb) {
        let pathD = "M30 65 L45 40 L60 55 L80 30";
        let decorNode = `<circle cx="80" cy="30" r="3" fill="#5e6ad2"/>`;
        if (article.category === "lean") {
            pathD = "M25 25 H 75 V 75 H 25 Z";
            decorNode = `<circle cx="40" cy="50" r="3" fill="#5e6ad2"/><circle cx="65" cy="50" r="3" fill="#5e6ad2"/>`;
        } else if (article.category === "optimization") {
            pathD = "M20 50 Q 35 20, 50 50 T 80 50";
            decorNode = `<circle cx="50" cy="50" r="4" fill="#5e6ad2"/>`;
        }
        
        thumbnailHTML = `
            <svg class="thumb-svg" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#fafafa" rx="4"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#e6e6e6" stroke-width="1.5"/>
                <path d="${pathD}" fill="none" stroke="#5e6ad2" stroke-width="2" stroke-linecap="round"/>
                ${decorNode}
            </svg>
        `;
    } else {
        thumbnailHTML = `<img src="${article.imageUrl}" class="thumb-img" alt="${article.title}" style="width:100%; height:100%; object-fit:cover; border-radius: var(--radius-default); border:1px solid var(--border-color);">`;
    }

    // Danh sách trích dẫn
    let citationsHTML = "";
    if (article.citations && article.citations.length > 0) {
        citationsHTML = article.citations.map(cit => `<li>${cit}</li>`).join("");
    } else {
        citationsHTML = `<li>Ban nghiên cứu hệ thống Leanity Labs. (2026).</li>`;
    }

    return `
        <article class="paper-card" data-category="${article.category || 'systems'}">
            <div class="paper-meta">
                <span class="author-avatar-stub">LL</span>
                <span class="author-name">${article.authorName || 'Leanity Labs Editorial Board'}</span>
                <span class="meta-dot">·</span>
                <span class="paper-date">${formatPublishedDate(article.publishedAt)}</span>
                <span class="meta-dot">·</span>
                <span class="paper-tag-text">${article.categoryText || 'Nghiên cứu'}</span>
            </div>
            
            <div class="paper-body-wrapper">
                <div class="paper-main-content">
                    <h3 class="paper-title">${article.title}</h3>
                    <p class="paper-excerpt">${article.excerpt || 'Bài phân tích nghiên cứu khoa học chuyên sâu.'}</p>
                </div>
                
                <div class="paper-thumbnail">
                    ${thumbnailHTML}
                </div>
            </div>

            <div class="paper-actions">
                <div class="actions-left">
                    <span class="read-time">${article.readTime || 5} phút đọc</span>
                </div>
                
                <div class="actions-right">
                    <div class="clap-wrapper" title="Vỗ tay cổ vũ">
                        <svg class="clap-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                        <span class="clap-count">${article.claps || 0}</span>
                    </div>
                    <button class="btn-icon-download download-paper-btn" aria-label="Tải về báo cáo PDF" title="Tải PDF">
                        <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    </button>
                </div>
            </div>
        </article>
    `;
}

// 3. KHỞI TẠO BẢN KẾT XUẤT CHO TRANG CHỦ & PHÂN HỆ ẤN BẢN
async function initSanityIntegration() {
    const articles = await fetchSanityArticles();
    
    // 3.1. Kết xuất cho Trang Chủ (Home Feed - #sanity-latest-feed): Hiển thị tối đa 3 bài viết mới nhất
    const homeFeedContainer = document.getElementById("sanity-latest-feed");
    if (homeFeedContainer) {
        homeFeedContainer.innerHTML = "";
        const latestThree = articles.slice(0, 3); // Lấy 3 bài mới nhất
        latestThree.forEach((article, index) => {
            homeFeedContainer.innerHTML += generateArticleCardHTML(article, index);
        });
    }

    // 3.2. Kết xuất cho Tab Publications (Ấn Bản - #sanity-publications-feed)
    const pubFeedContainer = document.getElementById("sanity-publications-feed");
    if (pubFeedContainer) {
        pubFeedContainer.innerHTML = "";
        articles.forEach((article, index) => {
            pubFeedContainer.innerHTML += generateArticleCardHTML(article, index);
        });
    }
}

// 4. ỦY QUYỀN SỰ KIỆN CLICK (Event Delegation) CHO CÁC PHẦN TỬ DỘNG
document.addEventListener("DOMContentLoaded", () => {
    initSanityIntegration();

    // Ủy quyền click mở Abstract
    document.addEventListener("click", function (e) {
        const toggleBtn = e.target.closest(".btn-toggle-abstract");
        if (toggleBtn) {
            const targetId = toggleBtn.getAttribute("data-target");
            const detailsContainer = document.getElementById(targetId);
            
            if (detailsContainer) {
                const isOpen = detailsContainer.classList.contains("open");
                
                if (isOpen) {
                    detailsContainer.classList.remove("open");
                    toggleBtn.textContent = "Xem Abstract";
                } else {
                    // Đóng tất cả các abstract khác
                    document.querySelectorAll(".paper-details").forEach(el => el.classList.remove("open"));
                    document.querySelectorAll(".btn-toggle-abstract").forEach(el => el.textContent = "Xem Abstract");
                    
                    detailsContainer.classList.add("open");
                    toggleBtn.textContent = "Ẩn Abstract";
                    
                    // Cuộn nhẹ tới bài viết đang đọc
                    const paperCard = toggleBtn.closest(".paper-card");
                    if (paperCard) {
                        setTimeout(() => {
                            paperCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        }, 200);
                    }
                }
            }
        }
    });

    // Ủy quyền click Vỗ tay (Clap)
    document.addEventListener("click", function (e) {
        const clapWrapper = e.target.closest(".clap-wrapper");
        if (clapWrapper) {
            const countEl = clapWrapper.querySelector(".clap-count");
            let count = parseInt(countEl.textContent);
            
            count += 1;
            countEl.textContent = count;
            
            clapWrapper.classList.add("active");
            clapWrapper.style.color = "var(--primary)";
            clapWrapper.querySelector(".clap-icon").style.fill = "rgba(94, 106, 210, 0.15)";
            clapWrapper.querySelector(".clap-icon").style.stroke = "var(--primary)";
            
            clapWrapper.style.transform = "scale(1.15)";
            setTimeout(() => {
                clapWrapper.style.transform = "scale(1)";
            }, 120);
        }
    });

    // Ủy quyền click Tải báo cáo PDF giả lập
    document.addEventListener("click", function (e) {
        const downloadBtn = e.target.closest(".download-paper-btn");
        if (downloadBtn) {
            e.preventDefault();
            const paperCard = downloadBtn.closest(".paper-card");
            const paperTitle = paperCard.querySelector(".paper-title").textContent;
            
            alert(`[Leanity Labs] Báo cáo nghiên cứu PDF:\n"${paperTitle}"\nđang được chuẩn bị phát hành chính thức trên thư viện mở SSRN và ResearchGate. Vui lòng quay lại tải bản in đầy đủ trong ít ngày tới!`);
        }
    });
});
