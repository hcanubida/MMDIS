<template>
  <div>
    <!-- Header and User Button Section -->
    <div class="flex">
      <Header />
      <UserBtn />
    </div>

    <!-- Title Section -->
    <div class="flex flex-col mt-18 justify-center font-bold text-center">
      <h1 class="text-4xl">Ore Sample Transport Certificate</h1>
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
        The total sum of Ore Sample Transport Certificates released for the year {{ year }} is {{ totalSum }}.
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
        <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search client and certification no ..." required />
      </div>
      <!-- Add Button -->
      <AddBtn @click="showModal = true" />
    </div>

    <!-- Table Section -->
    <div class="mt-8">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Client</th>
            <th scope="col" class="px-6 py-3">Certification No.</th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('received_ord')">
              Date Received by ORD
              <span v-if="sortKey === 'received_ord'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('received_mmd')">
              Date Received by MMD
              <span v-if="sortKey === 'received_mmd'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('payment_date')">Payment Date
              <span v-if="sortKey === 'payment_date'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('sample_inspection')">Sample Inspection
              <span v-if="sortKey === 'sample_inspection'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('issued')">
              Date Issued
              <span v-if="sortKey === 'issued'" aria-label="Sorted ascending">
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
          <!-- :key="entry.id" -->
          <tr v-for="(entry, index) in filteredEntries" :key="entry.no" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> 
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ entry.client }}</td>
            <td class="px-6 py-4">{{ entry.certification_no }}</td>
            <td class="px-6 py-4">{{ entry.received_ord }}</td>
            <td class="px-6 py-4">{{ entry.received_mmd }}</td>
            <td class="px-6 py-4">{{ entry.payment_date }}</td>
            <td class="px-6 py-4">{{ entry.sample_inspection }}</td>
            <td class="px-6 py-4">{{ entry.issued }}</td>
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

      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- Modal content -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Client:</p>
                    <input v-model="newEntry.client" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Certification No.:</p>
                    <input v-model="newEntry.certification_no" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Received By ORD:</p>
                    <input v-model="newEntry.received_ord" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Received By MMD:</p>
                    <input v-model="newEntry.received_mmd" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Payment Date:</p>
                    <input v-model="newEntry.payment_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Sample Inspection:</p>
                    <input v-model="newEntry.sample_inspection" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Issued:</p>
                    <input v-model="newEntry.issued" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">MMD Personnel:</p>
                    <input v-model="newEntry.mmd_personnel" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Proof of MOV Uploaded:</p>
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
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal -->
      <!-- Update Modal -->
      <div v-if="showUpdateModal" class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- Background overlay -->
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- Modal content -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Client:</p>
                    <input v-model="editEntryData.client" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Certification No.:</p>
                    <input v-model="editEntryData.certification_no" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Received By ORD:</p>
                    <input v-model="editEntryData.received_ord" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Received By MMD:</p>
                    <input v-model="editEntryData.received_mmd" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Payment Date:</p>
                    <input v-model="editEntryData.payment_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Sample Inspection:</p>
                    <input v-model="editEntryData.sample_inspection" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Issued:</p>
                    <input v-model="editEntryData.issued" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">MMD Personnel:</p>
                    <input v-model="editEntryData.mmd_personnel" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Proof of MOV Uploaded:</p>
                    <input ref="editMOVpdf" type="file" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button @click="showUpdateModal = false" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
              <!-- Update Button -->
              <button @click="updateEntry()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue'; // Import Header component
import AddBtn from '../../components/MTSS/add-btn.vue'; // Import Add Button component
import UserBtn from '../../components/user-dbbtn.vue'; // Import User Button component
import MonthBarChart from '../../components/bymonth-barchart.vue';
import axios from 'axios';
import debounce from 'lodash/debounce';

