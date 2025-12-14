---
layout: page
aside: false
sidebar: false
---

<script setup>
import AppHeader from './.vitepress/theme/components/AppHeader.vue'
import AppLatestPosts from './.vitepress/theme/components/AppLatestPosts.vue'
import AppAbout from './.vitepress/theme/components/AppAbout.vue'
import AppProjects from './.vitepress/theme/components/AppProjects.vue'
import AppContact from './.vitepress/theme/components/AppContact.vue'
</script>

<div class="portfolio-home overflow-hidden">
  <AppHeader />
  <AppLatestPosts />
  <AppAbout />
  <AppProjects />
  <AppContact />
</div>

<style scoped>
.portfolio-home {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 100% !important;
}
</style>
