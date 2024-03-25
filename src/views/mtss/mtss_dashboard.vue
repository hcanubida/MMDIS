<template>
    <Header></Header>
    <UserBtn/>
    <div id="dashboard">  
        <!-- Accomplishment Reports Section -->
        <div class="section">
            <div class="img">
                <img src="../../assets/icons/ar.png" alt="MGBLogo" style="width: 35%; margin-left: 45px;">
                <h1>Accomplishment Reports</h1>
            </div>
            <div class="btn">
                <button @click="redirectToOSTC" class="db_btn">OSTC</button>
                <button @click="redirectToInventory" class="db_btn">Inventory</button>
                <button @click="redirectToWPM" class="db_btn">Work Program Monitoring</button>
                <button @click="redirectToMBM" class="db_btn">Minahang Bayan Monitoring</button>
                <button @click="redirectToInvestigation" class="db_btn">Investigation</button>
                <button @click="redirectToAI" class="db_btn">Anti-Illegal</button>
                <button @click="redirectToDMPF" class="db_btn">DMPF</button>
                <button @click="redirectToPCMRB" class="db_btn">PCMRB Meetings</button>
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
import UserBtn from '../../components/user-dbbtn.vue';
import '../../assets/mtss.css'
import router from '../../router'; // Import your Vue Router instance

export default {
    components: {
        Header,
        UserBtn
    },
    methods: {
        redirectToOSTC() {
            router.push('/mtss/mtss_ostc');
        },
        redirectToInventory() {
            router.push('/mtss/mtss_inventory');
        },
        redirectToWPM() {
            router.push('/mtss/mtss_wpm');
        },
        redirectToMBM() {
            router.push('/mtss/mtss_mbm');
        },
        redirectToInvestigation() {
            router.push('/mtss/mtss_investigation');
        },
        redirectToAI() {
            router.push('/mtss/mtss_ai');
        },
        redirectToDMPF() {
            router.push('/mtss/mtss_dmpf');
        },
        redirectToPCMRB() {
            router.push('/mtss/mtss_pcmrb');
        },
        redirectToMPSA() {
            router.push('/mtss/mtss_mpsa');
        },
        redirectToISAG() {
            router.push('/mtss/mtss_isag');
        },
        redirectToEP() {
            router.push('/mtss/mtss_ep');
        },
        redirectToMPP() {
            router.push('/mtss/mtss_mpp');
        }
    }
}
</script>