<template>
    <div>
        <headd />
    </div>

    <div class="title3">
        <h2>MANDATORY REQUIREMENTS {{ $route.params.detail_id2 }}</h2>
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
                        <textarea class="textarea3" v-model="remarks.textInput1"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="recommendation.textInput1"></textarea>
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
                        <textarea class="textarea3" v-model="remarks.textInput2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="recommendation.textInput2"></textarea>
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
                        <textarea class="textarea3" v-model="remarks.textInput3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="recommendation.textInput3"></textarea>
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
                        <textarea class="textarea3" v-model="remarks.textInput4"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea3" style="color: red;" v-model="recommendation.textInput4"></textarea>
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
import headd from '../../../components/MTES/header.vue'
import upload from '../../../components/MTES/multiple-upload.vue'

</script>

<script>
export default {
    name: 'typeapp',
    props: {
        detail_id2: String,
    },
    data() {
        return {
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
        };
    },
    methods: {
        async getDetails() {
            try {
                const remarks = await axios.get('http://localhost:8000/get_remarks');
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id2);

                this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
                this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
                this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
                this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id2);
                console.log(filteredrequirements)
                
                this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
                this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
                this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
                this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
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
        },
        update() {
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
            axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id2}`, formData1)
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
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id2}`, formData2)
                .then(response => {
                    console.log('Recommendations updated successfully:', response.data);
                    window.location.reload()
                })
                .catch(error => {
                    console.error('Error updating recommendations:', error);
                    // Handle error...
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