<template>
  <div>
    <!-- Header and User Button Section -->
    <div class="flex">
      <Header />
      <UserBtn />
    </div>

    <!-- Title Section -->
    <div class="flex flex-col mt-44 justify-center font-bold text-center">
        <h1 class="text-4xl">Inventory</h1>
    </div>
  
  
    <!-- Charts Section -->
    <div class="mt-8">
      <Charts />
    </div>

    <!-- Search and Add Section -->
    <div class="flex justify-end mt-4">
      <SearchBar v-model="searchQuery" />
      <AddBtn @click="showModal = true" />
    </div>

    <!-- Table Section -->
    <div class="mt-8">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Month</th>
            <th scope="col" class="px-6 py-3">Location</th>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('travel_date')">
              Travel Date
              <span v-if="sortKey === 'travel_date'" aria-label="Sorted ascending">
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
            <td class="px-6 py-4">{{ entry.month }}</td>
            <td class="px-6 py-4">{{ entry.location }}</td>
            <td class="px-6 py-4">{{ entry.travel_date }}</td>
            <td class="px-6 py-4">{{ entry.transmittal_date }}</td>
            <td class="px-6 py-4">{{ entry.released_date }}</td>
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
                  <p class="mr-5">Month:</p>
                  <select v-model="newEntry.month" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                  </select>
                </div>
                <div class="mt-2 flex justify-between">
                  <p class="mr-5">Location:</p>
                  <input v-model="newEntry.location" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div class="mt-2 flex justify-between">
                  <p class="mr-5">Travel Date:</p>
                  <input v-model="newEntry.travel_date" type="date" class="pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
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
                  <input v-model="newEntry.MMDPersonnel" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
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
            <button @click="addNewEntry" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Add
            </button>
            <button @click="showModal = false" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
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
    Header, // Register Header component
    AddBtn,
    UserBtn,
    SearchBar,
    Charts,
  },
  data() {
    return {
      entries: [
        {
          month: 'January',
          location: 'Bukidnon',
          travel_date: '2024-01-01',
          transmittal_date: '2024-01-02',
          released_date: '2024-01-03',
          MMDPersonnel: 'Coleen Balais',
          ProofOfMOV: '',
        },
        {
          month: 'February',
          location: 'Camiguin',
          travel_date: '2024-01-01',
          transmittal_date: '2024-01-02',
          released_date: '2024-01-03',
          MMDPersonnel: 'Lowie M. Gonzales',
          ProofOfMOV: '',
        },
        {
          month: 'March',
          location: 'Lanao del Norte',
          travel_date: '2024-01-01',
          transmittal_date: '2024-01-02',
          released_date: '2024-01-03',
          MMDPersonnel: 'Ayanni Dayan Cale',
          ProofOfMOV: '',
        },
        {
          month: 'April',
          location: 'Misamis Occidental',
          travel_date: '2024-01-01',
          transmittal_date: '2024-01-02',
          released_date: '2024-01-03',
          MMDPersonnel: 'Reiner Baldomero',
          ProofOfMOV: '',
        },
        {
          month: 'May',
          location: 'Misamis Oriental',
          travel_date: '2024-01-01',
          transmittal_date: '2024-01-02',
          released_date: '2024-01-03',
          MMDPersonnel: 'Earl Venn Kirby Budiongan',
          ProofOfMOV: '',
        },
      ],
      searchQuery: '',
      sortKey: '',
      sortOrder: 'asc',
      showModal: false,
      newEntry: {
        month: '',
        location: '',
        travel_date: '',
        transmittal_date: '',
        released_date: '',
        MMDPersonnel: '',
        ProofOfMOV: '',
      },
    };
  },
  computed: {
    filteredEntries() {
      const query = this.searchQuery.toLowerCase();
      return this.entries.filter(entry =>
        entry.month.toLowerCase().includes(query) ||
        entry.location.toLowerCase().includes(query)
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

        if (this.sortOrder === 'asc') {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
    },
    addNewEntry() {
      this.entries.push({ ...this.newEntry });
      this.clearNewEntry();
      this.showModal = false;
    },
    clearNewEntry() {
      this.newEntry = {
        month: '',
        location: '',
        travel_date: '',
        transmittal_date: '',
        released_date: '',
        MMDPersonnel: '',
        ProofOfMOV: '',
      };
      this.showModal = false;
    },
    openPDF(proofOfMOV) {
      // Implement your PDF viewer functionality here
      console.log('Opening PDF:', proofOfMOV);
    },
  },
};
</script>
