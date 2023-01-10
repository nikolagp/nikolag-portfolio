<template>
  <section
    class="py-20 overflow-hidden text-clrSecondary md:min-h-screen"
    id="contact"
  >
    <div class="mx-auto max-w-7xl">
      <h2
        class="text-3xl font-bold text-center text-clrSecondary md:text-left md:text-4xl"
      >
        Contact / <span class="underline">Hire me</span>
      </h2>
      <div class="flex flex-col w-full md:flex-row">
        <div
          class="mb-6 md:w-1/2"
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <form class="m-0" @submit.prevent="handleSubmit">
            <div class="mb-6 form-group">
              <input
                type="email"
                email="email"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-clrAccent focus:outline-none"
                id="exampleInput8"
                placeholder="Email"
                name="email"
                v-model="email"
              />
            </div>

            <div class="mb-6 form-group">
              <input
                type="text"
                subject="subject"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-clrAccent focus:outline-none"
                id="exampleInput7"
                placeholder="Subject"
                name="subject"
                v-model="subject"
              />
            </div>

            <div class="mb-6 form-group">
              <textarea
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-clrAccent focus:outline-none"
                id="exampleFormControlTextarea13"
                rows="5"
                placeholder="Message"
                name="message"
                v-model="message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="disabled:bg-transparent disabled:text-clrAccent disabled:border border-2 border-clrAccent w-full px-6 py-2.5 bg-clrAccent text-clrSecondary font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-clrAccentLight hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-clrAccent active:shadow-lg transition duration-150 ease-in-out"
              :disabled="!email || !message || !subject ? true : false"
            >
              Send
            </button>
          </form>
          <span class="text-clrAccent" v-if="success"
            >Thank you for your message!</span
          >
        </div>
        <div class="md:w-1/2">
          <h3 class="text-center">Or you can follow me here</h3>
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="true"
            class="flex justify-center gap-5 py-10 align-baseline md:gap-20"
          >
            <a :href="github" target="_blank"
              ><i
                class="text-4xl cursor-pointer text-clrSecondary fa-brands fa-github hover:text-clrAccent"
              ></i>
            </a>
            <a :href="linkedin" target="_blank"
              ><i
                class="text-4xl cursor-pointer text-clrSecondary fa-brands fa-linkedin hover:text-clrAccent"
              ></i
            ></a>
            <a :href="twitter.value" target="_blank"
              ><i
                class="text-4xl cursor-pointer text-clrSecondary fa-brands fa-twitter hover:text-clrAccent"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { db } from "@/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const twitter = "https://twitter.com/amagi_dev";
const github = "https://github.com/nikolagp";
const linkedin = "https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/";

const success = ref(true);

const email = ref("");
const subject = ref("");
const message = ref("");

const handleSubmit = () => {
  addDoc(collection(db, "contact-form"), {
    datePosted: new Date().toISOString().slice(0, 16).split("T").join(" "),
    email: email.value,
    subject: subject.value,
    message: message.value,
  });

  email.value = "";
  subject.value = "";
  message.value = "";
  // success.value = true;
};
</script>

<style>
/* form {
  max-width: 100%;

} */
</style>
