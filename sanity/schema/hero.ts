export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
    },
    {
      name: 'ctaText',
      title: 'Primary CTA Button Text',
      type: 'string',
      defaultValue: 'Book Kristy to Speak',
    },
    {
      name: 'ctaLink',
      title: 'Primary CTA Link',
      type: 'string',
      defaultValue: '#booking',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Button Text',
      type: 'string',
      defaultValue: 'Learn More',
    },
    {
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      defaultValue: '#about',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
