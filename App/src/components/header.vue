<template>
   <div class="una">
      <div class="imagediv1">
         <img class="ima" src="../assets/logo.png" alt="Description of the image">
         <img class="ima ims" src="../assets/republic.png" alt="Description of the image">
         <img class="ima" src="../assets/bago.png" alt="Description of the image">
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
</style>