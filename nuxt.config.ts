// nuxt.config.ts

import { defineNuxtConfig } from "@nuxt/bridge";

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
});
