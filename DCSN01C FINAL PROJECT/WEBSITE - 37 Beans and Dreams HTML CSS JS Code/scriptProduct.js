// This function will handle the "Buy Now" button click event
function handleBuyNow(productName) {
    // Scroll to the sign-up and order section
    const bookingSection = document.getElementById('booking-section');
    bookingSection.scrollIntoView({ behavior: 'smooth' });

    // Set the product value in the order form automatically based on the button clicked
    document.getElementById('product').value = productName;

    // Pre-fill the quantity field (optional, can be set to 1 by default)
    document.getElementById('quantity').value = 1;
}

// This function will validate the form and prevent submission if any required fields are missing
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collecting the form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const orderDate = document.getElementById('order-date').value.trim();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const deliveryMethod = document.getElementById('delivery-method').value;
    
    // Check if any required fields are empty
    if (!name || !email || !phone || !address || !orderDate || !product || !quantity) {
        alert("Please fill out all the required fields.");
        return; // Don't submit the form
    }

    // Handle delivery method check for pickup
    if (deliveryMethod === "pickup" && !document.getElementById('pickup-location').value) {
        alert("Please select a pickup location.");
        return; // Don't submit the form
    }

    // If everything is valid, submit the form (can be handled as needed)
    alert("Order successfully placed! Thank you for your purchase.");
    document.getElementById('booking-form').reset(); // Reset the form
}

// Function to toggle the visibility of the pickup location field based on the delivery method
function toggleAddressField() {
    const deliveryMethod = document.getElementById('delivery-method').value;
    const pickupAddress = document.getElementById('pickup-address');

    if (deliveryMethod === "pickup") {
        pickupAddress.style.display = "block"; // Show the pickup address field
    } else {
        pickupAddress.style.display = "none"; // Hide it for delivery
    }
}

// Event listener for form submission
document.getElementById('booking-form').addEventListener('submit', validateForm);
