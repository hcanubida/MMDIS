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
                    <th>Upload</th>
                    <th>Remarks / Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="reqData">
                        1. Small-Scale Miner’s License
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                to upload:</label>
                            <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                ref="fileInput"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                        </div>
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" v-model="remarks.textInput1"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput1"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        2. Duly accomplished and notarized application form (Form No. SSM-01)
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                to upload:</label>
                            <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                ref="fileInput"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                        </div>
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" v-model="remarks.textInput2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput2"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. Application Fee of PhP10,000 to the Province/City Concerned
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                to upload:</label>
                            <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                ref="fileInput"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" v-model="remarks.textInput3"></textarea>
                        <label>Recommendation:</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput3"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        4. For individual:
                        Certified Photocopy of DTI Registration <br> &nbsp;
                        For association/Cooperative:
                        Securities and Exchange Commission or other Concerned Agency(ies)-Certified True Copy of the
                        Certificate of Registration, Articles of Incorporation/Association, and By-Laws or Certification
                        from MGB or MGB RO that said documents are duly registered in that Office
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                to upload:</label>
                            <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                ref="fileInput"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" v-model="remarks.textInput4"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput4"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        5. Location map/sketch plan of the SSMC Applied Area showing geographic coordinates, major
                        environmental features, and other projects using NAMRIA topographic map in a scale of 1:10,000
                        duly prepared signed sealed by a Deputized Geodetic Engineer
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                to upload:</label>
                            <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                ref="fileInput"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" v-model="remarks.textInput5"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput5"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        6. Proposed Two-Year Work Program (Form No. SSM-02)
                    </td>

                    <td class="inputimg">
                        <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                            <label
                                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                to upload:</label>
                            <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                ref="fileInput"
                                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                        </div>
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" v-model="remarks.textInput6"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;" v-model="recommendation.textInput6"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Other Table -->

        <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h2>

        <div class="requirements">
            <table class="table1">
                <thead class="tablehead">
                    <tr>
                        <th>Requirements</th>
                        <th>Upload</th>
                        <th>Remarks / Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="reqData">
                            1. NCIP Certification (Certificate of Non-Overlap or Certification Precondition) or the
                            NCIP’s Field-Based Investigation Report/Validation Report
                        </td>

                        <td class="inputimg">
                            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                                <label
                                    class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                    to upload:</label>
                                <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                    ref="fileInput"
                                    class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            </div>
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" v-model="remarks.textInput7"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;" v-model="recommendation.textInput7"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="reqData">
                            2. Environmental Compliance Certificate
                        </td>

                        <td class="inputimg">
                            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                                <label
                                    class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                    to upload:</label>
                                <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                    ref="fileInput"
                                    class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            </div>
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" v-model="remarks.textInput8"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;" v-model="recommendation.textInput8"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            3. Potential Environmental Impact Management Plan (PEIMP) Form No. SSM-03
                        </td>

                        <td class="inputimg">
                            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                                <label
                                    class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                    to upload:</label>
                                <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                    ref="fileInput"
                                    class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            </div>
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" v-model="remarks.textInput9"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;" v-model="recommendation.textInput9"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            4. Community Development Management Plan (CDMP) Form No. SSM-04
                        </td>

                        <td class="inputimg">
                            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                                <label
                                    class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                    to upload:</label>
                                <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                    ref="fileInput"
                                    class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            </div>
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" v-model="remarks.textInput10"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;" v-model="recommendation.textInput10"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            5.Annual Safety and Health Program (ASHP) Form No. SSM-05
                        </td>

                        <td class="inputimg">
                            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                                <label
                                    class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                                    to upload:</label>
                                <input type="file" multiple accept="application/*" @change="handleFileUpload"
                                    ref="fileInput"
                                    class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
                            </div>
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" v-model="remarks.textInput11"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;" v-model="recommendation.textInput11"></textarea>
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
                    <p style="text-align: left;font-size: 20px;font-weight: 600;">Other Lacking Requirements</p>
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
                </tbody>
            </table>
        </div>
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
            <tbody>
                <td style="text-align: center;font-size: 20px;padding: 20px;">Overall Remarks/Status/Reccomendation</td>
                <td style="font-size: 15px;padding: 20px;">Remarks/Status
                    <textarea
                        style=" border: 1px solid #ccc; border-radius: 4px; width: 100% ;height: 100px;"></textarea>

                </td>

            </tbody>
            </thead>
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

</script>

<script>
export default {
    data() {
        return {
            selectedStatus: '',
            otherStatus: '',
            requirements: {
                reqDetails1: `
                1. Small-Scale Miner’s License`,
                reqDetails2: `
                2. Duly accomplished and notarized application form (Form No. SSM-01)`,
                reqDetails3: `
                3. Application Fee of PhP10,000 to the Province/City Concerned`,
                reqDetails4: `
                4. For individual: Certified Photocopy of DTI Registration
                For association/Cooperative: Securities and Exchange Commission or other Concerned 
                Agency(ies)-Certified True Copy of the Certificate of Registration, Articles of Incorporation/Association, and By-Laws or Certification from MGB or MGB RO that said documents are duly registered in that Office`,
                reqDetails5: `
                5. Location map/sketch plan of the SSMC Applied 
                Area showing geographic coordinates, major environmental features, 
                and other projects using NAMRIA topographic map in a scale of 1:10,000 duly prepared signed sealed by a Deputized Geodetic Engineer`,
                reqDetails6: `
                6. Proposed Two-Year Work Program (Form No. SSM-02)`,
                reqDetails7: `
                1. NCIP Certification (Certificate of Non-Overlap or Certification Precondition)
                 or the NCIP’s Field-Based Investigation Report/Validation Report`,
                reqDetails8: `
                2. Environmental Compliance Certificate`,
                reqDetails9: `
                3. Potential Environmental Impact Management Plan (PEIMP) Form No. SSM-03`,
                reqDetails10: `
                4. Community Development Management Plan (CDMP) Form No. SSM-04`,
                reqDetails11: `
                5.Annual Safety and Health Program (ASHP) Form No. SSM-05`,
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
            },
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
        async getDetails() {
            try {
                const remarks = await axios.get('http://localhost:8000/get_remarks');
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id7);

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

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id7);

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
        }, update() {
            const formData = new FormData();
            formData.append('id_reference', this.$route.params.detail_id7);
            // Append category based on selectedCategory
            if (this.selectedStatus === 'other') {
                // Append otherCategory if selectedCategory is 'others'
                formData.append('mtsr', this.otherStatus);
            } else {
                // Append selectedCategory directly otherwise
                formData.append('mtsr', this.selectedStatus);
            }
            // Make axios POST request
            axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id7}`, formData)
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
            formData1.append('id_reference', this.$route.params.detail_id7);
            console.log('id_reference', this.$route.params.detail_id7)

            for (let i = 1; i <= 11; i++) {
                formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }
            // Append other input values here...

            // Make a POST request to update remarks
            axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id7}`, formData1)
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
            formData2.append('id_reference', this.$route.params.detail_id7);
            console.log('id_reference', this.$route.params.detail_id7)

            for (let i = 1; i <= 11; i++) {
                formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
                console.log(`input${i}`, this.recommendation[`textInput${i}`])
            }

            // Append other input values here...

            // Make a POST request to update recommendations
            axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id7}`, formData2)
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
.title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 130px;
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