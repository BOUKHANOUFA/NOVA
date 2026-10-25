const bouton = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

bouton.addEventListener("click", () => {
    console.log("Menu cliqué");
    menu.classList.toggle("active");
});