export interface BilingualText {
  en: string;
  es: string;
}

export interface SanityService {
  _id: string;
  key: string;
  order: number;
  title: BilingualText;
  description: BilingualText;
}

export interface SanitySiteSettings {
  storyP1: BilingualText;
  storyP2: BilingualText;
  contactEmail: string;
  whatsappNumber: string;
  linkedinUrl?: string;
  githubUrl?: string;
}
