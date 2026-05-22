export default {
  name: 'featuredStory',
  title: 'Featured Stories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Story Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
