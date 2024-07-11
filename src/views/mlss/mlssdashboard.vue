<template>
  <div>
    
    <!-- Header and User Button Section -->
    <div class="flex">
      <Header />
      <UserBtn />
    </div>

    <!-- Charts Section -->
    <div class="mt-24">
      <Charts />
    </div>

    <!-- Interactive Buttons and Dropdowns Section -->
    <div class="flex flex-col items-center p-8 m-4 rounded-3xl w-full">
      <div class="grid grid-cols-2 gap-8">
        
        <!-- Area Status Clearance Dropdown -->
        <div>
          <button 
            @click="toggleDropdown('isDropdownASC')" 
            class="flex justify-center w-64 gap-4 text-lg mb-4 p-3 rounded-xl bg-orange-200 hover:bg-red-200"
            aria-expanded="isDropdownASC"
            aria-controls="area-status-dropdown"
          >
            Area Status Clearance
            <img class="w-4" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
          </button>
          <div v-if="isDropdownASC" id="area-status-dropdown" class="mt-2 w-64 rounded-lg z-10 bg-orange-200 shadow-lg">
            <a 
              v-for="(item, index) in areaStatusItems" 
              :key="index"  
              @click="openPDF(item.pdfUrl)" 
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {{ item.label }}
            </a>
          </div>
        </div>

        <!-- Database Dropdown -->
        <div>
          <button 
            @click="toggleDropdown('isDropdownDatabase')" 
            class="flex justify-center w-64 gap-4 text-lg mb-4 p-3 rounded-xl bg-orange-200 hover:bg-red-200"
            aria-expanded="isDropdownDatabase"
            aria-controls="database-dropdown"
          >
            Database
            <img class="w-4" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
          </button>
          <div v-if="isDropdownDatabase" id="database-dropdown" class="mt-2 w-64 bg-orange-200 rounded-lg shadow-lg text-left">
            <a @click="AreaStatusClearance" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Area Status Clearance</a>
            <a @click="MOEPValidation" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MOEP Validation</a>
            <a @click="MiningTenementMaps" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mining Tenement Maps</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue';
import UserBtn from '../../components/user-dbbtn.vue';
import Charts from '../../components/MLSS/charts.vue';
import router from '../../router';

export default {
  components: {
    Header,
    UserBtn,
    Charts,

  },
  data() {
    return {
      isDropdownASC: false,
      isDropdownDatabase: false,
      areaStatusItems: [
        { label: 'C1: New No Conflict', pdfUrl: 'pdf/CASE 1 - final copy.pdf' },
        { label: 'C2: Amendment', pdfUrl: 'pdf/CASE 2 - final copy.pdf' },
        { label: 'C3.1: CSAG Expansion', pdfUrl: 'pdf/CASE 3.1 - CSAG copy.pdf' },
        { label: 'C3.1: QUARRY Expansion', pdfUrl: 'pdf/CASE 3.1 - QUARRY copy.pdf' },
        { label: 'C3.2: Reduction', pdfUrl: 'pdf/CASE 3.2 - final copy.pdf' },
        { label: 'C4: Downgrade/Upgrade', pdfUrl: 'pdf/CASE 4 - final copy.pdf' },
        { label: 'C5: Change Name', pdfUrl: 'pdf/CASE 5 - final copy.pdf' },
        { label: 'C6: Change Barangay Location', pdfUrl: 'pdf/CASE 6 - final copy.pdf' },
        { label: 'C7: Within No-Go-Zone SAFDZ ARC', pdfUrl: 'pdf/CASE 7 - final copy.pdf' },
        { label: 'C8: Conflict Denied', pdfUrl: 'pdf/CASE 8 - final copy.pdf' },
        { label: 'C9: Not Conforming along River', pdfUrl: 'pdf/CASE 9 - final copy.pdf' },
        { label: 'C10: Inconsistent Tie Line', pdfUrl: 'pdf/CASE 10 - final copy.pdf' },
        { label: 'C11: Inconsistent Tie Line', pdfUrl: 'pdf/CASE 11 - final copy.pdf' },
      ]
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this[dropdown] = !this[dropdown];
    },
    openPDF(pdfUrl) {
      // console.log(pdfUrl)
      window.open(window.location.origin + "/" + pdfUrl, '_blank');
    },
    AreaStatusClearance() {
      router.push({ name: 'AreaStatusClearance' });
    },
    MOEPValidation() {
      router.push({ name: 'MOEPValidation' });
    },
    MiningTenementMaps() {
      router.push({ name: 'MiningTenementMaps' });
    }
  }
};
</script>