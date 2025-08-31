// Simple form validation & submission alert
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from refreshing

  alert("🎉 Registration Successful! Thank you for registering.");
  this.reset(); // clears the form after submit
});
