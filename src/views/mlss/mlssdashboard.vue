<template>
    <div>
      <Header></Header>
      <UserBtn></UserBtn>
      
      <div class="flex flex-col items-center p-8 mt-40 m-4 rounded-3xl">
        <div class="grid grid-cols-2 gap-64">
          <!-- Area Status Clearance Dropdown Button -->
          <button @click="toggleDropdown('isDropdownASC')"
                  class="flex justify-center w-64 gap-4 text-lg mb-4 rounded-xl p-3 hover:bg-red-200"
                  style="background: linear-gradient(to top, #e6b980, #eacda3, #e6b980);">
            Area Status Clearance
            <img class="w-2 m-2" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
          </button>
          <!-- Area Status Clearance Dropdown Content -->
          <div v-if="isDropdownASC" class="absolute mt-16 w-36 bg-white rounded-lg shadow-lg z-10 text-left">
            <a v-for="(item, index) in areaStatusItems" :key="index" href="#" 
               @click="openPDF(item.pdfUrl)" 
               class="block mt-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg w-64"
               :style="gradientStyle">{{ item.label }}</a>
          </div>
  
          <!-- Database Dropdown Button -->
          <button @click="toggleDropdown('isDropdownDatabase')"
                  class="flex justify-center w-64 gap-4 text-lg mb-4 rounded-xl p-3 hover:bg-red-200"
                  style="background: linear-gradient(to top, #e6b980, #eacda3, #e6b980);">
            Database
            <img class="w-2 m-2" src="../../assets/icons/drop-down.png" alt="dropdown-icon">
          </button>
          <!-- Database Dropdown Content -->
          <div v-if="isDropdownDatabase" class="absolute mt-14 w-36 bg-white rounded-lg shadow-lg z-10 text-center">
            <a href="#" @click="toDatabase" class="block mt-14 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Go to Database</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import UserBtn from '../../components/user-dbbtn.vue';
  import router from '../../router';
  
  export default {
    components: {
      Header,
      UserBtn
    },
    data() {
      return {
        isDropdownASC: false,
        isDropdownDatabase: false,
        areaStatusItems: [
          { label: 'C1: New No Conflict', pdfUrl: '../../assets/ASCpdf/Case 1 - final copy.pdf' },
          { label: 'C2: Amendment', pdfUrl: '../../assets/ASCpdf/Case 2 - final copy.pdf' },
          { label: 'C3.1: Expansion', pdfUrl: '../../assets/ASCpdf/Case 3.1 - CSAG copy.pdf' },
          { label: 'C3.2: Reduction', pdfUrl: '../../assets/ASCpdf/Case 3.2 - QUARRY copy.pdf' },
          { label: 'C4: Downgrade or Upgrade', pdfUrl: '../../assets/ASCpdf/Case 4 - final copy.pdf' },
          { label: 'C5: Change Name', pdfUrl: '../../assets/ASCpdf/Case 5 - final copy.pdf' },
          { label: 'C6: Change Barangay Location', pdfUrl: '../../assets/ASCpdf/Case 6 - final copy.pdf' },
          { label: 'C7: Within No-Go-Zone SAFDZ ARC', pdfUrl: '../../assets/ASCpdf/Case 7 - final copy.pdf' },
          { label: 'C8: Conflict Denied', pdfUrl: '../../assets/ASCpdf/Case 8 - final copy.pdf' },
          { label: 'C9: Not Conforming along River', pdfUrl: '../../assets/ASCpdf/Case 9 - final copy.pdf' },
          { label: 'C10: Inconsistent Tie-Line', pdfUrl: '../../assets/ASCpdf/Case 10 - final copy.pdf' },
          { label: 'C11: Inconsistent Tie-Line', pdfUrl: '../../assets/ASCpdf/Case 11 - final copy.pdf' },
        ],
        gradientStyle: 'background: linear-gradient(to top, #e6b980, #eacda3, #e6b980);'
      };
    },
    methods: {
      toggleDropdown(dropdown) {
        this[dropdown] = !this[dropdown];
      },
      openPDF(pdfUrl) {
        window.open(pdfUrl, '_blank');
      },
      toDatabase() {
        this.toggleDropdown('isDropdownDatabase');
        router.push('/mlss/database');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here if needed */
  </style>