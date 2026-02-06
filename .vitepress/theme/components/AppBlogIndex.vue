<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2"
    >
      <article
        v-for="post in posts"
        :key="post.url"
        class="flex flex-col items-start justify-between bg-clrPrimaryLight p-6 rounded-2xl border border-clrSecondaryLight/10 hover:border-clrAccent/50 transition-colors duration-300"
      >
        <div class="relative w-full">
          <div class="text-xs leading-6 text-clrAccent/80">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-clrSecondary group-hover:text-clrAccent transition-colors"
            >
              <a :href="post.url">
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
            <p
              class="mt-4 line-clamp-3 text-sm leading-6 text-clrSecondaryLight"
            >
              {{ post.description }}
            </p>
          </div>
          <div class="mt-4 flex gap-2 flex-wrap">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="inline-flex items-center rounded-md bg-clrAccent/10 px-2 py-1 text-xs font-medium text-clrAccent ring-1 ring-inset ring-clrAccent/20"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { data as posts } from '../all-posts.data.js';

function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
</script>
