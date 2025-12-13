<template>
  <main data-aos="zoom-in-left" data-aos-duration="1000" class="mb-12">
    <div
      class="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <a :href="href" target="_blank">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="object-cover object-center w-full h-full"
        />
      </a>
    </div>
    <h3 class="my-3 text-xl font-semibold text-clrAccent">
      <a :href="href" target="_blank">
        {{ name }}
      </a>
    </h3>
    <p class="my-3 text-base text-clrSecondaryLight">
      {{ description }}
    </p>
  </main>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
  },
};
</script>
