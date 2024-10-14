<template>

  <div class="">
    <!-- Header -->
    <div>
      <qwe />
      <userbutton />
    </div>
    <!-- Text -->
    <div class="textz">
      <p class="text1">Financial or Technical Assistance Agreement</p>
      <h2 class="text2">
        SUMMARY
      </h2>
    </div>

    <div v-if="addDetail">
      <appdet></appdet>
    </div>

    <div v-if="viewDetail">
      <viewdetail :detail_id="detail_id" />
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
import appdet from "../../../components/MTES/modals/add/FTAA-add.vue"
import viewdetail from '../../../components/MTES/modals/view/FTAA-details.vue'
import qwe from '../../../components/header.vue'
import Pie from '../../../components/MTES/charts/Pie.vue'
import BarChart from '../../../components/MTES/charts/bar.vue'
import Tableview from '../../mtes/tables/FTTA-table.vue'
import userbutton from '../../../components/user-dbbtn.vue'
import axios from 'axios';

import { ref, onMounted } from 'vue'

const user = ref();
onMounted(async () => {
  const data = await axios.get(`${API_BASE_URL}/get_accounts/`)
  user.value = data;
})


</script>
<script>
import { ref } from 'vue';

const detail_id = ref('')
const addDetail = ref(false)
const detailToggle = () => {
  addDetail.value = true
};
const application = 'ftta'

const viewDetail = ref(false)
const viewToggle = () => {
  viewDetail.value = true
};

export { addDetail, detailToggle, viewDetail, viewToggle, detail_id }

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