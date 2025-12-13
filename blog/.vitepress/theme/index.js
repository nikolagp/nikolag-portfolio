import { h, defineComponent, onMounted, watch, nextTick } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';
import './custom.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

const CustomLayout = defineComponent({
  setup() {
    const route = useRoute();

    onMounted(() => {
      // Initialize AOS
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 0,
      });
    });

    // Refresh AOS on route change
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          AOS.refresh();
        });
      }
    );

    return () => h('div', { class: 'custom-layout' }, [
      h(AppNavbar),
      h(DefaultTheme.Layout),
      h(AppFooter),
    ]);
  },
});

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    // Register global components if needed
  },
};
