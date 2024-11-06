<template>
    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 overflow-y-auto" style="z-index: 10;">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
  
        <!-- Modal content -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 id="modal-title" class="flex justify-center text-xl leading-6 font-medium text-gray-900 p-4">Application Form</h3>
                <div class="mt-2 flex justify-between">
                  <p class="mr-5">Applicant Name:</p>
                  <input v-model="detailstoadd.tenement_name" type="text" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div class="mt-2 flex justify-between">
                    <p class="mr-5">Tenement Number:</p>
                    <input v-model="detailstoadd.tenement_number" type="text" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                
                
                <div class="mt-2 flex justify-between">
                    <p class="mr-5">Location:</p>
                    <select @change="handleRegion" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <option value="" disabled selected class="text-center text-gray-100">- - - - Select an Region - - - -</option>
                        <option v-for="region in regions" :value="region.region_code" :key="region.region_code">{{region.region_name}}</option>
                    </select>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5"></p>
                    <select @change="handleProvince" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"  >
                        <option value="" disabled selected class="text-center text-gray-100">- - - - Select Province - - - -</option>
                        <option v-for="province in provinces" :value="province.province_code" :key="province.province_code" >{{ province.province_name }}</option>
                    </select>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5"></p>
                    <select class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" @change="handleCity" >
                        <option value="" disabled selected class="text-center text-gray-100">- - - - Select City - - - -</option>
                        <option v-for="city in cities" :value="city.city_code" :key="city.city_code">{{ city.city_name }}</option>
                    </select>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5"></p>
                    <select class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" @change="barangaysChange" >
                        <option value="" disabled selected class="text-center text-gray-100">- - - - Select Barangay - - - -</option>
                        <option v-for="barangay in barangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{barangay.brgy_name}}
                        </option>
                    </select>
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Commodity:</p>
                    <input v-model="detailstoadd.commodity" type="text" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                  <p class="mr-5">Area (HA):</p>
                  <input v-model="detailstoadd.area_hectares" type="number" class="w-72 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div class="mt-2 flex justify-between">
                  <p class="mr-5">Date Filed:</p>
                  <input v-model="detailstoadd.date" type="date" class="text-center w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div class="mt-2 flex justify-between">
                    <p class="mr-5">Others:</p>
                    <input v-model="detailstoadd.others" type="text" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>

                <h3 class="flex justify-center text-base leading-6 font-medium text-gray-900 p-4">Applicant's Details</h3>
                <div class="mt-2 flex flex-col space-y-2">
                  <div class="flex justify-between">
                    <p class="mr-5">Category:</p>
                    <select
                      v-model="selectedCategory"
                      class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option value="" disabled selected class="text-center text-gray-100">- - - - Select an option - - - -</option>
                      <option value="Individual">Individual</option>
                      <option value="Corporation">Corporation</option>
                      <option value="Cooperative">Cooperative</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <!-- Conditional input field for 'Other' category -->
                  <input v-if="selectedCategory === 'Other'" v-model="otherCategory" class="ml-52 mt-2 pl-1 pr-1 border rounded-md w-72" placeholder="Enter other category"/>
                </div>

                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Authorized Representative:</p>
                    <input v-model="detailstoadd.authorized_rep" type="text" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Contact Number:</p>
                    <input v-model="contactnum" type="text" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Email Address:</p>
                    <input v-model="detailstoadd.email" type="text" @input="formatContactNum" maxlength="11" required class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>
                  
                  <div class="mt-2 flex justify-between">
                    <p class="mr-5">Others:</p>
                    <input v-model="detailstoadd.status" type="text" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  </div>

    <div class="flex justify-center mt-4 border-t">
      <label class="inline-flex items-center m-2">
        <input v-model="selectedStageOfProcessing" type="radio" name="options" value="On-going Process" class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"/>
        <span class="ml-2">On-going Process</span>
      </label>

      <label class="inline-flex items-center m-2">
        <input v-model="selectedStageOfProcessing" type="radio" name="options" value="Denied with Order of Finality" class="form-radio h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"/>
        <span class="ml-2">Denied with Order of Finality</span>
      </label>

      <label class="inline-flex items-center m-2">
        <input v-model="selectedStageOfProcessing"type="radio" name="options" value="Issued" class="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"/>
        <span class="ml-2">Issued</span>
      </label>
    </div>

    <!-- Conditional dropdown for "On-going Process" -->
    <div class="flex justify-between border-t" v-if="selectedStageOfProcessing === 'On-going Process'">
      <p class="mr-5 mt-4">Stage of Processing:</p>
      <select class="mt-4 w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="" disabled selected class="text-center text-gray-100">- - - - Select an option - - - -</option>
        <option value="1">Under Pre-Processing by Mining Tenement Evaluation Section</option>
        <option value="2">Under Preliminary Evaluation</option>
        <option value="3">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
        <option value="4">Undergoing Publication/Posting/Radio Announcement</option>
        <option value="5">Published/Posted Announcement within 30-days period for possible protest/adverse claim</option>
        <option value="6">With mining dispute filed at Panel of Arbitrators</option>
        <option value="7">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
        <option value="8">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc.</option>
        <option value="9">Under Final Evaluation by R.O.</option>
        <option value="10">Endorsed to Central Office</option>
        <option value="11">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for Reconsideration or Appeal</option>
        <option value="12">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for Reconsideration or Appeal</option>
        <option value="13">A. Others (Renewal)</option>
        <option value="14">B. Others (With Clearance)</option>
        <option value="15">Conversion from Other Tenement</option>
        <option value="16">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
      </select>
    </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="showModal = false" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
            <button @click="submit" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal -->
  </template>
  
  <script>
  import { regions, provinces, cities, barangays } from 'select-philippines-address';
  import axios from 'axios';
  import { API_BASE_URL } from '../../../config';
  
  export default {
    data() {
      return {
        details: [],
        contactnum: '',
        selectedStageOfProcessing: '',
        selectedCategory: '',
        otherCategory: '',
        regions: [],
        provinces: [],
        cities: [],
        barangays: [],
        region: null,
        province: null,
        city: null,
        barangay: null,
        showModal: true,
        submissionStatus: '',
        detailstoadd: {
          status: '',
          stage_of_processing: '',
          tenement_number: '',
          tenement_name: '',
          area_hectares: '',
          date: '',
          commodity: '',
          authorized_rep: '',
          email: '',
          others: '',
          application: 'ftta'
        }
      };
    },
    computed: {
      formattedDate() {
        if (!this.detailstoadd.date) return '';
        const dateObj = new Date(this.detailstoadd.date);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    },
    watch: {
      selectedCategory(newValue) {
        if (newValue !== 'other') {
          this.otherCategory = '';
        }
      }
    },
    created() {
      regions().then(response => {
        this.regions = response;
      });
    },
    methods: {
      handleRegion(e) {
        this.region = e.target.selectedOptions[0].text;
        provinces(e.target.value).then(response => {
          this.provinces = response;
        });
      },
      handleProvince(e) {
        this.province = e.target.selectedOptions[0].text;
        cities(e.target.value).then(response => {
          this.cities = response;
        });
      },
      handleCity(e) {
        this.city = e.target.selectedOptions[0].text;
        barangays(e.target.value).then(response => {
          this.barangays = response;
        });
      },
      barangaysChange(e) {
        this.barangay = e.target.selectedOptions[0].text;
      },
      formatContactNum() {
        this.contactnum = this.contactnum.replace(/\D/g, '').slice(0, 11);
        if (!this.contactnum.startsWith('09')) {
          this.contactnum = '09';
        }
      },
      submit() {
        const formData = new FormData();
        for (const [key, value] of Object.entries(this.detailstoadd)) {
          formData.append(key, value);
        }
        formData.append('category', this.selectedCategory === 'other' ? this.otherCategory : this.selectedCategory);
        formData.append('contact_no', this.contactnum);
        formData.append('barangay', this.barangay);
        formData.append('city', this.city);
        formData.append('province', this.province);
  
        axios.post(`${API_BASE_URL}/add_details`, formData)
          .then(response => {
            this.submissionStatus = 'Success!';
            this.showModal = false;
          })
          .catch(error => {
            console.error('Error:', error);
            this.submissionStatus = 'Submission failed. Please try again.';
          });
      }
    }
  };
  </script>