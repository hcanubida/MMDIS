<template>
    <div class="moeptable">
        <div class="flex lg:justify-end mb-5 ">
            <button class="moepbutton" @click="navigateTomodal">Add Application</button>
        </div>
  
        <div class= "moep_scrollable">
            <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <!-- <table> -->
                <thead class="sticky top-0 z-50 border-y-50">
                    <tr style="background-color: #e6cfaf;">
                        <th class="moepth">Application No.</th>
                        <th class="moepth">Status</th>
                        <th class="moepth">Tenement Name</th>
                        <th class="moepth">Area (Hectares)</th>
                        <th class="moepth">Date Filed</th>
                        <th class="moepth">Barangay</th>
                        <th class="moepth">City</th>
                        <th class="moepth">Province</th>
                        <th class="moepth">Commodity</th>
                        <th class="moepth">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="moeptd">{{ detail.id }}</td>
                        <td class="moeptd">{{ detail.status }}</td>
                        <td class="moeptd">{{ detail.tenement_name }}</td>
                        <td class="moeptd">{{ detail.area_hectares }}</td>
                        <td class="moeptd">{{ detail.date_filed }}</td>
                        <td class="moeptd">{{ detail.barangay }}</td>
                        <td class="moeptd">{{ detail.city }}</td>
                        <td class="moeptd">{{ detail.province }}</td>
                        <td class="moeptd">{{ detail.commodity }}</td>
                        <td class="moeptd">
                            <button class="text-red-500" @click="navigateTomodalView(detail.id)">
                                View
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  
  import { addDetail10, viewDetail10, detailToggle10, detail_id10 } from '../dashboards/MOEP-dashboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
        return {
            details: [],
            addDetail10: false,
            viewDetail10: false,
            detail_id10: null
        };
    },
    mounted() {
        this.fetchDetails();
    },
    methods: {
        async fetchDetails() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.filter(det => det.application == 'moep');
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        navigateTomodal() {
            addDetail10.value = true// Define your navigation logic here
        },
        navigateTomodalView(id) {
            detail_id10.value = id
            viewDetail10.value = true// Define your navigation logic here
        },
    }
  };
  
  
  </script>
  
  <style>
  .moepbutton {
    text-align: center;
    padding: 10px;
    margin: 1rem;
    width: 250px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: #eacda3;
    color: white;
    cursor: pointer;
  }
  
  .moeptable {
    flex: auto;
    flex-direction: column;
    margin-left: 20px;
    border-collapse: collapse;
    width: 100%;
  }
  
  #table {
    width: 100%;
    margin: auto;
    height: auto;
  }
  
  .moep_scrollable {
    /* Adjust the maximum height as needed */
    margin: 15px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175);
    max-height:200px; 
    overflow-y: auto; 
  }
  
  .moepth,
  .moeptd {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
  }
  </style>