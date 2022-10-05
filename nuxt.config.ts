import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  experimental: { reactivityTransform: true },
});
