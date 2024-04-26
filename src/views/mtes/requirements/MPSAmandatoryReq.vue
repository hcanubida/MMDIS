<template>
    <div>
        <headd />
    </div>

    <div class="title3">
        <h2>MANDATORY REQUIREMENTS</h2>
    </div>

    <!-- Table -->
    <div class="requirements3">
        <table class="table3">
            <thead class="titlehead3">
                <tr style="text-align: center;">
                    <th class="th3">Requirements</th>
                    <th class="th3">Upload</th>
                    <th class="th3">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData3">
                        1. Letter of Intent with Justification of Renewal
                    </td>

                    <td class="inputimg3">
                        <upload />
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="textInput1"></textarea>
                    </td>
                </tr>

                <tr>
                    <td class="reqData3">
                        2. Corporate Secretary Certificate attesting to the authority of the person who is filing the
                        renewal of Application
                    </td>

                    <td class="inputimg3">
                        <upload />
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="textInput2"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData3">
                        3. National Commission on Indigenous Peoples Certification Precondition
                    </td>

                    <td class="inputimg3">
                        <upload />
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="textInput3"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData2">
                        4. Certification of the Regional Office to the compliance with the terms and conditions of the
                        MPSA, particularly with regard to:<br>&nbsp;
                        a. Three-year Devt’Utilization WP<br>&nbsp;
                        b. Survey Plan<br>&nbsp;
                        c. ECC<br>&nbsp;
                        d. EPEP<br>&nbsp;
                        e. SDMP<br>&nbsp;
                        f. Implementation of the 3YR WP, EPEP and SDMP<br>&nbsp;
                        g. Submission of Reports<br>&nbsp;
                        h. Payment of Fees and Taxes
                    </td>

                    <td class="inputimg3">
                        <upload />
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="textInput4"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>


        <!-- Table 2 -->
        <table class="table3">
            <caption class="caption3">Summary of Lacking Requirements</caption>
            <tbody>
                <tr>
                    <td style="text-align: left;">
                        <label style="font-size: 15px;font-weight: 500; text-align: center">1. Letter of Intent with
                            Justification of Renewal</label>
                    </td>
                    <td style="text-align: left;width: 1000px;">
                        <label>Based on the Status of MTSR:</label>
                        <textarea class="textarea3" rows="3" style="color: red;" wrap="off">{{ textInput1 }}</textarea>
                        <!-- Disable text wrapping -->
                    </td>
                </tr>
                <tr>
                    <td style="text-align: left;">
                        <label style="font-size: 15px;font-weight: 500; text-align: center">2. Corporate Secretary
                            Certificate attesting to the authority of the person who is filing the
                            renewal of Application</label>
                    </td>
                    <td style="text-align: left;width: 1000px;">
                        <label>Based on the Status of MTSR:</label>
                        <textarea class="textarea3" rows="3" style="color: red;" wrap="off">{{ textInput2 }}</textarea>
                        <!-- Disable text wrapping -->
                    </td>
                </tr>
                <tr>
                    <td style="text-align: left;">
                        <label style="font-size: 15px;font-weight: 500; text-align: center">3. National Commission on
                            Indigenous Peoples Certification Precondition</label>
                    </td>
                    <td style="text-align: left;width: 1000px;">
                        <label>Based on the Status of MTSR:</label>
                        <textarea class="textarea3" rows="3" style="color: red;" wrap="off">{{ textInput3 }}</textarea>
                        <!-- Disable text wrapping -->
                    </td>
                </tr>
                <tr>
                    <td style="text-align: left;">
                        <label style="font-size: 15px;font-weight: 500; text-align: center"> 4. Certification of the
                            Regional Office to the compliance with the terms and conditions of the
                            MPSA, particularly with regard to:<br>&nbsp;
                            a. Three-year Devt’Utilization WP<br>&nbsp;
                            b. Survey Plan<br>&nbsp;
                            c. ECC<br>&nbsp;
                            d. EPEP<br>&nbsp;
                            e. SDMP<br>&nbsp;
                            f. Implementation of the 3YR WP, EPEP and SDMP<br>&nbsp;
                            g. Submission of Reports<br>&nbsp;
                            h. Payment of Fees and Taxes</label>
                    </td>
                    <td style="text-align: left;width: 1000px;">
                        <label>Based on the Status of MTSR:</label>
                        <textarea class="textarea3" rows="3" style="color: red;" wrap="off">{{ textInput4 }}</textarea>
                        <!-- Disable text wrapping -->
                    </td>
                </tr>
            </tbody>
        </table>
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
import headd from '../../../components/MTES/header.vue'
import upload from '../../../components/MTES/multiple-upload.vue'
import downloadd from '../faxsheet/mpsa-factsheet.vue'

</script>

<script>
export default {
    data() {
        return {
            openFax: false,
            textInput1: '',
            textInput2: '',
            textInput3: '',
            textInput4: '',
            wew: '',
            picture: '',
        };
    },
    methods: {
        dude() {
            this.openFax = true;
        },
        close() {
            this.openFax = false;
        }
    }
}

</script>

<style scoped>
.title3 {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 120px;
}

.requirements3 {
    margin-top: 10px;
    text-align: center;
}

.titlehead3 {
    font-size: 20px;
}

.reqData3 {
    text-align: left;
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    width: 600px;
}

.inputimg3 {
    text-align: left;
    width: 400px;
}


.table3 {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
    height: auto;
}

.th3,
td {
    border: 1px solid #dddddd;
    padding: 8px;
}

.th3 {
    background-color: #e0b983;
}

.caption3 {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    caption-side: top;
}

.textarea3 {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
</style>