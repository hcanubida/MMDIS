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
            <input class="inputall" placeholder="Name of the Applicant" v-model="detailstoadd.tenement_name" />
            <input class="inputall" placeholder="Area(Hectares)" v-model="detailstoadd.area_hectares" />
            <input class="inputall" v-model="date" readonly placeholder="Date Filed" />
            <select name="" id="" class="inputall" @change="handleRegion">
              <option disabled selected>Select Region</option>
              <option v-for="region in regions" :value="region.region_code" :key="region.region_code">{{
              region.region_name
            }}
              </option>
            </select>
            <select name="" id="" class="inputall" @change="handleProvince">
              <option disabled selected>Select Province</option>
              <option v-for="province in provinces" :value="province.province_code" :key="province.province_code">
                {{ province.province_name }}
              </option>
            </select>
            <select name="" id="" @change="handleCity" class="inputall">
              <option disabled selected>Select City</option>
              <option v-for="city in cities" :value="city.city_code" :key="city.city_code">{{ city.city_name }}</option>
            </select>
            <select name="" id="" @change="barangaysChange" class="inputall">
              <option disabled selected>Select Barangay</option>
              <option v-for="barangay in barangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{
              barangay.brgy_name
            }}
              </option>
            </select>
            <input class="inputall" placeholder="Commodity" v-model="detailstoadd.commodity" />
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
            <input class="inputall" placeholder="Authorized Representative" v-model="detailstoadd.authorized_rep" />
            <input class="inputall" v-model="contactnum" @input="formatContactNum" maxlength="11" required
              placeholder="Contact Number" />
            <input class="inputall" placeholder="Email Address" v-model="detailstoadd.email" />
            <input class="inputall" placeholder="Others:" v-model="detailstoadd.others" />
            <input class="inputall" placeholder="Status:" v-model="detailstoadd.status" />
            <input class="inputall" placeholder="Tenement Number:" v-model="detailstoadd.tenement_number" />

          </div>
        </div>
        <div class="appdetailsbutton">
          <button class="butons" @click="submitmpsa">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<script>
import { addDetail2 } from '../../../../views/mtes/dashboards/MPSA-dashboard.vue';
import { regions, provinces, cities, barangays } from 'select-philippines-address'

export default {
  data() {
    return {
      details: [],
      contactnum: '',
      selectedCategory: 'individual',
      otherCategory: '',
      regions: [],
      provinces: [],
      cities: [],
      barangays: [],
      region: null,
      province: null,
      city: null,
      barangay: null,
      date: this.getCurrentDate(),
      addDetail2: true,
      detailstoadd: {
        status: '',
        tenement_number: '',
        tenement_name: '',
        area_hectares: '',
        commodity: '',
        authorized_rep: '',
        email: '',
        others: '',
        application: 'mpsa'
      }
    };
  },
  watch: {
    selectedCategory(newValue) {
      if (newValue !== 'other') {
        this.otherCategory = '';
      }
    }
  },
  created() {
    regions().then(response => {
      this.regions = response;
    });
  },
  methods: {
    handleRegion(e) {
      this.region = e.target.selectedOptions[0].text;
      provinces(e.target.value).then(response => {
        this.provinces = response;
      });
    },
    handleProvince(e) {
      this.province = e.target.selectedOptions[0].text;
      cities(e.target.value).then(response => {
        this.cities = response;
      });
    },
    handleCity(e) {
      this.city = e.target.selectedOptions[0].text;
      barangays(e.target.value).then(response => {
        this.barangays = response;
      });
    },
    barangaysChange(e) {
      this.barangay = e.target.selectedOptions[0].text;
    },

    Exit() {
      addDetail2.value = false
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


    formatContactNum() {
      // Remove non-numeric characters
      this.contactnum = this.contactnum.replace(/\D/g, '');

      // Ensure the input starts with "09"
      if (!/^09/.test(this.contactnum)) {
        this.contactnum = '09';
      }

      // Limit the input to 11 characters
      this.contactnum = this.contactnum.slice(0, 11);
    },
    submitmpsa() {
      const formData = new FormData();
      formData.append('status', this.detailstoadd.status);
      formData.append('tenement_number', this.detailstoadd.tenement_number);
      formData.append('tenement_name', this.detailstoadd.tenement_name);
      formData.append('area_hectares', this.detailstoadd.area_hectares);
      formData.append('barangay', this.barangay);
      formData.append('city', this.city);
      formData.append('province', this.province);
      formData.append('commodity', this.detailstoadd.commodity);
      formData.append('authorized_rep', this.detailstoadd.authorized_rep);
      formData.append('contact_no', this.contactnum);
      formData.append('email', this.detailstoadd.email);
      formData.append('others', this.detailstoadd.others);
      formData.append('application', this.detailstoadd.application);

      // Append category based on selectedCategory
      if (this.selectedCategory === 'other') {
        // Append otherCategory if selectedCategory is 'others'
        formData.append('category', this.otherCategory);
      } else {
        // Append selectedCategory directly otherwise
        formData.append('category', this.selectedCategory);
      }


      // Make axios POST request
      axios.post('http://127.0.0.1:8000/add_details', formData)
        .then(response => {
          // Handle response
          console.log(response.data);
          window.location.reload();
        })
        .catch(error => {
          // Handle error
          console.error('Error:', error);
        });
    },

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