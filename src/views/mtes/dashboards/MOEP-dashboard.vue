<template>

  <div class="">
    <!-- Header -->
    <div>
      <qwe />
      <userbutton />
    </div>
    <!-- Text -->
    <div class="textz">
      <p class="text1">Mineral Ore Export Permit</p>
      <h2 class="text2">
        SUMMARY
      </h2>
    </div>

    <div v-if="addDetail10">
      <appdet></appdet>
    </div>

    <div v-if="viewDetail10">
      <viewdetail :detail_id10="detail_id10" />
    </div>

    <!-- Charts for summary  -->
    <div class="chart1">
      <Pie class="pie1" :application="application" />
      <BarChart class="bar1" :application="application" />
    </div>

    <!-- Table list -->
    <div class="table">
      <Tableview />
    </div>
  </div>
</template>

<script setup>
import appdet from "../../../components/MTES/modals/add/moep-newapplication.vue"
import viewdetail from '../../../components/MTES/modals/view/MOEP-details.vue'
import qwe from '../../../components/header.vue'
import Pie from '../../../components/MTES/charts/Pie.vue'
import BarChart from '../../../components/MTES/charts/bar.vue'
import Tableview from '../../mtes/tables/MOEP-table.vue'
import userbutton from '../../../components/user-dbbtn.vue'
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

const detail_id10 = ref('')
const addDetail10 = ref(false)
const detailToggle10 = () => {
  addDetail10.value = true
};
const application = 'moep'

const viewDetail10 = ref(false)
const viewToggle10 = () => {
  viewDetail10.value = true
};

export { addDetail10, detailToggle10, viewDetail10, viewToggle10, detail_id10 }

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