<template>
    <Header></Header>
    
<div class="mt-28 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
    <div class="w-max rounded-lg bg-gray-900 p-5 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        ></path>
      </svg>
    </div>
    <div>
      <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
        Annual Statistics for Ore Sample Transport Certificates 
      </h6>
      <p class="block max-w-sm font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
        Here is the visualization of Ore Sample Transport Certificates issued annually.
      </p>
    </div>
  </div>
  <div class="py-6 mt-4 grid place-items-center px-2">
    <div id="pie-chart"></div>
  </div>
</div>
    <div class="ostc">
        <div class="relative overflow-x-auto mt-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Client
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Certication No.
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date Received by ORD
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date Received by MMD
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Payment Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Sample Inspection
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date Issued
                    </th>
                    <th scope="col" class="px-6 py-3">
                        MMD Personnel
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Proof of MOV Uploaded
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">
                        White
                    </td>
                    <td class="px-6 py-4">
                        Laptop PC
                    </td>
                    <td class="px-6 py-4">
                        $1999
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">
                        Black
                    </td>
                    <td class="px-6 py-4">
                        Accessories
                    </td>
                    <td class="px-6 py-4">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>



</template>

<script>
import Header from '../../components/header.vue'; // Import Header component
import '../../assets/mtss.css';
import router from '../../router'; // Import your Vue Router instance

export default {
    components: {
        Header // Register Header component
    },
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const chartConfig = {
                series: [44, 55],
                chart: {
                    type: "pie",
                    width: 280,
                    height: 280,
                },
                title: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ["#020617", "#ff8f00"],
                legend: {
                    show: false,
                },
            };

            const chart = new ApexCharts(document.querySelector("#pie-chart"), chartConfig);
            chart.render();
        }
    }
};
</script>