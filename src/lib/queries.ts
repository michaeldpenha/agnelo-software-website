import { getClient } from './sanity';
import type { SanityService, SanitySiteSettings } from '../types/sanity';

const configured = () => !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export async function getServices(): Promise<SanityService[]> {
  if (!configured()) return [];
  return getClient().fetch<SanityService[]>(
    `*[_type == "service"] | order(order asc) { _id, key, order, title, description }`,
  );
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  if (!configured()) return null;
  return getClient().fetch<SanitySiteSettings | null>(
    `*[_type == "siteSettings"][0] { storyP1, storyP2, contactEmail, whatsappNumber, linkedinUrl, githubUrl }`,
  );
}
