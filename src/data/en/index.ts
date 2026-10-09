import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: "Teacher's planner",
    description:
      'A digital tool for organizing the learning process: grades, attendance, lesson plans, homework, and statistics.',
    category: 'Education / EdTech',
  },
  geotrainer: {
    title: 'Geography trainer',
    description: 'An online tool for practising geographical names and locations.',
    category: 'Geography / Education',
  },
  'geography-notes': {
    title: 'Geography notes',
    description:
      'Structured notes on school geography topics to help organize and review what you have learned.',
    category: 'Geography / Learning resources',
  },
  'student-tests': {
    title: 'Student quizzes',
    description: 'Online quizzes to check students’ knowledge.',
    category: 'Education / Quizzes',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'en',
    ogLocale: 'en_US',
    siteTitle: 'Aleksei Nemichev — Geography teacher and educational technology developer',
    siteDescription:
      'The personal website of Aleksei Nemichev, a geography teacher and developer of educational tools. Explore projects and areas of work.',
    skipToContent: 'Skip to content',
    homeLabel: 'Aleksei Nemichev, back to top',
    navLabel: 'Main navigation',
    footerNavLabel: 'Footer navigation',
    signatureLabel: 'Professional introduction',
    aliasLabel: 'Alias ·',
    schoolLabel: 'School No. 116',
    schoolCaption: 'a space for solutions',
    language: {
      label: 'Choose language',
      russian: 'Русский',
      english: 'English',
      french: 'Français',
      spanish: 'Español',
      korean: '한국어',
      chinese: '中文',
      japanese: '日本語',
      german: 'Deutsch',
      swedish: 'Svenska',
    },
    nav: { projects: 'Projects', about: 'About', contacts: 'Contact' },
    heroEyebrow: 'Personal website',
    heroCta: 'Explore my projects',
    projects: {
      title: 'My projects',
      lead: 'Educational tools and digital solutions I create.',
      open: 'Open',
      newTab: '(opens in a new tab)',
      soon: 'Coming soon',
    },
    status: { live: 'Available', 'in-progress': 'In progress' },
    about: { title: 'About me', photoAlt: 'Portrait of Aleksei Nemichev' },
    education: { title: 'Education and experience' },
    directions: {
      title: 'Areas of work',
      lead: 'Fields I work in at their intersections.',
    },
    contacts: { title: 'Contact', lead: 'For collaboration and feedback.' },
    footer: { toTop: 'Back to top', rights: 'Aleksei Nemichev' },
  },
  profile: {
    name: 'Aleksei Nemichev',
    shortName: 'Aleksei Nemichev',
    alias: 'Geographer',
    signature: ['Geography teacher', 'Developer', 'Student'],
    lead: 'I explore, create, and develop tools at the intersection of geography, education, and technology.',
    about: [
      'I work in education while developing my own digital projects.',
      'I create tools that I use in my teaching.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: 'Geography and research' },
    { id: 'edu', title: 'Education' },
    { id: 'dev', title: 'Digital tool development' },
    { id: 'ai', title: 'Technology and artificial intelligence' },
  ],
};
