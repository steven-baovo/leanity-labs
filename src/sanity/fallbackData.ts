import { Article } from "./queries";

export const STATIC_FALLBACK_ARTICLES: Article[] = [
  {
    _id: "fallback-paper-1",
    title: "Ứng dụng Định luật Little và Lý thuyết Hàng đợi M/M/1 trong Tối ưu hóa Chu kỳ Vận hành Hệ thống",
    slug: { current: "ung-dung-dinh-luat-little-va-ly-thuyet-hang-doi-mm1" },
    excerpt: "Nghiên cứu ứng dụng toán học chỉ ra phương pháp giảm thiểu thắt nút cổ chai dữ liệu và rút ngắn thời gian chu kỳ trong quy trình vận hành phức tạp...",
    publishedAt: "2026-03-15T00:00:00.000Z",
    authorName: "Leanity Labs Editorial Board",
    category: "systems",
    categoryText: "Khoa học Hệ thống",
    readTime: 5,
    claps: 482,
    abstract: "Nghiên cứu này giải quyết bài toán tối ưu hóa thời gian xử lý và giảm thiểu tồn đọng (work-in-progress) trong các hệ thống quy trình dịch vụ số. Bằng cách áp dụng mô hình hàng đợi M/M/1 truyền thống kết hợp với Định luật Little (L = λW), chúng tôi xây dựng một công thức tính toán năng suất biên cho phép các nhà nghiên cứu quy trình xác định chính xác điểm tắc nghẽn thông tin. Kết quả thực nghiệm cho thấy việc ứng dụng công thức này vào các mô hình mô phỏng của Leanity Labs giúp giảm trung bình 42% thời gian chu kỳ tổng thể của hệ thống thử nghiệm.",
    citations: [
      "Little, J. D. (2011). \"A Proof for the Queueing Formula: L = λW\". Operations Research.",
      "Hopp, W. J., & Spearman, M. L. (2011). Factory Physics (3rd ed.). Waveland Press."
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
            text: "Trong khoa học hệ thống, các quy trình vận hành đối mặt với thách thức lớn về xử lý luồng thông tin khổng lồ. Việc tắc nghẽn thông tin tương đương với tồn kho trong các nhà máy vật lý, gây lãng phí tài nguyên và làm chậm tốc độ đáp ứng của toàn bộ hệ thống."
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
    title: "Tâm lý học Tích cực và Vai trò của Sự Trải nghiệm Trôi chảy (Flow State) trong Hiệu suất Nhận thức",
    slug: { current: "mo-hinh-hoa-so-do-dong-gia-tri-so" },
    excerpt: "Nghiên cứu về trạng thái trôi chảy (Flow) theo lý thuyết tâm lý học và cách thiết lập môi trường tối ưu hóa sự tập trung sáng tạo, giảm căng thẳng nhận thức...",
    publishedAt: "2026-01-20T00:00:00.000Z",
    authorName: "Leanity Labs Editorial Board",
    category: "psychology",
    categoryText: "Tâm lý học Tích cực",
    readTime: 7,
    claps: 319,
    abstract: "Nghiên cứu này hệ thống hóa các nhân tố kích hoạt trạng thái trôi chảy (Flow State) trong hoạt động nhận thức chuyên sâu. Dựa trên các nguyên lý của tâm lý học tích cực, chúng tôi phân tích mối quan hệ giữa độ khó của nhiệm vụ và kỹ năng của cá nhân, từ đó đề xuất mô hình tự điều chỉnh năng lượng tinh thần. Kết quả cho thấy việc thiết lập các nhịp độ làm việc tập trung cao độ giúp cải thiện 45% cảm giác hài lòng và hiệu suất nhận thức tổng thể của học giả tham gia thực nghiệm.",
    citations: [
      "Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience. Harper & Row.",
      "Seligman, M. E. P. (2011). Flourish: A Visionary New Understanding of Happiness and Well-being. Free Press."
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
            text: "Trạng thái trôi chảy (Flow State) là đỉnh cao của sự tập trung, nơi một người hoàn toàn hòa mình vào hoạt động hiện tại. Trong tâm lý học tích cực, Flow được xem là chìa khóa mở ra tiềm năng tối đa của nhận thức con người."
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
            text: "1. Sự cân bằng giữa Thách thức và Kỹ năng"
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
            text: "Để đạt được trạng thái trôi chảy, độ khó của tác vụ phải tương thích trực tiếp với kỹ năng của cá nhân. Nếu nhiệm vụ quá khó sẽ gây lo âu, ngược lại nếu quá dễ sẽ dẫn đến cảm giác nhàm chán và phân tâm."
          }
        ]
      }
    ]
  },
  {
    _id: "fallback-paper-3",
    title: "Cân bằng Takt Time Số: Triết lý TPS ứng dụng vào Thiết kế Luồng Hiệu suất Con người và Hệ thống",
    slug: { current: "can-bang-takt-time-so" },
    excerpt: "Phân tích chuyên sâu cách thức cân bằng nhịp độ sản sinh giá trị (Takt Time) trong các mô hình làm việc phối hợp giữa con người và hệ thống kỹ thuật số...",
    publishedAt: "2025-11-10T00:00:00.000Z",
    authorName: "Leanity Labs Editorial Board",
    category: "performance",
    categoryText: "Khoa học về Hiệu suất",
    readTime: 6,
    claps: 294,
    abstract: "Một trong những nguyên nhân lớn nhất khiến các dự án phối hợp hệ thống thất bại là sự mất cân bằng về năng lực xử lý giữa nhân sự và các công cụ tự động, tạo ra các hàng đợi công việc khổng lồ hoặc gây lãng phí năng lực tinh thần. Nghiên cứu này ứng dụng triết lý Takt Time của Hệ thống sản xuất Toyota (TPS) để xây dựng thuật toán cân bằng tải luồng công việc số tự động (Digital Workload Balancing). Phương pháp này giúp nâng cao đáng kể chỉ số hiệu suất chung mà vẫn đảm bảo sức khỏe tinh thần của người vận hành.",
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
            text: "Takt Time là nhịp điệu của nhu cầu hệ thống. Trong quy trình làm việc phối hợp giữa con người và máy móc, việc đồng bộ hóa nhịp điệu này quyết định sự trơn tru của toàn bộ luồng hiệu suất."
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
            text: "1. Triết lý TPS trong hiệu suất công việc số"
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
            text: "Chúng tôi áp dụng khái niệm 'cân bằng chuyền' vào luồng công việc số, giúp phân phối đồng đều các tác vụ, triệt tiêu thời gian nhàn rỗi của hệ thống tự động và giảm bớt tình trạng quá tải nhận thức của nhân sự."
          }
        ]
      }
    ]
  }
];
