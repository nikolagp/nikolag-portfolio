<template>
  <div class="overflow-hidden">
    <AppHeader />
    <AppAbout />
    <!-- <AppCompetencies /> -->
    <AppProjects />
    <AppContact />
  </div>
</template>

<script setup>
import AppAbout from "@/components/AppAbout.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppContact from "@/components/AppContact.vue";
import AppHeader from "@/components/AppHeader.vue";
// import AppCompetencies from "@/components/AppCompetencies.vue";
</script>
