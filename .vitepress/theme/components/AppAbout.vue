<template>
  <section id="about" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-clrSecondary md:text-4xl"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        About
      </h2>

      <div class="flex flex-col gap-12 md:flex-row md:gap-16">
        <!-- Left: bio text -->
        <div
          class="md:w-1/2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <p class="mb-4 leading-8 text-clrSecondaryLight">
            Hi, I'm Nikola — a FullStack developer, self-taught. Eager to explore
            new technologies and driven by an open mind. I consider myself a fast
            learner, able to grasp new concepts quickly with an excellent capacity
            to retain information.
          </p>
          <p class="leading-8 text-clrSecondaryLight">
            Currently contributing daily to production web applications with React,
            maintaining Node.js microservices, and building personal projects with
            Vue, Next.js, and TypeScript on the side.
          </p>

          <button
            v-show="!readMore"
            @click="readMore = true"
            class="mt-6 text-clrAccent underline underline-offset-4 hover:text-clrAccentLight transition-colors"
          >
            Read the full story
          </button>

          <Transition name="slide-fade">
            <div v-show="readMore" class="mt-6">
              <p class="mb-4 leading-8 text-clrSecondaryLight">
                I'll start from high school, where I wrote poetry and studied
                music, then continued to social sciences — BA and MA in
                International law. I fell in love with philosophy, founded an NGO,
                moved to the capital, and met WordPress there, scratching the
                surface of the tech world.
              </p>
              <p class="mb-4 leading-8 text-clrSecondaryLight">
                So I quit my job, turned back to my hometown, and found a remote
                one — editing and publishing posts on WordPress. The job was easy
                and repeatable, so I started freelancing WordPress websites. While
                doing that I picked up CSS and basic JavaScript concepts. Right
                before the pandemic, I enrolled in a three-month frontend course —
                and then the pandemic happened. I continued studying, but more as a
                hobby.
              </p>
              <p class="mb-6 leading-8 text-clrSecondaryLight">
                The new decision was made: I stopped accepting new WP projects,
                quit my job, and bought a 60-hour Vanilla JavaScript course. Since
                then I'm learning every day — Vue, React, Node.js, TypeScript, and
                whatever comes next. I like this ride, and I won't stop here.
              </p>
              <button
                @click="readMore = false"
                class="text-clrAccent underline underline-offset-4 hover:text-clrAccentLight transition-colors"
              >
                Hide it, please
              </button>
            </div>
          </Transition>
        </div>

        <!-- Right: skills grid -->
        <div
          class="md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <p class="mb-4 font-mono text-sm uppercase tracking-widest text-clrAccent">
            Technical Skills
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill" class="skill-badge">
              {{ skill }}
            </span>
          </div>

          <p class="mt-10 mb-4 font-mono text-sm uppercase tracking-widest text-clrAccent">
            Experience With
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tool in tools" :key="tool" class="tool-badge">
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const readMore = ref(false);

const skills = [
  'React.js', 'Redux', 'Redux-Saga',
  'Node.js', 'Vue 3', 'TypeScript',
  'JavaScript', 'Next.js', 'Vite',
  'Supabase', 'AWS', 'WordPress',
  'TailwindCSS', 'CSS', 'HTML',
];

const tools = [
  'Jest', 'React Testing Library', 'TestCafe',
  'Material UI', 'Swagger / OpenAPI', 'GitHub Actions',
  'Bitbucket Pipelines', 'Jira', 'ConfigCat',
  'Papertrail', 'VirtualBox', 'GitHub Copilot',
];
</script>

<style scoped>
.skill-badge {
  @apply rounded-md border border-clrAccent/30 bg-clrAccent/10 px-3 py-1.5 text-sm font-medium text-clrAccent transition-colors hover:bg-clrAccent/20;
}

.tool-badge {
  @apply rounded-md border border-clrSecondaryLight/15 bg-clrSecondaryLight/5 px-3 py-1.5 text-sm text-clrSecondaryLight transition-colors hover:border-clrSecondaryLight/30;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
