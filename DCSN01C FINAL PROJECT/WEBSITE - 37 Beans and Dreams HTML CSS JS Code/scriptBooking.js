// Function to validate the form before submission
document.getElementById("booking-form").addEventListener("submit", function(event) {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;

    // Check if any of the required fields are empty
    if (!name || !email || !phone || !address || !date || !service) {
        // Prevent form submission
        event.preventDefault();
        
        // Alert the user to fill in all fields
        alert("Please fill in all the fields before submitting the form.");
    } else {
        // If all fields are filled, show confirmation that the form is being submitted
        alert("Thank you for booking with us! Your submission has been received.");
        
    }
});
