<template>

    <div class="title1">

    </div>
    <p
        style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 50px;">
        FACT SHEET / EVALUATION SHEET
    </p>
    <div>


        <!--Application table-->

        <p
            style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 130px; right: 160px;">
            I.&nbsp;&nbsp;&nbsp;APPLICATION DETAILS
        </p>
        <div>
            <table class="ftable">
                <tbody class="fbody">
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            NAME OF APPLICANT:
                        </td>
                        <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.tenement_name }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            APPLICATION NUMBER:
                        </td>
                        <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.tenement_number }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            LOCATION:
                        </td>
                        <td
                            style="width: auto; letter-spacing: 2px;font-size: 12px;font-weight: 600; text-align: center;padding-left: 15px;padding-right: 15px;">
                            {{ detail.barangay }},{{ detail.city }}, {{ detail.province }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            COMMODITY:
                        </td>
                        <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.commodity }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            AREA (HECTARES):
                        </td>
                        <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.area_hectares }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            DATE FILED:
                        </td>
                        <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.date_filed }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Applicant's Table -->

            <p
                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 100px;right: 160px;">
                II.&nbsp;&nbsp;&nbsp;APPLICANT'S DETAILS
            </p>
            <table class="ftable" style="margin-top: 130px;">
                <tbody class="fbody">
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            CATEGORY:
                        </td>
                        <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.category }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            AUTHORIZED REPRESENTATIVE:
                        </td>
                        <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.authorized_rep }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            CONTACT NUMBER:
                        </td>
                        <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.contact_no }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            EMAIL ADDRESS:
                        </td>
                        <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.email }}
                        </td>
                    </tr>
                    <tr v-for="(detail, index) in details" :key="index">
                        <td
                            style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                            OTHERS:
                        </td>
                        <td
                            style="padding-left: 15px;padding-right: 15px;width: 350px; letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                            {{ detail.others }}
                        </td>
                    </tr>
                </tbody>
            </table>



            <!--Mandatory Req-->


            <p
                style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 80px; right: 160px;">
                III.&nbsp;&nbsp;&nbsp;MANDATORY REQUIREMENTS
            </p>
            <table class="ftablez">
                <thead>
                    <tr style="text-align: center;">
                        <th style="width: 40%; font-weight: bold;">Requirement</th>
                        <th style="width: 20%; font-weight: bold;">Uploads</th>
                        <th style="width: 20%; font-weight: bold;">Remarks / Status</th>
                        <th style="width: 20%; font-weight: bold;">Recommendation</th>
                    </tr>
                </thead>
                <tbody class="fbody">
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            1. Original and duly accomplished accomplished form
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <div v-for="(file, index) in uploadFiles.file1" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput1 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput1 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            2. Copy of the Permit/ Contract of Suppliers
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <div v-for="(file, index) in uploadFiles.file2" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput2 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput2 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            3. DTI Registration/ SEC Registration </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <div v-for="(file, index) in uploadFiles.file3" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput3 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput3 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            4. Proof of legal source or supply as supported by any of the following documents: <br>
                            &nbsp;
                            4.1. Supply Contract/Agreement<br> &nbsp;
                            4.2. Affidavit executed by a Permit <br> &nbsp;
                            4.3. Delivery or Purchase Receipts <br> &nbsp;
                            4.4 Ore Transport Permit (OTP) or Bill of Lading <br> &nbsp;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <div v-for="(file, index) in uploadFiles.file4" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput4 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput4 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            5. Other supporting papers as the Regional Office concerned may require or the applicant may
                            submit. <br>&nbsp;
                            5.1. Brief Description of Business <br>&nbsp;
                            5.2. Proof of lot ownership/ consent of stockyard <br>&nbsp;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <div v-for="(file, index) in uploadFiles.file5" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput5 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput5 }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!--Summary of Lacking Req-->
            <p
                style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 80px; right: 110px;">
                IV.&nbsp;&nbsp;&nbsp;SUMMARY OF LACKING REQUIREMENTS
            </p>

            <table class="ftablez">
                <thead>
                    <tr style="text-align: center; font-size: 12px; font-weight: 700;">
                        <th style="width: 40%; font-weight: bold;">Requirement</th>
                        <th style="width: 20%; font-weight: bold;">Recommendation or Lacking Submission</th>
                    </tr>
                </thead>
                <tbody class="fbody">
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            1. Original and duly accomplished accomplished form
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput1 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            2. Copy of the Permit/ Contract of Suppliers
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput2 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            3. DTI Registration/ SEC Registration </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput3 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            4. Proof of legal source or supply as supported by any of the following documents: <br>
                            &nbsp;
                            4.1. Supply Contract/Agreement<br> &nbsp;
                            4.2. Affidavit executed by a Permit <br> &nbsp;
                            4.3. Delivery or Purchase Receipts <br> &nbsp;
                            4.4 Ore Transport Permit (OTP) or Bill of Lading <br> &nbsp;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput4 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            5. Other supporting papers as the Regional Office concerned may require or the applicant may
                            submit. <br>&nbsp;
                            5.1. Brief Description of Business <br>&nbsp;
                            5.2. Proof of lot ownership/ consent of stockyard <br>&nbsp;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput5 }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>



            <!--Status of Application-->
            <p
                style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 80px; right: 165px;">
                V.&nbsp;&nbsp;&nbsp;STATUS OF THE APPLICATION
            </p>
            <table class="ftabley">
                <thead>
                    <tr style="text-align: center; font-size: 12px; font-weight: 700;">
                        <th style="width: 40%; font-weight: bold;">MANDATORY
                            REQUIREMENTS</th>
                        <th style="width: 30%; font-weight: bold;">Remarks / Status</th>
                    </tr>
                </thead>
                <tbody class="fbody">
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            Status
                        </td>

                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <p>
                                {{ mtsrvalue }}
                            </p>
                        </td>

                    </tr>
                </tbody>
            </table>


            <!--Overall Remark-->
            <p
                style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 80px; right: 100px;">
                VI.&nbsp;&nbsp;&nbsp;OVERALL REMARKS/ RECOMMENDATIONS
            </p>
            <table class="ftabley">
                <thead>
                    <tr style="text-align: center; font-size: 12px; font-weight: 700;">
                        <th style="width: 40%; font-weight: bold;">MANDATORY
                            REQUIREMENTS</th>
                        <th style="width: 30%; font-weight: bold;">Remarks / Status</th>
                    </tr>
                </thead>
                <tbody class="fbody">

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            Overall Remarks/ Status/
                            Recommendation
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            <p>{{ overallvalue }}</p>
                        </td>

                    </tr>
                </tbody>
            </table>

            <p
                style="font-size: medium; font-weight: 700; letter-spacing: 3px; text-align: center; position: relative; top: 80px; right: 235px;">
                VII.&nbsp;&nbsp;&nbsp;CHRONOLOGY
            </p>


        </div>
    </div>
    <div style="margin-bottom: 1000px;"></div>
