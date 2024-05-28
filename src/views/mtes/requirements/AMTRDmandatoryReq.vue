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
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file1', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file1" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea v-model="remarks.textInput1"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput1"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file1" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        2. Copy of the Permit/ Contract of Suppliers
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file2', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file2" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea v-model="remarks.textInput2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput2"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file2" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. DTI Registration/ SEC Registration
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file3', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file3" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea v-model="remarks.textInput3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput3"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file3" />
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
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file4', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file4" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea v-model="remarks.textInput4"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput4"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file4" />
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
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file5', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file5" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea v-model="remarks.textInput5"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput5"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file5" />
                    </td>
                </tr>

            </tbody>
        </table>

        <!-- Table 2 -->
        <table class="table2">
            <caption style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;" class="caption1">
                Summary
                of Lacking Requirements</caption>
            <tbody>
                <tr>
                    <td v-if="recommendation.textInput1 !== 'null' && recommendation.textInput1.trim() !== ''">
                        <p>{{ requirements.reqDetails1 }}</p>
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput1 !== 'null' && recommendation.textInput1.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput1 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput2 !== 'null' && recommendation.textInput2.trim() !== ''">
                        {{ requirements.reqDetails2 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput2 !== 'null' && recommendation.textInput2.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput2 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput3 !== 'null' && recommendation.textInput3.trim() !== ''">
                        {{ requirements.reqDetails3 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput3 !== 'null' && recommendation.textInput3.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput3 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput4 !== 'null' && recommendation.textInput4.trim() !== ''">
                        {{ requirements.reqDetails4 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput4 !== 'null' && recommendation.textInput4.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput4 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput5 !== 'null' && recommendation.textInput5.trim() !== ''">
                        {{ requirements.reqDetails5 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput5 !== 'null' && recommendation.textInput5.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput5 }}</p>
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="table3">
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th6" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th6" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <td style="text-align: center;font-size: 20px;padding: 20px;">Status of the Application: </td>
                <td style="text-align: center;font-size: 20px;padding-bottom: 20px;">
                    <select class="inputall" v-model="selectedStatus"
                        style="background-color: antiquewhite;text-align: center;width: 100%;">
                        <option value="" disabled>Based of the Status MTSR</option>
                        <option style="text-align: left;" value="Under Pre-Processing by Mining Tenement Evaluation
              Section">Under Pre-Processing by Mining Tenement Evaluation
                            Section</option>
                        <option style="text-align: left;" value="Under Preliminary Evaluation<">Under Preliminary
                            Evaluation
                        </option>
                        <option style="text-align: left;" value="Pending Area Clearance/Status (FMS/EMPAS,LMS)">
                            Pending Area
                            Clearance/Status (FMS/EMPAS,LMS)</option>
                        <option style="text-align: left;" value="Undergoing Publication/Posting/Radio Announcement">
                            Undergoing
                            Publication/Posting/Radio Announcement
                        </option>
                        <option style="text-align: left;" value="Published/Posted Announcement within 30-days period
              for possible protest/adverse claim">Published/Posted Announcement within 30-days period
                            for possible protest/adverse claim</option>
                        <option style="text-align: left;" value="With mining dispute filed at Panel of Arbitrators">
                            With mining
                            dispute filed at Panel of Arbitrators
                        </option>
                        <option style="text-align: left;" value="Appeal to the Mines Adjudication Board/LSD-CO/OP">
                            Appeal to the
                            Mines Adjudication Board/LSD-CO/OP
                        </option>
                        <option style="text-align: left;" value="Pending NCIP Certification/Proof of Consultation from
              LGU,ECC, etc">Pending NCIP Certification/Proof of Consultation from
                            LGU,ECC, etc</option>
                        <option style="text-align: left;" value="Under Final Evaluation by R.O.">Under Final
                            Evaluation by R.O.
                        </option>
                        <option style="text-align: left;" value="Endorsed to Central Office">Endorsed to Central
                            Office</option>
                        <option style="text-align: left;" value="Denied by MGB-RO/COP/PA/MAB but within grace period
              for Motion for Reconsideration or Appeal">Denied by MGB-RO/COP/PA/MAB but within grace period
                            for Motion for Reconsideration or Appeal</option>
                        <option style="text-align: left;" value="Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
              Motion for Reconsideration or Appeal">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
                            Motion for Reconsideration or Appeal</option>
                        <option style="text-align: left;" value="A. Others (Renewal)">A. Others (Renewal)</option>
                        <option style="text-align: left;" value="B. Others (With Clearance)">B. Others (With
                            Clearance)</option>
                        <option style="text-align: left;" value="Conversion from Other Tenement">Conversion from
                            Other Tenement
                        </option>
                        <option style="text-align: left;" value="Denied by MGB-RO/COP/PA/MAP/DENR but with pending
              Appeal at the O.P.">Denied by MGB-RO/COP/PA/MAP/DENR but with pending
                            Appeal at the O.P.</option>
                        <option style="text-align: left;" value="other">Other</option>
                    </select>
                    <input v-if="selectedStatus === 'other'" class="inputall1" v-model="otherStatus"
                        style="width: 100%;" placeholder="Enter other Status" />
                </td>
            </tbody>
        </table>

        <table class="table3">
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th6" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th6" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <td style="text-align: center;font-size: 20px;padding: 20px;">Overall
                    Remarks/Status/Reccomendation</td>
                <td style="font-size: 15px;padding: 20px; width: 50%;">
                    <label>Remarks /Status</label>
                    <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 100px;"
                        v-model="overallStatus"></textarea>
                </td>
            </tbody>

        </table>

        <div style="display: flex;flex-direction: column;justify-content: center;">
            <p style="font-size: 20px; margin-bottom: 5px;">View Faxsheet</p>
            <div>
                <button
                    style="background-color: bisque;color: black;width: 150px;height:40px;border-radius: 5px;margin-left: 10px;"
                    @click="update">
                    UPDATE
                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import upload from '../../../../src/components/MTES/multiple-upload.vue';
import headd from '../../../components/header.vue'
import imagees from '../../../components/MTES/modals/imguploads.vue'


</script>

<script>

export default {
    name: 'typeapp',
    data() {
        return {
            overallStatus: '',
            selectedStatus: '',
            otherStatus: '',
            requirements: {
                reqDetails1: `
                1. Original and duly accomplished accomplished form`,
                reqDetails2: `
                2. Copy of the Permit/ Contract of Suppliers`,
                reqDetails3: `
                3. DTI Registration/ SEC Registration`,
                reqDetails4: `
                4. Proof of legal source or supply as supported by any of the following documents:
                4.1. Supply Contract/Agreement
                4.2. Affidavit executed by a Permit
                4.3. Delivery or Purchase Receipts
                4.4 Ore Transport Permit (OTP) or Bill of Lading`,
                reqDetails5: `
                5. Other supporting papers as the Regional Office concerned may require or the applicant may submit.
                5.1. Brief Description of Business
                5.2. Proof of lot ownership/ consent of stockyard`,
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
            uploadFiles: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: []
            },
            imagesfile: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: [],
            }
        }
    },
    watch: {
        selectedStatus(newValue) {
            if (newValue !== 'other') {
                this.otherStatus = '';
            }
        }
    },
    methods: {
        myAction(payload) {
            const { containerId, images } = payload;
            this.imagesfile[containerId] = images;
            console.log(`Uploaded images for ${containerId}:`, images);
        },
        handleFileUpload(fileKey, event) {
            // Ensure the event target and files exist
            if (event && event.target && event.target.files) {
                this.uploadFiles[fileKey] = Array.from(event.target.files);
                console.log(`Files for ${fileKey}:`, this.uploadFiles[fileKey]);
            } else {
                console.error('No files found on event target:', event);
            }
        },
        async getDetails() {
            try {
                const remarks = await axios.get('http://localhost:8000/get_remarks');
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id9);

                this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
                this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
                this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
                this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';
                this.remarks.textInput5 = filteredremarks[0].input5 !== null ? filteredremarks[0].input5 : '';

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id9);

                this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
                this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
                this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
                this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
                this.recommendation.textInput5 = filteredrequirements.input5 !== null ? filteredrequirements.input5 : '';


            } catch (error) {
                console.error('Error fetching reco details:', error);
            }

        },
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
        update() {
            const formData = new FormData();
            formData.append('id_reference', this.$route.params.detail_id9);
            // Append category based on selectedCategory
            if (this.selectedStatus === 'other') {
                // Append otherCategory if selectedCategory is 'others'
                formData.append('mtsr', this.otherStatus);
                formData.append('overallstatus', this.overallStatus);
            } else {
                // Append selectedCategory directly otherwise
                formData.append('mtsr', this.selectedStatus);
                formData.append('overallstatus', this.overallStatus);
            }
            // Make axios POST request
            axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id9}`, formData)
                .then(response => {
                    // Handle response
                    console.log('mtsr added: ', response.data);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error:', error);
                });

            // Prepare the data
            const formData1 = new FormData();
            formData1.append('id_reference', this.$route.params.detail_id9);
            console.log('id_reference', this.$route.params.detail_id9)

            for (let i = 1; i <= 5; i++) {
                formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
                // console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }
            // Append other input values here...

            // Make a POST request to update remarks
            axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id9}`, formData1)
                .then(response => {
                    console.log('Remarks updated successfully:', response.data);
                    // Handle success...
                })
                .catch(error => {
                    console.error('Error updating remarks:', error);
                    // Handle error...
                });

            // Prepare the data
            const formData2 = new FormData();
            formData2.append('id_reference', this.$route.params.detail_id9);
            console.log('id_reference', this.$route.params.detail_id9)

            for (let i = 1; i <= 5; i++) {
                formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
                // console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id9}`, formData2)
                .then(response => {
                    console.log('Recommendations updated successfully:', response.data);
                    // window.location.reload()
                })
                .catch(error => {
                    console.error('Error updating recommendations:', error);
                    // Handle error...
                });

            // Upload files 
            const formData3 = new FormData();
            formData3.append('id_reference', this.$route.params.detail_id9);

            if (this.uploadFiles) {
                for (const [key, files] of Object.entries(this.uploadFiles)) {
                    for (let i = 0; i < files.length; i++) {
                        formData3.append(`${key}[]`, files[i]);
                    }
                }
            }

            if (this.formData3) {
                for (const [key, value] of Object.entries(this.formData3)) {
                    formData3.append(key, value);
                }
            }

            // Send FormData to server using axios
            axios.post('http://127.0.0.1:8000/add_uploads', formData3)
                .then(response => {
                    console.log('Record uploaded successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error uploading record:', error);
                });

            //add images
            const formData4 = new FormData();
            formData4.append('id_reference', this.$route.params.detail_id9);

            for (const containerId in this.imagesfile) {
                if (this.imagesfile.hasOwnProperty(containerId)) {
                    const fileKey = `images${containerId.replace('file', '')}`;

                    this.imagesfile[containerId].forEach((file, index) => {
                        formData4.append(`${fileKey}[]`, file.file); // Append each file under the correct key
                    });
                }
            }

            // Send FormData to server using axios
            axios.post('http://127.0.0.1:8000/add_images', formData4)
                .then(response => {
                    console.log('Images uploaded successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error uploading images:', error);
                });
        },
    },
    mounted() {
        this.getDetails();
    },
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

.table2 td {
    border: 1px solid #dddddd;
    padding: 8px;
    width: 50%;
    /* Set each column to occupy 50% of the table width */
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