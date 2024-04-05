<template>
  <div class="panel">
    <div class="flex justify-center items-center h-screen">
      <taas />
    </div>
    <div class="new-app-content">
      <h1>New Applications</h1>
      <div class="button-container">
        <button @click="navigateToFTTAdashboard()" class="button1">
          Financial or Technical Assistance Agreement
        </button>
        <button @click="navigateToMPSAdashboard()" class="button1">
          Mineral Production Sharing Agreement
        </button>
        <button @click="navigateToEPdashboard()" class="button1">
          Exploration Permit
        </button>
        <button class="button1">
          Mineral Processing Permit
        </button>
        <button class="button1">
          Industrial Sand and Gravel Permit
        </button>
        <button class="button1">
          Ore Transport Permit
        </button>
        <button class="button1">
          Declaration of Minahang Bayan
        </button>
        <button class="button1">
          Small-Scale Mining Contract
        </button>
        <button class="button1">
          Mineral Processor’s License
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import taas from '../../../src/components/MTES/header.vue'

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
    navigateToMPSAdashboard(){
      router.push('/mpsa')
    }
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
  margin-top: 100px;
}

.new-app-content h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.button-container {
  display: flex;
  flex-direction: column;
  /* Align buttons vertically */
  align-items: center;
  /* Align buttons horizontally */
}

.button1 {
  padding: 20px;
  margin: 0.5rem;
  width: 300px;
  /* Fixed width for all buttons */
  height: auto;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #eacda3;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 400;
}

</style>