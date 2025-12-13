import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import AOS from "aos";
import progressBar from "./includes/progressBar";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "nprogress/nprogress.css";
import "aos/dist/aos.css";

const app = createApp(App);

progressBar(router);
AOS.init();

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
