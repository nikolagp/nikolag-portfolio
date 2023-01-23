export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Post Category',
      name: 'post_category',
      type: 'string',
      validation: (Rule) => Rule.required().error('Category is required'),
    },
  ],
}
