<template>
    <div class="fixed inset-0 flex items-center justify-center z-10">
        <!-- Background overlay -->
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        
        <div class="relative rounded-2xl p-5 bg-zinc-100 w-full max-w-lg mx-4">
            <h3 id="modal-title" class="text-xl font-medium text-gray-900 text-center p-4">Application Details</h3>
            
            <div class="table-container">
                <table class="w-full border-collapse rounded-lg overflow-hidden">
                    <tbody>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Application Name:</td>
                            <td class="border py-2 px-4">{{ details.tenement_name }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Tenement Number:</td>
                            <td class="border py-2 px-4">{{ details.tenement_number }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Location:</td>
                            <td class="border py-2 px-4">{{ details.barangay }}, {{ details.city }}, {{ details.province }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Commodity:</td>
                            <td class="border py-2 px-4">{{ details.commodity }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Area (HA):</td>
                            <td class="border py-2 px-4">{{ details.area_hectares }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Date Filed:</td>
                            <td class="border py-2 px-4">{{ details.date_filed }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Others:</td>
                            <td class="border py-2 px-4">{{ details.others }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-amber-200 w-60">Stage of Processing:</td>
                            <td class="border py-2 px-4">{{ details.stage_of_processing }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-amber-200 w-60">Status:</td>
                            <td class="border py-2 px-4">{{ details.status }}</td>
                        </tr>
                    </tbody>
                </table>
  
                <h3 id="modal-title" class="text-base font-medium text-gray-900 text-center p-4">Applicant's Details</h3>
                <table class="w-full border-collapse rounded-lg overflow-hidden">
                    <tbody>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Category:</td>
                            <td class="border py-2 px-4">{{ details.category }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Authorized Representative:</td>
                            <td class="border py-2 px-4">{{ details.authorized_rep }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Contact Number:</td>
                            <td class="border py-2 px-4">{{ details.contact_no }}</td>
                        </tr>
                        <tr>
                            <td class="border font-bold py-2 px-4 bg-green-300 w-60">Email:</td>
                            <td class="border py-2 px-4">{{ details.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
  
            <div class="flex justify-center mt-8 gap-4">
                <button @click="navigateToMandatoryReqSSMC(detail_id)" class="w-auto px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-300 hover:text-black">Next</button>
                <button @click="Exit" type="button" class="w-auto px-4 py-2 rounded-md hover:bg-red-700 bg-red-800 text-white">Close</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { viewDetail } from '../dashboards/v-SSMC-dashboard.vue';
  import axios from 'axios';
  import { API_BASE_URL } from '../../../config'
  
  export default { 
    props: {
        detail_id: String,
    },
    data() {
        return {
            details: [],
        };
    },
    mounted() {
        this.fetchDetails();
        this.details.forEach((detail, index) => {
            this.checkForComment(detail.id, index);
        });
    },
    methods: {
        Exit() {
            viewDetail.value = false
        },
        async fetchDetails() {
            try {
                const response = await axios.get(`${API_BASE_URL}/get_details/`);
                this.details = response.data.find(det => det.id === parseInt(this.detail_id))
                console.log(this.detail_id)
                console.log(this.details)
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        },
        async checkForComment(id, index) {
            try {
                const response = await fetch(`/comments/has/${id}`);
                const data = await response.json();
                this.details[index].hasComment = data.hasComment;
            } catch (error) {
                console.error('Error fetching comment status:', error);
            }
        },
        navigateToMandatoryReqSSMC(detail_id) {
            window.location.href = `/mmd/MandatoryRequirements/${detail_id}`;
        },
    }
  }
  </script>