document.getElementById("login-form").addEventListener("submit", function(e) 
{
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Dummy login check
  if (username === "username" && email === "abc@gmail.com" && password === "password") {
    // Save to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    // Redirect after 1.5 seconds
    setTimeout(() => {
      window.location.href = "../Clothing_brand/main.html";
    }, 1500);
  } 
  else {
    message.style.color = "red";
    message.textContent = "Invalid credentials. Try again.";
  }
});
