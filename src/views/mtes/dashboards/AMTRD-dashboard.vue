<template>

  <div class="">
    <!-- Header and User Button Section -->
    <div class="flex">
        <Header />
        <UserBtn />
    </div>
  
    <!-- Title Section -->
    <div class="flex flex-col mt-18 justify-center font-bold text-center">
        <h1 class="text-4xl">Accreditation as Mineral Trader, Retailer, and Dealer</h1>
        <h2 class="text-2xl pt-2">SUMMARY</h2>
    </div>

    <div v-if="addDetail9">
      <appdet></appdet>
    </div>

    <div v-if="viewDetail9">
      <viewdetail :detail_id9="detail_id9" />
    </div>

    <!-- Charts for summary  -->
    <div class="flex flex-row justify-center top-0 left-0 right-0 w-auto mt-8">
      <Pie class="w-1/5 ml-12" :application="application" />
      <BarChart class="ml-8" :application="application" />
    </div>



    <!-- Table list -->
    <div class="w-screen"> 
      <Tableview />
    </div>
  </div>
</template>

<script setup>
import appdet from "../../../components/MTES/modals/add/amtrd-newapplication.vue"
import viewdetail from '../../../components/MTES/modals/view/AMTRD-details.vue'
import Header from '../../../components/header.vue'
import Pie from '../../../components/MTES/charts/Pie.vue'
import BarChart from '../../../components/MTES/charts/bar.vue'
import Tableview from '../../mtes/tables/AMTRD-table.vue'
import UserBtn from '../../../components/user-dbbtn.vue'
import axios from 'axios';
import { API_BASE_URL } from '../../../config';

import { ref, onMounted } from 'vue'

const user = ref();
onMounted(async () => {
  const data = await axios.get(`${API_BASE_URL}/get_accounts/`)
  user.value = data;
})


</script>
<script>
import { ref } from 'vue';

const detail_id9 = ref('')
const addDetail9 = ref(false)
const detailToggle9 = () => {
  addDetail9.value = true
};
const application = 'amtrd'

const viewDetail9 = ref(false)
const viewToggle9 = () => {
  viewDetail9.value = true
};

export { addDetail9, detailToggle9, viewDetail9, viewToggle9, detail_id9 }

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

</style>