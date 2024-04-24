<template>
  <div class="eptable">
    <div class="flex lg:justify-end mb-5 ">
      <button class="epbutton" @click="navigateTomodal">Add Application</button>
    </div>
    <div class="ep_scrollable">
      <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
        <thead class="sticky top-0 z-50 border-y-50">
          <tr style="background-color: #e6cfaf;">
            <th class="epth">Application No.</th>
            <th class="epth">Status</th>
            <th class="epth">Tenement Name</th>
            <th class="epth">Area (Hectares)</th>
            <th class="epth">Date Filed</th>
            <th class="epth">Barangay</th>
            <th class="epth">City</th>
            <th class="epth">Province</th>
            <th class="epth">Commodity</th>
            <th class="epth">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(detail, index) in details" :key="index">
            <td class="eptd">{{ detail.id }}</td>
            <td class="eptd">{{ detail.status }}</td>
            <td class="eptd">{{ detail.tenement_name }}</td>
            <td class="eptd">{{ detail.area_hectares }}</td>
            <td class="eptd">{{ detail.date_filed }}</td>
            <td class="eptd">{{ detail.barangay }}</td>
            <td class="eptd">{{ detail.city }}</td>
            <td class="eptd">{{ detail.province }}</td>
            <td class="eptd">{{ detail.commodity }}</td>
            <td class="eptd">
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
import { addDetail1, detailToggle1, viewDetail1, detail_id1 } from '../../mtes/dashboards/EP-dasboard.vue';

export default {
  name: 'typeofapp',
  data() {
    return {
      details: [],
      addDetail1: false,
      viewDetail1: false,
      detail_id1: null
    };
  },
  mounted() {
    this.fetchDetails();
  },
  methods: {
    async fetchDetails() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get_details/');
        this.details = response.data.filter(det => det.application == 'ep');
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    },
    navigateTomodal() {
      addDetail1.value = true// Define your navigation logic here
    },
    navigateTomodalView(id) {
      detail_id1.value = id
      viewDetail1.value = true// Define your navigation logic here
    },
  }
};


</script>

<style>
.epbutton {
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

.eptable {
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

.ep_scrollable {
  /* Adjust the maximum height as needed */
  margin: 15px;
  box-shadow: 2px 3px 5px rgb(175, 175, 175);
  max-height:200px; 
  overflow-y: auto; 
}

.epth,
.eptd {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>