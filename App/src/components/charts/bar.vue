<template>
  <div class="container">
    <div class="bartable">
      <div class="box">
        <h1>Bukidnon</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData1" />
      </div>

      <div class="box">
        <h1>Misamis Oriental</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData2" />
      </div>

      <div class="box">
        <h1>Misamis Occidental</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData3" />
      </div>


      <div class="box">
        <h1>Lanao del Norte</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData4" />
      </div>
      <div class="box">
        <h1>Camiguin</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData5" />
      </div>

      <div class="box">
        <h1>Cagayan de Oro City</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData6" />
      </div>


      <div class="box">
        <h1>Iligan City</h1>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData7" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'bar',
  components: { Bar },
  data() {
    return {
      chartData1: {
        labels: ['District 1', 'District 2', 'District 3', 'District 4'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16',],
            data: [40, 20, 70, 10]
          }
        ]
      },
      chartData2: {
        labels: ['District 1', 'District 2'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: [40, 20,]
          }
        ]
      },
      chartData3: {
        labels: ['District 1'],
        datasets: [
          {
            backgroundColor: ['#41B883'],
            data: [40]
          }
        ]
      },
      chartData4: {
        labels: ['District 1'],
        datasets: [
          {
            backgroundColor: ['#41B883'],
            data: [40]
          }
        ]
      },
      chartData5: {
        labels: ['District 1'],
        datasets: [
          {
            backgroundColor: ['#41B883'],
            data: [40]
          }
        ]
      },
      chartData6: {
        labels: ['District 1'],
        datasets: [
          {
            backgroundColor: ['#41B883'],
            data: [40]
          }
        ]
      },
      chartData7: {
        labels: ['District 1'],
        datasets: [
          {
            backgroundColor: ['#41B883'],
            data: [40]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
<style scoped>
.bartable{
  display: grid;
  grid-template-columns:
  repeat(auto-fit, minmax(250px, 2fr));
  margin: 10px;
  grid-gap: 1rem;
}
.box {
  flex: 1 0 400px;
  height: 200px;
}
</style>