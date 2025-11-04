import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { h, onMounted } from "vue";

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      // Force dark mode
      document.documentElement.classList.add('dark');
    });
  }
};
