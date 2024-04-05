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
            1. Letter of Intent with Justification of Renewal
          </td>

          <td class="inputimg">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData">
            2. Corporate Secretary Certificate attesting to the authority of the person who is filing the renewal of
            Application
          </td>

          <td class="inputimg">
            <upload />
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData">
            3. National Commission on Indigenous Peoples Certification Precondition
          </td>

          <td class="inputimg">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea></textarea>
            <label>Recommendation:</label><br>
            <textarea style="color: red;"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData">
            4. Certification of the Regional Office to the compliance with the terms and conditions of the MPSA,
            particularly with regard to<br>&nbsp;
            <br>&nbsp;
            a. Three-year Dev't Utilization WP <br>&nbsp;
            b. Survey Plan <br>&nbsp;
            c.ECC <br>&nbsp;
            d. EPEP <br>&nbsp;
            e. SDMP <br>&nbsp;
            f. Implementation of the 3YR WP, EPEP and SDMP <br>&nbsp;
            g. Submission of Reports <br>&nbsp;
            h. Payment of Fees and Taxes <br>&nbsp;
          </td>

          <td class="inputimg">
            <upload />
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea></textarea>
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
              <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
            </td>

            <td style="text-align: left;width: 1000px;">
              <label>Remarks:</label>
              <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
              <label>Based on the Status of MTSR:</label>
              <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>


<script setup>
// import upload from '/Users/PC8/maam hannah git/MMDIS/src/components/MTES/multiple-upload.vue'
import upload from '../../../../src/components/MTES/multiple-upload.vue'
</script>


<script>
export default {
  methods: {
    fileSelected() {
      this.$refs.fileInput.click();
    },
    onFileSelect(event) {
      const files = event.target.files;
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (file[i].type.split("/")[0] != "image") continue;
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
        }
      }
      console.log(this.images);
    },
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