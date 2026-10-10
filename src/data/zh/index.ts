import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: '教师工作手册',
    description: '用于整理成绩、出勤、课程计划、作业和班级统计的教师数字工作空间。',
    category: '教育 / Education',
  },
  geotrainer: {
    title: '地理训练工具',
    description: '通过互动练习熟悉地理名称，并在地图上查找地理对象。',
    category: '地理 / Geography',
  },
  'geography-notes': {
    title: '地理学习笔记',
    description: '系统整理的中学地理资料，帮助理解主题、梳理重点并复习所学内容。',
    category: '地理 / Geography',
  },
  'student-tests': {
    title: '学生测验',
    description: '用于检查学生知识并巩固课堂内容的在线测验服务。',
    category: '教育 / Education',
  },
  'knowledge-graph': {
    title: '知识图谱',
    description: '以互动图谱呈现概念与知识领域之间的联系，帮助探索不同想法如何相互关联。',
    category: '知识 / Knowledge',
  },
  'world-map': {
    title: '互动世界地图',
    description: '用于探索世界和查看地理对象的互动地图。',
    category: '地理 / Geography',
  },
  'online-forms': {
    title: '在线表单',
    description: '用于创建在线表单并收集回复的服务，用途类似 Google Forms。',
    category: '效率 / Productivity',
  },
  'exam-trainer': {
    title: '考试备考训练工具',
    description: '通过练习题和主题复习来准备考试的在线工具。',
    category: '教育 / Education',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'zh',
    ogLocale: 'zh_CN',
    siteTitle: 'Aleksei Nemichev — 地理教师与教育工具开发者',
    siteDescription: '地理教师、教育工具开发者 Aleksei Nemichev（阿列克谢伊·涅米切夫）的个人网站。了解他的项目和工作领域。',
    skipToContent: '跳转到正文',
    homeLabel: 'Aleksei Nemichev，返回顶部',
    navLabel: '主导航',
    footerNavLabel: '页脚导航',
    signatureLabel: '职业介绍',
    aliasLabel: '别名 ·',
    schoolLabel: '第116学校',
    schoolCaption: '创意与解决方案的空间',
    language: { label: '选择语言', russian: 'Русский', english: 'English', french: 'Français', spanish: 'Español', korean: '한국어', chinese: '中文', japanese: '日本語', german: 'Deutsch', swedish: 'Svenska' },
    nav: { home: '首页', projects: '项目', about: '关于我', contacts: '联系方式' },
    heroEyebrow: '个人网站',
    projects: {
      title: '我的项目',
      lead: '我开发的教育工具和数字解决方案。',
      open: '打开',
      newTab: '（将在新标签页中打开）',
      soon: '即将推出',
      allLink: '全部项目',
    },
    projectsPage: {
      title: '项目',
      lead: '介绍教育服务与数字工具，包括已上线的项目和仍在开发中的项目。',
      back: '返回首页',
      visit: '访问服务',
      newTab: '（将在新标签页中打开）',
      mapLabel: '项目地图：选择一个节点跳转到对应项目',
      filterLabel: '筛选项目',
      filterAll: '全部',
      filterLive: '已上线',
      filterDevelopment: '开发中',
      filterResults: '显示的项目数',
    },
    status: { live: '可用', 'in-progress': '开发中' },
    about: { title: '关于我', photoAlt: 'Aleksei Nemichev（阿列克谢伊·涅米切夫）的肖像' },
    education: { title: '教育与经历' },
    directions: { title: '工作领域', lead: '我在这些领域的交汇处开展工作。' },
    contacts: {
      title: '联系方式',
      lead: '您可以在预约网站选择课程时间，也可以通过专门的表单向我提问。',
      bookingCta: '预约课程或提出问题',
    },
    footer: { toTop: '返回顶部', rights: 'Aleksei Nemichev' },
  },
  profile: {
    name: 'Aleksei Nemichev',
    shortName: 'Aleksei Nemichev',
    additionalName: '阿列克谢伊·涅米切夫',
    alias: '地理学者',
    signature: ['地理教师', '开发者', '学生'],
    lead: '我在地理、教育与技术的交汇处探索、创造并开发工具。',
    about: [
      '我从事教育工作，同时也在开发自己的数字项目。',
      '我创建并使用这些工具辅助教学。',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: '地理与研究', description: '探索地点、地图，以及地理如何帮助我们理解世界。' },
    { id: 'edu', title: '教育', description: '教学并让学习更清晰、有趣且易于参与。' },
    { id: 'dev', title: '数字工具', description: '为教师和学生开发服务与学习材料。' },
    { id: 'ai', title: '技术与人工智能', description: '将新技术用于解决教育中的实际问题。' },
  ],
};
