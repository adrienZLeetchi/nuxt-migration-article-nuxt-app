import routes from "./src/routes.ts";
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes,
});

export function createRouter() {
    return router;
}