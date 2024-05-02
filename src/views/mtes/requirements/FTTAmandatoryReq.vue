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

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="border: 1px solid #ccc; border-radius: 4px; width: 100% ; "
              v-model="remarks.textInput1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
               v-model="recommendation.textInput1"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            2. Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/
            boundaries (in tabulated form) with major environmental features/ other projects
            (prepared, sealed and signed by a deputized Geodetic Engineer)
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              v-model="remarks.textInput2"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
               v-model="recommendation.textInput2"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),
            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              v-model="remarks.textInput3"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
               v-model="recommendation.textInput3"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            4. Proof of technical competence in the form of:<br> &nbsp;
            4.1 Bio-data and track records in mining operations/ enviromental manangement <br> &nbsp;
            4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the Work Programs
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              v-model="remarks.textInput4"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
               v-model="recommendation.textInput4"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            5. Affidavit of Undertaking (using MGB Form No.99-10)
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              v-model="remarks.textInput5"></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
               v-model="recommendation.textInput5"></textarea>
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
    <table class="table3">
      <thead class="titlehead1">
        <tr style="text-align: center;">
          <th class="th2" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
          <th class="th2" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
        </tr>
      </thead>
      <tbody>
        <td style="text-align: center;font-size: 20px;padding: 20px;">Status</td>
        <td style="text-align: center;font-size: 20px;padding-bottom: 20px;">
          <select class="inputall" v-model="selectedStatus"
            style="background-color: antiquewhite;text-align: center;width: 100%;">
            <option value="" disabled>Based of the Status MTSR</option>
            <option style="text-align: left;" value="Under Pre-Processing by Mining Tenement Evaluation
              Section">Under Pre-Processing by Mining Tenement Evaluation
              Section</option>
            <option style="text-align: left;" value="Under Preliminary Evaluation<">Under Preliminary Evaluation
            </option>
            <option style="text-align: left;" value="Pending Area Clearance/Status (FMS/EMPAS,LMS)">Pending Area
              Clearance/Status (FMS/EMPAS,LMS)</option>
            <option style="text-align: left;" value="Undergoing Publication/Posting/Radio Announcement">Undergoing
              Publication/Posting/Radio Announcement
            </option>
            <option style="text-align: left;" value="Published/Posted Announcement within 30-days period
              for possible protest/adverse claim">Published/Posted Announcement within 30-days period
              for possible protest/adverse claim</option>
            <option style="text-align: left;" value="With mining dispute filed at Panel of Arbitrators">With mining
              dispute filed at Panel of Arbitrators
            </option>
            <option style="text-align: left;" value="Appeal to the Mines Adjudication Board/LSD-CO/OP">Appeal to the
              Mines Adjudication Board/LSD-CO/OP
            </option>
            <option style="text-align: left;" value="Pending NCIP Certification/Proof of Consultation from
              LGU,ECC, etc">Pending NCIP Certification/Proof of Consultation from
              LGU,ECC, etc</option>
            <option style="text-align: left;" value="Under Final Evaluation by R.O.">Under Final Evaluation by R.O.
            </option>
            <option style="text-align: left;" value="Endorsed to Central Office">Endorsed to Central Office</option>
            <option style="text-align: left;" value="Denied by MGB-RO/COP/PA/MAB but within grace period
              for Motion for Reconsideration or Appeal">Denied by MGB-RO/COP/PA/MAB but within grace period
              for Motion for Reconsideration or Appeal</option>
            <option style="text-align: left;" value="Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
              Motion for Reconsideration or Appeal">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
              Motion for Reconsideration or Appeal</option>
            <option style="text-align: left;" value="A. Others (Renewal)">A. Others (Renewal)</option>
            <option style="text-align: left;" value="B. Others (With Clearance)">B. Others (With Clearance)</option>
            <option style="text-align: left;" value="Conversion from Other Tenement">Conversion from Other Tenement
            </option>
            <option style="text-align: left;" value="Denied by MGB-RO/COP/PA/MAP/DENR but with pending
              Appeal at the O.P.">Denied by MGB-RO/COP/PA/MAP/DENR but with pending
              Appeal at the O.P.</option>
            <option style="text-align: left;" value="other">Other</option>
          </select>
          <input v-if="selectedStatus === 'other'" class="inputall1" v-model="otherStatus" style="width: 100%;"
            placeholder="Enter other Status" />
        </td>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import headd from '../../../components/MTES/header.vue'
import upload from '../../../components/MTES/multiple-upload.vue'
// import { detail_id } from '../dashboards/FTAA-dashboard.vue';

</script>
<script>

export default {
  name: 'typeapp',
  props: {
    detail_id: String,
  },
  data() {
    return {
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
    async getDetails() {
      try {
        const remarks = await axios.get('http://localhost:8000/get_remarks');
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
        const requirements = await axios.get('http://localhost:8000/get_recommendation');
        const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id);
        console.log(filteredrequirements)
        this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
        this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
        this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
        this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
        this.recommendation.textInput5 = filteredrequirements.input5 !== null ? filteredrequirements.input5 : '';
      } catch (error) {
        console.error('Error fetching reco details:', error);
      }
    },
    fileSelected() {
      this.$refs.fileInput.click();
    },
    onFileSelect(event) {
      const files = event.target.files;
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (file[i].type.split("/")[0] != "image") continue;
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
        }
      }
    },
    update() {
      const formData = new FormData();
      formData.append('id_reference', this.$route.params.detail_id);
      // Append category based on selectedCategory
      if (this.selectedStatus === 'other') {
        // Append otherCategory if selectedCategory is 'others'
        formData.append('mtsr', this.otherStatus);
      } else {
        // Append selectedCategory directly otherwise
        formData.append('mtsr', this.selectedStatus);
      }
      // Make axios POST request
      axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id}`, formData)
        .then(response => {
          // Handle response
          console.log('mtsr added: ', response.data);
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
        });

      // Prepare the data
      const formData1 = new FormData();
      formData1.append('id_reference', this.$route.params.detail_id);
      // console.log('id_reference', this.$route.params.detail_id)

      for (let i = 1; i <= 5; i++) {
        formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
        // console.log(`input${i}`, this.recommendation[`textInput${i}`])
      }
      // Append other input values here...

      // Make a POST request to update remarks
      axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id}`, formData1)
        .then(response => {
          console.log('Remarks updated successfully:', response.data);
          // Handle success...
        })
        .catch(error => {
          console.error('Error updating remarks:', error);
          // Handle error...
        });

      // Prepare the data
      const formData2 = new FormData();
      formData2.append('id_reference', this.$route.params.detail_id);
      // console.log('id_reference', this.$route.params.detail_id)

      for (let i = 1; i <= 5; i++) {
        formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
        // console.log(`input${i}`, this.recommendation[`textInput${i}`])
      }

      // Append other input values here...

      // Make a POST request to update recommendations
      axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id}`, formData2)
        .then(response => {
          console.log('Recommendations updated successfully:', response.data);
          window.location.reload()
        })
        .catch(error => {
          console.error('Error updating recommendations:', error);
          // Handle error...
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