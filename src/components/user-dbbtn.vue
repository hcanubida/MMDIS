<template>
  <div class="fixed h-24 mr-2 top-0 flex fixed w-full justify-end">
    <div class="flex mr-3 items-center">
      <button @click="toggleDropdown" class="justify-between w-32 text-black bg-amber-400 hover:bg-amber-100 hover:text-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-2 py-2 text-center flex items-center">
        {{ username }}  
        <img class="w-2 m-2" src="../assets/icons/drop-down.png" alt="Dropdown Icon">
      </button>
      <!-- Dropdown Content -->
      <div v-if="isDropdownOpen" class="absolute mt-24 w-32 bg-white rounded-lg shadow-lg z-10 text-center">
        <a href="#" @click="redirectToHome" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Log Out</a>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js';

export default {
  data() {
    return {
      isDropdownOpen: false,
      username: localStorage.getItem('username'),
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      // Clear user session (example: remove authentication token and clear local storage)
      localStorage.removeItem('authToken'); // Assuming you store the authentication token in local storage

      // Redirect to the login page
      router.push('/');
    },
    redirectToHome() {
      if (window.confirm('Are you sure you want to logout?')) {
        this.logout();
      }
    }
  }
}
</script>
