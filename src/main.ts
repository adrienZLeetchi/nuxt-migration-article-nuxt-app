import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const messages = {
  en: {
    headerHomeLink: "Home",
    headerCharachtersLink: "Characters",
    FilterLabel: "Filter Neame",
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en", // set fallback locale
  messages,
});

const router = createRouter({ history: createWebHistory(), routes });

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
