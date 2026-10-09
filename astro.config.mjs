import { defineConfig } from 'astro/config';

// Сайт публикуется на собственном домене (GitHub Pages + CNAME),
// поэтому base = '/'. Если нужен адрес вида user.github.io/repo,
// замените site и добавьте base: '/repo'.
export default defineConfig({
  site: 'https://nmchv.ru',
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
