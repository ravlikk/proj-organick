import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",
  build: {
    target: ["es2022", "chrome89", "firefox89", "safari15"],
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nestedTwo: resolve(__dirname, "src/cart.html"),
        nestedFour: resolve(__dirname, "src/404.html"),
        nestedFive: resolve(__dirname, "src/about.html"),
        nestedSix: resolve(__dirname, "src/shop.html"),
        nestedSeven: resolve(__dirname, "src/blog.html"),
        nestedEight: resolve(__dirname, "src/service.html"),
        nestedNine: resolve(__dirname, "src/service-single.html"),
        nestedTen: resolve(__dirname, "src/projects.html"),
      },
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src/**/*.html"])],
});
