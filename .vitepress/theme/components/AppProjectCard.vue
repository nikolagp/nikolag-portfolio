<template>
  <article
    class="group flex flex-col overflow-hidden rounded-xl border border-clrSecondaryLight/10 bg-clrSecondaryLight/5 transition-all duration-300 hover:border-clrAccent/40 hover:-translate-y-1"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <div class="relative overflow-hidden">
      <a :href="href" target="_blank" tabindex="-1">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </a>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <h3 class="mb-2 text-base font-semibold leading-snug">
        <a
          :href="href"
          target="_blank"
          class="text-clrSecondary transition-colors hover:text-clrAccent"
        >
          {{ name }}
        </a>
      </h3>
      <p class="mb-4 flex-1 text-sm leading-relaxed text-clrSecondaryLight">
        {{ description }}
      </p>
      <a
        :href="href"
        target="_blank"
        class="inline-flex items-center gap-1.5 text-xs font-medium text-clrAccent transition-colors hover:text-clrAccentLight"
      >
        View Source
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String },
    description: { type: String, required: true },
    href: { type: String },
  },
};
</script>
