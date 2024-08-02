<template>
  <div class="flex justify-end">
    <button @click="generatePDF" class="mr-4 bg-orange-900 p-2 text-white font-bold rounded-lg">Generate PDF</button>
  </div>
</template>

<script>
import router from '../../router'; // Import your Vue Router instance

export default {
  methods: {
    generatePDF() {
      router.push('/mlss/pdf-content');
      
    }
  }
}
</script>
