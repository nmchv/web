import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: '教師用プランナー',
    description: '成績、出席、授業計画、宿題、統計を管理するためのデジタルツールです。',
    category: '教育 / EdTech',
  },
  geotrainer: {
    title: '地理トレーナー',
    description: '地名や位置を練習できるオンラインツールです。',
    category: '地理 / 教育',
  },
  'geography-notes': {
    title: '地理ノート',
    description: '学校の地理学習内容を整理し、学んだことを復習するためのノートです。',
    category: '地理 / 学習教材',
  },
  'student-tests': {
    title: '生徒向けクイズ',
    description: '生徒の知識を確認するためのオンラインクイズです。',
    category: '教育 / クイズ',
  },
};

export const content: SiteContent = {
  ...russianContent,
  ui: {
    ...russianContent.ui,
    lang: 'ja',
    ogLocale: 'ja_JP',
    siteTitle: 'Aleksei Nemichev — 地理教師・教育ツール開発者',
    siteDescription: '地理教師であり教育ツール開発者でもあるAleksei Nemichevの個人サイトです。プロジェクトや活動分野をご覧ください。',
    skipToContent: '本文へ移動',
    homeLabel: 'Aleksei Nemichev、ページの先頭へ',
    navLabel: 'メインナビゲーション',
    footerNavLabel: 'フッターナビゲーション',
    signatureLabel: 'プロフィール',
    aliasLabel: '通称 ·',
    schoolLabel: '第116学校',
    schoolCaption: 'アイデアを形にする場所',
    language: { label: '言語を選択', russian: 'ロシア語', english: '英語', french: 'フランス語', spanish: 'スペイン語', korean: '韓国語', chinese: '中国語', japanese: '日本語', german: 'ドイツ語', swedish: 'スウェーデン語' },
    nav: { projects: 'プロジェクト', about: 'プロフィール', contacts: 'お問い合わせ' },
    heroEyebrow: '個人サイト',
    heroCta: 'プロジェクトを見る',
    projects: {
      title: 'プロジェクト',
      lead: '私が制作している教育ツールとデジタルソリューションです。',
      open: '開く',
      newTab: '（新しいタブで開きます）',
      soon: '近日公開',
    },
    status: { live: '利用可能', 'in-progress': '開発中' },
    about: { title: 'プロフィール', photoAlt: 'Aleksei Nemichevのポートレート' },
    education: { title: '学歴・経験' },
    directions: { title: '活動分野', lead: '複数の分野が交わる領域で活動しています。' },
    contacts: { title: 'お問い合わせ', lead: 'ご協業やご意見をお待ちしています。' },
    footer: { toTop: 'ページの先頭へ', rights: 'Aleksei Nemichev' },
  },
  profile: {
    name: 'Aleksei Nemichev',
    shortName: 'Aleksei Nemichev',
    alias: '地理学者',
    signature: ['地理教師', '開発者', '学生'],
    lead: '地理、教育、テクノロジーの交差点で探究し、創造し、ツールを開発しています。',
    about: [
      '教育分野で働きながら、自分自身のデジタルプロジェクトにも取り組んでいます。',
      '授業で活用するツールを制作しています。',
    ],
  },
  projects: russianContent.projects.map((project) => ({
    ...project,
    ...projectTranslations[project.id],
  })),
  directions: [
    { id: 'geo', title: '地理・研究' },
    { id: 'edu', title: '教育' },
    { id: 'dev', title: 'デジタルツール開発' },
    { id: 'ai', title: 'テクノロジー・人工知能' },
  ],
};
