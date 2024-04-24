<template>
    <div class="mpptablemain">
        <div class="flex lg:justify-end mb-5 ">
            <button class="mppbutton" @click="navigateTomodal">Add Application</button>
        </div>
        <div class="mppscrollable-table">
            <table
                class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
                <thead class="sticky top-0 z-50">
                    <tr style="background-color: #e6cfaf;">
                        <th class="mppth">Application No.</th>
                        <th class="mppth">Status</th>
                        <th class="mppth">Tenement Name</th>
                        <th class="mppth">Area (Hectares)</th>
                        <th class="mppth">Date Filed</th>
                        <th class="mppth">Barangay</th>
                        <th class="mppth">City</th>
                        <th class="mppth">Province</th>
                        <th class="mppth">Commodity</th>
                        <th class="mppth">Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="mpptd">{{ detail.id }}</td>
                        <td class="mpptd">{{ detail.status }}</td>
                        <td class="mpptd">{{ detail.tenement_name }}</td>
                        <td class="mpptd">{{ detail.area_hectares }}</td>
                        <td class="mpptd">{{ detail.date_filed }}</td>
                        <td class="mpptd">{{ detail.barangay }}</td>
                        <td class="mpptd">{{ detail.city }}</td>
                        <td class="mpptd">{{ detail.province }}</td>
                        <td class="mpptd">{{ detail.commodity }}</td>
                        <td class="mpptd">
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

import { addDetail5, viewDetail5, detailToggle5, detail_id5 } from '../dashboards/MPP-dashboard.vue';

export default {
    name: 'typeofapp',
    data() {
        return {
            details: [],
            addDetail5: false,
            viewDetail5: false,
            detail_id5: null
        };
    },
    mounted() {
        this.fetchDetails();
    },
    methods: {
        async fetchDetails() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.filter(det => det.application == 'mpp');
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        navigateTomodal() {
            addDetail5.value = true// Define your navigation logic here
        },
        navigateTomodalView(id) {
            detail_id5.value = id
            viewDetail5.value = true// Define your navigation logic here
        },
    }
};


</script>

<style>
.mppbutton {
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

.mpptablemain {
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

.mppscrollable-table {
    margin: 15px;
  box-shadow: 2px 3px 5px rgb(175, 175, 175);
  max-height:200px; 
  overflow-y: auto; 
}

.mppth,
.mpptd {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
}
</style>