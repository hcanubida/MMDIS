<template>
  <div>
    <!-- Header and User Button Section -->
    <div class="flex">
      <Header />
      <UserBtn />
    </div>

    <!-- Title Section -->
    <div class="flex flex-col mt-44 justify-center font-bold text-center">
      <h1 class="text-4xl">Area Status Clearance</h1>
      <h2 class="text-2xl">Commercial Sand and Gravel</h2>
    </div>

    <!-- Search and Add New Data Section -->
    <div class="flex mt-8 justify-between">
      <div class="w-1/3 ml-4">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, province, city, barangay, river, status or remarks..." required />
        </div>
      </div>
      <div class="content-center">
        <!-- Modal toggle -->
        <button @click="showModal = true" class="mr-4 bg-green-900 p-2 text-white font-bold rounded-lg">Add New Data</button>
      </div>
    </div>

    <!-- Table Section -->
    <div class="mt-8">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Names</th>
            <th scope="col" class="px-6 py-3">Area</th>
            <th scope="col" class="px-6 py-3">Province</th>
            <th scope="col" class="px-6 py-3">City/Municipality</th>
            <th scope="col" class="px-6 py-3">Barangay</th>
            <th scope="col" class="px-6 py-3">Sitio</th>
            <th scope="col" class="px-6 py-3">River</th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('received')">
              Date Received
              <span v-if="sortBy === 'received'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('released')">
              Date Released
              <span v-if="sortBy === 'released'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(csag, index) in filteredCSAG" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ csag.name }}</td>
            <td class="px-6 py-4">{{ csag.area }}</td>
            <td class="px-6 py-4">{{ csag.province }}</td>
            <td class="px-6 py-4">{{ csag.city_municipality }}</td>
            <td class="px-6 py-4">{{ csag.barangay }}</td>
            <td class="px-6 py-4">{{ csag.sitio }}</td>
            <td class="px-6 py-4">{{ csag.river }}</td>
            <td class="px-6 py-4">{{ csag.received }}</td>
            <td class="px-6 py-4">{{ csag.released }}</td>
            <td class="px-6 py-4">{{ csag.status }}</td>
            <td class="px-6 py-4">{{ csag.remarks }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="filteredCSAG.length === 0" class="text-center mt-4 text-gray-600 dark:text-gray-300">
        No results found.
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <!-- Your form fields for adding new data -->
        <form @submit.prevent="addNewEntry">
          <!-- Example input fields -->
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" v-model="newEntry.name" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="area" class="block text-sm font-medium text-gray-700">Area</label>
            <input type="text" id="area" v-model="newEntry.area" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="province" class="block text-sm font-medium text-gray-700">Province</label>
            <select id="province" v-model="newEntry.province" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
              <option>Bukidnon</option>
              <option>Camiguin</option>
              <option>Lanao del Norte</option>
              <option>Misamis Occidental</option>
              <option>Misamis Oriental</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="city_municipality" class="block text-sm font-medium text-gray-700">City/Municipality</label>
            <input type="text" id="city_municipality" v-model="newEntry.city_municipality" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="barangay" class="block text-sm font-medium text-gray-700">Barangay</label>
            <input type="text" id="barangay" v-model="newEntry.barangay" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="sitio" class="block text-sm font-medium text-gray-700">Sitio</label>
            <input type="text" id="sitio" v-model="newEntry.sitio" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>

          <div class="mb-4">
            <label for="river" class="block text-sm font-medium text-gray-700">River</label>
            <input type="text" id="river" v-model="newEntry.river" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="received" class="block text-sm font-medium text-gray-700">Date Received</label>
            <input type="date" id="received" v-model="newEntry.received" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="released" class="block text-sm font-medium text-gray-700">Date Released</label>
            <input type="date" id="released" v-model="newEntry.released" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
            <input type="text" id="status" v-model="newEntry.status" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="remarks" class="block text-sm font-medium text-gray-700">Remarks</label>
            <textarea id="remarks" v-model="newEntry.remarks" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end">
            <button type="button" @click="showModal = false" class="bg-red-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Entry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue';
import UserBtn from '../../components/user-dbbtn.vue';
import axios from 'axios';
import debounce from 'lodash/debounce';

export default {
  components: {
    Header,
    UserBtn
  },
  data() {
    return {
      csag: [],
      searchQuery: '',
      sortBy: '',
      sortOrder: 'asc',
      showModal: false,
      newEntry: this.getEmptyEntry(),
    };
  },
  computed: {
    filteredCSAG() {
      return this.getFilteredAndSortedData();
    },
  },
  methods: {
    getEmptyEntry() {
      return {
        name: '',
        area: '',
        province: '',
        city_municipality: '',
        barangay: '',
        sitio: '',
        river: '',
        received: '',
        released: '',
        status: '',
        remarks: '',
      };
    },
    fetchCSAG() {
      axios.get('http://localhost:8000/api/csag')
        .then(response => {
          this.csag = response.data;
        })
        .catch(error => {
          console.error('Error fetching CSAG:', error);
        });
    },
    addNewEntry() {
      axios.post('http://localhost:8000/api/csag', this.newEntry)
        .then(response => {
          this.csag.push(response.data);
          this.clearNewEntry();
        })
        .catch(error => {
          console.error('Error adding entry:', error.response ? error.response.data : error.message);
        });
    },
    clearNewEntry() {
      this.newEntry = this.getEmptyEntry();
      this.showModal = false;
    },
    debouncedSearch: debounce(function() {
      this.searchData();
    }, 300),
    searchData() {
      // Trigger re-computation of filteredCSAG
      this.filteredCSAG;
    },
    sortByDate(key) {
      if (this.sortBy === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortBy = key;
        this.sortOrder = 'asc';
      }
    },
    getFilteredAndSortedData() {
      const query = this.searchQuery.toLowerCase();
      const filtered = this.csag.filter(csag =>
        Object.values(csag).some(val => 
          String(val).toLowerCase().includes(query)
        )
      );

      if (this.sortBy) {
        filtered.sort((a, b) => {
          const dateA = new Date(a[this.sortBy]);
          const dateB = new Date(b[this.sortBy]);
          return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
      }

      return filtered;
    }
  },
  mounted() {
    this.fetchCSAG();
  },
};
</script>
