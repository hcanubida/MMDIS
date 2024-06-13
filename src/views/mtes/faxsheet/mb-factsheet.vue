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
                            1. Petition/ Proposal
                            for Minahang Bayan
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            2. Area Status <br>&nbsp;
                            <br>&nbsp;
                            MGB X (Status vis-avis the prior and existing mining rights and application, and areas
                            closed to
                            mining applications) <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the
                            ICCs/Ips)<br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            DENR 10 (Area Status/Clearance)<br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            LGU (Province/City Government Concerned - Area Status/Clearance)
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
                            3. Proofs of Notice and Endorsement of the Sanggunian Concerned:<br>&nbsp;
                            <br>&nbsp;
                            Panlalawigan
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Bayan/Panlungsod
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Barangay
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ remarks.textInput3 }}</p>
                        </td>
                        <td>
                            <div v-for="(file, index) in uploadFiles.file3" :key="index" class="flex justify-start">
                                <p class="text-xs text-gray-600 ml-3 ">*{{ file }}</p>
                            </div>
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput3 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            4. MGB RO Evaluation Report re:<br>&nbsp;
                            <br>&nbsp;
                            Area viability for Small Scale Mining <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Allocation for Mineral Processing Zone (if applicable)
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            5. Proofs of Notice:<br>&nbsp;
                            <br>&nbsp;
                            To mining tenement holder(s)
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            6. Proofs of Posting:<br>&nbsp;
                            <br>&nbsp;
                            MGB RO concerned
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Provincial Governor’s Office
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Mayor’s Office
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Barangay(s)
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            7. Proof of Publication
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            8. PMRB Certificate
                            <br>&nbsp;
                            <br>&nbsp;
                            That there is no formal Protest filed<br>&nbsp;
                            or<br>&nbsp;
                            That the Favorable Decision has become final & executory
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            1. Certificate Environmental Management and Community Relations Record (CEMCRR) or
                            Certificate of
                            Exemption from the CEMCRR ;
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed and sealed by
                            a licensed
                            Mining Engineer or Geologist;
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS and other
                            agencies concerned)
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            4. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of
                            the company’s authorized signatory;
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

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            5.Proof of publication, posting and radio announcement of the Notice of Application:
                            <br>&nbsp;
                            5.1. Published once in:<br>&nbsp;
                            a. Local newspaper<br>&nbsp;
                            b. national newspaper <br>&nbsp;
                            5.2. Posted for one (1) week on the bulletin boards of:<br>&nbsp;
                            a. MGB Regional Office No. X<br>&nbsp;
                            b. Province of Misamis Oriental <br>&nbsp;
                            c. City of Cagayan de Oro <br>&nbsp;
                            5.3. radio announced daily for one (1) week in a Local radio program<br>&nbsp;
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse
                            claim/protest/opposition
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            7. NCIP Certification or proof of landownership, such as certified true copies of
                            Original/Transfer Certificate of Title, among others.
                        </td>
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
                            1. Petition/ Proposal
                            for Minahang Bayan
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput1 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            2. Area Status <br>&nbsp;
                            <br>&nbsp;
                            MGB X (Status vis-avis the prior and existing mining rights and application, and areas
                            closed to
                            mining applications) <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the
                            ICCs/Ips)<br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            DENR 10 (Area Status/Clearance)<br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            LGU (Province/City Government Concerned - Area Status/Clearance)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput2 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            3. Proofs of Notice and Endorsement of the Sanggunian Concerned:<br>&nbsp;
                            <br>&nbsp;
                            Panlalawigan
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Bayan/Panlungsod
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Barangay
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput3 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            4. MGB RO Evaluation Report re:<br>&nbsp;
                            <br>&nbsp;
                            Area viability for Small Scale Mining <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Allocation for Mineral Processing Zone (if applicable)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput4 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            5. Proofs of Notice:<br>&nbsp;
                            <br>&nbsp;
                            To mining tenement holder(s)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput5 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            6. Proofs of Posting:<br>&nbsp;
                            <br>&nbsp;
                            MGB RO concerned
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Provincial Governor’s Office
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Mayor’s Office
                            <br>&nbsp;
                            <br>&nbsp;
                            <br>&nbsp;
                            Barangay(s)
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput6 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            7. Proof of Publication
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput7 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            8. PMRB Certificate
                            <br>&nbsp;
                            <br>&nbsp;
                            That there is no formal Protest filed<br>&nbsp;
                            or<br>&nbsp;
                            That the Favorable Decision has become final & executory
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput8 }}</p>
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
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            1. Certificate Environmental Management and Community Relations Record (CEMCRR) or
                            Certificate of
                            Exemption from the CEMCRR ;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput9 }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed and sealed by
                            a licensed Mining Engineer or Geologist;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput10 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS and other
                            agencies concerned) </td>
                            <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput11 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            4. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of
                            the company’s authorized signatory;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput12 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            5.Proof of publication, posting and radio announcement of the Notice of Application:
                            <br>&nbsp;
                            5.1. Published once in:<br>&nbsp;
                            a. Local newspaper<br>&nbsp;
                            b. national newspaper <br>&nbsp;
                            5.2. Posted for one (1) week on the bulletin boards of:<br>&nbsp;
                            a. MGB Regional Office No. X<br>&nbsp;
                            b. Province of Misamis Oriental <br>&nbsp;
                            c. City of Cagayan de Oro <br>&nbsp;
                            5.3. radio announced daily for one (1) week in a Local radio program<br>&nbsp;
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput13 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse
                            claim/protest/opposition
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput14 }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td
                            style="padding: 10px; letter-spacing: 3px; font-size: 12px; font-weight: 600; text-align: left; border: 1px solid black;">
                            7. NCIP Certification or proof of landownership, such as certified true copies of
                            Original/Transfer Certificate of Title, among others.
                        </td>
                        <td
                            style="padding: 10px; letter-spacing: 0px; font-size: 12px; font-weight: 600; text-align: justify; border: 1px solid black;">
                            <p>{{ recommendation.textInput15 }}</p>
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

