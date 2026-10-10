import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Lärarplanerare',
    description:
      'En digital arbetsyta för att organisera betyg, närvaro, lektionsplanering, läxor och klassstatistik.',
    category: 'Utbildning / Education',
  },
  geotrainer: {
    title: 'Geografitränare',
    description:
      'Ett interaktivt geografiverktyg för att öva på geografiska namn och hitta platser och objekt på kartan.',
    category: 'Geografi / Geography',
  },
  'geography-notes': {
    title: 'Geografianteckningar',
    description:
      'En samling strukturerade anteckningar i skolgeografi som hjälper elever att förstå ämnen, organisera innehållet och repetera.',
    category: 'Geografi / Geography',
  },
  'student-tests': {
    title: 'Kunskapstest för elever',
    description: 'En onlinetjänst med test för att kontrollera elevernas kunskaper och befästa det som gåtts igenom.',
    category: 'Utbildning / Education',
  },
  'knowledge-graph': {
    title: 'Kunskapsgraf',
    description:
      'En interaktiv karta över kopplingar mellan begrepp och kunskapsområden som gör det lättare att utforska hur idéer hänger ihop.',
    category: 'Kunskap / Knowledge',
  },
  'world-map': {
    title: 'Interaktiv världskarta',
    description:
      'En interaktiv karta för att utforska världen och geografiska objekt.',
    category: 'Geografi / Geography',
  },
  'online-forms': {
    title: 'Onlineformulär',
    description:
      'En tjänst för att skapa onlineformulär och samla in svar, med liknande användningsområde som Google Forms. Under utveckling.',
    category: 'Produktivitet / Productivity',
  },
  'exam-trainer': {
    title: 'Träningsverktyg för examensförberedelser',
    description:
      'Ett onlineverktyg för att förbereda sig inför prov genom övningsuppgifter och repetition av ämnen. Under utveckling.',
    category: 'Utbildning / Education',
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
    nav: { home: 'Hem', projects: 'Projekt', about: 'Om mig', contacts: 'Kontakt' },
    heroEyebrow: 'Personlig webbplats',
    projects: {
      title: 'Mina projekt',
      lead: 'Utbildningsverktyg och digitala lösningar som jag skapar.',
      open: 'Öppna',
      newTab: '(öppnas i en ny flik)',
      soon: 'Kommer snart',
      allLink: 'Alla projekt',
    },
    projectsPage: {
      title: 'Projekt',
      lead: 'Utbildningstjänster och digitala verktyg — från projekt som redan är tillgängliga till sådana som fortfarande utvecklas.',
      back: 'Till startsidan',
      visit: 'Besök tjänsten',
      newTab: '(öppnas i en ny flik)',
      mapLabel: 'Projektkarta: välj en punkt för att gå till projektet',
      filterLabel: 'Filtrera projekt',
      filterAll: 'Alla',
      filterLive: 'Tillgängliga',
      filterDevelopment: 'Under utveckling',
      filterResults: 'Projekt visas',
    },
    status: { live: 'Tillgänglig', 'in-progress': 'Under utveckling' },
    about: { title: 'Om mig', photoAlt: 'Porträtt av Aleksei Nemichev' },
    education: { title: 'Utbildning och erfarenhet' },
    directions: {
      title: 'Arbetsområden',
      lead: 'Områdena där jag arbetar i mötet mellan olika ämnen.',
    },
    contacts: {
      title: 'Kontakt',
      lead: 'På bokningssidan kan du välja en lektionstid eller skicka en fråga via formuläret.',
      bookingCta: 'Boka en lektion eller ställ en fråga',
    },
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
    { id: 'geo', title: 'Geografi och forskning', description: 'Jag utforskar platser, kartor och hur geografi hjälper oss att förstå världen.' },
    { id: 'edu', title: 'Utbildning', description: 'Jag undervisar och gör lärandet tydligare, mer engagerande och tillgängligt.' },
    { id: 'dev', title: 'Digitala verktyg', description: 'Jag skapar tjänster och läromaterial för lärare och elever.' },
    { id: 'ai', title: 'Teknik och artificiell intelligens', description: 'Jag använder ny teknik för att lösa praktiska utmaningar inom utbildning.' },
  ],
};
