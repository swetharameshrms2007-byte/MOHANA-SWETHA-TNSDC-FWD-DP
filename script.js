// Handle resume download
document.getElementById("downloadBtn").addEventListener("click", function () {
  // Replace with your actual resume file path
  const link = document.createElement("a");
  link.href = "resume.pdf"; // <-- put your resume file in the same folder
  link.download = "Mohanaswetha_Resume.pdf";
  link.click();
});
