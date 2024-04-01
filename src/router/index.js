// router file

import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import login from "../views/login.vue";
import dashboard from "../views/mtss/dashboard.vue";
import ostc from "../views/mtss/ostc.vue"; // Import mtss_ostc component
import inventory from "../views/mtss/inventory.vue";
import wpm from "../views/mtss/wpm.vue";
import mbm from "../views/mtss/mbm.vue";
import investigation from "../views/mtss/investigation.vue";
import antiillegal from "../views/mtss/anti-illegal.vue";
import dmpf from "../views/mtss/dmpf.vue";
import PCMRBM from "../views/mtss/PCMRBM.vue";
import mpsa from "../views/mtss/mpsa.vue";
import isag from "../views/mtss/isag.vue";
import ep from "../views/mtss/ep.vue";
import mpp from "../views/mtss/mpp.vue";


const routes = [
    { path: "/", component: home },
    { path: "/login", component: login },
    { path: "/mtss/dashboard", component: dashboard },
    { path: "/mtss/ostc", component: ostc }, // Use mtss_ostc component here
    { path: "/mtss/inventory", component: inventory },
    { path: "/mtss/wpm", component: wpm },
    { path: "/mtss/mbm", component: mbm },
    { path: "/mtss/investigation", component: investigation },
    { path: "/mtss/anti-illegal", component: antiillegal },
    { path: "/mtss/dmpf", component: dmpf },
    { path: "/mtss/PCMRBM", component: PCMRBM },
    { path: "/mtss/mpsa", component: mpsa },
    { path: "/mtss/isag", component: isag },
    { path: "/mtss/ep", component: ep },
    { path: "/mtss/mpp", component: mpp },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;