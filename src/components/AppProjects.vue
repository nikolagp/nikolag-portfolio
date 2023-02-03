<template>
  <section id="about" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-center text-clrSecondary md:text-left md:text-4xl"
      >
        Projects
      </h2>

      <div class="flex flex-col justify-center md:justify-between md:flex-row">
        <div class="flex flex-col mb-10 md:w-1/4 text-clrSecondary">
          <ul
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            class="w-auto text-center md:text-left"
          >
            <li
              class="py-2 text-xl cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
              @click="layout = 'vanillajs'"
              :class="{ 'underline text-clrAccent': layout === 'vanillajs' }"
            >
              JavaScript
            </li>
            <li
              class="py-2 text-xl cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
              @click="layout = 'vuejs'"
              :class="{ 'underline text-clrAccent': layout === 'vuejs' }"
            >
              Vue JS
            </li>
            <li
              class="py-2 text-xl cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
              @click="layout = 'react'"
              :class="{ 'underline text-clrAccent': layout === 'react' }"
            >
              React
            </li>
            <li
              class="py-2 text-xl cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
              @click="layout = 'wordpress'"
              :class="{ 'underline text-clrAccent': layout === 'wordpress' }"
            >
              WordPress
            </li>
            <li
              class="py-2 text-xl cursor-pointer hover:text-clrAccent hover:underline underline-offset-8"
              @click="layout = 'typescript'"
              :class="{ 'underline text-clrAccent': layout === 'typescript' }"
            >
              TypeScript
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
          class="cursor-pointer md:w-3/4"
        >
          <!-- VueJS -->
          <div
            v-if="layout === 'vuejs'"
            class="space-y-6 duration-300 ease-in active lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
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
            class="space-y-6 active lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
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
            class="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
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

          <!-- TypeScript -->

          <div
            v-if="layout === 'typescript'"
            class="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
          >
            <div
              v-for="project in typescript"
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

          <!-- React -->

          <div
            v-if="layout === 'react'"
            class="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
          >
            <div
              v-for="project in react"
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
  </section>
</template>

<script>
import AppProjectCard from './AppProjectCard.vue';

export default {
  name: 'AppProjects',
  components: {
    AppProjectCard,
  },

  data() {
    return {
      layout: 'vanillajs',

      vanillajs: [
        {
          name: 'Bankist Application',
          description:
            'Simple bank application for tracking deposits and withdrawals',
          imageSrc: '/assets/images/bankist_app.png',
          imageAlt: 'Bankist App Dashboard',
          href: 'https://github.com/nikolagp/bankist',
          category: 'vanillajs',
        },
        {
          name: 'Bankist - Website',
          description: 'Website for bank application',
          imageSrc: '/assets/images/bankist.png',
          imageAlt: 'Bankist Website',
          href: 'https://github.com/nikolagp/bankist-web',
          category: 'vanillajs',
        },
        {
          name: 'Guess My Number',
          description: 'Game: Guess my number',
          imageSrc: '/assets/images/gmn_game.png',
          imageAlt:
            'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'https://github.com/nikolagp/guess-my-number',
          category: 'vanillajs',
        },
        {
          name: 'Mapty Application',
          description: 'Map and track your workouts',
          imageSrc: '/assets/images/mapty.png',
          imageAlt:
            'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: 'https://github.com/nikolagp/workout-mapp',
          category: 'vanillajs',
        },
      ],
      vuejs: [
        {
          name: 'Music Platform',
          description:
            'Music platform built with Vue 3, Firebase and TailwindCSS',
          imageSrc: '/assets/images/hauzapp.png',
          imageAlt:
            'Cover of music platform built with Vue 3, Firebase and TailwindCSS.',
          href: 'https://github.com/nikolagp/music-app-vue',
          category: 'vuejs',
        },
        {
          name: 'Portfolio Website',
          description:
            'Portfolio website built with Vue 3, Vite and TailwindCSS',
          imageSrc: '/assets/images/nikolagportfolio.png',
          imageAlt:
            'Cover of Portfolio website built with Vue 3, Vite and TailwindCSS',
          href: '#',
          category: 'vuejs',
        },
        {
          name: 'Political Quizz',
          description: 'Quizz app buil with Vue 3',
          imageSrc: '/assets/images/vuejs.webp',
          imageAlt: 'Cover of Quizz app buil with Vue 3',
          href: 'https://github.com/nikolagp/quizz',
          category: 'vuejs',
        },
      ],
      wordpress: [
        {
          name: 'Liberty In Our Lifetime - Conference (2022)',
          description: 'Website for the conference',
          imageSrc: '/assets/images/liol.png',
          imageAlt: 'Liberty in ourlifetime Conference 2022.',
          href: 'https://lifetimeliberty.com/',
          category: 'wordpress',
        },
        {
          name: 'Free City Foundation (2022)',
          description: 'Website for the foundation - Free Cities Foundation',
          imageSrc: '/assets/images/fcf.png',
          imageAlt: 'Cover of the website for the Free Cities FOundation',
          href: 'https://free-cities.org/',
          category: 'wordpress',
        },
        {
          name: 'Libertania - Center for Contemporary Politics (2020)',
          description: 'Website for non-profit organization Libertania',
          imageSrc: '/assets/images/libertania.png',
          imageAlt:
            'Cover photo of the website for non-profit organization Libertania',
          href: 'https://libertania.org/',
          category: 'wordpress',
        },
        {
          name: 'Media Instruction, Resources and Advocacy - MIRA (2020)',
          description: 'Website for non-profit organization MIRA',
          imageSrc: '/assets/images/mira.png',
          imageAlt:
            'Cover photo of the website for non-profit organization MIRA',
          href: '#',
          category: 'wordpress',
        },
      ],
      typescript: [
        {
          name: 'Simple Todo App',
          description: 'Todo app made with TypeScript, Tailwind and Vite',
          imageSrc: '/assets/images/todo-ts.png',
          imageAlt: 'Screenshot from Todo-App',
          href: 'https://github.com/nikolagp/type-script-todo',
          category: 'typescript',
        },
      ],
      react: [
        {
          name: 'Cook Inc. Recipe App',
          description: 'Cook Inc. app made with React, Tailwind and Vite',
          imageSrc: '/assets/images/cookinc.png',
          imageAlt: 'Screenshot from cookinc-App',
          href: 'https://github.com/nikolagp/cookinc-app',
          category: 'react',
        },
      ],
    };
  },
  methods: {},
};
</script>
