<template>
  <div class="piechart">
      <Pie
       id="my-chart-id" 
      :options="chartOptions" 
      :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
      return {
          chartData: {
              labels: ['Bukidnon', 'Misamis Oriental', 'Misamis Occidental', 'Lanao del Norte','Camiguin','Cagayan de Oro City','Iligan City'],
              datasets: [
                  {
                      backgroundColor: ['#41B883', '#E46651', '#00D800', '#DD1B16', '#00D8FF', '#DD1B16', '#00D800'],
                      data: [30, 20, 20, 10,10,10]
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
.piechart{
    display: flex;
    flex-wrap: wrap;
}
</style>