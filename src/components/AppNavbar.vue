<template>
  <main id="nav" v-if="showNavbar">
    <Popover
      class="fixed top-0 left-0 right-0 z-10 text-clrSecondary bg-clrPrimaryLight"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div class="flex items-center justify-between py-6 md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link :to="{ name: 'home' }">
              <img class="w-auto h-10 sm:h-10" src="/ngdev.ico" alt="NG Logo" />
            </router-link>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton
              class="inline-flex items-center justify-center p-2 rounded-md text-clrSecondary focus:outline-none md:hidden"
            >
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="w-8 h-8" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
            <router-link
              :to="{ name: 'about' }"
              :class="{ active: currentRoute === 'about' }"
              class="text-base font-medium hover:text-clrAccent"
              >About</router-link
            >
            <router-link
              :to="{ name: 'projects' }"
              :class="{ active: currentRoute === 'projects' }"
              class="text-base font-medium hover:text-clrAccent"
              >Projects</router-link
            >
            <router-link
              :to="{ name: 'contact' }"
              :class="{ active: currentRoute === 'contact' }"
              class="text-base font-medium hover:text-clrAccent"
              >Contact</router-link
            >
            <router-link
              :to="{ name: 'blog_posts' }"
              :class="{ active: currentRoute === 'blog_posts' }"
              class="text-base font-medium hover:text-clrAccent"
              >Blog</router-link
            >
          </PopoverGroup>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform"
        >
          <div class="rounded-lg shadow-lg bg-clrPrimary divide-gray-50">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="w-auto h-8"
                    src="/ngdev.ico"
                    alt="N.G. Development"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 rounded-md text-clrAccent hover:text-clrSecondary focus:outline-none"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="w-8 h-8" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="flex-col mt-6 text-clrSecondary"></div>
            </div>
            <div class="px-5 py-6 space-y-6 text-2xl">
              <div class="flex flex-col text-center text-clrSecondary">
                <router-link
                  :to="{ name: 'about' }"
                  :class="{ active: currentRoute === 'about' }"
                  class="hover:text-clrAccent"
                  >About</router-link
                >
                <router-link
                  :to="{ name: 'projects' }"
                  :class="{ active: currentRoute === 'projects' }"
                  class="hover:text-clrAccent"
                  >Projects</router-link
                >
                <router-link
                  :to="{ name: 'contact' }"
                  :class="{ active: currentRoute === 'contact' }"
                  class="hover:text-clrAccent"
                  >Contact</router-link
                >
                <router-link
                  :to="{ name: 'blog_posts' }"
                  :class="{ active: currentRoute === 'blog_posts' }"
                  class="hover:text-clrAccent"
                  >Blog</router-link
                >

                <div
                  class="flex justify-center gap-5 py-4 mt-10 align-baseline md:gap-20 md:w-1/2"
                >
                  <a :href="github" target="_blank"
                    ><i
                      class="text-3xl cursor-pointer text-clrSecondary fa-brands fa-github hover:text-clrAccent"
                    ></i>
                  </a>
                  <a :href="linkedin" target="_blank"
                    ><i
                      class="text-3xl cursor-pointer text-clrSecondary fa-brands fa-linkedin hover:text-clrAccent"
                    ></i
                  ></a>
                  <a :href="twitter" target="_blank"
                    ><i
                      class="text-3xl cursor-pointer text-clrSecondary fa-brands fa-twitter hover:text-clrAccent"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const currentRoute = computed(() => {
  return route.name;
});

const twitter = "https://twitter.com/amagi_dev";
const github = "https://github.com/nikolagp";
const linkedin = "https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/";

const showNavbar = ref(true);
let previousScrollPosition = 0;

const handleScroll = () => {
  const currentScrollPosition = window.scrollY;

  if (
    currentScrollPosition < previousScrollPosition ||
    currentScrollPosition == previousScrollPosition
  ) {
    showNavbar.value = true;
  } else {
    showNavbar.value = false;
  }

  previousScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.sticky {
  background-color: red;
}

.active {
  color: var(--clrAccent);
}

/* .navbar {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
} */
</style>
