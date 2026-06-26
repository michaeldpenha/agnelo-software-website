import { defineField, defineType } from 'sanity';

const bilingualText = (name: string, title: string, type: 'string' | 'text' = 'string') =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      { name: 'en', title: 'English', type },
      { name: 'es', title: 'Spanish', type },
    ],
  });

export const serviceSchema = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'Matches the icon in code: web | mobile | api | cloud | database | consulting',
      validation: (r) => r.required(),
      options: { list: ['web', 'mobile', 'api', 'cloud', 'database', 'consulting'] },
    }),
    defineField({ name: 'order', title: 'Display order', type: 'number', validation: (r) => r.required() }),
    bilingualText('title', 'Title'),
    bilingualText('description', 'Description', 'text'),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title.en', subtitle: 'key' } },
});
