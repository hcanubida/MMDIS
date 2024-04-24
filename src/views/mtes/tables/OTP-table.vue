<template>
  <div class="otptablemain">
      <div class="flex lg:justify-end mb-5 ">
          <button class="otpbutton" @click="navigateTomodal">Add Application</button>
      </div>
      <div class="otpscrollable-table">
          <table
              class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <thead class="sticky top-0 z-50">
                  <tr style="background-color: #e6cfaf;">
                      <th class="otpth">Application No.</th>
                      <th class="otpth">Status</th>
                      <th class="otpth">Tenement Name</th>
                      <th class="otpth">Area (Hectares)</th>
                      <th class="otpth">Date Filed</th>
                      <th class="otpth">Barangay</th>
                      <th class="otpth">City</th>
                      <th class="otpth">Province</th>
                      <th class="otpth">Commodity</th>
                      <th class="otpth">Action</th>
                  </tr>
              </thead>

              <tbody>
                  <tr v-for="(detail, index) in details" :key="index">
                      <td class="otptd">{{ detail.id }}</td>
                      <td class="otptd">{{ detail.status }}</td>
                      <td class="otptd">{{ detail.tenement_name }}</td>
                      <td class="otptd">{{ detail.area_hectares }}</td>
                      <td class="otptd">{{ detail.date_filed }}</td>
                      <td class="otptd">{{ detail.barangay }}</td>
                      <td class="otptd">{{ detail.city }}</td>
                      <td class="otptd">{{ detail.province }}</td>
                      <td class="otptd">{{ detail.commodity }}</td>
                      <td class="otptd">
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

import { addDetail6, viewDetail6, detailToggle6, detail_id6} from '../dashboards/OTP-dashboard.vue';

export default {
  name: 'typeofapp',
  data() {
      return {
          details: [],
          addDetail6: false,
          viewDetail6: false,
          detail_id6: null
      };
  },
  mounted() {
      this.fetchDetails();
  },
  methods: {
      async fetchDetails() {
          try {
              const response = await axios.get('http://127.0.0.1:8000/get_details/');
              this.details = response.data.filter(det => det.application == 'otp');
          } catch (error) {
              console.error('Error fetching details:', error);
          }
      },
      navigateTomodal() {
          addDetail6.value = true// Define your navigation logic here
      },
      navigateTomodalView(id) {
          detail_id6.value = id
          viewDetail6.value = true// Define your navigation logic here
      },
  }
};


</script>

<style>
.otpbutton {
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

.otptablemain {
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

.otpscrollable-table {
  margin: 15px;
box-shadow: 2px 3px 5px rgb(175, 175, 175);
max-height:200px; 
overflow-y: auto; 
}

.otpth,
.otptd {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>