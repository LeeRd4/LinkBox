const role = localStorage.getItem("role");

if (role !== "admin" && role !== "visitor") {
  window.location.href = "index.html";
}

const isAdmin = role === "admin";

document.querySelectorAll(".admin-only").forEach(el => {
  el.style.display = isAdmin ? "block" : "none";
});

let projets = JSON.parse(localStorage.getItem("projets")) || [];

function render() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";

  projets.forEach((p, i) => {
    const div = document.createElement("div");
    div.textContent = p.nom;
    div.onclick = () => {
      document.getElementById("viewer").src = p.url;
      document.getElementById("project-title").textContent = p.nom;
    };
    list.appendChild(div);
  });
}

document.getElementById("add-btn")?.addEventListener("click", () => {
  const nom = prompt("Nom du projet");
  const url = prompt("URL GitHub Pages");
  if (nom && url) {
    projets.push({ nom, url });
    localStorage.setItem("projets", JSON.stringify(projets));
    render();
  }
});

document.getElementById("logout-btn").onclick = () => {
  localStorage.removeItem("role");
  window.location.href = "index.html";
};

render();