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

                        <!-- //sugod -->
                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file1" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3" v-model="remarks.textInput1" style=" height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red; height: 600px;"
                            v-model="recommendation.textInput1"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file1" />
                        <div v-for="(file, index) in imagesfile.file1" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="reqData3">
                        2. Corporate Secretary Certificate attesting to the authority of the person who is filing the
                        renewal of Application
                    </td>

                    <td class="inputimg3">
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
                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file2" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3" v-model="remarks.textInput2" style=" height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;height: 600px;"
                            v-model="recommendation.textInput2"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file2" />
                        <div v-for="(file, index) in imagesfile.file2" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="reqData3">
                        3. National Commission on Indigenous Peoples Certification Precondition
                    </td>

                    <td class="inputimg3">
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
                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file3" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3" v-model="remarks.textInput3" style=" height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;height: 600px;"
                            v-model="recommendation.textInput3"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file3" />
                        <div v-for="(file, index) in imagesfile.file3" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
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
                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file4" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea3" v-model="remarks.textInput4" style=" height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;height: 600px;"
                            v-model="recommendation.textInput4"></textarea>

                        <imagees @images-uploaded="myAction" containerId="file4" />
                        <div v-for="(file, index) in imagesfile.file4" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


        <!-- Table 2 -->
        <table class="table4">
            <p style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">
                Summary of Lacking Requirements</p>
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
            </tbody>
        </table>

        <!-- table 3 -->
        <table class="tablee">
            <thead class="titlehead3">
                <tr style="text-align: center;">
                    <th class="th3" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th3" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
                        <option style="text-align: left;" value="Pending Area Clearance/Status (FMS/EMPAS,LMS)">Pending
                            Area
                            Clearance/Status (FMS/EMPAS,LMS)</option>
                        <option style="text-align: left;" value="Undergoing Publication/Posting/Radio Announcement">
                            Undergoing
                            Publication/Posting/Radio Announcement
                        </option>
                        <option style="text-align: left;" value="Published/Posted Announcement within 30-days period
              for possible protest/adverse claim">Published/Posted Announcement within 30-days period
                            for possible protest/adverse claim</option>
                        <option style="text-align: left;" value="With mining dispute filed at Panel of Arbitrators">With
                            mining
                            dispute filed at Panel of Arbitrators
                        </option>
                        <option style="text-align: left;" value="Appeal to the Mines Adjudication Board/LSD-CO/OP">
                            Appeal to the
                            Mines Adjudication Board/LSD-CO/OP
                        </option>
                        <option style="text-align: left;" value="Pending NCIP Certification/Proof of Consultation from
              LGU,ECC, etc">Pending NCIP Certification/Proof of Consultation from
                            LGU,ECC, etc</option>
                        <option style="text-align: left;" value="Under Final Evaluation by R.O.">Under Final Evaluation
                            by R.O.
                        </option>
                        <option style="text-align: left;" value="Endorsed to Central Office">Endorsed to Central Office
                        </option>
                        <option style="text-align: left;" value="Denied by MGB-RO/COP/PA/MAB but within grace period
              for Motion for Reconsideration or Appeal">Denied by MGB-RO/COP/PA/MAB but within grace period
                            for Motion for Reconsideration or Appeal</option>
                        <option style="text-align: left;" value="Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
              Motion for Reconsideration or Appeal">Denied/Rejected by MGB-RO/COP/PA/MAB but with pending
                            Motion for Reconsideration or Appeal</option>
                        <option style="text-align: left;" value="A. Others (Renewal)">A. Others (Renewal)</option>
                        <option style="text-align: left;" value="B. Others (With Clearance)">B. Others (With Clearance)
                        </option>
                        <option style="text-align: left;" value="Conversion from Other Tenement">Conversion from Other
                            Tenement
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
        <table class="tablee">
            <thead class="titlehead1">
                <tr style="text-align: center;">
                    <th class="th3" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th3" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center;font-size: 20px;padding: 20px;">Overall
                        Remarks/Status/Reccomendation</td>
                    <td style="font-size: 15px;padding: 20px; width: 50%;">
                        <label>Remarks /Status</label>
                        <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 500px;"
                            v-model="overallStatus"></textarea>
                    </td>
                </tr>
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
                <button
                    style="background-color: bisque;color: black;width: 150px;height:40px;border-radius: 5px;margin-left: 10px;"
                    @click="view">{{ isVisible ? 'Close' : 'View' }}
                </button>
            </div>
            <div class="drop-shadow-2xl bg-stone-100 mt-10 place-self-center" style="width: 1400px;" v-if="isVisible">
            <faxx />
        </div>
        </div>
    </div>
