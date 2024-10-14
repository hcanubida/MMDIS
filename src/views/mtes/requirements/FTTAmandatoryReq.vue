<template>
  <div>
    <headd />
  </div>
  <!-- {{ $route.params.detail_id }} -->
  <div class="title1">
    <h2>MANDATORY REQUIREMENTS</h2>
  </div>


  <!-- Table 1 -->
  <div class="requirements1">
    <table class="table1">
      <thead class="titlehead1">
        <tr style="text-align: center;">
          <th class="th1">Requirements</th>
          <th class="th1">Upload</th>
          <th class="th1">Remarks / Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="reqData1">
            1. Application Form (MGB Form No. 7-1) to be accpompanied by eight (8)
            sets of the FTAA proposal and five (5) sets of the following: <br> &nbsp;
            <br> &nbsp;
            Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application
            (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013).
          </td>

          <!--    -->
          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file1', $event)"
                ref="fileInput1"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file ) in uploadFiles.file1" :key="file.name">
                <p class="text-sm text-gray-500 ml-3">{{ file.name }}</p>
              </div>
            </div>
            <div class="mx-10 mb-3 ">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files uploaded:
              </label>
              <div v-for="(file, index) in uploadFiles.file1" :key="index">
                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
              </div>
            </div>
          </td>

          <td style="text-align: left;width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="border: 1px solid #ccc; border-radius: 4px; width: 100%;height: 600px;"
              v-model="remarks.textInput1"></textarea>
            <label>Recommendation or Lacking Submission:</label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100%;height: 600px;"
              v-model="recommendation.textInput1"></textarea>

            <!-- images upload (based remarks) -->
            <imagees @images-uploaded="myAction" containerId="file1" />

            <!-- 3rd buhaton -->
            <div v-for="(file, index) in imagesfile.file1" :key="index">
              <!-- Display each file object here -->
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>

          </td>
        </tr>
        <tr>
          <td class="reqData1">
            2. Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/
            boundaries (in tabulated form) with major environmental features/ other projects
            (prepared, sealed and signed by a deputized Geodetic Engineer)
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 justify-center">
              <label
                class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file2', $event)"
                ref="fileInput2"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file, index) in uploadFiles.file2" :key="file.name">
                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
              </div>
            </div>
            <div class="mx-10 mb-3">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files uploaded:
              </label>
              <div v-for="(file, index) in uploadFiles.file2" :key="index">
                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
              </div>
            </div>
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="remarks.textInput2"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="recommendation.textInput2"></textarea>

            <!-- images upload (based remarks) -->
            <imagees @images-uploaded="myAction" containerId="file2" />

            <div v-for="(file, index) in imagesfile.file2" :key="index">
              <!-- Display each file object here -->
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>

          </td>
        </tr>
        <tr>
          <td class="reqData1">
            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),
            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file3', $event)"
                ref="fileInput1"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file, index) in uploadFiles.file3" :key="file.name">
                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
              </div>
            </div>
            <div class="mx-10 mb-3">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files uploaded:
              </label>
              <div v-for="(file, index) in uploadFiles.file3" :key="index">
                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
              </div>
            </div>
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="remarks.textInput3"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="recommendation.textInput3"></textarea>

            <!-- images upload (based remarks) -->
            <imagees @images-uploaded="myAction" containerId="file3" />
            <div v-for="(file, index) in imagesfile.file3" :key="index">
              <!-- Display each file object here -->
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            4. Proof of technical competence in the form of:<br> &nbsp;
            4.1 Bio-data and track records in mining operations/ enviromental manangement <br> &nbsp;
            4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the Work Programs
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file4', $event)"
                ref="fileInput1"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file, index) in uploadFiles.file4" :key="file.name">
                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
              </div>
            </div>
            <div class="mx-10 mb-3">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files uploaded:
              </label>
              <div v-for="(file, index) in uploadFiles.file4" :key="index">
                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
              </div>
            </div>
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="remarks.textInput4"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="recommendation.textInput4"></textarea>

            <!-- images upload (based remarks) -->
            <imagees @images-uploaded="myAction" containerId="file4" />
            <div v-for="(file, index) in imagesfile.file4" :key="index">
              <!-- Display each file object here -->
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            5. Affidavit of Undertaking (using MGB Form No.99-10)
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files to upload:
              </label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload('file5', $event)"
                ref="fileInput1"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              <div v-for="(file, index) in uploadFiles.file5" :key="file.name">
                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
              </div>
            </div>
            <div class="mx-10 mb-3">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Files uploaded:
              </label>
              <div v-for="(file, index) in uploadFiles.file5" :key="index">
                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
              </div>
            </div>
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="remarks.textInput5"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 600px;"
              v-model="recommendation.textInput5"></textarea>

            <!-- images upload (based remarks) -->
            <imagees @images-uploaded="myAction" containerId="file5" />
            <div v-for="(file, index) in imagesfile.file5" :key="index">
              <!-- Display each file object here -->
              <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>


    <!-- Table 2 -->
    <table class="table2">
      <p style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Summary of
        Lacking Requirements</p>
      <tbody>
        <tr>
          <td v-if="recommendation.textInput1 !== 'null' && recommendation.textInput1.trim() !== ''">
            <p>{{ requirements.reqDetails1 }}</p>
          </td>

          <td style="text-align: left;width: 1000px;height: 100px;"
            v-if="recommendation.textInput1 !== 'null' && recommendation.textInput1.trim() !== ''">
            <label>Recommendation or Lacking Submission</label>
            <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput1 }}</p>
          </td>
        </tr>
        <tr>
          <td v-if="recommendation.textInput2 !== 'null' && recommendation.textInput2.trim() !== ''">
            {{ requirements.reqDetails2 }}
          </td>

          <td style="text-align: left;width: 1000px;height: 100px;"
            v-if="recommendation.textInput2 !== 'null' && recommendation.textInput2.trim() !== ''">
            <label>Recommendation or Lacking Submission</label>
            <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput2 }}</p>
          </td>
        </tr>
        <tr>
          <td v-if="recommendation.textInput3 !== 'null' && recommendation.textInput3.trim() !== ''">
            {{ requirements.reqDetails3 }}
          </td>

          <td style="text-align: left;width: 1000px;height: 100px;"
            v-if="recommendation.textInput3 !== 'null' && recommendation.textInput3.trim() !== ''">
            <label>Recommendation or Lacking Submission</label>
            <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput3 }}</p>
          </td>
        </tr>
        <tr>
          <td v-if="recommendation.textInput4 !== 'null' && recommendation.textInput4.trim() !== ''">
            {{ requirements.reqDetails4 }}
          </td>

          <td style="text-align: left;width: 1000px;height: 100px;"
            v-if="recommendation.textInput4 !== 'null' && recommendation.textInput4.trim() !== ''">
            <label>Recommendation or Lacking Submission</label>
            <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput4 }}</p>
          </td>
        </tr>
        <tr>
          <td v-if="recommendation.textInput5 !== 'null' && recommendation.textInput5.trim() !== ''">
            {{ requirements.reqDetails5 }}
          </td>

          <td style="text-align: left;width: 1000px;height: 100px;"
            v-if="recommendation.textInput5 !== 'null' && recommendation.textInput5.trim() !== ''">
            <label>Recommendation or Lacking Submission</label>
            <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput5 }}</p>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- table 3 -->
    <table class="table3">
      <thead class="titlehead1">
        <tr style="text-align: center;">
          <th class="th2" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
          <th class="th2" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
        </tr>
      </thead>
      <tbody>
        <td style="text-align: center;font-size: 20px;padding: 20px;">Status of the Application: </td>
        <td style="text-align: center;font-size: 20px;padding-bottom: 20px;">
          <select class="inputall" v-model="selectedStatus"
            style="background-color: antiquewhite;text-align: center;width: 100%;">
            <option value="" disabled>Based on the MTSR Status</option>
            <option style="text-align: left;" value="Under Pre-Processing by Mining Tenement Evaluation Section">Under
              Pre-Processing by Mining Tenement Evaluation
              Section</option>
            <option style="text-align: left;" value="Under Preliminary Evaluation<">Under Preliminary Evaluation
            </option>
            <option style="text-align: left;" value="Pending Area Clearance/Status (FMS/EMPAS,LMS)">Pending Area
              Clearance/Status (FMS/EMPAS,LMS)</option>
            <option style="text-align: left;" value="Undergoing Publication/Posting/Radio Announcement">Undergoing
              Publication/Posting/Radio Announcement
            </option>
            <option style="text-align: left;"
              value="Published/Posted Announcement within 30-days period for possible protest/adverse claim">
              Published/Posted Announcement within 30-days period
              for possible protest/adverse claim</option>
            <option style="text-align: left;" value="With mining dispute filed at Panel of Arbitrators">With mining
              dispute filed at Panel of Arbitrators
            </option>
            <option style="text-align: left;" value="Appeal to the Mines Adjudication Board/LSD-CO/OP">Appeal to the
              Mines Adjudication Board/LSD-CO/OP
            </option>
            <option style="text-align: left;"
              value="Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc">Pending NCIP
              Certification/Proof of Consultation from
              LGU,ECC, etc</option>
            <option style="text-align: left;" value="Under Final Evaluation by R.O.">Under Final Evaluation by R.O.
            </option>
            <option style="text-align: left;" value="Endorsed to Central Office">Endorsed to Central Office</option>
            <option style="text-align: left;"
              value="Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for Reconsideration or Appeal">
              Denied by MGB-RO/COP/PA/MAB but within grace period
              for Motion for Reconsideration or Appeal</option>
            <option style="text-align: left;"
              value="Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for Reconsideration or Appeal">
              Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
              Motion for Reconsideration or Appeal</option>
            <option style="text-align: left;" value="A. Others (Renewal)">A. Others (Renewal)</option>
            <option style="text-align: left;" value="B. Others (With Clearance)">B. Others (With Clearance)</option>
            <option style="text-align: left;" value="Conversion from Other Tenement">Conversion from Other Tenement
            </option>
            <option style="text-align: left;"
              value="Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.">Denied by
              MGB-RO/COP/PA/MAP/DENR but with pending
              Appeal at the O.P.</option>
            <option style="text-align: left;" value="other">Other</option>
          </select>
          <input v-if="selectedStatus === 'other'" class="inputall1" v-model="otherStatus" style="width: 100%;"
            placeholder="Enter other Status" />
        </td>
      </tbody>
    </table>
    <table class="table4">
      <thead class="titlehead1">
        <tr style="text-align: center;">
          <th class="th2" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
          <th class="th2" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center;font-size: 20px;padding: 20px;">Overall
            Remarks/Status/Reccomendation</td>
          <td style="font-size: 15px;padding: 20px; width: 50%;">
            <label>Remarks /Status</label>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 500px;"
              v-model="overallStatus" ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="display: flex;flex-direction: column;justify-content: center;">
      <p style="font-size: 20px; margin-bottom: 5px;">View Faxsheet</p>
      <div>
        <button
          style="background-color: bisque;color: black;width: 150px;height:40px;border-radius: 5px;margin-left: 10px;"
          @click="update">
          UPDATE
        </button>
        <button
          style="background-color: bisque;color: black;width: 150px;height:40px;border-radius: 5px;margin-left: 10px;"
          @click="view">{{ isVisible ? 'Close' : 'View' }}
        </button>
      </div>
      <div class="drop-shadow-2xl bg-stone-100 mt-10 place-self-center" style="width: 1400px;" v-if="isVisible">
        <faxx />
      </div>
    </div>
  </div>
