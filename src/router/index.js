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
import applicationpage from "../views/mtes/secondpage.vue"
import permitpage from "../views/mtes/permit.vue"

//---Dashboards
import fttadashboard from "../views/mtes/dashboards/FTAA-dashboard.vue"
import epdashboard from "../views/mtes/dashboards/EP-dasboard.vue"
import mpsadashboard from "../views/mtes/dashboards/MPSA-dashboard.vue"
import isagdashboard from "../views/mtes/dashboards/ISAG-dashboard.vue"
import mbdashboard from "../views/mtes/dashboards/MB-dashboard.vue"
import mpldashboard from "../views/mtes/dashboards/MPL-dashboard.vue"
import mppdashboard from "../views/mtes/dashboards/MPP-dashboard.vue"
import otpdashboard from "../views/mtes/dashboards/OTP-dashboard.vue"
import ssmcdashboard from "../views/mtes/dashboards/SSMC-dashboard.vue"
import amtrddashboard from "../views/mtes/dashboards/AMTRD-dashboard.vue"
import moepddashboard from "../views/mtes/dashboards/MOEP-dashboard.vue"

//---tables in dashboards
import FTTAtable from "../views/mtes/tables/FTTA-table.vue"
import EPtable from "../views/mtes/tables/EP-table.vue"

//--Mandatory Requirements
import ReqFTTA from "../views/mtes/requirements/FTTAmandatoryReq.vue"
import ReqEP from "../views/mtes/requirements/EPmandatoryReq.vue"
import ReqMPSA from "../views/mtes/requirements/MPSAmandatoryReq.vue"
import ReqISAG from "../views/mtes/requirements/ISAGmandatory.vue"
import ReqMPP from "../views/mtes/requirements/MPPmandatory.vue"
import ReqMB from "../views/mtes/requirements/MBmandatory.vue"
import ReqAMTRD from "../views/mtes/requirements/AMTRDmandatoryReq.vue";
import ReqOTP from "../views/mtes/requirements/OTPmandatoryReq.vue";
import ReqMPL from "../views/mtes/requirements/MPLmandatoryReq.vue";
import ReqSSMC from "../views/mtes/requirements/SSMCmandatoryReq.vue";
import ReqMOEP from "@/views/mtes/requirements/MOEPmandatoryReq.vue";

//Fax Sheet
import FaxFTTA from "../views/mtes/faxsheet/ffta-factsheet.vue";
import FaxEP from "../views/mtes/faxsheet/ep-factsheet.vue";
import FaxISAG from "../views/mtes/faxsheet/isag-factsheet.vue";
import FaxMB from "../views/mtes/faxsheet/mb-factsheet.vue";
import FaxMPP from "../views/mtes/faxsheet/mpp-factsheet.vue";
import FaxMPSA from "../views/mtes/faxsheet/mpsa-factsheet.vue";
import FaxOTP from "../views/mtes/faxsheet/otp-factsheet.vue";
import FaxSSMC from "../views/mtes/faxsheet/ssmc-factsheet.vue";
import FaxMPL from "../views/mtes/faxsheet/mpl-facsheet.vue"


import demo from "../components/MTES/modals/uploaad.vue";

const routes = [

    { path: "/", component: home },
    { path: "/demo_upload", component: demo },

    //mtss routes
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

    //mtes routes
    { path: "/firstpage", component: firstpage },
    { path: "/signup", component: signup },
    { path: "/applicationpage", component: applicationpage },
    { path: "/permitpage", component: permitpage },
    { path: "/table", component: FTTAtable },

    //Fax sheets
    { path: "/FTTAFax", component: FaxFTTA },
    { path: "/EpFax", component: FaxEP },
    { path: "/ISAGFax", component: FaxISAG },
    { path: "/MBFax", component: FaxMB },
    { path: "/MPPFax", component: FaxMPP },
    { path: "/MPSAFax", component: FaxMPSA },
    { path: "/OTPFax", component: FaxOTP },
    { path: "/SSMCFax", component: FaxSSMC },
    { path: "/MPLFax", component: FaxMPL },

    //-----Dashboards Routes-----
    { path: "/ftta", component: fttadashboard },
    { path: "/ep", component: epdashboard },
    { path: "/mpsa", component: mpsadashboard},
    { path: "/isag", component: isagdashboard},
    { path: "/mb", component: mbdashboard},
    { path: "/mpl", component: mpldashboard},
    { path: "/mpp", component: mppdashboard},
    { path: "/otp", component: otpdashboard},
    { path: "/ssmc", component: ssmcdashboard},
    { path: "/amtrd", component: amtrddashboard},
    { path: "/moep", component: moepddashboard},

    //-----Mandatory Requirements------
    { path: "/ReqFTTA/:detail_id", component: ReqFTTA },
    { path: "/ReqEP/:detail_id1", component: ReqEP },
    { path: "/ReqMPSA/:detail_id2", component: ReqMPSA },
    { path: "/ReqISAG", component: ReqISAG },
    { path: "/ReqMPP/:detail_id5", component: ReqMPP },
    { path: "/ReqMB", component: ReqMB },
    { path: "/ReqAMTRD", component: ReqAMTRD },
    { path: "/ReqOTP", component: ReqOTP },
    { path: "/ReqMPL", component: ReqMPL },
    { path: "/ReqSSMC", component: ReqSSMC },
    { path: "/ReqMOEP", component: ReqMOEP },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;