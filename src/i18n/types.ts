// Типы контента. Все тексты лежат в src/data/<язык>/, компоненты их только выводят.
export type ProjectStatus = 'live' | 'in-progress';
export type ProjectArt = 'diary' | 'geo' | 'notes' | 'test' | 'graph' | 'world-map' | 'forms' | 'exam';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  /** Адрес проекта. Если не указан, карточка показывается без ссылки. */
  url?: string;
  status: ProjectStatus;
  /** Ключ встроенной SVG-графики или путь к своему изображению в /public */
  art: ProjectArt;
  image?: string;
  featured: boolean;
  order: number;
}

export interface Profile {
  name: string;
  shortName: string;
  additionalName?: string;
  alias: string;
  signature: string[];
  lead: string;
  about: string[];
  photo?: { src: string; alt: string; width: number; height: number };
}

export interface TimelineItem {
  period: string;
  title: string;
  place?: string;
  note?: string;
}

export interface Contact {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface Direction {
  id: string;
  title: string;
  description?: string;
}

export interface Ui {
  lang: string;
  ogLocale: string;
  siteTitle: string;
  siteDescription: string;
  skipToContent: string;
  homeLabel: string;
  navLabel: string;
  footerNavLabel: string;
  signatureLabel: string;
  aliasLabel: string;
  schoolLabel: string;
  schoolCaption: string;
  language: {
    label: string;
    russian: string;
    english: string;
    french: string;
    spanish: string;
    korean: string;
    chinese: string;
    japanese: string;
    german: string;
    swedish: string;
  };
  nav: { home: string; projects: string; about: string; contacts: string };
  heroEyebrow: string;
  projects: { title: string; lead: string; open: string; newTab: string; soon: string; allLink: string };
  projectsPage: {
    title: string;
    lead: string;
    back: string;
    visit: string;
    newTab: string;
    mapLabel: string;
    filterLabel: string;
    filterAll: string;
    filterLive: string;
    filterDevelopment: string;
    filterResults: string;
  };
  status: Record<ProjectStatus, string>;
  about: { title: string; photoAlt: string };
  education: { title: string };
  directions: { title: string; lead: string };
  contacts: { title: string; lead: string; bookingCta: string; lessonLanguages: string };
  footer: { toTop: string; rights: string };
}
