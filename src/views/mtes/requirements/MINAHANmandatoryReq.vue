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
                    <th>Level of Compliance (marked)</th>
                    <th>Upload</th>
                    <th>Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData">
                        1. Petition/ Proposal for Minahang Bayan

                    </td>

                    <td>
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>


                </tr>
                <tr>
                    <td class="reqData">
                        2. Area Status <br>&nbsp;
                        <br>&nbsp;
                        MGB X (Status vis-avis the prior and existing mining rights and application, and areas closed to
                        mining applications) <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the
                        ICCs/Ips)<br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        DENR 10 (Area Status/Clearance)<br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        LGU (Province/City Government Concerned - Area Status/Clearance)
                    </td>

                    <td>
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select> <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. Proofs of Notice and Endorsement of the Sanggunian Concerned:<br>&nbsp;
                        <br>&nbsp;
                        Panlalawigan
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        Bayan/Panlungsod
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        Barangay

                    </td>
                    
                    <td>
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select> 
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        4.  MGB RO Evaluation Report re:<br>&nbsp;
                        <br>&nbsp;
                        Area viability for Small Scale Mining <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        Allocation for Mineral Processing Zone (if applicable)
                    </td>

                    <td>
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>
                </tr>

                <tr>
                    <td class="reqData">
                        5.   Proofs of Notice:<br>&nbsp;
                        <br>&nbsp;
                        To mining tenement holder(s)
                    </td>
                    
                    <td>
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>

                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        6.  Proofs of Posting:<br>&nbsp;
                        <br>&nbsp;
                        MGB RO concerned
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        Provincial Governor’s Office
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        Mayor’s Office
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        Barangay(s)
                    </td>

                    <td>
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select> 
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                        <br>&nbsp;
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    
                    
                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        7.  Proof of Publication
                    </td>
                    <td>
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        8.  PMRB Certificate
                        <br>&nbsp;
                        <br>&nbsp;
                        That there is no formal Protest filed<br>&nbsp;
                        or<br>&nbsp;
                        That the Favorable Decision has become final & executory
                    </td>

                
                    <td>
                        <br>&nbsp;
                        <br>&nbsp;
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: black;"></textarea>
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
                            1. Petition/ Proposal for Minahang Bayan<br> &nbsp;
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
                            2. Area Status <br>&nbsp;
                            <br>&nbsp;
                            MGB X (Status vis-avis the prior and existing mining rights and application, and areas closed to
                            mining applications) <br>&nbsp;
                            <br>&nbsp;
                            NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the
                            ICCs/Ips)<br>&nbsp;
                            <br>&nbsp;
                            DENR 10 (Area Status/Clearance)<br>&nbsp;
                            <br>&nbsp;
                            LGU (Province/City Government Concerned - Area Status/Clearance)<br> &nbsp;
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
                            3. Proofs of Notice and Endorsement of the Sanggunian Concerned:<br>&nbsp;
                            <br>&nbsp;
                            Panlalawigan
                            <br>&nbsp;
                            Bayan/Panlungsod
                            <br>&nbsp;
                            Barangay<br> &nbsp;
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
                            4.  MGB RO Evaluation Report re:<br>&nbsp;
                            <br>&nbsp;
                            Area viability for Small Scale Mining <br>&nbsp;
                            <br>&nbsp;
                            Allocation for Mineral Processing Zone (if applicable)<br> &nbsp;
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
                            5.   Proofs of Notice:<br>&nbsp;
                            <br>&nbsp;
                            To mining tenement holder(s)<br> &nbsp;
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
                            6.  Proofs of Posting:<br>&nbsp;
                            <br>&nbsp;
                            MGB RO concerned
                            <br>&nbsp;
                            Provincial Governor’s Office
                            <br>&nbsp;
                            Mayor’s Office
                            <br>&nbsp;
                            Barangay(s)<br> &nbsp;
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
                            7.  Proof of Publication<br> &nbsp;
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
                            8.  PMRB Certificate
                            <br>&nbsp;
                            That there is no formal Protest filed<br>&nbsp;
                            or<br>&nbsp;
                            That the Favorable Decision has become final & executory<br> &nbsp;
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