import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: 'Agenda del profesor',
    description:
      'Una herramienta digital para organizar el proceso educativo: calificaciones, asistencia, planes de clase, tareas y estadísticas.',
    category: 'Educación / EdTech',
  },
  geotrainer: {
    title: 'Entrenador de geografía',
    description: 'Una herramienta en línea para practicar nombres y ubicaciones geográficas.',
    category: 'Geografía / Educación',
  },
  'geography-notes': {
    title: 'Apuntes de geografía',
    description:
      'Apuntes organizados sobre temas de geografía escolar para estructurar y repasar el material aprendido.',
    category: 'Geografía / Recursos educativos',
  },
  'student-tests': {
    title: 'Cuestionarios para estudiantes',
    description: 'Cuestionarios en línea para comprobar los conocimientos de los estudiantes.',
    category: 'Educación / Cuestionarios',
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
    language: { label: 'Elegir idioma', russian: 'Ruso', english: 'Inglés', french: 'Francés', spanish: 'Español', korean: 'Coreano', chinese: 'Chino', japanese: 'Japonés', german: 'Alemán', swedish: 'Sueco' },
    nav: { projects: 'Proyectos', about: 'Sobre mí', contacts: 'Contacto' },
    heroEyebrow: 'Sitio personal',
    heroCta: 'Descubre mis proyectos',
    projects: {
      title: 'Mis proyectos',
      lead: 'Herramientas educativas y soluciones digitales que desarrollo.',
      open: 'Abrir',
      newTab: '(se abre en una pestaña nueva)',
      soon: 'Próximamente',
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
