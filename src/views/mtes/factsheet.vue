<template>

<div v-if="forceRenderPages || currentPage === 1" id="page-001" class="bg-white border-t flex flex-col" style="width: 100%; max-width: 816px; height: 100vh; position: relative; overflow: auto;">   
    <img src="../../assets/icons/Header.png" class="flex" style="padding: 0px 20px">
    <p class="mt-4 text-sm font-bold text-center" style="letter-spacing: 3px;">
        FACT SHEET / EVALUATION SHEET
    </p>
    <div class="flex items-left flex-col ml-16 flex-grow">
        <!--Application Details' Table--> 
        <div class="">
            <p class="font-bold text-left text-xs mt-10 mb-4" style="letter-spacing: 3px;">
            I.&nbsp;&nbsp;&nbsp;APPLICATION DETAILS
            </p>
            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <tbody class="w-full">
                    <tr v-for="(detail, index) in details" :key="`name-${index}`">
                    <td class="px-2 w-72 font-bold tracking-wider border border-gray-300 text-left">
                        NAME OF APPLICANT:
                    </td>
                    <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                        {{ detail.tenement_name }}
                    </td>
                    </tr>

                    <tr v-for="(detail, index) in details" :key="`number-${index}`">
                    <td class="px-2 font-bold tracking-wider border border-gray-300 text-left">
                        APPLICATION NUMBER:
                    </td>
                    <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                        {{ detail.tenement_number }}
                    </td>
                    </tr>

                    <tr v-for="(detail, index) in details" :key="`location-${index}`">
                    <td class="px-2 font-bold tracking-wider border border-gray-300 text-left">
                        LOCATION:
                    </td>
                    <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                        {{ detail.barangay }}, {{ detail.city }}, {{ detail.province }}
                    </td>
                    </tr>

                    <tr v-for="(detail, index) in details" :key="`commodity-${index}`">
                    <td class="px-2 font-bold tracking-wider border border-gray-300 text-left">
                        COMMODITY:
                    </td>
                    <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                        {{ detail.commodity }}
                    </td>
                    </tr>

                    <tr v-for="(detail, index) in details" :key="`area-${index}`">
                    <td class="px-2 font-bold tracking-wider border border-gray-300 text-left">
                        AREA (HECTARES):
                    </td>
                    <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                        {{ detail.area_hectares }}
                    </td>
                    </tr>

                    <tr v-for="(detail, index) in details" :key="`date-${index}`">
                    <td class="px-2 font-bold tracking-wider border border-gray-300 text-left">
                        DATE FILED:
                    </td>
                    <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                        {{ detail.date_filed }}
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Applicant's Details Table -->
        <div class="">
            <p class="font-bold text-left text-xs mt-8 mb-4" style="letter-spacing: 3px;">
            II.&nbsp;&nbsp;&nbsp;APPLICANT'S DETAILS
            </p>

            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <tbody class="w-full">
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="px-2 w-72 font-bold tracking-wider border border-gray-300 text-left">
                            CATEGORY:
                        </td>
                        <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                            {{ detail.category }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="px-2 w-72 font-bold tracking-wider border border-gray-300 text-left">
                            AUTHORIZED REPRESENTATIVE:
                        </td>
                        <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                            {{ detail.authorized_rep }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="px-2 w-72 font-bold tracking-wider border border-gray-300 text-left">
                            CONTACT NUMBER:
                        </td>
                        <td class="px-2 font-semibold tracking-wider border border-gray-300 text-left px-2">
                            {{ detail.contact_no }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="w-72 px-2 font-bold tracking-wider border border-gray-300 text-left">
                            EMAIL ADDRESS:
                        </td>
                        <td class="font-semibold tracking-wider border border-gray-300 text-left px-2">
                            {{ detail.email }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td class="w-72 px-2 font-bold tracking-wider border border-gray-300 text-left">
                            OTHERS:
                        </td>
                        <td class="font-semibold tracking-wider border border-gray-300 text-left px-2">
                            {{ detail.others }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Mandatory Requirements' Table -->
        <div>
            <p class="font-bold text-left text-xs mt-8 mb-4" style="letter-spacing: 3px;">
                III.&nbsp;&nbsp;&nbsp;MANDATORY REQUIREMENTS
            </p>

            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <thead>
                    <tr style="text-align: center;">
                        <th class="border pb-4" style="width: 30%; font-weight: bold;">Requirement</th>
                        <th class="border pb-4" style="width: 20%; font-weight: bold;">Uploads</th>
                        <th class="border pb-4" style="width: 25%; font-weight: bold;">Remarks / Status</th>
                        <th class="border pb-4" style="width: 25%; font-weight: bold;">Recommendation</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            1. Application Form (MGB Form No. 7-1) to be accpompanied by eight (8)
                            sets of the FTAA proposal and five (5) sets of the following: <br> &nbsp;
                            <br> &nbsp;
                            Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application
                            (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013).
                        </td>
                        <td class="w-72 tracking-wider border border-gray-300">
                            <div v-for="(file, index) in uploadFiles.file1" :key="index" class="flex justify-start">
                                <p class="text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>{{ remarks.textInput1 }}</p>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left text-red-600">
                            <p>{{ recommendation.textInput1 }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="flex justify-center mt-auto">
    <img src="../../assets/icons/Footer.png" class="" style="width:80%;">
    </div>
</div>

<div v-if="forceRenderPages || currentPage === 2" id="page-002" class="bg-white border-t flex flex-col" style="width: 100%; max-width: 816px; height: 100vh; position: relative; overflow: auto;">
    <img src="../../assets/icons/Header.png" class="flex" style="padding: 0px 20px">

    <div class="flex items-left flex-col ml-16 mt-8 flex-grow">
        <!-- Mandatory Requirements' Table -->
        <div>
            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <thead>
                    <tr style="text-align: center;">
                        <th class="border text-xs pb-4" style="width: 30%; font-weight: bold;">Requirement</th>
                        <th class="border text-xs pb-4" style="width: 20%; font-weight: bold;">Uploads</th>
                        <th class="border text-xs pb-4" style="width: 25%; font-weight: bold;">Remarks / Status</th>
                        <th class="border text-xs pb-4" style="width: 25%; font-weight: bold;">Recommendation</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            2. Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/
                            boundaries (in tabulated form) with major environmental features/ other projects
                            (prepared, sealed and signed by a deputized Geodetic Engineer)
                        </td>
                        <td class="w-72 tracking-wider border border-gray-300">
                            <div v-for="(file, index) in uploadFiles.file2" :key="index" class="flex justify-start">
                                <p class="text-gray-600 ml-6 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>{{ remarks.textInput2 }}</p>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left text-red-600">
                            <p>{{ recommendation.textInput2 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),
                            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist</td>
                        <td class="w-72 tracking-wider border border-gray-300">
                            <div v-for="(file, index) in uploadFiles.file3" :key="index" class="flex justify-start">
                                <p class="text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>{{ remarks.textInput3 }}</p>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left text-red-600">
                            <p>{{ recommendation.textInput3 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            4. Proof of technical competence in the form of:<br> &nbsp;
                            4.1 Bio-data and track records in mining operations/ enviromental manangement <br> &nbsp;
                            4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the
                            Work Programs
                        </td>
                        <td class="w-72 tracking-wider border border-gray-300">
                            <div v-for="(file, index) in uploadFiles.file4" :key="index" class="flex justify-start">
                                <p class=" text-gray-600 ml-6 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>{{ remarks.textInput4 }}</p>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left text-red-600">
                            <p>{{ recommendation.textInput4 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            5. Affidavit of Undertaking (using MGB Form No.99-10)
                        </td>
                        <td class="w-72 tracking-wider border border-gray-300">
                            <div v-for="(file, index) in uploadFiles.file5" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-6 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>{{ remarks.textInput5 }}</p>
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left text-red-600">
                            <p>{{ recommendation.textInput5 }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="flex justify-center">
    <img src="../../assets/icons/Footer.png" class="" style="width:80%;">
    </div>
</div>
<div v-if="forceRenderPages || currentPage === 3" id="page-003" class="bg-white border-t flex flex-col" style="width: 100%; max-width: 816px; height: 100vh; position: relative; overflow: auto;">
    <img src="../../assets/icons/Header.png" class="flex" style="padding: 0px 20px">

    <div class="flex items-left flex-col ml-16 flex-grow">
        <!--Summary of Lacking Requirements' Table-->
        <div>
            <p class="font-bold text-left text-xs mt-8 mb-8" style="letter-spacing: 3px;">
                IV.&nbsp;&nbsp;&nbsp;SUMMARY OF LACKING REQUIREMENTS
            </p>

            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <thead>
                    <tr style="text-align: center;">
                        <th class="border text-xs pb-4" style="width: 40%; font-weight: bold;">Requirement</th>
                        <th class="border text-xs pb-4" style="width: 60%; font-weight: bold;">Recommendation or Lacking Submission</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            1. Application Form (MGB Form No. 7-1) to be accpompanied by eight (8)
                            sets of the FTAA proposal and five (5) sets of the following: <br> &nbsp;
                            <br> &nbsp;
                            Filing Fee: PhP300.00/hectare but not less than PhP500,000/Application
                            (pursuant to DENR Administrative Order No. 2013-10 dated February 21, 2013).
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>Remarks/Status:<br><span class="text-black">{{ remarks.textInput1 }}</span><br>Recommendation or Lacking Submission:<br><span class="text-red-500">{{ recommendation.textInput1 }}</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            2. Location Map/ Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/
                            boundaries (in tabulated form) with major environmental features/ other projects
                            (prepared, sealed and signed by a deputized Geodetic Engineer)
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>Remarks/Status:<br><span class="text-black">{{ remarks.textInput2 }}</span><br>Recommendation or Lacking Submission:<br><span class="text-red-500">{{ recommendation.textInput2 }}</span></p>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),
                            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist</td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>Remarks/Status:<br><span class="text-black">{{ remarks.textInput3 }}</span><br>Recommendation or Lacking Submission:<br><span class="text-red-500">{{ recommendation.textInput3 }}</span></p>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            4. Proof of technical competence in the form of:<br> &nbsp;
                            4.1 Bio-data and track records in mining operations/ enviromental manangement <br> &nbsp;
                            4.2 Sworn commitment of the technical person(s) who will undertake the implementation of the
                            Work Programs
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>Remarks/Status:<br><span class="text-black">{{ remarks.textInput4 }}</span><br>Recommendation or Lacking Submission:<br><span class="text-red-500">{{ recommendation.textInput4 }}</span></p>
                        </td>
                    </tr>

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            5. Affidavit of Undertaking (using MGB Form No.99-10)
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>Remarks/Status:<br><span class="text-black">{{ remarks.textInput5 }}</span><br>Recommendation or Lacking Submission:<br><span class="text-red-500">{{ recommendation.textInput5 }}</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="flex justify-center mt-auto">
    <img src="../../assets/icons/Footer.png" class="" style="width:80%;">
    </div>
</div>
<div v-if="forceRenderPages || currentPage === 4" id="page-004" class="bg-white border-t flex flex-col max-h-screen" style="width: 640px; height: 1320px; position: relative;">
    <img src="../../assets/icons/Header.png" class="flex" style="padding: 0px 20px">

    <div class="flex items-left flex-col ml-16 flex-grow">
        <!--Status of Application Table-->
        <div>
            <p class="font-bold text-left text-xs mt-8 mb-8" style="letter-spacing: 3px;">
                V.&nbsp;&nbsp;&nbsp;STATUS OF THE APPLICATION
            </p>
            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <thead>
                    <tr style="text-align: center; font-size: 12px; font-weight: 700;">
                        <th class="border text-xs pb-4 w-2/5"  style="font-weight: bold;">Mandatory Requirements</th>
                        <th class="border text-xs pb-4"  style="width: 70%; font-weight: bold;">Remarks / Status</th>
                    </tr>
                </thead>
                <tbody class="w-full">
                    <tr v-for="(detail, index) in details" :key="`status-${index}`">
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            Status
                        </td>

                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>
                                {{ detail.status }} 
                                <span v-if="detail.status === 'On-going Process'" class="italic">
                                    <br>{{ detail.stage_of_processing }}
                                </span>
                            </p>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
        <!--Overall Remarks/Recommendations' Table-->
        <div>
            <p class="font-bold text-left text-xs mt-8 mb-8" style="letter-spacing: 3px;">
                VI.&nbsp;&nbsp;&nbsp;OVERALL REMARKS/ RECOMMENDATIONS
            </p>
            <table class="w-11/12 border border-gray-300" style="font-size: 10px;">
                <thead>
                    <tr style="text-align: center; font-size: 12px; font-weight: 700;">
                        <th class="border text-xs pb-4" style="width: 40%; font-weight: bold;">Mandatory Requirements</th>
                        <th class="border text-xs pb-4" style="width: 60%; font-weight: bold;">Remarks / Status</th>
                    </tr>
                </thead>
                <tbody class="w-full">

                    <tr>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            Overall Remarks/ Status/
                            Recommendation
                        </td>
                        <td class="w-72 px-2 py-2 font-normal tracking-wider border border-gray-300 text-left">
                            <p>{{ overallvalue }}</p>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
        <!-- <div>
            <p class="font-bold text-left text-sm mt-8 mb-8" style="letter-spacing: 3px;">
                VII.&nbsp;&nbsp;&nbsp;CHRONOLOGY
            </p>
        </div> -->
    </div>
    <div class="flex justify-center mt-auto">
    <img src="../../assets/icons/Footer.png" class="" style="width:80%;">
    </div>
</div>

<!-- Buttons outside the page (outside the content container) -->
<div class="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
  <button @click="goBack" class="bg-blue-500 text-white px-4 py-2 rounded-full">
    <
  </button>
</div>

<div class="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
  <button @click="goNext" class="bg-blue-500 text-white px-4 py-2 rounded-full">
    >
  </button>
</div>

<!-- Button to trigger the download of all folios as PDFs -->
<div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
  <button @click="downloadAllPDFs" class="bg-green-500 text-white px-4 py-2 rounded-full mb-4">
    Download
  </button>
</div>
</template>




<script>
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { API_BASE_URL } from '../../config';

export default {
    props: {
        detail_id: String,
    },
    data() {
        return {
            details: [],
            mtsrvalue: '',
            overallvalue: '',
            uploadFiles: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: []
            },
            remarks: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
            },
            recommendation: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
            },
            currentPage: 1, // Current page index (starts from 1 for page-001)
            forceRenderPages: false,

        };
    },
    methods: {
        goNext() {
            if (this.currentPage < 4) {
                this.currentPage++;
            }
        },
        goBack() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        downloadAllPDFs() {
    // Temporarily set forceRenderPages to true to show all pages
    this.forceRenderPages = true;

    const folioIds = ['page-001', 'page-002', 'page-003', 'page-004'];
    const zip = new JSZip(); // Create a new ZIP instance

    // Create a promise array for each PDF generation
    const pdfPromises = folioIds.map(folioId => {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const element = document.getElementById(folioId);
          console.log(`Checking element with ID: ${folioId}`, element); // Debugging

          // Check if the element exists
          if (!element) {
            reject(`Element with ID ${folioId} not found`);
            return;
          }

          const options = {
            filename: `${folioId}.pdf`,  // Set the filename
            html2canvas: { scale: 2 },   // Improve the quality of the PDF
            jsPDF: { 
              unit: 'mm', 
              format: [216, 356],  // Set to legal size (216 x 356 mm)
              orientation: 'portrait' // Set paper orientation to portrait
            },
          };

          // Generate the PDF and save it to a Blob
          html2pdf().from(element).set(options).outputPdf('blob').then((pdfBlob) => {
            // Add the PDF Blob to the ZIP file
            zip.file(`${folioId}.pdf`, pdfBlob);
            resolve();
          }).catch((error) => {
            reject(`Error generating PDF for ${folioId}: ${error}`);
          });
        });
      });
    });

    // After all PDFs are generated, create and download the ZIP file
    Promise.all(pdfPromises).then(() => {
      zip.generateAsync({ type: 'blob' }).then((content) => {
        // Save the ZIP file
        saveAs(content, 'evaluation-sheet.zip');

        // Reset forceRenderPages to false after PDFs are generated
        this.forceRenderPages = false;
      }).catch((error) => {
        console.error("Error generating ZIP file:", error);
        // Reset forceRenderPages to false if there is an error
        this.forceRenderPages = false;
      });
    }).catch((error) => {
      console.error("Error generating PDFs:", error);
      // Reset forceRenderPages to false if there is an error
      this.forceRenderPages = false;
    });
  },

        async fetchDetails() {
            //Details applicants
            try {
                const response = await axios.get(`${API_BASE_URL}/get_details/`);
                this.details = response.data.filter(det => det.id == this.$route.params.detail_id);
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Remarks details
            try {
                const remarks = await axios.get(`${API_BASE_URL}/get_remarks`);
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id);

                this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
                this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
                this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
                this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';
                this.remarks.textInput5 = filteredremarks[0].input5 !== null ? filteredremarks[0].input5 : '';

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //MTSR details
            try {
                const mtsr = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
                const overallstatus = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
                const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id));
                const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id));
                this.mtsrvalue = filteredmtsr.mtsr
                this.overallvalue = filteredoverall.overallstatus
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Recommendation details
            try {
                const requirements = await axios.get(`${API_BASE_URL}/get_recommendation`);
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id);
                // console.log(filteredrequirements)
                this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
                this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
                this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
                this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
                this.recommendation.textInput5 = filteredrequirements.input5 !== null ? filteredrequirements.input5 : '';
            } catch (error) {
                console.error('Error fetching reco details:', error);
            }

            //details file uploads
            try {
                const uploads = await axios.get(`${API_BASE_URL}/get_files`);
                const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id);
                // console.log(uploadsrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.uploadFiles).forEach(key => {
                    this.uploadFiles[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 5; i++) {
                    const key = `file${i}`;
                    this.uploadFiles[key] = [];
                }

                // Assign fetched files to uploadFiles
                uploadsrequirements.forEach((req) => {
                    for (let i = 1; i <= 5; i++) {
                        const key = `file${i}`;
                        // Check if the file key exists in req and is not null
                        if (req.hasOwnProperty(key) && req[key] !== null) {
                            try {
                                this.uploadFiles[key] = JSON.parse(req[key]);
                            } catch (e) {
                                console.error(`Error parsing JSON for ${key}:`, e);
                                this.uploadFiles[key] = [];
                            }
                        }
                    }
                });
            } catch (error) {
                console.error('Error fetching reco details:', error);
            }
        },
    },
    mounted() {
        this.fetchDetails();
    },
}
</script>
