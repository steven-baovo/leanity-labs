export default {
  name: 'post',
  title: 'Bài viết',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tiêu đề bài nghiên cứu',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(120)
    },
    {
      name: 'excerpt',
      title: 'Đoạn trích / Tóm tắt ngắn',
      type: 'text',
      rows: 3,
      description: 'Hiển thị ở trang chủ dưới tiêu đề để lôi cuốn người đọc.'
    },
    {
      name: 'publishedAt',
      title: 'Ngày xuất bản',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'author',
      title: 'Tác giả',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'category',
      title: 'Chuyên mục',
      type: 'string',
      options: {
        list: [
          { title: 'Khoa học Hệ thống (Systems)', value: 'systems' },
          { title: 'Quản trị Tinh gọn (Lean)', value: 'lean' },
          { title: 'Tối ưu hóa SaaS (Optimization)', value: 'optimization' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Thời gian đọc (phút)',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'claps',
      title: 'Lượt vỗ tay (Claps)',
      type: 'number',
      initialValue: 120
    },
    {
      name: 'mainImage',
      title: 'Ảnh nền bài viết',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
