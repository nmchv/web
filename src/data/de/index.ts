import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Lehrerkalender',
    description:
      'Ein digitales Werkzeug zur Organisation des Unterrichts: Noten, Anwesenheit, Stundenpläne, Hausaufgaben und Statistiken.',
    category: 'Bildung / EdTech',
  },
  geotrainer: {
    title: 'Geografie-Trainer',
    description: 'Ein Online-Tool zum Üben geografischer Namen und Orte.',
    category: 'Geografie / Bildung',
  },
  'geography-notes': {
    title: 'Geografie-Notizen',
    description:
      'Systematisch geordnete Notizen zu Themen der Schulgeografie, die dabei helfen, Lernstoff zu strukturieren und zu wiederholen.',
    category: 'Geografie / Lernmaterialien',
  },
  'student-tests': {
    title: 'Tests für Lernende',
    description: 'Online-Tests zur Überprüfung des Wissens von Schülerinnen und Schülern.',
    category: 'Bildung / Tests',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'de',
    ogLocale: 'de_DE',
    siteTitle: 'Aleksei Nemichev — Geografielehrer und Entwickler digitaler Bildungsangebote',
    siteDescription:
      'Die persönliche Website von Aleksei Nemichev, Geografielehrer und Entwickler digitaler Lernwerkzeuge. Entdecken Sie Projekte und Arbeitsbereiche.',
    skipToContent: 'Zum Inhalt springen',
    homeLabel: 'Aleksei Nemichev, zum Seitenanfang',
    navLabel: 'Hauptnavigation',
    footerNavLabel: 'Fußnavigation',
    signatureLabel: 'Berufliches Profil',
    aliasLabel: 'Pseudonym ·',
    schoolLabel: 'Schule Nr. 116',
    schoolCaption: 'ein Raum für Ideen und Lösungen',
    language: {
      label: 'Sprache auswählen',
      russian: 'Russisch',
      english: 'Englisch',
      french: 'Französisch',
      spanish: 'Spanisch',
      korean: 'Koreanisch',
      chinese: 'Chinesisch',
      japanese: 'Japanisch',
      german: 'Deutsch',
      swedish: 'Schwedisch',
    },
    nav: { projects: 'Projekte', about: 'Über mich', contacts: 'Kontakt' },
    heroEyebrow: 'Persönliche Website',
    heroCta: 'Meine Projekte ansehen',
    projects: {
      title: 'Meine Projekte',
      lead: 'Bildungswerkzeuge und digitale Lösungen, die ich entwickle.',
      open: 'Öffnen',
      newTab: '(wird in einem neuen Tab geöffnet)',
      soon: 'Demnächst',
    },
    status: { live: 'Verfügbar', 'in-progress': 'In Entwicklung' },
    about: { title: 'Über mich', photoAlt: 'Porträt von Aleksei Nemichev' },
    education: { title: 'Ausbildung und Erfahrung' },
    directions: {
      title: 'Arbeitsbereiche',
      lead: 'Die Bereiche, an deren Schnittstellen ich arbeite.',
    },
    contacts: { title: 'Kontakt', lead: 'Für Zusammenarbeit und Feedback.' },
    footer: { toTop: 'Nach oben', rights: 'Aleksei Nemichev' },
  },
  profile: {
    name: 'Aleksei Nemichev',
    shortName: 'Aleksei Nemichev',
    alias: 'Geograf',
    signature: ['Geografielehrer', 'Entwickler', 'Student'],
    lead: 'Ich erforsche, gestalte und entwickle Werkzeuge an der Schnittstelle von Geografie, Bildung und Technologie.',
    about: [
      'Ich arbeite im Bildungsbereich und entwickle parallel eigene digitale Projekte.',
      'Ich entwickle Werkzeuge, die ich in meinem Unterricht einsetze.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: 'Geografie und Forschung' },
    { id: 'edu', title: 'Bildung' },
    { id: 'dev', title: 'Entwicklung digitaler Werkzeuge' },
    { id: 'ai', title: 'Technologie und künstliche Intelligenz' },
  ],
};
