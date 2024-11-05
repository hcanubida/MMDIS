<template>
    <div class="fttatable">
      <!-- Search and Add Section -->
      <div class="flex justify-between mt-8">
        <!-- Search Input Container -->
        <div class="h-10 flex w-2/5 ml-6">
          <!-- Search Icon -->
          <div class="flex items-center bg-blue-100 rounded-l-lg px-3 pointer-events-none">
            <svg class="w-4 h-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <!-- Search Input Field -->
          <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Tenement Name or Location of the application ..." required />
        </div>
        <!-- Add Button -->
        <div class="flex lg:justify-end mb-5 ">
          <button @click="navigateTomodal" class="text-dark bg-orange-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-2 py-2 text-center flex items-center mr-8">New Application<img class="w-4 m-2" src="../../../assets/icons/plus.png"></button>
        </div>
      </div>

      <div class="ftta_scrollable">
        <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
          <thead class="sticky top-0 z-50 border-y-50" style="z-index: 1;">
            <tr style="background-color: #e6cfaf;">
              <th class="border text-center p-2">Stages of Processing</th>
              <th class="border text-center p-2 cursor-pointer" @click="sortmethod('status')">
                Status
                <span v-if="sortKey === 'status'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th class="border text-center p-2">Tenement No.</th>
              <th class="border text-center p-2 cursor-pointer" @click="sortmethod('tenement_name')">
                Tenement Name
                <span v-if="sortKey === 'tenement_name'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th class="border text-center p-2">Area (HA)</th>
              <th class="border text-center p-2 cursor-pointer" @click="sortmethod('date_filed')">
                Date Filed
                <span v-if="sortKey === 'date_filed'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th class="border text-center p-2">Barangay</th>
              <th class="border text-center p-2">City</th>
              <th class="border text-center p-2">Province</th>
              <th class="border text-center p-2">Commodity</th>
              <th class="border text-center p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in sortedEntries" :key="index">
              <td class="border text-center p-2">{{ detail.stage_of_processing }}</td>
              <td class="border text-center p-2">{{ detail.status }}</td>
              <td class="border text-center p-2">{{ detail.id }}</td>
              <td class="border text-center p-2">{{ detail.tenement_name }}</td>
              <td class="border text-center p-2">{{ detail.area_hectares }}</td>
              <td class="border text-center p-2">{{ detail.date_filed }}</td>
              <td class="border text-center p-2">{{ detail.barangay }}</td>
              <td class="border text-center p-2">{{ detail.city }}</td>
              <td class="border text-center p-2">{{ detail.province }}</td>
              <td class="border text-center p-2">{{ detail.commodity }}</td>
              <td class="border p-2 flex items-center justify-center">
                <button @click="navigateTomodalView(detail.id)" class=" pr-2 rounded"><img src="../../../assets/icons/eye.png" style="width: 25px;"></button>
                <button class="rounded pl-2 pr-2"><img src="../../../assets/icons/edit.png" style="width: 20px;"></button>
                <button class="bg-grey-100 text-white px-2 py-1 rounded "><img src="../../../assets/icons/remove.png" style="width: 15px;"></button>
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
  import { API_BASE_URL } from '../../../config';
  import { addDetail, viewDetail, detailToggle, detail_id } from '../dashboards/FTAA-dashboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
      return {
        details: [],
        addDetail: false,
        viewDetail: false,
        detail_id: null,
        sortKey: '',
        sortOrder: 'asc',
      };
    },
    computed: {
      sortedEntries() {
        // Sort and return the entries based on sortKey and sortOrder
        return [...this.details].sort((a, b) => {
          let result = 0;
          if (a[this.sortKey] > b[this.sortKey]) result = 1;
          else if (a[this.sortKey] < b[this.sortKey]) result = -1;
          return this.sortOrder === 'asc' ? result : -result;
        });
      },
    },
    mounted() {
      this.fetchDetails();
    },
    methods: {
      async fetchDetails() {
        try {
          const response = await axios.get(`${API_BASE_URL}/get_details/`);
          this.details = response.data.filter((det) => det.application == 'ftta');
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      },
      navigateTomodal() {
        addDetail.value = true; // Define your navigation logic here
      },
      navigateTomodalView(id) {
        detail_id.value = id;
        viewDetail.value = true; // Define your navigation logic here
      },
      sortmethod(key) {
        if (this.sortKey === key) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortKey = key;
          this.sortOrder = 'asc';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
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
    border-collapse: collapse;
    width: 100%;
  }
  
  .ftta_scrollable {
    margin: 15px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175);
    max-height: 369px;
    overflow-y: auto;
  }
  </style>
  