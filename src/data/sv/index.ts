import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Lärarplanerare',
    description:
      'Ett digitalt verktyg för att organisera undervisningen: betyg, närvaro, lektionsplanering, läxor och statistik.',
    category: 'Utbildning / EdTech',
  },
  geotrainer: {
    title: 'Geografitränare',
    description: 'Ett onlineverktyg för att öva på geografiska namn och platser.',
    category: 'Geografi / Utbildning',
  },
  'geography-notes': {
    title: 'Geografianteckningar',
    description:
      'Strukturerade anteckningar om skolans geografiämnen som hjälper till att organisera och repetera det du har lärt dig.',
    category: 'Geografi / Läromedel',
  },
  'student-tests': {
    title: 'Kunskapstest för elever',
    description: 'Onlineprov för att kontrollera elevernas kunskaper.',
    category: 'Utbildning / Test',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'sv',
    ogLocale: 'sv_SE',
    siteTitle: 'Aleksei Nemichev — Geografilärare och utvecklare av digitala utbildningsverktyg',
    siteDescription:
      'Aleksei Nemichevs personliga webbplats. Han är geografilärare och utvecklar digitala utbildningsverktyg. Upptäck projekt och arbetsområden.',
    skipToContent: 'Hoppa till innehållet',
    homeLabel: 'Aleksei Nemichev, tillbaka till sidans början',
    navLabel: 'Huvudnavigation',
    footerNavLabel: 'Sidfotsnavigation',
    signatureLabel: 'Yrkesprofil',
    aliasLabel: 'Pseudonym ·',
    schoolLabel: 'Skola nr 116',
    schoolCaption: 'en plats för idéer och lösningar',
    language: {
      label: 'Välj språk',
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
    nav: { projects: 'Projekt', about: 'Om mig', contacts: 'Kontakt' },
    heroEyebrow: 'Personlig webbplats',
    heroCta: 'Se mina projekt',
    projects: {
      title: 'Mina projekt',
      lead: 'Utbildningsverktyg och digitala lösningar som jag skapar.',
      open: 'Öppna',
      newTab: '(öppnas i en ny flik)',
      soon: 'Kommer snart',
    },
    status: { live: 'Tillgänglig', 'in-progress': 'Under utveckling' },
    about: { title: 'Om mig', photoAlt: 'Porträtt av Aleksei Nemichev' },
    education: { title: 'Utbildning och erfarenhet' },
    directions: {
      title: 'Arbetsområden',
      lead: 'Områdena där jag arbetar i mötet mellan olika ämnen.',
    },
    contacts: { title: 'Kontakt', lead: 'För samarbeten och återkoppling.' },
    footer: { toTop: 'Till toppen', rights: 'Aleksei Nemichev' },
  },
  profile: {
    name: 'Aleksei Nemichev',
    shortName: 'Aleksei Nemichev',
    alias: 'Geograf',
    signature: ['Geografilärare', 'Utvecklare', 'Student'],
    lead: 'Jag utforskar, skapar och utvecklar verktyg i mötet mellan geografi, utbildning och teknik.',
    about: [
      'Jag arbetar inom utbildning och utvecklar samtidigt egna digitala projekt.',
      'Jag skapar verktyg som jag använder i min undervisning.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: 'Geografi och forskning' },
    { id: 'edu', title: 'Utbildning' },
    { id: 'dev', title: 'Utveckling av digitala verktyg' },
    { id: 'ai', title: 'Teknik och artificiell intelligens' },
  ],
};
