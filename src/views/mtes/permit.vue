<template>
  <div>
    <div class="flex">
      <taas />
      <UserBtn/>
    </div>
    <div class="flex justify-center items-center h-1/4">
      <div class="new-app-content">
        <h1 style="font-size: 50px; margin-bottom: 30px; margin-top: -150px;">Permits</h1>
        <div style="display: flex; justify-content: center;">
        <div class="flex flex-col items-center mr-12">
          <button @click="navigateToFTTAdashboard()" class="button1">
            Financial or Technical Assistance Agreement
          </button>
          <button @click="navigateToMPSAdashboard()" class="button1">
            Mineral Production Sharing Agreement
          </button>
          <button @click="navigateToEPdashboard()" class="button1">
            Exploration Permit
          </button>
        </div>
        <div class="flex flex-col items-center mr-12">
          <button @click="navigateToMPPdashboard()" class="button1">
            Mineral Processing Permit
          </button>
          <button @click="navigateToISAGdashboard()" class="button1">
            Industrial Sand and Gravel Permit
          </button>
          <button @click="navigateToOTPdashboard()" class="button1">
            Ore Transport Permit
          </button>
        </div>
        <div class="flex flex-col items-center mr-12">
          <button @click="navigateToMBdashboard()" class="button1">
            Declaration of Minahang Bayan
          </button>
          <button @click="navigateToSSMCdashboard()" class="button1">
            Small-Scale Mining Contract
          </button>
          <button @click="navigateToMPLdashboard()" class="button1">
            Mineral Processor’s License
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  
</template>

<script setup>
import taas from '../../components/header.vue'
import UserBtn from '../../components/user-dbbtn.vue'
</script>

<script>
import router from '../../../src/router/index';

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
.new-app-content {
  text-align: center;
  margin-top: 200px;
}

.new-app-content h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.button1 {
  padding: 20px;
  margin: 0.5rem;
  width: 415px;
  /* Fixed width for all buttons */
  height: auto;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #e0b983;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 400;
  margin-bottom: 20px;
}
.button1:hover {
  background-color: #ffe0b4;
  color: rgb(90, 89, 89);
}
</style>