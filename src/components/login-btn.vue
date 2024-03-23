<template>
  <div class="header-btn">
    <div class="btn-login">
      <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" class="text-dark bg-orange-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center" @click="redirectToLoginPage">Log in <img class="w-2 m-2" src="../assets/icons/drop-down.png"></button>
    </div>
  </div>

    <!-- Dropdown menu -->
  <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" id="dropdownHoverButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MTES</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MTSS</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MLSS</a>
        </li>
      </ul>
  </div>
</template>

<script>
  import '../assets/login-btn.css'
  import router from '../router/index.js';

  export default {
    methods: {
      redirectToLoginPage() {
        router.push('/mtss/mtss_dashboard');
      }
    }
  }
</script>