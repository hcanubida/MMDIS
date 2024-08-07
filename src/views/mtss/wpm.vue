<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-18 justify-center font-bold text-center">
        <h1 class="text-4xl">Work Program Monitoring</h1>
      </div>
  
      <!-- Chart Section -->
    <div class="flex w-full shadow-xl justify-center mt-2">
      <div class="flex flex-col bg-white text-gray-700 w-6/12 p-4 ">
        <!-- Bar Chart Section -->
        <div class="pt-6">
          <MonthBarChart :monthlyTotals="monthlyTotals" />
        </div>
      </div>
    </div>

    <!-- Total Sum Section -->
    <div class="flex bg-white justify-between pl-4 pt-4">
      <h2 class="flex text-xl font-semibold">
        The total sum of Work Program Monitoring Reports released for the year {{ year }} is {{ totalSum }}.
      </h2>
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
        <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search month, client, or mmd personnel ..." required />
      </div>
      <!-- Add Button -->
      <AddBtn @click="showModal = true" />
    </div>
  
      <!-- Table Section -->
      <div class="mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('month')">
                Month
                <span v-if="sortKey === 'month'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3">No.</th>
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
              <th scope="col" class="px-6 py-3 flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in filteredEntries" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">{{ entry.month }}</td>
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4" style="width: 300px;">{{ entry.text_field }}</td>
              <td class="px-6 py-4">{{ entry.travel_date_from }} to {{ entry.travel_date_to }}</td>
              <td class="px-6 py-4">{{ entry.report_date }}</td>
              <td class="px-6 py-4">{{ entry.transmittal_date }}</td>
              <td class="px-6 py-4">{{ entry.released_date }}</td>
              <td class="px-6 py-4">{{ entry.mmd_personnel }}</td>
              <td class="px-6 py-4 text-center">
                <button @click="openPDF(entry.MOVpdf)" class="bg-red-500 text-white px-2 py-1 rounded">View</button>
              </td>
              <td class="px-6 py-4 flex justify-center">
              <!-- edit entry -->
              <button @click="editEntry(index)" class="bg-grey-100 text-white px-2 py-1 rounded"><img src="../../assets/icons/edit.png" style="width: 25px;"></button> 
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
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Select Month:</p>
                    <select v-model="newEntry.month" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>JANUARY</option>
                      <option>FEBRUARY</option>
                      <option>MARCH</option>
                      <option>APRIL</option>
                      <option>MAY</option>
                      <option>JUNE</option>
                      <option>JULY</option>
                      <option>AUGUST</option>
                      <option>SEPTEMBER</option>
                      <option>OCTOBER</option>
                      <option>NOVEMBER</option>
                      <option>DECEMBER</option>
                    </select>
                  </div>
                  <div class="mt-2 flex flex-col">
                    <label for="text_field" class="text-gray-700">Work Program | Term and Conditions | Requirements of: (Field Monitoring)</label>
                    <textarea v-model="newEntry.text_field" id="text_field" rows="4" class="w-full bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Travel Date:</p>
                    <input v-model="newEntry.travel_date_from" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <p class="">to</p>
                    <input v-model="newEntry.travel_date_to" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
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
              <button @click="showModal = false" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
              <!-- Add request button -->
              <button @click="addNewEntry" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                Add
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
import MonthBarChart from '../../components/bymonth-barchart.vue';
import axios from 'axios';
import debounce from 'lodash/debounce';

