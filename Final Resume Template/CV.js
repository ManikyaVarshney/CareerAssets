// Dark Mode Toggle
const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// PDF Download
document.getElementById("download-pdf").addEventListener("click", function () {
    window.print();
});
