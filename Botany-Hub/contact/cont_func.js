document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let successMsg = document.getElementById("successMsg");

    // Basic validation
    if (!email.includes("@gmail.com")) {
        alert("Please enter a valid Gmail address");
        return;
    }

    if (phone.length < 10 || isNaN(phone)) {
        alert("Enter a valid contact number");
        return;
    }

    if (message.trim() === "") {
        alert("Query cannot be empty");
        return;
    }

    // Success message
    successMsg.textContent = "Your message has been sent successfully!";
    
    // Clear form
    document.getElementById("contactForm").reset();
});