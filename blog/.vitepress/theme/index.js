import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h('div', { class: 'custom-layout' }, [
      h(AppNavbar),
      h(DefaultTheme.Layout),
      h(AppFooter),
    ]);
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components if needed
  },
};
