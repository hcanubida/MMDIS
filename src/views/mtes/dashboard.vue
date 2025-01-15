<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
            <Header />
            <UserBtn />
      </div>


      <div class="justify-center items-center flex mt-64">
        <div class="flex flex-col justify-center content-center p-5" style="border-radius: 25px; width: 80vw; max-width: 700px; height: 300px;">
            <div class="flex justify-center mb-6">
                <button class="button text-2xl rounded h-24 text-white bg-green-800 hover:bg-green-300 hover:text-gray-950 cursor-pointer ease-in-out duration-300  " @click="navigateToFirstPage">NEW APPLICATIONS</button>
            </div>
            <div class="flex justify-center mb-6">
                <button class="button text-2xl rounded h-24 text-white bg-green-800 hover:bg-green-300 hover:text-gray-950 cursor-pointer ease-in-out duration-300 " @click="navigateToSecondPage">PERMIT</button>
            </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import Header from '../../components/header.vue'
  import UserBtn from '../../components/user-dbbtn.vue'
  </script>
  
  <script>
  
  export default {
    methods: {
      navigateToFirstPage() {
        // Use router.push to navigate to '/applicationpage'
        window.location.href = '/applicationpage';
      },
      navigateToSecondPage() {
        // Use router.push to navigate to '/permitpage'
        window.location.href = '/permitpage';
      },
    }
  };
  </script>
  
  <style>
  .title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  .button {
    padding: 0.5rem 1rem;
    width: 1000px;
    border: none;
    flex: 1 2 8rem;
  
  }
  
  .button:hover {
    transition: 0.3s;
  }
  </style>