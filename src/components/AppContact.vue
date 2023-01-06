<template>
  <section class="px-6 text-clrSecondary sm:py-32 lg:py-30" id="contact">
    <div class="py-6 mx-auto my-24 max-w-7xl">
      <h2 class="mb-12 text-4xl font-bold md:px-8">
        Contact / <span class="underline">Hire</span>
      </h2>
      <div class="flex flex-col mx-auto sm:px-3 md:flex-row">
        <div
          class="mb-6 md:w-1/2"
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <form name="contact" method="POST" data-netlify="true">
            <div class="mb-6 form-group">
              <input
                type="email"
                email="email"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email"
              />
            </div>

            <div class="mb-6 form-group">
              <input
                type="text"
                subject="subject"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Subject"
              />
            </div>

            <div class="mb-6 form-group">
              <textarea
                name="message"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full px-6 py-2.5 bg-clrAccent text-clrSecondary font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-clrAccentLight hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-clrAccent active:shadow-lg transition duration-150 ease-in-out"
            >
              Send
            </button>
          </form>
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
            <a :href="twitter" target="_blank"
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
const twitter = "https://twitter.com/amagi_dev";
const github = "https://github.com/nikolagp";
const linkedin = "https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/";
</script>

<style></style>
