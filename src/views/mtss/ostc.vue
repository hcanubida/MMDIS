<template>
    <!-- Title Section -->
    <div class="flex flex-col mt-44 justify-center font-bold text-center">
      <h1 class="text-4xl">Ore Sample Transport Certificate</h1>
    </div>
  
    <!-- Charts Section -->
    <div class="mt-24">
      <Charts />
    </div>
  
    <div class="mt-8 w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md overflow-hidden">
      <div class="flex justify-end">
        <SearchBar />
        <AddBtn />
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
              <th scope="col" class="px-6 py-3">Proof of MOV Uploaded</th>
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
              <td class="px-6 py-4">{{ entry.ProofOfMOV }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="filteredEntries.length === 0" class="text-center mt-4 text-gray-600 dark:text-gray-300">
          No results found.
        </div>
      </div>
      <Header />
      <UserBtn />
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
            client: 'MELITANTE, WILSON D.',
            certnum: '49,041',
            dateReceivedByORD: '2024-01-01',
            dateReceivedByMMD: '2024-01-02',
            PaymentDate: '2024-02-01',
            sampleInspection: 'Passed',
            dateIssued: '2024-02-27',
            MMDPersonnel: 'John Doe',
            ProofOfMOV: 'Yes',
          },
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
    },
  };
  </script>