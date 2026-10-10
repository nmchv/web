import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import { contactsForLanguage } from '../contact-localization';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Carnet de l’enseignant',
    description:
      'Un espace numérique en cours de développement pour organiser les notes, les présences, les cours, les devoirs et les statistiques de classe.',
    category: 'Éducation / Education',
  },
  geotrainer: {
    title: 'Entraîneur de géographie',
    description:
      'Un outil interactif pour s’entraîner à reconnaître les noms géographiques et à localiser des lieux sur une carte.',
    category: 'Géographie / Geography',
  },
  'geography-notes': {
    title: 'Notes de géographie',
    description:
      'Une collection structurée de cours de géographie scolaire pour comprendre les thèmes, organiser les notions clés et réviser.',
    category: 'Géographie / Geography',
  },
  'student-tests': {
    title: 'Quiz pour les élèves',
    description: 'Un service de quiz en ligne pour évaluer les connaissances des élèves et consolider les notions étudiées.',
    category: 'Éducation / Education',
  },
  'knowledge-graph': {
    title: 'Graphe des connaissances',
    description:
      'Une carte interactive des liens entre les concepts et les domaines du savoir, conçue pour explorer les relations entre les idées.',
    category: 'Savoir / Knowledge',
  },
  'world-map': {
    title: 'Carte interactive du monde',
    description:
      'Une carte interactive pour explorer le monde et travailler avec des objets géographiques.',
    category: 'Géographie / Geography',
  },
  'online-forms': {
    title: 'Formulaires en ligne',
    description:
      'Un service de création de formulaires en ligne et de collecte de réponses, comparable à Google Forms.',
    category: 'Productivité / Productivity',
  },
  'exam-trainer': {
    title: 'Entraîneur de préparation aux examens',
    description:
      'Un outil en ligne pour préparer les examens avec des exercices et des révisions thématiques.',
    category: 'Éducation / Education',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'fr',
    ogLocale: 'fr_FR',
    siteTitle: 'Alexei Nemichev — Professeur de géographie et développeur d’outils pédagogiques',
    siteDescription:
      'Le site personnel d’Alexei Nemichev, professeur de géographie et développeur d’outils pédagogiques. Découvrez ses projets et domaines d’activité.',
    skipToContent: 'Aller au contenu',
    homeLabel: 'Alexei Nemichev, retour en haut de page',
    navLabel: 'Navigation principale',
    footerNavLabel: 'Navigation de pied de page',
    signatureLabel: 'Présentation professionnelle',
    aliasLabel: 'Pseudonyme ·',
    schoolLabel: 'École n° 116',
    schoolCaption: 'un espace de solutions',
    language: {
      label: 'Choisir la langue',
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
    nav: { home: 'Accueil', projects: 'Projets', about: 'À propos', contacts: 'Contact' },
    heroEyebrow: 'Site personnel',
    projects: {
      title: 'Mes projets',
      lead: 'Des outils pédagogiques et des solutions numériques que je crée.',
      open: 'Ouvrir',
      newTab: '(s’ouvre dans un nouvel onglet)',
      soon: 'Bientôt disponible',
      allLink: 'Tous les projets',
    },
    projectsPage: {
      title: 'Projets',
      lead: 'Des services éducatifs et des outils numériques, déjà disponibles ou encore en développement.',
      back: 'Retour à l’accueil',
      visit: 'Accéder au service',
      newTab: '(s’ouvre dans un nouvel onglet)',
      mapLabel: 'Carte des projets : sélectionnez un point pour accéder au projet',
      filterLabel: 'Filtrer les projets',
      filterAll: 'Tous',
      filterLive: 'Disponibles',
      filterDevelopment: 'En développement',
      filterResults: 'Projets affichés',
    },
    status: { live: 'Disponible', 'in-progress': 'En cours de développement' },
    about: { title: 'À propos de moi', photoAlt: 'Portrait d’Alexei Nemichev' },
    education: { title: 'Formation et expérience' },
    directions: {
      title: 'Domaines d’activité',
      lead: 'Les domaines à la croisée desquels je travaille.',
    },
    contacts: {
      title: 'Contact',
      lead: 'Vous pouvez m’envoyer une question via le formulaire du site.',
      bookingCta: 'Poser une question',
      lessonLanguages: 'Je donne des cours uniquement en russe et en anglais.',
    },
    footer: { toTop: 'Retour en haut', rights: 'Alexei Nemichev' },
  },
  profile: {
    name: 'Alexei Nemichev',
    shortName: 'Alexei Nemichev',
    alias: 'Géographe',
    signature: ['Professeur de géographie', 'Développeur', 'Étudiant'],
    lead: 'J’explore, crée et développe des outils à la croisée de la géographie, de l’éducation et des technologies.',
    about: [
      'Je travaille dans le domaine de l’éducation tout en développant mes propres projets numériques.',
      'Je crée des outils que j’utilise dans mon enseignement.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  contacts: contactsForLanguage(russianContent.contacts, 'fr'),
  directions: [
    { id: 'geo', title: 'Géographie et recherche', description: 'Explorer les lieux, les cartes et ce que la géographie révèle du monde.' },
    { id: 'edu', title: 'Éducation', description: 'Enseigner et rendre l’apprentissage plus clair, stimulant et accessible.' },
    { id: 'dev', title: 'Outils numériques', description: 'Créer des services et des ressources pour les enseignants et les élèves.' },
    { id: 'ai', title: 'Technologies et intelligence artificielle', description: 'Mettre les nouvelles technologies au service de l’éducation.' },
  ],
};
