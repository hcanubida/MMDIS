<!-- mtss_dashboard.vue -->
<template>

    <Header></Header>
    <div id="dashboard">  
            <!-- Accomplishment Reports Section -->
            <div class="section">
                <div class="img">
                    <img src="../../assets/icons/ar.png" alt="MGBLogo" style="width: 35%; margin-left: 45px;">
                    <h1>Accomplishment Reports</h1>
                </div>
                <div class="btn">
                    <button @click="redirectToOSTC" class="db_btn">OSTC</button>
                    <button @click="redirectToOSTC" class="db_btn">Inventory</button>
                    <button @click="redirectToOSTC" class="db_btn">Work Program Monitoring</button>
                    <button @click="redirectToOSTC" class="db_btn">Minahang Bayan Monitoring</button>
                    <button @click="redirectToOSTC" class="db_btn">Investigation</button>
                    <button @click="redirectToOSTC" class="db_btn">Anti-Illegal</button>
                    <button @click="redirectToOSTC" class="db_btn">DMPF</button>
                    <button @click="redirectToOSTC" class="db_btn">PCMRB Meetings</button>
                </div>
            </div>
    
            <!-- Databases Section -->
            <div class="section" style="padding-bottom: 310px;">
                <div class="img">
                    <img src="../../assets/icons/db.png" alt="MGBLogo" style="width: 35%;">
                    <h1>Databases</h1>
                </div>
                <div class="btn">
                    <button @click="redirectToMPSA" class="db_btn">MPSA</button>
                    <button @click="redirectToISAG" class="db_btn">ISAG</button>
                    <button @click="redirectToEP" class="db_btn">EP</button>
                    <button @click="redirectToMPP" class="db_btn">MPP</button>
                </div>
            </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue'; // Import Header component
  import '../../assets/mtss.css'
  
  export default {
      components: {
          Header // Register Header component
      },
      methods: {
          redirectToOSTC() {
              // Redirect logic for OSTC
              window.location.href = '../mtss_ostc.vue';
          },
          redirectToMPSA() {
              // Redirect logic for MPSA
          },
          redirectToISAG() {
              // Redirect logic for ISAG
          },
          redirectToEP() {
              // Redirect logic for EP
          },
          redirectToMPP() {
              // Redirect logic for MPP
          }
      }
  }
  </script>
  