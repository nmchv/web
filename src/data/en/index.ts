import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: "Teacher's planner",
    description:
      'A work-in-progress digital workspace for teachers to organize grades, attendance, lesson plans, homework, and class statistics.',
    category: 'Education',
  },
  geotrainer: {
    title: 'Geography trainer',
    description:
      'An interactive geography practice tool for learning place names and locating geographic features on a map.',
    category: 'Geography',
  },
  'geography-notes': {
    title: 'Geography notes',
    description:
      'A structured collection of school geography notes that helps learners understand topics, organize key ideas, and review material.',
    category: 'Geography',
  },
  'student-tests': {
    title: 'Student quizzes',
    description: 'An online quiz service for checking students’ knowledge and reinforcing material covered in class.',
    category: 'Education',
  },
  'knowledge-graph': {
    title: 'Knowledge graph',
    description:
      'An interactive map of connections between concepts and fields of knowledge, designed to make relationships between ideas easier to explore.',
    category: 'Knowledge',
  },
  'world-map': {
    title: 'Interactive world map',
    description:
      'An interactive map for exploring the world and working with geographic features.',
    category: 'Geography',
  },
  'online-forms': {
    title: 'Online forms',
    description:
      'A service for creating online forms and collecting responses, similar in purpose to Google Forms.',
    category: 'Productivity',
  },
  'exam-trainer': {
    title: 'Exam preparation trainer',
    description:
      'An online tool for exam preparation through practice questions and topic review.',
    category: 'Education',
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
    nav: { home: 'Home', projects: 'Projects', about: 'About', contacts: 'Contact' },
    heroEyebrow: 'Personal website',
    projects: {
      title: 'My projects',
      lead: 'Educational tools and digital solutions I create.',
      open: 'Open',
      newTab: '(opens in a new tab)',
      soon: 'Coming soon',
      allLink: 'All projects',
    },
    projectsPage: {
      title: 'Projects',
      lead: 'Educational services and digital tools — from projects already available to those still in development.',
      back: 'Back to home',
      visit: 'Visit service',
      newTab: '(opens in a new tab)',
      mapLabel: 'Project map: select a point to jump to a project',
      filterLabel: 'Filter projects',
      filterAll: 'All',
      filterLive: 'Available',
      filterDevelopment: 'In development',
      filterResults: 'Projects shown',
    },
    status: { live: 'Available', 'in-progress': 'In progress' },
    about: { title: 'About me', photoAlt: 'Portrait of Aleksei Nemichev' },
    education: { title: 'Education and experience' },
    directions: {
      title: 'Areas of work',
      lead: 'Fields I work in at their intersections.',
    },
    contacts: {
      title: 'Contact',
      lead: 'Use the booking website to choose a lesson time or send me a question through its contact form.',
      bookingCta: 'Book a lesson or ask a question',
    },
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
    { id: 'geo', title: 'Geography and research', description: 'Exploring places, maps, and the ways geography helps explain the world.' },
    { id: 'edu', title: 'Education', description: 'Teaching and making learning clearer, more engaging, and accessible.' },
    { id: 'dev', title: 'Digital tools', description: 'Building services and learning materials for teachers and students.' },
    { id: 'ai', title: 'Technology and artificial intelligence', description: 'Putting emerging technologies to practical use in education.' },
  ],
};
