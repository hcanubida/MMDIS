<template>
  <div class="mpsatablemain">
      <div class="flex lg:justify-end mb-5 ">
          <button class="mpsabutton" @click="navigateTomodal">Add Application</button>
      </div>
      <div class="mpsascrollable-table">
          <table
              class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <thead class="sticky top-0 z-50">
                  <tr style="background-color: #e6cfaf;">
                      <th class="mpsath">Application No.</th>
                      <th class="mpsath">Status</th>
                      <th class="mpsath">Tenement Name</th>
                      <th class="mpsath">Area (Hectares)</th>
                      <th class="mpsath">Date Filed</th>
                      <th class="mpsath">Barangay</th>
                      <th class="mpsath">City</th>
                      <th class="mpsath">Province</th>
                      <th class="mpsath">Commodity</th>
                      <th class="mpsath">Action</th>
                  </tr>
              </thead>

              <tbody>
                  <tr v-for="(detail, index) in details" :key="index">
                      <td class="mpsatd">{{ detail.id }}</td>
                      <td class="mpsatd">{{ detail.status }}</td>
                      <td class="mpsatd">{{ detail.tenement_name }}</td>
                      <td class="mpsatd">{{ detail.area_hectares }}</td>
                      <td class="mpsatd">{{ detail.date_filed }}</td>
                      <td class="mpsatd">{{ detail.barangay }}</td>
                      <td class="mpsatd">{{ detail.city }}</td>
                      <td class="mpsatd">{{ detail.province }}</td>
                      <td class="mpsatd">{{ detail.commodity }}</td>
                      <td class="mpsatd">
                          <button class="text-red-500" @click="navigateTomodalView(detail.id)">
                              View
                          </button>
                      </td>
                  </tr>
              </tbody>
              </table>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

import { addDetail2, viewDetail2, detailToggle2, detail_id2 } from '../dashboards/MPSA-dashboard.vue';

export default {
  name: 'typeofapp',
  data() {
      return {
          details: [],
          addDetail2: false,
          viewDetail2: false,
          detail_id2: null
      };
  },
  mounted() {
      this.fetchDetails();
  },
  methods: {
      async fetchDetails() {
          try {
              const response = await axios.get('http://127.0.0.1:8000/get_details/');
              this.details = response.data.filter(det => det.application == 'mpsa');
          } catch (error) {
              console.error('Error fetching details:', error);
          }
      },
      navigateTomodal() {
          addDetail2.value = true// Define your navigation logic here
      },
      navigateTomodalView(id) {
          detail_id2.value = id
          viewDetail2.value = true// Define your navigation logic here
      },
  }
};


</script>

<style>
.mpsabutton {
  text-align: center;
  padding: 10px;
  margin: 1rem;
  width: 250px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  background-color: #eacda3;
  color: white;
  cursor: pointer;
}

.mpsatablemain {
  flex: auto;
  flex-direction: column;
  margin-left: 20px;
  border-collapse: collapse;
  width: 100%;
}

#table {
  width: 100%;
  margin: auto;
  height: auto;
}

.mpsascrollable-table {
  margin: 15px;
box-shadow: 2px 3px 5px rgb(175, 175, 175);
max-height:200px; 
overflow-y: auto; 
}

.mpsath,
.mpsatd {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>