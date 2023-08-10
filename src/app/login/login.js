function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let isValid = true;
  
    // Clear any previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  
    // Validate username (minimum 4 characters)
    if (username.length < 4) {
      document.getElementById("usernameError").textContent =
        "Username must be at least 4 characters long.";
      isValid = false;
    }
  
    // Validate password (minimum 6 characters)
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long.";
      isValid = false;
    }
  
    return isValid;
  }
  