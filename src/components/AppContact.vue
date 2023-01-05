<template>
  <section class="text-clrSecondary sm:py-32 lg:py-30" id="contact">
    <div class="py-6 mx-auto my-24 max-w-7xl">
      <section class="mb-10 text-center text-clrSecondary md:text-left">
        <h2 class="px-8 mb-12 text-4xl font-bold">Contact</h2>
        <div class="flex flex-col mx-auto sm:px-3 md:flex-row">
          <div
            class="md:w-1/2"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <form>
              <div class="mb-6 form-group">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email"
                />
              </div>

              <div class="mb-6 form-group">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Subject"
                />
              </div>

              <div class="mb-6 form-group">
                <textarea
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
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            class="flex justify-center gap-5 my-10 align-baseline md:gap-20 md:w-1/2"
          >
            <a :href="github" target="_blank"
              ><i
                class="text-3xl cursor-pointer text-clrSecondary fa-brands fa-github hover:text-clrAccent"
              ></i>
            </a>
            <a :href="linkedin" target="_blank"
              ><i
                class="text-3xl cursor-pointer text-clrSecondary fa-brands fa-linkedin hover:text-clrAccent"
              ></i
            ></a>
            <a :href="twitter" target="_blank"
              ><i
                class="text-3xl cursor-pointer text-clrSecondary fa-brands fa-twitter hover:text-clrAccent"
              ></i
            ></a>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
const twitter = "https://twitter.com/amagi_dev";
const github = "https://github.com/nikolagp";
const linkedin = "https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/";
</script>

<style></style>
