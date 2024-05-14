<template>
  <div>
    <headd />
  </div>

  <div class="title1">
    <h2>MANDATORY REQUIREMENTS</h2>

  </div>

  <!-- Table 1 -->
  <div class="requirements1">
    <table class="table1">
      <thead class="titlehead1">
        <tr style="text-align: center;">
          <th class="th1">Requirements</th>
          <th class="th1">Upload</th>
          <th class="th1">Remarks / Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="reqData1">
            1. Application Form (MGB Form No. 5-1)
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput1"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput1"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            2. Payment of Filing Fee
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput2"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput2"> </textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4), <br>
            duly prepared, signed and sealed by a licensed Mining Engineer or Geologist
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput3"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput3"> </textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            4. Affidavit of Undertaking pursuant to DMO No. 99-10 as amended, for a corporation, partnership,
            association or cooperative
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput4"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput4"> </textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            5. For corporation/partnership/Association/cooperative: SEC/CDA-certifies Certificate of Registration,
            Articles of Incorporation/Partnership/ Association and By-Laws; or a Certification from MGB CO/RO concerned
            that such documents are duly registered in that Office (note: with minimum authorized capital of PhP100 M
            and paid-up capital of PhP6.25M pursuant to DMO No. 2013-01);
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput5"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput5"> </textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            6. Location Map/Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/boundaries (in tabulated
            form) with major environmental features/other projects (prepared, sealed and signed by a deputized Geodetic
            Engineer)
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput6"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput6"> </textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            7. Proof of technical competence to undertake the implementation of activities under the Programs:<br>&nbsp;
            7.1 Curricula Vitae and track records in exploration and environmental management;<br>&nbsp;
            7.2 Sworn statement/employment contract/ proof of availed services of the technical person(s) who will
            undertake the <br>&nbsp;implementation of the Programs
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput7"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput7"></textarea>
          </td>
        </tr>
        <tr>
          <td class="reqData1">
            8. Proof of financial capability to undertake the implementation of the activities under the work programs:
            <br>&nbsp;
            * Latest Audited Financial Statement and/or Annual Report for the preceding Year<br>&nbsp;
            * Credit lines and/or certification/s of bank guarantee/deposit and/or similar negotiable instruments
          </td>

          <td class="inputimg1">
            <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
              <label
                class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                to upload:</label>
              <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
            </div>
          </td>

          <td style="text-align: left; width: 400px;">
            <label>Remarks:</label><br>
            <textarea class="textarea1" v-model="remarks.textInput8"></textarea>
            <label>Recommendation or Lacking Submission :</label><br>
            <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput8"> </textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Other Requirement -->

    <h2 style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;">Other Requirements</h2>

    <div class="requirements1">
      <table class="table1">
        <thead class="tablehead1">
          <tr style="text-align: center;">
            <th class="th1">Requirements</th>
            <th class="th1">Upload</th>
            <th class="th1">Remarks / Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="reqData1">
              1. Certificate Environmental Management and Community Relations Record (CEMCRR) or Certificate of
              Exemption from the CEMCRR ;
            </td>

            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput9"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput9"> </textarea>
            </td>
          </tr>
          <tr>
            <td class="reqData1">
              2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed and sealed by a licensed
              Mining Engineer or Geologist;
            </td>

            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput10"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput10"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS and other agencies
              concerned)
            </td>

            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput11"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput11"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              4. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of the company’s
              authorized signatory;
            </td>
            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput12"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput12"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              5.Proof of publication, posting and radio announcement of the Notice of Application: <br>&nbsp;
              5.1. Published once in:<br>&nbsp;
              a. Local newspaper<br>&nbsp;
              b. national newspaper <br>&nbsp;
              5.2. Posted for one (1) week on the bulletin boards of:<br>&nbsp;
              a. MGB Regional Office No. X<br>&nbsp;
              b. Province of Misamis Oriental <br>&nbsp;
              c. City of Cagayan de Oro <br>&nbsp;
              5.3. radio announced daily for one (1) week in a Local radio program<br>&nbsp;
            </td>

            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput13"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput13"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse claim/protest/opposition
            </td>

            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput14"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput14"></textarea>
            </td>
          </tr>

          <tr>
            <td class="reqData1">
              7. NCIP Certification or proof of landownership, such as certified true copies of Original/Transfer
              Certificate of Title, among others.
            </td>

            <td class="inputimg1">
              <div class="grid w-full max-w-xs items-center gap-1.5 mx-5 my-4 justify-center">
                <label
                  class="text-sm mt-3 text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Files
                  to upload:</label>
                <input type="file" multiple accept="application/*" @change="handleFileUpload" ref="fileInput"
                  class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer">
              </div>
            </td>

            <td style="text-align: left;width: 400px;">
              <label>Remarks:</label><br>
              <textarea class="textarea1" v-model="remarks.textInput15"></textarea>
              <label>Recommendation or Lacking Submission :</label><br>
              <textarea class="textarea1" style="color: red;" v-model="recommendation.textInput15"></textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Table2 -->
      <table class="table4">
        <caption style="text-align: left;font-size: 20px;font-weight: 600; padding-top: 20px;" class="caption1">Summary
          of Lacking Requirements</caption>
        <tbody>
          <tr>
            <td v-if="recommendation.textInput1 !== 'null' && recommendation.textInput1.trim() !== ''">
              <p>{{ requirements.reqDetails1 }}</p>
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput1 !== 'null' && recommendation.textInput1.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput1 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput2 !== 'null' && recommendation.textInput2.trim() !== ''">
              {{ requirements.reqDetails2 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput2 !== 'null' && recommendation.textInput2.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput2 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput3 !== 'null' && recommendation.textInput3.trim() !== ''">
              {{ requirements.reqDetails3 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput3 !== 'null' && recommendation.textInput3.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput3 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput4 !== 'null' && recommendation.textInput4.trim() !== ''">
              {{ requirements.reqDetails4 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput4 !== 'null' && recommendation.textInput4.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput4 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput5 !== 'null' && recommendation.textInput5.trim() !== ''">
              {{ requirements.reqDetails5 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput5 !== 'null' && recommendation.textInput5.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput5 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput6 !== 'null' && recommendation.textInput6.trim() !== ''">
              {{ requirements.reqDetails6 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput6 !== 'null' && recommendation.textInput6.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput6 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput7 !== 'null' && recommendation.textInput7.trim() !== ''">
              {{ requirements.reqDetails7 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput7 !== 'null' && recommendation.textInput7.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput7 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput8 !== 'null' && recommendation.textInput8.trim() !== ''">
              {{ requirements.reqDetails8 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput8 !== 'null' && recommendation.textInput8.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput8 }}</p>
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
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput9 }}</p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput10 !== 'null' && recommendation.textInput10.trim() !== ''">
              {{ requirements.reqDetails10 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput10 !== 'null' && recommendation.textInput10.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput10 }}
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
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput11 }}
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
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput12 }}
              </p>
            </td>
          </tr>
          <tr>
            <td v-if="recommendation.textInput13 !== 'null' && recommendation.textInput13.trim() !== ''">
              {{ requirements.reqDetails13 }}
            </td>

            <td style="text-align: left;width: 1000px;height: 100px;"
              v-if="recommendation.textInput13 !== 'null' && recommendation.textInput13.trim() !== ''">
              <label>Recommendation or Lacking Submission</label>
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput13 }}
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
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput14 }}
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
              <p style="color: red; border-radius: 4px; width: 100%  ;height: auto;">{{ recommendation.textInput15 }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="tablee">
        <thead class="titlehead3">
          <tr style="text-align: center;">
            <th class="th1" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
            <th class="th1" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
        <thead class="titlehead1">
          <tr style="text-align: center;">
            <th class="th1" style="font-size: 20px; font-weight: 600;width: 50%;">Mandatory Requirement</th>
            <th class="th1" style="font-size: 20px; font-weight: 600;width: 50%;">Remarks / Status</th>
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
  </div>
</template>


<script setup>
import upload from '../../../components/MTES/multiple-upload.vue'
import headd from '../../../components/MTES/header.vue'
import downloadd from '../faxsheet/ep-factsheet.vue'
import { ref } from 'vue';

</script>

<script>
export default {
  name: 'typeapp',
  props: {
    detail_id1: String,
  },
  data() {
    return {
      selectedStatus: '',
      otherStatus: '',
      requirements: {
        reqDetails1: `
        1. Application Form (MGB Form No. 5-1)`,
        reqDetails2: `
        2. Payment of Filing Fee`,
        reqDetails3: `
        3. Two (2)-Year Exploration Work Program (MGB Form No. 5-4), duly prepared,
              signed and sealed by a licensed Mining Engineer or Geologist`,
        reqDetails4: `
        4. Affidavit of Undertaking pursuant to DMO No. 99-10 as amended,
              for a corporation, partnership, association or cooperative`,
        reqDetails5: `
        5. For corporation/ partnership/ Association/ cooperative: SEC/ CDA-certifies
              Certificate of Registration, Articles of Incorporation/ Partnership/ Association
              and By-Laws; or a Certification from MGB CO/ RO concerned that such documents
              are duly registered in that Office (note: with minimum authorized capital of
              PhP100 M and paid-up capital of PhP6.25 M pursuant to DMO No. 2013-01)`,
        reqDetails6: `
        6. Location Map/Sketch Plan (1:50,000 NAMRIA topographic map) showing coordinates/boundaries (in tabulated
              form) with major environmental features/other projects (prepared, sealed and signed by a deputized
              Geodetic Engineer)`,
        reqDetails7: `
        7. Proof of technical competence to undertake the implementation of activities under the Programs:<br>
              &nbsp;
              * 6.1 Curricula Vitae and track records in exploration and environmental management;<br>&nbsp;
              * 6.2 Sworn statement/employment contract/ proof of availed services of the technical person(s)
              who will undertake the implementation of the Programs`,
        reqDetails8: `
        8. Proof of financial capability to undertake the implementation of the activities under the work
              programs:
              <br>&nbsp;
              * Latest Audited Financial Statement and/or Annual Report for the preceding Year<br>&nbsp;
              * Credit lines and/or certification/s of bank guarantee/deposit and/or similar negotiable instruments`,
        reqDetails9: `
        1. Certificate Environmental Management and Community Relations Record (CEMCRR) or Certificate of
              Exemption from the CEMCRR;`,
        reqDetails10: `
        2. Environmental Work Program (MGB Form 16-1 or 16-1A), duly prepared, signed and sealed by a licensed
              Mining Engineer or Geologist;`,
        reqDetails11: `
        3. Area Status and Clearance from the One Stop-Shop Committee (FMS, PAWCZMS, LMS and other agencies
              concerned)`,
        reqDetails12: `
        4. Secretary’s Certificate attesting to a Board Resolution regarding the authorization of the company’s
              authorized signatory;`,
        reqDetails13: `
        5. Proof of publication, posting and radio announcement of the Notice of Application:<br> &nbsp;
              5.1 Published once in: <br> &nbsp;
              a. Local newspaper <br> &nbsp;
              b. national newspaper <br> &nbsp;
              5.2 Posted for one (1) week on the bulletin boards of:<br> &nbsp;
              a. MGB Regional Office No. X <br> &nbsp;
              b. Province of Misamis Oriental <br> &nbsp;
              c. City of Cagayan de Oro<br> &nbsp;
              5.3 radio announced daily for one (1) week in a Local radio program`,
        reqDetails14: `
        6. Certification from the Panel of Arbitrators (PA) concerned as to any adverse
              claim/protest/opposition`,
        reqDetails15: `
        7. NCIP Certification or proof of landownership, such as certified true copies of Original/Transfer
              Certificate of Title, among others.`,
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
    async getDetails() {
      try {
        const remarks = await axios.get('http://localhost:8000/get_remarks');
        const filteredremarks = remarks.data.filter(req => req.id_reference == this.$route.params.detail_id1);

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

      try {
        const requirements = await axios.get('http://localhost:8000/get_recommendation');
        const filteredrequirements = requirements.data.find(req => req.id_reference == this.$route.params.detail_id1);
        
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
    },
    update() {
      const formData = new FormData();
            formData.append('id_reference', this.$route.params.detail_id1);
            // Append category based on selectedCategory
            if (this.selectedStatus === 'other') {
                // Append otherCategory if selectedCategory is 'others'
                formData.append('mtsr', this.otherStatus);
            } else {
                // Append selectedCategory directly otherwise
                formData.append('mtsr', this.selectedStatus);
            }
            // Make axios POST request
            axios.post(`http://127.0.0.1:8000/update_mtsrstatus/${this.$route.params.detail_id1}`, formData)
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
      formData1.append('id_reference', this.$route.params.detail_id1);
      console.log('id_reference', this.$route.params.detail_id1)

      for (let i = 1; i <= 15; i++) {
        formData1.append(`input${i}`, this.remarks[`textInput${i}`]);
        console.log(`input${i}`, this.recommendation[`textInput${i}`])
      }
      // Append other input values here...

      // Make a POST request to update remarks
      axios.post(`http://localhost:8000/update_remarks/${this.$route.params.detail_id1}`, formData1)
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
      formData2.append('id_reference', this.$route.params.detail_id1);
      console.log('id_reference', this.$route.params.detail_id1)

      for (let i = 1; i <= 15; i++) {
        formData2.append(`input${i}`, this.recommendation[`textInput${i}`]);
        console.log(`input${i}`, this.recommendation[`textInput${i}`])
      }

      // Append other input values here...

      // Make a POST request to update recommendations
      axios.post(`http://localhost:8000/update_recommendation/${this.$route.params.detail_id1}`, formData2)
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
.title1 {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 120px;
}

.requirements1 {
  margin-top: 10px;
  text-align: center;
}

.titlehead1 {
  font-size: 20px;
}

.reqData1 {
  text-align: left;
  text-align: justify;
  font-size: 15px;
  font-weight: 400;
  width: 600px;
}

.inputimg1 {
  text-align: left;
  width: 400px;
}


.table1 {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
}

.table2 {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
}

.table3 {
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
  border-collapse: collapse;
}
.table4 td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
    width: 50%;
    /* Set each column to occupy 50% of the table width */
}
.tablee {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  border-collapse: collapse;
}

.th1,
td {
  border: 1px solid #dddddd;
  padding: 8px;
}

.th1 {
  background-color: #e0b983;
}

.caption1 {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  caption-side: top;
}

.textarea1 {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>