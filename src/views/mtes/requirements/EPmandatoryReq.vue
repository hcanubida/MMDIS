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
            1. Application Form (MGB Form No. 5-1)
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea class="textarea1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            2. Payment of Filing Fee
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4), <br>
            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            4. Affidavit of Undertaking pursuant to DMO No. 99-10 as amended, for a corporation, partnership,
            association or cooperative
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            5. For corporation/partnership/Association/cooperative: SEC/CDA-certifies Certificate of Registration,
            Articles of Incorporation/Partnership/ Association and By-Laws; or a Certification from MGB CO/RO concerned
            that such documents are duly registered in that Office (note: with minimum authorized capital of PhP100 M
            and paid-up capital of PhP6.25M pursuant to DMO No. 2013-01);
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            6. Location Map/Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/boundaries (in tabulated
            form) with major environmental features/other projects (prepared, sealed and signed by a deputized Geodetic
            Engineer)
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            7. Proof of technical competence to undertake the implementation of activities under the Programs:<br>&nbsp;
            7.1 Curricula Vitae and track records in exploration and environmental management;<br>&nbsp;
            7.2 Sworn statement/employment contract/ proof of availed services of the technical person(s) who will
            undertake the <br>&nbsp;implementation of the Programs
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            8. Proof of financial capability to undertake the implementation of the activities under the work programs:
            <br>&nbsp;
            * Latest Audited Financial Statement and/or Annual Report for the preceding Year<br>&nbsp;
            * Credit lines and/or certification/s of bank guarantee/deposit and/or similar negotiable instruments
          </td>

          <td class="inputimg1">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;"></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Other Requirement -->

    <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h2>

    <div class="requirements1">
      <table class="table1">
        <thead class="tablehead1">
          <tr style="text-align: center;">
            <th class="th1">Requirements</th>
            <th class="th1">Upload</th>
            <th class="th1">Remarks / Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="reqData1">
              1. Certificate Environmental Management and Community Relations Record (CEMCRR) or Certificate of
              Exemption from the CEMCRR ;
            </td>

            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>
          <tr>
            <td class="reqData1">
              2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed and sealed by a licensed
              Mining Engineer or Geologist;
            </td>

            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS and other agencies
              concerned)
            </td>

            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              4. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of the company’s
              authorized signatory;
            </td>
            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1"></textarea>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              5.Proof of publication, posting and radio announcement of the Notice of Application: <br>&nbsp;
              5.1. Published once in:<br>&nbsp;
              a. Local newspaper<br>&nbsp;
              b. national newspaper <br>&nbsp;
              5.2. Posted for one (1) week on the bulletin boards of:<br>&nbsp;
              a. MGB Regional Office No. X<br>&nbsp;
              b. Province of Misamis Oriental <br>&nbsp;
              c. City of Cagayan de Oro <br>&nbsp;
              5.3. radio announced daily for one (1) week in a Local radio program<br>&nbsp;
            </td>

            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse claim/protest/opposition
            </td>

            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              7. NCIP Certification or proof of landownership, such as certified true copies of Original/Transfer
              Certificate of Title, among others.
            </td>

            <td class="inputimg1">
              <upload />
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2" class="textarea1"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Table 2 -->
      <table class="table1">
        <caption style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;" class="caption1">Summary of Lacking Requirements</caption>
        <tbody>
          <tr>

            <td>
              1. Application Form (MGB Form No. 5-1)<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off" class="textarea1"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea rows="3" style="color: black;" wrap="off" class="textarea1"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>

            <td>
              2. Payment of Filing Fee<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>


          <tr>

            <td>
              3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4), duly prepared,
               signed and sealed by a licensed Mining Engineer or Geologist<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>

            <td>
              4. Affidavit of Undertaking pursuant to DMO No. 99-10 as amended, 
              for a corporation, partnership, association or cooperative<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>

            <td>
              5. For corporation/ partnership/ Association/ cooperative: SEC/ CDA-certifies 
              Certificate of Registration, Articles of Incorporation/ Partnership/ Association 
              and By-Laws; or a Certification from MGB CO/ RO concerned that such documents 
              are duly registered in that Office (note: with minimum authorized capital of 
              PhP100 M and paid-up capital of PhP6.25 M pursuant to DMO No. 2013-01);<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>

            <td>
              6. Location Map/Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/boundaries (in tabulated form) with major environmental features/other projects (prepared, sealed and signed by a deputized Geodetic Engineer)<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>

            <td>
              7. Proof of technical competence to undertake the implementation of activities under the Programs:<br> &nbsp;
                  * 6.1 Curricula Vitae and track records in exploration and environmental management;<br>&nbsp;
                  * 6.2 Sworn statement/employment contract/ proof of availed services of the technical person(s) 
                  who will undertake the implementation of the Programs
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea>
              <!-- Disable text wrapping -->
            </td>
          </tr>

        </tbody>
      </table>
      
    <!--other requirement -->
      <table class="table2">
        <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h2>
      <tbody>
          <tr>
            <td>
              1. Certificate Environmental Management and Community Relations Record (CEMCRR) or Certificate of Exemption from the CEMCRR; <br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>
            <td>
              2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed and sealed by a licensed Mining Engineer or Geologist; <br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>
            <td>
              3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS and other agencies concerned)<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>
            <td>
              4. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of the company’s authorized signatory;<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>
            <td>
              5. Proof of publication, posting and radio announcement of the Notice of Application:<br> &nbsp;
                  5.1  Published once in: <br> &nbsp;
                       a. Local newspaper <br> &nbsp;
                       b. national newspaper <br> &nbsp;
                  5.2   Posted for one (1) week on the bulletin boards of:<br> &nbsp;
                       a. MGB Regional Office No. X <br> &nbsp;
                       b. Province of Misamis Oriental <br> &nbsp;
                       c. City of Cagayan de Oro<br> &nbsp;
                  5.3  radio announced daily for one (1) week in a Local radio program <br>&nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>
            <td>
              6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse claim/protest/opposition<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>

          <tr>
            <td>
              7. NCIP Certification or proof of landownership, such as certified true copies of Original/Transfer Certificate of Title, among others.<br> &nbsp;
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea1" rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea1"  rows="3" style="color: black;" wrap="off"></textarea>
              <!-- Disable text wrapping -->
            </td>
          </tr>

      </tbody>

      </table>
    </div>
  </div>
