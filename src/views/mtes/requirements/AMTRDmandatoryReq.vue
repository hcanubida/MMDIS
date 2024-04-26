<template>
    <div>
        <headd />
    </div>
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
                        <textarea ></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="textInput1"></textarea>
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
                        <textarea style="color: red;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="textInput2"></textarea>
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
                        <textarea style="color: red;"></textarea>
                        <label>Recommendation:</label><br>
                        <textarea style="color: red;" v-model="textInput3"></textarea>
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
                        <textarea style="color: red;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="textInput4"></textarea>
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
                        <textarea style="color: red;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="textInput5"></textarea>
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
                        <label>Recommendation or Lacking Submission </label>
                        <textarea rows="3" style="color: red;" wrap="off">{{ textInput1 }}</textarea>
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
                        <label>Recommendation or Lacking Submission </label>
                        <textarea rows="3" style="color: red;" wrap="off">{{ textInput2 }}</textarea>
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
                        <label>Recommendation or Lacking Submission </label>
                        <textarea rows="3" style="color: red;" wrap="off">{{ textInput3 }}</textarea>
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
                        <label>Recommendation or Lacking Submission </label>
                        <textarea rows="3" style="color: red;" wrap="off">{{ textInput4 }}</textarea>
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
                        <label>Recommendation or Lacking Submission </label>
                        <textarea rows="3" style="color: red;" wrap="off">{{ textInput5 }}</textarea>
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
import headd from '../../../components/header.vue'


</script>

<script>
export default {
    name: 'typeapp',
    data() {
        return {
            textInput1: '',
            textInput2: '',
            textInput3: '',
            textInput4: '',
            textInput5: '',
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
.title1 {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 130px;
}

.requirements {
    margin-top: 20px;
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