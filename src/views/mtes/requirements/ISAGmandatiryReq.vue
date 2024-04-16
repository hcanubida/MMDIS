<template>
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
                        1. Application Form (MGB Form No. 8-1)
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        2. Payment of Filing and Processing Fees
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        3. Duly Certified Articles of Incorporation/ Partnership/Association, By-Laws and Certificate of
                        Registration duly certified by SEC or authorized Gov’t. agencies concerned, for corporations,
                        partnership, associations or cooperatives; or proof of Filipino citizenship for individual;
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation:</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        4. Location Map/Sketch Plan of the proposed permit area showing its geographic
                        coordinates/meridional block(s) and boundaries in relation to major environmental features and
                        other projects using NAMRIA topographic map in a scale of 1:50,000 duly prepared, signed and
                        sealed by a deputized Geodetic Engineer
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        5. Area clearance from the Government agencies/LGUs concerned that may be affected by the permit
                        application or written permission from the landowner(s) and surface owner(s) of the area applied
                        for
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        6. Five (5) -Year Development/ Utilization Work Program (MGB Form No. 6-2), duly prepared,
                        signed and sealed by a licensed Mining Engineer or Geologist
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        7. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management and
                        Community Relations Record (CEMCRR)
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        8. Environmental Compliance Certificate
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        9. Integrated Environmental Protection and Enhancement Program and Final Mine Rehabilitation
                        and/or Decommissioning Plan
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        10. Proof of technical competence including, among others:<br>&nbsp;
                        <br>&nbsp;
                        Curricula Vitae and track records in mining operations and environmental management of the
                        technical personnel who shall undertake the activities in accordance with the submitted Work
                        Program and EPEP. <br>&nbsp;
                        <br>&nbsp;
                        Sworn commitment/ employment contract/proof of availed services of the technical person(s) who
                        will implement the Work Program
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        11. Proof of financial capability to undertake the activities pursuant to WP and EPEP, such as
                        the following:<br>&nbsp;
                        <u> For Corporation: </u> <br>&nbsp;
                        * Latest audited Financial Statement and/or Annual Report <br>&nbsp;
                        * Credit Lines/Bank Guarantees and/ or similar negotiable instruments; and<br>&nbsp;
                        <br>&nbsp;

                        <u> For Individual: </u> <br>&nbsp;
                        * Sworn statement of assets and liabilities<br>&nbsp;
                        * Proof of Bank deposit or credit line<br>&nbsp;
                        * Income tax return for the preceding three years
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="reqData">
                        12. Social Development and Management Program
                    </td>

                    <td class="inputimg">
                        <upload />
                    </td>

                    <td style="text-align: left; width: 400px;">
                        <label>Remarks:</label><br>
                        <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                        <label>Recommendation or Lacking Submission :</label><br>
                        <textarea style="color: red;"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>


        <!--Other Mandatory Req table-->

        <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">OTHER MANDATORY REQUIREMENTS
            AFTER ACCEPTANCE BUT PRIOR TO THE ISSUANCE OF PERMIT</h2>

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
                            1. Area Status and Clearances (DENR)
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="reqData">
                            2. Proofs that the Notice of Application
                            MGB Regional Office(s) <br>&nbsp;
                            PENRO <br>&nbsp;
                            CENRO <br>&nbsp;
                            Province <br>&nbsp;
                            Municipality <br>&nbsp;

                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            3. Certification of the Panel of Arbitrators concerned as to any claim/protest/opposition
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            4. NCIP Certification
                        </td>

                        <td class="inputimg">
                            <<upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            5.Proof of Consultation with and Prior Approval by the Sangguniang Panlalawigan, Sangguniang
                            Bayan/Panlungsod, and Sangguniang Barangay concerned
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>

                    <tr>
                        <td class="reqData">
                            6. Surety Bond
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Other Table -->

        <h3 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h3>

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
                            1. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of
                            the company’s authorized signatory (for juridical entity only)
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td class="reqData">
                            2. Care and Maintenance Program
                        </td>

                        <td class="inputimg">
                            <upload />
                        </td>

                        <td style="text-align: left;width: 400px;">
                            <label>Remarks:</label><br>
                            <textarea style="color: red;" @input="copyRemarksFromTable1ToTable2"></textarea>
                            <label>Recommendation or Lacking Submission :</label><br>
                            <textarea style="color: red;"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Table 2 -->
            <table class="table2">
                <caption>Summary of Lacking Requirements</caption>
                <tbody>
                    <tr>
                        <td>
                            1. Application Form (MGB Form   No. 8-1), notarized;<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2. Payment of Filing and Processing Fees<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3. Duly Certified Articles of Incorporation/ Partnership/Association, By-Laws and Certificate of 
                            Registration duly certified by SEC or authorized Gov’t. agencies concerned, for corporations, partnership, associations or cooperatives; or proof of Filipino citizenship for individual;<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4. Location Map/Sketch Plan of the proposed permit area showing its geographic coordinates/meridional 
                            block(s) and boundaries in relation to major environmental features and other projects using NAMRIA 
                            topographic map in a scale of 1:50,000 duly prepared, signed and sealed by a deputized Geodetic Engineer<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5. Area clearance from the Government agencies/LGUs concerned that may be affected by the permit application 
                            or written permission from the landowner(s) and surface owner(s) of the area applied for<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6. Five (5) -Year Development/ Utilization Work Program (MGB Form No. 6-2), duly prepared, 
                            signed and sealed by a licensed Mining Engineer or Geologist<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7. An application (MGB Form No. 16-04) for or a Certificate of Environmental Management 
                            and Community Relations Record (CEMCRR)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8. Environmental Compliance Certificate<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            9. Integrated Environmental Protection and Enhancement Program and Final Mine Rehabilitation 
                            and/or Decommissioning Plan<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10. Proof of technical competence including, among others:<br> &nbsp;
                                Curricula Vitae and track records in mining operations and environmental management 
                                of the technical personnel who shall undertake the activities in accordance with the s
                                ubmitted Work Program and EPEP. <br> &nbsp;
                                Sworn commitment/ employment contract/proof of availed services of the technical 
                                person(s) who will implement the Work Program

                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            11. Proof of financial capability to undertake the activities pursuant to WP and EPEP, such as the following:<br> &nbsp;
                            <u>For Corporation</u> &nbsp;
                                *Latest audited Financial Statement and/or Annual Report<br> &nbsp;
                                * Credit Lines/Bank Guarantees and/ or similar negotiable instruments; and <br> &nbsp;
                            <u>For Individual</u>
                                * Sworn statement of assets and liabilities <br>&nbsp;
                                * Proof of Bank deposit or credit line <br> &nbsp;
                                * Income tax return for the preceding three years
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12. Social Development and Management Program<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                    
                </tbody>
            </table>

    <!--other mandatory req table -->
            <table class="table2">
                <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Mandatory Requirements</h2>
                <tbody>
                    <tr>
                        <td>
                            1. Area Status and Clearances (DENR) <br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            2. Proofs that the Notice of Application<br> &nbsp;
                                MGB Regional Office(s) <br> &nbsp;
                                PENRO <br> &nbsp;
                                CENRO <br> &nbsp;
                                Province <br> &nbsp;
                                MUnicipality
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            3. Certification of the Panel of Arbitrators concerned as to any claim/protest/opposition<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            4. NCIP Certification<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            5. Proof of Consultation with and Prior Approval by the Sangguniang Panlalawigan, 
                            Sangguniang Bayan/Panlungsod, and Sangguniang Barangay concerned<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            6. Surety Bond<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                </tbody>

            </table>

    <!--other table -->
            <table class="table2">
                <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h2>
                <tbody>
                    <tr>
                        <td>
                            1. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of the 
                            company’s authorized signatory (for juridical entity only)<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>

                    <tr>
                        <td>
                            2. Care and Maintenance Program<br> &nbsp;
                            <label style="font-size: 20px;font-weight: 600;">STATUS:</label>
                        </td>

                        <td style="text-align: left;width: 1000px;">
                            <label>Remarks:</label>
                            <textarea rows="3" style="color: red;" v-model="table2Remarks" wrap="off"></textarea>
                            <label>Based on the Status of MTSR:</label>
                            <textarea rows="3" style="color: black;" wrap="off"></textarea> <!-- Disable text wrapping -->
                        </td>
                    </tr>
                </tbody>

            </table>
    

        
        </div>
    </div>
</template>


<script setup>
import upload from '../../../../src/components/MTES/multiple-upload.vue';

// Function to copy remarks from Table 1 to Table 2 for all rows
function copyRemarksFromTable1ToTable2() {
    // Get all the rows in Table 1
    const table1Rows = document.querySelectorAll('.table1 tbody tr');
    
    // Loop through each row
    table1Rows.forEach((row, index) => {
        // Get the remarks textarea within the current row
        const table1Remarks = row.querySelector('textarea').value;
        
        // Find the corresponding row in Table 2 based on the index
        const table2Row = document.querySelectorAll('.table2 tbody tr')[index];
        
        // Set the remarks in Table 2 to match those from Table 1
        table2Row.querySelector('textarea').value = table1Remarks;
    });
}
</script>

<script>
export default {
  mounted() {
    // Call the function to copy remarks when the component is mounted
    copyRemarksFromTable1ToTable2();
  },
  methods: {
    fileSelected() {
      this.$refs.fileInput.click();
    },
    onFileSelect(event) {
      const files = event.target.files;
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!this.images.some((e) => e.name === files[i].name)) {
          this.images.push({ name: files[i].name, url: URL.createObjectURL(files[i]) })
        }
      }
    }
  }
}
</script>

<style scoped>
.title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
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