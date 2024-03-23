<template>
  <div class="header-btn">
    <div class="btn-login">
      <button class="text-dark bg-orange-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="redirectToLoginPage">Log in</button>
    </div>
  </div>
</template>

<script>
  import '../assets/login-btn.css'
  import router from '../router/index.js';

  export default {
    methods: {
      redirectToLoginPage() {
        router.push('/mtss/mtss_dashboard');
      }
    }
  }
</script>