<template>
  <div>
    <div class="flex justify-end mt-1 mr-3 items-center h-12">
      <button @click="showModal = true" class="text-dark bg-orange-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm pl-4 pr-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center">Add New Data<img class="w-4 m-2" src="../../assets/icons/plus.png"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    };
  }
};
</script>