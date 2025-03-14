export type Language = 'uz' | 'ru' | 'en';

export interface NavItem {
  href: string;
  label: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface Destination {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  image: string;
}

export interface Service {
  id: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  icon: string;
}

export interface Branch {
  city: {
    uz: string;
    ru: string;
    en: string;
  };
  phone: string;
  type: string;
}
