<template>
    <div class="title">
        <h2>MANDATORY REQUIREMENTS</h2>
    </div>

    <!-- Table 1 -->
    <div class="requirements">
        <table class="table1">
            <thead class="titlehead">
                <tr>
                    <th>Requirements</th>
                    <th>Upload</th>
                    <th>Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData">
                        1. Application Form (MGB Form No. 11-2)
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        2. Duly certified Articles of Incorporation/ Partnership/ Association, By-Laws, and Certificate
                        of Registration issued by the SEC or authorized Government agency concerned;
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. Location map/sketch plan of the area of the proposed processing plant using NAMRIA
                        topographic map in a scale of 1:50,000
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation:</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        4. <u> Feasibility Study</u> including work programs, plant site, mill and plant lay-out/design,
                        details of technology to be employed in the proposed operation, anti-pollution devices/ measures
                        as well as the plant capacity of <u>Project Description</u> with detailed financial statement
                        for its operations incorporating the social and environmental expenditures, taxes and fees paid.
                        (MGB Form No. 5-3A);
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        5. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and
                        Community Relations Record (CEMCRR)
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        6. Environmental Compliance Certificate (ECC)
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        7. Proof of technical competence including, among others<br>&nbsp;
                        * curricula vitae and track records in mineral processing and environmental management of the
                        technical personnel who shall undertake the operation.<br>&nbsp;
                        * Sworn statement/ employment contract/ proof of availed services of the technical person/s who
                        will undertake the implementation of the Work Programs
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        8. Proof of financial capability to undertake the activities pursuant to the Feasibility Study
                        and EPEP, such as: <br>&nbsp;
                        a. Latest audited Financial Statement and/or Annual Report <br>&nbsp;
                        Credit Lines/Bank Guarantees and /or similar negotiable instruments.
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        9. Interim Importation Permit/
                        Certification from EMB on the use of chemicals (e.g. cyanide, mercury) in compliance with R.A.
                        No. 6969

                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        10. Brief history of applicant’s activities for the last five (5) years, if any
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        11.Supply Contract/Agreement with mining rights holders, if applicable
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        12. Other supporting papers as the Regional Director or the concerned may require or the
                        applicant may
                        submit.<br>&nbsp;
                        12.1 Environmental Protection and Enhancement Program (EPEP)<br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        12.2 Social Development Management Program (SDMP)
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Other Table -->

        <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h2>

        <div class="requirements">
            <table class="table1">
                <thead class="tablehead">
                    <tr>
                        <th>Requirements</th>
                        <th>Upload</th>
                        <th>Remarks / Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="reqData">
                            1. Corporate Secretary’s Certificate attesting to a Board Resolution authorizing the
                            President to sign and execute documents in connection with the MPP application
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="reqData">
                            2. Payment of Evaluation Fee for the FS
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            3. Payment of Evaluation Fee for EPEP
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            4. Prior approval or endorsement in the form of Resolution or Certification by at least the
                            majority of the Sanggunian concerned
                        </td>

                        <td class="inputimg">
                            <<upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            5.NCIP Certification or proof of land ownership, such as certified true copies of
                            Original/Transfer Certificate of Title, among others.
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Table 2 -->
            <table class="table2">
                <caption>Summary of Lacking Requirements</caption>
                <tbody>
                    <tr>
                        <td>
                            1. Application Form (MGB Form No. 11-2)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2. Duly certified Articles of Incorporation/ Partnership/ Association, By-Laws, 
                            and Certificate of Registration issued by the SEC or authorized Government agency concerned<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3. Location map/sketch plan of the area of the proposed processing plant using NAMRIA topographic map in a scale of 1:50,000<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4. <u>Feasibility Study</u> including work programs, plant site, mill and plant lay-out/design, 
                            details of technology to be employed in the proposed operation, anti-pollution devices/ measures 
                            as well as the plant capacity of <u>Project Description</u> with detailed financial statement for its 
                            operations incorporating the social and environmental expenditures, taxes and fees paid. (MGB Form No. 5-3A); <br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and Community Relations Record (CEMCRR)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6. Environmental Compliance Certificate (ECC)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7. Proof of technical competence including, among others:<br> &nbsp;
                                *curricula vitae and track records in mineral processing and environmental 
                                management of the technical personnel who shall undertake the operation. <br> &nbsp;
                                *Sworn statement/ employment contract/ proof of availed services of the 
                                technical person/s who will undertake the implementation of the Work Programs
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8. Proof of financial capability to undertake the activities pursuant to the Feasibility Study and EPEP, such as:<br> &nbsp;
                                a. Latest audited Financial Statement and/or Annual Report <br> &nbsp;
                                Credit Lines/Bank Guarantees and /or similar negotiable instruments.
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            9. Interim Importation Permit/ Certification from EMB on the use of chemicals (e.g. cyanide, mercury) in compliance with R.A. No. 6969<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10. Brief history of applicant’s activities for the last five (5) years, if any<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            11. Supply Contract/Agreement with mining rights holders, if applicable<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12. Other supporting papers as the Regional Director or the concerned may require or 
                            the applicant may submit.<br> &nbsp;
                                12.1 Environmental Protection and Enhancement Program (EPEP) <br> &nbsp;
                                12.2 Social Development Management Program (SDMP)
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                </tbody>
            </table>

            <!--Other Mandatory Requirement-->
            <table class="table2">
                <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Mandatory Requirements</h2>
                <tbdoy>
                    <tr>
                        <td>
                            1. Corporate Secretary’s Certificate attesting to a Board Resolution authorizing the President 
                            to sign and execute documents in connection with the MPP application<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2. Payment of Evaluation Fee for the FS<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3. Payment of Evaluation Fee for EPEP<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            4. Prior approval or endorsement in the form of Resolution or Certification by at 
                            least the majority of  the Sanggunian concerned<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5. NCIP Certification or proof of land ownership, such as certified true copies of 
                            Original/Transfer Certificate of Title, among others.<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                </tbdoy>
            </table>
        </div>
    </div>
</template>


<script setup>
import upload from '../../../../src/components/MTES/multiple-upload.vue';

// Function to copy remarks from Table 1 to Table 2 for all rows
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
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
        }
      }
    }
  }
}
</script>

<style scoped>
.title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
}

.requirements {
    margin-top: 10px;
    text-align: center;
}

.titlehead {
    font-size: 20px;
}

.reqData {
    text-align: left;
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    width: 600px;
}

.inputimg {
    text-align: left;
    width: 400px;
}



table {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
}

th,
td {
    border: 1px solid #dddddd;
    padding: 8px;
}

th {
    background-color: #e0b983;
}

caption {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: left;
    caption-side: top;
}

textarea {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
</style>