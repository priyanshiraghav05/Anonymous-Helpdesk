function loggedIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "username" && password === "password") {
      document.getElementById("loginMessage").classList.remove("hidden");
      return false; // Prevent form submission for this example
    } else {
      alert("Invalid username or password");
      return false;
    }
  }
  