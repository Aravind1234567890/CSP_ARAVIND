function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    let isValid = true;
  
    // Clear any previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
  
    // Validate username (minimum 4 characters)
    if (username.length < 4) {
      document.getElementById("usernameError").textContent =
        "Username must be at least 4 characters long.";
      isValid = false;
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      isValid = false;
    }
  
    // Validate password (minimum 6 characters)
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long.";
      isValid = false;
    }
  
    // Validate password confirmation
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      isValid = false;
    }
  
    return isValid;
  }
  