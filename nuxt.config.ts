// nuxt.config.ts
import { defineNuxtConfig } from "@nuxt/bridge";

const messages = {
  en: {
    headerHomeLink: "Home",
    headerCharachtersLink: "Characters",
    FilterLabel: "Filter Name",
  },
};

export default defineNuxtConfig({
  buildModules: [
    [
      "@nuxtjs/router",
      {
        path: "./",
        fileName: "router.ts",
      },
    ],
  ],

  bridge: {
    vite: false,
    capi: true,
  },

  modules: ["@nuxtjs/i18n"],

  css: ["bootstrap/dist/css/bootstrap.min.css"],

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: messages,
    },
    detectBrowserLanguage: false,
  },
});
