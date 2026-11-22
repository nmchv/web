import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import { contactsForLanguage } from '../contact-localization';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Lesplanner voor leraren',
    description:
      'Een in ontwikkeling zijnde digitale werkruimte voor leraren om cijfers, aanwezigheid, lesplannen, huiswerk en klassenstatistieken te organiseren.',
    category: 'Onderwijs',
  },
  geotrainer: {
    title: 'Aardrijkskundetrainer',
    description:
      'Een interactieve oefentool voor aardrijkskunde om plaatsnamen te leren en geografische kenmerken op een kaart te vinden.',
    category: 'Aardrijkskunde',
  },
  'geography-notes': {
    title: 'Aardrijkskundenotities',
    description:
      'Een gestructureerde verzameling van aardrijkskundenotities voor de school die leerlingen helpt onderwerpen te begrijpen, kernideeën te ordenen en materiaal te herhalen.',
    category: 'Aardrijkskunde',
  },
  'student-tests': {
    title: 'Leerlingentoetsen',
    description: 'Een online toetsdienst om de kennis van leerlingen te controleren en het behandelde materiaal te versterken.',
    category: 'Onderwijs',
  },
  'knowledge-graph': {
    title: 'Kennisgrafiek',
    description:
      'Een interactieve kaart van verbindingen tussen concepten en kennisgebieden, ontworpen om relaties tussen ideeën gemakkelijker te verkennen.',
    category: 'Kennis',
  },
  'world-map': {
    title: 'Interactieve wereldkaart',
    description: 'Een interactieve kaart om de wereld te verkennen en met geografische kenmerken te werken.',
    category: 'Aardrijkskunde',
  },
  'online-forms': {
    title: 'Online formulieren',
    description:
      'Een dienst voor het maken van online formulieren en het verzamelen van antwoorden, vergelijkbaar van doel met Google Forms.',
    category: 'Productiviteit',
  },
  'exam-trainer': {
    title: 'Examentrainer',
    description:
      'Een online tool voor examenvoorbereiding door middel van oefenvragen en onderwerpenherhaling.',
    category: 'Onderwijs',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'nl',
    ogLocale: 'nl_NL',
    siteTitle: 'Aleksei Nemichev — Aardrijkskundedocent en ontwikkelaar van educatieve technologie',
    siteDescription:
      'De persoonlijke website van Aleksei Nemichev, aardrijkskundedocent en ontwikkelaar van educatieve hulpmiddelen. Bekijk projecten en werkgebieden.',
    skipToContent: 'Naar inhoud',
    homeLabel: 'Aleksei Nemichev, terug naar boven',
    navLabel: 'Hoofdnavigatie',
    footerNavLabel: 'Voetnavigatie',
    signatureLabel: 'Professionele introductie',
    aliasLabel: 'Alias ·',
    schoolLabel: '',
    schoolCaption: '',
    language: {
      label: 'Kies taal',
      russian: 'Русский',
      english: 'English',
      french: 'Français',
      spanish: 'Español',
      korean: '한국어',
      chinese: '中文',
      japanese: '日本語',
      german: 'Deutsch',
      swedish: 'Svenska',
      dutch: 'Nederlands',
    },
    nav: { home: 'Home', projects: 'Projecten', about: 'Over mij', contacts: 'Contact' },
    heroEyebrow: 'Persoonlijke website',
    projects: {
      title: 'Mijn projecten',
      lead: 'Educatieve hulpmiddelen en digitale oplossingen die ik maak.',
      open: 'Openen',
      newTab: '(opent in een nieuw tabblad)',
      soon: 'Binnenkort',
      allLink: 'Alle projecten',
    },
    projectsPage: {
      title: 'Projecten',
      lead: 'Educatieve diensten en digitale hulpmiddelen — van reeds beschikbare projecten tot projecten in ontwikkeling.',
      back: 'Terug naar home',
      visit: 'Bezoek dienst',
      newTab: '(opent in een nieuw tabblad)',
      mapLabel: 'Projectkaart: selecteer een punt om naar een project te springen',
      filterLabel: 'Filter projecten',
      filterAll: 'Alle',
      filterLive: 'Beschikbaar',
      filterDevelopment: 'In ontwikkeling',
      filterResults: 'Getoonde projecten',
    },
    status: { live: 'Beschikbaar', 'in-progress': 'In ontwikkeling' },
    about: { title: 'Over mij', photoAlt: 'Portret van Aleksei Nemichev' },
    education: { title: 'Opleiding en ervaring' },
    directions: {
      title: 'Werkgebieden',
      lead: 'Gebieden waarin ik werk op hun snijvlakken.',
    },
    contacts: {
      title: 'Contact',
      lead: 'Gebruik de boekingswebsite om een lestijd te kiezen of stuur me een vraag via het contactformulier.',
      bookingCta: 'Boek een les of stel een vraag',
      lessonLanguages: 'Ik geef lessen in het Russisch en Engels.',
    },
    footer: { toTop: 'Terug naar boven', rights: 'Aleksei Nemichev' },
    login: 'Account',
  },
  profile: {
    name: 'Aleksei Nemichev',
    shortName: 'Aleksei Nemichev',
    alias: 'Geograaf',
    signature: ['Aardrijkskundedocent', 'Ontwikkelaar', 'Student'],
    lead: 'Ik verken, creëer en ontwikkel hulpmiddelen op het snijvlak van aardrijkskunde, onderwijs en technologie.',
    about: [
      'Ik werk in het onderwijs en ontwikkel mijn eigen digitale projecten.',
      'Ik maak hulpmiddelen die ik in mijn lessen gebruik.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  contacts: contactsForLanguage(russianContent.contacts, 'nl'),
  directions: [
    { id: 'geo', title: 'Aardrijkskunde en onderzoek', description: 'Plaatsen, kaarten en de manieren waarop aardrijkskunde de wereld helpt verklaren verkennen.' },
    { id: 'edu', title: 'Onderwijs', description: 'Lesgeven en leren duidelijker, boeiender en toegankelijker maken.' },
    { id: 'dev', title: 'Digitale hulpmiddelen', description: 'Diensten en leermaterialen bouwen voor leraren en leerlingen.' },
    { id: 'ai', title: 'Technologie en kunstmatige intelligentie', description: 'Nieuwe technologieën praktisch inzetten in het onderwijs.' },
  ],
};
