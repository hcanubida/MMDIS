<template>
    <div>
        <headd />
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
                    <th>Upload</th>
                    <th>Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData">
                        1. Small-Scale Miner’s License
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
                        2. Duly accomplished and notarized application form (Form No. SSM-01)
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
                        3. Application Fee of PhP10,000 to the Province/City Concerned
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
                        4. For individual:
                        Certified Photocopy of DTI Registration <br> &nbsp;
                        For association/Cooperative:
                        Securities and Exchange Commission or other Concerned Agency(ies)-Certified True Copy of the
                        Certificate of Registration, Articles of Incorporation/Association, and By-Laws or Certification
                        from MGB or MGB RO that said documents are duly registered in that Office
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
                        5. Location map/sketch plan of the SSMC Applied Area showing geographic coordinates, major
                        environmental features, and other projects using NAMRIA topographic map in a scale of 1:10,000
                        duly prepared signed sealed by a Deputized Geodetic Engineer
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
                        6. Proposed Two-Year Work Program (Form No. SSM-02)
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
                            1. NCIP Certification (Certificate of Non-Overlap or Certification Precondition) or the
                            NCIP’s Field-Based Investigation Report/Validation Report
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
                            2. Environmental Compliance Certificate
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
                            3. Potential Environmental Impact Management Plan (PEIMP) Form No. SSM-03
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
                            4. Community Development Management Plan (CDMP) Form No. SSM-04
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
                            5.Annual Safety and Health Program (ASHP) Form No. SSM-05
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
                            1. Small-Scale Miner’s License<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2. Duly accomplished and notarized application form (Form No. SSM-01)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3. Application Fee of PhP10,000 to the Province/City Concerned<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4. For individual:
                            Certified Photocopy of DTI Registration
                            <br> &nbsp;
                            For association/Cooperative:
                            Securities and Exchange Commission or other Concerned Agency(ies)-Certified True Copy of the
                            Certificate of Registration, Articles of Incorporation/Association, and By-Laws or
                            Certification from MGB or MGB RO that said documents are duly registered in that Office
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5. Location map/sketch plan of the SSMC Applied Area showing geographic coordinates, major
                            environmental features, and other projects using NAMRIA topographic map in a scale of
                            1:10,000 duly prepared signed sealed by a Deputized Geodetic Engineer
                            <br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6. Proposed Two-Year Work Program (Form No. SSM-02)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                </tbody>
            </table>

            <!--Other Mandatory Requirement-->
            <table class="table2">
                <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Mandatory
                    Requirements</h2>
                <tbdoy>
                    <tr>
                        <td>
                            1. NCIP Certification (Certificate of Non-Overlap or Certification Precondition) or the
                            NCIP’s Field-Based Investigation Report/Validation Report<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2.Environmental Compliance Certificate<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3. Potential Environmental Impact Management Plan (PEIMP) Form No. SSM-03<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            4. Prior approval or endorsement in the form of Resolution or Certification by at
                            least the majority of the Sanggunian concerned<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5. Annual Safety and Health Program (ASHP) Form No. SSM-05<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea>
                            <!-- Disable text wrapping -->
                        </td>
                    </tr>
                </tbdoy>
            </table>
        </div>
        <div style="display: flex;flex-direction: column;justify-content: center;">
            <p style="font-size: 20px; margin-bottom: 5px;">View Faxsheet</p>
            <div>
                <button style="background-color: bisque;color: black;width: 150px;height:40px;border-radius: 5px;">
                    SAVE
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import upload from '../../../../src/components/MTES/multiple-upload.vue';
import headd from '../../../components/header.vue'

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
    data() {
        return {
            table2Remarks: ''
        }
    },
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
    margin-top: 130px;
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