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
            the nature, my open mind and the new technologies. Passionate about
            philosophy, art and spirituality. My tech stack in short includes:
            JavaScript, VueJS and WordPress.
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
                I was writing poetry and studied music in high school. Continued
                with social sciences obtaining MA in International law, but felt
                in love with philosophy. Founded an NGO, moved to the capital to
                work for another NGO where I scratched the surface of the
                tech-world with WordPress. <br />
                So, I quit my job, get back in my hometown and found remote one
                - editing and publishing posts on WordPress for digital media
                company. The job was easy and repeatable so I started
                freelancing after I was done with the daily tasks, creating
                WordPress websites for friend and clients. While working with
                it, besides the web development knowledge I gained, I learned
                CSS and met JavaScript. Right before the pandemic I enrolled on
                a three-months course for Frontend development and than pandemic
                happened. I continued with studying, but at the beginning it was
                like a hobby. I knew that something should disturb my comfort
                zone to dive deeply. <br />
                The new decission was made. I stopped accepting new WP projects,
                bought a 60 hours course for Vanilla JavaScript and started
                leaning every day. After that I bought another one, 20 hours
                course for VueJS and among the other projects, I was working on
                this portfolio website. I’m glad I climbed these steps so far by
                now. Won’t stop for sure!
              </p>
              <button @click="readMore = !readMore" class="text-clrAccent">
                <u>Hide it, please</u>
              </button>
            </div>
          </Transition>
        </div>
        <div class="w-full md:w-1/2">
          <img
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            class="px-20 rounded-md md:w-full lazy"
            src="/nikola_profile.jpg"
            alt="Nikola G. Profile Photo"
          />
          <p
            class="mt-2 text-lg leading-8 sm:text-center text-clrSecondaryLight"
          >
            "Self-taught, no degree<br />
            In love with the code, indeed"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { motionFadeUp, motionFadeIn } from "./motions";
import { ref } from "vue";
import // BoltIcon,
// DevicePhoneMobileIcon,
// GlobeAltIcon,
// ScaleIcon,
"@heroicons/vue/24/outline";

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
