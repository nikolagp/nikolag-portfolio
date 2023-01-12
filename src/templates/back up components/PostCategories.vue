<template>
  <div
    class="inline-block py-4 cursor-pointer"
    v-for="category in posts.categories"
    :key="category.id"
  >
    <span
      class="px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
    >
      #{{ category }}
    </span>
  </div>
</template>

<script setup></script>

<style></style>
