<template>
    <div class="containers">
        <div class="buttonss">
            <button @click="downloadPDF">Download as PDF</button>
        </div>
    </div>
    <div class="foliocontainer" id="pdf-content">
        <div ref="content" class="foliocontent">
            <img src="../../../assets/MTES/body.jpg" alt="folio-sized photo" class="foliophoto">
            <p
                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 210px;">
                FACT SHEET / EVALUATION SHEET</p>
            <p
                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 250px;right: 160px;">
                I.&nbsp;&nbsp;&nbsp;APPLICATION DETAILS</p>
            <div>
                <table class="ftable">
                    <tbody class="fbody">
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                NAME OF APPLICANT:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">Jhon
                                Doe D. Doe</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                APPLICATION NUMBER:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                0001-2024</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                LOCATION:</td>
                            <td
                                style="width: auto; letter-spacing: 2px;font-size: 12px;font-weight: 600; text-align: center;padding-left: 15px;padding-right: 15px;">
                                Carmen, Cagayan de Oro City, Misamis Oriental</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                COMMODITY:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">N/A
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                AREA (HECTARES):</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">3.119
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700; ">
                                DATE FILED:</td>
                            <td style=" letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">Jhon
                                Doe D. Doe</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                OTHERS:</td>
                            <td
                                style="padding-left: 15px;padding-right: 15px;width: 400px; letter-spacing: 3px;font-size: 12px;font-weight: 600;text-align: center;">
                                Asperiores facere qui non alias. Unde consequuntur distinctio est sint. Rerum voluptatem
                                qui voluptates laborum.</td>
                        </tr>
                    </tbody>
                </table>
                <p
                    style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 50px;right: 160px;">
                    II.&nbsp;&nbsp;&nbsp;APPLICANT'S DETAILS</p>
                <table class="ftable" style="margin-top: 100px;">
                    <tbody class="fbody">
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                CATEGORY:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                COORPERATE</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                AUTHORIZED REPRESENTATIVE:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">john
                                doe D. doe</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                CONTACT NUMBER:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                09094251053</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                EMAIL ADDRESS:</td>
                            <td style="letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                admin@admin.admin</td>
                        </tr>
                        <tr>
                            <td
                                style="padding-right: 10px;padding-left: 10px; letter-spacing: 3px;font-size: 12px;font-weight: 700;">
                                OTHERS:</td>
                            <td
                                style="padding-left: 15px;padding-right: 15px;width: 350px; letter-spacing: 3px;font-size: 12px;font-weight: 600; text-align: center;">
                                Asperiores facere qui non alias. Unde consequuntur distinctio est sint. Rerum voluptatem
                                qui voluptates laborum.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div ref="content" class="a4content">
                <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page1">
                <p
                    style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 520px;right: 160px;">
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
                                    1. Application Form/Letter Intent</td>
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
                                    2. Location map/sketch plan of the proposed processing plant using NAMRIA
                                    topographic map in a scale of 1:50,000 or 1:10,000
                                </td>
                                <td class="fax-level">
                                    *Level</td>
                                <td class="fax-upload">
                                    *Upload Requirements</td>
                                <td class="fax-status">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr>
                                <td class="fax-details">
                                    3. Project Description and plant layout/design including cost of project duly
                                    prepared and signed by a Licensed Metallurgical Engineer</td>
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
                                    4. Small-Scale Miners License of the duly authorized representative</td>
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
                                    5. Proof of Technical Competence</td>
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
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page2">
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet2">
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        6. Proof of Financial Capability such as Latest Audited Financial Statement,
                                        Annual Report for the Preceding Year, and Credit Line/s and/proof of bank
                                        deposit/s, in the amount that shall not be less than the cost of project</td>
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
                                        7. Supply Contract/Agreement with the Small-Scale Mining Contractor/s or MPL
                                        Holder/s</td>
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
                                        8. For individual: Certified Photocopy of DTI Registration <br>
                                        <br>
                                        For Association/Cooperative: Securities and Exchange Commission or other
                                        Concerned Agency(ies)-Certified True Copy of the Certificate of Registration,
                                        Articles of Incorporation/Association, and By-Laws or Certification from MGB or
                                        MGB RO that said documents are duly registered in that Office, with a minimum
                                        authorized capital of PhP10,000,000 and not to exceed PhP200,000,000
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
                        <p
                            style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 25px;right: 130px;">
                            IV.&nbsp;&nbsp;&nbsp;SUMMARY OF LACKING REQUIREMENTS</p>
                        <table class="tbl-faxsheet3">
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        1. Application Form/Letter Intent</td>
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
                </div>
                <div ref="content" class="a4content">
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page3">
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet4">
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        1. Application Form/Letter Intent</td>
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
                                        2. Location map/sketch plan of the proposed processing plant using NAMRIA
                                        topographic map in a scale of 1:50,000 or 1:10,000</td>
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
                                        3. Project Description and plant layout/design including cost of project duly
                                        prepared and signed by a Licensed Metallurgical Engineer</td>
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
                                        4. Small-Scale Miners License of the duly authorized representative </td>
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
                                        5. Proof of Technical Competence <br>
                                        To mining tenement holder(s)</td>
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
                </div>
                <div ref="content" class="a4content">
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page4">
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet5">
                            <tbody>
                                <tr>
                                    <td class="fax-details">
                                        6. Proof of Financial Capability such as Latest Audited Financial Statement,
                                        Annual Report for the Preceding Year, and Credit Line/s and/proof of bank
                                        deposit/s, in the amount that shall not be less than the cost of project</td>
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
                                        7. Supply Contract/Agreement with the Small-Scale Mining Contractor/s or MPL
                                        Holder/s</td>
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
                                        8. For individual: Certified Photocopy of DTI Registration <br>
                                        <br>
                                        For Association/Cooperative: Securities and Exchange Commission or other
                                        Concerned Agency(ies)-Certified True Copy of the Certificate of Registration,
                                        Articles of Incorporation/Association, and By-Laws or Certification from MGB or
                                        MGB RO that said documents are duly registered in that Office, with a minimum
                                        authorized capital of PhP10,000,000 and not to exceed PhP200,000,000
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
                </div>
                <div ref="content" class="a4content">
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page5">
                    <div class="tbl-faxsheet">
                        <p
                            style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 640px;right: 190px;">
                            V.&nbsp;&nbsp;STATUS OF THE APPLICATION</p>
                        <table class="tbl-faxsheet6">
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
                            style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 35px;right: 125px;">
                            VI.&nbsp;&nbsp;OVERALL REMARKS/ RECOMMENDATIONS</p>
                        <table class="tbl-faxsheet7">
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
            // Initialize jsPDF with folio size in inches
            const pdf = new jsPDF('p', 'mm', [215.9, 330.2]); // Custom dimensions [width, height] in inches

            // Get the HTML content
            const content = document.getElementById('pdf-content');

            // Add HTML content to PDF
            pdf.html(content, {
                // Set width and height of PDF to match the folio size
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

.foliocontainer {
    position: relative;
    width: 8.5in;
    height: 13in;
    margin: 0 auto;
    margin-top: 10px;
}

.foliocontent {
    /* Adjust this height based on your content */
    height: 13in;
    /* A4 height minus padding and border */
}

.foliophoto {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.foliophoto-page2 {
    position: absolute;
    bottom: -1100px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page1 {
    position: absolute;
    bottom: -1240px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page2 {
    position: absolute;
    bottom: -2510px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page3 {
    position: absolute;
    bottom: -3780px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page4 {
    position: absolute;
    bottom: -5050px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page5 {
    position: absolute;
    bottom: -6310px;
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
    width: 200px;
    padding-right: 0;
}

.fbody td {
    padding: 4px;
    padding-bottom: 10px;
    border: 1px solid rgb(37, 37, 37);
    width: auto;
}

.tbl-faxsheet1 {
    margin-top: 540px;
    text-align: center;
}

.tbl-faxsheet2 {
    margin-top: 310px;
    text-align: center;
}

.tbl-faxsheet3 {
    margin-top: 50px;
    text-align: center;
}

.tbl-faxsheet4 {
    margin-top: 420px;
    text-align: center;
}

.tbl-faxsheet5 {
    margin-top: 420px;
    text-align: center;
}

.tbl-faxsheet6 {
    margin-top: 660px;
    text-align: center;
    margin-left: 20px;
}

.tbl-faxsheet7 {
    margin-top: 70px;
    text-align: center;
    margin-left: 20px;
}

.thead-faxsheet {
    font-size: 15px;
}

.tbl-faxsheet {
    width: 95%;
    margin-left: 20px;
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