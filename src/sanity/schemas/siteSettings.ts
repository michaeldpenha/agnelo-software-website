import { defineField, defineType } from 'sanity';

const bilingual = (name: string, title: string, type: 'string' | 'text' = 'text') =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      { name: 'en', title: 'English', type },
      { name: 'es', title: 'Spanish', type },
    ],
  });

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    bilingual('storyP1', 'About — Story paragraph 1'),
    bilingual('storyP2', 'About — Story paragraph 2'),
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp number', type: 'string' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});
