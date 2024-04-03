<template>
   <!-- <div class="una">
      <div class="imagediv1">
         <img class="ima" src="../assets/logo.png" alt="Description of the image">
         <img class="ima ims" src="../assets/republic.png" alt="Description of the image">
         <img class="ima" src="../assets/bago.png" alt="Description of the image">
      </div>
   </div> -->
   <div id="header"
    class="items-center overflow-hidden h-24 fixed w-full flex content-center flex-row flex-wrap top-0 left-0 border-gray-200 lg:px-6 py-2.5 dark:bg-gray-800 fixed w-full flex flex-row flex-wrap top-0 left-0">
    <img src="../assets//logo.png" alt="MGBLogo" id="logo" >
    <div class="md:shrink-0">
      <p class="leading-tight text-base text-gray-900 dark:text-white ml-2">Republic of the Philippines</p>
      <p class="leading-tight text-base text-gray-900 dark:text-white ml-2">Department of Environment and Natural
        Resources</p>
      <p class="leading-tight text-lg font-bold text-gray-900 dark:text-white ml-2">Mines and Geosciences Bureau -
        Region X</p>
      <p class="leading-tight text-base text-gray-900 dark:text-white ml-2">DENR-X Compound, Puntod, Cagayan de Oro City
      </p>
    </div>
  </div>
</template>


<script>

</script>

<style scoped>
.una {
   background-color: white;
   display: flex;
   height: 70px;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 999;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid black;
   box-shadow: 0px 0px 10px 0px black;
}

.imagediv1 {
   display: flex;
   align-items: center;
}

.ima {
   height: 50px;
   width: 50px;
   margin-top: -5px;
   margin-left: 10px;
   cursor: pointer;
}

.ims {
   width: 200px;
}

@media (max-width: 768px) {
   .ima {
      margin-right: 0px;
   }

   .ims {
      width: 145.9px;
   }
}

#header {
  background: linear-gradient(to top, #e6b980, #eacda3, #e6b980);
}

#logo {
    height: 100%;
}

#header-text {
  align-self: center;
}
</style>