<template>
  <main id="projects">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Project title and list -->
      <div
        class="max-w-2xl py-10 mx-auto sm:py-24 lg:max-w-none hover:border-b-2-clrAccent lg:py-32"
      >
        <h2 class="text-4xl font-bold text-clrSecondary md:text-left">
          Projects
        </h2>
        <div
          class="flex flex-col justify-center md:justify-between md:flex-row"
        >
          <div class="flex flex-col md:w-1/4 text-clrSecondary">
            <ul
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              class="py-10 text-center md:text-left"
            >
              <li
                class="py-2 cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
                @click="layout = 'vanillajs'"
                :class="{ 'underline text-clrAccent': layout === 'vanillajs' }"
              >
                Vanilla JavaScript
              </li>
              <li
                class="py-2 cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
                @click="layout = 'vuejs'"
                :class="{ 'underline text-clrAccent': layout === 'vuejs' }"
              >
                Vue JS & Tailwind
              </li>
              <li
                class="py-2 cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
                @click="layout = 'wordpress'"
                :class="{ 'underline text-clrAccent': layout === 'wordpress' }"
              >
                WordPress
              </li>
              <li
                class="py-2 cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
                @click="layout = 'htmlcss'"
                :class="{ 'underline text-clrAccent': layout === 'htmlcss' }"
              >
                HTML & CSS
              </li>
            </ul>
          </div>

          <!-- Project cards -->
          <div
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            class="cursor-pointer md:w-3/4"
          >
            <!-- VueJS -->
            <div
              v-if="layout === 'vuejs'"
              class="mt-6 space-y-12 duration-300 ease-in active lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="project in vuejs"
                :key="project.name"
                class="relative group"
              >
                <AppProjectCard
                  :name="project.name"
                  :imageSrc="project.imageSrc"
                  :imageAlt="project.imageAlt"
                  :description="project.description"
                  :href="project.href"
                />
              </div>
            </div>

            <!-- Vanilla JS -->

            <div
              v-if="layout === 'vanillajs'"
              class="mt-6 space-y-12 active lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="project in vanillajs"
                :key="project.name"
                class="relative group"
              >
                <AppProjectCard
                  :name="project.name"
                  :imageSrc="project.imageSrc"
                  :imageAlt="project.imageAlt"
                  :description="project.description"
                  :href="project.href"
                />
              </div>
            </div>

            <!-- WordPress -->

            <div
              v-if="layout === 'wordpress'"
              class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="project in wordpress"
                :key="project.name"
                class="relative group"
              >
                <AppProjectCard
                  :name="project.name"
                  :imageSrc="project.imageSrc"
                  :imageAlt="project.imageAlt"
                  :description="project.description"
                  :href="project.href"
                />
              </div>
            </div>

            <!-- HTML & CSS -->

            <div
              v-if="layout === 'htmlcss'"
              class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
            >
              <div
                v-for="project in htmlcss"
                :key="project.name"
                class="relative group"
              >
                <AppProjectCard
                  :name="project.name"
                  :imageSrc="project.imageSrc"
                  :imageAlt="project.imageAlt"
                  :description="project.description"
                  :href="project.href"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AppProjectCard from "./AppProjectCard.vue";

export default {
  name: "AppProjects",
  components: {
    AppProjectCard,
  },

  data() {
    return {
      layout: "vanillajs",

      vanillajs: [
        {
          name: "Bankist Application",
          description:
            "Simple bank application for tracking deposits and withdrawals",
          imageSrc: "/assets/images/bankist_app.png",
          imageAlt: "Bankist App Dashboard",
          href: "https://github.com/nikolagp/bankist",
          category: "vanillajs",
        },
        {
          name: "Bankist - Website",
          description: "Website for bank application",
          imageSrc: "/assets/images/bankist.png",
          imageAlt: "Bankist Website",
          href: "https://github.com/nikolagp/bankist-web",
          category: "vanillajs",
        },
        {
          name: "Guess My Number",
          description: "Game: Guess my number",
          imageSrc: "/assets/images/gmn_game.png",
          imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
          href: "https://github.com/nikolagp/guess-my-number",
          category: "vanillajs",
        },
        {
          name: "Mapty Application",
          description: "Map and track your workouts",
          imageSrc: "/assets/images/mapty.png",
          imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
          href: "https://github.com/nikolagp/workout-mapp",
          category: "vanillajs",
        },
      ],
      vuejs: [
        {
          name: "Music Platform",
          description:
            "Music platform built with Vue 3, Firebase and TailwindCSS",
          imageSrc: "/assets/images/hauzapp.png",
          imageAlt:
            "Cover of music platform built with Vue 3, Firebase and TailwindCSS.",
          href: "https://github.com/nikolagp/music-app-vue",
          category: "vuejs",
        },
        {
          name: "Portfolio Website",
          description:
            "Portfolio website built with Vue 3, Vite and TailwindCSS",
          imageSrc: "/assets/images/nikolagportfolio.png",
          imageAlt:
            "Cover of Portfolio website built with Vue 3, Vite and TailwindCSS",
          href: "#",
          category: "vuejs",
        },
        {
          name: "Political Quizz",
          description: "Quizz app buil with Vue 3",
          imageSrc: "/assets/images/hauzapp.png",
          imageAlt: "Cover of Quizz app buil with Vue 3",
          href: "#",
          category: "vuejs",
        },
      ],
      wordpress: [
        {
          name: "Liberty In Our Lifetime - Conference (2022)",
          description: "Website for the conference",
          imageSrc: "/assets/images/liol.png",
          imageAlt: "Liberty in ourlifetime Conference 2022.",
          href: "https://lifetimeliberty.com/",
          category: "wordpress",
        },
        {
          name: "Free City Foundation (2022)",
          description: "Website for the foundation - Free Cities Foundation",
          imageSrc: "/assets/images/fcf.png",
          imageAlt: "Cover of the website for the Free Cities FOundation",
          href: "https://free-cities.org/",
          category: "wordpress",
        },
        {
          name: "Libertania - Center for Contemporary Politics (2020)",
          description: "Website for non-profit organization Libertania",
          imageSrc: "/assets/images/libertania.png",
          imageAlt:
            "Cover photo of the website for non-profit organization Libertania",
          href: "https://libertania.org/",
          category: "wordpress",
        },
        {
          name: "Media Instruction, Resources and Advocacy - MIRA (2020)",
          description: "Website for non-profit organization MIRA",
          imageSrc: "/assets/images/mira.png",
          imageAlt:
            "Cover photo of the website for non-profit organization MIRA",
          href: "#",
          category: "wordpress",
        },
      ],
      htmlcss: [
        {
          name: "HTML & CSS 1",
          description: "Work from home accessories",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
          imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
          href: "#",
          category: "wordpress",
        },
        {
          name: "HTML & CSS 2",
          description: "Work from home accessories",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
          imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
          href: "#",
          category: "wordpress",
        },
        {
          name: "HTML & CSS 3",
          description: "Work from home accessories",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
          imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
          href: "#",
          category: "wordpress",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
