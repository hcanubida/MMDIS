<template>
  <div class="flex">
    <Header />
    <UserBtn />
  </div>

<!-- Table Section -->
<div class="flex justify-center">
  <div class="mt-2 text-center w-11/12">
<!-- MANDATORY REQUIREMENTS SECTION -->
<p class="text-left text-xl font-semibold p-5">MANDATORY REQUIREMENTS</p>
<table class="w-full text-left border-collapse border border-gray-300">
  <thead class="text-xl text-center">
    <tr class="bg-green-800 text-white">
      <th class="p-2 text-base border border-gray-300">Requirements</th>
      <th class="p-2 text-base border border-gray-300" style="width: 300px;">Upload Requirements<br>(PDF, Word, or any file)</th>
      <th class="p-2 text-base border border-gray-300">Remarks/Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 text-justify text-sm font-normal p-3" style="width: 750px;">
        <b>1.</b> Application Form (MGB Form No. 7-1) to be accompanied by eight (8) sets of the FTAA proposal and five (5) sets of the following:
        <br><br>Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013).
      </td>
      <td class="p-2 flex flex-col space-y-2 justify-center items-left text-sm border-gray-300">
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file1', $event)"
                ref="fileInput1"
                class="hover:bg-amber-100 flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file) in uploadFiles.file1" :key="file.name">
                <p class="text-sm text-gray-500 ml-3">{{ file.name }}</p>
              </div>
        </div>
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-left">
            <label
              class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Files uploaded:
            </label>
            <div v-for="(file, index) in uploadFiles.file1" :key="index">
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
        </div>
      </td>
      <td class="border border-gray-300 text-center text-sm p-3">
        <div class="flex flex-col items-start">
        Remarks/Status: <textarea class="h-24 w-full border px-2" v-model="remarks.textInput1"></textarea>
        Recommendations/Lacking Submission: <textarea class="h-24 w-full border p-2 text-red-700" v-model="recommendation.textInput1"></textarea>
        </div>
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 text-justify text-sm font-normal p-3">
        <b>2.</b> Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/ boundaries (in tabulated form) with major environmental features/ other projects (prepared, sealed and signed by a deputized Geodetic Engineer)
      </td>
      <td class="p-2 flex flex-col space-y-2 justify-center items-left text-sm border-t border-gray-300">
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file2', $event)"
                ref="fileInput2"
                class="hover:bg-amber-100 flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file) in uploadFiles.file2" :key="file.name">
                <p class="text-sm text-gray-500 ml-3">{{ file.name }}</p>
              </div>
        </div>
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-left">
            <label
              class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Files uploaded:
            </label>
            <div v-for="(file, index) in uploadFiles.file2" :key="index">
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
        </div>
      </td>
      <td class="border border-gray-300 text-center text-sm p-3">
        <div class="flex flex-col items-start">
        Remarks/Status: <textarea class="h-24 w-full border p-2" v-model="remarks.textInput2"></textarea>
        Recommendations/Lacking Submission: <textarea class="h-24 w-full border p-2 text-red-700" v-model="recommendation.textInput2"></textarea>
        </div>
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 text-justify text-sm font-normal p-3">
        <b>3.</b> Two (2)-Year Exploration Work Program (MGB Form No. 5-4), duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
      </td>
      <td class="p-2 flex flex-col space-y-2 justify-center items-left text-sm border-t border-gray-300">
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file3', $event)"
                ref="fileInput3"
                class="hover:bg-amber-100 flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file) in uploadFiles.file3" :key="file.name">
                <p class="text-sm text-gray-500 ml-3">{{ file.name }}</p>
              </div>
        </div>
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-left">
            <label
              class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Files uploaded:
            </label>
            <div v-for="(file, index) in uploadFiles.file3" :key="index">
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
        </div>
      </td>
      <td class="border border-gray-300 text-center text-sm p-3">
        <div class="flex flex-col items-start">
        Remarks/Status: <textarea class="h-24 w-full border p-2" v-model="remarks.textInput3"></textarea>
        Recommendations/Lacking Submission: <textarea class="h-24 w-full border p-2 text-red-700" v-model="recommendation.textInput3"></textarea>
        </div>
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 text-justify text-sm font-normal p-3">
        <b>4.</b> Proof of technical competence in the form of:
        <br> &nbsp; &nbsp; &nbsp;4.1 Bio-data and track records in mining operations/ environmental management 
        <br> &nbsp; &nbsp; &nbsp;4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the Work Programs
      </td>
      <td class="p-2 flex flex-col space-y-2 justify-center items-left text-sm border-t border-gray-300">
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file4', $event)"
                ref="fileInput4"
                class="hover:bg-amber-100 flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file ) in uploadFiles.file4" :key="file.name">
                <p class="text-sm text-gray-500 ml-3">{{ file.name }}</p>
              </div>
        </div>
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-left">
            <label
              class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Files uploaded:
            </label>
            <div v-for="(file, index) in uploadFiles.file4" :key="index">
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
        </div>
      </td>
      <td class="border border-gray-300 text-center text-sm p-3">
        <div class="flex flex-col items-start">
        Remarks/Status: <textarea class="h-24 w-full border p-2" v-model="remarks.textInput4"></textarea>
        Recommendations/Lacking Submission: <textarea class="h-24 w-full border p-2 text-red-700" v-model="recommendation.textInput4"></textarea>
        </div>
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 text-justify text-sm font-normal p-3">
        <b>5.</b> Affidavit of Undertaking (using MGB Form No.99-10)
      </td>
      <td class="p-2 flex flex-col space-y-2 justify-center items-left text-sm border-t border-gray-300">
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file5', $event)"
                ref="fileInput5"
                class="hover:bg-amber-100 flex h-10 rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file ) in uploadFiles.file5" :key="file.name">
                <p class="text-sm text-gray-500 ml-3">{{ file.name }}</p>
              </div>
        </div>
        <div class="grid max-w-xs items-center gap-1.5 mx-5 my-4 justify-left">
            <label
              class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Files uploaded:
            </label>
            <div v-for="(file, index) in uploadFiles.file5" :key="index">
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
        </div>
      </td>
      <td class="border border-gray-300 text-center text-sm p-3">
        <div class="flex flex-col items-start">
        Remarks/Status: <textarea class="h-24 w-full border p-2" v-model="remarks.textInput5"></textarea>
        Recommendations/Lacking Submission: <textarea class="h-24 w-full border p-2 text-red-700" v-model="recommendation.textInput5"></textarea>
        </div>
      </td>
    </tr>
  </tbody>
