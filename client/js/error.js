document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email") ? document.getElementById("email").value.trim() : '';
    const password = document.getElementById("password") ? document.getElementById("password").value.trim() : '';
    const confirmPassword = document.getElementById("confirmPassword") ? document.getElementById("confirmPassword").value.trim() : '';

    clearErrors();

    if (!validateEmail(email)) {
        showError("emailError", "Invalid e-mail address");
    }

    if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters long.");
    }

    if (password && confirmPassword && password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
    }

    if (validateEmail(email) && password.length >= 6 && password === confirmPassword) {
        alert("Form submitted successfully!");
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.style.display = "block";
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error_message");
    errorElements.forEach(function(element) {
        element.style.display = "none";
        element.textContent = "";
    });
}
