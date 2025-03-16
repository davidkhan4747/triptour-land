import { Language } from '@/types';

export interface ContentSection {
  title: Record<Language, string>;
  content: Record<Language, string>;
}

export interface PrivacyContent {
  title: Record<Language, string>;
  lastUpdated: Record<Language, string>;
  introduction: Record<Language, string>;
  dataCollection: ContentSection;
  dataUsage: ContentSection;
  dataSecurity: ContentSection;
  contact: ContentSection;
}

export const phoneNumbers: Record<Language, string> = {
  uz: '+998785557788',
  ru: '+998785557789',
  en: '+998785557790'
};
