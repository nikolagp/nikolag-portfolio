import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'My Blog',
  description: 'A blog by Nikola',
  base: '/blog/',
  theme: 'dark',
  themeConfig: {
    nav: [
      { text: 'Portfolio', link: '/' },
      { text: 'Home', link: '/blog/' },
      { text: 'Posts', link: '/posts/' },
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
