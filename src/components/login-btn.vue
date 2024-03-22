<template>
  <div class="header-btn">
    <div class="btn-login">
      <button class="btn-lgn" @click="redirectToLoginPage">Log in</button>
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