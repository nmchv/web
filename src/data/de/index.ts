import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Lehrerkalender',
    description:
      'Ein digitaler Arbeitsbereich zur Organisation von Noten, Anwesenheit, Unterrichtsplänen, Hausaufgaben und Klassenstatistiken.',
    category: 'Bildung / Education',
  },
  geotrainer: {
    title: 'Geografie-Trainer',
    description:
      'Ein interaktives Geografie-Training zum Lernen geografischer Namen und zum Auffinden von Orten auf der Karte.',
    category: 'Geografie / Geography',
  },
  'geography-notes': {
    title: 'Geografie-Notizen',
    description:
      'Eine strukturierte Sammlung von Notizen zur Schulgeografie, die beim Verständnis der Themen und beim Wiederholen des Lernstoffs hilft.',
    category: 'Geografie / Geography',
  },
  'student-tests': {
    title: 'Tests für Lernende',
    description: 'Ein Online-Testservice, mit dem Lernende ihr Wissen überprüfen und behandelte Inhalte festigen können.',
    category: 'Bildung / Education',
  },
  'knowledge-graph': {
    title: 'Wissensgraph',
    description:
      'Eine interaktive Karte der Verbindungen zwischen Begriffen und Wissensgebieten, die Beziehungen zwischen Ideen sichtbar macht.',
    category: 'Wissen / Knowledge',
  },
  'world-map': {
    title: 'Interaktive Weltkarte',
    description:
      'Eine interaktive Karte zur Erkundung der Welt und geografischer Objekte.',
    category: 'Geografie / Geography',
  },
  'online-forms': {
    title: 'Online-Formulare',
    description:
      'Ein Dienst zum Erstellen von Online-Formularen und Sammeln von Antworten, ähnlich wie Google Forms.',
    category: 'Produktivität / Productivity',
  },
  'exam-trainer': {
    title: 'Prüfungsvorbereitung',
    description:
      'Ein Online-Werkzeug zur Prüfungsvorbereitung mit Übungsaufgaben und Themenwiederholung.',
    category: 'Bildung / Education',
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
    nav: { home: 'Startseite', projects: 'Projekte', about: 'Über mich', contacts: 'Kontakt' },
    heroEyebrow: 'Persönliche Website',
    heroCta: 'Meine Projekte ansehen',
    projects: {
      title: 'Meine Projekte',
      lead: 'Bildungswerkzeuge und digitale Lösungen, die ich entwickle.',
      open: 'Öffnen',
      newTab: '(wird in einem neuen Tab geöffnet)',
      soon: 'Demnächst',
      allLink: 'Alle Projekte',
    },
    projectsPage: {
      title: 'Projekte',
      lead: 'Bildungsangebote und digitale Werkzeuge — von bereits verfügbaren Projekten bis zu denen, die noch entwickelt werden.',
      back: 'Zur Startseite',
      visit: 'Zum Service',
      newTab: '(wird in einem neuen Tab geöffnet)',
      mapLabel: 'Projektkarte: Wählen Sie einen Punkt, um zum Projekt zu springen',
      filterLabel: 'Projekte filtern',
      filterAll: 'Alle',
      filterLive: 'Verfügbar',
      filterDevelopment: 'In Entwicklung',
      filterResults: 'Projekte angezeigt',
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
