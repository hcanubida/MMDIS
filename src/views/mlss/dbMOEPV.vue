<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex justify-between items-center p-4 bg-gray-100">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-20 items-center text-center font-bold">
        <h1 class="text-4xl">Mineral Ore Export Permit</h1>
        <h2 class="text-2xl">Shipment Validation</h2>
      </div>
  
      <!-- Search and Add New Data Section -->
      <div class="flex mt-8 justify-between items-center">
        <form class="w-1/3 ml-4" @submit.prevent="searchData">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input v-model="searchQuery" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search application, and permit number..." required />
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <div class="mr-4">
          <button @click="showModal = true" class="bg-green-900 p-2 text-white font-bold rounded-lg">Add New Data</button>
        </div>
      </div>
  
      <!-- Table Section -->
      <div class="mt-8 px-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">No.</th>
              <th scope="col" class="px-6 py-3">Applicant</th>
              <th scope="col" class="px-6 py-3">MOEP No.</th>
              <th scope="col" class="px-6 py-3">Permit No.</th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('date_issuance')">
                Date of Issuance
                <span v-if="sortKey === 'date_issuance'">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('date_validation')">
                Date of Validation
                <span v-if="sortKey === 'date_validation'">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in filteredEntries" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ entry.applicant }}</td>
              <td class="px-6 py-4">{{ entry.MOEP_no }}</td>
              <td class="px-6 py-4">{{ entry.permit_no }}</td>
              <td class="px-6 py-4">{{ entry.date_issuance }}</td>
              <td class="px-6 py-4">{{ entry.date_validation }}</td>
              <td class="px-6 py-4">
                <button @click="openPDF(entry.reportPDF)" class="bg-red-500 text-white px-2 py-1 rounded">View</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="filteredEntries.length === 0" class="text-center mt-4 text-gray-600 dark:text-gray-300">
          No results found.
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div class="bg-white w-1/2 p-6 rounded-lg shadow-lg">
          <form @submit.prevent="addNewEntry">
            <div class="mb-4">
              <label for="applicant" class="block text-sm font-medium text-gray-700">Applicant</label>
              <input type="text" id="applicant" v-model="newEntry.applicant" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
              <label for="MOEP_no" class="block text-sm font-medium text-gray-700">MOEP No.</label>
              <input type="text" id="MOEP_no" v-model="newEntry.MOEP_no" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
              <label for="permit_no" class="block text-sm font-medium text-gray-700">Permit No.</label>
              <input type="text" id="permit_no" v-model="newEntry.permit_no" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
              <label for="date_issuance" class="block text-sm font-medium text-gray-700">Date of Issuance</label>
              <input type="date" id="date_issuance" v-model="newEntry.date_issuance" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
              <label for="date_validation" class="block text-sm font-medium text-gray-700">Date of Validation</label>
              <input type="date" id="date_validation" v-model="newEntry.date_validation" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
            <div class="mb-4">
              <label for="reportPDF" class="block text-sm font-medium text-gray-700">Upload</label>
              <input type="file" id="reportPDF" @change="handleFileUpload" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
            <div class="mt-6 flex justify-end">
              <button type="submit" class="mr-2 bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Save</button>
              <button @click="clearNewEntry" type="button" class="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import UserBtn from '../../components/user-dbbtn.vue';
  
  export default {
    components: {
      Header,
      UserBtn,
    },
    data() {
      return {
        entries: [
          {
            applicant: 'GRAVELDEN, INC.',
            MOEP_no: 'MOEP-MGB-X-2024-04-003',
            permit_no: 'IP-000011-X (1st Renewal)',
            date_issuance: '2024-04-12',
            date_validation: '2024-04-25',
            reportPDF: 'MOEPVpdf/GRAVELDEN_INC_20240425.pdf',    
          }
        ],
        searchQuery: '',
        sortKey: '',
        sortOrder: 'asc',
        showModal: false,
        newEntry: {
          applicant: '',
          permit_no: '',
          date_issuance: '',
          date_validation: '',
          reportPDF: null,
        },
      };
    },
    computed: {
      filteredEntries() {
        const query = this.searchQuery.toLowerCase();
        return this.entries.filter(entry =>
          entry.applicant.toLowerCase().includes(query) ||
          entry.permit_no.toLowerCase().includes(query)
        );
      },
    },
    methods: {
      searchData() {
        // Implement search functionality if needed
      },
      sortByDate(key) {
        if (this.sortKey === key) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortKey = key;
          this.sortOrder = 'asc';
        }
  
        this.entries.sort((a, b) => {
          const dateA = new Date(a[key]);
          const dateB = new Date(b[key]);
  
          if (this.sortOrder === 'asc') {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });
      },
      handleFileUpload(event) {
        this.newEntry.reportPDF = event.target.files[0];
      },
      addNewEntry() {
        this.entries.push({ ...this.newEntry });
        this.clearNewEntry();
        this.showModal = false;
      },
      clearNewEntry() {
        this.newEntry = {
          applicant: '',
          permit_no: '',
          date_issuance: '',
          date_validation: '',
          reportPDF: null,
        };
        this.showModal = false;
      },
      openPDF(reportPDF) {
        window.open(window.location.origin + "/" + reportPDF, '_blank');
      }
    },
  };
  </script>
  