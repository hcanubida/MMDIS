<template>
    <div>
        <headd />
    </div>

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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            1. Application Form (MGB Form No. 11-2)
                        </td>
                        <td>
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            2. Duly certified Articles of Incorporation/ Partnership/ Association, By-Laws,
                            and Certificate of Registration issued by the SEC or authorized Government agency concerned;
                        </td>
                        <td>
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
                            3. Location map/sketch plan of the area of the proposed processing plant using NAMRIA
                            (topographic map) in a scale of 1:50,000 </td>
                        <td>
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            4. <u>Feasibility Study</u> including work programs, plant site, mill and plant
                            lay-out/design,
                            details of technology to be employed in the proposed operation,
                            anti-pollution devices/ measures as well as the plant capacity of <br>
                            <u> Project Description </u> with detailed financial statement for its operations
                            incorporating
                            the social and environmental expenditures, taxes and fees paid. (MGB Form No. 5-3A);
                        </td>
                        <td>
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            5. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and
                            Community Relations Record (CEMCRR)
                        </td>
                        <td>
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

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            6. Environmental Compliance Certificate (ECC)
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file6" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput6 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput6 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            7. Proof of technical competence including, among others:<br>&nbsp;
                            <br>
                            * curricula vitae and track records in mineral processing and environmental management of
                            the
                            technical personnel who shall undertake the operation.<br>
                            <br>
                            * Sworn statement/ employment contract/ proof of availed services of the technical person/s
                            who
                            will undertake the implementation of the Work Programs
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file7" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput7 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput7 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            8. Proof of financial capability to undertake the activities pursuant to the Feasibility
                            Study
                            and EPEP, such as:<br>&nbsp;
                            <br>
                            a. Latest audited Financial Statement and/or Annual Report <br>
                            <br>
                            &nbsp;&nbsp;&nbsp;Credit Lines/Bank Guarantees and /or similar negotiable instruments.
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file8" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput8 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput8 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            9. Interim Importation Permit/Certification from EMB on the use of chemicals (e.g. cyanide,
                            mercury) in compliance with R.A. No. 6969
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file9" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput9 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput9 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            10. Brief history of applicant’s activities for the last five (5) years, if any
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file10" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput10 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput10 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            11. Supply Contract/Agreement with mining rights holders, if applicable
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file11" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput11 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput11 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            12. Other supporting papers as the Regional Director or the concerned may require or the
                            applicant may submit.<br>&nbsp;
                            <br>
                            &nbsp;&nbsp;12. 1 Environmental Protection and Enhancement Program (EPEP) <br>
                            <br>
                            &nbsp;&nbsp;12.2 Social Development Management Program (SDMP) <br>
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file12" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput12 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput12 }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!--other table-->

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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            1. Corporate Secretary’s Certificate attesting to a Board Resolution authorizing the
                            President
                            to sign and execute documents in connection with the MPP application
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file13" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput13 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput13 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            2. Payment of Evaluation Fee for the FS
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file14" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput14 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput14 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            3. Payment of Evaluation Fee for EPEP </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file15" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput15 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput15 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            4. Prior approval or endorsement in the form of Resolution or Certification by at least the
                            majority of the Sanggunian concerned
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file16" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput16 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput16 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            5. NCIP Certification or proof of land ownership, such as certified true copies of
                            Original/Transfer Certificate of Title, among others.
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file17" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput17 }}</p>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput17 }}</p>
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
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            1. Application Form (MGB Form No. 11-2)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput1 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            2. Duly certified Articles of Incorporation/ Partnership/ Association, By-Laws,
                            and Certificate of Registration issued by the SEC or authorized Government agency concerned;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput2 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            3. Location map/sketch plan of the area of the proposed processing plant using NAMRIA
                            (topographic map) in a scale of 1:50,000
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput3 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            4. <u>Feasibility Study</u> including work programs, plant site, mill and plant
                            lay-out/design,
                            details of technology to be employed in the proposed operation,
                            anti-pollution devices/ measures as well as the plant capacity of <br>
                            <u> Project Description </u> with detailed financial statement for its operations
                            incorporating
                            the social and environmental expenditures, taxes and fees paid. (MGB Form No. 5-3A);
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput4 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            5. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and
                            Community Relations Record (CEMCRR)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput5 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            6. Environmental Compliance Certificate (ECC)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput6 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            7. Proof of technical competence including, among others:<br>&nbsp;
                            <br>
                            * curricula vitae and track records in mineral processing and environmental management of
                            the
                            technical personnel who shall undertake the operation.<br>
                            <br>
                            * Sworn statement/ employment contract/ proof of availed services of the technical person/s
                            who
                            will undertake the implementation of the Work Programs
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput7 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            8. Proof of financial capability to undertake the activities pursuant to the Feasibility
                            Study
                            and EPEP, such as:<br>&nbsp;
                            <br>
                            a. Latest audited Financial Statement and/or Annual Report <br>
                            <br>
                            &nbsp;&nbsp;&nbsp;Credit Lines/Bank Guarantees and /or similar negotiable instruments.
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput8 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            9. Interim Importation Permit/Certification from EMB on the use of chemicals (e.g. cyanide,
                            mercury) in compliance with R.A. No. 6969
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput9 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            10. Brief history of applicant’s activities for the last five (5) years, if any
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput10 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            11. Supply Contract/Agreement with mining rights holders, if applicable
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput11 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            12. Other supporting papers as the Regional Director or the concerned may require or the
                            applicant may submit.<br>&nbsp;
                            <br>
                            &nbsp;&nbsp;12. 1 Environmental Protection and Enhancement Program (EPEP) <br>
                            <br>
                            &nbsp;&nbsp;12.2 Social Development Management Program (SDMP) <br>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput12 }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!--other table-->

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
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            1. Corporate Secretary’s Certificate attesting to a Board Resolution authorizing the
                            President
                            to sign and execute documents in connection with the MPP application
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput13 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            2. Payment of Evaluation Fee for the FS
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput14 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            3. Payment of Evaluation Fee for EPEP </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput15 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            4. Prior approval or endorsement in the form of Resolution or Certification by at least the
                            majority of the Sanggunian concerned
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput16 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: center; border: 1px solid black;">
                            5. NCIP Certification or proof of land ownership, such as certified true copies of
                            Original/Transfer Certificate of Title, among others.
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput17 }}</p>
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
                file5: [],
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: [],
                file1: [],
                file2: [],
                file3: [],
                file4: [],
                file5: [],
                file1: [],
                file2: []

            },
            remarks: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput1: '',
                textInput2: '',
            },
            recommendation: {
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput1: '',
                textInput2: '',
                textInput3: '',
                textInput4: '',
                textInput5: '',
                textInput1: '',
                textInput2: '',
            },

        };
    },
    methods: {
        async fetchDetails() {
            //Details applicants
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.filter(det => det.id == this.$route.params.detail_id5);
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Remarks details
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

            //MTSR details
            try {
                const mtsr = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const overallstatus = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id5));
                const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id5));
                this.mtsrvalue = filteredmtsr.mtsr
                this.overallvalue = filteredoverall.overallstatus
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Recommendation details
            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id5);
                // console.log(filteredrequirements)
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

            //details file uploads
            try {
                const uploads = await axios.get('http://localhost:8000/get_files');
                const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id5);
                // console.log(uploadsrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.uploadFiles).forEach(key => {
                    this.uploadFiles[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 17; i++) {
                    const key = `file${i}`;
                    this.uploadFiles[key] = [];
                }

                // Assign fetched files to uploadFiles
                uploadsrequirements.forEach((req) => {
                    for (let i = 1; i <= 17; i++) {
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
