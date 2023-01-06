<template>
  <div class="px-6 md:px-0">
    <AppHeader />
    <AppAbout />
    <AppProjects />
    <AppContact />
  </div>
</template>

<script setup>
import AppAbout from "@/components/AppAbout.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppContact from "@/components/AppContact.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<style></style>
