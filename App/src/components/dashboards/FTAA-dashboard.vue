<template>

  <div class="">
    <!-- Header -->
    <div>
      <qwe />
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
    <div class="chart">
      <Pie class="pie" />
      <BarChart class="bar" />
    </div>

    <!-- Table list -->
    <div class="table">
      <Tableview />
    </div>
  </div>
</template>

<script setup>
import appdet from '../popups/FTTA-add.vue'
import viewdetail from '../popups/FTTA-details.vue'
import qwe from '../header.vue';
import Pie from '../charts/Pie.vue'
import BarChart from '../charts/bar.vue'
import Tableview from '../tables/FTTA-table.vue'
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

const detail_id = ref('')
const addDetail = ref(false)
const detailToggle = () => {
  addDetail.value = true
};

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
  margin-top: 5%;
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

.chart {
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

.pie {
  width: 500px;
  margin-left: 50px;
}

.bar {
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
  margin-top: 35%;
}


</style>