/* ==========================================================================
   LEANITY LABS - DEDICATED POST DETAIL LOADER
   Loads scholarly articles dynamically by slug or ID and compiles Rich Text
   ========================================================================== */

const SANITY_CONFIG = {
    projectId: "iymmq5x6",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true
};

// Dữ liệu học thuật dự phòng chất lượng cao (Trùng khớp hoàn toàn với sanity.js)
const STATIC_FALLBACK_ARTICLES = [
    {
        _id: "sanity-paper-1",
        slug: { current: "queueing-theory-saas-optimization" },
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
        slug: { current: "digital-value-stream-mapping-b2b" },
        title: "Mô hình hóa Sơ đồ Dòng Giá trị Số (Digital Value Stream Mapping) trong Kỷ nguyên Chuyển đổi Số B2B",
        excerpt: "Hệ thống hóa phương pháp vẽ sơ đồ dòng giá trị (VSM) truyền thống của Toyota thành công cụ đo đạc tự động thời gian thực bằng thuật toán thu thập dữ liệu...",
        publishedAt: "2026-01-20",
        authorName: "Leanity Labs Editorial Board",
        category: "lean",
        categoryText: "Quản trị Tinh gọn",
        readTime: 7,
        claps: 319,
        abstract: "Sơ đồ dòng giá trị (Value Stream Mapping - VSM) là công cụ tinh gọn kinh đoán để xác định các lãng phí (Muda) trong sản xuất vật lý. Tuy nhiên, trong môi trường văn phòng số và dịch vụ phần mềm, các lãng phí này vô hình và cực kỳ khó đo đạc bằng phương pháp bấm giờ thủ công. Bài viết này giới thiệu mô hình \"Digital VSM\" - một hệ thống thuật toán tự động phân tích dấu vết luồng dữ liệu (activity logs) của nhân sự và hệ thống để tự động dựng lại bản đồ dòng giá trị thời gian thực. Mô hình này đã được cấu trúc hóa hoàn chỉnh để chạy ngầm trong phân hệ đo lường của Leanity SaaS.",
        citations: [
            "Rother, M., & Shook, J. (2003). Learning to See: Value Stream Mapping to Add Value and Eliminate Muda. Lean Enterprise Institute.",
            "Womack, J. P., & Jones, D. T. (2003). Lean Thinking: Banish Waste and Create Wealth in Your Corporation. Free Press."
        ],
        imageUrl: "static"
    },
    {
        _id: "sanity-paper-3",
        slug: { current: "digital-takt-time-balancing" },
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

// Định dạng ngày hiển thị khoa học
function formatPublishedDate(dateStr) {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// 1. Trích xuất ảnh CDN từ Sanity Asset Reference
function getSanityImageUrl(ref) {
    if (!ref) return "";
    const parts = ref.split("-");
    if (parts.length < 4) return "";
    const id = parts[1];
    const dimensions = parts[2];
    const extension = parts[3];
    return `https://cdn.sanity.io/images/iymmq5x6/production/${id}-${dimensions}.${extension}`;
}

// 2. Trình biên dịch Portable Text sang HTML thuần
function portableTextToHtml(blocks) {
    if (!blocks || !Array.isArray(blocks)) return "";
    
    return blocks.map(block => {
        if (block._type === 'block') {
            const style = block.style || 'normal';
            const childrenHtml = block.children.map(child => {
                let text = child.text || "";
                // Ngăn chặn XSS bằng cách mã hóa HTML
                text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                
                if (child.marks && child.marks.length > 0) {
                    child.marks.forEach(mark => {
                        if (mark === 'strong') text = `<strong>${text}</strong>`;
                        if (mark === 'em') text = `<em>${text}</em>`;
                        if (mark === 'underline') text = `<u>${text}</u>`;
                        if (mark === 'code') text = `<code>${text}</code>`;
                        
                        // Xử lý link liên kết ngoài
                        if (block.markDefs) {
                            const linkDef = block.markDefs.find(def => def._key === mark);
                            if (linkDef && linkDef._type === 'link') {
                                text = `<a href="${linkDef.href}" target="_blank" rel="noopener noreferrer" class="post-body-link">${text}</a>`;
                            }
                        }
                    });
                }
                return text;
            }).join("");
            
            switch (style) {
                case 'h1': return `<h2>${childrenHtml}</h2>`;
                case 'h2': return `<h2>${childrenHtml}</h2>`;
                case 'h3': return `<h3>${childrenHtml}</h3>`;
                case 'h4': return `<h4>${childrenHtml}</h4>`;
                case 'blockquote': return `<blockquote>${childrenHtml}</blockquote>`;
                default: return `<p>${childrenHtml}</p>`;
            }
        } else if (block._type === 'image') {
            const imgUrl = getSanityImageUrl(block.asset?._ref);
            if (imgUrl) {
                const altText = block.alt || "Hình ảnh minh họa";
                const captionText = block.caption ? `<div class="body-image-caption" style="text-align: center; font-size:13px; color:var(--text-secondary); margin-top:8px;">${block.caption}</div>` : "";
                return `
                    <div style="margin: 36px 0; text-align: center;">
                        <img src="${imgUrl}" alt="${altText}" style="max-width:100%; border-radius:6px; border:1px solid var(--border-color-dark);">
                        ${captionText}
                    </div>
                `;
            }
        }
        return "";
    }).join("");
}

// 3. TẢI DỮ LIỆU BÀI VIẾT ĐƠN LẺ TỪ CMS
async function loadArticleDetail() {
    // 3.1. Trích xuất slug hoặc id từ URL
    const urlParams = new URLSearchParams(window.location.search);
    let slugParam = urlParams.get("slug");
    let idParam = urlParams.get("id");
    
    // Fallback: Nếu không tìm thấy trong query string, tiến hành phân tích đường dẫn URL sạch (/post/slug)
    if (!slugParam && !idParam) {
        const pathParts = window.location.pathname.split("/");
        const postIndex = pathParts.indexOf("post");
        if (postIndex !== -1 && pathParts[postIndex + 1]) {
            slugParam = pathParts[postIndex + 1];
            console.log(`[Router] Đã trích xuất được slug từ URL sạch: ${slugParam}`);
        }
    }
    
    if (!slugParam && !idParam) {
        console.warn("Không tìm thấy đường dẫn hoặc mã số bài viết trong URL. Đang quay lại trang chủ...");
        window.location.href = "index.html";
        return;
    }

    let article = null;

    // Kiểm tra xem bài viết có thuộc diện tĩnh dự phòng không
    if (slugParam) {
        article = STATIC_FALLBACK_ARTICLES.find(art => art.slug && art.slug.current === slugParam);
    } else if (idParam) {
        article = STATIC_FALLBACK_ARTICLES.find(art => art._id === idParam);
    }

    // Nếu không thuộc diện bài viết tĩnh dự phòng, tiến hành gọi API CMS
    if (!article && SANITY_CONFIG.projectId && SANITY_CONFIG.projectId !== "YOUR_PROJECT_ID") {
        let groqFilter = "";
        if (slugParam) {
            groqFilter = `slug.current == "${slugParam}"`;
        } else {
            groqFilter = `_id == "${idParam}"`;
        }

        const query = encodeURIComponent(`*[_type == "post" && (${groqFilter})][0] {
            _id,
            title,
            excerpt,
            body,
            publishedAt,
            "authorName": author->name,
            "category": category->slug.current,
            "categoryText": category->title,
            readTime,
            claps,
            citations,
            tags,
            "imageUrl": mainImage.asset->url
        }`);

        const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.result) {
                article = data.result;
                console.log("[Sanity.io] Đã tải bài viết chi tiết từ CMS thành công.");
            }
        } catch (error) {
            console.error("[Sanity.io] Lỗi kết nối API lấy chi tiết bài viết, quay lại bài dự phòng hoặc báo lỗi:", error);
        }
    }

    // 3.2. Đổ dữ liệu ra màn hình
    if (article) {
        document.title = `${article.title} | Leanity Labs`;
        document.getElementById("post-title").textContent = article.title;
        document.getElementById("post-excerpt").textContent = article.excerpt || "";
        document.getElementById("post-author").textContent = article.authorName || "Leanity Labs Editorial Board";
        document.getElementById("post-date").textContent = formatPublishedDate(article.publishedAt);
        document.getElementById("post-category").textContent = article.categoryText || "Nghiên cứu";
        document.getElementById("post-clap-count").textContent = article.claps || 0;

        // Đổ danh sách từ khóa bài viết (Tags)
        const tagsContainer = document.getElementById("post-tags-container");
        if (tagsContainer) {
            if (article.tags && article.tags.length > 0) {
                tagsContainer.innerHTML = article.tags.map(tag => `
                    <span style="font-size: 12px; font-weight: 550; color: var(--text-secondary); background-color: var(--bg-surface-hover); border: 1px solid var(--border-color-dark); padding: 4px 10px; border-radius: var(--radius-pill); cursor: default; transition: var(--transition);">
                        #${tag}
                    </span>
                `).join("");
                tagsContainer.style.display = "flex";
            } else {
                tagsContainer.style.display = "none";
            }
        }

        // Thiết lập ảnh Hero lớn
        const heroWrapper = document.getElementById("post-hero-wrapper");
        const heroImg = document.getElementById("post-hero-image");
        if (article.imageUrl && article.imageUrl !== "static") {
            heroImg.src = article.imageUrl;
            heroImg.alt = article.title;
            heroWrapper.classList.remove("hidden");
        } else {
            heroWrapper.classList.add("hidden");
        }

        // Biên dịch và đổ nội dung
        const bodyContent = document.getElementById("post-body-content");
        if (article.body && article.body.length > 0) {
            bodyContent.innerHTML = portableTextToHtml(article.body);
        } else {
            const fallbackBody = article.abstract || article.excerpt || "Nội dung bài viết đang được cập nhật.";
            bodyContent.innerHTML = `<p>${fallbackBody}</p>`;
        }

        // Xử lý phần tài liệu tham khảo (Citations)
        const citationsSection = document.getElementById("post-citations-section");
        const citationsList = document.getElementById("post-citations-list");
        if (article.citations && article.citations.length > 0) {
            citationsList.innerHTML = article.citations.map(cit => `<li>${cit}</li>`).join("");
            citationsSection.classList.remove("hidden");
        } else {
            citationsSection.classList.add("hidden");
        }

        // Gắn sự kiện click Vỗ tay (Claps) cục bộ
        const clapBtn = document.getElementById("post-clap-btn");
        if (clapBtn) {
            clapBtn.addEventListener("click", () => {
                const countEl = document.getElementById("post-clap-count");
                let count = parseInt(countEl.textContent);
                count += 1;
                countEl.textContent = count;
                
                clapBtn.classList.add("active");
                clapBtn.style.color = "var(--primary)";
                clapBtn.querySelector(".post-clap-icon").style.fill = "rgba(94, 106, 210, 0.15)";
                clapBtn.querySelector(".post-clap-icon").style.stroke = "var(--primary)";
                
                clapBtn.style.transform = "scale(1.15)";
                setTimeout(() => {
                    clapBtn.style.transform = "scale(1)";
                }, 120);
            });
        }

        // Tải danh sách bài viết liên quan (Related Articles) cùng category
        loadRelatedArticles(article._id, article.category, article.categoryText);

    } else {
        // Không tìm thấy bài viết nào
        document.getElementById("post-title").textContent = "Không tìm thấy bài nghiên cứu";
        document.getElementById("post-body-content").innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Bài viết yêu cầu không tồn tại trên hệ thống hoặc đã được gỡ xuống.</p>
                <a href="index.html" class="btn btn-primary btn-pill btn-sm">Quay lại Trang chủ</a>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadArticleDetail();
});

// 4. TẢI DỰ LIỆU BÀI VIẾT LIÊN QUAN CÙNG CHUYÊN MỤC (CATEGORY)
async function loadRelatedArticles(currentId, categorySlug, categoryText) {
    const relatedSection = document.getElementById("related-posts-section");
    const relatedList = document.getElementById("related-posts-list");
    if (!relatedSection || !relatedList) return;
    
    let relatedArticles = [];
    
    // Lọc từ bộ dữ liệu tĩnh dự phòng trước
    relatedArticles = STATIC_FALLBACK_ARTICLES.filter(art => 
        art.category === categorySlug && art._id !== currentId
    );
    
    // Nếu đã cấu hình Sanity, gọi API lấy dữ liệu thực tế cùng category
    if (SANITY_CONFIG.projectId && SANITY_CONFIG.projectId !== "YOUR_PROJECT_ID") {
        const query = encodeURIComponent(`*[_type == "post" && category->slug.current == "${categorySlug}" && _id != "${currentId}"] | order(publishedAt desc)[0...3] {
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            "authorName": author->name,
            "category": category->slug.current,
            "categoryText": category->title,
            readTime,
            "imageUrl": mainImage.asset->url
        }`);
        
        const url = `https://${SANITY_CONFIG.projectId}.api.sanity.io/v${SANITY_CONFIG.apiVersion}/data/query/${SANITY_CONFIG.dataset}?query=${query}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.result && data.result.length > 0) {
                relatedArticles = data.result;
            }
        } catch (error) {
            console.error("[Sanity.io] Lỗi kết nối lấy bài liên quan:", error);
        }
    }
    
    // Kết xuất HTML các thẻ bài viết liên quan
    if (relatedArticles && relatedArticles.length > 0) {
        relatedList.innerHTML = relatedArticles.map(art => {
            const isStaticThumb = art.imageUrl === "static" || !art.imageUrl;
            let thumbnailHTML = "";
            if (isStaticThumb) {
                let pathD = "M30 65 L45 40 L60 55 L80 30";
                if (art.category === "lean") {
                    pathD = "M25 25 H 75 V 75 H 25 Z";
                } else if (art.category === "optimization") {
                    pathD = "M20 50 Q 35 20, 50 50 T 80 50";
                }
                thumbnailHTML = `
                    <svg style="width:100%; height:110px; background-color:#fafafa; border-radius:4px; border:1px solid var(--border-color-dark);" viewBox="0 0 100 100">
                        <path d="${pathD}" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                `;
            } else {
                thumbnailHTML = `<img src="${art.imageUrl}" alt="${art.title}" style="width:100%; height:110px; object-fit:cover; border-radius:4px; border:1px solid var(--border-color-dark);">`;
            }
            
            const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
            const linkHref = art.slug?.current 
                ? (isLocal ? `post.html?slug=${art.slug.current}` : `post/${art.slug.current}`)
                : `post.html?id=${art._id}`;
            
            return `
                <a href="${linkHref}" style="text-decoration:none; display:flex; flex-direction:column; gap:10px; color:inherit; transition:var(--transition); padding:12px; border-radius:8px; border:1px solid var(--border-color); background-color:var(--bg-surface);" class="related-card">
                    ${thumbnailHTML}
                    <span style="font-size:11px; font-weight:700; color:var(--primary); text-transform:uppercase; letter-spacing:0.05em;">${art.categoryText || categoryText}</span>
                    <h4 style="font-family:var(--font-serif); font-size:14px; font-weight:700; line-height:1.4; color:var(--text-primary); margin:0; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${art.title}</h4>
                    <span style="font-size:11px; color:var(--text-muted);">${formatPublishedDate(art.publishedAt)} &bull; ${art.readTime || 5} phút đọc</span>
                </a>
            `;
        }).join("");
        
        // Thêm CSS hover inline
        const styleNode = document.createElement("style");
        styleNode.innerHTML = `
            .related-card {
                box-shadow: var(--shadow-subtle);
            }
            .related-card:hover {
                transform: translateY(-3px);
                border-color: rgba(94, 106, 210, 0.25) !important;
                background-color: var(--bg-surface-hover) !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            }
        `;
        document.head.appendChild(styleNode);
        
        relatedSection.classList.remove("hidden");
    } else {
        relatedSection.classList.add("hidden");
    }
}
