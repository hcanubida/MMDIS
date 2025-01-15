<template>
  <div>
    <!-- Header and User Button Section -->
    <div class="flex">
        <Header />
        <UserBtn />
    </div>

    <div class="flex justify-center items-center h-1/4">
      <div class="new-app-content">
        <h1 style="font-size: 50px; margin-bottom: 30px; margin-top: -150px;">New Applications</h1>
        <div style="display: flex; justify-content: center;">

          <div class="button-container1">
            <button @click="navigateToFTTAdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Financial or Technical Assistance Agreement
            </button>
            <button @click="navigateToMPSAdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Mineral Production Sharing Agreement
            </button>
            <button @click="navigateToEPdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Exploration Permit
            </button>
            <button @click="navigateToMPPdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Mineral Processing Permit
            </button>
            <button @click="navigateToISAGdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Industrial Sand and Gravel Permit
            </button>
            <button @click="navigateToOTPdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Ore Transport Permit
            </button>
          </div>

          <div class="button-container2">
            <button @click="navigateToMBdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Declaration of Minahang Bayan
            </button>
            <button @click="navigateToSSMCdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Small-Scale Mining Contract
            </button>
            <button @click="navigateToMPLdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Mineral Processor’s License
            </button>
            <button @click="navigateToAMTRDdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Accreditation as Mineral Trader, Retailer, and Dealer
            </button>
            <button @click="navigateToMOEPdashboard()" class="button1 text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 p-5 m-2 h-auto text-base rounded cursor-pointer font-normal mb-5">
              Mineral Ore Export Permit
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import Header from '../../components/header.vue'
import UserBtn from '../../components/user-dbbtn.vue'
</script>

<script>
import router from '../../router/index';

export default {

  methods: {
    navigateToFTTAdashboard() {
      // Use router.push to navigate to '/newappcontent'
      router.push('/ftta');
    },
    navigateToEPdashboard() {
      // Use router.push to navigate to '/newappcontent'
      router.push('/ep');
    },
    navigateToMPSAdashboard() {
      router.push('/mpsa')
    },
    navigateToISAGdashboard() {
      router.push('/isag')
    },
    navigateToMBdashboard() {
      router.push('/mb')
    },
    navigateToMPLdashboard() {
      router.push('/mpl')
    },
    navigateToMPPdashboard() {
      router.push('/mpp')
    },
    navigateToOTPdashboard() {
      router.push('/otp')
    },
    navigateToSSMCdashboard() {
      router.push('/ssmc')
    },
    navigateToAMTRDdashboard() {
      router.push('/amtrd')
    },
    navigateToMOEPdashboard() {
      router.push('/moep')
    },
  }
};
</script>

<style scoped>
.panel {
  display: flex;
  justify-content: center;
  align-items: center;

}

.new-app-content {
  text-align: center;
  margin-top: 200px;
}

.new-app-content h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.button-container1 {
  display: flex;
  flex-direction: column;
  /* Align buttons vertically */
  align-items: center;
  /* Align buttons horizontally */
  margin-right: 50px;
}

.button-container2 {
  display: flex;
  flex-direction: column;
  /* Align buttons vertically */
  align-items: center;
  /* Align buttons horizontally */
}

.button1 {
  width: 415px;
  border: none;
  transition: background-color 0.3s;
}
</style>