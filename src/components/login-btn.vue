<template>
  <div class="h-24 mr-2 top-0 flex fixed w-full justify-end">
    <div class="flex justify-end mr-3 items-center">
      <button id="hs-dropdown-default" type="button" class="text-dark bg-orange-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center" @click="redirectToLoginPage">Log in <img class="w-2 m-2" src="../assets/icons/drop-down.png"></button>   
    </div>
    
    
  </div>
</template>

<script>
  import router from '../router/index.js';

  export default {
    methods: {
      redirectToLoginPage() {
        router.push('/mtss/mtss_dashboard');
      }
    }
  }
</script>