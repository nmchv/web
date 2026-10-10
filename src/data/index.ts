// Единая точка доступа к контенту. Для новых языков добавьте папку src/data/<lang>/
// и выбор языка здесь (или в src/pages/<lang>/index.astro).
import { ui } from './ru/ui';
import { profile } from './ru/profile';
import { projects } from './ru/projects';
import { education } from './ru/education';
import { contacts } from './ru/contacts';
import { directions } from './ru/directions';

export const content = {
  ui,
  profile,
  projects: [...projects].sort((a, b) => a.order - b.order),
  education,
  contacts,
  directions,
};

export type SiteContent = typeof content;
