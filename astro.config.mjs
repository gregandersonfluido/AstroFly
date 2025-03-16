import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gregandersonfluido.github.io",
  base: "/AstroFly",
  outDir: "./dist",
  // Set to true to build for GitHub Pages deployment
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
