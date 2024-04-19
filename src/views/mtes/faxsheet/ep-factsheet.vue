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

            <!-- Other table -->
            <div ref="content" class="foliocontent">
                <img src="../../../assets//MTES/body.jpg" alt="folio-sized photo" class="foliophoto-page2">
                <p
                    style="font-size: medium;font-weight: 700;letter-spacing: 3px;text-align: center;position: relative;top: 520px;right: 160px;margin-left: 80px;">
                    III.&nbsp;&nbsp;&nbsp;MANDATORY REQUIREMENTS</p>
                <table class="tbl-faxsheet">
                    <thead class="thead-faxsheet">
                        <tr style="text-align: center;">
                            <th class="th-fax">Requirements</th>
                            <th class="th-fax">Upload</th>
                            <th class="th-fax">Remarks / Status</th>
                        </tr>
                    </thead>
                    <tbody class="faxbody">
                        <tr style="">
                            <td class="fax-details">
                                1. Application Form (MGB Form No. 5-1)</td>
                            <td class="fax-upload" style="width: 80px;">
                                *Upload Requirements</td>
                            <td class="fax-status">
                                Remarks/Status:&nbsp;
                                <br>
                                <br>
                                Lorem ipsum dolor sit amet consectasaa
                                <br>
                                <br>
                                Recommendation or Lacking Submission:
                                <br>
                                <span style="color: red;"> Lacking Submission </span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr style="">
                            <td class="fax-details">
                                2. Payment of Filing Fee</td>
                            <td class="fax-upload" style="width: 80px;">
                                *Upload Requirements</td>
                            <td class="fax-status">
                                Remarks/Status:&nbsp;
                                <br>
                                <br>
                                Lorem ipsum dolor sit amet consectasaa
                                <br>
                                <br>
                                Recommendation or Lacking Submission:
                                <br>
                                <span style="color: red;"> Lacking Submission </span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr style="">
                            <td class="fax-details">
                                3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4),duly prepared, signed and
                                sealed by a licensed Mining Engineer or Geologist</td>
                            <td class="fax-upload" style="width: 80px;">
                                *Upload Requirements</td>
                            <td class="fax-status">
                                Remarks/Status:&nbsp;
                                <br>
                                <br>
                                Lorem ipsum dolor sit amet consectasaa
                                <br>
                                <br>
                                Recommendation or Lacking Submission:
                                <br>
                                <span style="color: red;"> Lacking Submission </span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr style="">
                            <td class="fax-details">
                                4. Affidavit of Undertaking pursuant to DMO No. 99-10 as amended, for a corporation,
                                partnership, association or cooperative</td>
                            <td class="fax-upload" style="width: 80px;">
                                *Upload Requirements</td>
                            <td class="fax-status">
                                Remarks/Status:&nbsp;
                                <br>
                                <br>
                                Lorem ipsum dolor sit amet consectasaa
                                <br>
                                <br>
                                Recommendation or Lacking Submission:
                                <br>
                                <span style="color: red;"> Lacking Submission </span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr style="">
                            <td class="fax-details">
                                5. For corporation/partnership/Association/cooperative: SEC/CDA-certifies Certificate of
                                Registration, Articles of Incorporation/Partnership/ Association and By-Laws;
                                or a Certification from MGB CO/RO concerned that such documents are duly registered in
                                that Office
                                (note: with minimum authorized capital of PhP100 M and paid-up capital of PhP6.25M
                                pursuant to DMO No. 2013-01);</td>
                            <td class="fax-upload" style="width: 80px;">
                                *Upload Requirements</td>
                            <td class="fax-status">
                                Remarks/Status:&nbsp;
                                <br>
                                <br>
                                Lorem ipsum dolor sit amet consectasaa
                                <br>
                                <br>
                                Recommendation or Lacking Submission:
                                <br>
                                <span style="color: red;"> Lacking Submission </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div ref="content" class="foliocontent">
                    <img src="../../../assets//MTES/body.jpg" alt="folio-sized photo" class="foliophoto-page3">
                    <table class="tbl-faxsheet2">
                        <thead class="thead-faxsheet">
                            <tr style="text-align:center;">
                                <th class="th-fax2">Requirements</th>
                                <th class="th-fax2">Upload</th>
                                <th class="th-fax2">Remarks / Status</th>
                            </tr>
                        </thead>
                        <tbody class="faxbody2">
                            <tr style="">
                                <td class="fax-details2">
                                    6. Location Map/Sketch Plan (1:50,000 NAMRIA topographic map) showing
                                    coordinates/boundaries (in tabulated form) with major environmental features/other
                                    projects (prepared, sealed and signed by a deputized Geodetic Engineer)</td>
                                <td class="fax-upload2" style="width: 80px;">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consectasaa
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr style="">
                                <td class="fax-details2">
                                    7. Proof of technical competence to undertake the implementation of activities under
                                    the Programs: <br>
                                    &nbsp;&nbsp;7.1 Curricula Vitae and track records in exploration and environmental
                                    management; <br>
                                    &nbsp;&nbsp;7.2 Sworn statement/employment contract/ proof of availed services of
                                    the technical
                                    person(s) who will undertake the
                                    implementation of the Programs</td>
                                <td class="fax-upload2" style="width: 80px;">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consectasaa
                                    <br>
                                    <br>
                                    Recommendation or Lacking Submission:
                                    <br>
                                    <span style="color: red;"> Lacking Submission </span>
                                </td>
                            </tr>
                            <tr style="">
                                <td class="fax-details2">
                                    8. Proof of financial capability to undertake the implementation of the activities
                                    under the work programs: <br>
                                    &nbsp;* Latest Audited Financial Statement and/or Annual Report for the preceding Year <br>
                                    &nbsp;* Credit lines and/or certification/s of bank guarantee/deposit and/or similar
                                    negotiable instruments</td>
                                <td class="fax-upload2" style="width: 80px;">
                                    *Upload Requirements</td>
                                <td class="fax-status2">
                                    Remarks/Status:&nbsp;
                                    <br>
                                    <br>
                                    Lorem ipsum dolor sit amet consectasaa
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
        </div>
    </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
    methods: {
        downloadPDF() {
            // Initialize jsPDF with A4 size
            const pdf = new jsPDF('p', 'mm', [215.9, 330.2]);

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

.foliocontainer {
    position: relative;
    width: 8.5in;
    height: 13in;
    margin: 0 auto;
    margin-top: 10px;
}

.faxbody {
    width: 100%;
}

.faxbody2 {
    width: 100%;
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

.foliophoto2 {
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
    bottom: -1240px;
    left: 0;
    width: 100%;
    height: 98%;
    z-index: -1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.foliophoto-page3 {
    position: absolute;
    bottom: -2500px;
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


.fbody td {
    padding: 4px;
    padding-bottom: 10px;
    border: 1px solid rgb(37, 37, 37);
}

.tbl-faxsheet {
    margin-top: 530px;
    text-align: center;
}

.tbl-faxsheet2 {
    margin-top: 330px;
    text-align: center;
    margin-left: 50px;
}

.thead-faxsheet {
    font-size: 15px;
}

.tbl-faxsheet {
    width: 90%;
    margin-left: 45px;
    text-align: left;
}

.fax-details {
    text-align: left;
    text-align: justify;
    font-size: 13px;
    font-weight: 400;
    width: 200px;
    letter-spacing: 2px;
}

.fax-details2 {
    text-align: left;
    text-align: justify;
    font-size: 13px;
    font-weight: 400;
    width: 430px;
    letter-spacing: 2px;
}

.fax-upload {
    text-align: left;
    font-size: 10px;
}

.fax-upload2 {
    text-align: left;
    font-size: 10px;
}

.fax-status {
    text-align: left;
    font-size: 13px;
    width: 150px;
    padding-right: 0;
}

.fax-status2 {
    text-align: left;
    font-size: 13px;
    width: 190px;
    padding-right: 0;
}


.th-fax,
td {
    border: 1px solid rgb(114, 114, 114);
    padding: 4px;
    padding-bottom: 10px;
}

.th-fax2,
td {
    border: 1px solid rgb(114, 114, 114);
    padding: 4px;
    padding-bottom: 10px;
}

.th-fax {
    width: 100px;
}

.th-fax2 {
    width: 110px;
}


.td-faxsheet {
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    width: 600px;
    letter-spacing: 2px
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