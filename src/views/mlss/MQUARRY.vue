<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-44 justify-center font-bold text-center">
        <h1 class="text-4xl">Area Status Clearance</h1>
        <h2 class="text-2xl">Mountain Quarry</h2>
      </div>
  
      <!-- Search and Add New Data Section -->
      <div class="flex mt-8 justify-between">
        <form class="w-1/3 ml-4" @submit.prevent="searchData">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input v-model="searchQuery" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, province, city, barangay, status or remarks..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <div class="content-center">
          <!-- Modal toggle -->
          <button @click="showModal = true" class="mr-4 bg-green-900 p-2 text-white font-bold rounded-lg">Add New Data</button>
        </div>
      </div>
  
      <!-- Table Section -->
      <div class="mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">No.</th>
              <th scope="col" class="px-6 py-3">Names</th>
              <th scope="col" class="px-6 py-3">Area</th>
              <th scope="col" class="px-6 py-3">Province</th>
              <th scope="col" class="px-6 py-3">City/Municipality</th>
              <th scope="col" class="px-6 py-3">Barangay</th>
              <th scope="col" class="px-6 py-3">Sitio</th>
              <th scope="col" class="px-6 py-3">Lot No.</th>
              <th scope="col" class="px-6 py-3">Survey No.</th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('received')">
                Date Received
                <span v-if="sortBy === 'received'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('released')">
                Date Released
                <span v-if="sortBy === 'released'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in filteredEntries" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4">{{ index + 1 }}</td>
              <td class="px-6 py-4">{{ entry.name }}</td>
              <td class="px-6 py-4">{{ entry.area }}</td>
              <td class="px-6 py-4">{{ entry.province }}</td>
              <td class="px-6 py-4">{{ entry.city_municipality }}</td>
              <td class="px-6 py-4">{{ entry.barangay }}</td>
              <td class="px-6 py-4">{{ entry.sitio }}</td>
              <td class="px-6 py-4">{{ entry.lot_no }}</td>
              <td class="px-6 py-4">{{ entry.survey_no }}</td>
              <td class="px-6 py-4">{{ entry.received }}</td>
              <td class="px-6 py-4">{{ entry.released }}</td>
              <td class="px-6 py-4">{{ entry.status }}</td>
              <td class="px-6 py-4">{{ entry.remarks }}</td>
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
          <!-- Your form fields for adding new data -->
          <form @submit.prevent="addNewEntry">
            <!-- Example input fields -->
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" v-model="newEntry.name" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="area" class="block text-sm font-medium text-gray-700">Area</label>
              <input type="text" id="area" v-model="newEntry.area" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="province" class="block text-sm font-medium text-gray-700">Province</label>
              <select id="province" v-model="newEntry.province" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
                <option>Bukidnon</option>
                <option>Camiguin</option>
                <option>Lanao del Norte</option>
                <option>Misamis Occidental</option>
                <option>Misamis Oriental</option>
              </select>
            </div>
  
            <div class="mb-4">
              <label for="city_municipality" class="block text-sm font-medium text-gray-700">City/Municipality</label>
              <input type="text" id="city_municipality" v-model="newEntry.city_municipality" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="barangay" class="block text-sm font-medium text-gray-700">Barangay</label>
              <input type="text" id="barangay" v-model="newEntry.barangay" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="sitio" class="block text-sm font-medium text-gray-700">Sitio</label>
              <input type="text" id="sitio" v-model="newEntry.sitio" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
  
            <div class="mb-4">
              <label for="river" class="block text-sm font-medium text-gray-700">Lot No.</label>
              <input type="text" id="river" v-model="newEntry.river" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>

            <div class="mb-4">
              <label for="river" class="block text-sm font-medium text-gray-700">Survey No.</label>
              <input type="text" id="river" v-model="newEntry.river" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="received" class="block text-sm font-medium text-gray-700">Date Received</label>
              <input type="date" id="received" v-model="newEntry.received" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="released" class="block text-sm font-medium text-gray-700">Date Released</label>
              <input type="date" id="released" v-model="newEntry.released" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
              <input type="text" id="status" v-model="newEntry.status" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
            </div>
  
            <div class="mb-4">
              <label for="remarks" class="block text-sm font-medium text-gray-700">Remarks</label>
              <input type="text" id="remarks" v-model="newEntry.remarks" class="p-1 mt-1 block w-full bg-orange-100 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
    import router from '../../router';
  
  export default {
    components: {
      Header,
      UserBtn,
    },
    data() {
      return {
        entries: [
        {
            no: 1,
            name: 'MELITANTE, WILSON D.',
            area: '49,041',
            province: 'Misamis Oriental',
            city_municipality: 'Gingoog City',
            barangay: 'Malinao',
            sitio: '',
            lot_no: '',
            survey_no: '',
            received: 'February 27, 2024',
            released: 'April 1, 2024',
            status: 'Held in Abeyance',
            remarks: 'Amended',
          },
          {
            no: 2,
            name: 'PANCRUDO, RODOLFO L.',
            area: '15,030',
            province: 'Bukidnon',
            city_municipality: 'Manolo Fortich',
            barangay: 'Minsuro',
            sitio: '',
            lot_no: '',
            survey_no: '',
            received: 'December 15, 2023',
            released: 'January 15, 2024',
            status: 'Approved',
            remarks: 'New',
          },
          {
            no: 3,
            name: 'CASIÑO, JOSHUA JEROME',
            area: '20,464',
            province: 'Misamis Oriental',
            city_municipality: 'Tagoloan',
            barangay: 'Sta Ana',
            sitio: '',
            lot_no: '',
            survey_no: '',
            received: 'September 12, 2023',
            released: 'September 27, 2023',
            status: 'Approved',
            remarks: 'New',
          },
          {
            no: 4,
            name: 'ECHAVEZ, JUDY DIANE',
            area: '18,366',
            province: 'Lanao del Norte',
            city_municipality: 'Iligan City',
            barangay: 'Mainit',
            sitio: '',
            lot_no: '',
            survey_no: '',
            received: 'February 5, 2024',
            released: 'February 22, 2024',
            status: 'Approved',
            remarks: 'New',
          },
          {
            no: 5,
            name: 'CANETE, ALFONSO GIAN R.',
            area: '40,173',
            province: 'Lanao del Norte',
            city_municipality: 'Iligan City',
            barangay: 'Mandulog',
            sitio: '',
            lot_no: '',
            survey_no: '',
            received: 'March 15, 2023',
            released: 'April 20, 2023',
            status: 'Held in Abeyance',
            remarks: 'Amended',
          },
        ],
        searchQuery: '',
        sortKey: '',
        sortOrder: 'asc',
        showModal: false,
        newEntry: {
          name: '',
          area: '',
          province: '',
          city_municipality: '',
          barangay: '',
          sitio: '',
          lot_no: '',
          survey_no: '',
          received: '',
          released: '',
          status: '',
          remarks: '',
        },
      };
    },
    computed: {
      filteredEntries() {
        const query = this.searchQuery.toLowerCase();
        return this.entries.filter(entry =>
          entry.name.toLowerCase().includes(query) ||
          entry.area.toLowerCase().includes(query) ||
          entry.province.toLowerCase().includes(query) ||
          entry.city_municipality.toLowerCase().includes(query) ||
          entry.barangay.toLowerCase().includes(query) ||
          entry.sitio.toLowerCase().includes(query) ||
          entry.river.toLowerCase().includes(query) ||
          entry.status.toLowerCase().includes(query) ||
          entry.remarks.toLowerCase().includes(query)
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
      addNewEntry() {
        this.entries.push({ ...this.newEntry });
        this.clearNewEntry();
        this.showModal = false;
      },
      clearNewEntry() {
        this.newEntry = {
          name: '',
          area: '',
          province: '',
          city_municipality: '',
          barangay: '',
          sitio: '',
          lot_no: '',
          survey_no: '',
          received: '',
          released: '',
          status: '',
          remarks: '',
        };
        this.showModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles here */
  </style>
  