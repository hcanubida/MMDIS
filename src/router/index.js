// router file

import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import dashboard from "../views/mtss/dashboard.vue";
import ostc from "../views/mtss/ostc.vue"; // Import mtss_ostc component
import inventory from "../views/mtss/inventory.vue";

const routes = [
    { path: "/", component: home },
    { path: "/login", component: login },
    { path: "/mtss/dashboard", component: dashboard },
    { path: "/mtss/ostc", component: ostc }, // Use mtss_ostc component here
    { path: "/mtss/inventory", component: inventory },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;