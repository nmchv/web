import type { Project } from '../../i18n/types';

// Чтобы добавить проект, добавьте объект в этот массив. Секция соберётся сама.
// Нет url, значит карточка без ссылки.
export const projects: Project[] = [
  {
    id: 'teacher-diary',
    title: 'Дневник учителя',
    description:
      'Рабочее пространство учителя для организации учебного процесса: оценки, посещаемость, планы уроков, домашние задания и статистика.',
    category: 'Образование / Education',
    status: 'in-progress',
    art: 'diary',
    featured: true,
    order: 1,
  },
  {
    id: 'geotrainer',
    title: 'Геотренажёр',
    description:
      'Интерактивная практика по географической номенклатуре: тренируйтесь находить и запоминать объекты на карте.',
    category: 'География / Geography',
    url: 'https://geotrainer.nmchv.ru',
    status: 'live',
    art: 'geo',
    featured: true,
    order: 2,
  },
  {
    id: 'geography-notes',
    title: 'Материалы по географии',
    description:
      'База конспектов по урокам, презентации для уроков, практические работы. Онлайн-словарь терминов.',
    category: 'География / Geography',
    url: 'https://wiki.nmchv.ru',
    status: 'live',
    art: 'notes',
    featured: true,
    order: 3,
  },
  {
    id: 'student-tests',
    title: 'Тесты для учеников',
    description: 'Сервис с тестами для учеников, который помогает проверить знания и закрепить пройденный учебный материал.',
    category: 'Образование / Education',
    url: 'https://test.nmchv.ru',
    status: 'live',
    art: 'test',
    featured: true,
    order: 5,
  },
  {
    id: 'terra_incognita',
    title: 'Браузерная игра для 11 классов',
    description:
      'Изучение тем 11 класса через игровой формат. Терра-Инкогнита - браузерная игра с локальным сохранением про изучением нового мира.',
    category: 'География / Geography',
    url: 'https://app.nmchv.ru',
    status: 'live',
    art: 'geo',
    featured: true,
    order: 4,
  },
  {
    id: 'knowledge-graph',
    title: 'Граф всех знаний',
    description:
      'Интерактивная карта связей между понятиями и областями знаний. Проект поможет увидеть, как идеи связаны друг с другом.',
    category: 'Знания / Knowledge',
    status: 'in-progress',
    art: 'graph',
    featured: false,
    order: 6,
  },
  {
    id: 'world-map',
    title: 'Интерактивная карта мира',
    description:
      'Интерактивная карта для изучения мира и работы с географическими объектами.',
    category: 'География / Geography',
    status: 'in-progress',
    art: 'world-map',
    featured: false,
    order: 7,
  },
  {
    id: 'online-forms',
    title: 'Формы',
    description:
      'Сервис для создания онлайн-форм и сбора ответов — похожий по назначению на Google Forms.',
    category: 'Продуктивность / Productivity',
    status: 'in-progress',
    art: 'forms',
    featured: false,
    order: 8,
  },
  {
    id: 'exam-trainer',
    title: 'Тренажёр для подготовки к экзаменам',
    description:
      'Инструмент для подготовки к экзаменам: тренировка заданий и повторение тем в удобном онлайн-формате.',
    category: 'Образование / Education',
    status: 'in-progress',
    art: 'exam',
    featured: false,
    order: 9,
  },
];
