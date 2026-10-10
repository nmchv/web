import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Agenda del profesor',
    description:
      'Un espacio digital en desarrollo para organizar calificaciones, asistencia, planes de clase, tareas y estadísticas del grupo.',
    category: 'Educación / Education',
  },
  geotrainer: {
    title: 'Entrenador de geografía',
    description:
      'Una herramienta interactiva para practicar nombres geográficos y localizar lugares y elementos en el mapa.',
    category: 'Geografía / Geography',
  },
  'geography-notes': {
    title: 'Apuntes de geografía',
    description:
      'Una colección organizada de apuntes de geografía escolar para comprender los temas, ordenar las ideas y repasar lo aprendido.',
    category: 'Geografía / Geography',
  },
  'student-tests': {
    title: 'Cuestionarios para estudiantes',
    description: 'Un servicio de cuestionarios en línea para comprobar los conocimientos y reforzar los contenidos estudiados.',
    category: 'Educación / Education',
  },
  'knowledge-graph': {
    title: 'Grafo del conocimiento',
    description:
      'Un mapa interactivo de las conexiones entre conceptos y áreas del conocimiento para explorar cómo se relacionan las ideas.',
    category: 'Conocimiento / Knowledge',
  },
  'world-map': {
    title: 'Mapa interactivo del mundo',
    description:
      'Un mapa interactivo para explorar el mundo y trabajar con elementos geográficos. El proyecto está en desarrollo.',
    category: 'Geografía / Geography',
  },
  'online-forms': {
    title: 'Formularios en línea',
    description:
      'Un servicio para crear formularios en línea y recopilar respuestas, similar en su propósito a Google Forms. Está en desarrollo.',
    category: 'Productividad / Productivity',
  },
  'exam-trainer': {
    title: 'Entrenador de preparación para exámenes',
    description:
      'Una herramienta en línea para preparar exámenes mediante ejercicios y repasos temáticos. El proyecto está en desarrollo.',
    category: 'Educación / Education',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'es',
    ogLocale: 'es_ES',
    siteTitle: 'Alexey Nemichev — Profesor de geografía y desarrollador de herramientas educativas',
    siteDescription:
      'Sitio personal de Alexey Nemichev, profesor de geografía y desarrollador de herramientas educativas. Descubre sus proyectos y áreas de trabajo.',
    skipToContent: 'Ir al contenido',
    homeLabel: 'Alexey Nemichev, volver al inicio',
    navLabel: 'Navegación principal',
    footerNavLabel: 'Navegación del pie de página',
    signatureLabel: 'Presentación profesional',
    aliasLabel: 'Seudónimo ·',
    schoolLabel: 'Escuela n.º 116',
    schoolCaption: 'un espacio de soluciones',
    language: { label: 'Elegir idioma', russian: 'Русский', english: 'English', french: 'Français', spanish: 'Español', korean: '한국어', chinese: '中文', japanese: '日本語', german: 'Deutsch', swedish: 'Svenska' },
    nav: { home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí', contacts: 'Contacto' },
    heroEyebrow: 'Sitio personal',
    heroCta: 'Descubre mis proyectos',
    projects: {
      title: 'Mis proyectos',
      lead: 'Herramientas educativas y soluciones digitales que desarrollo.',
      open: 'Abrir',
      newTab: '(se abre en una pestaña nueva)',
      soon: 'Próximamente',
      allLink: 'Todos los proyectos',
    },
    projectsPage: {
      title: 'Proyectos',
      lead: 'Servicios educativos y herramientas digitales: algunos ya están disponibles y otros siguen en desarrollo.',
      back: 'Volver al inicio',
      visit: 'Visitar el servicio',
      newTab: '(se abre en una pestaña nueva)',
      mapLabel: 'Mapa de proyectos: selecciona un punto para ir al proyecto',
      filterLabel: 'Filtrar proyectos',
      filterAll: 'Todos',
      filterLive: 'Disponibles',
      filterDevelopment: 'En desarrollo',
      filterResults: 'Proyectos mostrados',
    },
    status: { live: 'Disponible', 'in-progress': 'En desarrollo' },
    about: { title: 'Sobre mí', photoAlt: 'Retrato de Alexey Nemichev' },
    education: { title: 'Formación y experiencia' },
    directions: {
      title: 'Áreas de trabajo',
      lead: 'Los campos en cuya intersección trabajo.',
    },
    contacts: { title: 'Contacto', lead: 'Para colaboraciones y comentarios.' },
    footer: { toTop: 'Volver arriba', rights: 'Alexey Nemichev' },
  },
  profile: {
    name: 'Alexey Nemichev',
    shortName: 'Alexey Nemichev',
    alias: 'Geógrafo',
    signature: ['Profesor de geografía', 'Desarrollador', 'Estudiante'],
    lead: 'Investigo, creo y desarrollo herramientas en la intersección de la geografía, la educación y la tecnología.',
    about: [
      'Trabajo en el ámbito educativo y, al mismo tiempo, desarrollo mis propios proyectos digitales.',
      'Creo herramientas que utilizo en mi labor docente.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: 'Geografía e investigación' },
    { id: 'edu', title: 'Educación' },
    { id: 'dev', title: 'Desarrollo de herramientas digitales' },
    { id: 'ai', title: 'Tecnología e inteligencia artificial' },
  ],
};
