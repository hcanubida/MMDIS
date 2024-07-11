<template>
  <div class="flex w-full">
    <!-- Left Content Section: Area Status Clearance -->
    <div class="relative flex flex-col bg-white text-gray-700 w-6/12 p-4">
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <!-- Icon Section -->
        <div class="bg-gray-900 p-5 text-white rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
        </div>
        <!-- Text Section -->
        <div>
          <h6 class="font-semibold text-blue-gray-900">Area Status Clearance</h6>
          <p class="text-sm text-gray-700">released in <span id="release-year">{{ year }}</span></p>
        </div>
      </div>
      <!-- Bar Chart Section -->
      <div class="pt-6">
        <div id="bar-chart"></div>
      </div>
    </div>

    <!-- Right Content Section: Pie Chart -->
    <div class="relative flex flex-col bg-white text-gray-700 w-6/12 p-4">
      <div class="py-6 grid place-items-center">
        <div id="pie-chart"></div>
      </div>
    </div>
  </div>

  <div class="flex justify-between p-2 relative shadow-md">
    <h2 class="flex text-xl font-semibold">The grand total Area Status Clearance released for this year is {{ totalSum }}.</h2>
    <button @click="showModal = true" class="text-green-600">UPDATE</button>
  </div>

  <!-- Modal -->
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg w-1/2">
      <h2 class="text-xl mb-4">Update Charts Data</h2>
      <form @submit.prevent="updateCharts">
        <div class="mb-4">
          <label for="year" class="block text-gray-700">Year</label>
          <input type="text" id="year" v-model="year" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="bar-data" class="block text-gray-700">Bar Chart Data (comma-separated)</label>
          <input type="text" id="bar-data" v-model="barDataInput" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="pie-data" class="block text-gray-700">Pie Chart Data (comma-separated)</label>
          <input type="text" id="pie-data" v-model="pieDataInput" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="flex justify-end">
          <button type="submit" class="text-green-600 mr-2">Confirm</button>
          <button type="button" @click="showModal = false" class="text-red-600">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ApexCharts from 'apexcharts';

export default {
  data() {
    return {
      showModal: false,
      year: '',
      barDataInput: '',
      pieDataInput: '',
      barChart: null,
      pieChart: null,
    };
  },
  mounted() {
    this.initCharts();
    this.fetchLatestChartData(); // Fetch latest chart data on component mount
  },
  computed: {
    totalSum() {
      if (this.barChart && this.barChart.w.globals) {
        const data = this.barChart.w.globals.series[0];
        return data.reduce((acc, value) => acc + value, 0);
      }
      return 0;
    },
  },
  methods: {
    initCharts() {
      // Bar chart configuration
      const barChartConfig = {
        series: [{ name: "Released", data: [16, 15, 11, 28, 8, 4, 0, 0, 0, 0, 0, 0] }], // Placeholder, data will be updated dynamically
        chart: {
          type: "bar",
          height: 240,
          toolbar: { show: false },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      };
      this.barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartConfig);
      this.barChart.render();

      // Pie chart configuration
      const pieChartConfig = {
        series: [45, 0, 13, 5, 19],
        labels: ['Bukidnon','Camiguin', 'Lanao del Norte', 'Misamis Occidental', 'Misamis Oriental'],
        chart: {
          type: "pie",
          width: 500,
          height: 500,
          toolbar: { show: false },
        },
      };
      this.pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartConfig);
      this.pieChart.render();
    },
    fetchLatestChartData() {
      axios.get('/api/chart-data/fetch-latest')
        .then(response => {
          this.year = response.data.year;
          this.barDataInput = response.data.barData.join(',');
          this.pieDataInput = response.data.pieData.join(',');
          this.barChart.updateSeries([{ name: "Released", data: response.data.barData }]);
          this.pieChart.updateSeries(response.data.pieData);
        })
        .catch(error => {
          console.error('Failed to fetch latest chart data', error);
          // Optionally handle error feedback
        });
    },
    updateCharts() {
      const data = {
        year: this.year,
        barData: this.barDataInput,
        pieData: this.pieDataInput,
      };
      axios.post('/api/chart-data/update', data)
        .then(response => {
          console.log('Charts data updated successfully');
          this.fetchLatestChartData(); // Fetch the latest data after updating
        })
        .catch(error => {
          console.error('Failed to update chart data', error);
          // Optionally handle error feedback
        });
      this.showModal = false;
    },
  },
};
</script>