<script setup>
import headd from '../../../components/MTES/header.vue'

</script>


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
                file6: [],
                file7: [],
                file8: [],
                file9: [],
                file10: [],
                file11: [],
                file12: [],
                file13: [],
                file14: [],
                file15: []
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
            },

        };
    },
    methods: {
        async fetchDetails() {
            //Details applicants
            try {
                const response = await axios.get('http://127.0.0.1:8000/get_details/');
                this.details = response.data.filter(det => det.id == this.$route.params.detail_id4);
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Remarks details
            try {
                const remarks = await axios.get('http://localhost:8000/get_remarks');
                const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id4);

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

            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //MTSR details
            try {
                const mtsr = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const overallstatus = await axios.get('http://127.0.0.1:8000/get_mtsrstatus');
                const filteredmtsr = mtsr.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id4));
                const filteredoverall = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id4));
                this.mtsrvalue = filteredmtsr.mtsr
                this.overallvalue = filteredoverall.overallstatus
            } catch (error) {
                console.error('Error fetching details:', error);
            }

            //Recommendation details
            try {
                const requirements = await axios.get('http://localhost:8000/get_recommendation');
                const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id);
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

            } catch (error) {
                console.error('Error fetching reco details:', error);
            }

            //details file uploads
            try {
                const uploads = await axios.get('http://localhost:8000/get_files');
                const uploadsrequirements = uploads.data.filter(req => req.id_reference == this.$route.params.detail_id4);
                // console.log(uploadsrequirements);

                // Clear existing files to avoid duplicates
                Object.keys(this.uploadFiles).forEach(key => {
                    this.uploadFiles[key] = [];
                });

                // Initialize uploadFiles object for file1 to file5
                for (let i = 1; i <= 15; i++) {
                    const key = `file${i}`;
                    this.uploadFiles[key] = [];
                }

                // Assign fetched files to uploadFiles
                uploadsrequirements.forEach((req) => {
                    for (let i = 1; i <= 15; i++) {
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
