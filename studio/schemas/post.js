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
      name: 'body',
      title: 'Nội dung bài viết',
      type: 'array',
      description: 'Nội dung chi tiết của bài viết nghiên cứu khoa học, hỗ trợ định dạng Rich Text.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Văn bản thường', value: 'normal' },
            { title: 'Tiêu đề H2', value: 'h2' },
            { title: 'Tiêu đề H3', value: 'h3' },
            { title: 'Tiêu đề H4', value: 'h4' },
            { title: 'Trích dẫn', value: 'blockquote' }
          ],
          lists: [
            { title: 'Danh sách tròn', value: 'bullet' },
            { title: 'Danh sách số', value: 'number' }
          ]
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Văn bản thay thế (Alt text)',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Chú thích hình ảnh'
            }
          ]
        }
      ]
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
      type: 'reference',
      to: [{ type: 'category' }],
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
