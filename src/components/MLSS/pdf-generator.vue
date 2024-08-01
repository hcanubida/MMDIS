<template>
    <div class="flex justify-end mt-4">
      <button @click="generatePDF" class="bg-blue-500 text-white px-4 py-2 rounded">Generate PDF</button>
    </div>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  // Existing content
  methods: {
    // Existing methods
    
    async generatePDF() {
      const tableElement = this.$refs.csagTable;
      const canvas = await html2canvas(tableElement);
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');

      const imgProps = pdf.getImageProperties(imageData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CSAG_Report_${new Date().toISOString().split('T')[0]}.pdf`);
    }
  }
};
</script>