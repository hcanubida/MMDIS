<template>
    <div>
      <!-- Header and User Button Section -->
      <div class="flex">
        <Header />
        <UserBtn />
      </div>
  
      <!-- Title Section -->
      <div class="flex flex-col mt-18 justify-center font-bold text-center">
        <h1 class="text-4xl">Financial or Technical Assistance Agreement</h1>
      </div>
  
      <!-- Analytics Section -->
      <div>
        <!-- Add any analytics or charts here if needed -->
      </div>
  
      <!-- Search and Add Section -->
      <div class="flex justify-between mt-8">
        <!-- Search Input Container -->
        <div class="flex w-2/5 ml-2">
          <!-- Search Icon -->
          <div class="flex items-center bg-blue-100 rounded-l-lg px-3 pointer-events-none">
            <svg class="w-8 h-8 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <!-- Search Input Field -->
          <input v-model="searchQuery" @input="debouncedSearch" type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-r-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Tenement Name or Location of the application ..." required />
        </div>
        <!-- Add Button -->
        <AddBtn @click="showModal = true" />
      </div>
      
      <!-- Table Section -->
      <div class="table w-screen">
        <Tableview />
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from '../../../components/header.vue'; 
  import UserBtn from '../../../components/user-dbbtn.vue'; 
  import Tableview from '../../mtes/tables/FTTA-table.vue';
  import AddBtn from '../../../components/MTES_2/newapplication.vue'; 
  import { ref } from 'vue';
  import axios from 'axios';
  import { API_BASE_URL } from '../../../config';
  
  const showModal = ref(false);
  </script>
  
  <style scoped>
  /* Add any scoped CSS styles if needed */
  </style>
  