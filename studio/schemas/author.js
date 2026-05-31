export default {
  name: 'author',
  title: 'Tác giả',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tên tác giả',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Ảnh đại diện',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
