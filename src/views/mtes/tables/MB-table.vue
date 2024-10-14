<template>
    <div class="mbtable">
        <div class="flex lg:justify-end mb-5 ">
            <button class="mbbutton" @click="navigateTomodal">Add Application</button>
        </div>
        <div class= "mb_scrollable">
            <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <!-- <table> -->
                <thead class="sticky top-0 z-50 border-y-50">
                    <tr style="background-color: #e6cfaf;">
                        <th class="mbth">Application No.</th>
                        <th class="mbth">Status</th>
                        <th class="mbth">Tenement Name</th>
                        <th class="mbth">Area (Hectares)</th>
                        <th class="mbth">Date Filed</th>
                        <th class="mbth">Barangay</th>
                        <th class="mbth">City</th>
                        <th class="mbth">Province</th>
                        <th class="mbth">Commodity</th>
                        <th class="mbth">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="mbtd">{{ detail.id }}</td>
                        <td class="mbtd">{{ detail.status }}</td>
                        <td class="mbtd">{{ detail.tenement_name }}</td>
                        <td class="mbtd">{{ detail.area_hectares }}</td>
                        <td class="mbtd">{{ detail.date_filed }}</td>
                        <td class="mbtd">{{ detail.barangay }}</td>
                        <td class="mbtd">{{ detail.city }}</td>
                        <td class="mbtd">{{ detail.province }}</td>
                        <td class="mbtd">{{ detail.commodity }}</td>
                        <td class="mbtd">
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
  
  import { addDetail4, viewDetail4, detailToggle4, detail_id4 } from '../dashboards/MB-dashboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
        return {
            details: [],
            addDetail4: false,
            viewDetail4: false,
            detail_id4: null
        };
    },
    mounted() {
        this.fetchDetails();
    },
    methods: {
        async fetchDetails() {
            try {
                const response = await axios.get(`${API_BASE_URL}/get_details/`);
                this.details = response.data.filter(det => det.application == 'mb');
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        navigateTomodal() {
            addDetail4.value = true// Define your navigation logic here
        },
        navigateTomodalView(id) {
            detail_id4.value = id
            viewDetail4.value = true// Define your navigation logic here
        },
    }
  };
  
  
  </script>
  
  <style>
  .mbbutton {
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
  
  .mbtable {
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
  
  .mb_scrollable {
    /* Adjust the maximum height as needed */
    margin: 15px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175);
    max-height:200px; 
    overflow-y: auto; 
  }
  
  .mbth,
  .mbtd {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
  }
  </style>