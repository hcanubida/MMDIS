<template>
    <div>
        <headd />
    </div>

    <div class="title5">
        <h2>MANDATORY REQUIREMENTS</h2>
    </div>

    <!-- table 1 -->
    <div class="requirements5">
        <table class="table5">
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th5">Requirements</th>
                    <th class="th5">Upload</th>
                    <th class="th5">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData5">
                        1. Application Form (MGB Form No. 11-2)
                    </td>

                    <td class="inputimg5">
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

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput1"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput1"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file1" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        2. Duly certified Articles of Incorporation/ Partnership/ Association, By-Laws,
                        and Certificate of Registration issued by the SEC or authorized Government agency concerned;
                    </td>

                    <td class="inputimg5">
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

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput2"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file2" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        3. Location map/sketch plan of the area of the proposed processing plant using NAMRIA
                        (topographic map) in a scale of 1:50,000
                    </td>

                    <td class="inputimg5">
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

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput3"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file3" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        4. <u>Feasibility Study</u> including work programs, plant site, mill and plant lay-out/design,
                        details of technology to be employed in the proposed operation,
                        anti-pollution devices/ measures as well as the plant capacity of <br>
                        <u> Project Description </u> with detailed financial statement for its operations incorporating
                        the social and environmental expenditures, taxes and fees paid. (MGB Form No. 5-3A);
                    </td>

                    <td class="inputimg5">
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

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput4"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput4"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file4" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        5. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and
                        Community Relations Record (CEMCRR)
                    </td>

                    <td class="inputimg5">
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

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput5"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput5"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file5" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        6. Environmental Compliance Certificate (ECC)
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file6', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file6" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput6"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput6"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file6" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        7. Proof of technical competence including, among others:<br>&nbsp;
                        <br>
                        * curricula vitae and track records in mineral processing and environmental management of the
                        technical personnel who shall undertake the operation.<br>
                        <br>
                        * Sworn statement/ employment contract/ proof of availed services of the technical person/s who
                        will undertake the implementation of the Work Programs
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file7', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file7" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput7"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput7"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file7" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        8. Proof of financial capability to undertake the activities pursuant to the Feasibility Study
                        and EPEP, such as:<br>&nbsp;
                        <br>
                        a. Latest audited Financial Statement and/or Annual Report <br>
                        <br>
                        &nbsp;&nbsp;&nbsp;Credit Lines/Bank Guarantees and /or similar negotiable instruments.
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file8', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file8" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput8"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput8"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file8" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        9. Interim Importation Permit/Certification from EMB on the use of chemicals (e.g. cyanide,
                        mercury) in compliance with R.A. No. 6969
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file9', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file9" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput9"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput9"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file9" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        10. Brief history of applicant’s activities for the last five (5) years, if any
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file10', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file10" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput10"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput10"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file10" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        11. Supply Contract/Agreement with mining rights holders, if applicable
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file11', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file11" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput11"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput11"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file11" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        12. Other supporting papers as the Regional Director or the concerned may require or the
                        applicant may submit.<br>&nbsp;
                        <br>
                        &nbsp;&nbsp;12. 1 Environmental Protection and Enhancement Program (EPEP) <br>
                        <br>
                        &nbsp;&nbsp;12.2 Social Development Management Program (SDMP) <br>
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file12', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file12" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput12"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput12"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file12" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Other table -->
    <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">OTHER MANDATORY REQUIREMENTS</h2>
    <div class="requirements5">
        <table class="table5">
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th5">Requirements</th>
                    <th class="th5">Upload</th>
                    <th class="th5">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData5">
                        1. Corporate Secretary’s Certificate attesting to a Board Resolution authorizing the President
                        to sign and execute documents in connection with the MPP application
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file13', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file13" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput13"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput13"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file13" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        2. Payment of Evaluation Fee for the FS
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file14', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file14" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput14"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput14"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file14" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        3. Payment of Evaluation Fee for EPEP
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file15', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file15" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput15"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput15"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file15" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        4. Prior approval or endorsement in the form of Resolution or Certification by at least the
                        majority of the Sanggunian concerned
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file16', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file16" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput16"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput16"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file16" />
                    </td>
                </tr>
                <tr>
                    <td class="reqData5">
                        5. NCIP Certification or proof of land ownership, such as certified true copies of
                        Original/Transfer Certificate of Title, among others.
                    </td>

                    <td class="inputimg5">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file17', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file17" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput17"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;" v-model="recommendation.textInput17"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file17" />
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="table6">
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
                <tr>
                    <td v-if="recommendation.textInput6 !== 'null' && recommendation.textInput6.trim() !== ''">
                        {{ requirements.reqDetails6 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput6 !== 'null' && recommendation.textInput6.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput6 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput7 !== 'null' && recommendation.textInput7.trim() !== ''">
                        {{ requirements.reqDetails7 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput7 !== 'null' && recommendation.textInput7.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput7 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput8 !== 'null' && recommendation.textInput8.trim() !== ''">
                        {{ requirements.reqDetails8 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput8 !== 'null' && recommendation.textInput8.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput8 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput9 !== 'null' && recommendation.textInput9.trim() !== ''">
                        {{ requirements.reqDetails9 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput9 !== 'null' && recommendation.textInput9.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput9 }}</p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput10 !== 'null' && recommendation.textInput10.trim() !== ''">
                        {{ requirements.reqDetails10 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput10 !== 'null' && recommendation.textInput10.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput10 }}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput11 !== 'null' && recommendation.textInput11.trim() !== ''">
                        {{ requirements.reqDetails11 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput11 !== 'null' && recommendation.textInput11.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput11 }}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput12 !== 'null' && recommendation.textInput12.trim() !== ''">
                        {{ requirements.reqDetails12 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput12 !== 'null' && recommendation.textInput12.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput12 }}
                        </p>
                    </td>
                </tr>
                <p style="text-align: left;font-size: 20px;font-weight: 600;">Other Lacking Requirements</p>
                <tr>
                    <td v-if="recommendation.textInput13 !== 'null' && recommendation.textInput13.trim() !== ''">
                        {{ requirements.reqDetails13 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput13 !== 'null' && recommendation.textInput13.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput13 }}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput14 !== 'null' && recommendation.textInput14.trim() !== ''">
                        {{ requirements.reqDetails14 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput14 !== 'null' && recommendation.textInput14.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput14 }}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput15 !== 'null' && recommendation.textInput15.trim() !== ''">
                        {{ requirements.reqDetails15 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput15 !== 'null' && recommendation.textInput15.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput15 }}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput16 !== 'null' && recommendation.textInput16.trim() !== ''">
                        {{ requirements.reqDetails16 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput16 !== 'null' && recommendation.textInput16.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput16 }}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td v-if="recommendation.textInput17 !== 'null' && recommendation.textInput17.trim() !== ''">
                        {{ requirements.reqDetails17 }}
                    </td>

                    <td style="text-align: left;width: 1000px;height: 100px;"
                        v-if="recommendation.textInput17 !== 'null' && recommendation.textInput17.trim() !== ''">
                        <label>Recommendation or Lacking Submission</label>
                        <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput17 }}
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

        <table class="tablee">
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th5" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th5" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th5" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th5" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
    <!-- Summary TAble -->

</template>

<script setup>
import headd from '../../../components/MTES/header.vue'
import upload from '../../../components/MTES/multiple-upload.vue'
import downloadd from '../faxsheet/mpp-factsheet.vue'
import imagees from '../../../components/MTES/modals/imguploads.vue'
</script>
<script>
export default {
    props: {
        detail_id5: String,
    },
    data() {
        return {
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
                reqDetails5: `
                5. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and Community Relations Record (CEMCRR)`,
                reqDetails6: `
                6. Environmental Compliance Certificate (ECC)`,
                reqDetails7: `
                7. Proof of technical competence including, among others:
                * curricula vitae and track records in mineral processing and environmental management of the technical personnel who shall undertake the operation.
                * Sworn statement/ employment contract/ proof of availed services of the technical person/s who will undertake the implementation of the Work Programs`,
                reqDetails8: `
                8. Proof of financial capability to undertake the activities pursuant to the Feasibility Study and EPEP, such as:
                a. Latest audited Financial Statement and/or Annual Report
                Credit Lines/Bank Guarantees and /or similar negotiable instruments.`,
                reqDetails9: `
                9. Interim Importation Permit/Certification from EMB on the use of chemicals (e.g. cyanide, mercury) in compliance with R.A. No. 6969`,
                reqDetails10: `
                10. Brief history of applicant’s activities for the last five (5) years, if any`,
                reqDetails11: `
                11. Supply Contract/Agreement with mining rights holders, if applicable`,
                reqDetails12: `
                12. Other supporting papers as the Regional Director or the concerned may require or the applicant may submit.
                12. 1 Environmental Protection and Enhancement Program (EPEP)
                12.2 Social Development Management Program (SDMP)`,
                reqDetails13: `
                1. Corporate Secretary’s Certificate attesting to a Board Resolution authorizing the President to sign and execute documents in connection with the MPP application`,
                reqDetails14: `
                2. Payment of Evaluation Fee for the FS`,
                reqDetails15: `
                3. Payment of Evaluation Fee for EPEP`,
                reqDetails16: `
                4. Prior approval or endorsement in the form of Resolution or Certification by at least the majority of the Sanggunian concerned`,
                reqDetails17: `
                5. NCIP Certification or proof of land ownership, such as certified true copies of Original/Transfer Certificate of Title, among others.`,
            },
            remarks: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput6: '',
                textInput7: '',
                textInput8: '',
                textInput9: '',
                textInput10: '',
                textInput11: '',
                textInput12: '',
                textInput13: '',
                textInput14: '',
                textInput15: '',
                textInput16: '',
                textInput17: '',
            },
            recommendation: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput6: '',
                textInput7: '',
                textInput8: '',
                textInput9: '',
                textInput10: '',
                textInput11: '',
                textInput12: '',
                textInput13: '',
                textInput14: '',
                textInput15: '',
                textInput16: '',
                textInput17: '',
            },
            uploadFiles: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: [],
                file6: [],
                file7: [],
                file8: [],
                file9: [],
                file10: [],
                file11: [],
                file12: [],
                file13: [],
                file14: [],
                file15: [],
                file16: [],
                file17: [],
            },
            imagesfile: {
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: [],
                file6: [],
                file7: [],
                file8: [],
                file9: [],
                file10: [],
                file11: [],
                file12: [],
                file13: [],
                file14: [],
                file15: [],
                file16: [],
                file17: [],
            }
        };
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
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id5);

                this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
                this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
                this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
                this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';
                this.remarks.textInput5 = filteredremarks[0].input5 !== null ? filteredremarks[0].input5 : '';
                this.remarks.textInput6 = filteredremarks[0].input6 !== null ? filteredremarks[0].input6 : '';
                this.remarks.textInput7 = filteredremarks[0].input7 !== null ? filteredremarks[0].input7 : '';
                this.remarks.textInput8 = filteredremarks[0].input8 !== null ? filteredremarks[0].input8 : '';
                this.remarks.textInput9 = filteredremarks[0].input9 !== null ? filteredremarks[0].input9 : '';
                this.remarks.textInput10 = filteredremarks[0].input10 !== null ? filteredremarks[0].input10 : '';
                this.remarks.textInput11 = filteredremarks[0].input11 !== null ? filteredremarks[0].input11 : '';
                this.remarks.textInput12 = filteredremarks[0].input12 !== null ? filteredremarks[0].input12 : '';
                this.remarks.textInput13 = filteredremarks[0].input13 !== null ? filteredremarks[0].input13 : '';
                this.remarks.textInput14 = filteredremarks[0].input14 !== null ? filteredremarks[0].input14 : '';
                this.remarks.textInput15 = filteredremarks[0].input15 !== null ? filteredremarks[0].input15 : '';
                this.remarks.textInput16 = filteredremarks[0].input16 !== null ? filteredremarks[0].input16 : '';
                this.remarks.textInput17 = filteredremarks[0].input17 !== null ? filteredremarks[0].input17 : '';
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id5);

                this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
                this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
                this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
                this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
                this.recommendation.textInput5 = filteredrequirements.input5 !== null ? filteredrequirements.input5 : '';
                this.recommendation.textInput6 = filteredrequirements.input6 !== null ? filteredrequirements.input6 : '';
                this.recommendation.textInput7 = filteredrequirements.input7 !== null ? filteredrequirements.input7 : '';
                this.recommendation.textInput8 = filteredrequirements.input8 !== null ? filteredrequirements.input8 : '';
                this.recommendation.textInput9 = filteredrequirements.input9 !== null ? filteredrequirements.input9 : '';
                this.recommendation.textInput10 = filteredrequirements.input10 !== null ? filteredrequirements.input10 : '';
                this.recommendation.textInput11 = filteredrequirements.input11 !== null ? filteredrequirements.input11 : '';
                this.recommendation.textInput12 = filteredrequirements.input12 !== null ? filteredrequirements.input12 : '';
                this.recommendation.textInput13 = filteredrequirements.input13 !== null ? filteredrequirements.input13 : '';
                this.recommendation.textInput14 = filteredrequirements.input14 !== null ? filteredrequirements.input14 : '';
                this.recommendation.textInput15 = filteredrequirements.input15 !== null ? filteredrequirements.input15 : '';
                this.recommendation.textInput16 = filteredrequirements.input16 !== null ? filteredrequirements.input16 : '';
                this.recommendation.textInput17 = filteredrequirements.input17 !== null ? filteredrequirements.input17 : '';
            } catch (error) {
                console.error('Error fetching reco details:', error);
            }

        },
        update() {
            const formData = new FormData();
            formData.append('id_reference', this.$route.params.detail_id5);
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
            axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id5}`, formData)
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
            formData1.append('id_reference', this.$route.params.detail_id5);

            for (let i = 1; i <= 17; i++) {
                formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
                console.log(`input${i}`, this.remarks[`textInput${i}`])
            }
            // Append other input values here...

            // Make a POST request to update remarks
            axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id5}`, formData1)
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
            formData2.append('id_reference', this.$route.params.detail_id5);
            console.log('id_reference', this.$route.params.detail_id5)

            for (let i = 1; i <= 17; i++) {
                formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id5}`, formData2)
                .then(response => {
                    console.log('Recommendations updated successfully:', response.data);
                    window.location.reload()
                })
                .catch(error => {
                    console.error('Error updating recommendations:', error);
                    // Handle error...
                });

            // Upload files 
            const formData3 = new FormData();
            formData3.append('id_reference', this.$route.params.detail_id5);

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
            formData4.append('id_reference', this.$route.params.detail_id5);

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

<style lang="scss" scoped>
.title5 {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 120px;
}

.requirements5 {
    margin-top: 10px;
    text-align: center;
}

.titlehead5 {
    font-size: 20px;
}

.tablee {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;
    border-collapse: collapse;
}

.reqData5 {
    text-align: left;
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    width: 600px;
}

.inputimg5 {
    text-align: left;
    width: 400px;
}


.table5 {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
}

.table6 td {
    border: 1px solid #dddddd;
    padding: 8px;
    width: 50%;
    text-align: left;
    /* Set each column to occupy 50% of the table width */
}

.th5,
td {
    border: 1px solid #dddddd;
    padding: 8px;
}

.th5 {
    background-color: #e0b983;
}

.caption5 {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    caption-side: top;
}

.textarea5 {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
</style>