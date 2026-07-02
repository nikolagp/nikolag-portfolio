# Project Name: Nikola G. Portfolio

## Tech Stack
* Framework: VitePress 1.x (static site generator on top of Vite + Vue 3)
* Styling: TailwindCSS 3 with custom color tokens (`clrPrimary`, `clrSecondary`, `clrAccent`, `clrAccentLight`)
* Language: JavaScript (Vue SFCs + `.js` config files; `config.ts` is the one TS file)
* Animations: AOS (Animate on Scroll) — initialized and refreshed in `.vitepress/theme/index.js`
* Icons/UI: Heroicons (`@heroicons/vue`) and Headless UI (`@headlessui/vue`)
* CRITICAL: Do NOT introduce external component libraries (e.g. Vuetify, PrimeVue). Write native Tailwind for all styling.

## Architecture Guidelines
* VitePress config lives in `.vitepress/config.ts`
* Custom theme entry point is `.vitepress/theme/index.js` — this is where `CustomLayout` wraps every page with `AppNavbar` + `DefaultTheme.Layout` + `AppFooter`
* All Vue components live in `.vitepress/theme/components/`
* Global styles go in `.vitepress/theme/custom.css`; base/reset styles in `.vitepress/theme/assets/`
* Homepage content is composed in `/index.md` using `layout: page` and inline component imports
* Blog posts live in `/posts/*.md`; the posts index page is `/posts/index.md`
* Static assets (images, icons, PDFs) go in `/public/`
* Keep components modular. Never create files larger than 300 lines of code.

## Coding Conventions
* Use Vue 3 Composition API (`<script setup>` syntax preferred)
* Use `async/await` instead of `.then()` promise chains
* Component filenames use PascalCase and the `App` prefix for top-level sections (e.g. `AppHeader.vue`, `AppProjects.vue`)
* CSS variables/Tailwind color tokens are defined in `tailwind.config.js` — use those tokens instead of raw hex/rgb values
* AOS data attributes (`data-aos`, `data-aos-delay`) are the preferred way to add scroll animations

## Commands for Claude
* Dev server: `npm run dev`
* Build command: `npm run build`
* Preview build: `npm run preview`
* Linting command: `npm run lint`
* No test framework is configured — do not assume `npm run test` exists