</template>

<script setup>
import headd from '../../../components/MTES/header.vue'
import imagees from '../../../components/MTES/modals/imguploads.vue'
import faxx from '../faxsheet/ffta-factsheet.vue'
import { API_BASE_URL } from '../../../config'

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
      overallStatus: '',
      isVisible: false,
      showChildComponent: false,
      selectedStatus: '',
      otherStatus: '',
      requirements: {
        reqDetails1: `
        1. Application Form (MGB Form No. 7-1) to be accompanied by eight (8)
            sets of the FTAA proposal and five (5) sets of the following:
            
            Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application
            (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013).`,
        reqDetails2: `
        2. Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/
            boundaries (in tabulated form) with major environmental features/ other projects
            (prepared, sealed and signed by a deputized Geodetic Engineer) `,
        reqDetails3: `
        3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),
            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist `,
        reqDetails4: `
        4. Proof of technical competence in the form of:
            4.1 Bio-data and track records in mining operations/ enviromental manangement 
            4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the Work Programs`,
        reqDetails5: `
        5. Affidavit of Undertaking (using MGB Form No.99-10)
            5.1. Brief Description of Business
            5.2. Proof of lot ownership/ consent of stockyard;`,
      },
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
  watch: {
    selectedStatus(newValue) {
      if (newValue !== 'other') {
        this.otherStatus = '';
      }
    }
  },
  methods: {
    view() {
      // this.isVisible = true;
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
      //MTSR details
      try {
        const mtsr = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
        const overallstatus = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
        const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id));
        const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id));
        this.mtsrvalue = filteredmtsr.mtsr
        this.overallStatus = filteredoverall.overallstatus
        this.selectedStatus = this.mtsrvalue
        this.otherStatus = this.selectedStatus
        // console.log(this.selectedStatus)

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
        // console.log(filteredrequirements)
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

        // Clear existing files to avoid duplicates
        Object.keys(this.uploadFiles).forEach(key => {
          this.uploadFiles[key] = [];
        });

        // Initialize uploadFiles object for file1 to file5
        for (let i = 1; i <= 5; i++) {
          const key = `file${i}`;
          this.uploadFiles[key] = [];
        }

        // Assign fetched files to uploadFiles
        uploadsrequirements.forEach((req) => {
          for (let i = 1; i <= 5; i++) {
            const key = `file${i}`;
            // Check if the file key exists in req and is not null
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

      //images 1stkuhaon
      try {
        const images = await axios.get(`${API_BASE_URL}/get_images`);
        const imagesrequirements = images.data.filter(req => req.id_reference == this.$route.params.detail_id);
        console.log(imagesrequirements);

        // Clear existing files to avoid duplicates
        Object.keys(this.imagesfile).forEach(key => {
          this.imagesfile[key] = [];
        });

        // Initialize uploadFiles object for file1 to file5
        for (let i = 1; i <= 5; i++) { //<------pila kabuok
          const key = `file${i}`;
          this.imagesfile[key] = [];
        }

        // Assign fetched files to uploadFiles
        imagesrequirements.forEach((req) => {
          for (let i = 1; i <= 5; i++) {//<------pila kabuok
            const key = `file${i}`;


            // Check if the file key exists in req and is not null
            if (req.hasOwnProperty(key) && req[key] !== null) {
              try {
                this.imagesfile[key] = JSON.parse(req[key]);
                // console.log(this.imagesfile.file1)
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
      //diri



    },
    update() {
      const formData = new FormData();
      formData.append('id_reference', this.$route.params.detail_id);

      if (this.selectedStatus === 'other') {
        formData.append('mtsr', this.otherStatus);
        formData.append('overallstatus', this.overallStatus);
      } else {
        formData.append('mtsr', this.selectedStatus);
        formData.append('overallstatus', this.overallStatus);
      }

      axios.post(`${API_BASE_URL}/update_mtsrstatus/${this.$route.params.detail_id}`, formData)
        .then(response => {
          console.log('mtsr & overstatus added: ', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      // Prepare the data
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

      // Prepare the data
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


      //ADD IMAGE/UPDATE //2nd
      // Add images
      const formData4 = new FormData();
      formData4.append('id_reference', this.$route.params.detail_id);

      // Iterate over each containerId in this.imagesfile
      for (const containerId in this.imagesfile) {
        if (this.imagesfile.hasOwnProperty(containerId)) {
          // Generate the fileKey based on the containerId
          // Ensure the containerId starts with "file" followed by a number (e.g., "file1", "file2", etc.)
          const fileKey = `file${containerId.replace('file', '')}`;

          // Append each file in this.imagesfile[containerId] to formData4 under the correct key
          this.imagesfile[containerId].forEach(file => {
            if (file.file !== undefined) {
              formData4.append(`${fileKey}[]`, file.file); // Append each file under the correct key
              console.log([...formData4])
            }
          });
        }
      }

      // Send FormData to server using axios
      axios.post(`${API_BASE_URL}/update_images/${this.$route.params.detail_id}`, formData4)
        .then(response => {
          console.log('Images uploaded successfully:', response.data);
        })
        .catch(error => {
          console.error('Error uploading images:', error);
        });

      //dri


      //upload files
      const formData3 = new FormData();
      formData3.append('id_reference', this.$route.params.detail_id);

      // Check if uploadFiles is defined and not null
      if (this.uploadFiles) {
        for (const [key, files] of Object.entries(this.uploadFiles)) {
          // Check if files is an array and has a length property
          if (Array.isArray(files) && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              const validExtensions = ['pdf', 'doc', 'docx'];
              // Check if file has a name and its extension is valid
              if (file.name && validExtensions.includes(file.name.split('.').pop().toLowerCase())) {
                formData3.append(`${key}[]`, file);
              }
              // else condition removed to suppress error message
            }
          }
        }
      }

      // Send FormData to server using axios
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
  },
}
</script>

<style lang="scss" scoped>
.title1 {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 120px;
}

.requirements1 {
  margin-top: 10px;
  text-align: center;
}

.titlehead1 {
  font-size: 20px;
}

.inputall {
  display: flex;
  width: 300px;
  height: 40px;
  background-color: rgb(235, 234, 234);
  color: black;
  margin-left: 1px;
  padding-left: 4px;
  margin-top: 20px;
  font-weight: 20;
  margin-bottom: 10px;
}

.inputall1::placeholder {
  background-color: #ffffff;
  color: black;
  opacity: 50%;
}

.reqData1 {
  text-align: left;
  text-align: justify;
  font-size: 15px;
  font-weight: 400;
  width: 600px;
}

.inputimg1 {
  text-align: left;
  width: 400px;
}

.table3 {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  border-collapse: collapse;
}

.table4 {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  border-collapse: collapse;
}

/* Table 1 styles */
.table1 {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  border-collapse: collapse;
}

.th1,
td {
  border: 1px solid #dddddd;
  padding: 8px;
}

.th1 {
  background-color: #e0b983;
}

.th2,
td {
  border: 1px solid #dddddd;
  padding: 1px;
}

.th2 {
  background-color: #e0b983;
}

/* Table 2 styles */
.table2 {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  border-collapse: collapse;
}

.table2 td {
  border: 1px solid #dddddd;
  padding: 8px;
  width: 50%;
  /* Set each column to occupy 50% of the table width */
}

.caption1 {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  caption-side: top;
}

.textarea1 {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>