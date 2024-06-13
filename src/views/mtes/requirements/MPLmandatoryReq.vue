<template>
    <div>
        <headd />
    </div>

    <div class="title">
        <h2>MANDATORY REQUIREMENTS</h2>
    </div>

    <!-- Table 1 -->
    <div class="requirements">
        <table class="table1">
            <thead class="titlehead">
                <tr>
                    <th>Requirements</th>
                    <th>Level of Compliance (marked)</th>
                    <th>Upload</th>
                    <th>Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData">
                        1. Application Form/Letter Intent
                    </td>
                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
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

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput1" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput1"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file1" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file1" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>


                </tr>
                <tr>
                    <td class="reqData">
                        2. Location map/sketch plan of the proposed processing plant using NAMRIA topographic map in a
                        scale of 1:50,000 or 1:10,000
                    </td>

                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
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

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput2" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput2"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file2" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file2" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. Project Description and plant layout/design including cost of project duly prepared and
                        signed by a Licensed Metallurgical Engineer

                    </td>

                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
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

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput3" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput3"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file3" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file3" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        4. Small-Scale Miners License of the duly authorized representative
                    </td>

                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
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

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput4" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput4"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file4" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file5" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="reqData">
                        5. Proof of Technical Competence
                    </td>

                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>

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

                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file5" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>

                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput5" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput5"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file5" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file5" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        6. Proof of Financial Capability such as Latest Audited Financial Statement, Annual Report for
                        the Preceding Year, and Credit Line/s and/proof of bank deposit/s, in the amount that shall not
                        be less than the cost of project
                    </td>

                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>



                    <td class="inputimg">
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

                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file6" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>

                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput6" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput6"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file6" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file6" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        7. Supply Contract/Agreement with the Small-Scale Mining Contractor/s or MPL Holder/s
                    </td>
                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
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

                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file7" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>

                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput7" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput7"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file7" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file7" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        8. For individual:
                        Certified Photocopy of DTI Registration
                        <br>&nbsp;
                        <br>&nbsp;
                        For Association/Cooperative:
                        Securities and Exchange Commission or other Concerned Agency(ies)-Certified True Copy of the
                        Certificate of Registration, Articles of Incorporation/Association, and By-Laws or Certification
                        from MGB or MGB RO that said documents are duly registered in that Office, with a minimum
                        authorized capital of PhP10,000,000 and not to exceed PhP200,000,000

                    </td>


                    <td class="td6">
                        <select>
                            <option value="submitted">Select</option>
                            <option value="approved">YES</option>
                            <option value="pending">NO</option>
                            <option value="rejected">N/A</option>
                        </select>
                    </td>

                    <td class="inputimg">
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

                        <div class="mx-10 mb-3 ">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Files uploaded:
                            </label>
                            <div v-for="(file, index) in uploadFiles.file8" :key="index">
                                <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                            </div>
                        </div>

                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea class="textarea5" v-model="remarks.textInput8" style="height: 600px;"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea class="textarea5" style="color: red;height: 600px;"
                            v-model="recommendation.textInput8"></textarea>

                        <!-- images upload (based remarks) -->
                        <imagees @images-uploaded="myAction" containerId="file8" />
                        <!-- 3rd buhaton -->
                        <div v-for="(file, index) in imagesfile.file8" :key="index">
                            <!-- Display each file object here -->
                            <p class="text-sm text-gray-500 ml-3">{{ file }}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!--Table 2-->

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
            </tbody>
        </table>

        <table class="table3">
            <thead class="titlehead">
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

        <table class="table3">
            <thead class="titlehead5">
                <tr style="text-align: center;">
                    <th class="th6" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
                    <th class="th6" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
                <button style="background-color: bisque;width: 150px;height:40px;border-radius: 5px;margin-left: 10px;"
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
import upload from '../../../../src/components/MTES/multiple-upload.vue';
import headd from '../../../components/MTES/header.vue'
import imagees from '../../../components/MTES/modals/imguploads.vue'
import faxx from '../faxsheet/mpl-facsheet.vue'
</script>

