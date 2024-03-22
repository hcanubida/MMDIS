<!-- header.vue -->

<template>
    <div class="header-container">
      <div class="header">
        <img src="../assets/icons/logo.png" alt="MGBLogo" id="logo" @click="goToDashboard">
        <div class="header-text">
          <h4>Republic of the Philippines</h4>
          <h3>Department of Environment and Natural Resources</h3>
          <h1>Mines and Geosciences Bureau - Region X</h1>
          <h4>DENR-X Compound, Puntod, Cagayan de Oro City</h4>
        </div> 
      </div>
    </div>
</template>
  
  <script>
	import '../assets/header.css'
  </script>