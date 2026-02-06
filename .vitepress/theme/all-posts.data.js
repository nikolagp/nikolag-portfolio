import { createContentLoader } from 'vitepress';

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ url }) => !url.endsWith('/')) // Exclude index page (which typically ends in /)
      .filter(({ url }) => !url.endsWith('index.html'))
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title || 'Untitled',
        url,
        excerpt,
        date: frontmatter.date ? new Date(frontmatter.date) : null,
        description: frontmatter.description || excerpt,
        image: frontmatter.image,
        tags: frontmatter.tags || [],
      }))
      .sort((a, b) => b.date - a.date);
  },
});
