<template>
  <main class="flex flex-col w-full min-h-screen">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Project title and list -->
      <div
        class="max-w-2xl py-10 mx-auto sm:py-24 lg:max-w-none hover:border-b-2-clrAccent lg:py-32"
      >
        <h2 class="text-4xl font-bold text-clrSecondary md:text-left">
          Blog posts
        </h2>
        <div
          class="flex flex-col justify-center md:justify-between md:flex-row"
        >
          <!-- Project cards -->
          <div>
            <div class="text-clrSecondary" v-if="error">
              {{ error }}
            </div>
            <div v-if="posts.length">
              <div
                class="mt-6 space-y-12 duration-300 ease-in active lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
              >
                <div
                  v-for="post in posts"
                  :key="post.id"
                  class="relative group"
                >
                  <BlogPostCard :post="post" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import BlogPostCard from "@/components/BlogPostCard.vue";
import getPosts from "@/hooks/getPosts.js";

const { posts, error, load } = getPosts();
load();
</script>
