// Import Vue Router components
import { createRouter, createWebHistory } from "vue-router";

// MTSS Views
// import home from "../views/home.vue";
import home from "../views/mtes/Login.vue";
import dashboard from "../views/mtss/dashboard.vue";
import ostc from "../views/mtss/ostc.vue";
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

// MLSS Views
import mlssdashboard from "../views/mlss/mlssdashboard.vue";
import CSAG from "../views/mlss/CSAG.vue";
import ISAG from "../views/mlss/ISAG.vue";
import MQUARRY from "../views/mlss/MQUARRY.vue";
import MiningTenementMaps from "../views/mlss/dbMTM.vue";
import MineralOreExportPermit from "../views/mlss/dbMOEPV.vue";
import PDFcontent from "../components/MLSS/pdf-content.vue";

// MTES Views
import firstpage from "../views/mtes/dashboard.vue";  
import login from "../views/mtes/Login.vue";
import signup from "../views/mtes/Signup.vue";
import applicationpage from "../views/mtes/new-application.vue";
import permitpage from "../views/mtes/permit.vue";

// MTES Dashboards
import fttadashboard from "../views/mtes/dashboards/FTAA-dashboard.vue";
import epdashboard from "../views/mtes/dashboards/EP-dashboard.vue";
import mpsadashboard from "../views/mtes/dashboards/MPSA-dashboard.vue";
import isagdashboard from "../views/mtes/dashboards/ISAG-dashboard.vue";
import mbdashboard from "../views/mtes/dashboards/MB-dashboard.vue";
import mpldashboard from "../views/mtes/dashboards/MPL-dashboard.vue";
import mppdashboard from "../views/mtes/dashboards/MPP-dashboard.vue";
import otpdashboard from "../views/mtes/dashboards/OTP-dashboard.vue";
import ssmcdashboard from "../views/mtes/dashboards/SSMC-dashboard.vue";
import amtrddashboard from "../views/mtes/dashboards/AMTRD-dashboard.vue";
import moepddashboard from "../views/mtes/dashboards/MOEP-dashboard.vue";

// MTES Tables
import FTTAtable from "../views/mtes/tables/FTTA-table.vue";
import  table from "../views/mtes/tables/EP-table.vue";

// MTES Mandatory Requirements
import MandatoryRequirements from "../views/mtes/requirements/mandatoryReq.vue";

// MTES Fax Sheets
import FaxFTTA from "../views/mtes/faxsheet/ffta-factsheet.vue";
import FaxEP from "../views/mtes/faxsheet/ep-factsheet.vue";
import FaxISAG from "../views/mtes/faxsheet/isag-factsheet.vue";
import FaxMB from "../views/mtes/faxsheet/mb-factsheet.vue";
import FaxMPP from "../views/mtes/faxsheet/mpp-factsheet.vue";
import FaxMPSA from "../views/mtes/faxsheet/mpsa-factsheet.vue";
import FaxOTP from "../views/mtes/faxsheet/otp-factsheet.vue";
import FaxSSMC from "../views/mtes/faxsheet/ssmc-factsheet.vue";
import FaxMPL from "../views/mtes/faxsheet/mpl-facsheet.vue";
import FaxMOEP from "../views/mtes/faxsheet/moep-factsheet.vue";
import FaxAMTRD from "../views/mtes/faxsheet/amtrd-factsheet.vue";
import xpsample from "../views/mtes/faxsheet/xpfaxtsheet.vue";

// Components (modals, charts, etc.)
import demo from "../components/MTES/modals/uploaad.vue";
import pie from "../components/MTES/charts/Pie.vue";

// Mock function to check if user is authenticated
function isAuthenticated() {
  return !!localStorage.getItem('authToken'); // You can customize this auth method as needed
}