</table>

    <!-- Summary of Lacking Requirements -->
    <p class="text-left text-xl font-semibold p-5">SUMMARY OF LACKING REQUIREMENTS</p>
    <table class="w-full mb-5 text-left p-2 border border-collapse">
        <thead class="w-full">
        <tr class="bg-green-800 text-white" style="text-align: center;">
          <th class="w-6/12 p-2 border text-base">Requirements</th>
          <th class="p-2 border text-base">Remarks or Status | Recommendation or Lacking Submission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border text-xs px-2">
            <b>1.</b> &nbsp; Application Form (MGB Form No. 7-1) to be accompanied by eight (8) sets of the FTAA proposal and five (5) sets of the following:
            <br>&nbsp; &nbsp; Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013).
          </td>

          <td class="text-left h-24 text-xs w-full border px-2">
            <br><label>Remarks/Status: <p>{{ remarks.textInput1 }}</p></label>
            <label>Recommendation or Lacking Submission: <p style="color: red;">{{ recommendation.textInput1 }}</p></label>   
          </td>
        </tr>
        
        <tr>
          <td class="border text-xs px-2">
            <b>2.</b> &nbsp; Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/ boundaries (in tabulated form) with major environmental features/ other projects (prepared, sealed and signed by a deputized Geodetic Engineer)
          </td>

          <td class="text-left h-24 text-xs w-full border px-2">
            <br><label>Remarks/Status: <p>{{ remarks.textInput2 }}</p></label>
            <label>Recommendation or Lacking Submission: <p style="color: red;">{{ recommendation.textInput2 }}</p></label>   
          </td>
        </tr>

        <tr>
          <td class="border text-xs px-2">
            <b>3.</b> &nbsp; Two (2)-Year Exploration Work Program (MGB Form No. 5-4), duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
          </td>

          <td class="text-left h-24 text-xs w-full border px-2">
            <br><label>Remarks/Status: <p>{{ remarks.textInput3 }}</p></label>
            <label>Recommendation or Lacking Submission: <p style="color: red;">{{ recommendation.textInput3 }}</p></label>   
          </td>
        </tr>

        <tr>
          <td class="border text-xs px-2">
            <b>4.</b> &nbsp; Proof of technical competence in the form of:
            <br> &nbsp; &nbsp; &nbsp;4.1 Bio-data and track records in mining operations/ environmental management 
            <br> &nbsp; &nbsp; &nbsp;4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the Work Programs
          </td>

          <td class="text-left h-24 text-xs w-full border px-2">
            <br><label>Remarks/Status: <p>{{ remarks.textInput4 }}</p></label>
            <label>Recommendation or Lacking Submission: <p style="color: red;">{{ recommendation.textInput4 }}</p></label>  
          </td>
        </tr>

        <tr>
          <td class="border text-xs px-2">
            <b>5.</b> &nbsp; Affidavit of Undertaking (using MGB Form No.99-10)
          </td>

          <td class="text-left h-24 text-xs w-full border px-2">  
            <br><label>Remarks/Status: <p>{{ remarks.textInput5 }}</p></label>
            <label>Recommendation or Lacking Submission: <p style="color: red;">{{ recommendation.textInput5 }}</p></label>  
          </td>
        </tr>
      </tbody>
    </table>

