<template>
  <div>
    <headd />
  </div>

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
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ; " v-model="remarks.textInput1 "></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea style="color: black; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              @input="copyRemarksFromTable1ToTable2" v-model="recommendation.textInput1"></textarea>
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
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;" v-model="remarks.textInput2 "></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: black; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              @input="copyRemarksFromTable1ToTable2" v-model="recommendation.textInput2"></textarea>
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
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;" v-model="remarks.textInput3 "></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: black; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              @input="copyRemarksFromTable1ToTable2" v-model="recommendation.textInput3"></textarea>
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
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;" v-model="remarks.textInput4 "></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: black; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              @input="copyRemarksFromTable1ToTable2" v-model="recommendation.textInput4"></textarea>
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
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;" v-model="remarks.textInput5 "></textarea>
            <label>Recommendation or Lacking Submission : </label><br>
            <textarea style="color: black; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"
              @input="copyRemarksFromTable1ToTable2" v-model="recommendation.textInput5"></textarea>
          </td>
        </tr>
      </tbody>
    </table>


    <!-- Table 2 -->
    <table class="table2">
      <caption style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Summary of
        Lacking Requirements</caption>
      <tbody>
        <tr>

          <td>
            1. Application Form (MGB Form No. 7-1) to be accpompanied by eight (8)
            sets of the FTAA proposal and five (5) sets of the following: <br> &nbsp;
            <br> &nbsp;
            Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application
            (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013). <br> &nbsp;
            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
          </td>

          <td style="text-align: left;width: 1000px;">
            <label>Recommendation:</label>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"></textarea>
            <label>Based on the Status of MTSR:</label>
            <label for="status">Status of MTSR:</label>
            <select id="status" name="status" style="border: 1px solid #ccc; border-radius: 4px; width: 100% ;">
              <option value="status1">Select</option>
              <option value="status2">Under Pre-Processing by Mining Tenement Evaluation Section
              </option>
              <option value="status3">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
              <option value="status4">Under Preliminary Evaluation </option>
              <option value="status5">Undergoing Publication/Posting/Radio Announcement</option>
              <option value="status6">Published/Posted Announcement within 30-days period for possible protest/adverse
                claim</option>
              <option value="status7">With mining dispute filed at Panel of Arbitrators</option>
              <option value="status8">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
              <option value="status9">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc</option>
              <option value="status10">Under Final Evaluation by R.O.</option>
              <option value="status11">Endorsed to Central Office</option>
              <option value="status12">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for
                Reconsideration or Appeal</option>
              <option value="status13">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for
                Reconsideration or Appeal </option>
              <option value="status14">A. Others (Renewal)</option>
              <option value="status15">B. Others (With Clearance)</option>
              <option value="status16">Conversion from Other Tenement</option>
              <option value="status17">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
            </select>
          </td>
        </tr>

        <tr>

          <td>
            2. Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/
            boundaries (in tabulated form) with major environmental features/ other projects
            (prepared, sealed and signed by a deputized Geodetic Engineer) <br> &nbsp;
            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
          </td>

          <td style="text-align: left;width: 1000px;">
            <label>Recommendation:</label>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"></textarea>
            <label>Based on the Status of MTSR:</label>
            <label for="status">Status of MTSR:</label>
            <select id="status" name="status" style="border: 1px solid #ccc; border-radius: 4px; width: 100% ;">
              <option value="status1">Select</option>
              <option value="status2">Under Pre-Processing by Mining Tenement Evaluation Section
              </option>
              <option value="status3">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
              <option value="status4">Under Preliminary Evaluation </option>
              <option value="status5">Undergoing Publication/Posting/Radio Announcement</option>
              <option value="status6">Published/Posted Announcement within 30-days period for possible protest/adverse
                claim</option>
              <option value="status7">With mining dispute filed at Panel of Arbitrators</option>
              <option value="status8">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
              <option value="status9">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc</option>
              <option value="status10">Under Final Evaluation by R.O.</option>
              <option value="status11">Endorsed to Central Office</option>
              <option value="status12">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for
                Reconsideration or Appeal</option>
              <option value="status13">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for
                Reconsideration or Appeal </option>
              <option value="status14">A. Others (Renewal)</option>
              <option value="status15">B. Others (With Clearance)</option>
              <option value="status16">Conversion from Other Tenement</option>
              <option value="status17">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
            </select>
          </td>
        </tr>


        <tr>

          <td>
            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),
            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist <br> &nbsp;
            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
          </td>

          <td style="text-align: left;width: 1000px;">
            <label>Recommendation:</label>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"></textarea>
            <label>Based on the Status of MTSR:</label>
            <label for="status">Status of MTSR:</label>
            <select id="status" name="status" style="border: 1px solid #ccc; border-radius: 4px; width: 100% ;">
              <option value="status1">Select</option>
              <option value="status2">Under Pre-Processing by Mining Tenement Evaluation Section
              </option>
              <option value="status3">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
              <option value="status4">Under Preliminary Evaluation </option>
              <option value="status5">Undergoing Publication/Posting/Radio Announcement</option>
              <option value="status6">Published/Posted Announcement within 30-days period for possible protest/adverse
                claim</option>
              <option value="status7">With mining dispute filed at Panel of Arbitrators</option>
              <option value="status8">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
              <option value="status9">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc</option>
              <option value="status10">Under Final Evaluation by R.O.</option>
              <option value="status11">Endorsed to Central Office</option>
              <option value="status12">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for
                Reconsideration or Appeal</option>
              <option value="status13">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for
                Reconsideration or Appeal </option>
              <option value="status14">A. Others (Renewal)</option>
              <option value="status15">B. Others (With Clearance)</option>
              <option value="status16">Conversion from Other Tenement</option>
              <option value="status17">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
            </select>
          </td>
        </tr>

        <tr>

          <td>
            4. Proof of technical competence in the form of:<br> &nbsp;
            4.1 Bio-data and track records in mining operations/ enviromental manangement <br> &nbsp;
            4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the Work Programs
            <br> &nbsp;
            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
          </td>

          <td style="text-align: left;width: 1000px;">
            <label>Recommendation:</label>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"></textarea>
            <label>Based on the Status of MTSR:</label>
            <label for="status">Status of MTSR:</label>
            <select id="status" name="status" style="border: 1px solid #ccc; border-radius: 4px; width: 100% ;">
              <option value="status1">Select</option>
              <option value="status2">Under Pre-Processing by Mining Tenement Evaluation Section
              </option>
              <option value="status3">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
              <option value="status4">Under Preliminary Evaluation </option>
              <option value="status5">Undergoing Publication/Posting/Radio Announcement</option>
              <option value="status6">Published/Posted Announcement within 30-days period for possible protest/adverse
                claim</option>
              <option value="status7">With mining dispute filed at Panel of Arbitrators</option>
              <option value="status8">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
              <option value="status9">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc</option>
              <option value="status10">Under Final Evaluation by R.O.</option>
              <option value="status11">Endorsed to Central Office</option>
              <option value="status12">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for
                Reconsideration or Appeal</option>
              <option value="status13">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for
                Reconsideration or Appeal </option>
              <option value="status14">A. Others (Renewal)</option>
              <option value="status15">B. Others (With Clearance)</option>
              <option value="status16">Conversion from Other Tenement</option>
              <option value="status17">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
            </select>
          </td>
        </tr>

        <tr>

          <td>
            5. Affidavit of Undertaking (using MGB Form No.99-10) <br>&nbsp;
            5.1. Brief Description of Business <br>&nbsp;
            5.2. Proof of lot ownership/ consent of stockyard; <br> &nbsp;
            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
          </td>

          <td style="text-align: left;width: 1000px;">
            <label>Recommendation:</label>
            <textarea style="color: red; border: 1px solid #ccc; border-radius: 4px; width: 100% ;"></textarea>
            <label>Based on the Status of MTSR:</label>
            <label for="status">Status of MTSR:</label>
            <select id="status" name="status" style="border: 1px solid #ccc; border-radius: 4px; width: 100% ;">
              <option value="status1">Select</option>
              <option value="status2">Under Pre-Processing by Mining Tenement Evaluation Section
              </option>
              <option value="status3">Pending Area Clearance/Status (FMS/EMPAS,LMS)</option>
              <option value="status4">Under Preliminary Evaluation </option>
              <option value="status5">Undergoing Publication/Posting/Radio Announcement</option>
              <option value="status6">Published/Posted Announcement within 30-days period for possible protest/adverse
                claim</option>
              <option value="status7">With mining dispute filed at Panel of Arbitrators</option>
              <option value="status8">Appeal to the Mines Adjudication Board/LSD-CO/OP</option>
              <option value="status9">Pending NCIP Certification/Proof of Consultation from LGU,ECC, etc</option>
              <option value="status10">Under Final Evaluation by R.O.</option>
              <option value="status11">Endorsed to Central Office</option>
              <option value="status12">Denied by MGB-RO/COP/PA/MAB but within grace period for Motion for
                Reconsideration or Appeal</option>
              <option value="status13">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending Motion for
                Reconsideration or Appeal </option>
              <option value="status14">A. Others (Renewal)</option>
              <option value="status15">B. Others (With Clearance)</option>
              <option value="status16">Conversion from Other Tenement</option>
              <option value="status17">Denied by MGB-RO/COP/PA/MAP/DENR but with pending Appeal at the O.P.</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="display: flex;flex-direction: column;justify-content: center;">
      <p style="font-size: 20px; margin-bottom: 5px;">View Faxsheet</p>
      <div>
        <button style="background-color: bisque;color: black;width: 150px;height:40px;border-radius: 5px;"
          @click="save">
          SAVE
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import headd from '../../../components/MTES/header.vue'
import upload from '../../../components/MTES/multiple-upload.vue'

