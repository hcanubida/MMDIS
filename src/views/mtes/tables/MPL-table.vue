<template>
  <div class="mpltable">
      <div class="flex lg:justify-end mb-5 ">
          <button class="mplbutton" @click="navigateTomodal">Add Application</button>
      </div>

      <div class= "mpl_scrollable">
          <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
            <!-- <table> -->
              <thead class="sticky top-0 z-50 border-y-50">
                  <tr style="background-color: #e6cfaf;">
                      <th class="mplth">Application No.</th>
                      <th class="mplth">Status</th>
                      <th class="mplth">Tenement Name</th>
                      <th class="mplth">Area (Hectares)</th>
                      <th class="mplth">Date Filed</th>
                      <th class="mplth">Barangay</th>
                      <th class="mplth">City</th>
                      <th class="mplth">Province</th>
                      <th class="mplth">Commodity</th>
                      <th class="mplth">Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(detail, index) in details" :key="index">
                      <td class="mpltd">{{ detail.id }}</td>
                      <td class="mpltd">{{ detail.status }}</td>
                      <td class="mpltd">{{ detail.tenement_name }}</td>
                      <td class="mpltd">{{ detail.area_hectares }}</td>
                      <td class="mpltd">{{ detail.date_filed }}</td>
                      <td class="mpltd">{{ detail.barangay }}</td>
                      <td class="mpltd">{{ detail.city }}</td>
                      <td class="mpltd">{{ detail.province }}</td>
                      <td class="mpltd">{{ detail.commodity }}</td>
                      <td class="mpltd">
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

import { addDetail8, viewDetail8, detailToggle8, detail_id8 } from '../dashboards/MPL-dashboard.vue';

export default {
  name: 'typeofapp',
  data() {
      return {
          details: [],
          addDetail8: false,
          viewDetail8: false,
          detail_id8: null
      };
  },
  mounted() {
      this.fetchDetails();
  },
  methods: {
      async fetchDetails() {
          try {
              const response = await axios.get('http://127.0.0.1:8000/get_details/');
              this.details = response.data.filter(det => det.application == 'mpl');
          } catch (error) {
              console.error('Error fetching details:', error);
          }
      },
      navigateTomodal() {
          addDetail8.value = true// Define your navigation logic here
      },
      navigateTomodalView(id) {
          detail_id8.value = id
          viewDetail8.value = true// Define your navigation logic here
      },
  }
};


</script>

<style>
.mplbutton {
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

.mpltable {
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

.mpl_scrollable {
  /* Adjust the maximum height as needed */
  margin: 15px;
  box-shadow: 2px 3px 5px rgb(175, 175, 175);
  max-height:200px; 
  overflow-y: auto; 
}

.mplth,
.mpltd {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>