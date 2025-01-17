<template>
    <div>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    components: { Bar },
    props: {
      monthlyTotals: {
        type: Array,
        required: true
      }
    },
    computed: {
      chartData() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return {
          labels: months,
          datasets: [
            {
              label: 'Released',
              backgroundColor: '#9FE2BF',
              data: this.monthlyTotals
            }
          ]
        }
      },
      chartOptions() {
        return {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Released per Month'
            }
          }
        }
      }
    }
  }
  </script>