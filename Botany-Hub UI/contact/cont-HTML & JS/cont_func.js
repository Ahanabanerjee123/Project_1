const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
        showMessage("❌ Enter a valid email address", "red");
        return;
    }

    // Phone validation (10 digits only)
    if (!/^[0-9]{10}$/.test(phone)) {
        showMessage("❌ Enter a valid 10-digit phone number", "red");
        return;
    }

    // Message validation
    if (message === "") {
        showMessage("❌ Message cannot be empty", "red");
        return;
    }

    // Success
    showMessage("✅ Message sent successfully!", "green");

    // Reset form
    form.reset();
});

// Message display function
function showMessage(msg, color) {
    successMsg.textContent = msg;
    successMsg.style.color = color;

    // Smooth fade effect
    successMsg.style.opacity = "0";
    setTimeout(() => {
        successMsg.style.opacity = "1";
    }, 100);
}