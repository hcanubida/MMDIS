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
      <!-- Interactive Buttons and Dropdowns Section -->
    <div class="flex flex-col relative bg-white items-center p-8 mt-4 w-full">
      <div class="grid grid-cols-2 gap-8">
        
        <!-- Area Status Clearance Dropdown -->
        <div>
          <button 
            @click="toggleDropdown('isDropdownASC')" 
            class="flex items-center justify-center w-64 gap-4 text-lg mb-4 p-3 rounded-xl bg-orange-200 hover:bg-red-200"
            :aria-expanded="isDropdownASC.toString()"
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
            class="flex justify-center items-center w-64 gap-4 text-lg mb-4 p-3 rounded-xl bg-orange-200 hover:bg-red-200"
            :aria-expanded="isDropdownDatabase.toString()"
            aria-controls="database-dropdown"
          >
            Database
            <img class="w-4" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
          </button>
          <div v-if="isDropdownDatabase" id="database-dropdown" class="mt-2 w-64 bg-orange-200 rounded-lg shadow-lg text-left">
            <a @click="MOEPValidation" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MOEP Validation</a>
            <a @click="MiningTenementMaps" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mining Tenement Maps</a>
            
            <!-- New Dropdown under Area Status Clearance -->
            <div>
              <button 
                @click="toggleDropdown('isDropdownASCNew')" 
                class="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                :aria-expanded="isDropdownASCNew.toString()"
                aria-controls="area-status-new-dropdown"
              >
              Area Status Clearance
                <img class="w-4" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
              </button>
              <div v-if="isDropdownASCNew" id="area-status-new-dropdown" class="mt-2 w-64 rounded-lg z-10 bg-orange-200 shadow-lg">
                <a 
                  @click="navigateTo('CSAG')"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  CSAG
                </a>
                <a 
                  @click="navigateTo('ISAG')"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  ISAG
                </a>
                <a 
                  @click="navigateTo('MQUARRY')"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  MQUARRY
                </a>
              </div>
            </div>
            <!-- End of New Dropdown -->
          </div>
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
      isDropdownASCNew: false, // Added for the new dropdown under Area Status Clearance
      areaStatusItems: [
        { label: 'C1: New No Conflict', pdfUrl: 'ASCpdf/CASE 1 - final copy.pdf' },
        { label: 'C2: Amendment', pdfUrl: 'ASCpdf/CASE 2 - final copy.pdf' },
        { label: 'C3.1: CSAG Expansion', pdfUrl: 'ASCpdf/CASE 3.1 - CSAG copy.pdf' },
        { label: 'C3.1: QUARRY Expansion', pdfUrl: 'ASCpdf/CASE 3.1 - QUARRY copy.pdf' },
        { label: 'C3.2: Reduction', pdfUrl: 'ASCpdf/CASE 3.2 - final copy.pdf' },
        { label: 'C4: Downgrade/Upgrade', pdfUrl: 'ASCpdf/CASE 4 - final copy.pdf' },
        { label: 'C5: Change Name', pdfUrl: 'ASCpdf/CASE 5 - final copy.pdf' },
        { label: 'C6: Change Barangay Location', pdfUrl: 'ASCpdf/CASE 6 - final copy.pdf' },
        { label: 'C7: Within No-Go-Zone SAFDZ ARC', pdfUrl: 'ASCpdf/CASE 7 - final copy.pdf' },
        { label: 'C8: Conflict Denied', pdfUrl: 'ASCpdf/CASE 8 - final copy.pdf' },
        { label: 'C9: Not Conforming along River', pdfUrl: 'ASCpdf/CASE 9 - final copy.pdf' },
        { label: 'C10: Inconsistent Tie Line', pdfUrl: 'ASCpdf/CASE 10 - final copy.pdf' },
        { label: 'C11: Inconsistent Tie Line', pdfUrl: 'ASCpdf/CASE 11 - final copy.pdf' },
      ],
      areaStatusNewItems: [
        { label: 'CSAG', route: '/mlss/CSAG' },
        { label: 'ISAG', route: '/mlss/ISAG' },
        { label: 'MQUARRY', route: '/mlss/MQUARRY' },
      ]
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this[dropdown] = !this[dropdown];
    },
    openPDF(pdfUrl) {
      window.open(window.location.origin + "/" + pdfUrl, '_blank');
    },
    navigateTo(route) {
      router.push(route);
    },
    MOEPValidation() {
      router.push('/mlss/MOEPV');
    },
    MiningTenementMaps() {
      router.push('/mlss/MTM');
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