// Define route configurations
const routes = [
  { path: "/", component: home },
  { path: "/demo_upload", component: demo },
  { path: "/pie", component: pie },

  //Login Page
  { path: "/login", component: login },
  
  // MTSS routes
  { path: "/mtss/dashboard", component: dashboard, meta: { requiresAuth: true }},
  { path: "/mtss/ostc", component: ostc, meta: { requiresAuth: true } },
  { path: "/mtss/inventory", component: inventory, meta: { requiresAuth: true } },
  { path: "/mtss/wpm", component: wpm, meta: { requiresAuth: true } },
  { path: "/mtss/mbm", component: mbm, meta: { requiresAuth: true } },
  { path: "/mtss/investigation", component: investigation, meta: { requiresAuth: true } },
  { path: "/mtss/anti-illegal", component: antiillegal, meta: { requiresAuth: true } },
  { path: "/mtss/dmpf", component: dmpf, meta: { requiresAuth: true } },
  { path: "/mtss/PCMRBM", component: PCMRBM, meta: { requiresAuth: true } },
  { path: "/mtss/mpsa", component: mpsa, meta: { requiresAuth: true } },
  { path: "/mtss/isag", component: isag, meta: { requiresAuth: true } },
  { path: "/mtss/ep", component: ep, meta: { requiresAuth: true } },
  { path: "/mtss/mpp", component: mpp, meta: { requiresAuth: true } },

  // MLSS routes
  { path: "/mlss/mlssdashboard", component: mlssdashboard, meta: { requiresAuth: true } },
  { path: "/mlss/CSAG", component: CSAG, meta: { requiresAuth: true } },
  { path: "/mlss/ISAG", component: ISAG, meta: { requiresAuth: true } },
  { path: "/mlss/MQUARRY", component: MQUARRY, meta: { requiresAuth: true } },
  { path: "/mlss/MTM", component: MiningTenementMaps, meta: { requiresAuth: true } },
  { path: "/mlss/MOEPV", component: MineralOreExportPermit, meta: { requiresAuth: true } },
  { path: "/mlss/pdf-content", component: PDFcontent, meta: { requiresAuth: true } },

  // MTES routes
  { path: "/firstpage", component: firstpage, meta: { requiresAuth: true } },
  { path: "/signup", component: signup },
  { path: "/applicationpage", component: applicationpage, meta: { requiresAuth: true } },
  { path: "/permitpage", component: permitpage, meta: { requiresAuth: true } },
  { path: "/table", component: FTTAtable },

  // MTES Fax sheets
  { path: "/FTTAFax", component: FaxFTTA, meta: { requiresAuth: true } },
  { path: "/EpFax", component: FaxEP, meta: { requiresAuth: true } },
  { path: "/ISAGFax", component: FaxISAG, meta: { requiresAuth: true } },
  { path: "/MBFax", component: FaxMB, meta: { requiresAuth: true } },
  { path: "/MPPFax", component: FaxMPP, meta: { requiresAuth: true } },
  { path: "/MPSAFax", component: FaxMPSA, meta: { requiresAuth: true } },
  { path: "/OTPFax", component: FaxOTP, meta: { requiresAuth: true } },
  { path: "/SSMCFax", component: FaxSSMC, meta: { requiresAuth: true } },
  { path: "/MPLFax", component: FaxMPL, meta: { requiresAuth: true } },
  { path: "/MOEPFax", component: FaxMOEP, meta: { requiresAuth: true } },
  { path: "/AMTRDFax", component: FaxAMTRD, meta: { requiresAuth: true } },

  // Dashboards
  { path: "/ftta", component: fttadashboard, meta: { requiresAuth: true } },
  { path: "/ep", component: epdashboard, meta: { requiresAuth: true } },
  { path: "/mpsa", component: mpsadashboard, meta: { requiresAuth: true } },
  { path: "/isag", component: isagdashboard, meta: { requiresAuth: true } },
  { path: "/mb", component: mbdashboard, meta: { requiresAuth: true } },
  { path: "/mpl", component: mpldashboard, meta: { requiresAuth: true } },
  { path: "/mpp", component: mppdashboard, meta: { requiresAuth: true } },
  { path: "/otp", component: otpdashboard, meta: { requiresAuth: true } },
  { path: "/ssmc", component: ssmcdashboard, meta: { requiresAuth: true } },
  { path: "/amtrd", component: amtrddashboard, meta: { requiresAuth: true } },
  { path: "/moep", component: moepddashboard, meta: { requiresAuth: true } },
  { path: "/xpsample", component: xpsample, meta: { requiresAuth: true } },

  // Mandatory Requirements
  { path: "/MandatoryRequirements/:detail_id", component: MandatoryRequirements },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    console.log("Navigating to:", to.path);
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated()) {
        console.log("Not authenticated. Redirecting to login.");
        next('/login'); // Redirect to login if not authenticated
      } else {
        console.log("Authenticated. Proceeding to:", to.path);
        next(); // Proceed to the route
      }
    } else {
      next(); // Proceed to the route
    }
  });

export default router;
