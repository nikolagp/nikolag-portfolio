<template>
  <!-- <div v-if="error">{{ error }}</div> -->
  <div
    v-if="post"
    class="container min-h-screen px-10 m-auto mt-40 md:max-w-3xl md:py-0"
  >
    <h1>{{ post.title }}</h1>
    <div
      class="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <img
        :src="post.image"
        :alt="post.imageAlt"
        class="object-cover object-center w-full h-full"
      />
    </div>

    <p>{{ post.body }}</p>
    <p>{{ post.details }}</p>
  </div>
</template>

<script>
// import { ref, reactive } from "vue";
// import { useRoute } from "vue-router";
import getPost from "@/hooks/getPost.js";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();

    return { post, error, load };
  },
};

// const { id } = defineProps(["id"]);

// const { post, error, load } = getPost(id);
// load();

// const route = useRoute();
// const id = ref(route.params.id);

// const post = ref(null);
</script>

<style scoped></style>