<script>
export default {
    data() {
        return {
            overallStatus: '',
            selectedStatus: '',
            isVisible: false,
            showChildComponent: false,
            otherStatus: '',
            requirements: {
                reqDetails1: `
        1. Petition/ Proposal for Minahang Bayan`,
                reqDetails2: `
        2. Area Status
        MGB X (Status vis-avis the prior and existing mining rights and application, and areas closed to mining applications)
        NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the ICCs/Ips)
        DENR 10 (Area Status/Clearance)
        LGU (Province/City Government Concerned - Area Status/Clearance)`,
                reqDetails3: `
        3. Proofs of Notice and Endorsement of the Sanggunian Concerned:
        Panlalawigan
        Bayan/Panlungsod
        Barangay`,
                reqDetails4: `
        4. MGB RO Evaluation Report re:
        Area viability for Small Scale Mining
        Allocation for Mineral Processing Zone (if applicable)`,
                reqDetails5: `
        5. Proofs of Notice:
        To mining tenement holder(s)`,
                reqDetails6: `
        6. Proofs of Posting:
        MGB RO concerned
        Provincial Governor’s Office
        Mayor’s Office
        Barangay(s)`,
                reqDetails7: `
        7. Proof of Publication`,
                reqDetails8: `
        8. PMRB Certificate
        That there is no formal Protest filed
        or
        That the Favorable Decision has become final & executory`
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
            // Ensure the event target and files exist
            if (event && event.target && event.target.files) {
                this.uploadFiles[fileKey] = Array.from(event.target.files);
                console.log(`Files for ${fileKey}:`, this.uploadFiles[fileKey]);
            } else {
                console.error('No files found on event target:', event);
            }
        },
        async getDetails() {

            //MTSR details
            try {
                const mtsr = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const overallstatus = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id8));
                const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id8));
                this.mtsrvalue = filteredmtsr.mtsr
                this.overallStatus = filteredoverall.overallstatus
                this.selectedStatus = this.mtsrvalue
                // console.log(this.selectedStatus)

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const remarks = await axios.get('http://localhost:8000/get_remarks');
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id8);

                this.remarks.textInput1 = filteredremarks[0].input1 !== null ? filteredremarks[0].input1 : '';
                this.remarks.textInput2 = filteredremarks[0].input2 !== null ? filteredremarks[0].input2 : '';
                this.remarks.textInput3 = filteredremarks[0].input3 !== null ? filteredremarks[0].input3 : '';
                this.remarks.textInput4 = filteredremarks[0].input4 !== null ? filteredremarks[0].input4 : '';
                this.remarks.textInput5 = filteredremarks[0].input5 !== null ? filteredremarks[0].input5 : '';
                this.remarks.textInput6 = filteredremarks[0].input6 !== null ? filteredremarks[0].input6 : '';
                this.remarks.textInput7 = filteredremarks[0].input7 !== null ? filteredremarks[0].input7 : '';
                this.remarks.textInput8 = filteredremarks[0].input8 !== null ? filteredremarks[0].input8 : '';

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id8);

                this.recommendation.textInput1 = filteredrequirements.input1 !== null ? filteredrequirements.input1 : '';
                this.recommendation.textInput2 = filteredrequirements.input2 !== null ? filteredrequirements.input2 : '';
                this.recommendation.textInput3 = filteredrequirements.input3 !== null ? filteredrequirements.input3 : '';
                this.recommendation.textInput4 = filteredrequirements.input4 !== null ? filteredrequirements.input4 : '';
                this.recommendation.textInput5 = filteredrequirements.input5 !== null ? filteredrequirements.input5 : '';
                this.recommendation.textInput6 = filteredrequirements.input6 !== null ? filteredrequirements.input6 : '';
                this.recommendation.textInput7 = filteredrequirements.input7 !== null ? filteredrequirements.input7 : '';
                this.recommendation.textInput8 = filteredrequirements.input8 !== null ? filteredrequirements.input8 : '';

            } catch (error) {
                console.error('Error fetching reco details:', error);
            }


            try {
                const uploads = await axios.get('http://localhost:8000/get_files');
                const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id8);
                console.log(uploadsrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.uploadFiles).forEach(key => {
                    this.uploadFiles[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 8; i++) { //alisdan
                    const key = `file${i}`;
                    this.uploadFiles[key] = [];
                }

                // Assign fetched files to uploadFiles
                uploadsrequirements.forEach((req) => {
                    for (let i = 1; i <= 8; i++) {
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
                const images = await axios.get('http://localhost:8000/get_images');
                const imagesrequirements = images.data.filter(req => req.id_reference == this.$route.params.detail_id8);
                console.log(imagesrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.imagesfile).forEach(key => {
                    this.imagesfile[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 8; i++) { //<------pila kabuok
                    const key = `file${i}`;
                    this.imagesfile[key] = [];
                }

                // Assign fetched files to uploadFiles
                imagesrequirements.forEach((req) => {
                    for (let i = 1; i <= 8; i++) {//<------pila kabuok
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
            formData.append('id_reference', this.$route.params.detail_id8);
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
            axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id8}`, formData)
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
            formData1.append('id_reference', this.$route.params.detail_id8);
            // console.log('id_reference', this.$route.params.detail_id8)

            for (let i = 1; i <= 8; i++) {
                formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
                // console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }
            // Append other input values here...

            // Make a POST request to update remarks
            axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id8}`, formData1)
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
            formData2.append('id_reference', this.$route.params.detail_id8);
            // console.log('id_reference', this.$route.params.detail_id8)

            for (let i = 1; i <= 8; i++) {
                formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
                // console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id8}`, formData2)
                .then(response => {
                    console.log('Recommendations updated successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error updating recommendations:', error);
                    // Handle error...
                });

            //ADD IMAGE/UPDATE //2nd
            // Add images
            const formData4 = new FormData();
            formData4.append('id_reference', this.$route.params.detail_id8);

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
            axios.post(`http://127.0.0.1:8000/update_images/${this.$route.params.detail_id8}`, formData4)
                .then(response => {
                    console.log('Images uploaded successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error uploading images:', error);
                });

            //dri    

            // Upload files 
            const formData3 = new FormData();
            formData3.append('id_reference', this.$route.params.detail_id8);

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
            axios.post(`http://127.0.0.1:8000/update_uploads/${this.$route.params.detail_id2}`, formData3)
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
.title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 120px;
}

.requirements {
    margin-top: 5px;
    text-align: center;
}

.titlehead {
    font-size: 15px;
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

.td6 {
    width: 200px;
    text-align: center;
}

.table2 td {
    border: 1px solid #dddddd;
    padding: 8px;
    width: 50%;
    /* Set each column to occupy 50% of the table width */
}

.select {
    text-align: center;
    padding: 10px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175)
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