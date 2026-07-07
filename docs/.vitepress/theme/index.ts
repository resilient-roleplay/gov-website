import DefaultTheme from "vitepress/theme";
// @ts-ignore: allow importing CSS as a side-effect in this VitePress theme file
import "./custom.css";
import { onMounted } from "vue";

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      // Force dark mode
      document.documentElement.classList.add('dark');
    });
  }
};
