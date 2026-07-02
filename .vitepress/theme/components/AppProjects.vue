<template>
  <section id="projects" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-clrSecondary md:text-4xl"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        Projects
      </h2>

      <!-- Filter pills -->
      <div
        class="mb-10 flex flex-wrap justify-center gap-2 md:justify-start"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="layout = tab.key"
          :class="[
            'rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200',
            layout === tab.key
              ? 'bg-clrAccent text-clrSecondary'
              : 'border border-clrSecondaryLight/20 text-clrSecondaryLight hover:border-clrAccent/50 hover:text-clrAccent',
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Project cards grid -->
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="800"
      >
        <AppProjectCard
          v-for="project in activeProjects"
          :key="project.name"
          :name="project.name"
          :imageSrc="project.imageSrc"
          :imageAlt="project.imageAlt"
          :description="project.description"
          :href="project.href"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AppProjectCard from './AppProjectCard.vue';

export default {
  name: 'AppProjects',
  components: { AppProjectCard },

  data() {
    return {
      layout: 'vanillajs',

      tabs: [
        { key: 'vanillajs', label: 'JavaScript' },
        { key: 'vuejs', label: 'Vue JS' },
        { key: 'react', label: 'React' },
        { key: 'wordpress', label: 'WordPress' },
      ],

      projects: {
        vanillajs: [
          {
            name: 'Bankist Application',
            description: 'Simple bank application for tracking deposits and withdrawals',
            imageSrc: '/assets/images/bankist_app.png',
            imageAlt: 'Bankist App Dashboard',
            href: 'https://github.com/nikolagp/bankist',
          },
          {
            name: 'Bankist - Website',
            description: 'Website for bank application',
            imageSrc: '/assets/images/bankist.png',
            imageAlt: 'Bankist Website',
            href: 'https://github.com/nikolagp/bankist-web',
          },
          {
            name: 'Guess My Number',
            description: 'Game: Guess my number',
            imageSrc: '/assets/images/gmn_game.png',
            imageAlt: 'Guess My Number game screenshot',
            href: 'https://github.com/nikolagp/guess-my-number',
          },
          {
            name: 'Mapty Application',
            description: 'Map and track your workouts',
            imageSrc: '/assets/images/mapty.png',
            imageAlt: 'Mapty workout map app',
            href: 'https://github.com/nikolagp/workout-mapp',
          },
        ],
        vuejs: [
          {
            name: 'Music Platform',
            description: 'Music platform built with Vue 3, Firebase and TailwindCSS',
            imageSrc: '/assets/images/hauzapp.png',
            imageAlt: 'Music platform built with Vue 3, Firebase and TailwindCSS',
            href: 'https://github.com/nikolagp/music-app-vue',
          },
          {
            name: 'Portfolio Website',
            description: 'Portfolio website built with Vue 3, Vite and TailwindCSS',
            imageSrc: '/assets/images/nikolagportfolio.png',
            imageAlt: 'Portfolio website built with Vue 3, Vite and TailwindCSS',
            href: '#',
          },
          {
            name: 'Political Quizz',
            description: 'Quizz app built with Vue 3',
            imageSrc: '/assets/images/vuejs.webp',
            imageAlt: 'Quizz app built with Vue 3',
            href: 'https://github.com/nikolagp/quizz',
          },
        ],
        wordpress: [
          {
            name: 'Liberty In Our Lifetime - Conference (2022)',
            description: 'Website for the conference',
            imageSrc: '/assets/images/liol.png',
            imageAlt: 'Liberty in Our Lifetime Conference 2022',
            href: 'https://lifetimeliberty.com/',
          },
          {
            name: 'Free City Foundation (2022)',
            description: 'Website for the foundation — Free Cities Foundation',
            imageSrc: '/assets/images/fcf.png',
            imageAlt: 'Free Cities Foundation website',
            href: 'https://free-cities.org/',
          },
          {
            name: 'Libertania (2020)',
            description: 'Website for non-profit organization Libertania — Center for Contemporary Politics',
            imageSrc: '/assets/images/libertania.png',
            imageAlt: 'Libertania website',
            href: 'https://libertania.org/',
          },
          {
            name: 'MIRA (2020)',
            description: 'Website for non-profit organization — Media Instruction, Resources and Advocacy',
            imageSrc: '/assets/images/mira.png',
            imageAlt: 'MIRA website',
            href: '#',
          },
        ],
        typescript: [
          {
            name: 'Simple Todo App',
            description: 'Todo app made with TypeScript, Tailwind and Vite',
            imageSrc: '/assets/images/todo-ts.png',
            imageAlt: 'TypeScript Todo App',
            href: 'https://github.com/nikolagp/type-script-todo',
          },
        ],
        react: [
          {
            name: 'Cook Inc. Recipe App',
            description: 'Cook Inc. app made with React, Tailwind and Vite',
            imageSrc: '/assets/images/cookinc.png',
            imageAlt: 'Cook Inc. Recipe App',
            href: 'https://github.com/nikolagp/cookinc-app',
          },
        ],
      },
    };
  },

  computed: {
    activeProjects() {
      return this.projects[this.layout] || [];
    },
  },
};
</script>
