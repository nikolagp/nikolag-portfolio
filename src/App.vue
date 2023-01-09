<template v-cloak>
  <div>
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style>
[v-cloak] {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

section {
  padding: 6rem 8%;
}
</style>
