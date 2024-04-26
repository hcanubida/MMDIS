<template>
  <div class="fttatable">
      <div class="flex lg:justify-end mb-5 ">
          <button class="fttabutton" @click="navigateTomodal">Add Application</button>
      </div>
      <div class= "ftta_scrollable">
          <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
            <!-- <table> -->
              <thead class="sticky top-0 z-50 border-y-50">
                  <tr style="background-color: #e6cfaf;">
                      <th class="fttath">Application No.</th>
                      <th class="fttath">Status</th>
                      <th class="fttath">Tenement Name</th>
                      <th class="fttath">Area (Hectares)</th>
                      <th class="fttath">Date Filed</th>
                      <th class="fttath">Barangay</th>
                      <th class="fttath">City</th>
                      <th class="fttath">Province</th>
                      <th class="fttath">Commodity</th>
                      <th class="fttath">Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(detail, index) in details" :key="index">
                      <td class="fttatd">{{ detail.id }}</td>
                      <td class="fttatd">{{ detail.status }}</td>
                      <td class="fttatd">{{ detail.tenement_name }}</td>
                      <td class="fttatd">{{ detail.area_hectares }}</td>
                      <td class="fttatd">{{ detail.date_filed }}</td>
                      <td class="fttatd">{{ detail.barangay }}</td>
                      <td class="fttatd">{{ detail.city }}</td>
                      <td class="fttatd">{{ detail.province }}</td>
                      <td class="fttatd">{{ detail.commodity }}</td>
                      <td class="fttatd">
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

import { addDetail, viewDetail, detailToggle, detail_id } from '../dashboards/FTAA-dashboard.vue';

export default {
  name: 'typeofapp',
  data() {
      return {
          details: [],
          addDetail: false,
          viewDetail: false,
          detail_id: null
      };
  },
  mounted() {
      this.fetchDetails();
  },
  methods: {
      async fetchDetails() {
          try {
              const response = await axios.get('http://127.0.0.1:8000/get_details/');
              this.details = response.data.filter(det => det.application == 'ftta');
          } catch (error) {
              console.error('Error fetching details:', error);
          }
      },
      navigateTomodal() {
          addDetail.value = true// Define your navigation logic here
      },
      navigateTomodalView(id) {
          detail_id.value = id
          viewDetail.value = true// Define your navigation logic here
      },
  }
};


</script>

<style>
.fttabutton {
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

.fttatable {
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

.ftta_scrollable {
  /* Adjust the maximum height as needed */
  margin: 15px;
  box-shadow: 2px 3px 5px rgb(175, 175, 175);
  max-height:200px; 
  overflow-y: auto; 
}

.fttath,
.fttatd {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>