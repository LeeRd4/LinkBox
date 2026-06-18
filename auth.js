const DEFAULT_ADMIN_USER = "admin";
const DEFAULT_ADMIN_PASS = "1993";

document.getElementById("visitor-btn").addEventListener("click", () => {
  localStorage.setItem("role", "visitor");
  window.location.href = "app.html";
});

document.addEventListener("DOMContentLoaded", () => {

  // récupération des éléments
  const loginBtn = document.getElementById("login-btn");
  const passwordInput = document.getElementById("password");
  const adminPanel = document.getElementById("admin-panel");

  // sécurité si élément manquant
  if (!loginBtn || !passwordInput) {
    console.log("Erreur : éléments login introuvables");
    return;
  }

  // clic bouton login
  loginBtn.addEventListener("click", () => {

    const password = passwordInput.value;

    if (password === "1234") {
      console.log("ADMIN connecté");

      if (adminPanel) {
        adminPanel.classList.remove("hidden");
      }

    } else {
      console.log("VISITEUR");

      if (adminPanel) {
        adminPanel.classList.add("hidden");
      }
    }
  });

  // ENTER pour valider
  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      loginBtn.click();
    }
  });

});
