// Watch Schema

export default {
  name: 'brand',
  type: 'document',
  title: 'Brand',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
