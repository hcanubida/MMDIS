<template>
    <div>
      
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Interactive Buttons and Dropdowns Section -->
      <div class="flex flex-col items-center p-8 m-4 rounded-3xl w-full">

      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/header.vue';
  import UserBtn from '../../components/user-dbbtn.vue';
  import router from '../../router';
  
  export default {
    components: {
      Header,
      UserBtn,
  
    },
    data() {
      return {
        
      };
    },
    methods: {

    }
  };
  </script>