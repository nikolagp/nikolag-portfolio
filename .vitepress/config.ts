import { defineConfig } from 'vitepress';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  title: 'Nikola Portfolio',
  description: 'Portfolio and Blog by Nikola',
  base: '/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        rel: 'stylesheet',
      },
    ],
    [
      'script',
      {
        src: 'https://kit.fontawesome.com/1ee43a6dab.js',
        crossorigin: 'anonymous',
      },
    ],
  ],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss('./tailwind.config.js'), autoprefixer()],
      },
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/posts/' },
    ],
    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'First Post', link: '/posts/first-post' },
          { text: 'Second Post', link: '/posts/second-post' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'twitter', link: 'https://twitter.com' },
    ],
  },
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
  },
});
