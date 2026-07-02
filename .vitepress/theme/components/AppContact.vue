<template>
  <section id="contact" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-clrSecondary md:text-4xl"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        Contact / <span class="text-clrAccent">Hire me</span>
      </h2>

      <div class="flex flex-col gap-12 md:flex-row md:gap-16">
        <!-- Form -->
        <div
          class="md:w-1/2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <div
            v-if="success"
            class="rounded-xl border border-clrAccent/30 bg-clrAccent/10 p-8 text-center"
            data-aos="fade-down"
          >
            <p class="mb-4 font-medium text-clrSecondary">Thank you for your message!</p>
            <button
              @click.prevent="success = false"
              class="text-sm text-clrSecondaryLight underline underline-offset-4 hover:text-clrAccent transition-colors"
            >
              Back to the form
            </button>
          </div>

          <form v-if="!success" class="space-y-4" @submit.prevent="handleSubmit">
            <input
              type="email"
              placeholder="Email"
              name="email"
              v-model="email"
              class="contact-input"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              v-model="subject"
              class="contact-input"
              required
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              v-model="message"
              class="contact-input resize-none"
              required
            ></textarea>

            <button
              type="submit"
              :disabled="!email || !subject || !message"
              class="w-full rounded-lg bg-clrAccent px-6 py-3 font-medium text-clrSecondary transition-colors duration-200 hover:bg-clrAccentLight disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Social / find me -->
        <div
          class="flex flex-col justify-center md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <p class="mb-2 font-mono text-sm uppercase tracking-widest text-clrAccent">
            Or find me here
          </p>
          <p class="mb-8 text-clrSecondaryLight leading-relaxed">
            I'm always open to interesting projects, freelance work, or just
            a good conversation about tech, philosophy, or keyboards.
          </p>

          <div class="flex gap-6">
            <a
              :href="github"
              target="_blank"
              class="flex items-center gap-2 text-clrSecondaryLight transition-colors hover:text-clrAccent"
            >
              <i class="fa-brands fa-github text-2xl"></i>
              <span class="text-sm">GitHub</span>
            </a>
            <a
              :href="linkedin"
              target="_blank"
              class="flex items-center gap-2 text-clrSecondaryLight transition-colors hover:text-clrAccent"
            >
              <i class="fa-brands fa-linkedin text-2xl"></i>
              <span class="text-sm">LinkedIn</span>
            </a>
            <a
              :href="twitter"
              target="_blank"
              class="flex items-center gap-2 text-clrSecondaryLight transition-colors hover:text-clrAccent"
            >
              <i class="fa-brands fa-x-twitter text-2xl"></i>
              <span class="text-sm">Twitter / X</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
// import { db } from '../firebase/firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';

const twitter = 'https://twitter.com/amagi_dev';
const github = 'https://github.com/nikolagp';
const linkedin = 'https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/';

const success = ref(false);
const email = ref('');
const subject = ref('');
const message = ref('');

const handleSubmit = () => {
  // addDoc(collection(db, 'contact-form'), {
  //   date: new Date().toISOString().slice(0, 16).split('T').join(' '),
  //   email: email.value,
  //   subject: subject.value,
  //   message: message.value,
  // });
  email.value = '';
  subject.value = '';
  message.value = '';
  success.value = true;
};
</script>

<style scoped>
.contact-input {
  @apply block w-full rounded-lg border border-clrSecondaryLight/15 bg-clrSecondaryLight/5 px-4 py-3 text-clrSecondary placeholder-clrSecondaryLight/40 outline-none transition-colors focus:border-clrAccent/60 focus:ring-0;
}
</style>
