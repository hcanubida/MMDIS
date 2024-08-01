<template>

    <div class="">
      <!-- Header -->
      <div>
        <qwe />
        <userbutton /> 
      </div>
      <!-- Text -->
      <div class="textz">
        <p class="text1">Mineral Production Sharing Agreement</p>
        <h2 class="text2">
          SUMMARY
        </h2>
      </div>
  
      <div v-if="addDetail2">
        <appdet></appdet>
      </div>
  
      <div v-if="viewDetail2">
        <viewdetail2 :detail_id2="detail_id2" />
      </div>
  
      <!-- Charts for summary  -->
      <div class="chart1">
        <Pie class="pie1" :application="application"/>
        <BarChart class="bar1" :application="application" />
      </div>
  
      <!-- Table list -->
      <div class="table">
        <Tableview />
      </div>
    </div>
  </template>
  
  <script setup>
  import appdet from "../../../components/MTES/modals/add/MPSA-add.vue"
  import viewdetail2 from '../../../components/MTES/modals/view/MPSA-details.vue'
  import qwe from '../../../components/header.vue'
  import Pie from '../../../components/MTES/charts/Pie.vue'
  import BarChart from '../../../components/MTES/charts/bar.vue'
  import Tableview from '../../mtes/tables/MPSA-table.vue'
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
  
  const detail_id2 = ref('')
  const addDetail2 = ref(false)
  const detailToggle2 = () => {
    addDetail2.value = true
  };
  const application = 'mpsa'
  
  const viewDetail2 = ref(false)
  const viewToggle2 = () => {
    viewDetail2.value = true
  };
  
  export { addDetail2, detailToggle2, viewDetail2, viewToggle2, detail_id2 }
  
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