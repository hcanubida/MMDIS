<template>
    <div class="amtrdtable">
        <div class="flex lg:justify-end mb-5 ">
            <button class="amtrdbutton" @click="navigateTomodal">Add Application</button>
        </div>
  
        <div class= "amtrd_scrollable">
            <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <!-- <table> -->
                <thead class="sticky top-0 z-50 border-y-50">
                    <tr style="background-color: #e6cfaf;">
                        <th class="amtrdth">Application No.</th>
                        <th class="amtrdth">Status</th>
                        <th class="amtrdth">Tenement Name</th>
                        <th class="amtrdth">Area (Hectares)</th>
                        <th class="amtrdth">Date Filed</th>
                        <th class="amtrdth">Barangay</th>
                        <th class="amtrdth">City</th>
                        <th class="amtrdth">Province</th>
                        <th class="amtrdth">Commodity</th>
                        <th class="amtrdth">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="amtrdtd">{{ detail.id }}</td>
                        <td class="amtrdtd">{{ detail.status }}</td>
                        <td class="amtrdtd">{{ detail.tenement_name }}</td>
                        <td class="amtrdtd">{{ detail.area_hectares }}</td>
                        <td class="amtrdtd">{{ detail.date_filed }}</td>
                        <td class="amtrdtd">{{ detail.barangay }}</td>
                        <td class="amtrdtd">{{ detail.city }}</td>
                        <td class="amtrdtd">{{ detail.province }}</td>
                        <td class="amtrdtd">{{ detail.commodity }}</td>
                        <td class="amtrdtd">
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
  import { API_BASE_URL } from '../../../config';
  
  import { addDetail9, viewDetail9, detailToggle9, detail_id9 } from '../dashboards/AMTRD-dashboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
        return {
            details: [],
            addDetail9: false,
            viewDetail9: false,
            detail_id9: null
        };
    },
    mounted() {
        this.fetchDetails();
    },
    methods: {
        async fetchDetails() {
            try {
                const response = await axios.get(`${API_BASE_URL}/get_details/`);
                this.details = response.data.filter(det => det.application == 'amtrd');
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        navigateTomodal() {
            addDetail9.value = true// Define your navigation logic here
        },
        navigateTomodalView(id) {
            detail_id9.value = id
            viewDetail9.value = true// Define your navigation logic here
        },
    }
  };
  
  
  </script>
  
  <style>
  .amtrdbutton {
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
  
  .amtrdtable {
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
  
  .amtrd_scrollable {
    /* Adjust the maximum height as needed */
    margin: 15px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175);
    max-height:200px; 
    overflow-y: auto; 
  }
  
  .amtrdth,
  .amtrdtd {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
  }
  </style>