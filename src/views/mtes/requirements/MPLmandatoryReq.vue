<template>
    <div>
        <headd/>
    </div>

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
                        1. Application Form/Letter Intent
                    </td>
                    <td class="td6">
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
                        2. Location map/sketch plan of the proposed processing plant using NAMRIA topographic map in a
                        scale of 1:50,000 or 1:10,000
                    </td>

                    <td class="td6">
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
                        3. Project Description and plant layout/design including cost of project duly prepared and
                        signed by a Licensed Metallurgical Engineer

                    </td>

                    <td class="td6">
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
                        4. Small-Scale Miners License of the duly authorized representative
                    </td>

                    <td class="td6">
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
                        5. Proof of Technical Competence
                    </td>

                    <td class="td6">
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
                        6. Proof of Financial Capability such as Latest Audited Financial Statement, Annual Report for
                        the Preceding Year, and Credit Line/s and/proof of bank deposit/s, in the amount that shall not
                        be less than the cost of project
                    </td>

                    <td class="td6">
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
                        7. Supply Contract/Agreement with the Small-Scale Mining Contractor/s or MPL Holder/s
                    </td>
                    <td class="td6">
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
                        8. For individual:
                        Certified Photocopy of DTI Registration
                        <br>&nbsp;
                        <br>&nbsp;
                        For Association/Cooperative:
                        Securities and Exchange Commission or other Concerned Agency(ies)-Certified True Copy of the
                        Certificate of Registration, Articles of Incorporation/Association, and By-Laws or Certification
                        from MGB or MGB RO that said documents are duly registered in that Office, with a minimum
                        authorized capital of PhP10,000,000 and not to exceed PhP200,000,000

                    </td>


                    <td class="td6">
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
                        1. Application Form/Letter Intent <br> &nbsp;
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
                        2. Location map/sketch plan of the proposed processing plant using NAMRIA topographic map in a
                        scale of 1:50,000 or 1:10,000 <br> &nbsp;
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
                        3. Project Description and plant layout/design including cost of project duly prepared and
                        signed by a Licensed Metallurgical Engineer

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
                        4. Small-Scale Miners License of the duly authorized representative
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
                        5. Proof of Technical Competence
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
                        6. Proof of Financial Capability such as Latest Audited Financial Statement, Annual Report for
                        the Preceding Year, and Credit Line/s and/proof of bank deposit/s, in the amount that shall not
                        be less than the cost of project
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
                        7. Supply Contract/Agreement with the Small-Scale Mining Contractor/s or MPL Holder/s <br> &nbsp;
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
                        8. For individual:
                        Certified Photocopy of DTI Registration
                        <br>&nbsp;
                        <br>&nbsp;
                        For Association/Cooperative:
                        Securities and Exchange Commission or other Concerned Agency(ies)-Certified True Copy of the
                        Certificate of Registration, Articles of Incorporation/Association, and By-Laws or Certification
                        from MGB or MGB RO that said documents are duly registered in that Office, with a minimum
                        authorized capital of PhP10,000,000 and not to exceed PhP200,000,000
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
import headd from '../../../components/MTES/header.vue'

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
.td6 {
  width: 200px;
  text-align: center;
}
.select{
  text-align: center;
  padding: 10px;
  box-shadow: 2px 3px 5px rgb(175, 175, 175)
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