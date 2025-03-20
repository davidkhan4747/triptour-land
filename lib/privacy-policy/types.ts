import { Language } from '@/types';

export interface Section {
  title: Record<Language, string>;
  content: Record<Language, string>;
}

export interface Agreement {
  title: Record<Language, string>;
  lastUpdated: Record<Language, string>;
  introduction: Record<Language, string>;
  sections: Section[];
}

export const phoneNumbers: Record<Language, string> = {
  uz: '+998785557788',
  ru: '+998785557789',
  en: '+998785557790'
};
