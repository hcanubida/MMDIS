<template>
  <div style="display: flex; height: 100vh;">
    <div class=zeroappdetails>
      <div class="appdetails">
        <div style="display: flex; justify-content: flex-end;">
          <button
            style=" color: black; width: 45px; color: #BB080A; position: absolute;font-size: 25px; font-weight: 700;margin-top: -12px;"
            @click="Exit">
            X
          </button>
        </div>
        <div class="appdetails1">
          <p>Application Details</p>
        </div>
        <div class="appdetails2">
          <div class="appdetails3">
            <input class="inputall" placeholder="Name of the Applicant" />
            <input class="inputall" placeholder="Area(Hectares)" />
            <input class="inputall" v-model="date" readonly placeholder="Date Filed" />
            <input class="inputall" placeholder="Barangay" />
            <input class="inputall" placeholder="City" />
            <input class="inputall" placeholder="Province" />
            <input class="inputall" placeholder="Commodity" />
          </div>

          <div class="appdetails4">
            <select class="inputall " v-model="selectedCategory">
              <option disabled value="individual">Category</option>
              <option value="individual">Individual</option>
              <option value="corporation">Corporation</option>
              <option value="cooperative">Cooperative</option>
              <option value="other">Other</option>
            </select>

            <!-- Conditional input field for 'Other' category -->
            <input v-if="selectedCategory === 'other'" class="inputall cate" v-model="otherCategory"
              placeholder="Enter other category" />
            <input class="inputall" placeholder="Authorized Representative" />
            <input class="inputall" v-model="contactnum" @input="formatContactNum" maxlength="11" required
              placeholder="Contact Number" />
            <input class="inputall" placeholder="Email Address" />
            <input class="inputall" placeholder="Others:" />

          </div>
        </div>
<!-- 
        <div class="appdetailsbutton">
          <button class="butons" @click="navigateToMandatory">Add</button>
        </div> -->
      </div>


    </div>
  </div>
</template>

<script setup>

</script>

<script>
import { addDetail3 } from '../../../views/mtes/dashboards/ISAG-dashboard.vue';
import { addDetail4 } from '../../../views/mtes/dashboards/MB-dashboard.vue';
import { addDetail2 } from '../../../views/mtes/dashboards/MPSA-dashboard.vue';
import { addDetail } from '../../../views/mtes/dashboards/FTAA-dashboard.vue';
import { addDetail1 } from '../../../views/mtes/dashboards/EP-dashboard.vue';
import { addDetail5 } from '../../../views/mtes/dashboards/MPP-dashboard.vue';
import { API_BASE_URL } from '../../../config'

export default {
  data() {
    return {
      details: [],
      contactnum: '',
      selectedCategory: 'individual',
      otherCategory: '',
      date: this.getCurrentDate(),
      addDetail3: true,
      addDetail4: true,
      addDetail2: true,
      addDetail1: true,
      addDetail: true,
      addDetail5: true
    };
  },
  watch: {
    selectedCategory(newValue) {
      if (newValue !== 'other') {
        this.otherCategory = '';
      }
    }
  },
  methods: {
    Exit() {
      addDetail3.value = false,
        addDetail4.value = false,
        addDetail2.value = false,
        addDetail.value = false,
        addDetail1.value = false,
        addDetail5.value = false
    },
    getCurrentDate() {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; // January is 0!
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      return `${yyyy}-${mm}-${dd}`;
    },
    navigateToMandatory() {

    },

    formatContactNum() {
      // Remove non-numeric characters
      this.contactnum = this.contactnum.replace(/\D/g, '');

      // Ensure the input starts with "09"
      if (!/^09/.test(this.contactnum)) {
        this.contactnum = '09';
      }

      // Limit the input to 11 characters
      this.contactnum = this.contactnum.slice(0, 11);
    }

  }
}


</script>

<style>
.zeroappdetails {
  display: flex;
  backdrop-filter: blur(5px);
  height: 100vh;
  width: 100%;
  z-index: 999;
  align-items: center;
  justify-content: center;
}


.appdetails {
  background-color: #e0b983;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  width: auto;
  /* Set a maximum width */
  height: auto;
  /* Let the height adjust based on content */
  padding: 20px;
}

.appdetails1 {
  text-align: center;
  /* background-color: yellow; */
  font-size: 30px;
  font-weight: 400;
}

.appdetails2 {
  display: flex;
  flex-direction: row;
  text-align: center;
  /* background-color: green; */
  font-size: 20px;
  height: auto;
  margin-top: 10px;
  text-align: left;


}

.appdetails3 {
  display: flex;
  /* background-color: blue; */
  width: 340px;
  flex-direction: column;
  font-weight: bold;
  margin-left: 10px;
}

.appdetails4 {
  display: flex;
  /* background-color: orange; */
  width: 310px;
  flex-direction: column;
  font-weight: bold;
}

.appdetailsbutton {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.butons {
  /* border: 1px solid white; */
  padding: 5px;
  width: 60px;
  border-radius: 10px;
  background-color: #fafafa;
  color: rgb(92, 92, 92);
  width: 300px;
  height: 50px;
  font-size: 23px;
}

.butons:hover {
  background-color: #ececec;
}

.inputall {
  display: flex;
  width: 300px;
  height: 40px;
  background-color: rgb(235, 234, 234);
  color: black;
  margin-left: 1px;
  padding-left: 4px;
  margin-top: 20px;
  font-weight: 20;
}

.inputall::placeholder {
  color: black;
}

.cate::placeholder {
  color: black;
  font-weight: 20px;
  opacity: 50%;
}

@media (max-width: 768px) {
  .zeroappdetails {
    top: -3000px
  }
}
</style>