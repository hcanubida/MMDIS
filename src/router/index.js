// Import Vue Router components
import { createRouter, createWebHistory } from "vue-router";

// MTSS Views
// import home from "../views/home.vue";
import login from "../views/Login.vue";
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
import applicationpage from "../views/mtes/new-application.vue";
import permitpage from "../views/mtes/permit.vue";
// import asViewer_firstpage from "../views/asViewer/mtes/dashboard.vue";
// import asViewer_applicationpage from "../views/asViewer/mtes/new-application.vue";
// import asViewer_permitpage from "../views/asViewer/mtes/permit.vue";

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

  // MTES Mandatory Requirements
  import MandatoryRequirements from "../views/mtes/mandatoryReq.vue";

// MTES Fax Sheets
import Factsheet from "../views/mtes/factsheet.vue";

// Components (modals, charts, etc.)
import demo from "../components/MTES/modals/uploaad.vue";
import pie from "../components/MTES/charts/Pie.vue";

// Mock function to check if user is authenticated
function isAuthenticated() {
  return !!localStorage.getItem('authToken'); // You can customize this auth method as needed
}

// Define route configurations
const routes = [
  { path: "/", component: login },
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
  { path: "/applicationpage", component: applicationpage, meta: { requiresAuth: true } },
  { path: "/permitpage", component: permitpage, meta: { requiresAuth: true } },
  // { path: "/mtes", component: asViewer_firstpage, meta: { requiresAuth: true } },
  // { path: "/applicationpage", component: asViewer_applicationpage, meta: { requiresAuth: true } },
  // { path: "/permitpage", component: asViewer_permitpage, meta: { requiresAuth: true } },

  // MTES Fax sheets
  { path: "/factsheet", component: Factsheet, meta: { requiresAuth: true } },


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
  // { path: "/ftta", component: asViewer_fttadashboard, meta: { requiresAuth: true } },
  // { path: "/ep", component: asViewer_epdashboard, meta: { requiresAuth: true } },
  // { path: "/mpsa", component: asViewer_mpsadashboard, meta: { requiresAuth: true } },
  // { path: "/isag", component: asViewer_isagdashboard, meta: { requiresAuth: true } },
  // { path: "/mb", component: asViewer_mbdashboard, meta: { requiresAuth: true } },
  // { path: "/mpl", component: asViewer_mpldashboard, meta: { requiresAuth: true } },
  // { path: "/mpp", component: asViewer_mppdashboard, meta: { requiresAuth: true } },
  // { path: "/otp", component: asViewer_otpdashboard, meta: { requiresAuth: true } },
  // { path: "/ssmc", component: asViewer_ssmcdashboard, meta: { requiresAuth: true } },
  // { path: "/amtrd", component: asViewer_amtrddashboard, meta: { requiresAuth: true } },
  // { path: "/moep", component: asViewer_moepddashboard, meta: { requiresAuth: true } },

  // Mandatory Requirements
  { path: "/MandatoryRequirements/:detail_id", component: MandatoryRequirements },
  // { path: "/MandatoryRequirements/:detail_id", component: asViewer_MandatoryRequirements },
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