<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-44 justify-center font-bold text-center">
        <h1 class="text-4xl">Ore Sample Transport Certificate</h1>
      </div>
  
      <!-- Charts Section -->
      <div class="mt-24">
        <Charts />
      </div>
  
      <!-- Search and Add Section -->
      <div class="flex justify-end mt-8">
        <SearchBar />
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
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('dateReceivedByORD')">
                Date Received by ORD
                <span v-if="sortKey === 'dateReceivedByORD'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('dateReceivedByMMD')">
                Date Received by MMD
                <span v-if="sortKey === 'dateReceivedByMMD'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3">Payment Date</th>
              <th scope="col" class="px-6 py-3">Sample Inspection</th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('dateIssued')">
                Date Issued
                <span v-if="sortKey === 'dateIssued'" aria-label="Sorted ascending">
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
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ entry.client }}</td>
              <td class="px-6 py-4">{{ entry.certnum }}</td>
              <td class="px-6 py-4">{{ entry.dateReceivedByORD }}</td>
              <td class="px-6 py-4">{{ entry.dateReceivedByMMD }}</td>
              <td class="px-6 py-4">{{ entry.PaymentDate }}</td>
              <td class="px-6 py-4">{{ entry.sampleInspection }}</td>
              <td class="px-6 py-4">{{ entry.dateIssued }}</td>
              <td class="px-6 py-4">{{ entry.MMDPersonnel }}</td>
              <td class="px-6 py-4 text-center">
                <button @click="openPDF(entry.ProofOfMOV)" class="bg-red-500 text-white px-2 py-1 rounded">View</button>
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
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Client:</p>
                    <input type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Certification No.:</p>
                    <input type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Received By ORD:</p>
                    <input type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Received By MMD:</p>
                    <input type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Payment Date:</p>
                    <input type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Sample Inspection:</p>
                    <input type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Date Issued:</p>
                    <input type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">MMD Personnel:</p>
                    <input type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                    <div class="mt-2 flex justify-between">
                    <p class="mr-5">Proof of MOV:</p>
                    <input type="file" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    </div>
                </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button @click="showModal = false" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
                </button>
                <!-- Add request button -->
                <!-- Example: -->
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                Add
                </button>
            </div>
            </div>
        </div>
        </div>
        <!-- End Modal -->
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue'; // Import Header component
  import SearchBar from '../../components/MTSS/search-bar.vue'; // Import Search Bar component
  import AddBtn from '../../components/MTSS/add-btn.vue'; // Import Add Button component
  import UserBtn from '../../components/user-dbbtn.vue'; // Import User Button component
  import Charts from '../../components/MTSS/charts_OSTC.vue';
  import router from '../../router'; // Import your Vue Router instance
  
  export default {
    components: {
      Header,
      AddBtn,
      UserBtn,
      SearchBar,
      Charts,
    },
    data() {
      return {
        entries: [
        //
        ],
        searchQuery: '',
        sortKey: '',
        sortOrder: 'asc',
        showModal: false,
        newEntry: {
          client: '',
          certnum: '',
          dateReceivedByORD: '',
          dateReceivedByMMD: '',
          PaymentDate: '',
          sampleInspection: '',
          dateIssued: '',
          MMDPersonnel: '',
          ProofOfMOV: '',
        },
      };
    },
    computed: {
      filteredEntries() {
        const query = this.searchQuery.toLowerCase();
        return this.entries.filter(entry =>
          entry.client.toLowerCase().includes(query) ||
          entry.certnum.toLowerCase().includes(query)
        );
      },
    },
    methods: {
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
  
          return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });
      },
      addNewEntry() {
        this.entries.push({ ...this.newEntry });
        this.clearNewEntry();
        this.showModal = false;
      },
      clearNewEntry() {
        this.newEntry = {
          client: '',
          certnum: '',
          dateReceivedByORD: '',
          dateReceivedByMMD: '',
          PaymentDate: '',
          sampleInspection: '',
          dateIssued: '',
          MMDPersonnel: '',
          ProofOfMOV: '',
        };
        this.showModal = false;
      },
      openPDF(pdfUrl) {
        window.open(pdfUrl, '_blank');
      },
    },
  };
  </script>
  