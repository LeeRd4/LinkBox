const DEFAULT_ADMIN_USER = "admin";
const DEFAULT_ADMIN_PASS = "1993";

document.getElementById("visitor-btn").addEventListener("click", () => {
  localStorage.setItem("role", "visitor");
  window.location.href = "app.html";
});

document.getElementById("admin-btn").addEventListener("click", () => {
  const user = document.getElementById("login-input").value;
  const pass = document.getElementById("password-input").value;

  if (user === DEFAULT_ADMIN_USER && pass === DEFAULT_ADMIN_PASS) {
    localStorage.setItem("role", "admin");
    window.location.href = "app.html";
  } else {
    alert("Identifiants incorrects");
  }
});