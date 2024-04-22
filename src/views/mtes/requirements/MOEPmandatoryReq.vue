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
                        1. Original and duly accomplished Mineral Ore Export Permit (MOEP) application form under DENR
                        Administrative Order (DAO) No. 2008-20
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
                        2. Original or certified true copy of the pertinent Ore Transport Permit (OTP) or Delivery
                        Receipts
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
                        3. Original or Certified true copy of the mining permit/contract or Original or MGB-certified
                        true copy of the Certificate of Accreditation by the MGB, if the MOEP applicant is engaged in
                        mineral trading

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
                        4. Original or Certified true copy of the sales/purchase/marketing contract or purchase order
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
                        5. Original or certified true copy of the proof of payment of excise tax or guarantee/surety
                        bond
                        [Note: to submit photocopy of the document but shall present the original copy/ certified true
                        copy for validation purposes]

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
                        6.Other supporting papers as the MGB Regional Director may require or the applicant may submit
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

        <!-- Table 2 -->
        <table class="table2">
            <caption>Summary of Lacking Requirements</caption>
            <tbody>
                <tr>
                    <td>
                        1. Original and duly accomplished Mineral Ore Export Permit (MOEP) application form under DENR
                        Administrative Order (DAO) No. 2008-20<br> &nbsp;
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
                        2. Original or certified true copy of the pertinent Ore Transport Permit (OTP) or Delivery
                        Receipts<br> &nbsp;
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
                        3. Original or Certified true copy of the mining permit/contract or Original or MGB-certified
                        true copy of the Certificate of Accreditation by the MGB, if the MOEP applicant is engaged in
                        mineral trading<br> &nbsp;
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
                        4. Original or Certified true copy of the sales/purchase/marketing contract or purchase
                        order<br> &nbsp;
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
                        5. Original or certified true copy of the proof of payment of excise tax or guarantee/surety
                        bond
                        [Note: to submit photocopy of the document but shall present the original copy/ certified true
                        copy for validation purposes]<br> &nbsp;
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
                        6. Other supporting papers as the MGB Regional Director may require or the applicant may
                        submit<br> &nbsp;
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