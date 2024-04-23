<template>
    <div class="containers">
        <div class="buttonss">
            <button @click="downloadPDF">Download as PDF</button>
        </div>
    </div>
    <div class="a4container" id="pdf-content">
        <div ref="content" class="a4content">
            <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo">
            <p
                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 190px;">
                FACT SHEET / EVALUATION SHEET</p>
            <p
                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 250px;right: 160px;">
                I.&nbsp;&nbsp;&nbsp;APPLICATION DETAILS</p>
            <div>
                <table class="ftable">
                    <tbody class="fbody">
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                NAME OF APPLICANT:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">Jhon
                                Doe D. Doe</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                APPLICATION NUMBER:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                0001-2024</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                LOCATION:</td>
                            <td
                                style="width: auto; letter-spacing: 2px;font-size: 12px;font-weight: 600; text-align: center;padding-left: 15px;padding-right: 15px;">
                                Carmen, Cagayan de Oro City, Misamis Oriental</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                COMMODITY:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">N/A
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                AREA (HECTARES):</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">3.119
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700; ">
                                DATE FILED:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">Jhon
                                Doe D. Doe</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                OTHERS:</td>
                            <td
                                style="padding-left: 15px;padding-right: 15px;width: 400px; letter-spacing: 3px;font-size: 12px;font-weight: 600;text-align: center;">
                                Asperiores facere qui non alias. Unde consequuntur distinctio est sint. Rerum voluptatem
                                qui voluptates laborum.</td>
                        </tr>
                    </tbody>
                </table>

                <!-- other table -->

                <p
                    style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 50px;right: 160px;">
                    II.&nbsp;&nbsp;&nbsp;APPLICANT'S DETAILS</p>
                <table class="ftable" style="margin-top: 100px;">
                    <tbody class="fbody">
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                CATEGORY:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                COORPERATE</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                AUTHORIZED REPRESENTATIVE:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">john
                                doe D. doe</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                CONTACT NUMBER:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                09094251053</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                EMAIL ADDRESS:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                admin@admin.admin</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 30px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                OTHERS:</td>
                            <td
                                style="padding-left: 15px;padding-right: 15px;width: 350px; letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                Asperiores facere qui non alias. Unde consequuntur distinctio est sint. Rerum voluptatem
                                qui voluptates laborum.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Other Page -->

            <div ref="content" class="a4content">
                <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page2">
                <p
                    style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 350px;right: 160px;">
                    III.&nbsp;&nbsp;&nbsp;MANDATORY REQUIREMENTS</p>
                <div class="tbl-faxsheet">
                    <table class="tbl-faxsheet1">
                        <thead class="thead-faxsheet">
                            <tr style="text-align: center;">
                                <th class="th-fax2">Requirements</th>
                                <th class="th-fax2">Level of Compliance</th>
                                <th class="th-fax2">Upload</th>
                                <th class="th-fax2">Remarks / Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fax-details">
                                    1. Petition/ Proposal for Minahang Bayan</td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    2. Area Status <br>
                                    <br>
                                    MGB X (Status vis-avis the prior and existing mining rights and application, and
                                    areas closed to mining applications)<br>
                                    <br>
                                    NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the
                                    ICCs/Ips)<br>
                                    <br>
                                    DENR 10 (Area Status/Clearance)<br>
                                    <br>
                                    LGU (Province/City Government Concerned - Area Status/Clearance)
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    3. Proofs of Notice and Endorsement of the Sanggunian Concerned:<br>
                                    <br>
                                    &nbsp;&nbsp;Panlalawigan <br>
                                    <br>
                                    &nbsp;&nbsp;Bayan/Panlungsod <br>
                                    <br>
                                    &nbsp;&nbsp;Barangay
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page3">
                <div class="tbl-faxsheet">
                    <table class="tbl-faxsheet1">
                        <tbody>
                            <tr>
                                <td class="fax-details">
                                    4. MGB RO Evaluation Report re: <br>
                                    <br>
                                    Area viability for Small Scale Mining <br>
                                    <br>
                                    Allocation for Mineral Processing Zone (if applicable)
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    5. Proofs of Notice: <br>
                                    To mining tenement holder(s)
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    6. Proofs of Posting: <br>
                                    <br>
                                    MGB RO concerned <br>
                                    <br>
                                    Provincial Governor’s Office <br>
                                    <br>
                                    Mayor’s Office <br>
                                    <br>
                                    Barangay(s)
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    7. Proof of Publication
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    8. PMRB Certificate <br>
                                    <br>
                                    That there is no formal Protest filed
                                    or <br>
                                    <br>That the Favorable Decision has become final & executory
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consect
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div ref="content" class="a4content">
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page4">
                    <p
                        style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 280px;right: 260px;">
                        Other Requirements</p>
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet4">
                            <thead class="thead-faxsheet">
                                <tr style="text-align: center;">
                                    <th class="th-fax2">Requirements</th>
                                    <th class="th-fax2">Level of Compliance</th>
                                    <th class="th-fax2">Upload</th>
                                    <th class="th-fax2">Remarks / Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        1. Certificate Environmental Management and Community Relations Record (CEMCRR)
                                        or Certificate of Exemption from the CEMCRR ;</td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed
                                        and sealed by a licensed Mining Engineer or Geologist;
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS
                                        and other agencies concerned)<br>
                                        <br>
                                        &nbsp;&nbsp;Panlalawigan <br>
                                        <br>
                                        &nbsp;&nbsp;Bayan/Panlungsod <br>
                                        <br>
                                        &nbsp;&nbsp;Barangay
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        4. Secretary’s Certificate attesting to a Board Resolution regarding the
                                        authorization of the company’s authorized signatory;
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page5">
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet5">
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        5.Proof of publication, posting and radio announcement of the Notice of
                                        Application: <br>
                                        <br>
                                        &nbsp;&nbsp;5.1. Published once in: <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;a. Local newspaper <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;b. national newspaper <br>
                                        &nbsp;&nbsp;5.2. Posted for one (1) week on the bulletin boards of: <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;a. MGB Regional Office No. X <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;b. Province of Misamis Oriental <br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;c. City of Cagayan de Oro <br>
                                        &nbsp;&nbsp;5.3. radio announced daily for one (1) week in a Local radio program
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse
                                        claim/protest/opposition
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        7. NCIP Certification or proof of landownership, such as certified true copies
                                        of Original/Transfer Certificate of Title, among others.
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page6">
                    <p
                        style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 510px;right: 110px;">
                        IV.&nbsp;&nbsp;&nbsp;SUMMARY OF LACKING REQUIREMENTS</p>
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet6">
                            <thead class="thead-faxsheet">
                                <tr style="text-align: center;">
                                    <th class="th-fax2">Requirements</th>
                                    <th class="th-fax2">Level of Compliance</th>
                                    <th class="th-fax2">Upload</th>
                                    <th class="th-fax2">Remarks / Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        1. Petition/ Proposal for Minahang Bayan</td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        2. Area Status <br>
                                        <br>
                                        MGB X (Status vis-avis the prior and existing mining rights and application, and
                                        areas closed to mining applications)<br>
                                        <br>
                                        NCIP 10 (List of ICCs/IPs Legitimate Leaders and Conduct Consultation with the
                                        ICCs/Ips)<br>
                                        <br>
                                        DENR 10 (Area Status/Clearance)<br>
                                        <br>
                                        LGU (Province/City Government Concerned - Area Status/Clearance)
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        3. Proofs of Notice and Endorsement of the Sanggunian Concerned:<br>
                                        <br>
                                        &nbsp;&nbsp;Panlalawigan <br>
                                        <br>
                                        &nbsp;&nbsp;Bayan/Panlungsod <br>
                                        <br>
                                        &nbsp;&nbsp;Barangay
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page7">
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet7">
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        4. MGB RO Evaluation Report re: <br>
                                        <br>
                                        Area viability for Small Scale Mining <br>
                                        <br>
                                        Allocation for Mineral Processing Zone (if applicable)
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        5. Proofs of Notice: <br>
                                        To mining tenement holder(s)
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        6. Proofs of Posting: <br>
                                        <br>
                                        MGB RO concerned <br>
                                        <br>
                                        Provincial Governor’s Office <br>
                                        <br>
                                        Mayor’s Office <br>
                                        <br>
                                        Barangay(s)
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        7. Proof of Publication
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fax-details">
                                        8. PMRB Certificate <br>
                                        <br>
                                        That there is no formal Protest filed
                                        or <br>
                                        <br>That the Favorable Decision has become final & executory
                                    </td>
                                    <td class="fax-level">
                                        *Level</td>
                                    <td class="fax-upload">
                                        *Upload Requirements</td>
                                    <td class="fax-status">
                                        Remarks/Status:&nbsp;
                                        <br>
                                        <br>
                                        Lorem ipsum dolor sit amet consect
                                        <br>
                                        <br>
                                        Recommendation or Lacking Submission:
                                        <br>
                                        <span style="color: red;"> Lacking Submission </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page8">
                    <div class="tbl-faxsheet8">
                            <p
                                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 270px;right: 190px;">
                                V.&nbsp;&nbsp;STATUS OF THE APPLICATION</p>
                            <table class="tbl-faxsheet2">
                                <thead class="thead-faxsheet">
                                    <tr style="text-align:center;">
                                        <th class="th-fax2">Requirements</th>
                                        <th class="th-fax2">Upload</th>
                                        <th class="th-fax2">Remarks / Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="text-align: center; font-size: 15px; width: 270px;">
                                            Status: </td>
                                        <td style="text-align: center;width: 200px; font-size: 15px">
                                            *Upload Requirements</td>
                                        <td style="text-align: center; font-size: 15px; width: 260px;">
                                            Based on the Status of MTSR (dropdown)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p
                                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 20px;right: 125px;">
                                VI.&nbsp;&nbsp;OVERALL REMARKS/ RECOMMENDATIONS</p>
                            <table class="tbl-faxsheet9">
                                <thead class="thead-faxsheet">
                                    <tr style="text-align:center;">
                                        <th class="th-fax2">Requirements</th>
                                        <th class="th-fax2">Upload</th>
                                        <th class="th-fax2">Remarks / Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="text-align: center; font-size: 15px; width: 270px;">
                                            Status: </td>
                                        <td style="text-align: center;width: 200px; font-size: 15px">
                                            *Upload Requirements</td>
                                        <td style="text-align: center; font-size: 15px; width: 260px;">
                                            Based on the Status of MTSR (dropdown)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
    methods: {
        downloadPDF() {
            // Initialize jsPDF with A4 size
            const pdf = new jsPDF('p', 'mm', 'a4');

            // Get the HTML content
            const content = document.getElementById('pdf-content');

            // Add HTML content to PDF
            pdf.html(content, {
                // Set width and height of PDF to A4 size
                html2canvas: { scale: 0.26 }, // Adjust scale as needed to fit content
                x: 0,
                y: 0,
                callback: () => {
                    // Download the PDF file
                    pdf.save('FactSheet-MGBX.pdf');
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.containers {
    display: flex;
    justify-content: center;
    height: 100%;
}

.a4container {
    position: relative;
    width: 8.41in;
    height: 11.75in;
    margin: 0 auto;
    margin-top: 10px;
}

.a4content {
    /* Adjust this height based on your content */
    height: 11.6in;
    /* A4 height minus padding and border */
}

.a4photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page2 {
    position: absolute;
    bottom: -1100px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page3 {
    position: absolute;
    bottom: -2250px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page4 {
    position: absolute;
    bottom: -3400px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page5 {
    position: absolute;
    bottom: -4550px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page6 {
    position: absolute;
    bottom: -5700px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page7 {
    position: absolute;
    bottom: -6850px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page8 {
    position: absolute;
    bottom: -8000px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ftable {
    display: flex;
    justify-content: center;
    margin-top: 280px;
}

.fax-details {
    text-align: left;
    text-align: justify;
    font-size: 13px;
    font-weight: 400;
    width: 350px;
    letter-spacing: 2px;
}

.fax-level {
    text-align: center;
    font-size: 12px;
    width: 100px;
}

.fax-upload {
    text-align: left;
    font-size: 12px;
    width: 150px;
}

.fax-status {
    text-align: left;
    font-size: 13px;
    width: 300px;
    padding-right: 0;
}

.fbody td {
    padding: 4px;
    padding-bottom: 10px;
    border: 1px solid rgb(114, 114, 114);
    width: auto;
}

.tbl-faxsheet1 {
    margin-top: 360px;
    text-align: center;
}

.tbl-faxsheet2 {
    margin-top: 290px;
    text-align: center;
    margin-left: 35px;
}

.tbl-faxsheet3 {
    margin-top: 40px;
    text-align: center;
    margin-left: 35px;
}

.tbl-faxsheet4 {
    margin-top: 290px;
    text-align: center;
}

.tbl-faxsheet5 {
    margin-top: 350px;
    text-align: center;
}

.tbl-faxsheet6 {
    margin-top: 530px;
    text-align: center;
}

.tbl-faxsheet7 {
    margin-top: 320px;
    text-align: center;
}
.tbl-faxsheet8 {
    margin-top: 20px;
    text-align: center;
}
.tbl-faxsheet9 {
    margin-top: 30px;
    text-align: center;
    margin-left: 35px;
}

.thead-faxsheet {
    font-size: 15px;
}

.tbl-faxsheet {
    width: 90%;
    margin-left: 40px;
    text-align: left;
}

.th-fax2 {
    width: 110px;
}

.th-fax2,
td {
    border: 1px solid rgb(114, 114, 114);
    padding: 4px;
    padding-bottom: 10px;
    letter-spacing: 1px;
}

.td-faxsheet {
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    width: 600px;
}

.td1mand {
    text-align: left;
    width: 150px;
    padding-right: 10px;
    padding-left: 10px;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 500;
}

.td2mand {
    padding-left: 10px;
    padding-right: 10px;
    width: 50px;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
}

.td3mand {
    padding-left: 10px;
    padding-right: 10px;
    width: 100px;
    letter-spacing: 3px;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
}

.buttonss {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 20px;
    z-index: 9;
    background-color: aqua;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
}

.buttonss button {
    cursor: pointer;
}
</style>