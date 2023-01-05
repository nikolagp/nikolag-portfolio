<template v-cloak class="overflow-x-hidden scroll-smooth">
  <div>
    <!-- <AppNavbar /> -->
    <NewNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import NewNavbar from "./components/NewNavbar.vue";
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
</style>