export default {
  components: { Header, UserBtn, AddBtn, MonthBarChart },

  data() {
    return {
      ostc: [],
      searchQuery: '',
      sortKey: '',
      sortOrder: 'asc',
      showModal: false,
      showUpdateModal: false,
      currentIndex: null,
      newEntry: this.getEmptyEntry(),
      editEntryData: this.getEmptyEntry(),
      debouncedSearch: this.debounce(this.search, 300) // Add debounce method
    };
  },

  computed: {
    filteredEntries() {
      return this.getFilteredAndSortedData();
    },
    totalSum() {
      const latestYear = Math.max(...this.ostc.map(item => new Date(item.issued).getFullYear()));
      return this.ostc
        .filter(ostc => new Date(ostc.issued).getFullYear() === latestYear)
        .length;
    },
    monthlyTotals() {
      const latestYear = Math.max(...(this.ostc || []).map(item => new Date(item.issued).getFullYear()));
      const monthlyData = Array(12).fill(0); // Initialize an array for 12 months

      (this.ostc || []).forEach(entry => {
        const releaseDate = new Date(entry.issued);
        if (releaseDate.getFullYear() === latestYear) {
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
        client: '',
        certification_no: '',
        received_ord: '',
        received_mmd: '',
        payment_date: '',
        sample_inspection: '',
        issued: '',
        mmd_personnel: '',
        MOVpdf: null,
      };
    },
    fetchOSTC() {
      axios.get('http://localhost:8000/api/monitoringOSTC')
        .then(response => {
          console.log('Fetched data:', response.data); // Debug log
          this.ostc = response.data;
        })
        .catch(error => {
          console.error('Error fetching monitoringOSTC:', error);
        });
    },

    addNewEntry() {
      const fileInput = this.$refs.MOVpdf.files[0] || null; // Use null if no file is selected

      if (fileInput && fileInput.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size exceeds 5MB.');
        return;
      }

      const formData = new FormData();
      formData.append('client', this.newEntry.client);
      formData.append('certification_no', this.newEntry.certification_no);
      formData.append('received_ord', this.newEntry.received_ord);
      formData.append('received_mmd', this.newEntry.received_mmd);
      formData.append('payment_date', this.newEntry.payment_date);
      formData.append('sample_inspection', this.newEntry.sample_inspection);
      formData.append('issued', this.newEntry.issued);
      formData.append('mmd_personnel', this.newEntry.mmd_personnel);
      if (fileInput) {
        formData.append('MOVpdf', fileInput);
      }

      axios.post('http://localhost:8000/api/monitoringOSTC', formData)
        .then(response => {
          this.ostc.push(response.data);
          this.showModal = false;
          this.newEntry = this.getEmptyEntry();
          alert('Entry added successfully!');
        })
        .catch(error => {
          console.error('Error adding new entry:', error);
          alert('Client, Certification No., and Date Issued fields are required!');

        });
    },

    editEntry(index) {
      this.currentIndex = index;
      this.editEntryData = { ...this.ostc[index] };
      this.showUpdateModal = true;
    },

    updateEntry() {
    // Get the file input
    const fileInput = this.$refs.editMOVpdf.files[0] || null;

    // Check file size
    if (fileInput && fileInput.size > 5 * 1024 * 1024) { // 5MB limit
      alert('File size exceeds 5MB.');
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('client', this.editEntryData.client);
    formData.append('certification_no', this.editEntryData.certification_no);
    formData.append('received_ord', this.editEntryData.received_ord);
    formData.append('received_mmd', this.editEntryData.received_mmd);
    formData.append('payment_date', this.editEntryData.payment_date);
    formData.append('sample_inspection', this.editEntryData.sample_inspection);
    formData.append('issued', this.editEntryData.issued);
    formData.append('mmd_personnel', this.editEntryData.mmd_personnel);
    
    // Append file if present
    if (fileInput) {
      formData.append('MOVpdf', fileInput);
    }

    // Debug log to check data before sending
    console.log('Updating entry with data:', this.editEntryData);

    // Ensure the API endpoint and method are correct
    axios.put(`http://localhost:8000/api/monitoringOSTC/${this.editEntryData.no}`, formData)
      .then(response => {
        // Debug log to check response
        console.log('Update response:', response.data);

        // Find index to update in the local data
        const index = this.ostc.findIndex(entry => entry.no === this.editEntryData.no);
        
        if (index !== -1) {
          // Update local data
          this.$set(this.ostc, index, response.data);
        }

        // Reset form and hide modal
        this.showUpdateModal = false;
        this.currentIndex = null;
        this.editEntryData = this.getEmptyEntry();
        alert('Entry updated successfully!');
      })
      .catch(error => {
        console.error('Error updating entry:', error);
        alert('Failed to update the entry.');
      });
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

    search() {
      axios.get(`http://localhost:8000/api/monitoringOSTC/search?query=${this.searchQuery}`)
        .then(response => {
          this.ostc = response.data;
        })
        .catch(error => {
          console.error('Error searching for monitoringOSTC:', error);
        });
    },

    debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },

    getFilteredAndSortedData() {
      const query = this.searchQuery.toLowerCase();
      let filteredData = this.ostc.filter(entry =>
        entry.client.toLowerCase().includes(query) ||
        entry.certification_no.toLowerCase().includes(query) ||
        entry.received_ord.toLowerCase().includes(query) ||
        entry.received_mmd.toLowerCase().includes(query) ||
        entry.payment_date.toLowerCase().includes(query) ||
        entry.sample_inspection.toLowerCase().includes(query) ||
        entry.issued.toLowerCase().includes(query) ||
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
    }
  },

  mounted() {
    this.fetchOSTC();
  }
};
</script>
