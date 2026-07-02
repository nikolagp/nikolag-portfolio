<template>
  <div class="post-header mb-10">
    <!-- Back link -->
    <a
      href="/posts/"
      class="inline-flex items-center gap-1.5 mb-8 text-sm text-clrSecondaryLight transition-colors hover:text-clrAccent"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      All Posts
    </a>

    <!-- Cover image -->
    <div v-if="image" class="mb-8 overflow-hidden rounded-xl">
      <img
        :src="image"
        :alt="title"
        class="w-full object-cover max-h-80"
      />
    </div>

    <!-- Title -->
    <h1 class="post-title mb-4 text-3xl font-bold leading-snug text-clrSecondary md:text-4xl lg:text-5xl">
      {{ title }}
    </h1>

    <!-- Metadata row -->
    <div class="flex flex-wrap items-center gap-3 text-sm text-clrSecondaryLight">
      <time v-if="date" :datetime="isoDate" class="text-clrAccent/80">
        {{ formattedDate }}
      </time>

      <span v-if="date && (readingTime || tags.length)" class="text-clrSecondaryLight/30">·</span>

      <span v-if="readingTime">{{ readingTime }} min read</span>

      <span v-if="readingTime && tags.length" class="text-clrSecondaryLight/30">·</span>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="inline-flex items-center rounded-md bg-clrAccent/10 px-2.5 py-0.5 text-xs font-medium text-clrAccent ring-1 ring-inset ring-clrAccent/20"
        >
          {{ tag }}
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

const { frontmatter, page } = useData();

const title = computed(() => frontmatter.value.title || '');
const date = computed(() => frontmatter.value.date);
const tags = computed(() => frontmatter.value.tags || []);
const image = computed(() => frontmatter.value.image || '');

const isoDate = computed(() => {
  if (!date.value) return '';
  return new Date(date.value).toISOString().slice(0, 10);
});

const formattedDate = computed(() => {
  if (!date.value) return '';
  return new Date(date.value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

const readingTime = computed(() => {
  const content = page.value?.content || '';
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
});
</script>

<style scoped>
.post-title {
  font-family: 'Space Mono', monospace;
  color: var(--clrSecondary);
}
</style>
