import type { Project } from '../../i18n/types';

// Чтобы добавить проект, добавьте объект в этот массив. Секция соберётся сама.
// Нет url, значит карточка без ссылки.
export const projects: Project[] = [
  {
    id: 'teacher-diary',
    title: 'Дневник учителя',
    description:
      'Цифровой инструмент для организации учебного процесса: оценки, посещаемость, планы уроков, домашние задания и статистика.',
    category: 'Education / EdTech',
    status: 'in-progress',
    art: 'diary',
    featured: true,
    order: 1,
  },
  {
    id: 'geotrainer',
    title: 'Геотренажёр',
    description: 'Онлайн-тренажёр для практики географической номенклатуры.',
    category: 'Geography / Education',
    url: 'https://geotrainer.nmchv.ru',
    status: 'live',
    art: 'geo',
    featured: true,
    order: 2,
  },
  {
    id: 'geography-notes',
    title: 'Конспекты по географии',
    description:
      'Систематизированные конспекты по школьным темам, которые помогают структурировать и повторять изученный материал.',
    category: 'Geography / Learning Resources',
    url: 'https://wiki.nmchv.ru',
    status: 'live',
    art: 'notes',
    featured: true,
    order: 3,
  },
];
