export default {
  name: 'speakerTopic',
  title: 'Speaking Topics',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Topic Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Topic Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      options: {
        list: [
          { title: '30 minutes', value: '30' },
          { title: '45 minutes', value: '45' },
          { title: '1 hour', value: '60' },
          { title: 'Half day workshop', value: 'half-day' },
          { title: 'Full day workshop', value: 'full-day' },
        ],
      },
    },
    {
      name: 'audience',
      title: 'Target Audience',
      type: 'string',
      options: {
        list: [
          { title: 'Construction Professionals', value: 'construction' },
          { title: 'Women in Business', value: 'women-business' },
          { title: 'Leadership Teams', value: 'leadership' },
          { title: 'General Audience', value: 'general' },
        ],
      },
    },
    {
      name: 'icon',
      title: 'Icon Emoji',
      type: 'string',
      description: 'e.g., 🏗️, 💪, 🎯',
    },
  ],
}
