// Function to show the success popup
function showPopup() {
  document.getElementById('successPopup').style.display = 'block';
}

// Function to close the success popup
function closePopup() {
  document.getElementById('successPopup').style.display = 'none';
}

// Function to handle form submission
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  showPopup(); // Show the success popup
});
