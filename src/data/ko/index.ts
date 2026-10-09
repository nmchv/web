import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: '교사용 플래너',
    description: '성적, 출결, 수업 계획, 숙제 및 통계를 관리하는 디지털 학습 도구입니다.',
    category: '교육 / 에듀테크',
  },
  geotrainer: {
    title: '지리 학습 트레이너',
    description: '지리 명칭과 위치를 연습할 수 있는 온라인 도구입니다.',
    category: '지리 / 교육',
  },
  'geography-notes': {
    title: '지리 노트',
    description: '학교 지리 주제를 체계적으로 정리하고 학습 내용을 복습할 수 있는 노트입니다.',
    category: '지리 / 학습 자료',
  },
  'student-tests': {
    title: '학생 퀴즈',
    description: '학생들의 지식을 확인할 수 있는 온라인 퀴즈입니다.',
    category: '교육 / 퀴즈',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'ko',
    ogLocale: 'ko_KR',
    siteTitle: '네미체프 알렉스 지리 교사 및 교육 도구 개발자',
    siteDescription: '지리 교사이자 교육 도구 개발자인 네미체프 알렉스의 개인 웹사이트입니다. 프로젝트와 활동 분야를 살펴보세요.',
    skipToContent: '본문으로 건너뛰기',
    homeLabel: '네미체프 알렉스, 맨 위로',
    navLabel: '주요 탐색',
    footerNavLabel: '푸터 탐색',
    signatureLabel: '전문 분야 소개',
    aliasLabel: '별칭 ·',
    schoolLabel: '제116학교',
    schoolCaption: '아이디어를 실현하는 공간',
    language: { label: '언어 선택', russian: '러시아어', english: '영어', french: '프랑스어', spanish: '스페인어', korean: '한국어', chinese: '중국어', japanese: '일본어', german: '독일어', swedish: '스웨덴어' },
    nav: { projects: '프로젝트', about: '소개', contacts: '연락처' },
    heroEyebrow: '개인 웹사이트',
    heroCta: '프로젝트 살펴보기',
    projects: {
      title: '프로젝트',
      lead: '제가 만들고 있는 교육 도구와 디지털 솔루션입니다.',
      open: '열기',
      newTab: '(새 탭에서 열림)',
      soon: '준비 중',
    },
    status: { live: '이용 가능', 'in-progress': '개발 중' },
    about: { title: '소개', photoAlt: '네미체프 알렉스의 초상화' },
    education: { title: '학력 및 경력' },
    directions: { title: '활동 분야', lead: '제가 여러 분야의 접점에서 활동하는 영역입니다.' },
    contacts: { title: '연락처', lead: '협업 및 의견을 보내실 수 있습니다.' },
    footer: { toTop: '맨 위로', rights: '네미체프 알렉스' },
  },
  profile: {
    name: '네미체프 알렉스',
    shortName: '네미체프 알렉스',
    additionalName: 'Nemichev Aleksei',
    alias: '지리학자',
    signature: ['지리 교사', '개발자', '학생'],
    lead: '지리, 교육, 기술이 만나는 지점에서 탐구하고 창작하며 도구를 개발합니다.',
    about: [
      '교육 분야에서 일하며 개인 디지털 프로젝트도 함께 발전시키고 있습니다.',
      '수업에서 직접 사용하는 도구를 만듭니다.',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: '지리 및 연구' },
    { id: 'edu', title: '교육' },
    { id: 'dev', title: '디지털 도구 개발' },
    { id: 'ai', title: '기술 및 인공지능' },
  ],
};
