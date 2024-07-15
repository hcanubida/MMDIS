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
    <div class="mt-24">
      <Charts />
    </div>

    <!-- Search and Add Section -->
    <div class="flex justify-end mt-8">
        <SearchBar />
        <AddBtn />
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
              <th scope="col" class="text-center py-3">Proof of MOV Uploaded</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in filteredEntries" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ entry.month }}</td>
              <td class="px-6 py-4">{{ entry.travel_date }}</td>
              <td class="px-6 py-4">{{ entry.transmittal_date }}</td>
              <td class="px-6 py-4">{{ entry.released_date }}</td>
              <td class="text-center py-4">{{ entry.MMDPersonnel }}</td>
              <button @click="openPDF(entry.ProofOfMOV)" class="bg-red-500 text-white px-2 py-1 rounded ">View</button>
            </tr>
          </tbody>
        </table>
        <div v-if="filteredEntries.length === 0" class="text-center mt-4 text-gray-600 dark:text-gray-300">
          No results found.
        </div>
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
            no: 1,
            month: 'January',
            travel_date: '2024-01-01',
            transmittal_date: '2024-01-02',
            released_date: '2024-01-03',
            MMDPersonnel: 'Lowie M. Gonzales',
            ProofOfMOV: '',
          },
        ],
        searchQuery: '',
        sortKey: '',
        sortOrder: 'asc',
        showModal: false,
        newEntry: {
            month: '',
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
          entry.month.toLowerCase().includes(query)
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
            travel_date: '',
            transmittal_date: '',
            released_date: '',
            MMDPersonnel: '',
            ProofOfMOV: '',
        };
        this.showModal = false;
      },
    },
  };
  </script>