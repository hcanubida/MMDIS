<template>
  <div class="h-24 mr-2 top-0 flex fixed w-full justify-end">
    <div class="relative flex justify-end mr-3 items-center">
      <button class="text-black bg-amber-400 hover:bg-amber-100 hover:text-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-4 py-2 text-center flex items-center" @click="redirectToLoginPage">
        Log in 
      </button>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js';

export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    redirectToLoginPage() {
      router.push('/login');
    },
  }
};
</script>