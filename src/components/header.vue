<!-- header.vue -->

<template>
      <div id="header" class="items-center overflow-hidden h-24 fixed w-full flex content-center flex-row flex-wrap top-0 left-0 border-gray-200 lg:px-6 py-2.5 dark:bg-gray-800 fixed w-full flex flex-row flex-wrap top-0 left-0">
        <img src="../assets/icons/logo.png" alt="MGBLogo" id="logo" @click="goToDashboard">
        <div class="md:shrink-0">
          <p class="leading-tight text-base text-gray-900 dark:text-white ml-2">Republic of the Philippines</p>
          <p class="leading-tight text-base text-gray-900 dark:text-white ml-2">Department of Environment and Natural Resources</p>
          <p class="leading-tight text-lg font-bold text-gray-900 dark:text-white ml-2">Mines and Geosciences Bureau - Region X</p>
          <p class="leading-tight text-base text-gray-900 dark:text-white ml-2">DENR-X Compound, Puntod, Cagayan de Oro City</p>
        </div> 
      </div>
</template>
  
  <script>
   import '../assets/header.css';
  </script>