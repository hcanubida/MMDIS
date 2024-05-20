<template>
    <div>
        <headd />
    </div>

    <div class="title4">
        <h2>MANDATORY REQUIREMENTS</h2>
    </div>

    <div class="requirements4">
        <table class="table4">
            <thead class="titlehead4">
                <tr style="text-align: center;">
                    <th class="th4">Requirements</th>
                    <th class="th4">Upload</th>
                    <th class="th4">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData4">
                        1. Application Form (MGB Form No. 8-1), notarized;
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput1"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput1"></textarea>
                    </td>
                </tr>

                <tr>
                    <td class="reqData4">
                        2. Payment of Filing and Processing Fees
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput2"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        3. Duly Certified Articles of Incorporation/ Partnership/Association, By-Laws and Certificate of
                        Registration duly certified by SEC or authorized Gov’t.
                        agencies concerned, for corporations, partnership, associations or cooperatives; or proof of
                        Filipino citizenship for individual;
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput3"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput3"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        4. Location Map/Sketch Plan of the proposed permit area showing its geographic
                        coordinates/meridional block(s) and boundaries in relation to major
                        environmental features and other projects using NAMRIA topographic map in a scale of 1:50,000
                        duly prepared, signed and sealed by a deputized Geodetic Engineer
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput4"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput4"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        5. Area clearance from the Government agencies/LGUs concerned that may
                        be affected by the permit application or written permission from the landowner(s) and surface
                        owner(s) of the area applied for
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput5"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput5"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        6. Five (5) -Year Development/ Utilization Work Program
                        (MGB Form No. 6-2), duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput6"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput6"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        7. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and
                        Community Relations Record (CEMCRR)
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput7"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput7"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        8. Environmental Compliance Certificate
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput8"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput8"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        9. Integrated Environmental Protection and Enhancement Program and Final Mine Rehabilitation
                        and/or Decommissioning Plan
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput9"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput9"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        10. Proof of technical competence including, among others:<br>&nbsp;
                        <br>
                        Curricula Vitae and track records in mining operations and environmental management of the
                        technical personnel who shall undertake the activities in accordance with the submitted Work
                        Program and EPEP.<br>
                        <br>
                        Sworn commitment/ employment contract/proof of availed services of the technical person(s) who
                        will implement the Work Program
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput10"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput10"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        11. Proof of financial capability to undertake the activities pursuant to WP and EPEP, such as
                        the following:<br>&nbsp;
                        <br>
                        For Corporation:<br>&nbsp;
                        Latest audited Financial Statement and/or Annual Report<br>&nbsp;
                        Credit Lines/Bank Guarantees and/ or similar negotiable instruments; and<br>&nbsp;
                        <br>
                        For Individual<br>&nbsp;
                        Sworn statement of assets and liabilities<br>&nbsp;
                        Proof of Bank deposit or credit line
                        Income tax return for the preceding three years
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput11"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput11"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        12. Social Development and Management Program
                    </td>

                    <td class="inputimg4">
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
                        <textarea class="textarea4" v-model="remarks.textInput12"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput12"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Other table -->
        <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">OTHER MANDATORY REQUIREMENTS
            AFTER ACCEPTANCE BUT PRIOR TO THE ISSUANCE OF PERMIT</h2>
        <div class="requirements4">
            <table class="table4">
                <thead class="titlehead4">
                    <tr style="text-align: center;">
                        <th class="th4">Requirements</th>
                        <th class="th4">Upload</th>
                        <th class="th4">Remarks / Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="reqData4">
                            1. Area Status and Clearances (DENR)
                        </td>

                        <td class="inputimg4">
                            <<div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
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
            <textarea class="textarea4" v-model="remarks.textInput13"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput13"></textarea>
        </td>
        </tr>
        <tr>
            <td class="reqData4">
                2. Proofs that the Notice of Application <br>
                MGB Regional Office(s) <br>
                PENRO <br>
                CENRO <br>
                Province <br>
                Municipality
            </td>

            <td class="inputimg4">
                <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                    <label
                        class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Files to upload:
                    </label>
                    <input type="file" multiple accept="application/*" @change="handleFileUpload('file14', $event)"
                        ref="fileInput1"
                        class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                    <div v-for="(file, index) in uploadFiles.file14" :key="file.name">
                        <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                    </div>
                </div>
            </td>

            <td style="text-align: left;width: 400px;">
                <label>Remarks:</label><br>
                <textarea class="textarea4" v-model="remarks.textInput14"></textarea>
                <label>Recommendation or Lacking Submission :</label><br>
                <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput14"></textarea>
            </td>
        </tr>
        <tr>
            <td class="reqData4">
                3. Certification of the Panel of Arbitrators concerned as to any claim/protest/opposition
            </td>

            <td class="inputimg4">
                <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                    <label
                        class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Files to upload:
                    </label>
                    <input type="file" multiple accept="application/*" @change="handleFileUpload('file15', $event)"
                        ref="fileInput1"
                        class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                    <div v-for="(file, index) in uploadFiles.file15" :key="file.name">
                        <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                    </div>
                </div>
            </td>

            <td style="text-align: left;width: 400px;">
                <label>Remarks:</label><br>
                <textarea class="textarea4" v-model="remarks.textInput15"></textarea>
                <label>Recommendation or Lacking Submission :</label><br>
                <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput15"></textarea>
            </td>
        </tr>
        <tr>
            <td class="reqData4">
                4. NCIP Certification
            </td>

            <td class="inputimg4">
                <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                    <label
                        class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Files to upload:
                    </label>
                    <input type="file" multiple accept="application/*" @change="handleFileUpload('file16', $event)"
                        ref="fileInput1"
                        class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                    <div v-for="(file, index) in uploadFiles.file16" :key="file.name">
                        <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                    </div>
                </div>
            </td>

            <td style="text-align: left;width: 400px;">
                <label>Remarks:</label><br>
                <textarea class="textarea4" v-model="remarks.textInput16"></textarea>
                <label>Recommendation or Lacking Submission :</label><br>
                <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput16"></textarea>
            </td>
        </tr>
        <tr>
            <td class="reqData4">
                5. Proof of Consultation with and Prior Approval by the Sangguniang Panlalawigan,
                Sangguniang Bayan/Panlungsod, and Sangguniang Barangay concerned
            </td>

            <td class="inputimg4">
                <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                    <label
                        class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Files to upload:
                    </label>
                    <input type="file" multiple accept="application/*" @change="handleFileUpload('file17', $event)"
                        ref="fileInput1"
                        class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                    <div v-for="(file, index) in uploadFiles.file17" :key="file.name">
                        <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                    </div>
                </div>
            </td>

            <td style="text-align: left;width: 400px;">
                <label>Remarks:</label><br>
                <textarea class="textarea4" v-model="remarks.textInput17"></textarea>
                <label>Recommendation or Lacking Submission :</label><br>
                <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput17"></textarea>
            </td>
        </tr>
        <tr>
            <td class="reqData4">
                6. Surety Bond
            </td>

            <td class="inputimg4">
                <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                    <label
                        class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Files to upload:
                    </label>
                    <input type="file" multiple accept="application/*" @change="handleFileUpload('file18', $event)"
                        ref="fileInput1"
                        class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                    <div v-for="(file, index) in uploadFiles.file18" :key="file.name">
                        <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                    </div>
                </div>
            </td>

            <td style="text-align: left;width: 400px;">
                <label>Remarks:</label><br>
                <textarea class="textarea4" v-model="remarks.textInput18"></textarea>
                <label>Recommendation or Lacking Submission :</label><br>
                <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput18"></textarea>
            </td>
        </tr>
        </tbody>
        </table>
    </div>

    <!-- Other Requirements -->
    <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">OTHER MANDATORY REQUIREMENTS
    </h2>
    <div class="requirements4">
        <table class="table4">
            <thead class="titlehead4">
                <tr style="text-align: center;">
                    <th class="th4">Requirements</th>
                    <th class="th4">Upload</th>
                    <th class="th4">Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData4">
                        1. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of
                        the company’s authorized signatory (for juridical entity only)
                    </td>

                    <td class="inputimg4">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file19', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file19" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea4" v-model="remarks.textInput19"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput19"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData4">
                        2. Care and Maintenance Program
                    </td>

                    <td class="inputimg4">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files to upload:
                            </label>
                            <input type="file" multiple accept="application/*"
                                @change="handleFileUpload('file20', $event)" ref="fileInput1"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            <div v-for="(file, index) in uploadFiles.file20" :key="file.name">
                                <span class="text-sm text-gray-500 ml-3">{{ file.name }}</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left;width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea4" v-model="remarks.textInput20"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea4" style="color: red;" v-model="recommendation.textInput20"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Table 2 -->
    <table class="table4">
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
            <p style="text-align: left;font-size: 20px;font-weight: 600;">Other Lacking Requirements AFTER
                ACCEPTANCE BUT PRIOR TO THE ISSUANCE OF PERMIT</p>
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
            <tr>
                <td v-if="recommendation.textInput18 !== 'null' && recommendation.textInput18.trim() !== ''">
                    {{ requirements.reqDetails18 }}
                </td>

                <td style="text-align: left;width: 1000px;height: 100px;"
                    v-if="recommendation.textInput18 !== 'null' && recommendation.textInput18.trim() !== ''">
                    <label>Recommendation or Lacking Submission</label>
                    <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput18 }}
                    </p>
                </td>
            </tr>
            <p style="text-align: left;font-size: 20px;font-weight: 600;">Other Lacking Requirements</p>
            <tr>
                <td v-if="recommendation.textInput19 !== 'null' && recommendation.textInput19.trim() !== ''">
                    {{ requirements.reqDetails19 }}
                </td>

                <td style="text-align: left;width: 1000px;height: 100px;"
                    v-if="recommendation.textInput19 !== 'null' && recommendation.textInput19.trim() !== ''">
                    <label>Recommendation or Lacking Submission</label>
                    <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput19 }}
                    </p>
                </td>
            </tr>
            <tr>
                <td v-if="recommendation.textInput20 !== 'null' && recommendation.textInput20.trim() !== ''">
                    {{ requirements.reqDetails20 }}
                </td>

                <td style="text-align: left;width: 1000px;height: 100px;"
                    v-if="recommendation.textInput20 !== 'null' && recommendation.textInput20.trim() !== ''">
                    <label>Recommendation or Lacking Submission</label>
                    <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{
                                    recommendation.textInput20 }}
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <table class="tablee">
        <thead class="titlehead4">
            <tr style="text-align: center;">
                <th class="th4" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                <th class="th4" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
                <input v-if="selectedStatus === 'other'" class="inputall1" v-model="otherStatus" style="width: 100%;"
                    placeholder="Enter other Status" />
            </td>
        </tbody>
    </table>

    <table class="tablee">
        <thead class="titlehead4">
            <tr style="text-align: center;">
                <th class="th4" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                <th class="th4" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
            </tr>
        </thead>
        <tbody>
            <td style="text-align: center;font-size: 20px;padding: 20px;">Overall Remarks/Status/Reccomendation</td>
            <td style="font-size: 15px;padding: 20px;">Remarks/Status
                <textarea style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 100px;"></textarea>
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
import headd from '../../../components/MTES/header.vue'
import upload from '../../../components/MTES/multiple-upload.vue'
import downloadd from '../faxsheet/isag-factsheet.vue'
</script>
<script>
export default {
    props: {
        detail_id3: String,
    },
    data() {
        return {
            selectedStatus: '',
            otherStatus: '',
            requirements: {
                reqDetails1: `
                1. Application Form (MGB Form No. 8-1), notarized;`,
                reqDetails2: `
                2. Payment of Filing and Processing Fees`,
                reqDetails3: `
                3. Duly Certified Articles of Incorporation/ Partnership/Association, By-Laws and Certificate of Registration duly certified by SEC or authorized Gov’t. agencies concerned, for corporations, partnership, associations or cooperatives; or proof of Filipino citizenship for individual;`,
                reqDetails4: `
                4. Location Map/Sketch Plan of the proposed permit area showing its geographic coordinates/meridional block(s) and boundaries in relation to major environmental features and other projects using NAMRIA topographic map in a scale of 1:50,000 duly prepared, signed and sealed by a deputized Geodetic Engineer`,
                reqDetails5: `
                5. Area clearance from the Government agencies/LGUs concerned that may be affected by the permit application or written permission from the landowner(s) and surface owner(s) of the area applied for`,
                reqDetails6: `
                6. Five (5) -Year Development/ Utilization Work Program (MGB Form No. 6-2), duly prepared, signed and sealed by a licensed Mining Engineer or Geologist`,
                reqDetails7: `
                7. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and Community Relations Record (CEMCRR)`,
                reqDetails8: `
                8. Environmental Compliance Certificate`,
                reqDetails9: `
                9. Integrated Environmental Protection and Enhancement Program and Final Mine Rehabilitation and/or Decommissioning Plan`,
                reqDetails10: `
                10. Proof of technical competence including, among others:
                Curricula Vitae and track records in mining operations and environmental management of the technical personnel who shall undertake the activities in accordance with the submitted Work Program and EPEP.
                Sworn commitment/ employment contract/proof of availed services of the technical person(s) who will implement the Work Program`,
                reqDetails11: `
                11. Proof of financial capability to undertake the activities pursuant to WP and EPEP, such as the following:
                For Corporation:
                Latest audited Financial Statement and/or Annual Report
                Credit Lines/Bank Guarantees and/ or similar negotiable instruments; and
                For Individual
                Sworn statement of assets and liabilities
                Proof of Bank deposit or credit line Income tax return for the preceding three years`,
                reqDetails12: `
                12. Social Development and Management Program`,
                reqDetails13: `
                1. Area Status and Clearances (DENR)`,
                reqDetails14: `
                2. Proofs that the Notice of Application
                MGB Regional Office(s)
                PENRO
                CENRO
                Province
                Municipality`,
                reqDetails15: `
                3. Certification of the Panel of Arbitrators concerned as to any claim/protest/opposition`,
                reqDetails16: `
                4. NCIP Certification`,
                reqDetails17: `
                5. Proof of Consultation with and Prior Approval by the Sangguniang Panlalawigan, Sangguniang Bayan/Panlungsod, and Sangguniang Barangay concerned`,
                reqDetails18: `
                6. Surety Bond`,
                reqDetails19: `
                1. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of the company’s authorized signatory (for juridical entity only)`,
                reqDetails20: `
                2. Care and Maintenance Program`,
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
                textInput18: '',
                textInput19: '',
                textInput20: '',
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
                textInput18: '',
                textInput19: '',
                textInput20: '',
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
                file18: [],
                file19: [],
                file20: [],
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
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id3);

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
                this.remarks.textInput18 = filteredremarks[0].input18 !== null ? filteredremarks[0].input18 : '';
                this.remarks.textInput19 = filteredremarks[0].input19 !== null ? filteredremarks[0].input19 : '';
                this.remarks.textInput20 = filteredremarks[0].input20 !== null ? filteredremarks[0].input20 : '';
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id3);

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
                this.recommendation.textInput18 = filteredrequirements.input18 !== null ? filteredrequirements.input18 : '';
                this.recommendation.textInput19 = filteredrequirements.input19 !== null ? filteredrequirements.input19 : '';
                this.recommendation.textInput20 = filteredrequirements.input20 !== null ? filteredrequirements.input20 : '';
            } catch (error) {
                console.error('Error fetching reco details:', error);
            }

        },
        update() {
            const formData = new FormData();
            formData.append('id_reference', this.$route.params.detail_id3);
            // Append category based on selectedCategory
            if (this.selectedStatus === 'other') {
                // Append otherCategory if selectedCategory is 'others'
                formData.append('mtsr', this.otherStatus);
            } else {
                // Append selectedCategory directly otherwise
                formData.append('mtsr', this.selectedStatus);
            }
            // Make axios POST request
            axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id3}`, formData)
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
            formData1.append('id_reference', this.$route.params.detail_id3);
            console.log('id_reference', this.$route.params.detail_id3)

            for (let i = 1; i <= 20; i++) {
                formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }
            // Append other input values here...

            // Make a POST request to update remarks
            axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id3}`, formData1)
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
            formData2.append('id_reference', this.$route.params.detail_id3);
            console.log('id_reference', this.$route.params.detail_id3)

            for (let i = 1; i <= 20; i++) {
                formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id3}`, formData2)
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
            formData3.append('id_reference', this.$route.params.detail_id3);

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
        },
    },
    mounted() {
        this.getDetails();
    },
}
</script>

<style lang="scss" scoped>
.title4 {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 120px;
}

.requirements4 {
    margin-top: 10px;
    text-align: center;
}

.titlehead4 {
    font-size: 20px;
}

.reqData4 {
    text-align: left;
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    width: 600px;
}

.inputimg4 {
    text-align: left;
    width: 400px;
}


.table4 {
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
}

.tablee {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: left;
    border-collapse: collapse;
}

.th4,
td {
    border: 1px solid #dddddd;
    padding: 8px;
}

.th4 {
    background-color: #e0b983;
}

.caption4 {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    caption-side: top;
}

.textarea4 {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
</style>