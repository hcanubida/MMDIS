<template>

    <div class="">
      <!-- Header -->
      <div>
        <qwe />
        <userbutton />
      </div>
      <!-- Text -->
      <div class="textz">
        <p class="text1">Ore Transportation Permit</p>
        <h2 class="text2">
          SUMMARY
        </h2>
      </div>

      <!-- //change the variable lang kay gi copy paste pani -->
      <div v-if="addDetail6"> 
        <appdet></appdet>
      </div>
  
      <div v-if="viewDetail6">
        <viewdetail2 :detail_id6="detail_id6" />
      </div>
  
      <!-- Charts for summary  -->
      <div class="chart1">
        <Pie class="pie1" :application="application"/>
        <BarChart class="bar1" :application="application" />
      </div>
  
      <div class="table">
        <Tableview />
      </div>
    </div>
  </template>
  
  <script setup>
  import appdet from "../../../components/MTES/modals/add/OTP-add.vue"
  import viewdetail2 from '../../../components/MTES/modals/view/OTP-details.vue'
  import qwe from '../../../components/header.vue'
  import Pie from '../../../components/MTES/charts/Pie.vue'
  import BarChart from '../../../components/MTES/charts/bar.vue'
  import Tableview from '../../mtes/tables/OTP-table.vue'
  import userbutton from '../../../components/user-dbbtn.vue'
  import axios from 'axios';
  
  import { ref, onMounted } from 'vue'
  
  const user = ref();
  onMounted(async () => {
    const data = await axios.get('http://127.0.0.1:8000/get_accounts/')
    user.value = data;
  })
  
  
  </script>
  <script>
  import { ref } from 'vue';
  
  const detail_id6 = ref('')
  const addDetail6 = ref(false)
  const detailToggle6 = () => {
    addDetail6.value = true
  };
  const application = 'otp'
  
  const viewDetail6 = ref(false)
  const viewToggle6 = () => {
    viewDetail6.value = true
  };
  
  export { addDetail6, detailToggle6, viewDetail6, viewToggle6, detail_id6 }
  
  </script>
  
  <style scoped>
  .textz {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 6%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 20px;
  }
  
  .text1 {
    align-items: center;
    margin-bottom: 30px;
    font-weight: 700;
  }
  
  .text2 {
    font-weight: 00;
  }
  
  .chart1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 13%;
    width: auto;
  }
  
  .pie1 {
    width: 400px;
    margin-left: 50px;
  }
  
  .bar1 {
    margin-left: 30px;
  }
  
  .table {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 34%;
  }
  
  
  </style>