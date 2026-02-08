import { defineConfig } from 'vitepress';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// Function to generate sidebar items from posts
function generateSidebar() {
  const postsDir = join(__dirname, '../posts');
  const files = readdirSync(postsDir).filter(
    (file) => file.endsWith('.md') && file !== 'index.md',
  );

  const posts = files.map((file) => {
    const filePath = join(postsDir, file);
    const content = readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    return {
      title: data.title || file.replace('.md', ''),
      link: `/posts/${file.replace('.md', '')}`,
      date: data.date ? new Date(data.date) : new Date(0),
    };
  });

  // Sort by date (newest first)
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return [
    {
      text: 'Posts',
      items: posts.map(({ title, link }) => ({ text: title, link })),
    },
  ];
}

export default defineConfig({
  title: 'Nikola Portfolio',
  description: 'Portfolio and Blog by Nikola',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/ngdev.ico' }],
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
    sidebar: generateSidebar(),
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
