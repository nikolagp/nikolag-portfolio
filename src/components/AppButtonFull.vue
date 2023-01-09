<template>
  <button
    :href="url"
    class="sm:text-xl inline-block rounded-lg px-4 py-1.5 text-base leading-7 text-clrSecondary ring-1 ring-clrAccent shadow-sm hover:bg-clrAccent hover:text-clrSecondary"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps(["url"]);
</script>

<style scoped></style>
