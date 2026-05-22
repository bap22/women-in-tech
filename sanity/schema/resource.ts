export default {
  name: 'resource',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'url',
      title: 'Resource URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mentorship', value: 'mentorship' },
          { title: 'Learning', value: 'learning' },
          { title: 'Jobs', value: 'jobs' },
          { title: 'Community', value: 'community' },
          { title: 'Funding', value: 'funding' },
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured Resource',
      type: 'boolean',
    },
  ],
}
