<!-- header.vue -->

<template>
      <div class="mt-32">
        <Link />
      </div>

      <div class="items-center overflow-hidden h-24 w-full flex content-center flex-row flex-wrap top-0 left-0 border-gray-200 lg:px-6 py-2.5 fixed w-full flex flex-row flex-wrap top-0 left-0 bg-green-800">
        <img src="../assets/icons/logo.png" alt="MGBLogo" class="h-full cursor-pointer" @click="goToDashboard">
        <div class="md:shrink-0">
          <p class="leading-tight text-base text-gray-100 ml-2">Republic of the Philippines</p>
          <p class="leading-tight text-base text-gray-100 ml-2">Department of Environment and Natural Resources</p>
          <p class="leading-tight text-lg font-bold text-gray-100 ml-2">Mines and Geosciences Bureau - Region X</p>
          <p class="leading-tight text-base text-gray-100 ml-2">DENR-X Compound, Puntod, Cagayan de Oro City</p>
        </div> 
      </div>
</template>

<script>
import Link from '../components/link-directories.vue';

export default {
  components: {
    Link
  },
  methods: {
        goToDashboard() {
          // Use router.push to navigate to '/applicationpage'
          window.location.href = '/mtes';
        },
      }
}
;
</script>