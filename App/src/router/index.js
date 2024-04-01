import { createRouter, createWebHistory } from "vue-router";
import firstpage from "../components/firstpage.vue";
import login from "../components/Login.vue"
import signup from "../components/Signup.vue"
import secondpage from "../components/secondpage.vue"
import fttadashboard from "../components/dashboards/FTAA-dashboard.vue"
import FTTAtable from "../components/tables/FTTA-table.vue"
import ReqFTTA from "../components/requirements/FTTAmandatoryReq.vue"
import ReqEP from "../components/requirements/EPmandatoryReq.vue"
import epdashboard from "../components/dashboards/EP-dasboard.vue"

const routes = [
    { path: "/", component: login },
    { path: "/firstpage", component: firstpage },
    { path: "/signup", component: signup },
    { path: "/secondpage", component: secondpage },
    { path: "/table", component: FTTAtable },
    { path: "/fttadashboard", component: fttadashboard },
    { path: "/ReqFTTA", component: ReqFTTA },
    { path: "/EPdashboard", component: epdashboard },
    { path: "/ReqEP", component: ReqEP },

];

const router = createRouter({
    history: createWebHistory(), // Corrected to call createWebHistory() function
    routes,
});

export default router;