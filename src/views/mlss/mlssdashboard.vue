<template>
  <div>
    <Header />
    <UserBtn />
    <div class="flex">

    <div class="relative flex flex-col bg-white bg-clip-border text-gray-700 shadow-md mt-24 w-6/12">
      <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
        <div class="w-max rounded-lg bg-gray-900 p-5 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
        </div>
        <div>
          <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">Area Status Clearance</h6>
          <p class="block max-w-sm font-sans text-sm font-normal leading-normal text-gray-700 antialiased">released in 2023</p>
        </div>
      </div>
      <div class="pt-6 px-2 pb-0">
        <div id="bar-chart"></div>
      </div>
    </div>

  <div class="relative flex flex-col bg-white bg-clip-border text-gray-700 shadow-md mt-24 w-6/12">
    <div class="py-6 mt-4 grid place-items-center px-2">
      <div id="pie-chart"></div>
    </div>
  </div>

  </div>

    <div class="flex flex-col items-center p-8 mt-4 m-4 rounded-3xl">
      <div class="grid grid-cols-2 gap-64">
        <button @click="toggleDropdown('isDropdownASC')" class="flex justify-center w-64 gap-4 text-lg mb-4 rounded-xl p-3 hover:bg-red-200 bg-orange-200" >
          Area Status Clearance
          <img class="w-2 m-2" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
        </button>
        <div v-if="isDropdownASC" class="absolute mt-16 w-36 bg-white rounded-lg shadow-lg z-10 text-left">
          <a v-for="(item, index) in areaStatusItems" :key="index" href="#" @click="openPDF(item.pdfUrl)" class="block mt-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-64 bg-orange-200">{{ item.label }}</a>
        </div>

        <button @click="toggleDropdown('isDropdownDatabase')" class="flex justify-center w-64 gap-4 text-lg mb-4 rounded-xl p-3 hover:bg-red-200 bg-orange-200" style="">
          Database
          <img class="w-2 m-2" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
        </button>
        <div v-if="isDropdownDatabase" class="absolute mt-14 w-36 bg-white rounded-lg shadow-lg z-10 text-center">
          <a href="#" @click="toDatabase" class="block mt-14 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Go to Database</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue';
import UserBtn from '../../components/user-dbbtn.vue';
import router from '../../router';
import ApexCharts from 'apexcharts';

export default {
  components: {
    Header,
    UserBtn
  },
  data() {
    return {
      isDropdownASC: false,
      areaStatusItems: [
        { label: 'C1: New No Conflict', pdfUrl: '../../assets/ASCpdf/Case 1 - final copy.pdf' },
        { label: 'C2: Amendment', pdfUrl: '../../assets/ASCpdf/Case 2 - final copy.pdf' },
        // Add other items as needed
      ]
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    toggleDropdown(dropdown) {
      this[dropdown] = !this[dropdown];
    },
    openPDF(pdfUrl) {
      window.open(pdfUrl, '_blank');
    },
    toDatabase() {
      router.push('/mlss/database');
    },
    initCharts() {
    // Bar chart configuration
    const barChartConfig = {
      series: [{ name: "Sales", data: [4, 26, 21, 19, 31, 18, 9, 20, 16, 15, 19, 19] }],
      chart: {
        type: "bar",
        height: 240,
        toolbar: { show: false },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Add months here
      },
      // Add other options as needed
    };
    const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartConfig);
    barChart.render();

    // Pie chart configuration
    const pieChartConfig = {
      series: [102, 23, 2, 41],
      labels: ['Bukidnon', 'Lanao del Norte', 'Misamis Occidental', 'Misamis Oriental'], // Change series names here
      chart: {
        type: "pie",
        width: 500,
        height: 500,
        toolbar: { show: false },
      },
      // Add other options as needed
    };
    const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartConfig);
    pieChart.render();
  }
  }
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>