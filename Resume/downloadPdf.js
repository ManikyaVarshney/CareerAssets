<script>
document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4'
    });

    // Select the element you want to convert to PDF
    const content = document.body; // You can change this to a specific element if needed

    doc.html(content, {
        callback: function (doc) {
            doc.save('download.pdf');
        },
        x: 10,
        y: 10,
        width: 190
    });
});
</script>
