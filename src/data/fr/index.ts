import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Carnet de l’enseignant',
    description:
      'Un outil numérique pour organiser l’apprentissage : notes, présence, plans de cours, devoirs et statistiques.',
    category: 'Éducation / EdTech',
  },
  geotrainer: {
    title: 'Entraîneur de géographie',
    description: 'Un outil en ligne pour s’exercer à situer les lieux géographiques.',
    category: 'Géographie / Éducation',
  },
  'geography-notes': {
    title: 'Notes de géographie',
    description:
      'Des notes structurées sur les thèmes de géographie scolaire pour organiser et réviser les notions étudiées.',
    category: 'Géographie / Ressources pédagogiques',
  },
  'student-tests': {
    title: 'Quiz pour les élèves',
    description: 'Des quiz en ligne pour évaluer les connaissances des élèves.',
    category: 'Éducation / Quiz',
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
      russian: 'Russe',
      english: 'Anglais',
      french: 'Français',
      spanish: 'Espagnol',
      korean: 'Coréen',
      chinese: 'Chinois',
      japanese: 'Japonais',
      german: 'Allemand',
      swedish: 'Suédois',
    },
    nav: { projects: 'Projets', about: 'À propos', contacts: 'Contact' },
    heroEyebrow: 'Site personnel',
    heroCta: 'Découvrir mes projets',
    projects: {
      title: 'Mes projets',
      lead: 'Des outils pédagogiques et des solutions numériques que je crée.',
      open: 'Ouvrir',
      newTab: '(s’ouvre dans un nouvel onglet)',
      soon: 'Bientôt disponible',
    },
    status: { live: 'Disponible', 'in-progress': 'En cours de développement' },
    about: { title: 'À propos de moi', photoAlt: 'Portrait d’Alexei Nemichev' },
    education: { title: 'Formation et expérience' },
    directions: {
      title: 'Domaines d’activité',
      lead: 'Les domaines à la croisée desquels je travaille.',
    },
    contacts: { title: 'Contact', lead: 'Pour toute collaboration ou prise de contact.' },
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
  directions: [
    { id: 'geo', title: 'Géographie et recherche' },
    { id: 'edu', title: 'Éducation' },
    { id: 'dev', title: 'Développement d’outils numériques' },
    { id: 'ai', title: 'Technologies et intelligence artificielle' },
  ],
};
