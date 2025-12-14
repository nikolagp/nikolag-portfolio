<template>
  <section id="latest-posts" class="py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-clrSecondary sm:text-4xl"
        >
          Latest Posts
        </h2>
        <p class="mt-2 text-lg leading-8 text-clrSecondaryLight">
          Check out my recent articles and thoughts.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.url"
          class="flex flex-col items-start justify-between bg-clrPrimaryLight p-6 rounded-2xl border border-clrSecondaryLight/10 hover:border-clrAccent/50 transition-colors duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="relative w-full">
            <div class="text-xs leading-6 text-clrAccent">
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
                class="mt-5 line-clamp-3 text-sm leading-6 text-clrSecondaryLight"
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
  </section>
</template>

<script setup>
import { data as posts } from '../posts.data.js';

function formatDate(date) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
</script>
