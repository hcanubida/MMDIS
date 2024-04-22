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
                        <textarea class="textarea3" style="color: red;"></textarea>
                    </td>
                </tr>

                <tr>
                    <td class="reqData3">
                        2. Corporate Secretary Certificate attesting to the authority of the person who is filing the renewal of Application
                    </td>

                    <td class="inputimg3">
                        <upload />
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;"></textarea>
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
                        <textarea class="textarea3" style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData2">
                       4. Certification of the Regional Office to the compliance with the terms and conditions of the MPSA, particularly with regard to:<br>&nbsp;
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
                        <textarea class="textarea3" style="color: red;"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>


        <!-- Table 2 -->
        <table class="table3">
        <caption class="caption3">Summary of Lacking Requirements</caption>
        <tbody>
          <tr>  
            <td style="text-align: center;">
              <label style="font-size: 20px;font-weight: 600; text-align: center">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea class="textarea3" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
              <label>Based on the Status of MTSR:</label>
              <textarea class="textarea3" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>
        </tbody>
      </table>
      <div style="display: flex;flex-wrap: wrap;justify-content: center;">
        <p style="font-size: 20px; margin-right: 20px">View Faxsheet</p>
        <img src="../../../assets/MTES/view.png" alt="view faxsheet" @click="dude" style="cursor: pointer;" v-if="!openFax">
        <img src="../../../assets/MTES/square-x.png" alt="view faxsheet" @click="close" style="cursor: pointer;" v-if="openFax">
      </div>
      <div v-if="openFax">
          <downloadd />
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
      openFax: false
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