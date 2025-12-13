<template>
  <!-- component -->
  <article class="mb-4 max-w-l text-clrSecondary">
    <!-- <a href="#">
      <img :src="post.image" :alt="post.imageAlt" class="mb-5 rounded-lg" />
    </a> -->

    <div
      class="relative w-full max-w-xs overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <img
        :src="post.image"
        :alt="post.imageAlt"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <router-link :to="`/blog/${post._id}`">Read More</router-link>
    <router-link :to="{ name: 'single_post', params: { id: post.id } }">
      <h2
        class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white"
      >
        {{ post.title }}
      </h2>

      <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
        {{ post.description }}
      </p>

      <!-- <a
        href="#"
        class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
      >
        Read in 4 minutes
      </a> -->
    </router-link>
  </article>
  <span
    class="p-1 mx-1 rounded-md text-clrSecondary bg-slate-500"
    v-for="tag in post.tags"
    :key="tag"
  >
    #{{ post.category }}</span
  >
</template>
<script setup>
import { defineProps } from "vue";
defineProps({ post: { type: Object, required: true } });
</script>