</script>
<script>
export default {
  name: 'typeapp',
  data() {
    return {
      remarks: {
        textInput1: '',
        textInput2: '',
        textInput3: '',
        textInput4: '',
        textInput5: '',
        textInput6: '',
        textInput7: '',
        textInput8: '',
        textInput9: '',
        textInput10: '',
        textInput11: '',
        textInput12: '',
        textInput13: '',
        textInput14: '',
        textInput15: '',
      },
      recommendation: {
        textInput1: '',
        textInput2: '',
        textInput3: '',
        textInput4: '',
        textInput5: '',
        textInput6: '',
        textInput7: '',
        textInput8: '',
        textInput9: '',
        textInput10: '',
        textInput11: '',
        textInput12: '',
        textInput13: '',
        textInput14: '',
        textInput15: '',
      }
    };
  },
  methods: {
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
    save() {
      console.log(this.remarks)
      const formData = new FormData();

      for (let i = 1; i <= 5; i++) {
        formData.append(`input${i}`, this.remarks[`textInput${i}`]);
      }
      formData.append('id_reference', 30);

      

      // Make a POST request using Axios
      axios.post('http://localhost:8000/add_remarks', formData)
        .then(response => {
          console.log('Remarks successfull:', response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

        console.log(this.recommendation)
        const formData2 = new FormData();
        for (let i = 1; i <= 5; i++) {
        formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
      }
      formData2.append('id_reference', 2);

      // Make a POST request using Axios
      axios.post('http://localhost:8000/add_recommendation', formData2)
        .then(response => {
          console.log('Recommendation successfull:', response.data);
        })
        .catch(error => {
          console.error('Error2:', error);
        });
    }
  }
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