<template>
  <div class="table">
    <!-- Status Section  -->
    <div class="flex justify-center">
      <p class="m-8 border border-green-800 p-2 rounded-lg">On-going Process: {{ statusCount('On-going Process') }}</p>
      <p class="m-8 border border-green-800 p-2 rounded-lg">Denied: {{ statusCount('Denied') }}</p>
      <p class="m-8 border border-green-800 p-2 rounded-lg">With Order of Finality: {{ statusCount('With Order of Finality') }}</p>
      <p class="m-8 border border-green-800 p-2 rounded-lg">Issued: {{ statusCount('Issued') }}</p>
      <p class="m-8 border border-green-800 p-2 rounded-lg">Endorsed to MGB CO for Clearance: {{ statusCount('Endorsed to MGB CO for Clearance') }}</p>
      <p class="m-8 border border-green-800 p-2 rounded-lg">Endorsed to MGB CO for Approval: {{ statusCount('Endorsed to MGB CO for Approval') }}</p>
    </div>

    <!-- Search and Add Section -->
    <div class="flex justify-between mt-8">
      <div class="h-10 flex w-2/5 ml-6">
        <div class="flex items-center bg-blue-100 rounded-l-lg px-3 pointer-events-none">
          <svg class="w-4 h-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Tenement Name or Location of the application ..." required />
      </div>
    </div>

    <div class="scrollable">
      <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
        <thead class="sticky top-0 z-50 border-y-50" style="z-index: 1;">
          <tr class="bg-green-800 text-white">
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
          <tr v-for="(detail, index) in filteredEntries" :key="index">
            <td class="border text-center p-2">{{ detail.stage_of_processing }}</td>
            <td class="border text-center p-2">{{ detail.status }}</td>
            <td class="border text-center p-2">{{ detail.tenement_number }}</td>
            <td class="border text-center p-2">{{ detail.tenement_name }}</td>
            <td class="border text-center p-2">{{ detail.area_hectares }}</td>
            <td class="border text-center p-2">{{ detail.date_filed }}</td>
            <td class="border text-center p-2">{{ detail.barangay }}</td>
            <td class="border text-center p-2">{{ detail.city }}</td>
            <td class="border text-center p-2">{{ detail.province }}</td>
            <td class="border text-center p-2">{{ detail.commodity }}</td>
            <td class="border p-2 flex items-center justify-center">
              <button @click="navigateTomodalView(detail.id)" class="rounded"><img src="../../../assets/icons/eye.png" style="width: 25px;"></button>
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

import { viewDetail, detail_id } from '../dashboards/v-MPP-dashboard.vue';

export default {
  name: 'typeofapp',
  data() {
      return {
          details: [],
          viewDetail: false,
          detail_id: null,
          selectedDetail: null,
          searchQuery: '',
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
      filteredEntries() {
      // Filter the sorted entries based on the search query
      const query = this.searchQuery.toLowerCase();
      return this.sortedEntries.filter((detail) => {
          return (
          (detail.tenement_name && detail.tenement_name.toLowerCase().includes(query)) ||
          (detail.province && detail.province.toLowerCase().includes(query)) ||
          (detail.city && detail.city.toLowerCase().includes(query)) ||
          (detail.barangay && detail.barangay.toLowerCase().includes(query))
          );
      });
      },
      statusCount() {
      // Return the count of entries with a specific status
      return (status) => this.details.filter((detail) => detail.status === status).length;
      },
  },
  mounted() {
      this.fetchDetails();
  },
  methods: {
      async fetchDetails() {
          try {
              const response = await axios.get(`${API_BASE_URL}/get_details/`);
              this.details = response.data.filter(det => det.application == 'mpp');
          } catch (error) {
              console.error('Error fetching details:', error);
          }
      },
      navigateTomodalView(id) {
          detail_id.value = id
          viewDetail.value = true// Define your navigation logic here
      },
      sortmethod(key) {
          if (this.sortKey === key) {
              this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
          } else {
              this.sortKey = key;
              this.sortOrder = 'asc';
          }
      },
      debouncedSearch() {
          clearTimeout(this.debounceTimeout);
          this.debounceTimeout = setTimeout(() => {
              // Handle debounce logic
          }, 300);
      },
  },
};


</script>

<style>
.button {
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

.table {
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

.scrollable {
  /* Adjust the maximum height as needed */
  margin: 15px;
  box-shadow: 2px 3px 5px rgb(175, 175, 175);
  max-height:200px; 
  overflow-y: auto; 
}

.th,
.td {
  border: 1px solid #888888;
  text-align: center;
  padding: 10px;
  position: sticky;
}
</style>