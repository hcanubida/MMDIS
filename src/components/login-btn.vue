<template>
  <div class="h-24 mr-2 top-0 flex fixed w-full justify-end">
    <div class="relative flex justify-end mr-3 items-center">
      <button id="hs-dropdown-default" type="button" class="text-dark bg-orange-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center" @click="toggleDropdown">
        Log in 
        <img class="w-2 m-2" src="../assets/icons/drop-down.png">
      </button>
      <!-- Dropdown Content -->
      <div v-if="isDropdownOpen" class="absolute right-0 mt-40 w-24 bg-white rounded-lg shadow-lg z-10 text-center">
        <a href="#" @click="redirectToMTESLoginPage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg">MTES</a>
        <a href="#" @click="redirectToLoginPage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MTSS</a>
        <a href="#" @click="redirectToMLSSLoginPage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">MLSS</a>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js';

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    redirectToLoginPage() {
      router.push('/mtss/dashboard');
    },
    redirectToMTESLoginPage(){
      router.push('/loginmtes');
    },
  }
};
</script>