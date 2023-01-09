<template>
  <main
    class="relative flex flex-col min-h-screen overflow-hidden p-top-30 md:justify-center"
  >
    <div>
      <!-- class="relative flex flex-col min-h-screen pt-24 overflow-hidden md:justify-center"
        class="flex flex-col justify-between pt-20 pb-32 mx-auto align-bottom sm:pt-48 sm:pb-40" -->
      <div class="flex flex-col gap-12 justify-evenly">
        <h1
          class="text-3xl font-bold tracking-tight text-center md:text-4xl lg:text-6xl"
        >
          <span
            class="text-clrSecondary"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            >Nikola G.</span
          >
          <br class="md:hidden" />
          <span
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Frontend Developer</span
          >
        </h1>
        <!-- Buttons -->
        <div
          class="flex justify-center mt-8 gap-x-4"
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <AppButtonFull
            ><a :href="url" target="_blank">Download CV</a></AppButtonFull
          >
          <!-- <AppButtonEmpty href="/#contact"> Contact Me </AppButtonEmpty> -->
        </div>
        <!-- Link to the blog -->
        <div class="hidden mt-8 sm:mb-8 md:flex sm:justify-center">
          <div
            class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-clrSecondaryLight hover:bg-clrAccent"
          >
            <span
              class="text-clrSecondaryLight"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
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
  </main>
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

<style>
.p-top-30 {
  padding-top: 50%;
}
</style>
