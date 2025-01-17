<template>
  <div class="flex">
    <Header />
    <UserBtn />
  </div>

  <div>
    <!-- Modal Overlay -->
    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center" style="background: rgba(0, 0, 0, 0.5); z-index: 1000;">
      <div class="bg-white rounded-lg w-4/5 relative" style="max-width: 800px;">
        <faxx />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../../components/header.vue';
import UserBtn from '../../components/user-dbbtn.vue';
import faxx from '../mtes/factsheet.vue';
import { API_BASE_URL } from '../../config';
</script>

<script>
export default {
  name: 'typeapp',
  data() {
    return {
      details: {},
      overallStatus: '',
      remarks: {
        textInput1: '',
        textInput2: '',
        textInput3: '',
        textInput4: '',
        textInput5: '',
      },
      recommendation: {
        textInput1: '',
        textInput2: '',
        textInput3: '',
        textInput4: '',
        textInput5: '',
      },
      uploadFiles: {
        file1: [],
        file2: [],
        file3: [],
        file4: [],
        file5: [],
      },
      imagesfile: {
        file1: [],
        file2: [],
        file3: [],
        file4: [],
        file5: [],
      },
    };
  },
  methods: {
    async getDetails() {
      try {
        const response = await axios.get(`${API_BASE_URL}/get_details/`);
        this.details = response.data.find(det => det.id === this.$route.params.detail_id) || {};
      } catch (error) {
        console.error('Error fetching details:', error);
      }

      try {
        const overallstatus = await axios.get(`${API_BASE_URL}/get_mtsrstatus`);
        const filteredStatus = overallstatus.data.find(req => req.id_reference === parseInt(this.$route.params.detail_id));
        this.overallStatus = filteredStatus?.overallstatus || '';
      } catch (error) {
        console.error('Error fetching overall status:', error);
      }

      await this.fetchRemarks();
      await this.fetchRecommendations();
      await this.fetchFiles('get_files', this.uploadFiles);
      await this.fetchFiles('get_images', this.imagesfile);
    },
    async fetchRemarks() {
      try {
        const remarks = await axios.get(`${API_BASE_URL}/get_remarks`);
        const filteredRemarks = remarks.data.find(req => req.id_reference === this.$route.params.detail_id) || {};
        this.remarks = {
          textInput1: filteredRemarks.input1 || '',
          textInput2: filteredRemarks.input2 || '',
          textInput3: filteredRemarks.input3 || '',
          textInput4: filteredRemarks.input4 || '',
          textInput5: filteredRemarks.input5 || '',
        };
      } catch (error) {
        console.error('Error fetching remarks:', error);
      }
    },
    async fetchRecommendations() {
      try {
        const recommendations = await axios.get(`${API_BASE_URL}/get_recommendation`);
        const filteredRecommendations = recommendations.data.find(req => req.id_reference === this.$route.params.detail_id) || {};
        this.recommendation = {
          textInput1: filteredRecommendations.input1 || '',
          textInput2: filteredRecommendations.input2 || '',
          textInput3: filteredRecommendations.input3 || '',
          textInput4: filteredRecommendations.input4 || '',
          textInput5: filteredRecommendations.input5 || '',
        };
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    },
    async fetchFiles(endpoint, target) {
      try {
        const files = await axios.get(`${API_BASE_URL}/${endpoint}`);
        const filteredFiles = files.data.filter(req => req.id_reference === this.$route.params.detail_id);

        Object.keys(target).forEach(key => {
          target[key] = [];
        });

        filteredFiles.forEach(req => {
          Object.keys(target).forEach(key => {
            if (req[key]) {
              try {
                target[key] = JSON.parse(req[key]);
              } catch (e) {
                console.error(`Error parsing JSON for ${key}:`, e);
              }
            }
          });
        });
      } catch (error) {
        console.error(`Error fetching files from ${endpoint}:`, error);
      }
    },
  },
  mounted() {
    this.getDetails();
  },
};
</script>
