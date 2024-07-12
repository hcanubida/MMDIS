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
        <h2 class="text-2xl">Commercial Sand and Gravel</h2>
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
            <input v-model="searchQuery" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name, province, city, barangay, river, status or remarks..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <div class="content-center">
          <!-- Modal toggle -->
          <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="mr-4 bg-green-900 p-2 text-white font-bold rounded-lg" type="button">Add New Data</button>
        </div>
      </div>
  
      <!-- Main modal -->
      <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Data
              </h3>
              <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
              <!-- Add new data form goes here -->
              <form class="space-y-4" action="#">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                  <label for="area" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                  <input type="text" name="area" id="area" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <!-- Add more fields as needed -->
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Data</button>
              </form>
            </div>
          </div>
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
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('received')">
                Date Received
                <span v-if="sortOrder === 'asc' && sortBy === 'received'" aria-label="Sorted ascending">▲</span>
                <span v-if="sortOrder === 'desc' && sortBy === 'received'" aria-label="Sorted descending">▼</span>
              </th>
              <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortByDate('released')">
                Date Released
                <span v-if="sortOrder === 'asc' && sortBy === 'released'" aria-label="Sorted ascending">▲</span>
                <span v-if="sortOrder === 'desc' && sortBy === 'released'" aria-label="Sorted descending">▼</span>
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
    </div>
  </template>
  
  <script>
import Header from '../../components/header.vue';
import UserBtn from '../../components/user-dbbtn.vue';
import router from '../../router';
  
  export default {
    name: 'App',
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
            received: 'March 15, 2023',
            released: 'April 20, 2023',
            status: 'Held in Abeyance',
            remarks: 'Amended',
          },
        ],
        searchQuery: '',
        sortOrder: 'asc',
        sortBy: '', // Initialize sortBy as empty
      };
    },
    computed: {
      filteredEntries() {
        if (!this.searchQuery) {
          return this.entries;
        }
        const query = this.searchQuery.toLowerCase();
        return this.entries.filter((entry) =>
          entry.name.toLowerCase().includes(query) ||
          entry.province.toLowerCase().includes(query) ||
          entry.city_municipality.toLowerCase().includes(query) ||
          entry.barangay.toLowerCase().includes(query) ||
          entry.received.toLowerCase().includes(query) ||
          entry.released.toLowerCase().includes(query) ||
          entry.status.toLowerCase().includes(query) ||
          entry.remarks.toLowerCase().includes(query)
        );
      },
    },
    methods: {
      searchData() {
        // Perform search logic if needed
      },
      sortByDate(field) {
        // Toggle sorting order if the same column header is clicked
        if (this.sortBy === field) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortBy = field;
          this.sortOrder = 'asc';
        }
  
        // Sort entries array based on sortBy and sortOrder
        this.entries.sort((a, b) => {
          const dateA = new Date(a[field]);
          const dateB = new Date(b[field]);
  
          if (this.sortOrder === 'asc') {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });
      },
    },
  };
  </script>