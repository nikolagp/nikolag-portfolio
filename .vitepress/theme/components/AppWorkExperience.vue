<template>
  <section id="experience" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-clrSecondary md:text-4xl"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        Work Experience
      </h2>
      <p
        class="mb-12 text-clrSecondaryLight"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        A few of the places I've contributed to along the way.
      </p>

      <div class="flex flex-col gap-6 md:flex-row md:gap-12">
        <!-- Left: company tabs -->
        <div
          class="flex flex-row gap-2 overflow-x-auto md:flex-col md:w-48 md:flex-shrink-0"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <button
            v-for="(job, index) in jobs"
            :key="job.company"
            @click="selected = index"
            :class="[
              'whitespace-nowrap rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors duration-200',
              selected === index
                ? 'bg-clrAccent/15 text-clrAccent'
                : 'text-clrSecondaryLight hover:bg-clrSecondaryLight/5 hover:text-clrSecondary',
            ]"
          >
            {{ job.company }}
          </button>
        </div>

        <!-- Right: job details -->
        <div
          class="flex-1 min-h-[220px]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div v-if="current" :key="selected">
            <h3 class="mb-1 text-xl font-bold text-clrSecondary">
              {{ current.title }}
              <span class="text-clrAccent">@ {{ current.company }}</span>
            </h3>
            <p class="mb-1 font-mono text-sm text-clrSecondaryLight">
              {{ current.period }}
            </p>
            <p class="mb-5 text-sm text-clrSecondaryLight">
              {{ current.location }}
            </p>
            <ul class="space-y-2.5">
              <li
                v-for="point in current.bullets"
                :key="point"
                class="flex items-start gap-3 text-sm leading-relaxed text-clrSecondaryLight"
              >
                <svg
                  class="mt-0.5 h-4 w-4 flex-shrink-0 text-clrAccent"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const selected = ref(0);

const jobs = [
  {
    company: 'TechCorp',
    title: 'React Developer',
    period: 'Jan 2023 – Present',
    location: 'Remote',
    bullets: [
      'Contributing daily to production web applications, implementing features and reusable components using React, Redux, and Redux-Saga',
      'Executed migration from Material UI v4 to v6, addressing breaking changes and refactoring UI components across the codebase',
      'Writing and maintaining unit and component tests with Jest and React Testing Library, reducing regression bugs by 30%',
      'Developing and maintaining Node.js WebAPI services within a microservices architecture supporting multi-service API flows',
    ],
  },
  {
    company: 'Digital Agency',
    title: 'Frontend Developer',
    period: 'Jun 2022 – Dec 2022',
    location: 'Skopje, MK',
    bullets: [
      'Built responsive UIs for client projects using Vue 3, Vite, and TailwindCSS',
      'Collaborated with designers to translate Figma mockups into pixel-perfect components',
      'Integrated RESTful APIs and handled state management with Pinia',
      'Improved page load performance by 40% through code splitting and lazy loading',
    ],
  },
  {
    company: 'StartupXYZ',
    title: 'Junior Frontend Developer',
    period: 'Jan 2022 – May 2022',
    location: 'Remote',
    bullets: [
      'Developed new features for a SaaS dashboard using Vue.js and Vuex',
      'Worked closely with the backend team to design and consume GraphQL APIs',
      'Contributed to the design system documentation and component library',
    ],
  },
  {
    company: 'Web Studio',
    title: 'Junior Web Developer',
    period: 'Jun 2021 – Dec 2021',
    location: 'Skopje, MK',
    bullets: [
      'Built and maintained WordPress websites for local businesses and NGOs',
      'Customised themes and developed plugins using PHP and vanilla JavaScript',
      'Handled SEO optimisation, improving organic traffic for three client sites',
    ],
  },
  {
    company: 'Freelance',
    title: 'WordPress Developer',
    period: '2019 – 2021',
    location: 'Remote',
    bullets: [
      'Designed and delivered custom WordPress websites for clients across various industries',
      'Managed full project lifecycle — from scoping and design to deployment and handover',
      'Built reusable page templates and maintained ongoing support agreements',
    ],
  },
];

const current = computed(() => jobs[selected.value]);
</script>
