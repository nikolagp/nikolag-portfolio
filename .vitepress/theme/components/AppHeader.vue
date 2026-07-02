<template>
  <section
    class="relative flex items-center overflow-hidden px-6 pt-28 pb-16 md:min-h-screen md:py-28"
  >
    <!-- Ambient glows -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-clrAccent/10 blur-3xl"
      ></div>
      <div
        class="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-clrAccent/5 blur-3xl"
      ></div>
    </div>

    <div class="relative mx-auto w-full max-w-7xl">
      <div
        class="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-20"
      >
        <!-- Left: text content -->
        <div class="flex-1 text-center md:text-left">
          <!-- <p
            class="mb-4 font-mono text-sm uppercase tracking-widest text-clrAccent"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Available for work
          </p> -->

          <h1
            class="mb-4 text-4xl font-bold leading-tight text-clrSecondary md:mb-6 md:text-6xl lg:text-7xl"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            Hi, I'm <span class="text-clrAccent">Nikola</span>.<br />
            FullStack Developer.
          </h1>

          <p
            class="mb-6 max-w-md text-base leading-relaxed text-clrSecondaryLight md:mb-8 md:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            Self-taught developer building things for the web with Vue, React,
            and Node.js — and whatever the problem actually needs.
          </p>

          <div
            class="mb-6 flex flex-wrap justify-center gap-4 md:mb-10 md:justify-start"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <a
              href="/ngp-cv.pdf"
              target="_blank"
              class="inline-flex items-center rounded-lg bg-clrAccent px-6 py-3 font-medium text-clrSecondary transition-colors duration-200 hover:bg-clrAccentLight"
            >
              Download CV
            </a>
            <a
              href="/#projects"
              class="inline-flex items-center rounded-lg border border-clrSecondaryLight/30 px-6 py-3 text-clrSecondary transition-colors duration-200 hover:border-clrAccent hover:text-clrAccent"
            >
              View Projects
            </a>
          </div>

          <div
            class="flex justify-center gap-6 md:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <a
              href="https://github.com/nikolagp"
              target="_blank"
              aria-label="GitHub"
            >
              <i
                class="fa-brands fa-github text-2xl text-clrSecondary transition-colors hover:text-clrAccent"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nikola-g-petrovski-b02584b1/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i
                class="fa-brands fa-linkedin text-2xl text-clrSecondary transition-colors hover:text-clrAccent"
              ></i>
            </a>
            <a
              href="https://twitter.com/amagi_dev"
              target="_blank"
              aria-label="Twitter/X"
            >
              <i
                class="fa-brands fa-x-twitter text-2xl text-clrSecondary transition-colors hover:text-clrAccent"
              ></i>
            </a>
          </div>
        </div>

        <!-- Right: profile photo -->
        <div
          class="relative flex-shrink-0"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div
            class="absolute -inset-4 rounded-3xl bg-clrAccent/10 blur-2xl"
          ></div>
          <img
            src="/nikola_profile.jpg"
            alt="Nikola G."
            class="relative h-52 w-52 rounded-2xl border border-clrSecondaryLight/10 object-cover md:h-80 md:w-80"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// social links are inlined here for layout flexibility
</script>
