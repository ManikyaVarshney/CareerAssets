/*<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<script>
  document.getElementById('download-btn').addEventListener('click', () => {
    const resume = document.querySelector('#resume');      // wrapper element
    html2pdf()
      .set({
        filename: 'Manikya-Resume.pdf',
        margin:   0,
        enableLinks: true,          // ← keeps <a> tags clickable
        html2canvas: { scale: 2, useCORS: true },
        jsPDF:      { unit: 'pt', format: 'a4', orientation: 'portrait' }
      })
      .from(resume)
      .save();
  });
</script>
*/
