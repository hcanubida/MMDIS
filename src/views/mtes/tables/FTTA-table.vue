<template>
    <div class="fttatable">
      <div class="ftta_scrollable">
        <table class="w-full text-sm text-left text-black-300 dark:text-gray-400 shadow-xl overflow-y-auto max-h-100px">
          <thead class="sticky top-0 z-50 border-y-50">
            <tr style="background-color: #e6cfaf;">
              <th class="fttath">Stages of Processing</th>
              <th class="fttath" @click="sortmethod('status')">
                Status
                <span v-if="sortKey === 'status'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th class="fttath">Tenement No.</th>
              <th class="fttath" @click="sortmethod('tenement_name')">
                Tenement Name
                <span v-if="sortKey === 'tenement_name'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th class="fttath">Area (HA)</th>
              <th class="fttath" @click="sortmethod('date_filed')">
                Date Filed
                <span v-if="sortKey === 'date_filed'" aria-label="Sorted ascending">
                  <template v-if="sortOrder === 'asc'">▲</template>
                  <template v-else>▼</template>
                </span>
              </th>
              <th class="fttath">Barangay</th>
              <th class="fttath">City</th>
              <th class="fttath">Province</th>
              <th class="fttath">Commodity</th>
              <th class="fttath">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in sortedEntries" :key="index">
              <td class="fttatd">{{ detail.stage_of_processing }}</td>
              <td class="fttatd">{{ detail.status }}</td>
              <td class="fttatd">{{ detail.id }}</td>
              <td class="fttatd">{{ detail.tenement_name }}</td>
              <td class="fttatd">{{ detail.area_hectares }}</td>
              <td class="fttatd">{{ detail.date_filed }}</td>
              <td class="fttatd">{{ detail.barangay }}</td>
              <td class="fttatd">{{ detail.city }}</td>
              <td class="fttatd">{{ detail.province }}</td>
              <td class="fttatd">{{ detail.commodity }}</td>
              <td class="fttatd">
                <button class="text-red-500" @click="navigateTomodalView(detail.id)">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { API_BASE_URL } from '../../../config';
  
  import { addDetail, viewDetail, detailToggle, detail_id } from '../dashboards/FTAA-dashboard.vue';
  
  export default {
    name: 'typeofapp',
    data() {
      return {
        details: [],
        addDetail: false,
        viewDetail: false,
        detail_id: null,
        sortKey: '',
        sortOrder: 'asc',
      };
    },
    computed: {
      sortedEntries() {
        // Sort and return the entries based on sortKey and sortOrder
        return [...this.details].sort((a, b) => {
          let result = 0;
          if (a[this.sortKey] > b[this.sortKey]) result = 1;
          else if (a[this.sortKey] < b[this.sortKey]) result = -1;
          return this.sortOrder === 'asc' ? result : -result;
        });
      },
    },
    mounted() {
      this.fetchDetails();
    },
    methods: {
      async fetchDetails() {
        try {
          const response = await axios.get(`${API_BASE_URL}/get_details/`);
          this.details = response.data.filter((det) => det.application == 'ftta');
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      },
      navigateTomodal() {
        addDetail.value = true; // Define your navigation logic here
      },
      navigateTomodalView(id) {
        detail_id.value = id;
        viewDetail.value = true; // Define your navigation logic here
      },
      sortmethod(key) {
        if (this.sortKey === key) {
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortKey = key;
          this.sortOrder = 'asc';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .fttath {
    cursor: pointer; /* Indicates that headers are clickable for sorting */
  }
  
  .fttabutton {
    text-align: center;
    padding: 10px;
    margin: 1rem;
    width: 250px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: #eacda3;
    color: white;
    cursor: pointer;
  }
  
  .fttatable {
    flex: auto;
    flex-direction: column;
    border-collapse: collapse;
    width: 100%;
  }
  
  .ftta_scrollable {
    margin: 15px;
    box-shadow: 2px 3px 5px rgb(175, 175, 175);
    max-height: 369px;
    overflow-y: auto;
  }
  
  .fttath,
  .fttatd {
    border: 1px solid #888888;
    text-align: center;
    padding: 10px;
    position: sticky;
  }
  </style>
  