<!-- Status of Application -->
<p class="text-left text-xl font-semibold p-5 flex items-center">
  STATUS OF THE APPLICATION
  <span class="px-2 text-xs text-blue-600 cursor-pointer" @click="openEditModal">edit</span>
</p>
<table class="w-full border-collapse">
  <tbody>
    <tr>
      <td class="text-left text-base p-2 border w-2/4">Status: </td>
      <td class="text-left text-base p-2 border w-2/4">{{ details.status }}</td>
    </tr>
    <tr>
      <td class="text-left text-base p-2 border w-2/4">Stage of Processing: </td>
      <td class="text-left text-base p-2 border w-2/4">{{ details.stage_of_processing }}</td>
    </tr>
  </tbody>
</table>

<!-- Modal Section -->
<div v-if="EditModal" class="fixed top-0 left-0 w-full h-full flex items-center justify-center" style="background-color: rgba(0, 0, 0, 0.5); z-index: 1000;" @click.self="closeEditModal">
  <div class="bg-white rounded-lg w-1/4" style="max-width: 90%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); animation: fadeIn 0.3s ease-in-out;">
    <div class="flex justify-between items-center p-4" style="border-bottom: 1px solid #ddd;"> 
      <h2 class="text-lg font-bold">Edit</h2>
    </div>
    <div class="mt-2 flex flex-col space-y-2">
      <div class="flex justify-between p-2">
        <p class="mr-5">Status:</p>
        <select
          v-model="selectedCategory"
          class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="" disabled selected class="text-center text-gray-100"></option>
          <option value="On-going Process">On-going Process</option>
          <option value="Issued">Issued</option>
          <option value="Denied">Denied</option>
          <option value="With Order of Finality">With Order of Finality</option>
          <option value="Endorsed to MGB CO for Clearance">Endorsed to MGB CO for Clearance</option>
          <option value="Endorsed to MGB CO for Approval">Endorsed to MGB CO for Approval</option>
        </select>
      </div>

      <!-- Conditionally render this select input when "On-going Process" is selected -->
      <div v-if="selectedCategory === 'On-going Process'" class="flex justify-between p-2 mt-4">
        <p class="mr-5">Stage of Processing:</p>
        <select v-model="selectedOngoingProcessing" class="w-72 pl-1 pr-1 bg-orange-100 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          <option value="" disabled selected class="text-center text-gray-100"></option>
          <option value="Under Pre-Processing by Mining Tenement Evaluation Section">Under Pre-Processing by Mining Tenement Evaluation Section</option>
          <option value="Under Preliminary Evaluation">Under Preliminary Evaluation</option>
          <option value="Pending Area Clearance/Status (FMS/EMPAS,LMS)">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
          <option value="Undergoing Publication/Posting/Radio Announcement">Undergoing Publication/Posting/Radio Announcement</option>
          <option value="Published/Posted Announcement within 30-days period for possible protest/adverse claim">Published/Posted Announcement within 30-days period for possible protest/adverse claim</option>
          <option value="With mining dispute filed at Panel of Arbitrators">With mining dispute filed at Panel of Arbitrators</option>
          <option value="Appeal to the Mines Adjudication Board/LSD-CO/OP">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
          <option value="Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc.">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc.</option>
          <option value="Under Final Evaluation by R.O.">Under Final Evaluation by R.O.</option>
          <option value="Endorsed to Central Office">Endorsed to Central Office</option>
          <option value="Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for Reconsideration or Appeal">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for Reconsideration or Appeal</option>
          <option value="Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for Reconsideration or Appeal">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for Reconsideration or Appeal</option>
          <option value="A. Others (Renewal)">A. Others (Renewal)</option>
          <option value="B. Others (With Clearance)">B. Others (With Clearance)</option>
          <option value="Conversion from Other Tenement">Conversion from Other Tenement</option>
          <option value="Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
          <option value="- - -">- - -</option>
        </select>
      </div>
    </div>

    <div class="p-4 text-right" style="border-top: 1px solid #ddd;">
      <!-- Save Button -->
      <button @click="saveChanges" class="py-1 px-2 mx-2 rounded cursor-pointer text-white hover:text-gray-950 bg-green-800 hover:bg-green-100">Save</button>
      <!-- Close Button -->
      <button @click="closeEditModal" class="py-1 px-2 mx-2 rounded cursor-pointer bg-[#e6cfaf] hover:bg-[#d6bf9f]">Close</button>
    </div>
  </div>
