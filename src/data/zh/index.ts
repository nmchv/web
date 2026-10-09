import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: '教师工作手册',
    description: '用于管理教学流程的数字工具：成绩、出勤、课程计划、作业和统计数据。',
    category: '教育 / 教育科技',
  },
  geotrainer: {
    title: '地理训练工具',
    description: '用于练习地理名称和位置的在线工具。',
    category: '地理 / 教育',
  },
  'geography-notes': {
    title: '地理学习笔记',
    description: '系统整理中学地理主题，帮助梳理和复习所学内容。',
    category: '地理 / 学习资源',
  },
  'student-tests': {
    title: '学生测验',
    description: '用于检查学生知识掌握情况的在线测验。',
    category: '教育 / 测验',
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
    language: { label: '选择语言', russian: '俄语', english: '英语', french: '法语', spanish: '西班牙语', korean: '韩语', chinese: '中文', japanese: '日语', german: '德语', swedish: '瑞典语' },
    nav: { projects: '项目', about: '关于我', contacts: '联系方式' },
    heroEyebrow: '个人网站',
    heroCta: '查看我的项目',
    projects: {
      title: '我的项目',
      lead: '我开发的教育工具和数字解决方案。',
      open: '打开',
      newTab: '（将在新标签页中打开）',
      soon: '即将推出',
    },
    status: { live: '可用', 'in-progress': '开发中' },
    about: { title: '关于我', photoAlt: 'Aleksei Nemichev（阿列克谢伊·涅米切夫）的肖像' },
    education: { title: '教育与经历' },
    directions: { title: '工作领域', lead: '我在这些领域的交汇处开展工作。' },
    contacts: { title: '联系方式', lead: '欢迎联系合作或反馈。' },
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
    { id: 'geo', title: '地理与研究' },
    { id: 'edu', title: '教育' },
    { id: 'dev', title: '数字工具开发' },
    { id: 'ai', title: '技术与人工智能' },
  ],
};
