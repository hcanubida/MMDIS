<template>
    <div class="title">
      <h2>MANDATORY REQUIREMENTS</h2>
    </div>
      <!-- Table 1 -->
      <div  class="requirements">
      <table class="table1">
        <thead class="titlehead">
          <tr>
            <th>Requirement</th>
            <th>Upload</th>
            <th>Remarks / Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in table1Data" :key="index">
            <td class="reqData"> {{ index + 1 }} . {{ row.name }}</td>
            <td class="inputimg">
              <input type="file" @change="fileSelected(index)">
            </td>
            <td>
              <label>Remarks:</label><br>
              <textarea v-model="row.remarks" rows="3" style="color: black;" wrap="off"></textarea>
              <br>
              <label>Recommendation:</label><br>
              <textarea v-model="row.recommendation" rows="3" style="color: red;"></textarea> <!-- Adjust color as needed -->
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Table 2 -->
      <table class="table2">
        <caption>Summary of Lacking Requirements</caption>
        <tbody>
          <tr v-for="(row, index) in table2Data" :key="index">
            <td>
              <strong>{{ row.requirement }}</strong><br>
              <label>Status:</label><br>
            </td>
            <td>
              <label>Remarks:</label><br>
              <textarea v-model="row.remarks" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
              <label>Based on the Status of MTSR:</label><br>
              <textarea v-model="row.mtsrRecommendations" rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
            </td>
            <td>{{ row.recommendations }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Requirements',
    data() {
      return {
        table1Data: [
          { name:'Application Form  (MGB Form No. 5-1)',remarks: '', recommendation: '' },
          { name:'Payment of Filing Fee',remarks: '', recommendation: '' },
          { name:'Two (2)-Year Exploration Work Program (MGB Form No. 5-4),duly prepared, signed and sealed by a licensed Mining Engineer or Geologist',remarks: '', recommendation: '' },
          { name:'Affidavit of Undertaking pursuant to DMO No. 99-10 as amended, for a corporation, partnership, association or cooperative',remarks: '', recommendation: '' },
          { name:'For corporation/partnership/Association/cooperative: SEC/CDA-certifies Certificate of Registration, Articles of Incorporation/Partnership/ Association and By-Laws; or a Certification from MGB CO/RO concerned that such documents are duly registered in that Office (note: with minimum authorized capital of PhP100 M and paid-up capital of PhP6.25 M pursuant to DMO No. 2013-01);',remarks: '', recommendation: '' },
          { name:'Location Map/Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/boundaries (in tabulated form) with major environmental features/other projects (prepared, sealed and signed by a deputized Geodetic Engineer)',remarks: '', recommendation: '' },
          { name:'Proof of technical competence to undertake the implementation of activities under the Programs: \n 6.1 Curricula Vitae and track records in exploration and environmental management; \n 6.2 Sworn statement/employment contract/ proof of availed services of the technical person(s) who will undertake the implementation of the Programs',remarks: '', recommendation: '' },
        ],
        remarksOptions: [
          { label: 'Select Remarks', value: '' },
          { label: 'Remark 1', value: 'Recommendation 1' },
          { label: 'Remark 2', value: 'Recommendation 2' },
        ],
        table2Data: [
          { requirement: '1. Requirement', status: '', recommendations: '', mtsrRecommendations: '', selectedRemark: '' },
          { requirement: '2. Requirement', status: '', recommendations: '', mtsrRecommendations: '', selectedRemark: '' },
          { requirement: '3. Requirement', status: '', recommendations: '', mtsrRecommendations: '', selectedRemark: '' },
        ]
      };
    },
    methods: {
      fileSelected(index) {
        // Logic to handle file upload
        console.log('File selected for row', index + 1);
      },
      updateRemark(index, value) {
        this.table2Data[index].selectedRemark = value;
      }
    }
  };
  </script>
  
  <style scoped>
  .title{
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
  }
  .requirements {
    margin-top: 20px;
    text-align: center;
  }
  .titlehead{
    font-size: 20px;
  }
  .reqData{
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    width: 400px;
  }
  .inputimg{
    text-align: left;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    text-align: left;
  }
  
  th, td {
    border: 1px solid #dddddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
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