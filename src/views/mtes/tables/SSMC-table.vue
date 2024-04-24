<template>
<div class="ssmctablemain">
      <div class="flex lg:justify-end mb-5 ">
          <button class="ssmcbutton" @click="navigateTomodal">Add Application</button>
      </div>
      <div class="ssmcscrollable-table">
          <table
              class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <thead class="sticky top-0 z-50">
                  <tr style="background-color: #e6cfaf;">
                      <th class="ssmcth">Application No.</th>
                      <th class="ssmcth">Status</th>
                      <th class="ssmcth">Tenement Name</th>
                      <th class="ssmcth">Area (Hectares)</th>
                      <th class="ssmcth">Date Filed</th>
                      <th class="ssmcth">Barangay</th>
                      <th class="ssmcth">City</th>
                      <th class="ssmcth">Province</th>
                      <th class="ssmcth">Commodity</th>
                      <th class="ssmcth">Action</th>
                  </tr>
              </thead>

              <tbody>
                  <tr v-for="(detail, index) in details" :key="index">
                      <td class="ssmctd">{{ detail.id }}</td>
                      <td class="ssmctd">{{ detail.status }}</td>
                      <td class="ssmctd">{{ detail.tenement_name }}</td>
                      <td class="ssmctd">{{ detail.area_hectares }}</td>
                      <td class="ssmctd">{{ detail.date_filed }}</td>
                      <td class="ssmctd">{{ detail.barangay }}</td>
                      <td class="ssmctd">{{ detail.city }}</td>
                      <td class="ssmctd">{{ detail.province }}</td>
                      <td class="ssmctd">{{ detail.commodity }}</td>
                      <td class="ssmctd">
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
import { addDetail7, detailToggle7, viewDetail7, detail_id7 } from '../../mtes/dashboards/SSMC-dashboard.vue';

export default {
  name: 'typeofapp',
  data() {
    return {
      details: [],
      addDetail7: false,
      viewDetail7: false,
      detail_id7: null
    };
  },
  mounted() {
    this.fetchDetails();
  },
  methods: {
    async fetchDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_details/');
        this.details = response.data.filter(det => det.application == 'ssmc');
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    },
    navigateTomodal() {
      addDetail7.value = true// Define your navigation logic here
    },
    navigateTomodalView(id) {
      detail_id7.value = id
      viewDetail7.value = true// Define your navigation logic here
    },
  }
};


</script>

<style>
.ssmcbutton {
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

.ssmctablemain {
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

.ssmcscrollable-table {
  margin: 15px;
box-shadow: 2px 3px 5px rgb(175, 175, 175);
max-height:200px; 
overflow-y: auto; 
}

.ssmcth,
.ssmctd {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>