</div>



    <!-- Overall Remarks/Status/Recommendations -->
    <p class="text-left text-xl font-semibold p-5">OVERALL REMARKS/ RECOMMENDATIONS</p>
    <textarea class="rounded w-full p-2 border" style="height: 300px;" v-model="overallStatus"></textarea>
<!-- --- -->
<div class="flex flex-col justify-center m-4">
  <div>
    <button
      class=" text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 w-36 h-10 rounded-md ml-2 hover:scale-105 transition-all duration-300"
      @click="update">
      UPDATE
    </button>
    <button
      class=" text-white hover:text-gray-950 bg-green-800 hover:bg-green-100 w-36 h-10 rounded-md ml-2 hover:scale-105 transition-all duration-300"
      @click="toggleModal">
      {{ isVisible ? 'Close' : 'View' }}
    </button>
  </div>

  <!-- Modal Overlay -->
  <div v-if="isVisible" class="fixed top-0 left-0 w-full h-full flex justify-center items-center" style="background: rgba(0, 0, 0, 0.5); z-index: 1000;" @click.self="toggleModal">
    <div class="bg-white rounded-lg w-4/5 relative" style="max-width: 800px;">
      <faxx/>
    </div>
  </div>
</div>

  </div>
</div>
</template>

<script setup>
import Header from '../../components/header.vue'
import UserBtn from '../../components/user-dbbtn.vue'
import imagees from '../../components/MTES/modals/imguploads.vue'
import faxx from '../mtes/factsheet.vue'
import { API_BASE_URL } from '../../config'
// import { detail_id } from '../dashboards/FTAA-dashboard.vue';
</script>

