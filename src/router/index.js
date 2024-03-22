// router file

import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import mtss_dashboard from "../views/mtss/mtss_dashboard.vue";
import mtss_ostc from "../views/mtss/mtss_ostc.vue"; // Import mtss_ostc component

const routes = [
    { path: "/", component: home },
    { path: "/login", component: login },
    { path: "/mtss/mtss_dashboard", component: mtss_dashboard },
    { path: "/mtss/mtss_ostc", component: mtss_ostc }, // Use mtss_ostc component here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;