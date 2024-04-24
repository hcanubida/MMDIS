<template>
    <div class="isagtable">
        <div class="flex lg:justify-end mb-5 ">
            <button class="isagbutton" @click="navigateTomodal">Add Application</button>
        </div>
        <div class= "isag_scrollable">
            <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
              <!-- <table> -->
                <thead class="sticky top-0 z-50 border-y-50">
                    <tr style="background-color: #e6cfaf;">
                        <th class="isagth">Application No.</th>
                        <th class="isagth">Status</th>
                        <th class="isagth">Tenement Name</th>
                        <th class="isagth">Area (Hectares)</th>
                        <th class="isagth">Date Filed</th>
                        <th class="isagth">Barangay</th>
                        <th class="isagth">City</th>
                        <th class="isagth">Province</th>
                        <th class="isagth">Commodity</th>
                        <th class="isagth">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="isagtd">{{ detail.id }}</td>
                        <td class="isagtd">{{ detail.status }}</td>
                        <td class="isagtd">{{ detail.tenement_name }}</td>
                        <td class="isagtd">{{ detail.area_hectares }}</td>
                        <td class="isagtd">{{ detail.date_filed }}</td>
                        <td class="isagtd">{{ detail.barangay }}</td>
                        <td class="isagtd">{{ detail.city }}</td>
                        <td class="isagtd">{{ detail.province }}</td>
                        <td class="isagtd">{{ detail.commodity }}</td>
                        <td class="isagtd">
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
  
  import { addDetail3, viewDetail3, detailToggle3, detail_id3 } from '../dashboards/ISAG-dashboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
        return {
            details: [],
            addDetail3: false,
            viewDetail3: false,
            detail_id3: null
        };
    },
    mounted() {
        this.fetchDetails();
    },
    methods: {
        async fetchDetails() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.filter(det => det.application == 'isag');
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        navigateTomodal() {
            addDetail3.value = true// Define your navigation logic here
        },
        navigateTomodalView(id) {
            detail_id3.value = id
            viewDetail3.value = true// Define your navigation logic here
        },
    }
  };
  
  
  </script>
  
  <style>
  .isagbutton {
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
  
  .isagtable {
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
  
  .isag_scrollable {
    /* Adjust the maximum height as needed */
    margin: 15px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175);
    max-height:200px; 
    overflow-y: auto; 
  }
  
  .isagth,
  .isagtd {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
  }
  </style>