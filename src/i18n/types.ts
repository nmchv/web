// Типы контента. Все тексты лежат в src/data/<язык>/, компоненты их только выводят.
export type ProjectStatus = 'live' | 'in-progress';
export type ProjectArt = 'diary' | 'geo' | 'notes';

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
}

export interface Ui {
  lang: string;
  siteTitle: string;
  siteDescription: string;
  skipToContent: string;
  nav: { projects: string; about: string; contacts: string };
  heroCta: string;
  heroEyebrow: string;
  projects: { title: string; lead: string; open: string; newTab: string; soon: string };
  status: Record<ProjectStatus, string>;
  about: { title: string; photoAlt: string };
  education: { title: string };
  directions: { title: string; lead: string };
  contacts: { title: string; lead: string };
  footer: { toTop: string; rights: string };
}
