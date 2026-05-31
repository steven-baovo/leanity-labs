export default {
  name: 'category',
  title: 'Chuyên mục',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tên chuyên mục',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Đường dẫn (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      description: 'Đường dẫn dạng không dấu của danh mục, dùng cho bộ lọc trên web (ví dụ: systems, lean, optimization).',
      validation: Rule => Rule.required()
    }
  ]
}
