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
          <tr v-for="(entry, index) in filteredEntries" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ entry.client }}</td>
            <td class="px-6 py-4">{{ entry.certification_no }}</td>
            <td class="px-6 py-4">{{ entry.received_ord }}</td>
            <td class="px-6 py-4">{{ entry.received_mmd }}</td>
            <td class="px-6 py-4">{{ entry.payment_date }}</td>
            <td class="px-6 py-4">{{ entry.sample_inspection }}</td>
            <td class="px-6 py-4">{{ formatDate(entry.issued) }}</td>
            <td class="px-6 py-4">{{ entry.mmd_personnel }}</td>
            <td class="px-6 py-4 text-center">
              <button @click="openPDF(entry.MOVpdf)" class="bg-red-500 text-white px-2 py-1 rounded">View</button>
            </td>
            <td class="px-6 py-4 flex justify-center">
              <!-- edit entry -->
              <button @click="openEditModal(entry)" class="bg-grey-100 text-white px-2 py-1 rounded"><img src="../../assets/icons/edit.png" style="width: 25px;"></button> 
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
      newEntry: this.getEmptyEntry(),
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

  axios.post('http://localhost:8000/api/monitoringOSTC', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => {
    this.ostc.push(response.data);

    // Clear the form data
    this.newEntry = {
      client: '',
      certification_no: '',
      received_ord: '',
      received_mmd: '',
      payment_date: '',
      sample_inspection: '',
      issued: '',
      mmd_personnel: ''
    };

    // Reset the file input
    this.$refs.MOVpdf.value = '';

    // Close the modal
    this.showModal = false; // Assuming you use a flag to control visibility

  })
  .catch(error => {
    console.error('Error adding entry:', error.response ? error.response.data : error.message);
  });
},
sortByDate(key) {
  if (this.sortKey === key) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortKey = key;
    this.sortOrder = 'asc';
  }
},
    //
    //
    openEditModal(entry) {
      this.newEntry = { ...entry }; // Create a copy of the entry for editing
      this.isEditMode = true; // Set editing mode to true
      this.showModal = true; // Show the modal
      this.editIndex = this.ostc.findIndex(e => e === entry); // Find the index of the entry to be edited
    },
    // closeModal() {
    //   this.showModal = false;
    //   this.resetNewEntry();
    //   this.isEditMode = false;
    //   this.editIndex = -1;
    // },
    // resetNewEntry() {
    //   this.newEntry = this.getEmptyEntry();
    // },
    // saveEntry() {
    //   if (this.isEditMode) {
    //     // Update existing entry
    //     this.ostc.splice(this.editIndex, 1, this.newEntry);
    //   } else {
    //     // Add new entry
    //     this.ostc.push(this.newEntry);
    //   }
    //   this.closeModal();
    //   this.calculateTotalSum();
    //   this.calculateMonthlyTotals();
    //   this.filterEntries();
    // },
    //
    //
    getFilteredAndSortedData() {
      let filtered = this.ostc.filter(entry => {
        const query = this.searchQuery.toLowerCase();
        return (
          entry.client.toLowerCase().includes(query) ||
          entry.certification_no.toLowerCase().includes(query) ||
          entry.received_ord.toLowerCase().includes(query) ||
          entry.received_mmd.toLowerCase().includes(query) ||
          entry.payment_date.toLowerCase().includes(query) ||
          entry.sample_inspection.toLowerCase().includes(query) ||
          entry.issued.toLowerCase().includes(query) ||
          entry.mmd_personnel.toLowerCase().includes(query) ||
          entry.MOVpdf.toLowerCase().includes(query)
        );
      });

      if (this.sortKey) {
        filtered = filtered.sort((a, b) => {
          const dateA = new Date(a[this.sortKey]);
          const dateB = new Date(b[this.sortKey]);
          return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
      }

      return filtered;
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
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US');
    },
  },
  mounted() {
    this.fetchOSTC();
  }
};
</script>
