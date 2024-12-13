// Function to validate the form before submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if any of the required fields are empty
    if (!name || !email || !message) {
        // Prevent form submission
        event.preventDefault();
        
        // Alert the user to fill in all fields
        alert("Please fill in all the fields before submitting the form.");
    } else {
        // If all fields are filled, show confirmation that the form is being submitted
        alert("Thank you for reaching out! Your message has been sent.");
        
        // Optionally, you can submit the form programmatically if it's valid
        // In a real-world scenario, here you might submit the form data to a server
        // e.g., form.submit();
    }
});
