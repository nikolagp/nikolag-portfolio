<template>
  <main id="nav">
    <Popover
      class="fixed top-0 left-0 right-0 text-clrSecondary bg-clrPrimaryLight"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6">
        <div
          class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
        >
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link :to="{ name: 'home' }">
              <span class="sr-only">Your Company</span>
              <img
                class="w-auto h-8 sm:h-10"
                src="/ngdev.ico"
                alt="NG Development Logo"
              />
            </router-link>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton
              class="inline-flex items-center justify-center p-2 rounded-md text-clrSecondary focus:outline-none md:hidden"
            >
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="w-6 h-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
            <a
              href="/#about"
              class="text-base font-medium hover:text-clrAccent"
            >
              About</a
            >
            <a
              href="/#projects"
              class="text-base font-medium hover:text-clrAccent"
              >Work</a
            >
            <a
              href="/#contact"
              class="text-base font-medium hover:text-clrAccent"
              >Contact</a
            >
            <router-link
              :to="{ name: 'blog_posts' }"
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
                  <img class="w-auto h-8" src="/ngdev.ico" alt="Your Company" />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center p-2 rounded-md text-clrAccent hover:text-clrSecondary focus:outline-none"
                  >
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="flex-col mt-6 text-clrSecondary"></div>
            </div>
            <div class="px-5 py-6 space-y-6">
              <div class="flex flex-col text-clrSecondary">
                <a href="/#about" class="text-lg hover:text-clrAccent">About</a>
                <a href="/#projects" class="text-lg hover:text-clrAccent"
                  >Work</a
                >
                <a href="/#contact" class="text-lg hover:text-clrAccent"
                  >Contact</a
                >
                <router-link
                  :to="{ name: 'blog_posts' }"
                  class="text-lg hover:text-clrAccent"
                  >Blog</router-link
                >
                <div
                  class="flex justify-center gap-5 mt-10 align-baseline md:gap-20 md:w-1/2"
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
                <!-- <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
                >{{ item.name }}</a
              > -->
              </div>
              <!-- <div class="flex flex-col-reverse">
                <AppButtonFull> Download CV </AppButtonFull>
                <AppButtonEmpty> Contact Me </AppButtonEmpty>
              </div> -->
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </main>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  // ArrowPathIcon,
  Bars3Icon,
  // BookmarkSquareIcon,
  // CalendarIcon,
  // ChartBarIcon,
  // CursorArrowRaysIcon,
  // LifebuoyIcon,
  // PhoneIcon,
  // PlayIcon,
  // ShieldCheckIcon,
  // Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
// import router from "../router";
// import AppButtonEmpty from "./AppButtonEmpty.vue";
// import AppButtonFull from "./AppButtonFull.vue";

// const scrollPageTo = (navEl) => {
//   console.log(`#${navEl}`);
//   let element = document.querySelector(`#${navEl}`);
//   console.log(element);
//   element.scrollIntoView({ behavior: "smooth" });
// };
</script>

<style scoped>
.sticky {
  background-color: red;
}
</style>
