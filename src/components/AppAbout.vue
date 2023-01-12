<template>
  <section id="about" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-center text-clrSecondary md:text-left md:text-4xl"
      >
        About
      </h2>
      <div
        class="flex flex-col-reverse gap-5 text-center md:text-left md:flex-row"
      >
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          class="w-full md:w-1/2"
        >
          <p class="max-w-2xl mx-auto leading-8 text-clrSecondary">
            Hi, I’m Nikola. Frontend developer - self-taught. Eager to explore
            the nature, my open mind and the new technologies. I'm passionate
            about philosophy, art and spirituality. I consider myself to be a
            fast learner, able to grasp new concepts quickly with excellent
            capacity to remember new information. <br /><strong
              >My tech stack in short includes: JavaScript, VueJS and
              WordPress.</strong
            >
          </p>
          <br />
          <button
            v-show="!readMore"
            @click="readMore = !readMore"
            class="text-clrAccent"
          >
            <u> Read More</u>
          </button>
          <Transition name="slide-fade">
            <div v-show="readMore">
              <p class="max-w-2xl mx-auto leading-8 text-clrSecondary">
                I'll start from high school, when I was writing poetry and
                studied music. Continued with social sciences obtaining BA and
                MA in International law. But also I felt in love with
                philosophy. Founded an NGO but moved to the capital to work for
                another NGO and project coordinator. There I met WordPress and I
                scratched the surface of the tech-world.
                <br />
                So, I quit my job, turned back to my hometown and found a remote
                one - editing and publishing posts on WordPress for a digital
                media company. The job was easy and repeatable. So I started
                freelancing - WordPress websites for friends and clients after I
                was done with the daily tasks. While working with it, besides
                the web development knowledge and design skills I gained, I
                learned CSS and a bit of JavaScript basic concepts. Right before
                the pandemic, I enrolled in a three-month course for Frontend
                development, and then the pandemic happened. I continued with
                studying, but it was more like a hobby. I was aware that
                something should disturb my comfort zone to dive deeply into the
                material.
                <br />
                The new decision was made. I stopped with accepting new WP
                projects, quit my job and bought a 60-hour course for Vanilla
                JavaScript. Since then, I'm learning every day. After that, I
                bought another one, a 20-hour course for VueJS, and among the
                other projects, I was working on this portfolio website.
                <br />
                I'm glad I climbed these steps so far by now. I like this ride,
                so I won't stop here for sure!
              </p>
              <button @click="readMore = !readMore" class="text-clrAccent">
                <u>Hide it, please</u>
              </button>
            </div>
          </Transition>
        </div>
        <div class="md:w-1/2">
          <div class="w-full px-10 lg:px-20">
            <img
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              class="rounded-md md:w-full lazy"
              src="/nikola_profile.jpg"
              alt="Nikola G. Profile Photo"
            />
          </div>
          <p
            class="mt-2 text-sm leading-8 sm:text-center text-clrSecondaryLight"
          >
            "Self-taught, no degree <br />In love with the code, indeed"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import "@heroicons/vue/24/outline";

const readMore = ref(false);
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
