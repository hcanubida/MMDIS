<template>
    <div class="title1">
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
                    <td class="reqData1">
                        1. Original and duly accomplished accomplished form
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        2. Copy of the Permit/ Contract of Suppliers
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. DTI Registration/ SEC Registration
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation:</label><br>
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        4. Proof of legal source or supply as supported by any of the following documents: <br> &nbsp;
                        4.1. Supply Contract/Agreement<br> &nbsp;
                        4.2. Affidavit executed by a Permit <br> &nbsp;
                        4.3. Delivery or Purchase Receipts <br> &nbsp;
                        4.4 Ore Transport Permit (OTP) or Bill of Lading <br> &nbsp;

                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        5. Other supporting papers as the Regional Office concerned may require or the applicant may
                        submit. <br>&nbsp;
                        5.1. Brief Description of Business <br>&nbsp;
                        5.2. Proof of lot ownership/ consent of stockyard <br>&nbsp;

                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea></textarea>
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
                        1. Original and duly accomplished accomplished form <br> &nbsp;
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
                        2.Copy of the Permit/ Contract of Suppliers <br> &nbsp;
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
                        3. TDTI Registration/ SEC Registration <br> &nbsp;
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
                        4. Proof of legal source or supply as supported by any of the following documents: <br> &nbsp;
                        4.1. Supply Contract/Agreement<br> &nbsp;
                        4.2. Affidavit executed by a Permit <br> &nbsp;
                        4.3. Delivery or Purchase Receipts <br> &nbsp;
                        4.4 Ore Transport Permit (OTP) or Bill of Lading <br> &nbsp;
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
                        5. Other supporting papers as the Regional Office concerned may require or the applicant may
                        submit. <br>&nbsp;
                        5.1. Brief Description of Business <br>&nbsp;
                        5.2. Proof of lot ownership/ consent of stockyard <br>&nbsp;
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