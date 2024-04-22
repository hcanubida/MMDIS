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
                                <th class="th-fax2">Upload</th>
                                <th class="th-fax2">Remarks / Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="fax-details2">
                                    1. Application Form (MGB Form No. 8-1), notarized;</td>
                                <td class="fax-upload2">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
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
                                <td class="fax-details2">
                                    2. Payment of Filing and Processing Fees</td>
                                <td class="fax-upload2">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
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
                                <td class="fax-details2">
                                    3. Duly Certified Articles of Incorporation/ Partnership/Association, By-Laws and
                                    Certificate of Registration duly certified by SEC or authorized Gov’t. agencies
                                    concerned, for corporations, partnership, associations or cooperatives; or proof of
                                    Filipino citizenship for individual;</td>
                                <td class="fax-upload2">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
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
                                <td class="fax-details2">
                                    4. Location Map/Sketch Plan of the proposed permit area showing its geographic
                                    coordinates/meridional block(s) and boundaries in relation to major environmental
                                    features and other projects using NAMRIA topographic map in a scale of 1:50,000 duly
                                    prepared, signed and sealed by a deputized Geodetic Engineer</td>
                                <td class="fax-upload2">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
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
                                <td class="fax-details2">
                                    5. Area clearance from the Government agencies/LGUs concerned that may be affected
                                    by the permit application or written permission from the landowner(s) and surface
                                    owner(s) of the area applied for</td>
                                <td class="fax-upload2">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
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
                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page3">
                    <div class="tbl-faxsheet">
                        <table class="tbl-faxsheet2">
                            <tbody>
                                <tr>
                                    <td class="fax-details2">
                                        6. Five (5) -Year Development/ Utilization Work Program (MGB Form No. 6-2), duly
                                        prepared, signed and sealed by a licensed Mining Engineer or Geologist</td>
                                    <td class="fax-upload2">
                                        *Upload Requirements</td>
                                    <td class="fax-status2">
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
                                    <td class="fax-details2">
                                        7. An application (MGB Form No. 16-04) for or a Certificate of Environmental
                                        Management and Community Relations Record (CEMCRR)</td>
                                    <td class="fax-upload2">
                                        *Upload Requirements</td>
                                    <td class="fax-status2">
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
                                    <td class="fax-details2">
                                        8. Environmental Compliance Certificate</td>
                                    <td class="fax-upload2">
                                        *Upload Requirements</td>
                                    <td class="fax-status2">
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
                                    <td class="fax-details2">
                                        9. Integrated Environmental Protection and Enhancement Program and Final Mine
                                        Rehabilitation and/or Decommissioning Plan</td>
                                    <td class="fax-upload2">
                                        *Upload Requirements</td>
                                    <td class="fax-status2">
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
                                    <td class="fax-details2">
                                        10. Proof of technical competence including, among others:<br>
                                        <br>
                                        Curricula Vitae and track records in mining operations and environmental
                                        management of the technical personnel who shall undertake the activities in
                                        accordance with the submitted Work Program and EPEP.<br>
                                        <br>
                                        Sworn commitment/ employment contract/proof of availed services of the technical
                                        person(s) who will implement the Work Program
                                    </td>
                                    <td class="fax-upload2">
                                        *Upload Requirements</td>
                                    <td class="fax-status2">
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
                        <div class="tbl-faxsheet">
                            <table class="tbl-faxsheet2">
                                <tbody>
                                    <tr>
                                        <td class="fax-details2">
                                            11. Proof of financial capability to undertake the activities pursuant to WP
                                            and EPEP, such as the following: <br>
                                            <br>
                                            For Corporation:<br>
                                            Latest audited Financial Statement and/or Annual Report
                                            Credit Lines/Bank Guarantees and/ or similar negotiable instruments; and
                                            <br>
                                            <br>
                                            For Individual <br>
                                            Sworn statement of assets and liabilities
                                            Proof of Bank deposit or credit line Income tax return for the preceding
                                            three years
                                        </td>
                                        <td class="fax-upload2">
                                            *Upload Requirements</td>
                                        <td class="fax-status2">
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
                                        <td class="fax-details2">
                                            12. Social Development and Management Program</td>
                                        <td class="fax-upload2">
                                            *Upload Requirements</td>
                                        <td class="fax-status2">
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
                                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 10px;right: 130px;">
                                IV.&nbsp;&nbsp;&nbsp;SUMMARY OF LACKING REQUIREMENTS</p>
                            <div class="tbl-faxsheet">
                                <table class="tbl-faxsheet3">
                                    <tbody>
                                        <tr>
                                            <td class="fax-details2">
                                                1. Application Form (MGB Form No. 8-1), notarized;
                                            </td>
                                            <td class="fax-upload2">
                                                *Upload Requirements</td>
                                            <td class="fax-status2">
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
                                            <td class="fax-details2">
                                                2. Payment of Filing and Processing Fees
                                            </td>
                                            <td class="fax-upload2">
                                                *Upload Requirements</td>
                                            <td class="fax-status2">
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
                                <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo" class="a4photo-page5">
                                <div class="tbl-faxsheet">
                                    <table class="tbl-faxsheet4">
                                        <tbody>
                                            <tr>
                                                <td class="fax-details2">
                                                    3. Duly Certified Articles of Incorporation/
                                                    Partnership/Association, By-Laws and Certificate of Registration
                                                    duly certified by SEC or authorized Gov’t. agencies concerned, for
                                                    corporations, partnership, associations or cooperatives; or proof of
                                                    Filipino citizenship for individual;
                                                </td>
                                                <td class="fax-upload2">
                                                    *Upload Requirements</td>
                                                <td class="fax-status2">
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
                                                <td class="fax-details2">
                                                    4. Location Map/Sketch Plan of the proposed permit area showing its
                                                    geographic coordinates/meridional block(s) and boundaries in
                                                    relation to major environmental features and other projects using
                                                    NAMRIA topographic map in a scale of 1:50,000 duly prepared, signed
                                                    and sealed by a deputized Geodetic Engineer
                                                </td>
                                                <td class="fax-upload2">
                                                    *Upload Requirements</td>
                                                <td class="fax-status2">
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
                                                <td class="fax-details2">
                                                    5. Area clearance from the Government agencies/LGUs concerned that
                                                    may be affected by the permit application or written permission from
                                                    the landowner(s) and surface owner(s) of the area applied for
                                                </td>
                                                <td class="fax-upload2">
                                                    *Upload Requirements</td>
                                                <td class="fax-status2">
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
                                                <td class="fax-details2">
                                                    6. Five (5) -Year Development/ Utilization Work Program (MGB Form
                                                    No. 6-2), duly prepared, signed and sealed by a licensed Mining
                                                    Engineer or Geologist
                                                </td>
                                                <td class="fax-upload2">
                                                    *Upload Requirements</td>
                                                <td class="fax-status2">
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
                                                <td class="fax-details2">
                                                    7. An application (MGB Form No. 16-04) for or a Certificate of
                                                    Environmental Management and Community Relations Record (CEMCRR)
                                                </td>
                                                <td class="fax-upload2">
                                                    *Upload Requirements</td>
                                                <td class="fax-status2">
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
                                    <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo"
                                        class="a4photo-page6">
                                    <div class="tbl-faxsheet">
                                        <table class="tbl-faxsheet4">
                                            <tbody>
                                                <tr>
                                                    <td class="fax-details2">
                                                        8. Environmental Compliance Certificate
                                                    </td>
                                                    <td class="fax-upload2">
                                                        *Upload Requirements</td>
                                                    <td class="fax-status2">
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
                                                    <td class="fax-details2">
                                                        9. Integrated Environmental Protection and Enhancement Program
                                                        and Final Mine Rehabilitation and/or Decommissioning Plan
                                                    </td>
                                                    <td class="fax-upload2">
                                                        *Upload Requirements</td>
                                                    <td class="fax-status2">
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
                                                    <td class="fax-details2">
                                                        10. Proof of technical competence including, among others:<br>
                                                        <br>
                                                        Curricula Vitae and track records in mining operations and
                                                        environmental
                                                        management of the technical personnel who shall undertake the
                                                        activities in
                                                        accordance with the submitted Work Program and EPEP.<br>
                                                        <br>
                                                        Sworn commitment/ employment contract/proof of availed services
                                                        of the technical
                                                        person(s) who will implement the Work Program
                                                    </td>
                                                    <td class="fax-upload2">
                                                        *Upload Requirements</td>
                                                    <td class="fax-status2">
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
                                                    <td class="fax-details2">
                                                        11. Proof of financial capability to undertake the activities
                                                        pursuant to WP
                                                        and EPEP, such as the following: <br>
                                                        <br>
                                                        For Corporation:<br>
                                                        Latest audited Financial Statement and/or Annual Report
                                                        Credit Lines/Bank Guarantees and/ or similar negotiable
                                                        instruments; and
                                                        <br>
                                                        <br>
                                                        For Individual <br>
                                                        Sworn statement of assets and liabilities
                                                        Proof of Bank deposit or credit line Income tax return for the
                                                        preceding
                                                        three years
                                                    </td>
                                                    <td class="fax-upload2">
                                                        *Upload Requirements</td>
                                                    <td class="fax-status2">
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
                                        <img src="../../../assets//MTES//hnf.jpg" alt="A4-sized photo"
                                            class="a4photo-page7">
                                        <div class="tbl-faxsheet">
                                            <table class="tbl-faxsheet5">
                                                <tbody>
                                                    <tr>
                                                        <td class="fax-details2">
                                                            12. Social Development and Management Program
                                                        </td>
                                                        <td class="fax-upload2">
                                                            *Upload Requirements</td>
                                                        <td class="fax-status2">
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
                                                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 20px;right: 190px;">
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
                                                style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 20px;right: 125px;">
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
    bottom: -2240px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page4 {
    position: absolute;
    bottom: -3380px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page5 {
    position: absolute;
    bottom: -4520px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page6 {
    position: absolute;
    bottom: -5665px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.a4photo-page7 {
    position: absolute;
    bottom: -6795px;
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

.fax-details2 {
    text-align: left;
    text-align: justify;
    font-size: 13px;
    font-weight: 400;
    width: 320px;
    letter-spacing: 2px;
}

.fax-upload2 {
    text-align: left;
    font-size: 12px;
    width: 150px;
}

.fax-status2 {
    text-align: left;
    font-size: 13px;
    width: 270px;
    padding-right: 0;
}

.fbody td {
    padding: 4px;
    padding-bottom: 10px;
    border: 1px solid rgb(114, 114, 114);
    width: auto;
}

.tbl-faxsheet {
    width: 95%;
    margin-left: 30px;
    text-align: left;
}

.tbl-faxsheet1 {
    margin-top: 360px;
    text-align: center;
}

.tbl-faxsheet2 {
    margin-top: 320px;
    text-align: center;
}

.tbl-faxsheet3 {
    margin-top: 20px;
    text-align: center;
    margin-left: -30px
}

.tbl-faxsheet4 {
    margin-top: 20px;
    text-align: center;
    margin-left: -30px
}

.tbl-faxsheet4 {
    margin-top: 380px;
    text-align: center;
    margin-left: -30px
}

.tbl-faxsheet5 {
    margin-top: 280px;
    text-align: center;
    margin-left: -30px
}
.tbl-faxsheet6 {
    margin-top: 40px;
    text-align: center;
    margin-left: -30px
}
.tbl-faxsheet7 {
    margin-top: 40px;
    text-align: center;
    margin-left: -30px
}

.thead-faxsheet {
    font-size: 15px;
}

.th-fax,
td {
    border: 1px solid rgb(114, 114, 114);
    padding: 4px;
    padding-bottom: 10px;
    text-align: center;
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