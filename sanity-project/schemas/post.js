export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).error('Title must be at least 10 characters long'),
        Rule.required().max(80).warning("It's better to use short titles than long titles"),
      ],
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => [
        Rule.max(120).error('Description must be less than 120 characters long'),
      ],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'text',
      validation: (Rule) => [Rule.required().error('Content is required')],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Image is required')],
    },
  ],
}
