import { createRouter, createWebHistory } from "vue-router";
import firstpage from "../views/firstpage.vue";
import login from "../views/Login.vue"
import signup from "../views/Signup.vue"
import secondpage from "../views/secondpage.vue"
import dropdown from "../components/multiple-upload.vue"

//---Dashboards
import fttadashboard from "../views/dashboards/FTAA-dashboard.vue"
import epdashboard from "../views/dashboards/EP-dasboard.vue"

//---tables in dashboards
import FTTAtable from "../views/tables/FTTA-table.vue"
import EPtable from "../views/tables/EP-table.vue"

//--Mandatory Requirements
import ReqFTTA from "../views/requirements/FTTAmandatoryReq.vue"
import ReqEP from "../views/requirements/EPmandatoryReq.vue"



const routes = [
    { path: "/", component: login },
    { path: "/firstpage", component: firstpage },
    { path: "/signup", component: signup },
    { path: "/secondpage", component: secondpage },
    { path: "/table", component: FTTAtable },
    { path: "/dropdown", component: dropdown },

    //-----Dashboards Routes-----
    { path: "/ftta", component: fttadashboard },
    { path: "/ep", component: epdashboard },

    //-----Mandatory Requirements------
    { path: "/ReqFTTA", component: ReqFTTA },
    { path: "/ReqEP", component: ReqEP },

];

const router = createRouter({
    history: createWebHistory(), // Corrected to call createWebHistory() function
    routes,
});

export default router;