</template>


<script setup>
import upload from '../../../components/MTES/multiple-upload.vue'
import headd from '../../../components/MTES/header.vue'


function copyRemarksFromTable1ToTable2() {
    // Get all the rows in Table 1
    const table1Rows = document.querySelectorAll('.table1 tbody tr');
    
    // Loop through each row
    table1Rows.forEach((row, index) => {
        // Get the remarks textarea within the current row
        const table1Remarks = row.querySelector('textarea').value;
        
        // Find the corresponding row in Table 2 based on the index
        const table2Row = document.querySelectorAll('.table2 tbody tr')[index];
        
        // Set the remarks in Table 2 to match those from Table 1
        table2Row.querySelector('textarea').value = table1Remarks;
    });
}
</script>

<script>
export default {
  mounted() {
    // Call the function to copy remarks when the component is mounted
    copyRemarksFromTable1ToTable2();
  },
  methods: {
    fileSelected() {
      this.$refs.fileInput.click();
    },
    onFileSelect(event) {
      const files = event.target.files;
      if(files.length === 0) return;
      for (let i = 0; i < files.length; i++){
        if(file[i].type.split("/")[0] != "image")continue;
        if(!this.images.some((e)=> e.name === files[i].name)){
          this.images.push({name:files[i].name, url:URL.createObjectURL(files[i])})
        }
      }
    }
  }
}
</script>





<style scoped>
.title1 {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 120px;
}

.requirements1{
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


.table1 {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
}

.th1,
td {
  border: 1px solid #dddddd;
  padding: 8px;
}

.th1 {
  background-color: #e0b983;
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