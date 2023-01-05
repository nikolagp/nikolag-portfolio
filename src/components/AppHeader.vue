<template>
  <section class="page">
    <div class="relative flex flex-col justify-center h-screen px-6 lg:px-6">
      <!-- class="flex flex-col justify-between pt-20 pb-32 mx-auto align-bottom sm:pt-48 sm:pb-40" -->
      <div class="flex flex-col gap-8 justify-evenly">
        <h1
          class="px-10 py-10 text-3xl font-bold tracking-tight text-center md:text-6xl"
        >
          <span
            class="text-clrSecondary"
            v-motion
            :initial="{
              opacity: 0,
              scale: 0.5,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 500,
                duration: 1000,
              },
            }"
            >Nikola G. Petrovski</span
          >
          <br class="md:hidden" />
          <span
            v-motion
            :initial="{
              opacity: 0,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1000,
              },
            }"
          >
            Frontend Developer</span
          >
        </h1>
        <!-- Buttons -->
        <div
          class="flex justify-center mt-8 gap-x-4"
          v-motion
          :initial="{
            opacity: 0,
          }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 1000,
              duration: 1000,
            },
          }"
        >
          <AppButtonFull
            ><a :href="url" target="_blank">Download CV</a></AppButtonFull
          >
          <!-- <AppButtonEmpty href="/#contact"> Contact Me </AppButtonEmpty> -->
        </div>
        <!-- Link to the blog -->
        <div class="hidden mt-8 sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-clrSecondaryLight hover:bg-clrAccent"
          >
            <span
              class="text-clrSecondaryLight"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0.3,
              }"
              :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 1500,
                  duration: 1000,
                },
              }"
            >
              Returing value to the codding community.
              <router-link
                :to="{ name: 'blog_posts' }"
                class="font-semibold text-clrSecondaryLight"
                ><span class="absolute inset-0" aria-hidden="true" />Take a look
                <span aria-hidden="true">&rarr;</span></router-link
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { ref } from "vue";
// import { Dialog, DialogPanel } from "@headlessui/vue";
// import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

import AppButtonFull from "./AppButtonFull.vue";
const url =
  "https://drive.google.com/file/d/14IZ4guB9A48_M0PIwsDf9QsyRL9dXyMP/view";
// import AppButtonEmpty from "./AppButtonEmpty.vue";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

// const mobileMenuOpen = ref(false);
</script>
