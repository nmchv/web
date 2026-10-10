import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: '교사용 플래너',
    description: '성적, 출결, 수업 계획, 과제 및 학급 통계를 정리하는 교사용 디지털 업무 공간으로, 현재 개발 중입니다.',
    category: '교육 / Education',
  },
  geotrainer: {
    title: '지리 학습 트레이너',
    description: '지리 명칭을 익히고 지도에서 지리적 대상을 찾아보는 인터랙티브 연습 도구입니다.',
    category: '지리 / Geography',
  },
  'geography-notes': {
    title: '지리 노트',
    description: '학교 지리 내용을 주제별로 정리해 핵심 개념을 이해하고 학습한 내용을 복습할 수 있는 자료 모음입니다.',
    category: '지리 / Geography',
  },
  'student-tests': {
    title: '학생 퀴즈',
    description: '학생들의 지식을 확인하고 수업 내용을 복습할 수 있는 온라인 퀴즈 서비스입니다.',
    category: '교육 / Education',
  },
  'knowledge-graph': {
    title: '지식 그래프',
    description: '개념과 지식 분야 사이의 연결을 탐색하고 아이디어가 서로 어떻게 이어지는지 보여주는 인터랙티브 지도입니다.',
    category: '지식 / Knowledge',
  },
  'world-map': {
    title: '인터랙티브 세계 지도',
    description: '세계를 탐색하고 지리적 대상을 다루기 위한 인터랙티브 지도입니다. 현재 개발 중입니다.',
    category: '지리 / Geography',
  },
  'online-forms': {
    title: '온라인 양식',
    description: 'Google Forms와 비슷한 용도로 온라인 양식을 만들고 응답을 수집하는 서비스입니다. 현재 개발 중입니다.',
    category: '생산성 / Productivity',
  },
  'exam-trainer': {
    title: '시험 준비 트레이너',
    description: '연습 문제를 풀고 주제를 복습하며 시험을 준비할 수 있는 온라인 도구입니다. 현재 개발 중입니다.',
    category: '교육 / Education',
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
    language: { label: '언어 선택', russian: 'Русский', english: 'English', french: 'Français', spanish: 'Español', korean: '한국어', chinese: '中文', japanese: '日本語', german: 'Deutsch', swedish: 'Svenska' },
    nav: { home: '홈', projects: '프로젝트', about: '소개', contacts: '연락처' },
    heroEyebrow: '개인 웹사이트',
    heroCta: '프로젝트 살펴보기',
    projects: {
      title: '프로젝트',
      lead: '제가 만들고 있는 교육 도구와 디지털 솔루션입니다.',
      open: '열기',
      newTab: '(새 탭에서 열림)',
      soon: '준비 중',
      allLink: '모든 프로젝트',
    },
    projectsPage: {
      title: '프로젝트',
      lead: '이미 이용할 수 있는 서비스부터 개발 중인 도구까지, 교육을 위한 디지털 프로젝트를 소개합니다.',
      back: '홈으로',
      visit: '서비스 방문',
      newTab: '(새 탭에서 열림)',
      mapLabel: '프로젝트 지도: 점을 선택해 프로젝트로 이동',
      filterLabel: '프로젝트 필터',
      filterAll: '전체',
      filterLive: '이용 가능',
      filterDevelopment: '개발 중',
      filterResults: '표시된 프로젝트',
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