export default {
  components: { Header, UserBtn, AddBtn, MonthBarChart },

  data() {
    return {
      wpm: [],
      searchQuery: '',
      sortKey: '',
      sortOrder: 'asc',
      showModal: false,
      newEntry: this.getEmptyEntry(),
      debouncedSearch: debounce(this.search, 300) // Add debounce method
    };
  },

  computed: {
    filteredEntries() {
      return this.getFilteredAndSortedData();
    },

    // Method to get the total count of entries for the latest year
    totalSum() {
      if (!this.wpm.length) return 0; // Check if wpm is empty
      
      // Find the latest year from the dataset
      const latestYear = Math.max(...this.wpm.map(item => {
        const year = new Date(item.released_date).getFullYear();
        return isNaN(year) ? 0 : year; // Handle invalid dates
      }));
      
      // Filter dataset for the latest year and count the entries
      const count = this.wpm.filter(wpm => new Date(wpm.released_date).getFullYear() === latestYear).length;
      console.log('Total Count for Latest Year:', count); // Log the total count
      
      return count;
    },

    monthlyTotals() {
      // Extract the latest year from the dataset
      const latestYear = Math.max(...(this.wpm || []).map(item => {
        const date = new Date(item.released_date);
        return isNaN(date.getTime()) ? 0 : date.getFullYear(); // Handle invalid dates
      }));

      // Initialize an array for 12 months
      const monthlyData = Array(12).fill(0);

      // Populate the monthlyData array
      (this.wpm || []).forEach(entry => {
        const releaseDate = new Date(entry.released_date);
        if (releaseDate.getFullYear() === latestYear && !isNaN(releaseDate.getTime())) {
          const month = releaseDate.getMonth(); // 0 = January, 11 = December
          monthlyData[month]++;
        }
      });

      return monthlyData;
    },

    year() {
      return new Date().getFullYear();
    }
  },
  methods: {
    getEmptyEntry() {
      return {
        month: '',
        text_field: '',
        travel_date_from: '',
        travel_date_to: '',
        report_date: '',
        transmittal_date: '',
        released_date: '',
        mmd_personnel: '',
        MOVpdf: null,
      };
    },

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
      const fileInput = this.$refs.MOVpdf.files[0] || null; // Use null if no file is selected

      if (fileInput && fileInput.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size exceeds 5MB.');
        return;
      }

      const formData = new FormData();
      formData.append('month', this.newEntry.month);
      formData.append('text_field', this.newEntry.text_field);
      formData.append('travel_date_from', this.newEntry.travel_date_from);
      formData.append('travel_date_to', this.newEntry.travel_date_to);
      formData.append('report_date', this.newEntry.report_date);
      formData.append('transmittal_date', this.newEntry.transmittal_date);
      formData.append('released_date', this.newEntry.released_date);
      formData.append('mmd_personnel', this.newEntry.mmd_personnel);
      if (fileInput) {
        formData.append('MOVpdf', fileInput);
      }

      axios.post('http://localhost:8000/api/monitoringWPM', formData)
        .then(response => {
          this.wpm.push(response.data);
          this.showModal = false;
          this.newEntry = this.getEmptyEntry();
          alert('Entry added successfully!');
        })
        .catch(error => {
          console.error('Error adding new entry:', error);
          alert('Some fields are required!');
        });
    },

    openPDF(pdfPath) {
      if (pdfPath) {
        const url = `http://localhost:8000/storage/${pdfPath.split('/').pop()}`;
        window.open(url, '_blank');
      } else {
        console.error('PDF URL not found');
      }
    },

    search() {
      axios.get(`http://localhost:8000/api/monitoringWPM/search?query=${this.searchQuery}`)
        .then(response => {
          this.wpm = response.data;
        })
        .catch(error => {
          console.error('Error searching for monitoringWPM:', error);
        });
    },

    getFilteredAndSortedData() {
      const query = this.searchQuery.toLowerCase();
      let filteredData = this.wpm.filter(entry =>
        entry.month.toLowerCase().includes(query) ||
        entry.text_field.toLowerCase().includes(query) ||
        entry.mmd_personnel.toLowerCase().includes(query)
      );

      if (this.sortKey) {
        filteredData.sort((a, b) => {
          const valA = a[this.sortKey];
          const valB = b[this.sortKey];
          if (valA < valB) return this.sortOrder === 'asc' ? -1 : 1;
          if (valA > valB) return this.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }

      return filteredData;
    },

    debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
  },

  mounted() {
    this.fetchWPM();
  }
};
</script>