<script>
export default {
  name: 'typeapp',
  components: {
    imagees
  },
  props: {
    detail_id: String,
  },
  data() {
    return {
      currentPage: 1, // Track the current page number
      totalPages: 5,  // Set the total number of pages (this can be dynamic based on the content)
      EditModal: false,
      selectedCategory: '',
      selectedOngoingProcessing: '',
      details: {},
        status: '',
        stage_of_processing: '',
      
      id: null,
      selectedCategory: "",
      selectedOngoingProcessing: "",
      overallStatus: '',
      isVisible: false,
      showChildComponent: false,
      selectedStatus: '',
      otherStatus: '',
      remarks: {
        textInput1: '',
        textInput2: '',
        textInput3: '',
        textInput4: '',
        textInput5: '',
      },
      recommendation: {
        textInput1: '',
        textInput2: '',
        textInput3: '',
        textInput4: '',
        textInput5: '',
      },
      uploadFiles: {
        file1: [],
        file2: [],
        file3: [],
        file4: [],
        file5: []
      },
      imagesfile: {
        file1: [],
        file2: [],
        file3: [],
        file4: [],
        file5: []
      },
    };
  },
  methods: {

  ///
    openEditModal() {
      this.EditModal = true;
    },
    closeEditModal() {
      this.EditModal = false;
      this.resetSelections();
    },
    resetSelections() {
      this.selectedCategory = '';
      this.selectedOngoingProcessing = '';
    },
    async fetchDetails(id) {
      try {
        const response = await axios.get(`${API_BASE_URL}/get_details/${id}`);
        this.details = response.data || {};
        this.id = this.details.id; // Assuming the ID is part of the response
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    },
    async saveChanges() {
      console.log(`Attempting to save changes with ID: ${this.id}`);
      
      if (!this.id) {
        this.handleError('ID is undefined. Cannot save changes.');
        return;
      }

      this.isLoading = true;
      try {
        const formData = this.createFormData();
        const response = await axios.post(`${API_BASE_URL}/update_status/${this.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        alert('Details updated successfully');
        await this.fetchDetails(this.id);
        this.closeEditModal();
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    createFormData() {
      const formData = new FormData();
      formData.append('status', this.selectedCategory);
      formData.append('stage_of_processing', this.selectedOngoingProcessing);
      return formData;
    },

    handleError(error) {
      console.error('Error saving changes:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        alert(`Failed to update details: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        alert('Failed to update details: No response from server.');
      } else {
        alert('Failed to update details: ' + error.message);
      }
    },
    //
    toggleModal() {
      this.isVisible = !this.isVisible;
    },
    myAction(payload) {
      const { containerId, images } = payload;
      this.imagesfile[containerId] = images;
      console.log(`Uploaded images for ${containerId}:`, images);
    },

    handleFileUpload(fileKey, event) {
      if (event && event.target && event.target.files) {
        this.uploadFiles[fileKey] = Array.from(event.target.files);
        console.log(`Files for ${fileKey}:`, this.uploadFiles[fileKey]);
        console.log('Updated uploadFiles:', this.uploadFiles);
      } else {
        console.error('No files found on event target:', event);
      }
    },

    async getDetails() {
    //Details applicants
      try {
        const response = await axios.get(`${API_BASE_URL}/get_details/`);
        this.details = response.data.filter(det => det.id == this.$route.params.detail_id);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
      
      try {
        const overallstatus = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
        const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id));
        
        this.overallStatus = filteredoverall.overallstatus
      } catch (error) {
        console.error('Error fetching details:', error);
      }

      try {
        const remarks = await axios.get(`${API_BASE_URL}/get_remarks`);
        const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id);

        this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
        this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
        this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
        this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';
        this.remarks.textInput5 = filteredremarks[0].input5 !== null ? filteredremarks[0].input5 : '';

      } catch (error) {
        console.error('Error fetching details:', error);
      }

      try {
        const requirements = await axios.get(`${API_BASE_URL}/get_recommendation`);
        const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id);

        this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
        this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
        this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
        this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
        this.recommendation.textInput5 = filteredrequirements.input5 !== null ? filteredrequirements.input5 : '';
      
      } catch (error) {
        console.error('Error fetching reco details:', error);
      }

      try {
        const uploads = await axios.get(`${API_BASE_URL}/get_files`);
        const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id);
        console.log(uploadsrequirements);

        Object.keys(this.uploadFiles).forEach(key => {
          this.uploadFiles[key] = [];
        });

        for (let i = 1; i <= 5; i++) {
          const key = `file${i}`;
          this.uploadFiles[key] = [];
        }

        uploadsrequirements.forEach((req) => {
          for (let i = 1; i <= 5; i++) {
            const key = `file${i}`;
            
            if (req.hasOwnProperty(key) && req[key] !== null) {
              try {
                this.uploadFiles[key] = JSON.parse(req[key]);
              } catch (e) {
                console.error(`Error parsing JSON for ${key}:`, e);
                this.uploadFiles[key] = [];
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching reco details:', error);
      }

      try {
        const images = await axios.get(`${API_BASE_URL}/get_images`);
        const imagesrequirements = images.data.filter(req => req.id_reference == this.$route.params.detail_id);
        console.log(imagesrequirements);

        Object.keys(this.imagesfile).forEach(key => {
          this.imagesfile[key] = [];
        });

        for (let i = 1; i <= 5; i++) {
          const key = `file${i}`;
          this.imagesfile[key] = [];
        }

        imagesrequirements.forEach((req) => {
          for (let i = 1; i <= 5; i++) {
            const key = `file${i}`;

            if (req.hasOwnProperty(key) && req[key] !== null) {
              try {
                this.imagesfile[key] = JSON.parse(req[key]);
              } catch (e) {
                console.error(`Error parsing JSON for ${key}:`, e);
                this.imagesfile[key] = [];
              }
            }
          }
        });


      } catch (error) {
        console.error('Error fetching reco details:', error);
      }

    },
    update() {
      const formData = new FormData();
      formData.append('id_reference', this.$route.params.detail_id);
      formData.append('overallstatus', this.overallStatus);

      axios.post(`${API_BASE_URL}/update_mtsrstatus/${this.$route.params.detail_id}`, formData)
        .then(response => {
          console.log('overallstatus added: ', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      const formData1 = new FormData();
      formData1.append('id_reference', this.$route.params.detail_id);

      for (let i = 1; i <= 5; i++) {
        formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
      }

      axios.post(`${API_BASE_URL}/update_remarks/${this.$route.params.detail_id}`, formData1)
        .then(response => {
          console.log('Remarks updated successfully:', response.data);
        })
        .catch(error => {
          console.error('Error updating remarks:', error);
        });

      const formData2 = new FormData();
      formData2.append('id_reference', this.$route.params.detail_id);


      for (let i = 1; i <= 5; i++) {
        formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
      }


      axios.post(`${API_BASE_URL}/update_recommendation/${this.$route.params.detail_id}`, formData2)
        .then(response => {
          console.log('Recommendations updated successfully:', response.data);
        })
        .catch(error => {
          console.error('Error updating recommendations:', error);
        });

      const formData4 = new FormData();
      formData4.append('id_reference', this.$route.params.detail_id);

      for (const containerId in this.imagesfile) {
        if (this.imagesfile.hasOwnProperty(containerId)) {

          const fileKey = `file${containerId.replace('file', '')}`;

          this.imagesfile[containerId].forEach(file => {
            if (file.file !== undefined) {
              formData4.append(`${fileKey}[]`, file.file); 
              console.log([...formData4])
            }
          });
        }
      }

      axios.post(`${API_BASE_URL}/update_images/${this.$route.params.detail_id}`, formData4)
        .then(response => {
          console.log('Images uploaded successfully:', response.data);
        })
        .catch(error => {
          console.error('Error uploading images:', error);
        });

      const formData3 = new FormData();
      formData3.append('id_reference', this.$route.params.detail_id);

      if (this.uploadFiles) {
        for (const [key, files] of Object.entries(this.uploadFiles)) {
          if (Array.isArray(files) && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              const validExtensions = ['pdf', 'doc', 'docx'];
              if (file.name && validExtensions.includes(file.name.split('.').pop().toLowerCase())) {
                formData3.append(`${key}[]`, file);
              }
            }
          }
        }
      }

      axios.post(`${API_BASE_URL}/update_uploads/${this.$route.params.detail_id}`, formData3)
        .then(response => {
          console.log('Record uploaded successfully:', response.data);
          window.location.reload()
        })
        .catch(error => {
          console.error('Error uploading record:', error);
          window.location.reload()
        });
    },
  },
  mounted() {
    this.getDetails();
    const id = this.$route.params.detail_id;
    this.fetchDetails(id); 
  },
}
</script>