</template>


<script>

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

        };
    },
    methods: {
        async fetchDetails() {
            //Details applicants
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.filter(det => det.id == this.$route.params.detail_id9);
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Remarks details
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

            //MTSR details
            try {
                const mtsr = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const overallstatus = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id9));
                const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id9));
                this.mtsrvalue = filteredmtsr.mtsr
                this.overallvalue = filteredoverall.overallstatus
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Recommendation details
            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id9);
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
                const uploads = await axios.get('http://localhost:8000/get_files');
                const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id9);
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




<style lang="scss" scoped>
/* Combined styles from style 1 and style 2 */

/* General styles */
.title1 {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 100px;
    margin-bottom: 25px;
}

.ftable {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    /* Adjusted margin-top */
}

.ftabley {
    margin: auto;
    margin-top: 100px;
    /* Adjusted margin-top */
    width: 700px;
    table-layout: fixed;
    /* Set the table layout to fixed */
    border-collapse: collapse;
}

.ftablez {
    margin: auto;
    margin-top: 100px;
    /* Adjusted margin-top */
    width: 1000px;
    table-layout: fixed;
    /* Set the table layout to fixed */
    border-collapse: collapse;
}

.ftablez th,
.ftablez td {
    width: 33%;
    /* Set the fixed width for each column (1/3 of the table width) */
    padding: 10px;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    border: 1px solid black;
    word-wrap: break-word;
    /* Allow word wrap for long text */

}

.fbody table {
    border-collapse: collapse;
    width: 100%;
    /* Adjusted width */
    margin-top: 20px;
    /* Adjusted margin-top */
    text-align: center;
}

.fbody th,
.fbody td {
    border: 1px solid rgb(37, 37, 37);
    padding: 12px;
    text-align: center;
}

/* Styles for table headers */
.ftable th {
    padding: 10px;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid black;
    text-align: center;
}

/* Styles for table data cells */
.ftable td {
    padding: 10px;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid black;
    text-align: center;
}
</style>
