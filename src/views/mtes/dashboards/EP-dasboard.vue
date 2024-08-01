<template>

  <div class="">
    <!-- Header -->
    <div>
      <qwe />
      <userbutton />
    </div>
    <!-- Text -->
    <div class="textz">
      <p class="text1">Exploration Permit</p>
      <h2 class="text2">
        SUMMARY
      </h2>
    </div>

    <div v-if="addDetail1">
      <appdet></appdet>
    </div>

    <div v-if="viewDetail1">
      <viewdetail1 :detail_id1="detail_id1" />
    </div>

    <!-- Charts for summary  -->
    <div class="chart1">
      <Pie class="pie" :application="application" />
      <BarChart class="bar-table" :application="application" />
    </div>

    <!-- Table list -->
    <div class="table">
      <Tableview />
    </div>
  </div>
</template>

<script setup>
import appdet from "../../../components/MTES/modals/add/EP-add.vue"
import viewdetail1 from '../../../components/MTES/modals/view/EP-details.vue'
import qwe from '../../../components/header.vue'
import Pie from '../../../components/MTES/charts/Pie.vue'
import BarChart from '../../../components/MTES/charts/bar.vue'
import Tableview from '../../mtes/tables/EP-table.vue'
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

const detail_id1 = ref('')
const addDetail1 = ref(false)
const detailToggle1 = () => {
  addDetail1.value = true
};
const application = 'ep'

const viewDetail1 = ref(false)
const viewToggle1 = () => {
  viewDetail1.value = true
};

export { addDetail1, detailToggle1, viewDetail1, viewToggle1, detail_id1 }

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

.pie {
  width: 400px;
  margin-left: 50px;
}

.bar-table {
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