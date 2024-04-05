// router file MTSS

import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
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



//router file MTES

import firstpage from "../views/mtes/firstpage.vue";
import login from "../views/mtes/Login.vue"
import signup from "../views/mtes/Signup.vue"
import secondpage from "../views/mtes/secondpage.vue"

//---Dashboards
import fttadashboard from "../views/mtes/dashboards/FTAA-dashboard.vue"
import epdashboard from "../views/mtes/dashboards/EP-dasboard.vue"
import mpsadashboard from "../views/mtes/dashboards/MPSA-dashboard.vue"

//---tables in dashboards
import FTTAtable from "../views/mtes/tables/FTTA-table.vue"
import EPtable from "../views/mtes/tables/EP-table.vue"

//--Mandatory Requirements
import ReqFTTA from "../views/mtes/requirements/FTTAmandatoryReq.vue"
import ReqEP from "../views/mtes/requirements/EPmandatoryReq.vue"
import ReqMPSA from "../views/mtes/requirements/MPSAmandatoryReq.vue"



const routes = [

    { path: "/", component: login },

    //mtss routes
    { path: "/home", component: home },
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

    //mtes routes
    { path: "/firstpage", component: firstpage },
    { path: "/signup", component: signup },
    { path: "/secondpage", component: secondpage },
    { path: "/table", component: FTTAtable },
    //-----Dashboards Routes-----
    { path: "/ftta", component: fttadashboard },
    { path: "/ep", component: epdashboard },
    { path: "/mpsa", component: mpsadashboard},
    //-----Mandatory Requirements------
    { path: "/ReqFTTA", component: ReqFTTA },
    { path: "/ReqEP", component: ReqEP },
    { path: "/ReqMPSA", component: ReqMPSA },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;