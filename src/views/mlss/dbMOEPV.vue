<template>
  <div>
    <!-- Header and User Button Section -->
    <div class="flex">
      <Header />
      <UserBtn />
    </div>

    <!-- Title Section -->
    <div class="flex flex-col mt-18 justify-center font-bold text-center">
      <h1 class="text-4xl">Mineral Ore Export Permits</h1>
      <h2 class="text-2xl">Validation Report</h2>
    </div>

    <!-- Search and Add New Data Section -->
    <div class="flex mt-8 justify-between">
      <div class="flex w-2/5">
        <div class="rounded-l-lg content-center bg-blue-100 items-center pe-3 ml-5 ps-3 pointer-events-none">
            <svg class="w-8 h-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <div class="w-full">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="">
            <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search applicant, MOEP no., and permit no...." required />
          </div>
        </div>
      </div>
      <div class="content-center">
        <button @click="showModal = true" class="mr-4 bg-green-900 p-2 text-white font-bold rounded-lg">Add New Data</button>
      </div>
    </div>

    <!-- Table Section -->
    <div class="mt-8">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">No.</th>
            <th scope="col" class="px-6 py-3">Applicant</th>
            <th scope="col" class="px-6 py-3">MOEP No.</th>
            <th scope="col" class="px-6 py-3">Permit No.</th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('issued')">
              Date of Issuance
              <span v-if="sortBy === 'issued'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('validated')">
              Date of Validation
              <span v-if="sortBy === 'validated'" aria-label="Sorted ascending">
                <template v-if="sortOrder === 'asc'">▲</template>
                <template v-else>▼</template>
              </span>
            </th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(moep, index) in filteredMOEP" :key="index" class="bg-white border-b">
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ moep.applicant }}</td>
            <td class="px-6 py-4">{{ moep.moep_no }}</td>
            <td class="px-6 py-4">{{ moep.permit_no }}</td>
            <td class="px-6 py-4">{{ moep.issued }}</td>
            <td class="px-6 py-4">{{ moep.validated }}</td>
            <td class="px-6 py-4">
              <button @click="openPDF(moep.reportPDF)" class="bg-red-500 text-white px-2 py-1 rounded">View</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="filteredMOEP.length === 0" class="text-center mt-4 text-gray-600">
        No results found.
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div class="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <form @submit.prevent="addNewEntry">
          <div class="mb-4">
            <label for="applicant" class="block text-sm font-medium text-gray-700">Applicant</label>
            <input type="text" id="applicant" 
                   :value="formatInput(newEntry.applicant)" 
                   @input="updateEntry('applicant', $event.target.value)" 
                   class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                   required>
          </div>

          <div class="mb-4">
            <label for="moep_no" class="block text-sm font-medium text-gray-700">MOEP No.</label>
            <input type="text" id="moep_no" 
                   :value="formatInput(newEntry.moep_no)" 
                   @input="updateEntry('moep_no', $event.target.value)" 
                   class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                   required>
          </div>

          <div class="mb-4">
            <label for="permit_no" class="block text-sm font-medium text-gray-700">Permit No.</label>
            <input type="text" id="permit_no" 
                   :value="formatInput(newEntry.permit_no)" 
                   @input="updateEntry('permit_no', $event.target.value)" 
                   class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                   required>
          </div>

          <div class="mb-4">
            <label for="issued" class="block text-sm font-medium text-gray-700">Date of Issuance</label>
            <input type="date" id="issued" v-model="newEntry.issued" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="validated" class="block text-sm font-medium text-gray-700">Date of Validation</label>
            <input type="date" id="validated" v-model="newEntry.validated" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

          <div class="mb-4">
            <label for="reportPDF" class="block text-sm font-medium text-gray-700">Report (.pdf)</label>
            <input type="file" id="reportPDF" ref="reportPDF" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
          </div>

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
      moep: [],
      searchQuery: '',
      sortBy: '',
      sortOrder: 'asc',
      showModal: false,
      newEntry: this.getEmptyEntry(),
    };
  },
  computed: {
    filteredMOEP() {
      return this.getFilteredAndSortedData();
    },
  },
  methods: {
    getEmptyEntry() {
      return {
        applicant: '',
        moep_no: '',
        permit_no: '',
        issued: '',
        validated: '',
        reportPDF: null,
      };
    },
    formatInput(value) {
      return value ? value.toUpperCase() : '';
    },
    updateEntry(field, value) {
      this.newEntry[field] = value.toUpperCase();
    },
    fetchMOEP() {
      axios.get('http://localhost:8000/api/MOEP')
        .then(response => {
          this.moep = response.data;
        })
        .catch(error => {
          console.error('Error fetching MOEP:', error);
        });
    },
    addNewEntry() {
      const fileInput = this.$refs.reportPDF.files[0];
    if (fileInput && fileInput.size > 10 * 1024 * 1024) { // 10MB limit
      alert('File size exceeds 10MB.');
      return;
    }

  const formData = new FormData();
  formData.append('applicant', this.newEntry.applicant);
  formData.append('moep_no', this.newEntry.moep_no);
  formData.append('permit_no', this.newEntry.permit_no);
  formData.append('issued', this.newEntry.issued);
  formData.append('validated', this.newEntry.validated);
  formData.append('reportPDF', fileInput);

  axios.post('http://localhost:8000/api/MOEP', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => {
    this.moep.push(response.data);
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
      // Trigger re-computation of filteredMOEP
      this.filteredMOEP;
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
      const filtered = this.moep.filter(moep =>
        Object.values(moep).some(val => 
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
    }
  },
  mounted() {
    this.fetchMOEP();
  },
};
</script>
