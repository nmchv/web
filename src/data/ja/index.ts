import type { SiteContent } from '../index';
import { content as russianContent } from '../index';
import type { Project } from '../../i18n/types';

const projectTranslations: Record<string, Pick<Project, 'title' | 'description' | 'category'>> = {
  'teacher-diary': {
    title: '教師用プランナー',
    description: '成績、出席、授業計画、課題、クラスの統計を整理するための、開発中の教師向けデジタルワークスペースです。',
    category: '教育 / Education',
  },
  geotrainer: {
    title: '地理トレーナー',
    description: '地名を覚え、地図上で地理的な場所を見つけるためのインタラクティブな練習ツールです。',
    category: '地理 / Geography',
  },
  'geography-notes': {
    title: '地理ノート',
    description: '学校地理の内容を体系的にまとめ、テーマの理解や要点整理、学習内容の復習に役立つ資料集です。',
    category: '地理 / Geography',
  },
  'student-tests': {
    title: '生徒向けクイズ',
    description: '生徒の知識を確認し、授業で学んだ内容を定着させるオンラインテストサービスです。',
    category: '教育 / Education',
  },
  'knowledge-graph': {
    title: '知識グラフ',
    description: '概念や知識分野のつながりを可視化し、アイデア同士の関係を探るためのインタラクティブなマップです。',
    category: '知識 / Knowledge',
  },
  'world-map': {
    title: 'インタラクティブ世界地図',
    description: '世界を探索し、地理的な場所を扱うためのインタラクティブな地図です。現在開発中です。',
    category: '地理 / Geography',
  },
  'online-forms': {
    title: 'オンラインフォーム',
    description: 'Google Formsと同様の目的で、オンラインフォームを作成して回答を収集するサービスです。現在開発中です。',
    category: '生産性 / Productivity',
  },
  'exam-trainer': {
    title: '試験対策トレーナー',
    description: '問題演習とテーマの復習を通じて試験準備を支援するオンラインツールです。現在開発中です。',
    category: '教育 / Education',
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
    language: { label: '言語を選択', russian: 'Русский', english: 'English', french: 'Français', spanish: 'Español', korean: '한국어', chinese: '中文', japanese: '日本語', german: 'Deutsch', swedish: 'Svenska' },
    nav: { home: 'ホーム', projects: 'プロジェクト', about: 'プロフィール', contacts: 'お問い合わせ' },
    heroEyebrow: '個人サイト',
    heroCta: 'プロジェクトを見る',
    projects: {
      title: 'プロジェクト',
      lead: '私が制作している教育ツールとデジタルソリューションです。',
      open: '開く',
      newTab: '（新しいタブで開きます）',
      soon: '近日公開',
      allLink: 'すべてのプロジェクト',
    },
    projectsPage: {
      title: 'プロジェクト',
      lead: '公開中のサービスから開発中のツールまで、教育に関するデジタルプロジェクトを紹介します。',
      back: 'ホームに戻る',
      visit: 'サービスを見る',
      newTab: '（新しいタブで開きます）',
      mapLabel: 'プロジェクトマップ：点を選択してプロジェクトへ移動',
      filterLabel: 'プロジェクトを絞り込む',
      filterAll: 'すべて',
      filterLive: '公開中',
      filterDevelopment: '開発中',
      filterResults: '表示中のプロジェクト',
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
