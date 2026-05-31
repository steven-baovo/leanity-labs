import { Article } from "./queries";

export const STATIC_FALLBACK_ARTICLES: Article[] = [
  {
    _id: "fallback-paper-1",
    title: "Ứng dụng Định luật Little và Lý thuyết Hàng đợi M/M/1 trong Tối ưu hóa Chu kỳ Vận hành SaaS",
    slug: { current: "ung-dung-dinh-luat-little-va-ly-thuyet-hang-doi-mm1" },
    excerpt: "Nghiên cứu ứng dụng toán học chỉ ra phương pháp giảm thiểu thắt nút cổ chai dữ liệu và rút ngắn thời gian chu kỳ trong quy trình vận hành của các công ty công nghệ số...",
    publishedAt: "2026-03-15T00:00:00.000Z",
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
    imageUrl: "", // We can leave it blank to render category-specific dynamic visual or simple placeholder
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "Trong thời đại số hóa, các quy trình vận hành doanh nghiệp (đặc biệt là SaaS) đối mặt với thách thức lớn về xử lý luồng thông tin khổng lồ. Việc tắc nghẽn thông tin tương đương với tồn kho trong các nhà máy vật lý, gây lãng phí tài nguyên và làm chậm tốc độ đáp ứng khách hàng."
          }
        ]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "1. Định luật Little trong quy trình số"
          }
        ]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "Áp dụng Định luật Little (L = λ * W), trong đó L đại diện cho số lượng nhiệm vụ đang xử lý (WIP), λ là tốc độ xử lý trung bình và W là thời gian hoàn thành (Cycle Time). Bằng cách kiểm soát WIP chặt chẽ, ta có thể rút ngắn Cycle Time tối đa mà không cần gia tăng nhân sự."
          }
        ]
      }
    ]
  },
  {
    _id: "fallback-paper-2",
    title: "Mô hình hóa Sơ đồ Dòng Giá trị Số (Digital Value Stream Mapping) trong Kỷ nguyên Chuyển đổi Số B2B",
    slug: { current: "mo-hinh-hoa-so-do-dong-gia-tri-so" },
    excerpt: "Hệ thống hóa phương pháp vẽ sơ đồ dòng giá trị (VSM) truyền thống của Toyota thành công cụ đo đạc tự động thời gian thực bằng thuật toán thu thập dữ liệu...",
    publishedAt: "2026-01-20T00:00:00.000Z",
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
    imageUrl: "",
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "Trong quản trị tinh gọn (Lean), sơ đồ dòng giá trị (VSM) là công cụ xương sống để nhận diện lãng phí. Nhưng làm thế nào để áp dụng nó vào thế giới vô hình của các luồng dữ liệu số?"
          }
        ]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "1. VSM số hóa thời gian thực"
          }
        ]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "Bằng cách khai thác nhật ký hoạt động (activity logs) từ các phần mềm doanh nghiệp, thuật toán của chúng tôi tự động vẽ lại bản đồ dòng công việc, chỉ ra các thời gian chờ vô ích và các nút thắt cổ chai mà mắt thường không thể nhìn thấy."
          }
        ]
      }
    ]
  },
  {
    _id: "fallback-paper-3",
    title: "Cân bằng Takt Time Số: Triết lý TPS ứng dụng vào Thiết kế Luồng Tự động hóa Doanh nghiệp",
    slug: { current: "can-bang-takt-time-so" },
    excerpt: "Phân tích chuyên sâu cách thức cân bằng nhịp độ sản sinh giá trị (Takt Time) trong các mô hình làm việc tự động giữa người và phần mềm hỗ trợ doanh nghiệp vừa và nhỏ...",
    publishedAt: "2025-11-10T00:00:00.000Z",
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
    imageUrl: "",
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "Takt Time là nhịp điệu của thị trường. Trong quy trình làm việc phối hợp giữa con người và máy móc, việc đồng bộ hóa nhịp điệu này quyết định sự trơn tru của toàn hệ thống."
          }
        ]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "1. Triết lý TPS trong kỷ nguyên số"
          }
        ]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "Chúng tôi áp dụng khái niệm 'cân bằng chuyền' vào luồng công việc số, giúp phân phối đồng đều các tác vụ, triệt tiêu thời gian nhàn rỗi của bot và tình trạng quá tải của nhân sự."
          }
        ]
      }
    ]
  }
];
