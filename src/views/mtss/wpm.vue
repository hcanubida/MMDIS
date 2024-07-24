<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-44 justify-center font-bold text-center">
        <h1 class="text-4xl">Work Program Monitoring</h1>
      </div>
  
      <!-- Charts Section -->
      <div class="mt-24">
        <Charts />
      </div>
  
      <!-- Search and Add Section -->
      <div class="flex justify-between mt-8">
        <!-- Search Input Container -->
        <div class="flex w-2/5 ml-2">
          <!-- Search Icon -->
          <div class="flex items-center bg-blue-100 rounded-l-lg px-3 pointer-events-none">
            <svg class="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <!-- Search Input Field -->
          <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, province, city, barangay, river, status or remarks..." required />
        </div>
        <!-- Add Button -->
        <AddBtn @click="showModal = true" />
      </div>
  
      <!-- Table Section -->
      <div class="mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Work Program | Term and Conditions | Requirements of: (Field Monitoring)</th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('travel_date')">
                Travel Date
                <span v-if="sortKey === 'travel_date'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('report_date')">
                Report Date
                <span v-if="sortKey === 'report_date'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('transmittal_date')">
                Transmittal Date
                <span v-if="sortKey === 'transmittal_date'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('released_date')">
                Released Date
                <span v-if="sortKey === 'released_date'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3">MMD Personnel</th>
              <th scope="col" class="px-6 py-3 text-center">Proof of MOV Uploaded</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in filteredEntries" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">{{ entry.text_field }}</td>
              <td class="px-6 py-4">{{ entry.travel_date }}</td>
              <td class="px-6 py-4">{{ entry.report_date }}</td>
              <td class="px-6 py-4">{{ entry.transmittal_date }}</td>
              <td class="px-6 py-4">{{ entry.released_date }}</td>
              <td class="px-6 py-4">{{ entry.mmd_personnel }}</td>
              <td class="px-6 py-4 text-center">
                <button @click="openPDF(entry.MOVpdf)" class="bg-red-500 text-white px-2 py-1 rounded">View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="filteredEntries.length === 0" class="text-center mt-4 text-gray-600 dark:text-gray-300">
          No results found.
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          <!-- Modal content -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="mt-2 flex flex-col">
                    <label for="text_field" class="text-gray-700">Work Program | Term and Conditions | Requirements of: (Field Monitoring)</label>
                    <textarea v-model="newEntry.text_field" id="text_field" rows="4" class="w-full bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Travel Date:</p>
                    <input v-model="newEntry.travel_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Report Date:</p>
                    <input v-model="newEntry.report_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Transmittal Date:</p>
                    <input v-model="newEntry.transmittal_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Released Date:</p>
                    <input v-model="newEntry.released_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">MMD Personnel:</p>
                    <input v-model="newEntry.mmd_personnel" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Proof of MOV:</p>
                    <input ref="MOVpdf" type="file" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button @click="addNewEntry" type="button" class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                Add
              </button>
              <button @click="showModal = false" type="button" class="inline-flex justify-center px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
    import Header from '../../components/header.vue'; 
    import AddBtn from '../../components/MTSS/add-btn.vue'; 
    import UserBtn from '../../components/user-dbbtn.vue'; 
    import Charts from '../../components/MTSS/charts_OSTC.vue';
    import axios from 'axios';
    import debounce from 'lodash/debounce';
  
  export default {
    components: {
      Header,
      UserBtn,
      AddBtn,
      Charts
    },
    data() {
      return {
        wpm: [],
        searchQuery: '',
        sortKey: '',
        sortOrder: 'asc',
        showModal: false,
        newEntry: {
          text_field: '',
          travel_date: '',
          report_date: '',
          transmittal_date: '',
          released_date: '',
          mmd_personnel: '',
          MOVpdf: null
        },
      };
    },
    computed: {
      filteredEntries() {
        const query = this.searchQuery.toLowerCase();
        return this.wpm.filter(entry => 
          entry.text_field.toLowerCase().includes(query) ||
          entry.travel_date.toLowerCase().includes(query) ||
          entry.report_date.toLowerCase().includes(query) ||
          entry.transmittal_date.toLowerCase().includes(query) ||
          entry.released_date.toLowerCase().includes(query) ||
          entry.mmd_personnel.toLowerCase().includes(query)
        ).sort((a, b) => {
          const aDate = new Date(a[this.sortKey]);
          const bDate = new Date(b[this.sortKey]);
          return this.sortOrder === 'asc' ? aDate - bDate : bDate - aDate;
        });
      }
    },
    methods: {
      fetchWPM() {
        axios.get('http://localhost:8000/api/monitoringWPM')
          .then(response => {
            this.wpm = response.data;
          })
          .catch(error => {
            console.error('Error fetching WPM:', error);
          });
      },
      addNewEntry() {
        const fileInput = this.$refs.MOVpdf.files[0];
        if (fileInput && fileInput.size > 5 * 1024 * 1024) { // 5MB limit
          alert('File size exceeds 5MB.');
          return;
        }
        if (!fileInput) {
          alert('Please upload a PDF file.');
          return;
        }
  
        const formData = new FormData();
        formData.append('text_field', this.newEntry.text_field);
        formData.append('travel_date', this.newEntry.travel_date);
        formData.append('report_date', this.newEntry.report_date);
        formData.append('transmittal_date', this.newEntry.transmittal_date);
        formData.append('released_date', this.newEntry.released_date);
        formData.append('mmd_personnel', this.newEntry.mmd_personnel);
        formData.append('MOVpdf', fileInput);
  
        axios.post('http://localhost:8000/api/monitoringWPM', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.wpm.push(response.data);
          this.clearNewEntry();
        })
        .catch(error => {
          console.error('Error adding entry:', error.response ? error.response.data : error.message);
        });
      },
      clearNewEntry() {
        this.newEntry = {
          text_field: '',
          travel_date: '',
          report_date: '',
          transmittal_date: '',
          released_date: '',
          mmd_personnel: '',
          MOVpdf: null
        };
        this.showModal = false;
      },

      openPDF(pdfPath) {
      const index = pdfPath.indexOf('/');
      const pdfFinalPath = pdfPath.slice(index + 1);
      const url = `http://localhost:8000/storage/${pdfFinalPath}`;
      if (pdfPath) {
        window.open(url, '_blank');
      } else {
        console.error('PDF URL not found');
      }
      },
      sortByDate(key) {
        this.sortKey = key;
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      },
      debouncedSearch: _.debounce(function() {
        this.fetchWPM();
      }, 300)
    },
    mounted() {
      this.fetchWPM();
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  