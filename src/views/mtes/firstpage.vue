<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div class="flex justify-center items-center h-screen">
      <taas />
    </div>
    <div class="conta">
      <div class="button-container">
        <button class="button ease-in-out duration-300 " @click="navigateToSecondPage">NEW APPLICATIONS</button>
      </div>
      <div class="button-container">
        <button class="button">PERMIT</button>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<script>
import secondpage from '../mtes/secondpage.vue'

export default {
  methods: {
    navigateToSecondPage() {
      // Use router.push to navigate to '/secondpage'
      window.location.href = '/secondpage';
    }
  }
};
</script>

<style>
.conta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 25px;
  width: 80vw;
  /* Set width to a percentage of the viewport width */
  max-width: 700px;
  /* Set a maximum width */
  height: 300px;
  /* Let the height adjust based on content */
  padding: 20px;
}


.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  /* Added margin-bottom */
}

.button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  width: 1000px;
  height: 100px;
  border: none;
  background-color: #e0b983;
  color: black;
  cursor: pointer;
  font-size: 25px;
  flex: 1 2 8rem;
  cursor: pointer;
 
}

.button:hover{
  background-color: #e7d1b1;
  transition: 0.3s;
}
</style>