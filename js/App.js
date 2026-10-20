var form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var age = document.getElementById("age").value;

    var valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("message").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        valid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmError").textContent = "Please confirm your password.";
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Passwords do not match.";
        valid = false;
    }

    if (age === "") {
        document.getElementById("ageError").textContent = "Age is required.";
        valid = false;
    } else if (Number(age) < 1 || Number(age) > 120 || !Number.isInteger(Number(age))) {
        document.getElementById("ageError").textContent = "Enter an age from 1 to 120.";
        valid = false;
    }

    if (valid) {
        document.getElementById("message").textContent = "Registration successful!";
        form.reset();
    }
});
