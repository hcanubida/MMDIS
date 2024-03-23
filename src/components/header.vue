<!-- header.vue -->

<template>
    <div class="header-container">
      <div class="header">
        <img src="../assets/icons/logo.png" alt="MGBLogo" id="logo" @click="goToDashboard">
        <div class="header-text">
          <p class="text-base text-gray-900 dark:text-white">Republic of the Philippines</p>
          <p class="text-base text-gray-900 dark:text-white">Department of Environment and Natural Resources</p>
          <p class="text-lg font-bold text-gray-900 dark:text-white">Mines and Geosciences Bureau - Region X</p>
          <p class="text-base text-gray-900 dark:text-white">DENR-X Compound, Puntod, Cagayan de Oro City</p>
        </div> 
      </div>
    </div>
</template>
  
  <script>
	import '../assets/header.css'
  </script>