</template>

<script setup>
import headd from '../../../components/MTES/header.vue'
import faxx from '../faxsheet/mpsa-factsheet.vue'
import imagees from '../../../components/MTES/modals/imguploads.vue'
import { API_BASE_URL } from '../../../config'

</script>

<script>
export default {
    name: 'typeapp',
    props: {
        detail_id2: String,
    },
    data() {
        return {
            isVisible: false,
            showChildComponent: false,
            overallStatus: '',
            selectedStatus: '',
            otherStatus: '',
            requirements: {
                reqDetails1: `
                1. Letter of Intent with Justification of Renewal`,
                reqDetails2: `
                2. Corporate Secretary Certificate attesting to the authority of the person who is filing the renewal of Application`,
                reqDetails3: `
                3. National Commission on Indigenous Peoples Certification Precondition `,
                reqDetails4: `
                4. Certification of the
                            Regional Office to the compliance with the terms and conditions of the
                            MPSA, particularly with regard to: 
                            a. Three-year Devt’Utilization WP
                            b. Survey Plan
                            c. ECC
                            d. EPEP
                            e. SDMP
                            f. Implementation of the 3YR WP, EPEP and SDMP
                            g. Submission of Reports
                            h. Payment of Fees and Taxes`,
            },
            remarks: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
            },
            recommendation: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
            },
            uploadFiles: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
            },
            imagesfile: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
            },
        };
    },
    watch: {
        selectedStatus(newValue) {
            if (newValue !== 'other') {
                this.otherStatus = '';
            }
        },
    },
    methods: {
        view() {
            // this.isVisible = true;
            this.isVisible = !this.isVisible;
        },
        myAction(payload) {
            const { containerId, images } = payload;
            this.imagesfile[containerId] = images;
            console.log(`Uploaded images for ${containerId}:`, images);
        },
        handleFileUpload(fileKey, event) {
            if (event && event.target && event.target.files) {
                this.uploadFiles[fileKey] = Array.from(event.target.files);
                console.log(`Files for ${fileKey}:`, this.uploadFiles[fileKey]);
                console.log('Updated uploadFiles:', this.uploadFiles);
            } else {
                console.error('No files found on event target:', event);
            }
        },
        async getDetails() {
            //MTSR details
            try {
                const mtsr = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
                const overallstatus = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
                const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id2));
                const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id2));
                this.mtsrvalue = filteredmtsr.mtsr
                this.overallStatus = filteredoverall.overallstatus
                this.selectedStatus = this.mtsrvalue
                // console.log(this.selectedStatus)

            } catch (error) {
                console.error('Error fetching details:', error);
            }
            try {
                const remarks = await axios.get(`${API_BASE_URL}/get_remarks`);
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id2);

                this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
                this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
                this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
                this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get(`${API_BASE_URL}/get_recommendation`);
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id2);
                // console.log(filteredrequirements)

                this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
                this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
                this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
                this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
            } catch (error) {
                console.error('Error fetching reco details:', error);
            }

            //2nd
            try {
                const uploads = await axios.get(`${API_BASE_URL}/get_files`);
                const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id2);
                console.log(uploadsrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.uploadFiles).forEach(key => {
                    this.uploadFiles[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 4; i++) { //alisdan
                    const key = `file${i}`;
                    this.uploadFiles[key] = [];
                }

                // Assign fetched files to uploadFiles
                uploadsrequirements.forEach((req) => {
                    for (let i = 1; i <= 4; i++) {
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


            //images 1stkuhaon
            try {
                const images = await axios.get(`${API_BASE_URL}/get_images`);
                const imagesrequirements = images.data.filter(req => req.id_reference == this.$route.params.detail_id2);
                console.log(imagesrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.imagesfile).forEach(key => {
                    this.imagesfile[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 4; i++) { //<------pila kabuok
                    const key = `file${i}`;
                    this.imagesfile[key] = [];
                }

                // Assign fetched files to uploadFiles
                imagesrequirements.forEach((req) => {
                    for (let i = 1; i <= 4; i++) {//<------pila kabuok
                        const key = `file${i}`;


                        // Check if the file key exists in req and is not null
                        if (req.hasOwnProperty(key) && req[key] !== null) {
                            try {
                                this.imagesfile[key] = JSON.parse(req[key]);
                                console.log(this.imagesfile.file1)
                            } catch (e) {
                                console.error(`Error parsing JSON for ${key}:`, e);
                                this.imagesfile[key] = [];
                            }
                        }
                    }
                });


            } catch (error) {
                console.error('Error fetching reco details:', error);
            }
            //diri



        },
        update() {
            const formData = new FormData();
            formData.append('id_reference', this.$route.params.detail_id2);
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
            axios.post(`${API_BASE_URL}/update_mtsrstatus/${this.$route.params.detail_id2}`, formData)
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
            formData1.append('id_reference', this.$route.params.detail_id2);
            console.log('id_reference', this.$route.params.detail_id2)

            for (let i = 1; i <= 4; i++) {
                formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }
            // Append other input values here...

            // Make a POST request to update remarks
            axios.post(`${API_BASE_URL}/update_remarks/${this.$route.params.detail_id2}`, formData1)
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
            formData2.append('id_reference', this.$route.params.detail_id2);
            console.log('id_reference', this.$route.params.detail_id2)

            for (let i = 1; i <= 4; i++) {
                formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
                // console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`${API_BASE_URL}/update_recommendation/${this.$route.params.detail_id2}`, formData2)
                .then(response => {
                    console.log('Recommendations updated successfully:', response.data);
                    // window.location.reload()
                })
                .catch(error => {
                    console.error('Error updating recommendations:', error);
                    // Handle error...
                });


            //ADD IMAGE/UPDATE //2nd
            // Add images
            const formData4 = new FormData();
            formData4.append('id_reference', this.$route.params.detail_id2);

            // Iterate over each containerId in this.imagesfile
            for (const containerId in this.imagesfile) {
                if (this.imagesfile.hasOwnProperty(containerId)) {
                    // Generate the fileKey based on the containerId
                    // Ensure the containerId starts with "file" followed by a number (e.g., "file1", "file2", etc.)
                    const fileKey = `file${containerId.replace('file', '')}`;

                    // Append each file in this.imagesfile[containerId] to formData4 under the correct key
                    this.imagesfile[containerId].forEach(file => {
                        if (file.file !== undefined) {
                            formData4.append(`${fileKey}[]`, file.file); // Append each file under the correct key
                            console.log([...formData4])
                        }
                    });
                }
            }

            // Send FormData to server using axios
            axios.post(`${API_BASE_URL}/update_images/${this.$route.params.detail_id2}`, formData4)
                .then(response => {
                    console.log('Images uploaded successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error uploading images:', error);
                });

            //dri


            //3rd
            //upload files
            const formData3 = new FormData();
            formData3.append('id_reference', this.$route.params.detail_id2);

            // Check if uploadFiles is defined and not null
            if (this.uploadFiles) {
                for (const [key, files] of Object.entries(this.uploadFiles)) {
                    // Check if files is an array and has a length property
                    if (Array.isArray(files) && files.length > 0) {
                        for (let i = 0; i < files.length; i++) {
                            const file = files[i];
                            const validExtensions = ['pdf', 'doc', 'docx'];
                            // Check if file has a name and its extension is valid
                            if (file.name && validExtensions.includes(file.name.split('.').pop().toLowerCase())) {
                                formData3.append(`${key}[]`, file);
                            }
                            // else condition removed to suppress error message
                        }
                    }
                }
            }

            // Send FormData to server using axios
            axios.post(`${API_BASE_URL}/update_uploads/${this.$route.params.detail_id2}`, formData3)
                .then(response => {
                    console.log('Record uploaded successfully:', response.data);
                    window.location.reload()
                })
                .catch(error => {
                    console.error('Error uploading record:', error);
                    window.location.reload()
                });





        },


    },
    mounted() {
        this.getDetails();
    },
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

.tablee {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;
    border-collapse: collapse;
}

.table4 td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
    width: 50%;
    /* Set each column to occupy 50% of the table width */
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
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>