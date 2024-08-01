<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-18 justify-center font-bold text-center">
        <h1 class="text-4xl">Industrial Sand and Gravel</h1>
      </div>
    </div>
</template>
  
<script>
  import Header from '../../components/header.vue'; 
  import UserBtn from '../../components/user-dbbtn.vue'; 
  import axios from 'axios';
  import debounce from 'lodash/debounce';
  
  export default {
    components: {
      Header,
      UserBtn,
    },
    methods: {
      
    },
  };
</script>
  