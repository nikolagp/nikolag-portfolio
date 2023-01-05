<template>
  <!-- <NewNavbar /> -->
  <nav>
    <a class="px-5 text-4xl text-white" href="#page-1">1</a>
    <a class="px-5 text-4xl text-white" href="#page-2">2</a>
    <a class="px-5 text-4xl text-white" href="#page-3">3</a>
  </nav>
  <AppHeader id="page-1" />
  <AppAbout id="page-2" />
  <AppProjects id="page-3" />
  <AppContact id="page-4" />
</template>

<script setup>
import AppAbout from "@/components/AppAbout.vue";
import AppProjects from "@/components/AppProjects.vue";
import AppContact from "@/components/AppContact.vue";
import AppHeader from "@/components/AppHeader.vue";
// import NewNavbar from "../components/NewNavbar.vue";
</script>

<style></style>
